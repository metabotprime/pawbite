# PawBite — Site Design Spec

**Date:** 2026-05-06
**Status:** Locked. Pending writing-plans → implementation.
**⚠️ 2026-06-03 update:** Launch line expanded from 2 SKUs to **3** — a **Calming Chew** was added as SKU #3 after demand validation (see `2026-06-03-launch-product-validation.md`). Wherever this spec says "two products," the live site now ships three: Daily Probiotic, Hip + Joint, and Calm.
**Reference design (homepage, locked):** `/Users/christosi/Desktop/pawbite claude/designs/08-hybrid-favorite.html`
**Reference design (other candidates, for context):** `designs/01-modern-storefront.html` through `designs/07-playful-illustration.html`, indexed in `designs/index.html`

---

## Table of contents

1. Project overview
2. Brand foundation
3. Product line (2 SKUs + Daily Duo)
4. Information architecture (~105 pages at launch)
5. Content scope at launch
6. Homepage design (Design 8 hybrid — locked)
7. Page templates
8. Trust signal slot system
9. SEO + AI-citation patterns
10. Schema markup plan
11. Quiz design
12. Commerce flow
13. Tech stack recommendation
14. Imagery sourcing plan
15. Pre-launch checklist
16. Post-launch roadmap
17. Out of scope
18. Open questions

---

## 1. Project overview

### What this is
PawBite is a new DTC dog supplement brand launching with 2 SKUs (Daily Probiotic + Hip & Joint chews) plus a subscription bundle (The Daily Duo). The brand is positioned cute / fun / professional — charm on top, vet-formulated science under the hood.

### Goals
- Ship a complete brand site with full storefront, ~105-page content layer, quiz funnel, and customer portal
- Optimize for organic search **and AI-search citations** (ChatGPT, Claude, Perplexity, AI Overviews)
- Mirror Trimi's SEO architecture (proven pattern across the operator's portfolio)
- Subscription-first revenue model with tiered S&S discounts

### Operator portfolio context
This site joins a portfolio that includes trytrimi.com (telehealth) and uses the same Next.js + Tailwind stack as sibling projects (ketcare, genesis).

### Domain status
pawbite.com is currently parked on atom.com. **Acquisition needed before launch** — flagged for ops.

### Competitive landscape (reference)
| Brand | Archetype | Posture |
|---|---|---|
| PetLab Co. | Mass-market clinical | Aggressive % off, vet endorsements, "100K+ reviews" |
| Native Pet | Premium-natural | Vet nutritionist, whole-food, Whole Foods/Target retail |
| Finn | Modern lifestyle DTC | Color-coded canisters, quiz, soft offers |
| Zesty Paws | Mass-market accessible | 100+ SKUs, NASC + B-Corp, mass retail |
| Honest Paws | Wellness/holistic | CBD-led, USDA Organic, "peer-reviewed" |

PawBite slots between Finn (visual) and Native Pet (substance), with Trimi-style SEO discipline.

---

## 2. Brand foundation

### Identity
- **Name:** PawBite (capital B)
- **Altitude:** Cute / fun / professional
- **Hybrid reference:** Finn (visual energy) + Native Pet (substance) + Trimi (SEO discipline)

### Positioning statement (internal only)
> PawBite makes the essentials your dog actually needs — vet-formulated, transparent, and made to be the easiest part of their day.

### Tagline hierarchy
- **Homepage hero:** "The good stuff your dog needs. Nothing weird."
- **Ads + IG:** "Big dog energy, in a little daily chew."
- **Recurring badge / footer:** "Vet-formulated • Dog-approved"

### Brand voice
Friendly, plainspoken, lightly funny. First-person founder voice ("I started PawBite because Theo's gut was a wreck…"). We say "your dog" — never "pup" or "fur baby." Headlines can wink; ingredient panels can't. Treat the reader like an intelligent adult who loves their dog. Science is woven in, not bolted on. We cite strains by name, explain the gut-skin axis in two sentences, and don't say "powerful" or "supercharged."

**Voice anti-patterns (banned phrases):**
- "fur baby," "fur parent," "pawsitively," "ruff," any verb-form-of-paw
- "powerful," "supercharged," "premium-grade," "advanced," "ultra," "complete"
- "trust your dog to" / "your dog deserves" — sentimentality-as-selling

**Banned punctuation:**
- Exclamation marks in body copy (allowed in CTAs and headlines only — use sparingly)

### Visual system

**Palette (locked):**
| Token | Hex | Usage |
|---|---|---|
| Cream | `#F5EFE6` | Base/backgrounds, packaging fields |
| Forest | `#1F3A2E` | Wordmark, primary type, dark-mode bg |
| Terracotta | `#C8765B` | Primary CTAs (Add to Cart, Subscribe) |
| Warm yellow | `#E8B547` | Daily Probiotic accent, playful highlights, blobs |
| Pinky | `#F4B8A8` | Playful accent (illustrations, blobs, avatars) |
| Mint | `#B8D4C4` | Playful accent (Duo bundle band, secondary BG) |
| Off-white | `#FAFAFA` | Secondary backgrounds |
| Charcoal | `#2A2A2A` | Body text on cream |

