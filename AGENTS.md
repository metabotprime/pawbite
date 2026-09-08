# PawBite project context

- Public origin: **https://www.pawbite.com**. The apex pawbite.com redirects to www.
  Keep metadata, sitemap, robots, structured data, and submissions on this origin.
  The pawbite-zeta.vercel.app host is a deployment alias, not the search property.
- Preserve the repo's product prices, formulas, counts and pre-launch checkout gate.
- Veterinary review is pending. Do not introduce invented people, reviews,
  certifications or a claim that a finished product has clinical proof.
- Follow the user's global worktree, explicit staging, test and deployment rules.

## SEO toolkit

- Toolkit repository: https://github.com/metabotprime/seo-toolkit
- Local toolkit worktree: `/Users/christosi/.local/share/pawbite/seo-toolkit`
- Property config: `pawbite`
- Reviewed skills source: `8b73694f6c8336b54b3398750d51c6484ae902fb`
- PawBite integration and Bing ownership fix: `8f743c1` (full revision in docs/SEO.md).
- Both reviewed skills are installed under `.agents/skills/` and `.claude/skills/`.
  Use search-indexing for coverage and ai-search-visibility for AI citations.
- Read `docs/SEO.md` before submissions. `npm run seo -- ...` runs the shared
  instruments; it does not install credentials. Set TOOLKIT_DIR to use another
  reviewed checkout containing config/pawbite.json.
- Credentials and baselines stay outside git at `~/.config/pawbite`.
- No Google Indexing API, automatic full sitemap pings, or scheduled work without
  an explicit request. A submission receipt is not evidence of indexing.
- Keep sitemap lastmod truthful: content uses byline.updatedDate; known page
  edits use maintained dates; omit unknown dates. Never use the build time.
