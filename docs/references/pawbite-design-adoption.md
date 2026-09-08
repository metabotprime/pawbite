# PawBite reference design adoption

Source: https://pawbite-site.vercel.app, crawled September 8, 2026.

The owner requested a design adoption while explicitly keeping this repository’s product details. This supersedes the older forest-green homepage direction in the original design specification.

## Crawl and reuse

The public link crawl captured 93 pages with HTTP 200 responses and inventoried 60 unique image URLs. See `pawbite-site-crawl.json` for the route inventory. The full HTML/text capture and asset manifest are available locally in `/tmp/pawbite-reference/`; that temporary archive is not needed to build or serve the site.

| Reference element                                            | Implementation decision                                                                               |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Cobalt, cream, warm accent colors                            | Adopted through the existing theme tokens, so shared components stay consistent                       |
| Large uppercase headlines with italic serif accents          | Recreated with the repo’s existing Inter and Fraunces fonts; no new font license or dependency        |
| PawBite wordmark                                             | Reused the six original vector paths, including the supplied mark, in `components/brand/wordmark.tsx` |
| Three-product hero                                           | Adopted as a manually selectable hero with accessible pressed states and real product-page links      |
| Product tins                                                 | Kept existing repo renders because the reference packaging conflicts with current product counts      |
| Dog photo wall and customer captions                         | Omitted because real customer identities and image provenance are not established                     |
| Ingredient, quiz, editorial, and oversized wordmark sections | Rebuilt for the existing formula data and content routes                                              |
| Waitlist                                                     | Replaced the repo’s simulated success form with an email contact action; no signup backend exists     |
| Merch                                                        | Not imported; products and prices are outside the confirmed repository catalog                        |
| Shipping dates, prices, guarantees, country of manufacture   | Kept the repo’s details; did not import the reference’s conflicting or expired claims                 |
| Named vet quotes and certification badges                    | Not imported; placeholder vet remains gated and certifications need evidence                          |

## Integrity and navigation fixes

- Removed the AI stand-in founder portrait and unsupported named-vet claims from About. Homepage now leads with products.
- Journal cards derive from actual blog entries, fixing the missing joint article link; named reviewers remain behind `VET_REVIEW_LIVE`.
- Ingredient hub labels resolve actual product names, including Calm.
- Consolidated the two retired comparison blog posts into `/vs/vs-cosequin` and `/vs/vs-petlab`, preserving unique FAQ topics with conservative answers. Explicit HTTP 301 redirects preserve the old URLs. The content arrays automatically remove old URLs from the learn hub, sitemap, and llms.txt.
- Corrected the Cosequin comparison’s blanket assertion that the supplement cannot interact with NSAIDs.
- Removed the quiz email gate and locally generated discount code. Results are available without collecting email or promising a message that cannot be sent.
- Hidden sticky-bar links are no longer keyboard-focusable, and the pre-launch CTA says “Preview the Duo.”
- Added a skip link, reduced-motion support, explicit product-selector labels, and pressed states for PDP purchase options.

`data/products.ts`, product formulas, dosing, checkout flag, and vet-review flag are unchanged. Expected build output is 107 static pages, down from 109 after retiring two duplicate pages.

## Remaining handoff work

The full citation backfill, new Calm educational content, sitewide related-content wiring, breadcrumb and hub schemas, dedicated content descriptions, stable sitemap dates, and breed-content expansion are separate remaining editorial/SEO work. This design pass does not certify existing medical or competitor claims sitewide.

No checkout or email collection backend was added. The unused `public/products/trio.png` in the shared checkout was left untouched.

## Deployment finding

Live probes during this pass found that `https://pawbite.com` returns HTTP 302 to `https://www.atom.com/name/PawBite`, and `https://pawbite.vercel.app` returns HTTP 500 from a different-looking application. Neither is a verified public host for this repo. GitHub’s last successful deployment points to `https://pawbite-2317tzdyg-trimi1.vercel.app`, which is protected by Vercel SSO. GitHub’s repository homepage identifies `https://pawbite-zeta.vercel.app`, which was verified to serve this repository with HTTP 200. Its old canonical pointed to the parked domain. The fallback now uses this verified public host; `NEXT_PUBLIC_SITE_URL` remains available for a connected custom domain.

Durable raw scrape archive: `/Users/christosi/Documents/New project/artifacts/pawbite-reference-2026-09-08.zip`.

## Validation

- Node 20.20.2; TypeScript, ESLint, formatting, and all 11 tests pass.
- esbuild parses all changed TSX files.
- Production build generates 107 static pages; the existing query-driven quiz results route remains server-rendered.
- Nine generated pages checked, covering 55 internal destinations and four image files, with no broken references in that sample.
- Both retired article URLs return HTTP 301 to their published comparison and preserve query parameters.
- Desktop and 390-pixel mobile checks cover navigation, Escape dismissal, product selection, and horizontal overflow.
- Calm’s rendered Product schema retains PreOrder availability and the original $27 subscription / $34 one-time range.

## Product photo follow-up

The owner subsequently requested the friend’s actual product photos. The three original PNGs from `https://pawbite-site.vercel.app/product/` are now self-hosted under `public/products/reference/`. Homepage, cards, product pages, and social/product metadata use these assets. The Daily Duo displays the Probiotic and Hip + Joint photos together in the page layout. The PNGs are unchanged; their intrinsic dimensions are respected.

This supersedes the table’s earlier decision to retain the original renders. Pricing, formulas, dosing, and product count data remain unchanged. The supplied artwork visibly says 80 chews for Probiotic and Calm, and 50 for Hip + Joint; these differ from the repo’s 30, 30, and 60 counts. That artwork discrepancy was reported to the owner. No packaging text was edited or product facts inferred from the photos.
