# PawBite search discovery

PawBite's primary origin is **https://www.pawbite.com**. The apex redirects to
www. The Vercel deployment alias redirects to the same path on the custom
domain, including its query string. `lib/seo.tsx` defines this origin centrally;
an obsolete NEXT_PUBLIC_SITE_URL deployment variable cannot override it.

## What is integrated

| Component | Behavior |
| --- | --- |
| Sitemap | 94 canonical public URLs; utility pages and retired comparison articles excluded |
| Dates | Editorial byline.updatedDate and known product/home edit dates; unknown dates omitted |
| Robots | Public content available to web and AI crawlers; utility-path restrictions shared consistently |
| IndexNow | Dedicated public root key, host www.pawbite.com, per-property deduplication state |
| Bing | Ownership proof in public/BingSiteAuth.xml; verification required before reporting |
| Google | Optional GOOGLE_SITE_VERIFICATION metadata; dedicated API credential required for reports |
| Agent skills | Reviewed search-indexing and ai-search-visibility workflows for Codex and Claude |
| Audit | Read-only sitemap crawl checks HTTP, canonical, metadata, noindex, robots, JSON-LD and internal links |

The toolkit is maintained separately at https://github.com/metabotprime/seo-toolkit.
Skills were copied verbatim from `8b73694f6c8336b54b3398750d51c6484ae902fb`.
The PawBite configuration and Bing verification fix use toolkit revision
`8f743c15bce205f552baf83e901384f80ecce3fd`.

## Local runtime

This machine uses `/Users/christosi/.local/share/pawbite/seo-toolkit` and the
Python environment `/Users/christosi/.local/share/pawbite/seo-venv`. Node 20
comes from the site's normal runtime. No paid service or schedule was added.

On another machine, clone the toolkit outside the site, check out the reviewed
revision containing config/pawbite.json, and point TOOLKIT_DIR there. Install
`google-auth` and `requests` into a maintained Python environment and set
SEO_PYTHON to that interpreter. Neither environment belongs in git.

```bash
export TOOLKIT_DIR=/absolute/path/to/seo-toolkit
export SEO_PYTHON=/absolute/path/to/venv/bin/python3
npm run seo:audit
npm run seo -- coverage --preflight
npm run seo -- bing --preflight
npm run seo -- indexnow --dry-run
```

## Google account setup

Verify either a domain property for `pawbite.com` or the URL-prefix property
`https://www.pawbite.com/` in Search Console. A URL-prefix HTML-tag token can be
set as GOOGLE_SITE_VERIFICATION in Vercel and deployed. Do not register the
Vercel alias. Submit `https://www.pawbite.com/sitemap.xml` through Search Console.
The robots.txt sitemap line already provides public discovery, but it does not
prove that Google fetched or indexed the site.

For the reporting scripts, create a PawBite-specific service-account key at
`~/.config/pawbite/gsc-key.json`, mode 0600. Grant the service account **Full**
access to this Search Console property, never Owner. Do not reuse another
brand's key or enable the Google Indexing API. Run coverage preflight, then set
config.gsc.site to the exact verified site string it returns. Until then the
config intentionally says TODO and no Google baseline is claimed.

## Submissions and measurement

After meaningful changes, deploy and verify the affected live pages first.
Run the audit and IndexNow dry-run, review the exact selected set, then submit:

```bash
npm run seo:audit
npm run seo -- indexnow --dry-run
npm run seo -- indexnow
```

The first default run selects new sitemap URLs. Later runs skip unchanged URLs.
Do not use `--all` as a deployment hook. For a changed page whose lastmod is
unknown, use `--url /the-page` after reviewing the live update. State and receipt
history are stored at `~/.config/pawbite/indexnow-state.json`. HTTP 200 means
received for submission; 202 means pending key validation. Neither is indexing.
IndexNow does not submit to Google.

Once credentials pass preflight, establish the first engine baselines:

```bash
npm run seo -- coverage
npm run seo -- traffic
npm run seo -- bing
```

Coverage tracks the fixed 12-URL cohort in config/pawbite.json. Compare the same
cohort later; do not reset baselines to hide regressions. Search Analytics uses
undimensioned totals and available top rows, not an exhaustive query inventory.
No keyword volume, traffic increase or AI citation is assumed from installation.
Use real query evidence to prioritize improvements to existing content. The
site's veterinary review and commerce launch gates remain in force.

## Verification record

On 2026-09-08, the old deployment's 94 sitemap URLs passed the public crawl.
The custom domain was serving those pages with canonical tags and a sitemap
pointing to the Vercel alias. This release corrects that cross-domain conflict.
The old unverified Bing alias registration created during setup was removed;
only the intended www.pawbite.com property is being configured.

The Bing toolkit preflight previously called every registered site verified.
It now requires the actual IsVerified boolean before spending report requests.
Google's baseline remains unavailable until the account setup above is complete.
Deployment receipts and the final live audit are saved outside the repository.

Primary references: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[IndexNow protocol](https://www.indexnow.org/documentation),
[Bing site verification](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b).
