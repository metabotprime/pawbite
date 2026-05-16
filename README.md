# PawBite

A new DTC dog supplement brand. Launching with 2 SKUs: a daily probiotic chew and a hip + joint chew, with a subscription bundle (The Daily Duo).

## Status

**Phases 6 + 7 complete** — Brand pages live (About, Vets advisory + dynamic bios, Science, Reviews, Perks) plus legal pages (Privacy, Terms, Shipping, Returns, Editorial). 100+ total routes prerendering. Legal pages flagged for pre-launch counsel review.

Phase 8 next: Shopify wiring (cart, checkout, customer portal, subscriptions).

## Repository layout

```
designs/                              7 homepage design directions + 1 locked hybrid (Design 8) + index viewer
docs/superpowers/specs/               Locked design spec document
```

## Locked design

Design 8 (the hybrid combining Designs 4 + 6 + 7).

Open in browser:

```bash
open "designs/index.html"
```

The hybrid is featured at the top of the index.

## Source of truth

Single spec document containing every locked decision (brand, products, IA, page templates, tech stack, content scope, schema, imagery rules):

```
docs/superpowers/specs/2026-05-06-pawbite-site-design.md
```

## Tech stack (locked, per spec Section 13)

- Next.js 14+ App Router
- Tailwind CSS + shadcn/ui patterns
- Shopify (Storefront API + native checkout)
- Skio (subscriptions) — pending operator confirmation
- Klaviyo (email + SMS)
- Stamped (reviews) — pending operator confirmation
- Vercel (hosting)
- Help Scout (customer support)

## Pre-launch ops (not blocking the build)

- Acquire `pawbite.com` (currently parked on atom.com)
- Real product photography (once product in hand)
- Real founder identity + bio
- Vet advisory board (2–3 DVMs)
- cGMP + NASC certification verification
- Legal review (ToS, privacy, Prop 65, FDA disclaimers)

## Local setup

```bash
nvm use # uses .nvmrc → Node 20
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

### Useful routes

- `/` — Placeholder home page (Phase 1)
- `/dev/colors` — Brand palette swatches
- `/dev/fonts` — Typography specimens
- `/dev/illustrations` — SVG component library
- `/sitemap.xml`, `/robots.txt`, `/llms.txt` — SEO + AI plumbing

### Available scripts

| Command                | Purpose                      |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start dev server             |
| `npm run build`        | Production build             |
| `npm run start`        | Run production build locally |
| `npm run lint`         | ESLint                       |
| `npm run type-check`   | TypeScript without emit      |
| `npm run format`       | Prettier format all files    |
| `npm run format:check` | Prettier check only          |
| `npm run test`         | Vitest watch mode            |
| `npm run test:run`     | Vitest single run            |

### Deploy

Pushes to `main` deploy to Vercel automatically. PRs deploy preview URLs.
