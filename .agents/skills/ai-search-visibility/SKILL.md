---
name: ai-search-visibility
description: Improve and measure website visibility in AI search through crawler access, useful sourced content, entity clarity and repeatable citation checks. Use for ChatGPT, Google AI features, Perplexity or Claude citations, not model training or guaranteed rankings.
metadata:
  version: "1.0.0"
---

# AI search visibility

Make useful public content accessible and verifiable, then measure what target
products actually cite. This original seo-toolkit workflow uses the linked
primary documentation, checked 2026-09-08.

## Establish context and access

Read the site's AGENTS.md/CLAUDE.md, marketing context, rejected tactics and
compliance canon. Identify the real repository, canonical domain, audience,
priority queries and conversion goal from available context. Use free or
already-paid tools; do not buy monitoring or spend API credits without an
approved line item.

For blocked or missing pages, diagnose indexability first with `search-indexing`
if installed, or the toolkit README and public HTML checks. Locate the toolkit
checkout explicitly; installing a skill does not install its instruments or
provide access to search accounts.

Read [crawler controls](references/crawler-controls.md) before changing robots
or CDN/WAF rules. Search, user retrieval and training have separate controls.
Preserve the site's training policy unless the requested change covers it.

Check GET responses, rendering, semantic HTML, descriptive headings, links,
canonical, robots and snippet restrictions. A request with a bot user-agent
only tests that request path; it does not prove authentic crawler access.
Use verified crawler logs/provider diagnostics where available. Scope WAF
exceptions to verified bots/public paths, retaining private access controls.

Google AI Overviews/AI Mode require indexed, snippet-eligible pages. Google
documents no extra AI file or special schema requirement. Follow Search
fundamentals. See [Google AI features](https://developers.google.com/search/docs/appearance/ai-features).

## Improve pages people need

Prioritize relevant existing pages with demonstrated demand. Use Search
Console queries/pages, current results, customer questions and already-paid
Ahrefs access when available. Missing tools limit evidence; never invent
keyword volume or rankings.

- Answer the actual question clearly. Use headings, comparison tables or
  steps when helpful; no universal answer length guarantees citations.
- Add original, supportable details: real service/product facts, methods,
  first-hand observations, primary sources and genuine authorship/expertise.
  Date claims honestly; change update dates only after meaningful review.
- Keep entity names, authors, contact details, service areas and pricing units
  consistent across pages and genuine profiles. Structured data must match
  visible content; validate syntax and current engine eligibility.
- Connect pages with useful navigation/internal links. Consolidate redundant
  content. New pages need distinct intent and real value; do not manufacture
  location pages or keyword variants at scale.
- Assess authentic independent mentions. Never fabricate people, reviews,
  quotations, sources or outreach activity. Sending outreach still needs
  authorization from the user.

For health/Rx sites, follow the site's compliance canon before publishing
patient content or proposing marketing platforms. Check prohibited categories
first and use genuine reviewers and supportable claims.

These are editorial priorities, not fixed ranking weights or promised uplifts.
See Google's [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
and [spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

Treat `llms.txt`, Markdown mirrors, knowledge bundles and agent protocols as
optional experiments for a documented consumer or explicit request. Do not
call them established citation factors, serve contradictory bot content, or
prioritize them over accessible HTML and useful information.

## Measure separate outcomes

Use a fixed panel of relevant branded and nonbranded prompts. Record exact
prompt, product/mode, date, language/location and evidence. Keep conditions
consistent and failures as missing observations. Repeat checks to expose
answer variability; one response does not prove general visibility or causation.

| Outcome | Evidence and limitation |
|---|---|
| Crawl/index state | Engine report or verified log. Access does not prove inclusion. |
| Citation | Explicit source link to the site and exact cited page. An unlinked brand mention is not a citation. |
| Mention/recommendation | Record both separately. A citation can accompany a competitor recommendation. |
| Organic traffic | Engine, window, clicks/impressions and query context. A change is not automatically caused by the last edit. |
| AI referrals/conversions | Analytics source and attribution method. Referrals miss no-click citations and some referrer data. |

Citation rate = answered observations with a site citation divided by answered
observations for that named panel/product/window. State sample size and missing
observations; errors are not zeroes. Preserve query-level results so prompt-mix
changes cannot manufacture uplift. Copy [the observation template](assets/citation-observations.md)
into the site's private evidence directory.

Google AI features are included in Search Console's Web performance totals;
do not label toolkit aggregates as isolated AI reporting. `search-analytics.py`
measures search totals, not citations. Pre-register the comparison window and
success metric. Compare like periods and useful controls; note seasonality
and concurrent changes that limit attribution.

Deliver prioritized page fixes with supporting URLs, the observed visibility
sample, completed verification and outstanding engine outcomes. Installing
this skill cannot guarantee traffic, rankings or citations.
