#!/usr/bin/env python3
"""Read-only crawl of the public sitemap, metadata, robots and internal links."""
import argparse
import concurrent.futures
import datetime
import json
import sys
import urllib.error
import urllib.parse
import urllib.request
import urllib.robotparser
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta, self.canonical, self.links = {}, [], []
        self.title, self.h1, self.in_title = '', 0, False
        self.in_schema, self.schema_text, self.schemas, self.schema_errors = False, '', [], []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property', '')).lower()] = attrs.get('content', '')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical.append(attrs.get('href'))
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.in_title = True
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema, self.schema_text = True, ''

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.in_schema:
            try:
                self.schemas.append(json.loads(self.schema_text))
            except ValueError as exc:
                self.schema_errors.append(str(exc))
            self.in_schema = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_schema:
            self.schema_text += data


def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'PawBite-SEO-Audit/1.0'})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.status, response.url, dict(response.headers), response.read().decode()


def inspect(url):
    try:
        status, final, headers, html = fetch(url)
        page = Page()
        page.feed(html)
        return dict(url=url, status=status, final=final, headers=headers, title=page.title,
                    meta=page.meta, canonical=page.canonical, links=page.links, h1=page.h1,
                    schema_errors=page.schema_errors)
    except Exception as exc:
        return dict(url=url, error=str(exc))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--origin', default='https://www.pawbite.com')
    parser.add_argument('--output', default='/tmp/pawbite-seo-audit.json')
    args = parser.parse_args()
    origin = args.origin.rstrip('/')
    _, _, _, xml = fetch(origin + '/sitemap.xml')
    root = ET.fromstring(xml)
    if root.tag.split('}')[-1] != 'urlset':
        raise RuntimeError('Expected a flat sitemap urlset.')
    urls = [node.text for node in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    if not urls or any(urllib.parse.urlsplit(u).netloc != urllib.parse.urlsplit(origin).netloc for u in urls):
        raise RuntimeError('Empty or off-host sitemap. Refusing crawl.')
    _, _, _, robots_text = fetch(origin + '/robots.txt')
    robots = urllib.robotparser.RobotFileParser()
    robots.parse(robots_text.splitlines())
    issues = []
    if len(set(urls)) != len(urls):
        issues.append(dict(url=origin + '/sitemap.xml', issue='Duplicate URLs'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        rows = list(pool.map(inspect, urls))
        known = {row['url'].rstrip('/'): row for row in rows}
        inbound = set()
        for row in rows:
            for href in row.get('links', []):
                link = urllib.parse.urlsplit(urllib.parse.urljoin(row['url'], href))
                if link.netloc == urllib.parse.urlsplit(origin).netloc:
                    inbound.add(urllib.parse.urlunsplit((link.scheme, link.netloc, link.path, '', '')).rstrip('/'))
        extra = sorted(inbound - known.keys())
        link_rows = list(pool.map(inspect, extra))
    for row in rows:
        url = row['url']
        checks = {
            'HTTP failure or redirect': row.get('status') != 200 or row.get('final', '').rstrip('/') != url.rstrip('/'),
            'Canonical does not match sitemap': row.get('canonical') != [url],
            'Missing title or description': not row.get('title') or not row.get('meta', {}).get('description'),
            'Missing primary heading': row.get('h1', 0) == 0,
            'Invalid JSON-LD': bool(row.get('schema_errors')),
            'No internal discovery link': url.rstrip('/') != origin and url.rstrip('/') not in inbound,
        }
        for bot in ('Googlebot', 'bingbot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot'):
            checks['Robots excludes ' + bot] = not robots.can_fetch(bot, url)
        directives = ' '.join(row.get('meta', {}).get(k, '') for k in ('robots', 'googlebot', 'bingbot'))
        directives += ' ' + ' '.join(v for k, v in row.get('headers', {}).items() if k.lower() == 'x-robots-tag')
        checks['Unexpected noindex'] = 'noindex' in directives.lower()
        issues.extend(dict(url=url, issue=issue) for issue, failed in checks.items() if failed)
    issues.extend(dict(url=row['url'], issue='Broken internal link', detail=row.get('error'))
                  for row in link_rows if row.get('status') != 200)
    report = dict(at=datetime.datetime.now(datetime.timezone.utc).isoformat(), origin=origin,
                  sitemap_pages=len(rows), extra_internal_links=len(link_rows), issues=issues, pages=rows,
                  extra_pages=link_rows, note='Public crawl only. This is not engine index or ranking evidence.')
    Path(args.output).write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({k: report[k] for k in ('origin', 'sitemap_pages', 'extra_internal_links', 'issues')}, indent=2))
    print('Report:', args.output)
    return 2 if issues else 0


if __name__ == '__main__':
    sys.exit(main())
