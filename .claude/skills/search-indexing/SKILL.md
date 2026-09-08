---
name: search-indexing
description: Diagnose Google and Bing search indexing issues, audit robots/noindex/canonicals/sitemaps, and verify fixes using seo-toolkit. Use for missing search pages or index coverage, not SQL or database indexes.
license: MIT
metadata:
  version: "1.0.0"
---

# Search indexing

Turn evidence into the smallest justified fix. Discovery, crawling, indexing,
ranking, traffic and citations are separate outcomes. A submission receipt
does not prove any later outcome.

## Establish the property

Read the target site's AGENTS.md/CLAUDE.md, relevant project decisions,
marketing context and compliance canon. Re-check source and live state before
editing. Use the real website repository for website changes.

Locate a verified `metabotprime/seo-toolkit` checkout from project context or
`TOOLKIT_DIR`. Read its README and `config/<property>.json`. A website with this
skill installed is not itself the toolkit root. Missing API access prevents
engine measurement, but public HTML checks can still proceed.

Classify representative URLs by intended outcome: public canonical page,
duplicate, migration redirect, retired URL, or private/utility page. Preserve
fixed panels and migration targets. Do not copy another site's panels, freeze,
scope split or success threshold. Never reset a baseline to hide a regression.

## Measure before changing

From the toolkit root, replace `PROPERTY` with the verified config name:

```bash
python3 inspect-coverage.py --property PROPERTY --preflight
python3 inspect-coverage.py --property PROPERTY --dry-run
python3 search-analytics.py --property PROPERTY --dry-run
python3 bing-webmaster.py --property PROPERTY --preflight
python3 bing-webmaster.py --property PROPERTY --dry-run
```

Inspect panel size first. URL Inspection consumes quota even in dry-run; run
large panels in the background. Dry-run suppresses baselines; use ordinary
runs when saving a new comparison baseline is intended. A first sitemap-panel
dry-run can still create `toolkit-panel.json` to fix its cohort. Keep per-property GSC
credentials at Full, not Owner; see the toolkit's dated GSC setup note.

URL Inspection API describes Google's indexed version, not a fresh live test.
Separately check live GET status, redirect hops, headers, HTML robots/canonical,
rendered main content, crawlable internal links and sitemap membership. Use
Search Console's live test where available. Record timestamps and exact engine
states; obtain selected-canonical details from the UI/export when needed, since
the compact toolkit CLI does not expose every inspection field.

## Diagnose the observed state

| State | Evidence and appropriate action |
|---|---|
| Discovered, currently not indexed | Known URL, not proof of poor content. Check discovery links, host availability and duplicate URL proliferation. |
| Crawled, currently not indexed | Compare live/indexed content, rendering, usefulness and canonical choice. Google says this state alone needs no resubmission. |
| Unexpected noindex | Find the served header/meta source, including inherited template settings. Remove only where inclusion is intended. |
| Blocked by robots.txt | Check the matching bot group and CDN/WAF separately. A crawler must fetch a page to read its noindex; robots blocking is not removal. |
| Duplicate/alternate canonical | Confirm the destination is intended. Align internal links, sitemap and canonical signals; Google can select a different canonical. |
| Page with redirect | Verify a direct permanent redirect to the relevant live target. A migration panel may expect this. |
| Redirect error | Check loops, excessive chains and invalid targets. This is not a successful migration redirect. |
| 404/410 or soft 404 | Missing content needs an appropriate status, or a relevant replacement redirect. A useful 200 page needs substantive content. |
| Indexed, little traffic | Investigate query demand, intent, content, links and conversion. Additional submissions do not fix a ranking problem. |
| Rendering assets excluded | Usually not a page-indexing defect. Keep CSS/JS needed by public pages crawlable. |

Use current [Page indexing report definitions](https://support.google.com/webmasters/answer/7440203).
`site:` searches are spot checks, not complete coverage inventories.

## Choose controls deliberately

- Private content and staging need authentication/access controls. Neither
  noindex nor robots.txt is security. Nofollow concerns links, not removal of
  the current page. See [content controls](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share)
  and [robots directives](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).
- Use consistent canonicals for duplicates; do not substitute noindex for
  consolidation or canonicalize distinct pagination to page one. Do not
  blanket-noindex legal pages, signup pages or useful filters based on names.
  See [canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
- Before removal, inspect traffic, backlinks and conversions. Use a direct
  301/308 for a relevant permanent replacement, or 404/410 when gone without
  one. Clean up sitemap/internal links. Temporary search removals are not a
  permanent content/status decision.

## Publish, discover and verify

Keep sitemaps to intended canonical, indexable URLs. Derive `lastmod` from
significant page changes, not deploy time. Google ignores `priority` and
`changefreq`. The toolkit currently supports only a flat `/sitemap.xml`
urlset; do not flatten a legitimate large sitemap estate to fit the tool.
See [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

After a meaningful fix, verify the deployed URL and links. For Google, use
sitemaps for discovery and, when warranted, the Search Console UI request for
a few managed URLs. Repeated requests do not accelerate crawling. URL
Inspection API is read-only. The Google Indexing API remains excluded here;
the dated freeze review is not automatic permission to enable it. See
[Google recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

For authorized IndexNow submissions, preview the existing submitter:

```bash
node indexnow-submit.mjs --property PROPERTY --dry-run
```

Review selected URLs, live key, truthful lastmod, freeze exclusions and batch
size. Execute without dry-run only when submission is within the user's scope.
Never turn deployment into `--all`, lift freezes, or add Bing SubmitUrlBatch
as a second submitter. HTTP 200 is a receipt; HTTP 202 means key validation is
pending. Neither proves indexing. IndexNow does not reach Google.

The protocol supports deletions, but this submitter only permits URLs still
in the sitemap. Do not re-add retired URLs to force notification. Follow up
through engine reports. See [IndexNow documentation](https://www.indexnow.org/documentation).

Report URL, intended state, evidence, source fix, deployed verification and
pending engine outcome. Surface API failures and missing data. Set a suitable
follow-up comparison window without promising an indexing date or attributing
Google movement to an IndexNow ping.

Adapted from kostja94's indexing skill. See [provenance](references/provenance.md)
and [MIT notice](LICENSE). Primary documentation checked 2026-09-08; refresh
before changing crawler policy or engine submission behavior.
