# PawBite — Phase 5: SEO Content Layer Implementation Plan

> Use superpowers:subagent-driven-development with parallel dispatch for content generation.

**Goal:** Ship ~80 SEO content pages — 5 hub pages, 15 blog posts, 25 breed pages, 10 concern pages, 20 ingredient pages, and 4 competitor comparison pages. Each page follows the AI-citation template from spec Section 9.

**Architecture:** Single shared `<ContentPage>` template component renders all five content types. Each type has a TypeScript data file (array of entries) consumed by a dynamic route. Type-safe, no MDX runtime overhead, statically prerendered.

**Tech stack:** Same as previous phases. Adds `next-mdx-remote` only if MDX rich content is needed — Phase 5 uses structured-JSON sections instead, simpler.

**Spec reference:** `docs/superpowers/specs/2026-05-06-pawbite-site-design.md` Sections 5, 9, 10.

---

## File Structure (additions)

```
/data/
  blog-posts.ts                    15 blog post entries
  breed-pages.ts                   25 breed pages
  concern-pages.ts                 10 concern pages
  ingredient-pages.ts              20 ingredient pages
  vs-pages.ts                      4 competitor comparisons
  vets.ts                          Author/vet bylines

/components/content/
  content-page.tsx                 Shared template for all 5 content types
  content-tldr.tsx                 The definitive-answer callout
  content-toc.tsx                  Sticky table-of-contents (desktop)
  content-section.tsx              Heading + markdown-rendered body
  content-sources.tsx              Numbered citation list
  content-byline.tsx               Author + reviewer + dates row
  content-product-recommend.tsx    Inline product recommendation card

/app/
  learn/page.tsx                   Blog hub
  learn/[slug]/page.tsx            Blog post route
  breeds/page.tsx                  Breed hub
  breeds/[slug]/page.tsx           Breed page route
  concerns/page.tsx                Concern hub
  concerns/[slug]/page.tsx         Concern page route
  ingredients/page.tsx             Ingredient hub
  ingredients/[slug]/page.tsx      Ingredient page route
  vs/page.tsx                      Comparison hub
  vs/[slug]/page.tsx               Competitor comparison route
```

---

## Tasks

### Task 1: Data schemas + vet bylines
Create the TypeScript types for every content type plus the author/vet placeholder data. One file per type with the `type` + an empty `[]` export.

### Task 2: Shared `<ContentPage>` template
A single React component that renders any content-type entry. Takes props: `title`, `category`, `tldr`, `sections`, `dataTable?`, `sources?`, `faqs`, `recommendsProduct`, `byline`. Includes Article + FAQPage JSON-LD schema injection.

### Task 3: Five dynamic routes
One file per content type at `app/<type>/[slug]/page.tsx`. Each does `generateStaticParams`, `generateMetadata`, looks up the entry, passes to `<ContentPage>`.

### Task 4: Five hub pages
`/learn`, `/breeds`, `/concerns`, `/ingredients`, `/vs`. Each lists all entries of its type with a grid of cards. Includes hero copy explaining the category.

### Task 5–9: Content generation (5 parallel agents, one per type)
Each agent generates the full data file for its content type, following the voice/style rules and the AI-citation template.

### Task 10: Wire SEO infra
- Update sitemap to include all content URLs
- Update llms.txt with the content catalog
- Add `/learn`, `/breeds`, `/concerns`, `/ingredients`, `/vs` to nav (already in nav from Phase 1)

### Task 11: Build + tag + push
Final verification, README update, tag `phase-5-seo-content`, merge to main, push.

---

## Content scope reference

### Blog posts (15)
From spec Section 5:
1. signs-your-dog-needs-a-probiotic
2. best-dog-probiotic-2026
3. probiotic-vs-prebiotic-vs-postbiotic-for-dogs
4. how-long-does-it-take-for-probiotics-to-work-in-dogs
5. cosequin-vs-pawbite-hip-joint
6. petlab-vs-pawbite-probiotic
7. is-my-dogs-poop-normal-color-chart
8. signs-of-joint-pain-in-dogs
9. glucosamine-for-dogs-complete-guide
10. best-hip-and-joint-supplement-for-dogs-2026
11. do-dogs-need-probiotics
12. gut-health-in-dogs-signs-of-imbalance
13. probiotic-strains-for-dogs-explained
14. how-to-tell-if-your-dog-has-arthritis
15. puppy-vs-senior-dog-supplements-what-to-know

### Breed pages (25)
labrador-retriever, golden-retriever, french-bulldog, poodle, bulldog, german-shepherd, dachshund, beagle, rottweiler, pointer, yorkshire-terrier, boxer, doodle, great-dane, siberian-husky, australian-shepherd, cavalier-king-charles-spaniel, mini-schnauzer, shih-tzu, bernese-mountain-dog, boston-terrier, pomeranian, havanese, shetland-sheepdog, brittany

### Concern pages (10)
loose-stool, gas-and-bloating, food-allergies, itchy-skin-and-coat, hip-pain, arthritis, slow-to-get-up, post-antibiotic-recovery, picky-eaters, sensitive-stomach

### Ingredient pages (20)
bacillus-coagulans, bifidobacterium-animalis, lactobacillus-acidophilus, lactobacillus-plantarum, lactobacillus-rhamnosus, chicory-inulin, pumpkin-powder, glucosamine-hcl, chondroitin-sulfate, msm, green-lipped-mussel, turmeric-curcumin, hyaluronic-acid, salmon-oil-omega-3, quercetin, l-theanine, hemp, chamomile, ashwagandha, colostrum

### Vs comparison pages (4)
vs-petlab, vs-native-pet, vs-zesty-paws, vs-cosequin

---

## Voice rules (for content writers)

Per spec Section 2:
- Friendly, plainspoken, lightly funny. Treat the reader like an intelligent adult who loves their dog.
- First person where personal ("we," "your dog"). Never "fur baby," "pup," "pawsitively," verb-form-of-paw.
- Headlines can wink; body is precise.
- No exclamation marks in body copy.
- No "powerful," "supercharged," "premium-grade," "advanced," "ultra," "complete."

Per spec Section 9 (the AI-citation template):
- Every page opens with a definitive 2-sentence answer (the `tldr` field).
- Body sections use plain-language explanations + at least one data table.
- Cite peer-reviewed sources by author + year.
- FAQ block of 5-8 Qs at the bottom.
- Inline product recommendation that contextually fits the article.

---

## End of Phase 5 plan.

**Deliverable:** 80+ statically-prerendered content pages with the AI-citation template applied, plus 5 hub pages. Sitemap includes everything. llms.txt updated.