**Typography (locked):**
| Family | Source | Usage |
|---|---|---|
| Bagel Fat One | Google Fonts | Wordmark only (the PawBite logotype) |
| Fraunces | Google Fonts | Headlines. Use the SOFT axis (variation `'SOFT' 100`) for the round/bouncy feel. Italic variations welcome. |
| Inter | Google Fonts | Body text, UI labels |
| Caveat | Google Fonts | Handwritten accents — founder signature, eyebrows ("A note from our founder —"), illustration callouts |
| JetBrains Mono | Google Fonts | Numerical data (strain names, CFU counts, mg values), lot numbers |

**Illustration system:**
- All illustrations are **custom inline SVG**. No clip-art. No emojis. No icon libraries.
- A shared SVG icon/illustration library: mascot, mailbox, hearts, sparkles, stars, bones, paws, stethoscope, blobs, dashed callout arrows, squiggle dividers, leaf, shield-check, truck, USA factory, dog avatars (multiple personalities).
- The illustrated dog mascot is the brand's IP — used consistently across the site.

**Photography policy (the "one real photo" rule):**
Real photos are reserved almost exclusively for the **founder polaroid** above the fold. All other "dog imagery" across the site is custom illustration. This protects the brand's cute/illustrated feel from becoming muddy when AI-generated or generic stock dog photos creep in. Exception: real product macro shots (PDP imagery) once we have physical product — they earn their place as authentic.

---

## 3. Product line (2 SKUs + Daily Duo)

### SKU 1 — Daily Probiotic
| Attribute | Value |
|---|---|
| Form | Soft chew, chicken flavor |
| Tagline | "Start with the gut." |
| Hero claim | "5 strains. 5 billion CFUs. Plus prebiotic and pumpkin." |
| CFU total | 5 billion per chew |
| Strain 1 | Bacillus coagulans GBI-30, 6086 — 1B CFU — gut barrier integrity (Kalman et al., 2009) |
| Strain 2 | Bifidobacterium animalis subsp. lactis BB-12 — 1B CFU — stool consistency (Eskesen et al., 2015) |
| Strain 3 | Lactobacillus acidophilus LA-5 — 1B CFU — pathogen exclusion (Saggioro, 2004) |
| Strain 4 | Lactobacillus plantarum 299v — 1B CFU — SCFA production (Nobaek et al., 2000) |
| Strain 5 | Lactobacillus rhamnosus GG — 1B CFU — immune modulation (Hatakka et al., 2001) |
| Plus | Chicory inulin 200mg (prebiotic), Pumpkin powder 250mg |
| Pack | 30 chews / 30-day supply, 1 chew/day all dog sizes |
| Retail | $32 |
| Subscribe & save (20%) | $26 |
| Packaging color band | Warm yellow `#E8B547` |

### SKU 2 — Hip + Joint
| Attribute | Value |
|---|---|
| Form | Soft chew, duck flavor (differentiates from Daily) |
| Tagline | "Built to keep moving." |
| Hero claim | "Clinically dosed glucosamine + chondroitin + MSM, with green-lipped mussel and turmeric." |
| Glucosamine HCl | 500mg per chew |
| Chondroitin sulfate | 400mg per chew |
| MSM | 250mg per chew |
| Green-lipped mussel | 150mg per chew |
| Turmeric (curcumin standardized) | 100mg per chew |
| Hyaluronic acid | 10mg per chew |
| Salmon oil omega-3 | 50mg EPA/DHA per chew |
| Pack | 60 chews / 30-day supply (2 chews/day for medium dog) |
| Retail | $38 |
| Subscribe & save (20%) | $30 |
| Packaging color band | Terracotta `#C8765B` |

### Bundle — The Daily Duo
| Attribute | Value |
|---|---|
| Contents | Daily Probiotic + Hip + Joint |
| Retail (sum of parts) | $70 |
| Bundle discount (15% off) | $59.50 |
| Bundle + Subscribe stack (32% off total) | **$47.60** |
| Packaging band | Mint `#B8D4C4` or forest `#1F3A2E` |
| Position | Default purchase recommendation; "What Theo takes daily"; "Most popular" badge |
| Constraint | Bundles ONLY at full discount via subscription. One-time bundle = bundle discount only, no S&S stack. |

