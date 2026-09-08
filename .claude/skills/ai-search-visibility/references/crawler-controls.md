# Crawler controls

Checked 2026-09-08. Re-check vendor documentation before policy changes;
user agents, IP ranges and behavior can change. This is not a robots.txt
template to paste onto every site.

| Control | Documented purpose | Visibility decision |
|---|---|---|
| Googlebot | Google Search, including AI Overviews/AI Mode | Check crawl access, indexed state and snippet eligibility. |
| Google-Extended | Certain Gemini training and grounding uses | Separate policy decision; not Google Search inclusion/ranking. No separate HTTP user agent. |
| OAI-SearchBot | ChatGPT search discovery | Permit intended public content and verified traffic when search visibility is desired. |
| GPTBot | OpenAI model training | Independent of OAI-SearchBot. Blocking training does not require blocking search. |
| ChatGPT-User | Some user-initiated retrieval | Not the search indexing switch; robots rules may not apply. |
| PerplexityBot | Perplexity search discovery | Not a foundation-model training crawler. |
| Perplexity-User | User-initiated retrieval | Generally ignores robots.txt per vendor docs. |
| Claude-SearchBot | Claude search optimization/indexing | Audit separately from ClaudeBot. |
| Claude-User | User-directed access | Blocking can prevent retrieval for user queries. |
| ClaudeBot | Anthropic model development/training | Separate from search and user agents. |

Sources: [Google AI features](https://developers.google.com/search/docs/appearance/ai-features),
[Google crawler definitions](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers),
[OpenAI crawlers](https://developers.openai.com/api/docs/bots),
[Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers),
[Anthropic crawlers](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler).

Inspect existing robots groups and training preferences. A specific bot group
may supersede the wildcard group: preserve applicable restrictions in the
matching group and test public and excluded paths. Avoid blanket Allow rules.

Check CDN/WAF separately; robots.txt cannot fix a 403/challenge. A forged
user-agent string is not bot identity. Use vendor verification instructions
and current published IP sources where available. Do not allow arbitrary
requests because they claim a bot name.

Access enables discovery or retrieval. Only observed output establishes a
citation. Training permission does not purchase visibility.
