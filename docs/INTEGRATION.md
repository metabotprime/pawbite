# PawBite — Backend Integration Guide

**Read this before wiring Stripe / Shopify.** The frontend is complete and every commerce
surface is a clean, clearly-marked stub. This document maps each seam to the exact file and
what to replace, so the backend bolts on without a refactor.

Last updated: 2026-06-10 · Frontend status: **ready for integration**.

---

## 1. First decision: Shopify or Stripe?

These are different architectures — pick one for checkout.

| | **Shopify** (recommended, per spec) | **Stripe** |
|---|---|---|
| Catalog | Products live in Shopify | You keep `data/products.ts` as catalog |
| Checkout | Hosted Shopify checkout (build a cart via Storefront API, redirect) | Stripe Checkout Session / Payment Links |
| Subscriptions | Shopify app — **Skio** (nicer portal) or Recharge | Stripe Billing |
| Tax / fulfillment / address validation | Built in | You build/integrate it |
| Best for | A DTC supplement brand selling subscriptions (this) | Maximum custom control |

**Recommendation:** Shopify + **Skio** for subscriptions. It removes the most undifferentiated
work (tax, fulfillment, dunning, the subscription customer portal). The site is subscription-first,
which is exactly where Stripe-only gets expensive to build.

Whichever you choose, the seams below are the same set of files.

---

## 2. Product → backend ID mapping

`slug` is the stable join key the frontend already uses. `data/products.ts` now has an optional
`commerce` field (`ProductCommerce` type) — paste backend IDs there. Create these products in your
backend with **these exact prices** (the site shows them everywhere):

| slug | Product | Retail | Subscribe (per mo) | Notes |
|---|---|---|---|---|
| `daily-probiotic` | Daily Probiotic | $32 | $26 (S&S 20%) | 30 chews / 30-day |
| `hip-and-joint` | Hip + Joint | $38 | $30 | 60 chews / 30-day |
| `calm` | Calming Chew | $34 | $27 | 30 chews / 30-day |
| `daily-duo` | The Daily Duo | $70 | **$47.60** | Bundle of probiotic + joint; 32% off. Subscription-only at this price; one-time bundle is $59.50 (15% off only). |

Bundle math is **derived** in `data/products.ts` (`dailyDuoMath`, `BUNDLE_DISCOUNT`,
`SUBSCRIBE_DISCOUNT`) — the Duo page and sticky bar compute from the single prices. Change a single
price in one place and the bundle recomputes. If the backend becomes the price source, either keep
`data/products.ts` in sync or fetch prices at build time and feed them in.

Fill in per product in `data/products.ts`:

```ts
commerce: {
  shopifyVariantId: 'gid://shopify/ProductVariant/...',   // one-time
  shopifySellingPlanId: 'gid://shopify/SellingPlan/...',  // subscription
  // or, for Stripe:
  stripePriceId: 'price_...',        // one-time
  stripeSubPriceId: 'price_...',     // recurring
}
```

---

## 3. The seams (what to wire, where)

Each is a working stub today. Replace in roughly this order.

### 3.1 Add-to-cart buttons
- **`components/pdp/pdp-hero.tsx`** — the `<Button disabled>Pre-order — coming soon</Button>`. Replace with a real ATC that reads the product's `commerce` IDs and the selected Subscribe/One-time toggle (the toggle state already exists in this component).
- **`app/products/daily-duo/page.tsx`** — same disabled button for the Duo.
- **`components/layout/sticky-atc-bar.tsx`** — "Add the Duo" is currently a `<Link>` to the Duo page; swap to a real ATC once the cart exists.

### 3.2 Cart
- **`app/cart/page.tsx`** — currently an empty-state page (Mascot + "Your cart is empty" + cross-sell). Replace with real line items, quantity controls, the free-shipping-over-$40 progress bar, subscription terms, and a checkout button. Keep the cross-sell block.
- **`components/layout/header.tsx`** — the cart icon is intentionally hidden (`// Cart icon hidden until Phase 8`, ~line 19). Un-hide it and wire the item count.