### Roadmap SKUs (IA slots reserved, not built v1)
- **Calm** — calming chew at `/products/calm` (most likely SKU #3)
- **Multi** — multivitamin at `/products/multi`
- **Skin** — gut-skin axis chew at `/products/skin`
- **Daily Puppy** — `/products/daily-puppy`
- **Daily Senior** — `/products/daily-senior`

### Explicitly out of v1
Multivitamin, dental chews, CBD, standalone fish oil, cat SKUs, raw recipes. Each has a clear reason in Section 17.

---

## 4. Information architecture

105 pages at launch. Mirrors Trimi's URL pattern.

### Commerce (10 pages)
```
/                              Home
/products                      Collection (both SKUs)
/products/daily-probiotic      PDP
/products/hip-and-joint        PDP
/products/daily-duo            Bundle landing
/quiz                          Personalization quiz (5-question flow)
/quiz/results?id=...           Quiz output
/cart                          Cart
/checkout                      Shopify checkout
/account, /account/subscriptions    Customer portal
```

### Trust + brand (6 pages)
```
/about                         Founder story + mission
/vets                          Advisory board landing
/vets/[slug]                   Individual vet bios (3–5 at launch)
/science                       Cited studies, strain-level evidence
/reviews                       Review wall
/perks                         Subscriber benefits
```

### SEO content layer (~80 pages at launch)
```
/learn                         Learn hub landing
/learn/[slug]                  12–15 blog posts
/concerns                      Concerns hub
/concerns/[slug]               10 programmatic concern pages
/breeds                        Breed hub
/breeds/[slug]                 25 programmatic breed pages
/ingredients                   Ingredient glossary
/ingredients/[slug]            20 programmatic ingredient pages
/vs                            Comparison hub
/vs/[competitor]               4 competitor comparison pages
/dosing                        Calculator hub
/dosing/probiotic-calculator   Interactive dosage calculator
/dosing/joint-calculator       Interactive dosage calculator
/faq                           Full FAQ (FAQPage schema)
```

### Legal (5 pages)
```
/privacy, /terms, /shipping, /returns, /editorial
```

### Trimi pattern mappings

| Trimi pattern | PawBite equivalent | Function |
|---|---|---|
| `/treatments/[medication]` | `/products/[sku]` | PDP |
| `/blog/[A]-vs-[B]-2026` | `/learn/[A]-vs-[B]-2026` + `/vs/[competitor]` | Comparison content with date versioning |
| `/providers/[name]` | `/vets/[slug]` | E-E-A-T author bylines |
| `/states` programmatic | `/breeds/[slug]` programmatic | Long-tail scale |
| `/calculators/[type]` | `/dosing/[type]` | Interactive content (links + dwell time) |
| `/dosage-hub`, `/answers` | `/concerns`, `/learn` hubs | Topical authority clusters |
| FAQ + per-page Q&A | Same | FAQPage schema → AI Overview pull |

### Post-launch wave 2 (RESERVED — do not build in v1)
```
/best-probiotic-for-[breed]            × 100 breeds
/best-joint-supplement-for-[breed]     × 100 breeds
/probiotic-for-[concern]               × ~20 concerns
/joint-supplement-for-[concern]        × ~20 concerns
```
**~200+ pages.** Built after launch once we know what's converting from the 25 breed pages and 10 concern pages already live.

**User reminder:** Surface this list explicitly before any execute-phase that would attempt to build them.

---

## 5. Content scope at launch

### Blog posts (12–15) — prioritized by query volume × commercial intent

| # | Slug | Target query (est. monthly US) | Format |
|---|---|---|---|
| 1 | `signs-your-dog-needs-a-probiotic` | 8K | Listicle + FAQ |
| 2 | `best-dog-probiotic-2026` | 90K | Buyer's guide + comparison table |
| 3 | `probiotic-vs-prebiotic-vs-postbiotic-for-dogs` | 4K | Explainer + diagram |
| 4 | `how-long-does-it-take-for-probiotics-to-work-in-dogs` | 6K | Definitive answer + timeline |
| 5 | `cosequin-vs-pawbite-hip-joint` | 3K | Side-by-side comparison |
| 6 | `petlab-vs-pawbite-probiotic` | 2K | Side-by-side comparison |
| 7 | `is-my-dogs-poop-normal-color-chart` | 50K | Visual chart + interpretive guide |
| 8 | `signs-of-joint-pain-in-dogs` | 12K | Checklist + when-to-see-vet |
| 9 | `glucosamine-for-dogs-complete-guide` | 9K | Ingredient deep dive |
| 10 | `best-hip-and-joint-supplement-for-dogs-2026` | 22K | Buyer's guide |
| 11 | `do-dogs-need-probiotics` | 5K | Definitive yes/no + science |
| 12 | `gut-health-in-dogs-signs-of-imbalance` | 3K | Symptom guide |
| 13 | `probiotic-strains-for-dogs-explained` | 2K | Strain-by-strain table |
| 14 | `how-to-tell-if-your-dog-has-arthritis` | 8K | Symptom checklist |
| 15 | `puppy-vs-senior-dog-supplements-what-to-know` | 1.5K | Life-stage guide |

### Concern pages (10): /concerns/[slug]
loose-stool, gas-and-bloating, food-allergies, itchy-skin-and-coat, hip-pain, arthritis, slow-to-get-up, post-antibiotic-recovery, picky-eaters, sensitive-stomach

### Breed pages (25): /breeds/[slug]
labrador-retriever, golden-retriever, french-bulldog, poodle, bulldog, german-shepherd, dachshund, beagle, rottweiler, pointer, yorkshire-terrier, boxer, doodle, great-dane, siberian-husky, australian-shepherd, cavalier-king-charles-spaniel, mini-schnauzer, shih-tzu, bernese-mountain-dog, boston-terrier, pomeranian, havanese, shetland-sheepdog, brittany

### Ingredient pages (20): /ingredients/[slug]
bacillus-coagulans, bifidobacterium-animalis, lactobacillus-acidophilus, lactobacillus-plantarum, lactobacillus-rhamnosus, chicory-inulin, pumpkin-powder, glucosamine-hcl, chondroitin-sulfate, msm, green-lipped-mussel, turmeric-curcumin, hyaluronic-acid, salmon-oil-omega-3, quercetin, l-theanine, hemp, chamomile, ashwagandha, colostrum

### Competitor comparison pages (4): /vs/[competitor]
vs-petlab, vs-native-pet, vs-zesty-paws, vs-cosequin

---

## 6. Homepage design (Design 8 hybrid — locked)

**Reference file:** `/Users/christosi/Desktop/pawbite claude/designs/08-hybrid-favorite.html`

### Composition (13 sections in order)

1. **Welcome banner** — slim top strip, cream or soft terracotta. "Welcome offer: 30% off your first order + free shipping. Code WELCOME." No countdown. Tiny illustrated bone/paw at start.
2. **Sticky nav** — Bagel Fat One PawBite wordmark + small illustrated mascot accent. Nav: Shop, Quiz, Learn, About. Custom illustrated cart icon with badge. Bouncy stacked-shadow terracotta CTA.
3. **Hero** — Two-column desktop / stacked mobile.
   - Left: Founder polaroid (only real photo) with playful tape/squiggle decorations.
   - Right: Caveat eyebrow "A note from our founder —" + Fraunces SOFT axis headline ("I started PawBite because my dog Theo's gut was a wreck.") + body paragraph + Caveat signature + 4.9★ trust line + bouncy CTAs.
4. **Trust strip** — 5 custom-illustrated circular badges, color-rotated.
5. **"What we won't do"** — 4 founder promises with Caveat checkmarks (no fillers / no unsupported claims / no lock-in / no data selling).
6. **"Made with weird amounts of love"** — Full D7 illustrated dog scene with hand-drawn Caveat callouts pointing to product features ("5 strains!" "Vet-approved" "Tail-wag tested" "No fillers!").
7. **4-stat band** — Warm yellow background. "5B CFU / 5 strains / 90 days / 10,000+ dogs."
8. **Product showcase** — "What Theo takes daily." 3 rotated cards on organic blobs. Daily Duo is the BIG card (2× size) with "SAVE 32%" badge and bundle math.
9. **Before/after testimonials** — "Real dogs. Real differences." 3 cards with illustrated dog avatars (NO real photos), bar charts (Day 1 → Day 14), long-form story-style quotes, "Verified buyer" badges.
10. **From the journal** — 3 blog teaser cards with custom SVG thumbnails (bowl, bone, clock).
11. **Newsletter** — Warm yellow. Illustrated mailbox + peeking dog. "Letters from PawBite. We send a short letter once a month…"
12. **Footer** — Forest. Mascot peeking over yellow wave. 4-column links. "Made by humans in Hudson Valley, NY" in Caveat. Illustrated social icons.
13. **Sticky bottom ATC bar** — Daily Duo $47.60 (strikethrough $70) + "Save 32%" + bouncy CTA.

### The "one real photo" rule (homepage)
The founder polaroid is the only real photo on the homepage. Every other illustration is custom inline SVG. This rule extends to every other page where reasonable (see imagery sourcing plan).

---

## 7. Page templates

Every page inherits: header (nav from Section 6.2), footer (from Section 6.12), and the master color/type system.

### 7.1 PDP — Product Detail Page (`/products/[sku]`)

Two-column desktop, stacked mobile.

**Above the fold:**
- Left: Product image carousel (real product macros once available; CSS canister mockup at v1). 3–5 images: hero canister, chew close-up, ingredient panel macro, lifestyle (illustrated), back-of-label.
- Right: Product name (Fraunces SOFT), one-line tagline, 4.9★ rating + review count, price (retail strikethrough + sub price with "Save 20%" badge), quantity selector, **Subscribe vs One-time toggle** (default to Subscribe), Bundle upsell ("Add Hip + Joint for $30/mo more — save 32%"), big terracotta "Add to cart" with stacked shadow, trust line (Vet-formulated • Free ship $40+ • 90-day guarantee).

**Below the fold:**
- "What's in every chew" — strain/active table (mono font for data)
- "How to use" — dosing by weight in interactive table
- "Why dogs do better on this" — 4 benefit cards
- Vet quote with name + DVM credentials (slot for real bio)
- "Real dogs, real differences" — 3 illustrated-avatar testimonials with bar charts
- "How it compares" — comparison table vs 2 competitors
- FAQ accordion (8–10 Qs, FAQPage schema)
- Subscription benefits explainer
- 90-day guarantee callout
- Related products / cross-sell

### 7.2 Bundle landing (`/products/daily-duo`)
Same template as PDP but with bundle math hero, both canisters side-by-side, savings calculator visible, and combined ingredient overview.

### 7.3 Learn article (`/learn/[slug]`)
Follows the AI-citation template (see Section 9). Magazine-feel within the playful brand wrapper.

**Layout:**
- Top: category eyebrow, H1, author byline + DVM reviewer + last-updated date
- Definitive answer paragraph (2–3 sentences) in italic Fraunces — set apart visually
- Table of contents (sticky on desktop)
- Body content (H2/H3 hierarchy, Inter for body, generous line-height)
- ≥1 comparison or data table (mono font for data)
- Cited sources list at the end (named by author + year)
- FAQ block (5–8 Qs) — FAQPage schema
- Author bio card (vet reviewer with photo + credentials)
- "Recommended product" inline (1 of our 2 SKUs)
- "Last reviewed by Dr. [Name], DVM on [date]"
- Related articles (3)

### 7.4 Breed page (`/breeds/[slug]`) — programmatic template
Title: "[Breed] supplements: what to know about [breed] gut and joint health"

**Layout:**
- H1 with breed name
- Definitive answer paragraph (per AI-citation template)
- "Common [breed] health concerns" — bullet list, breed-specific
- "What we recommend for [breeds]" — our products with reasoning
- Dosing for typical [breed] weight (calculator)
- FAQ block (breed-specific Qs)
- Author/vet byline + last-updated date

### 7.5 Concern page (`/concerns/[slug]`) — programmatic template
Title: "[Concern] in dogs: signs, causes, and what helps"

**Layout:**
- H1 with concern name
- Definitive answer paragraph
- "Signs your dog has [concern]" — checklist
- "What causes [concern]" — explainer
- "What helps" — our products with reasoning
- When to see a vet (responsibility note)
- FAQ block
- Author/vet byline + last-updated date

### 7.6 Ingredient page (`/ingredients/[slug]`) — programmatic template
Title: "[Ingredient] for dogs: what it does, dosage, and safety"

**Layout:**
- H1 with ingredient name
- Definitive answer paragraph (what it is, what it does)
- Mechanism (how it works)
- Dosage guidelines (mono font data table)
- Safety considerations
- Cited research (peer-reviewed)
- "Which PawBite products contain [ingredient]" (if applicable)
- FAQ block
- Author/vet byline

### 7.7 Competitor comparison (`/vs/[competitor]`)
Title: "PawBite vs [Competitor]: head-to-head comparison ([year])"

**Layout:**
- H1
- Definitive answer (1-paragraph TL;DR — who's the better pick for whom)
- Side-by-side comparison table (CFU, strains, price, sub discount, guarantee, ingredients, certifications)
- "When [Competitor] makes sense" — honest acknowledgment
- "When PawBite makes sense" — our pitch
- Customer perspective quotes (illustrated avatars)
- "Year-versioned" — refresh annually with updated stats
- Author/vet byline

### 7.8 About (`/about`)
Long-form founder story page. Magazine-style. Founder photo + bio + the longer "why" story (extension of the homepage hero). Mission. Team (placeholders for now). "What we won't do" repeated and expanded. Contact CTA.

### 7.9 Quiz (`/quiz`)
Full-screen quiz UI. 5 questions (see Section 11). Progress bar. Friendly Caveat caption between questions. Output page (`/quiz/results`) shows recommended SKU + email capture for $5 off code.

### 7.10 FAQ (`/faq`)
Full FAQ with category navigation (Shipping, Subscriptions, Products, Dosing, Returns, Account). All Qs as accordions → FAQPage schema sitewide.

### 7.11 Vet bio (`/vets/[slug]`)
Vet headshot (placeholder OK at v1), credentials, bio paragraph, articles they've reviewed (auto-populated), areas of focus. Sets up E-E-A-T authority for the byline system.

### 7.12 Reviews wall (`/reviews`)
Filterable by SKU. Each review = star rating, verified-buyer badge, dog name + breed (illustrated avatar), date, body. Aggregate rating at top.

### 7.13 Science (`/science`)
Cited studies for every strain/active. References table. Methodology disclosure ("How we choose ingredients"). Vet review pipeline explainer.

### 7.14 Perks (`/perks`)
Subscriber benefits. Free shipping always. Skip/pause/cancel anytime. Loyalty stack (future).

### 7.15 Calculator (`/dosing/[type]`)
Interactive: dog weight slider + age + breed (optional) → recommended dose and pack size. CTA to product.

### 7.16 Hub pages (`/learn`, `/concerns`, `/breeds`, `/ingredients`, `/vs`)
Landing pages with category descriptions + grid of child pages. Use for internal linking and topical authority.

### 7.17 Legal (`/privacy`, `/terms`, `/shipping`, `/returns`, `/editorial`)
Standard format. Editorial includes: medical disclaimer, citation policy, vet review process, conflict-of-interest policy.

### 7.18 Cart / Checkout / Account
- **Cart:** Slide-over panel triggered from nav cart icon. Shows line items, subscription terms inline, free-ship progress bar, "frequently bought together" bundle suggestion, checkout CTA.
- **Checkout:** Native Shopify checkout (customized minimally — colors, fonts).
- **Account:** Subscription management (skip / swap SKU / change cadence / pause / cancel — all 1-click), order history, address book, refer-a-friend (future).

---

## 8. Trust signal slot system

All trust signals at launch are **aspirational** — we design slots in the UI that can be filled with real data as it lands without re-templating the site.

| Slot | At launch (placeholder) | Real data swap |
|---|---|---|
| Review count | "10,000+ 5-star reviews" (aspirational) | Real review count from Stamped/Okendo/Yotpo |
| Star rating | "4.9★ average" | Real aggregate |
| Vet name + bio + photo | "Dr. M. Hayes, DVM" (placeholder) | Real vet bio + headshot |
| Vet quote on PDP | Generic vet-quote placeholder | Real vet-formulated quote |
| Manufacturing badges | "cGMP-certified facility" (claim) | NASC seal, NSF, NSF-DRP if obtained |
| Press logos | (slot exists but empty at launch) | As earned — only real press, no fakes |
| "X dogs helped" stat | "10,000+ dogs" | Real shipment count |
| Founder name + photo | "Sam Whitlock" (placeholder) | Real founder identity |

Each slot is a component prop, not hard-coded copy. Replacement is a 1-line content change, not a UI rebuild.

---

## 9. SEO + AI-citation patterns

### The content template (applies to /learn/[slug], /concerns/[slug], /breeds/[slug], /ingredients/[slug], /vs/[competitor])

1. **H1** — target keyword, year-versioned where commercial intent (e.g., "best dog probiotic 2026")
2. **Byline row** — Author + DVM reviewer + last-updated date (visible)
3. **Definitive answer in first 2 sentences** — this is what AI quotes. Set apart visually (italic Fraunces, slightly larger). E.g.: "*Dogs benefit from probiotics when they have chronic loose stool, gas, post-antibiotic recovery needs, or food sensitivity. The most-studied strains for dogs are Bacillus coagulans, Bifidobacterium animalis, and Lactobacillus plantarum.*"
4. **Table of contents** with anchor links (sticky on desktop)
5. **Body content** with clear H2/H3 hierarchy (target keyword variations as H2s)
6. **≥1 comparison or data table** — AI loves to cite tables. Use mono font for numerical data.
7. **Cited sources** — named by author + year inline; reference list at bottom
8. **FAQ block** (5–8 Qs) — drives FAQPage schema
9. **Product recommendation** inline (1 of our 2 SKUs, contextually relevant)
10. **"Last reviewed by Dr. [Name], DVM on [date]"** — visible E-E-A-T signal

### Sitewide SEO + AI-citation moves
- **Year versioning** on commercial pages (best-X-2026, vs-Y-2026) — refresh annually
- **Definitive opening paragraphs** sitewide (homepage hero, About, every blog)
- **Author bylines with credentials** everywhere — DVM-reviewed articles get a "Reviewed by" line
- **Comparison tables** as a recurring content format
- **Internal linking** — every blog/concern/breed page links to ≥3 related pages and 1 product
- **External authority signals** — cite peer-reviewed studies by author + year + journal
- **llms.txt** at site root — clean Markdown index of high-priority pages for AI crawlers
- **AI crawler allow-list** in robots.txt — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc., explicitly allowed
- **Structured data** on every page (Section 10)

---

## 10. Schema markup plan

| Page type | Schema | Notes |
|---|---|---|
| Sitewide | `Organization`, `WebSite`, `BreadcrumbList` | Site-level identity |
| PDP | `Product` + `Offer` + `AggregateRating` + `Review` | Rich-result eligible |
| Blog post (`/learn/[slug]`) | `Article` (or `BlogPosting`) + `FAQPage` (for the inline FAQ block) + `Person` (author + reviewer) | E-E-A-T signals |
| Concern + Breed pages | `Article` + `FAQPage` | Same template |
| Ingredient pages | `Article` + `DefinedTerm` (where applicable) + `FAQPage` | Glossary-style |
| Comparison pages | `Article` + `FAQPage` + comparison table marked with structured headings | Both products referenced via product cards |
| FAQ page | `FAQPage` | Site-level FAQ |
| Vet bio | `Person` + `MedicalOrganization` mention | E-E-A-T authority |
| About | `AboutPage` + `Organization` | Standard |
| Quiz | `WebApplication` (light) | Optional |

### Editorial policy file
`/editorial` page exposes our methodology: how ingredients are chosen, how articles are vet-reviewed, citation standards, conflict-of-interest disclosures, correction policy. This is a real E-E-A-T signal AI ranks high.

---

## 11. Quiz design

### 5-question flow (live at `/quiz`)

1. **"How much does your dog weigh?"** — 4 buckets: under 25, 25–50, 50–75, 75+ lbs
2. **"How old is your dog?"** — 4 buckets: under 1 yr, 1–7 yr, 7–10 yr, 10+ yr
3. **"What's the main thing you want to improve?"** — 5 options: gut/stool, hip & joint, skin & coat, anxiety, daily wellness
4. **"Anything else?"** (optional) — same 5 options, skip allowed
5. **"What does your dog eat now?"** — 4 options: kibble, fresh/raw, mixed, prescription diet

### Output (at `/quiz/results?id=...`)
- Recommended SKU(s) based on answers (rules-based mapping at v1):
  - gut/stool primary → Daily Probiotic
  - hip/joint primary → Hip + Joint
  - both primary or secondary → Daily Duo
  - skin/anxiety/wellness → Daily Probiotic (gut-first thesis) + roadmap note
- $5-off code on first order (gated by email capture)
- Personalized "Why this for your dog" explainer paragraph
- One-click "Subscribe to recommended" CTA

### Quiz copy tone
Warm, helpful, plainspoken. Caveat captions between questions ("Almost done —"). No clinical jargon. Frame as a friend who happens to know dog nutrition.

---

## 12. Commerce flow

### Subscription model
- **Subscribe & Save 20%** on every SKU
- **Bundle 15% discount** stacks with subscription (combined = 32% off retail when both)
- **Tiered subscription** (post-launch consideration, not v1):
  - 1 SKU subscription = 20% off
  - 2 SKU subscription = 25% off
  - 3 SKU subscription (when SKU #3 ships) = 30% off
- **Default delivery cadence:** every 30 days; customer can change to 45/60 in account portal
- **Skip / pause / cancel in 1 click** from `/account/subscriptions` — no phone calls, no cancellation fees (promised on /perks and /faq)

### Shipping
- Free shipping over $40
- Free shipping on all subscription orders
- $5 flat shipping under $40 (one-time orders only)
- US-only at launch

### Guarantee
- **90-day money-back guarantee** on first subscription order
- Return process: email-based at v1; self-serve portal post-launch

### Cart
- Slide-over panel (not full page)
- Free-ship progress bar at top
- "Frequently bought together" cross-sell (e.g., if cart has Daily Probiotic only → suggests Daily Duo upgrade with math callout)
- Subscription terms inline ("Ships every 30 days. Skip or cancel anytime.")

### Checkout
- **Native Shopify checkout** at launch (lowest friction, best conversion)
- Custom-styled to brand (colors, fonts) — no full headless checkout v1
- Apple Pay / Google Pay / Shop Pay enabled

### Customer portal (`/account`)
- Order history with reorder
- Subscription management:
  - Edit cadence
  - Swap SKU
  - Add/remove SKU
  - Skip next order
  - Pause subscription
  - Cancel (3-step flow with "Are you sure?" — no friction added, but offers a pause or swap as alternatives)
- Address book
- Saved payment methods
- Refer-a-friend (future)

---

## 13. Tech stack recommendation

### Stack (mirrors sibling DTC projects ketcare + genesis)
- **Frontend:** Next.js 14+ App Router + Tailwind CSS + shadcn/ui patterns (Radix primitives)
- **Commerce:** Shopify (Storefront API for catalog reads + native Shopify checkout for transactions)
- **Subscriptions:** Recharge or Skio (Shopify app — Recharge has bigger ecosystem; Skio has nicer customer portal UX)
- **CMS:** MDX (file-based) for blog posts + programmatic data (JSON or YAML) for breed/concern/ingredient pages
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics + PostHog (product analytics + heatmaps) + GA4 (paid-ads attribution)
- **Email:** Klaviyo (DTC standard, deep Shopify integration)
- **SMS:** Klaviyo SMS (same platform; reduces vendor sprawl)
- **Reviews:** Stamped or Okendo (UGC photo support, Shopify-native)
- **Customer support:** Help Scout (email-based; affordable; scales)
- **Image hosting:** Cloudinary or Vercel's built-in image optimization
- **Domain + DNS:** Cloudflare (post-acquisition of pawbite.com)

### Why this stack
- Matches operator portfolio pattern → less context switching, faster iteration
- Next.js gives us full SEO control (every page server-rendered, schema markup in metadata, llms.txt easy to serve, AI-crawler-friendly)
- Shopify handles the regulated/boring stuff (tax, fulfillment, returns, recurring billing) — we don't reinvent that
- Vercel deploys per branch — design reviews are URL-based, not file-based
- PostHog gives us session replay + funnel analytics for the quiz funnel

### Rejected alternatives
- **Pure Shopify (Liquid theme):** less design freedom, weaker performance, harder to ship the programmatic SEO architecture
- **Shopify Hydrogen (full headless):** more engineering for marginal benefit over the Storefront API + native checkout hybrid
- **Next.js + Stripe (no Shopify):** would have to build inventory + tax + returns ourselves. Not worth it for a 2-SKU DTC brand.

### Repo structure (recommended)
```
/app                  Next.js App Router
  /(commerce)         Cart, checkout-related routes
  /(content)          Blog, learn, concerns, breeds, ingredients
  /(brand)            About, vets, science, reviews, perks
  /(legal)            Privacy, terms, etc.
  /products/[slug]    PDP
  /quiz               Quiz flow
  /account            Customer portal (gated by Shopify customer auth)
/components
  /ui                 shadcn-style primitives
  /brand              PawBite-specific components (canister mockup, illustrated mascot, callouts)
  /commerce           Product card, sub toggle, cart panel
  /content            Article layout, FAQ accordion, comparison table
/content              MDX files for blog + programmatic data sources
  /learn              MDX articles
  /breeds.json        Programmatic data
  /concerns.json
  /ingredients.json
/lib                  Shopify client, Klaviyo client, utils
/public               Static assets (icons, favicon)
/styles               globals.css + Tailwind config
/scripts              Build-time scripts (sitemap generation, llms.txt generation)
```

---

## 14. Imagery sourcing plan

### Categorical rules

| Asset type | Source at launch | Source post-launch |
|---|---|---|
| Founder polaroid (homepage hero) | Placeholder Unsplash | Real founder + dog photo (when identity finalized) |
| Product canisters (PDPs, homepage, cart) | CSS-rendered mockups | Real product macro photography (mandatory before paid ads) |
| Ingredient panels / back-of-label | Stylized mockups | Real macros once printed labels exist |
| Dog avatars (reviews, testimonials) | Custom inline SVG illustrations | Same — illustration is the brand standard |
| Blog header art | Custom SVG illustrations | Same |
| Lifestyle dog content (ads, IG) | UGC from real customers + creator partnerships | Same — never synthesize lifestyle "real dogs" |
| Vet headshots | Placeholder until real vets are on advisory board | Real headshots |
| Hero static (landing pages) | Custom SVG illustrations + the founder photo | Same |
| Email header art | Custom SVG illustrations | Same |

### Where AI image generation is allowed
- Packaging concept renders before real packaging exists
- Brand exploration / mood boards
- Pre-launch hero static
- Illustration accents and decorative shapes (then traced/recreated as inline SVG for brand consistency)

### Where AI image generation is explicitly NOT allowed
- Real PDP product macros (once product exists)
- Customer "before/after" photos (we use illustrated avatars + stat callouts)
- Vet headshots (real or none)
- Press/award assets
- Paid social ad creative for the lifestyle role (UGC only)

### Custom SVG illustration library (one of the biggest design assets)
The custom inline SVG library built into the Design 8 hybrid file is the foundation. It needs to be extracted into reusable React components in `/components/brand/illustrations/`. Components to extract:
- `<Mascot variant={"sitting"|"peeking"|"happy"|"sleepy"} color={...} />`
- `<DogAvatar variant={1..6} />`
- `<Mailbox />`
- `<Stethoscope />`
- `<Bone />`
- `<Paw />`
- `<Star variant={"hand-drawn"|"clean"} />`
- `<Sparkle />`
- `<Heart />`
- `<Shield />`
- `<Squiggle />`
- `<Blob variant={1..6} color={...} />`
- `<DashedArrow />`
- `<TapeAccent />`
- `<USFactoryBadge />`
- `<CalloutPill text={...} variant={"caveat"|"clean"} />`

---

## 15. Pre-launch checklist

Operations work that needs to happen alongside (not blocking) the build.

- [ ] **Acquire pawbite.com** (currently parked on atom.com — flagged)
- [ ] Register matching social handles (@pawbite on IG, TikTok, X)
- [ ] Stand up Shopify store + connect domain
- [ ] Choose + install subscription app (Recharge vs Skio)
- [ ] Stand up Klaviyo + connect to Shopify
- [ ] Real product photography session (once product is in hand)
- [ ] Real founder photo + bio
- [ ] Vet advisory board recruitment — 2–3 DVMs minimum
- [ ] cGMP certification verification (manufacturer)
- [ ] NASC seal application (if pursuing)
- [ ] FDA disclaimer copy — legal review
- [ ] Terms of service + privacy policy — lawyer review
- [ ] California Prop 65 review (dog supplements often need it)
- [ ] Set up help@pawbite.com + standard reply templates
- [ ] Set up Stamped/Okendo for reviews + outreach flow
- [ ] Set up Google Search Console + Bing Webmaster Tools
- [ ] Submit sitemap once live

---

## 16. Post-launch roadmap

### Wave 2 (0–90 days post-launch)
**Programmatic SEO long tail (~200 pages):**
- `/best-probiotic-for-[breed]` × 100 breeds
- `/best-joint-supplement-for-[breed]` × 100 breeds

**⚠️ User reminder:** confirm before building (will surface explicitly in writing-plans).

**Other Wave 2 work:**
- Email/SMS welcome series (Klaviyo flows)
- Abandoned cart flow
- Quiz follow-up sequence
- Subscription save flows
- First 50 real reviews → import to Stamped → swap aspirational social proof for real numbers

### Wave 3 (3–6 months)
- **SKU #3:** Calm chew (calming, anxiety) — highest-conversion-likelihood expansion based on category data
- Email/SMS retention sequences (replenishment reminders, education-led nurture)
- Affiliate / referral program
- Begin UGC creator partnerships for paid social

### Wave 4 (6–12 months)
- **SKU #4:** Multi or Skin (decision based on which organic keyword cluster is driving most traffic)
- Senior + Puppy variants of Daily
- Retail conversations (Whole Foods, Target, Petco)
- International (Canada first — same English-language SEO infrastructure)
- Vet practice B2B program
- Rescue org partnerships

---

## 17. Out of scope (explicit)

These are deliberately *not* in v1 — each has a reason.

| Item | Why not v1 |
|---|---|
| Multivitamin SKU | Zesty Paws + Finn own this. Adding it would dilute the gut/joint focus. |
| Dental SKU | PetLab owns the dental powder category. Need distinct positioning to enter. |
| CBD products | Honest Paws owns CBD. Regulatory complication. Tangential to gut/joint thesis. |
| Standalone fish oil | Commodity, low margin (40-50%). Already in Hip + Joint. Skip. |
| Cat SKUs | Different brand, different time. Zesty Paws does both and the brand suffers. |
| Forum / community | Moderation cost; low ROI in year 1. |
| Mobile app | DTC supplement brands don't need apps; web subscription portal is enough. |
| Raw food recipes | Adjacent content; dilutes the gut-first thesis. |
| Multiple language variants | US-English only v1. Canada in Wave 4. |
| Retail/wholesale pages | DTC-only at launch. |
| Influencer marketplace integration | Manual creator partnerships in Wave 3 instead. |
| Loyalty/points program | Subscribe & Save is the loyalty mechanism at v1. Points come post-launch. |

---

## 18. Open questions

These resolve during writing-plans or implementation kickoff. None block the spec.

1. **Tech stack confirmation** — Next.js + Shopify hybrid recommended (Section 13). Confirm before kickoff.
2. **Subscription app** — Recharge vs Skio. Skio has nicer customer portal but Recharge has bigger ecosystem. Default to **Skio** unless operator preference.
3. **Domain timing** — pawbite.com acquisition timeline. Build can proceed on a staging URL until domain lands.
4. **Real vet advisory board** — at launch, do we have a real DVM signed on or proceed fully with placeholders? Affects copy choice on PDP and About.
5. **Founder identity** — proceed with placeholder "Sam Whitlock" or substitute a real name? Placeholder works for v1 if needed; real swap is a 1-line content change.
6. **Reviews provider** — Stamped vs Okendo. Default to **Stamped** (cheaper at low volume, upgrade later).
7. **Help desk** — Help Scout vs Front. Default to **Help Scout** (cheaper, smaller team).
8. **Image optimization** — Cloudinary vs Vercel native. Default to **Vercel native** unless we hit limits.
9. **Quiz logic version** — Rules-based v1 (5 questions → if/else mapping). Personalization ML upgrade in Wave 3+.

---

## End of spec.

**Next step:** invoke `writing-plans` to produce the implementation plan.