### 3.3 Checkout
- New. **Shopify:** build a cart with the Storefront API, redirect to the returned `checkoutUrl`. **Stripe:** create a Checkout Session server-side (route handler under `app/api/`) and redirect.

### 3.4 Subscription management / account
- No `/account` route exists yet. **Shopify+Skio:** link to the Skio customer portal (fastest). **Stripe:** Stripe Billing customer portal, or build `/account`. The promises on `/perks`, `/returns`, and PDPs ("skip, pause, or cancel in one click") must be true before launch.

### 3.5 Quiz email capture + $5-off code
- **`app/quiz/page.tsx`** — `onSubmit` currently `preventDefault()`s and stores the email in `sessionStorage` (no leak). Wire it to POST the email + quiz answers to Klaviyo.
- **`lib/quiz.ts`** — `generateDiscountCode()` is a deterministic **mock** (hashes the email to `WELCOME-XXXXX`). Replace with a real Shopify/Klaviyo-issued discount code, or a single fixed code that exists in the backend. The results page reads it from `sessionStorage`.

### 3.6 Newsletter
- **`components/sections/newsletter.tsx`** — `onSubmit` is a stub that flips to "Thanks — we'll save your spot." Wire it to POST to Klaviyo (newsletter list).

### 3.7 Reviews
- **`app/reviews/page.tsx`** + **`data/testimonials.ts`** — three clearly-labeled placeholder testimonials. Replace with a Stamped widget / real verified reviews. The "10,000+ reviews" claims were already removed sitewide — do not reintroduce them until real review counts exist.

### 3.8 The WELCOME / 30%-off banner
- **`components/layout/welcome-banner.tsx`** — advertises code `WELCOME`. Create that discount in the backend (or change the copy) before launch so the code actually works. The banner is dismissible + `localStorage`-gated already.

### 3.9 Error tracking
- **`app/error.tsx`** — has a `// Phase 9 wiring` spot that only `console.error`s in dev. Add Sentry (or similar) if you want production error capture. `NEXT_PUBLIC_SENTRY_DSN` is scaffolded in `.env.example`.

---

## 4. Non-code pre-launch gates (operator)

These aren't frontend work but block taking real orders:

- [ ] Acquire **pawbite.com** (currently on `pawbite.vercel.app`) and set `NEXT_PUBLIC_SITE_URL=https://pawbite.com` in Vercel production.
- [ ] **Legal review** of `/privacy`, `/terms`, `/shipping`, `/returns`, `/editorial` — each renders a "pre-launch counsel review needed" banner; counsel sign-off removes it.
- [ ] Real **founder** identity + photo (placeholder: Noah Chang + an Unsplash polaroid).
- [ ] Real **vet** advisory identity (placeholder: Dr. M. Hayes, DVM) — and remove the placeholder Person JSON-LD on `/vets/[slug]` until a real human backs it.
- [ ] Real **product photography** to replace the CSS `Canister` mockups on PDPs.
- [ ] Real **1200×630 OG image** (placeholder is a 1×1 PNG).
- [ ] **cGMP / NASC** certification verification for the claims shown.
- [ ] Confirm the **discount math** you set in the backend matches the site (S&S 20%, bundle 15% → Duo $47.60).

---

## 5. Env vars

See `.env.example`. Copy to `.env.local`, fill the section for your chosen path, and add the same
keys to Vercel project settings (Production + Preview). `NEXT_PUBLIC_*` are browser-exposed; the
rest are server-only.

---

## 6. What's already done (don't redo)

Complete and verified: brand/design system, the full Design-8 homepage, 3 PDPs (Daily Probiotic,
Hip + Joint, Calm) + the Daily Duo bundle page, the 5-question quiz + results, ~80 SEO content pages
(blog / breeds / concerns / ingredients / comparisons) with Article + FAQPage JSON-LD, brand pages
(About, Vets, Science, Reviews, Perks), legal pages, 404 / error / loading states, `sitemap.xml` /
`robots.txt` (AI-crawler allow-list) / `llms.txt`, and an accessibility + contrast pass (WCAG AA).
109 routes prerender; build is green.
