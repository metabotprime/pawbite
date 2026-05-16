# PawBite — Phase 1: Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold the PawBite Next.js application with the locked brand design system, sitewide layout (Header / Footer / WelcomeBanner / StickyATCBar), illustration component library extracted from the Design 8 mockup, and SEO/AI plumbing — deployable to Vercel at a staging URL.

**Architecture:** Next.js 14 App Router + TypeScript + Tailwind CSS + shadcn-style component primitives. File-based routing. Brand palette + 5 Google Fonts loaded via `next/font`. Custom inline SVG illustration library as React components. Dynamic `sitemap.xml`, `robots.txt`, `llms.txt` generated at request time. JSON-LD Organization + WebSite schema at root layout. Vitest + React Testing Library for unit tests; visual smoke tests via `/dev/*` routes.

**Tech Stack:** Node 20+, Next.js 14.2+, React 18.3+, TypeScript 5.6+, Tailwind CSS 3.4+, Radix Slot, class-variance-authority, clsx, tailwind-merge, lucide-react, Vitest, React Testing Library, GitHub Actions CI, Vercel hosting.

**Spec reference:** `docs/superpowers/specs/2026-05-06-pawbite-site-design.md` is the single source of truth for all design decisions.

**Design reference:** `designs/08-hybrid-favorite.html` is the locked homepage design; this Phase extracts its components into reusable React code (the homepage itself is built in Phase 2).

---

## File Structure (locked for Phase 1)

```
/app
  layout.tsx                  Root layout: fonts, metadata, schema, Header/Footer/WelcomeBanner/StickyATCBar
  page.tsx                    Placeholder home: "PawBite — coming soon"
  globals.css                 Tailwind base + brand defaults
  sitemap.ts                  Dynamic sitemap.xml
  robots.ts                   robots.txt
  llms.txt/route.ts           llms.txt dynamic response
  (dev)/                      Development-only visual verification routes
    colors/page.tsx
    fonts/page.tsx
    illustrations/page.tsx

/components
  ui/                         shadcn-style primitives
    button.tsx
    badge.tsx
    accordion.tsx
  layout/
    header.tsx                Sticky nav with mascot accent
    footer.tsx                Forest BG with mascot peeking, 4-col links
    welcome-banner.tsx        Top welcome offer strip
    sticky-atc-bar.tsx        Persistent bottom ATC for Daily Duo
    section.tsx               Section wrapper
    container.tsx             Max-width container
  brand/
    canister.tsx              CSS product mockup (used in PDPs Phase 3)
    illustrations/
      characters/
        mascot.tsx            4 variants: sitting, peeking, happy, sleepy
        dog-avatar.tsx        6 variants for review cards
      icons/
        star.tsx
        sparkle.tsx
        heart.tsx
        shield.tsx
        paw.tsx
        bone.tsx
        stethoscope.tsx
        mailbox.tsx
        squiggle.tsx
        dashed-arrow.tsx
        us-factory-badge.tsx
      decor/
        blob.tsx               6 color variants
        tape-accent.tsx
      callout-pill.tsx         Caveat handwriting + clean variants

/lib
  utils.ts                    cn() helper (clsx + tailwind-merge)
  seo.ts                      Schema generators (Organization, WebSite, BreadcrumbList)
  fonts.ts                    next/font configuration

/test
  setup.ts                    Vitest setup (RTL + jest-dom)
  utils.test.ts               Unit tests for cn() helper

/public
  favicon.ico
  og-default.png              Placeholder OG image

/.github
  workflows/
    ci.yml                    Type-check + lint + build + test on PRs

/tailwind.config.ts
/next.config.mjs
/tsconfig.json
/vitest.config.ts
/.env.example
/.nvmrc                       Node 20
/package.json
/postcss.config.mjs
```

---

## Reminders for the executor

- **`pawbite.com` is not yet acquired** (currently parked on atom.com). All deploys go to `pawbite.vercel.app` until the domain lands. Do not configure a custom domain in this phase.
- **Phase 1 does not include any real content pages** beyond a placeholder home page. The actual homepage build is Phase 2.
- **Commit after each task** — frequent commits help the human reviewer track progress.

---

## Tasks

### Task 1: Initialize Next.js 14 App Router project

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `postcss.config.mjs`, `tailwind.config.ts`, `.gitignore` (already exists)

- [ ] **Step 1: Run create-next-app with locked options**

Run from `/Users/christosi/Desktop/pawbite claude/`:

```bash
npx create-next-app@14.2.18 . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm --no-turbo
```

When prompted "would you like to install in non-empty directory?" answer **yes** (the existing `designs/`, `docs/`, `.git/` are intentional).

Expected: Project scaffolded. `package.json` lists `next@14.2.x`, `react@18.x`, `tailwindcss@3.x`.

- [ ] **Step 2: Pin Node version**

Create `.nvmrc`:

```
20
```

Create/update `package.json` engines field:

```json
{
  "engines": {
    "node": ">=20.0.0"
  }
}
```

- [ ] **Step 3: Run dev server to verify scaffold works**

```bash
npm run dev
```

Open `http://localhost:3000` — should see the default Next.js starter page. Stop the server (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 14 + TypeScript + Tailwind"
```

---

### Task 2: Install design system dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install shadcn-style runtime dependencies**

```bash
npm install @radix-ui/react-slot @radix-ui/react-accordion class-variance-authority clsx tailwind-merge lucide-react tailwindcss-animate
```

- [ ] **Step 2: Install dev/build dependencies**

```bash
npm install -D @tailwindcss/typography @types/node @types/react @types/react-dom prettier prettier-plugin-tailwindcss
```

- [ ] **Step 3: Verify all installs**

```bash
npm ls --depth=0
```

Expected: no `UNMET DEPENDENCY` warnings.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install design system dependencies"
```

---

### Task 3: Configure Prettier + ESLint

**Files:**
- Create: `.prettierrc`, `.prettierignore`
- Modify: `.eslintrc.json` (created by create-next-app)

- [ ] **Step 1: Create `.prettierrc`**

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- [ ] **Step 2: Create `.prettierignore`**

```
node_modules/
.next/
.vercel/
public/
*.lock
*.log
.env*
designs/
docs/
```

- [ ] **Step 3: Add format/lint scripts to `package.json`**

Update `scripts`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

- [ ] **Step 4: Run format on the codebase**

```bash
npm run format
```

Expected: existing files reformatted.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: configure prettier and add quality scripts"
```

---

### Task 4: Configure the brand palette in Tailwind

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Replace `tailwind.config.ts` contents**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PawBite brand palette — locked in spec section 2
        cream: '#F5EFE6',
        'cream-2': '#EFE7D8',
        forest: '#1F3A2E',
        'forest-deep': '#142A20',
        'forest-mid': '#2A4538',
        terracotta: '#C8765B',
        'terracotta-dark': '#B05D43',
        warmyellow: '#E8B547',
        pinky: '#F4B8A8',
        mint: '#B8D4C4',
        offwhite: '#FAFAFA',
        charcoal: '#2A2A2A',
        'cream-muted': '#D4CFC4',
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        // Stacked drop shadow used on bouncy CTAs (Design 8 hybrid)
        'stack': '0 8px 0 -2px #1F3A2E',
        'stack-sm': '0 4px 0 -2px #1F3A2E',
        'soft': '0 12px 32px -8px rgba(31, 58, 46, 0.18)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

- [ ] **Step 2: Verify type-check passes**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat(brand): configure tailwind with PawBite palette and shadow/animation system"
```

---

### Task 5: Configure Google Fonts via next/font

**Files:**
- Create: `lib/fonts.ts`

- [ ] **Step 1: Create `lib/fonts.ts`**

```typescript
import { Bagel_Fat_One, Fraunces, Inter, Caveat, JetBrains_Mono } from 'next/font/google';

// Wordmark only — the PawBite logotype
export const fontDisplay = Bagel_Fat_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

// Headlines — use the SOFT axis for round/bouncy feel via CSS
export const fontSerif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

// Body text
export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Handwriting accents — founder signature, callouts
export const fontHand = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-hand',
  display: 'swap',
});

// Numerical data — strain names, CFU counts
export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Convenience export — all font CSS variables for the root layout
export const fontVariables = [
  fontDisplay.variable,
  fontSerif.variable,
  fontSans.variable,
  fontHand.variable,
  fontMono.variable,
].join(' ');
```

- [ ] **Step 2: Update `tailwind.config.ts` font families**

Add to the `extend` block (preserving everything else):

```typescript
fontFamily: {
  display: ['var(--font-display)', 'serif'],
  serif: ['var(--font-serif)', 'serif'],
  sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
  hand: ['var(--font-hand)', 'cursive'],
  mono: ['var(--font-mono)', 'monospace'],
},
```

- [ ] **Step 3: Commit**

```bash
git add lib/fonts.ts tailwind.config.ts
git commit -m "feat(brand): configure next/font with all 5 brand typefaces"
```

---

### Task 6: Set up `app/globals.css` with brand defaults

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css` contents**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-cream: 245 239 230;
    --color-forest: 31 58 46;
    --color-terracotta: 200 118 91;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #F5EFE6;
    color: #1F3A2E;
    font-family: var(--font-sans), system-ui, sans-serif;
  }

  /* Fraunces SOFT-axis utility — use on headlines for the bouncy round serif feel (per spec) */
  .fraunces-soft {
    font-family: var(--font-serif);
    font-variation-settings: 'SOFT' 100;
  }

  /* Default heading typography */
  h1, h2, h3, h4 {
    font-family: var(--font-serif);
    font-variation-settings: 'SOFT' 100;
    color: #1F3A2E;
  }

  ::selection {
    background-color: #C8765B;
    color: #F5EFE6;
  }
}

@layer components {
  /* Hand-drawn underline utility — for emotional/personal accents */
  .underline-hand {
    background-image: linear-gradient(transparent 65%, #C8765B 65%, #C8765B 80%, transparent 80%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat(brand): set up globals.css with PawBite typography defaults"
```

---

### Task 7: Create `lib/utils.ts` with cn() helper

**Files:**
- Create: `lib/utils.ts`

- [ ] **Step 1: Create `lib/utils.ts`**

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely. Later classes win conflicts.
 *
 * @example
 * cn('px-2 py-1', 'px-4') // → 'py-1 px-4'
 * cn('bg-cream', isActive && 'bg-terracotta') // conditional
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/utils.ts
git commit -m "feat(lib): add cn() utility for Tailwind class merging"
```

---

### Task 8: Set up Vitest + React Testing Library

**Files:**
- Create: `vitest.config.ts`, `test/setup.ts`
- Modify: `package.json`

- [ ] **Step 1: Install test dependencies**

```bash
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @types/jsdom
```

- [ ] **Step 2: Create `vitest.config.ts`**

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    css: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
```

- [ ] **Step 3: Create `test/setup.ts`**

```typescript
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
```

- [ ] **Step 4: Add test script to `package.json`**

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:watch": "vitest --watch"
  }
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore(test): set up Vitest + React Testing Library"
```

---

### Task 9: Write and verify cn() utility unit test

**Files:**
- Create: `test/utils.test.ts`

- [ ] **Step 1: Write the failing test**

Create `test/utils.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn()', () => {
  it('merges simple class strings', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1');
  });

  it('resolves conflicting tailwind classes — later wins', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles conditional classes', () => {
    expect(cn('bg-cream', false && 'bg-terracotta', true && 'text-forest')).toBe('bg-cream text-forest');
  });

  it('handles arrays and objects', () => {
    expect(cn(['px-2', 'py-1'], { 'bg-cream': true, 'bg-terracotta': false })).toBe('px-2 py-1 bg-cream');
  });

  it('returns empty string when no args', () => {
    expect(cn()).toBe('');
  });
});
```

- [ ] **Step 2: Run tests to verify they pass**

```bash
npm run test:run
```

Expected: 5 tests pass.

- [ ] **Step 3: Commit**

```bash
git add test/utils.test.ts
git commit -m "test(lib): add cn() utility unit tests"
```

---

### Task 10: Build the `<Button>` primitive

**Files:**
- Create: `components/ui/button.tsx`

- [ ] **Step 1: Create `components/ui/button.tsx`**

```typescript
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary CTA with the bouncy stacked shadow from Design 8
        primary:
          'bg-terracotta text-cream rounded-full shadow-stack hover:translate-y-[2px] hover:shadow-stack-sm active:translate-y-[4px] active:shadow-none',
        // Secondary outlined CTA
        outline:
          'border-2 border-forest bg-transparent text-forest rounded-full hover:bg-forest hover:text-cream',
        // Tertiary text link with hand-drawn underline on hover
        ghost:
          'bg-transparent text-terracotta underline-offset-4 hover:underline px-2',
        // Forest-on-cream variant for use on warm yellow / cream backgrounds
        forest:
          'bg-forest text-cream rounded-full hover:bg-forest-deep',
        // Light variant for use on dark backgrounds
        light:
          'bg-cream text-forest rounded-full hover:bg-offwhite',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { buttonVariants };
```

- [ ] **Step 2: Verify type-check**

```bash
npm run type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/ui/button.tsx
git commit -m "feat(ui): add Button primitive with 5 brand variants"
```

---

### Task 11: Build the `<Badge>` primitive

**Files:**
- Create: `components/ui/badge.tsx`

- [ ] **Step 1: Create `components/ui/badge.tsx`**

```typescript
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
  {
    variants: {
      variant: {
        terracotta: 'bg-terracotta text-cream',
        warmyellow: 'bg-warmyellow text-forest',
        mint: 'bg-mint text-forest',
        pinky: 'bg-pinky text-forest',
        forest: 'bg-forest text-cream',
        outline: 'border border-forest text-forest bg-transparent',
        soft: 'bg-forest/10 text-forest',
      },
    },
    defaultVariants: {
      variant: 'soft',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/badge.tsx
git commit -m "feat(ui): add Badge primitive with 7 brand variants"
```

---

### Task 12: Build the `<Accordion>` primitive

**Files:**
- Create: `components/ui/accordion.tsx`

- [ ] **Step 1: Create `components/ui/accordion.tsx`**

```typescript
'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-forest/15', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-5 text-left font-semibold text-forest transition-colors hover:text-terracotta [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-charcoal data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-5 pt-0 leading-relaxed', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

- [ ] **Step 2: Add accordion keyframes to `tailwind.config.ts`**

Add to the `extend.keyframes` block:

```typescript
'accordion-down': {
  from: { height: '0' },
  to: { height: 'var(--radix-accordion-content-height)' },
},
'accordion-up': {
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: '0' },
},
```

Add to `extend.animation`:

```typescript
'accordion-down': 'accordion-down 0.2s ease-out',
'accordion-up': 'accordion-up 0.2s ease-out',
```

- [ ] **Step 3: Commit**

```bash
git add components/ui/accordion.tsx tailwind.config.ts
git commit -m "feat(ui): add Accordion primitive (Radix-based) for FAQ blocks"
```

---

### Task 13: Build the `<Section>` and `<Container>` layout primitives

**Files:**
- Create: `components/layout/section.tsx`, `components/layout/container.tsx`

- [ ] **Step 1: Create `components/layout/container.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide';
}

export function Container({ className, size = 'default', ...props }: ContainerProps) {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  };
  return <div className={cn('mx-auto w-full px-6 md:px-8', sizes[size], className)} {...props} />;
}
```

- [ ] **Step 2: Create `components/layout/section.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'cream' | 'cream-2' | 'forest' | 'warmyellow' | 'mint' | 'pinky' | 'offwhite' | 'transparent';
  spacing?: 'tight' | 'default' | 'loose';
}

const backgrounds: Record<NonNullable<SectionProps['background']>, string> = {
  cream: 'bg-cream',
  'cream-2': 'bg-cream-2',
  forest: 'bg-forest text-cream',
  warmyellow: 'bg-warmyellow',
  mint: 'bg-mint',
  pinky: 'bg-pinky',
  offwhite: 'bg-offwhite',
  transparent: 'bg-transparent',
};

const spacings: Record<NonNullable<SectionProps['spacing']>, string> = {
  tight: 'py-10 md:py-14',
  default: 'py-16 md:py-24',
  loose: 'py-24 md:py-32',
};

export function Section({
  className,
  background = 'transparent',
  spacing = 'default',
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(backgrounds[background], spacings[spacing], className)}
      {...props}
    />
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/
git commit -m "feat(layout): add Section and Container layout primitives"
```

---

### Task 14: Build the icon-tier illustration library

**Files:**
- Create: `components/brand/illustrations/icons/star.tsx`, `sparkle.tsx`, `heart.tsx`, `shield.tsx`, `paw.tsx`, `bone.tsx`, `stethoscope.tsx`, `mailbox.tsx`, `squiggle.tsx`, `dashed-arrow.tsx`, `us-factory-badge.tsx`, `index.ts`

These are simple SVG icon components. All follow the same pattern.

- [ ] **Step 1: Create `components/brand/illustrations/icons/star.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  variant?: 'clean' | 'hand-drawn';
}

export function Star({ size = 24, variant = 'clean', className, ...props }: IconProps) {
  if (variant === 'hand-drawn') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        style={{ transform: `rotate(${Math.random() * 8 - 4}deg)` }}
        {...props}
      >
        <path
          d="M12 3.2c.3 0 .6.2.7.5l2 5c.1.2.3.4.5.4l5.4.4c.7 0 .9.8.4 1.2l-4.1 3.4c-.2.1-.3.4-.2.6l1.3 5.2c.2.6-.5 1.1-1 .8l-4.5-2.8c-.2-.1-.5-.1-.7 0l-4.5 2.8c-.5.3-1.2-.2-1-.8l1.3-5.2c.1-.2 0-.5-.2-.6L3.3 10.7c-.5-.4-.3-1.2.4-1.2l5.4-.4c.2 0 .4-.2.5-.4l2-5c.1-.3.4-.5.7-.5z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
```

- [ ] **Step 2: Create `components/brand/illustrations/icons/sparkle.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Sparkle({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
      <circle cx="19" cy="5" r="1.5" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}
```

- [ ] **Step 3: Create `components/brand/illustrations/icons/heart.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Heart({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M12 21s-7.5-4.5-9.5-9C1.5 9 3 5.5 6.5 5.5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 5 3.5 4 6.5-2 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}
```

- [ ] **Step 4: Create `components/brand/illustrations/icons/shield.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  withHeart?: boolean;
}

export function Shield({ size = 24, withHeart = false, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      {withHeart && (
        <path d="M12 15s-3-2-3-4c0-1 1-2 2-2 1 0 1.5.5 2 1 .5-.5 1-1 2-1 1 0 2 1 2 2 0 2-3 4-3 4z" fill="currentColor" />
      )}
    </svg>
  );
}
```

- [ ] **Step 5: Create `components/brand/illustrations/icons/paw.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Paw({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <ellipse cx="7" cy="8" rx="2" ry="2.5" />
      <ellipse cx="12" cy="6" rx="2" ry="2.5" />
      <ellipse cx="17" cy="8" rx="2" ry="2.5" />
      <ellipse cx="4" cy="13" rx="1.8" ry="2.2" />
      <ellipse cx="20" cy="13" rx="1.8" ry="2.2" />
      <path d="M12 11c-3 0-5 3-5 6 0 2 1 4 5 4s5-2 5-4c0-3-2-6-5-6z" />
    </svg>
  );
}
```

- [ ] **Step 6: Create `components/brand/illustrations/icons/bone.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Bone({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M5.5 6.5c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5c.5 0 1 .5 1 1s-.5 1-1 1c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5c.5 0 1-.5 1-1l7-7c0-.5.5-1 1-1 0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5-1 2.5-2.5 2.5c-.5 0-1 .5-1 1s.5 1 1 1c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5-2.5-1-2.5-2.5c-.5 0-1-.5-1-1l-7 7c0 .5-.5 1-1 1 0 1.5-1 2.5-2.5 2.5z" />
    </svg>
  );
}
```

- [ ] **Step 7: Create `components/brand/illustrations/icons/stethoscope.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Stethoscope({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
      <circle cx="18" cy="11" r="2.5" fill="currentColor" />
    </svg>
  );
}
```

- [ ] **Step 8: Create `components/brand/illustrations/icons/mailbox.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Mailbox({ size = 64, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <rect x="14" y="22" width="36" height="22" rx="11" fill="#C8765B" />
      <rect x="14" y="22" width="36" height="22" rx="11" stroke="#1F3A2E" strokeWidth="2" />
      <rect x="30" y="44" width="4" height="14" fill="#1F3A2E" />
      <path d="M44 28 L44 34 L52 34 L52 30 Z" fill="#E8B547" stroke="#1F3A2E" strokeWidth="2" />
      <circle cx="22" cy="33" r="2" fill="#1F3A2E" />
      <rect x="26" y="30" width="14" height="6" rx="1" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="1.5" />
    </svg>
  );
}
```

- [ ] **Step 9: Create `components/brand/illustrations/icons/squiggle.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
}

export function Squiggle({ width = 120, className, ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={12}
      viewBox="0 0 120 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M2 6 Q 15 1, 30 6 T 60 6 T 90 6 T 118 6" />
    </svg>
  );
}
```

- [ ] **Step 10: Create `components/brand/illustrations/icons/dashed-arrow.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function DashedArrow({ width = 80, height = 40, className, ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M5 5 Q 35 5, 50 20 T 72 32" />
      <path d="M68 28 L 72 32 L 65 33" strokeDasharray="0" fill="currentColor" />
    </svg>
  );
}
```

- [ ] **Step 11: Create `components/brand/illustrations/icons/us-factory-badge.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function USFactoryBadge({ size = 32, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="1.5" />
      <rect x="9" y="14" width="14" height="9" fill="#C8765B" />
      <polygon points="9,14 16,9 23,14" fill="#1F3A2E" />
      <rect x="14" y="17" width="4" height="6" fill="#F5EFE6" />
      <text x="16" y="29" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#1F3A2E">USA</text>
    </svg>
  );
}
```

- [ ] **Step 12: Create `components/brand/illustrations/icons/index.ts`**

```typescript
export { Star } from './star';
export { Sparkle } from './sparkle';
export { Heart } from './heart';
export { Shield } from './shield';
export { Paw } from './paw';
export { Bone } from './bone';
export { Stethoscope } from './stethoscope';
export { Mailbox } from './mailbox';
export { Squiggle } from './squiggle';
export { DashedArrow } from './dashed-arrow';
export { USFactoryBadge } from './us-factory-badge';
```

- [ ] **Step 13: Commit**

```bash
git add components/brand/illustrations/icons/
git commit -m "feat(brand): add 11 inline-SVG icon components for illustration library"
```

---

### Task 15: Build the `<Blob>` decorative component

**Files:**
- Create: `components/brand/illustrations/decor/blob.tsx`

Blobs are the organic shape backgrounds behind product cards and the hero (Design 8 hybrid).

- [ ] **Step 1: Create `components/brand/illustrations/decor/blob.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface BlobProps extends React.SVGProps<SVGSVGElement> {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'warmyellow' | 'terracotta' | 'mint' | 'pinky' | 'cream' | 'forest';
}

const blobPaths: Record<NonNullable<BlobProps['variant']>, string> = {
  1: 'M 50,5 Q 95,15 95,50 Q 85,90 50,95 Q 15,85 5,50 Q 10,15 50,5 Z',
  2: 'M 50,3 Q 90,20 95,50 Q 88,92 55,97 Q 12,90 5,55 Q 8,18 50,3 Z',
  3: 'M 50,8 Q 88,10 95,45 Q 90,88 52,95 Q 10,92 8,52 Q 10,12 50,8 Z',
  4: 'M 50,6 Q 92,18 93,55 Q 82,95 48,93 Q 8,88 7,48 Q 12,10 50,6 Z',
  5: 'M 48,4 Q 88,16 95,48 Q 90,92 50,94 Q 10,90 6,52 Q 10,14 48,4 Z',
  6: 'M 52,5 Q 90,22 92,52 Q 86,90 48,96 Q 14,88 6,50 Q 12,12 52,5 Z',
};

const colors: Record<NonNullable<BlobProps['color']>, string> = {
  warmyellow: '#E8B547',
  terracotta: '#C8765B',
  mint: '#B8D4C4',
  pinky: '#F4B8A8',
  cream: '#F5EFE6',
  forest: '#1F3A2E',
};

export function Blob({ variant = 1, color = 'warmyellow', className, ...props }: BlobProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d={blobPaths[variant]} fill={colors[color]} />
    </svg>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/brand/illustrations/decor/blob.tsx
git commit -m "feat(brand): add Blob component with 6 variants × 6 colors"
```

---

### Task 16: Build the `<TapeAccent>` decorative component

**Files:**
- Create: `components/brand/illustrations/decor/tape-accent.tsx`

Tape accents are used on the founder polaroid corners (Design 8 hero).

- [ ] **Step 1: Create `components/brand/illustrations/decor/tape-accent.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface TapeAccentProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  rotation?: number;
  color?: 'warmyellow' | 'mint' | 'pinky';
}

const colors = {
  warmyellow: '#E8B547',
  mint: '#B8D4C4',
  pinky: '#F4B8A8',
};

export function TapeAccent({
  width = 80,
  rotation = -8,
  color = 'warmyellow',
  className,
  ...props
}: TapeAccentProps) {
  return (
    <svg
      width={width}
      height={width / 3}
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      style={{ transform: `rotate(${rotation}deg)` }}
      {...props}
    >
      <rect
        x="2"
        y="6"
        width="76"
        height="16"
        fill={colors[color]}
        fillOpacity="0.85"
      />
      <line x1="8" y1="10" x2="8" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="20" y1="10" x2="20" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="32" y1="10" x2="32" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="44" y1="10" x2="44" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="56" y1="10" x2="56" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="68" y1="10" x2="68" y2="18" stroke="rgba(255,255,255,0.4)" />
    </svg>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/brand/illustrations/decor/tape-accent.tsx
git commit -m "feat(brand): add TapeAccent decorative component for polaroid corners"
```

---

### Task 17: Build the `<Mascot>` character component

**Files:**
- Create: `components/brand/illustrations/characters/mascot.tsx`

The Mascot is the central illustrated dog used throughout the brand (Design 8 hero, nav accent, footer, 404).

- [ ] **Step 1: Create `components/brand/illustrations/characters/mascot.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface MascotProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'sitting' | 'peeking' | 'happy' | 'sleepy';
  size?: number;
  bodyColor?: string;
  outlineColor?: string;
}

export function Mascot({
  variant = 'sitting',
  size = 200,
  bodyColor = '#E8B547',
  outlineColor = '#1F3A2E',
  className,
  ...props
}: MascotProps) {
  if (variant === 'peeking') {
    return (
      <svg
        width={size}
        height={size * 0.5}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        {...props}
      >
        {/* Head peeking over a wave */}
        <ellipse cx="100" cy="70" rx="55" ry="40" fill={bodyColor} />
        <ellipse cx="100" cy="60" rx="42" ry="32" fill={bodyColor} />
        {/* Ears */}
        <ellipse cx="65" cy="50" rx="14" ry="22" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        <ellipse cx="135" cy="50" rx="14" ry="22" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        <ellipse cx="100" cy="60" rx="42" ry="32" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        {/* Eyes */}
        <circle cx="85" cy="62" r="4" fill={outlineColor} />
        <circle cx="115" cy="62" r="4" fill={outlineColor} />
        <circle cx="86.5" cy="60.5" r="1.5" fill="#FAFAFA" />
        <circle cx="116.5" cy="60.5" r="1.5" fill="#FAFAFA" />
        {/* Nose */}
        <ellipse cx="100" cy="74" rx="5" ry="3.5" fill={outlineColor} />
        {/* Smile */}
        <path d="M92 80 Q 100 88 108 80" stroke={outlineColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'happy') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        {...props}
      >
        {/* Body sitting + tail wag */}
        <ellipse cx="100" cy="150" rx="55" ry="40" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        <path d="M150 130 Q 175 110 175 95 Q 170 100 160 110 Z" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        {/* Head */}
        <ellipse cx="100" cy="90" rx="48" ry="42" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        {/* Ears flopping */}
        <ellipse cx="58" cy="78" rx="16" ry="28" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" transform="rotate(-25 58 78)" />
        <ellipse cx="142" cy="78" rx="16" ry="28" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" transform="rotate(25 142 78)" />
        {/* Eyes — closed/happy (^^) */}
        <path d="M78 88 Q 84 82 90 88" stroke={outlineColor} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M110 88 Q 116 82 122 88" stroke={outlineColor} strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Nose */}
        <ellipse cx="100" cy="102" rx="6" ry="4" fill={outlineColor} />
        {/* Tongue out */}
        <path d="M92 112 Q 100 124 108 112 L 108 118 Q 100 128 92 118 Z" fill="#F4B8A8" stroke={outlineColor} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === 'sleepy') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        {...props}
      >
        {/* Body curled up */}
        <ellipse cx="100" cy="130" rx="70" ry="50" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        {/* Head resting on body */}
        <ellipse cx="65" cy="110" rx="35" ry="30" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
        {/* Ear */}
        <ellipse cx="50" cy="95" rx="12" ry="20" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" transform="rotate(-30 50 95)" />
        {/* Closed eye */}
        <path d="M55 110 Q 62 106 70 110" stroke={outlineColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Nose */}
        <ellipse cx="42" cy="118" rx="4" ry="3" fill={outlineColor} />
        {/* Zzz */}
        <text x="120" y="60" fontSize="16" fontFamily="serif" fontWeight="bold" fill={outlineColor}>z</text>
        <text x="135" y="48" fontSize="20" fontFamily="serif" fontWeight="bold" fill={outlineColor}>z</text>
        <text x="155" y="35" fontSize="26" fontFamily="serif" fontWeight="bold" fill={outlineColor}>Z</text>
      </svg>
    );
  }

  // Default: sitting
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      {/* Body */}
      <ellipse cx="100" cy="150" rx="50" ry="38" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      {/* Tail */}
      <path d="M148 130 Q 168 115 170 100 Q 160 105 152 118 Z" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      {/* Head */}
      <ellipse cx="100" cy="90" rx="45" ry="40" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      {/* Ears */}
      <ellipse cx="62" cy="80" rx="14" ry="25" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      <ellipse cx="138" cy="80" rx="14" ry="25" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      {/* Eyes */}
      <ellipse cx="83" cy="88" rx="5" ry="6" fill={outlineColor} />
      <ellipse cx="117" cy="88" rx="5" ry="6" fill={outlineColor} />
      <circle cx="85" cy="86" r="1.8" fill="#FAFAFA" />
      <circle cx="119" cy="86" r="1.8" fill="#FAFAFA" />
      {/* Nose */}
      <ellipse cx="100" cy="105" rx="6" ry="4" fill={outlineColor} />
      {/* Smile */}
      <path d="M90 115 Q 100 122 110 115" stroke={outlineColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Front legs */}
      <rect x="80" y="170" width="10" height="20" rx="5" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
      <rect x="110" y="170" width="10" height="20" rx="5" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
    </svg>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/brand/illustrations/characters/mascot.tsx
git commit -m "feat(brand): add Mascot character component with 4 variants"
```

---

### Task 18: Build the `<DogAvatar>` review-avatar component

**Files:**
- Create: `components/brand/illustrations/characters/dog-avatar.tsx`

Six different dog faces used as review/testimonial avatars.

- [ ] **Step 1: Create `components/brand/illustrations/characters/dog-avatar.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface DogAvatarProps extends React.SVGProps<SVGSVGElement> {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: number;
}

const palette = ['#E8B547', '#C8765B', '#F4B8A8', '#B8D4C4', '#1F3A2E', '#F5EFE6'];
const outline = '#1F3A2E';

export function DogAvatar({ variant = 1, size = 80, className, ...props }: DogAvatarProps) {
  const fill = palette[variant - 1];
  const fillIsForest = variant === 5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block rounded-full', className)}
      {...props}
    >
      <circle cx="40" cy="40" r="40" fill={variant === 6 ? '#1F3A2E' : '#F5EFE6'} />
      <g transform="translate(0, 4)">
        {/* Body for variants 1, 3, 5 — sitting */}
        {(variant === 1 || variant === 3 || variant === 5) && (
          <ellipse cx="40" cy="58" rx="20" ry="14" fill={fill} stroke={outline} strokeWidth="1.5" />
        )}
        {/* Head */}
        <ellipse cx="40" cy="38" rx="18" ry="16" fill={fill} stroke={outline} strokeWidth="1.5" />
        {/* Ears */}
        {variant === 1 && (
          // Floppy ears
          <>
            <ellipse cx="24" cy="32" rx="6" ry="10" fill={fill} stroke={outline} strokeWidth="1.5" transform="rotate(-20 24 32)" />
            <ellipse cx="56" cy="32" rx="6" ry="10" fill={fill} stroke={outline} strokeWidth="1.5" transform="rotate(20 56 32)" />
          </>
        )}
        {variant === 2 && (
          // Pointy ears
          <>
            <polygon points="24,28 22,12 32,24" fill={fill} stroke={outline} strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="56,28 58,12 48,24" fill={fill} stroke={outline} strokeWidth="1.5" strokeLinejoin="round" />
          </>
        )}
        {variant === 3 && (
          // One up, one down
          <>
            <polygon points="22,28 20,14 30,24" fill={fill} stroke={outline} strokeWidth="1.5" strokeLinejoin="round" />
            <ellipse cx="56" cy="32" rx="5" ry="9" fill={fill} stroke={outline} strokeWidth="1.5" transform="rotate(25 56 32)" />
          </>
        )}
        {variant === 4 && (
          // Round ears (Frenchie)
          <>
            <circle cx="24" cy="26" r="6" fill={fill} stroke={outline} strokeWidth="1.5" />
            <circle cx="56" cy="26" r="6" fill={fill} stroke={outline} strokeWidth="1.5" />
          </>
        )}
        {variant === 5 && (
          // Short ears
          <>
            <ellipse cx="26" cy="26" rx="5" ry="6" fill={fill} stroke={outline} strokeWidth="1.5" />
            <ellipse cx="54" cy="26" rx="5" ry="6" fill={fill} stroke={outline} strokeWidth="1.5" />
          </>
        )}
        {variant === 6 && (
          // Pointy + eye patch
          <>
            <polygon points="22,28 20,12 32,24" fill={fill} stroke={outline} strokeWidth="1.5" strokeLinejoin="round" />
            <polygon points="58,28 60,12 48,24" fill={fill} stroke={outline} strokeWidth="1.5" strokeLinejoin="round" />
            <ellipse cx="32" cy="40" rx="6" ry="5" fill="#2A2A2A" />
          </>
        )}
        {/* Re-draw head front of ears */}
        <ellipse cx="40" cy="38" rx="18" ry="16" fill={fill} stroke={outline} strokeWidth="1.5" />
        {/* Eyes */}
        <circle cx="33" cy="38" r="2.2" fill={outline} />
        <circle cx="47" cy="38" r="2.2" fill={outline} />
        <circle cx="33.6" cy="37.3" r="0.8" fill={fillIsForest ? '#FAFAFA' : '#FAFAFA'} />
        <circle cx="47.6" cy="37.3" r="0.8" fill="#FAFAFA" />
        {/* Nose */}
        <ellipse cx="40" cy="46" rx="3" ry="2" fill={outline} />
        {/* Mouth — tongue out for variant 2 */}
        {variant === 2 ? (
          <path d="M36 50 Q 40 56 44 50 L 44 53 Q 40 58 36 53 Z" fill="#F4B8A8" stroke={outline} strokeWidth="1" />
        ) : (
          <path d="M36 49 Q 40 53 44 49" stroke={outline} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        )}
      </g>
    </svg>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/brand/illustrations/characters/dog-avatar.tsx
git commit -m "feat(brand): add DogAvatar component with 6 distinct dog variants"
```

---

### Task 19: Build the `<CalloutPill>` component

**Files:**
- Create: `components/brand/illustrations/callout-pill.tsx`

Used for the "5 strains!" / "No fillers" hand-drawn callouts in the "Made with weird amounts of love" homepage section.

- [ ] **Step 1: Create `components/brand/illustrations/callout-pill.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface CalloutPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'caveat' | 'clean';
  color?: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
  rotation?: number;
}

const colors = {
  warmyellow: 'bg-warmyellow text-forest',
  terracotta: 'bg-terracotta text-cream',
  mint: 'bg-mint text-forest',
  pinky: 'bg-pinky text-forest',
};

export function CalloutPill({
  variant = 'caveat',
  color = 'warmyellow',
  rotation = -3,
  className,
  children,
  ...props
}: CalloutPillProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-4 py-1.5 shadow-stack-sm',
        colors[color],
        variant === 'caveat' ? 'font-hand text-xl' : 'font-sans text-xs font-semibold uppercase tracking-wider',
        className,
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      {...props}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Create `components/brand/illustrations/index.ts` barrel export**

```typescript
export * from './icons';
export { Blob } from './decor/blob';
export { TapeAccent } from './decor/tape-accent';
export { Mascot } from './characters/mascot';
export { DogAvatar } from './characters/dog-avatar';
export { CalloutPill } from './callout-pill';
```

- [ ] **Step 3: Commit**

```bash
git add components/brand/illustrations/
git commit -m "feat(brand): add CalloutPill + barrel export for illustration library"
```

---

### Task 20: Build the `<Canister>` product mockup component

**Files:**
- Create: `components/brand/canister.tsx`

CSS-rendered product canister used until real product photography lands. Critical for PDPs in Phase 3.

- [ ] **Step 1: Create `components/brand/canister.tsx`**

```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface CanisterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** SKU name shown big in the middle */
  name: string;
  /** Color band — Daily Probiotic = warmyellow, Hip + Joint = terracotta, Daily Duo = mint */
  bandColor: 'warmyellow' | 'terracotta' | 'mint' | 'forest';
  /** Bottom label, e.g. "30 SOFT CHEWS" */
  countLabel?: string;
  /** Optional tagline shown small under the name */
  tagline?: string;
  /** Size of the canister */
  size?: 'sm' | 'md' | 'lg';
  /** Optional sticker overlay text, e.g. "VET", "500mg" */
  sticker?: string;
  stickerColor?: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
}

const sizes: Record<NonNullable<CanisterProps['size']>, { container: string; name: string; band: string }> = {
  sm: { container: 'w-24 h-32', name: 'text-base', band: 'h-8' },
  md: { container: 'w-40 h-56', name: 'text-xl', band: 'h-12' },
  lg: { container: 'w-56 h-80', name: 'text-3xl', band: 'h-16' },
};

const bandColors: Record<CanisterProps['bandColor'], string> = {
  warmyellow: 'bg-warmyellow',
  terracotta: 'bg-terracotta',
  mint: 'bg-mint',
  forest: 'bg-forest',
};

const stickerColors: Record<NonNullable<CanisterProps['stickerColor']>, string> = {
  warmyellow: 'bg-warmyellow text-forest',
  terracotta: 'bg-terracotta text-cream',
  mint: 'bg-mint text-forest',
  pinky: 'bg-pinky text-forest',
};

export function Canister({
  name,
  bandColor,
  countLabel = '30 SOFT CHEWS',
  tagline,
  size = 'md',
  sticker,
  stickerColor = 'pinky',
  className,
  ...props
}: CanisterProps) {
  const s = sizes[size];
  return (
    <div
      className={cn(
        'relative inline-block bg-cream rounded-2xl shadow-soft border border-forest/10 overflow-hidden flex-shrink-0',
        s.container,
        className,
      )}
      {...props}
    >
      {/* Top lid */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-forest/15 rounded-t-2xl" />
      {/* Light highlight (gloss) */}
      <div className="absolute top-3 left-2 bottom-2 w-2 bg-white/30 rounded-full" />

      {/* Wordmark top */}
      <div className="absolute top-5 left-0 right-0 text-center">
        <span className="font-display text-xs text-forest tracking-wide">PawBite</span>
      </div>

      {/* Color band with product name */}
      <div className={cn('absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center', s.band, bandColors[bandColor])}>
        <span className={cn('fraunces-soft font-bold leading-none', s.name, bandColor === 'forest' || bandColor === 'terracotta' ? 'text-cream' : 'text-forest')}>
          {name}
        </span>
        {tagline && (
          <span className={cn('text-[10px] italic mt-0.5', bandColor === 'forest' || bandColor === 'terracotta' ? 'text-cream/80' : 'text-forest/70')}>
            {tagline}
          </span>
        )}
      </div>

      {/* Bottom count label */}
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="text-[9px] font-mono uppercase tracking-widest text-forest/60">{countLabel}</span>
      </div>

      {/* Optional sticker overlay */}
      {sticker && (
        <div
          className={cn(
            'absolute -top-2 -right-2 rounded-full px-2 py-1 text-[10px] font-bold shadow-stack-sm',
            stickerColors[stickerColor],
          )}
          style={{ transform: 'rotate(8deg)' }}
        >
          {sticker}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/brand/canister.tsx
git commit -m "feat(brand): add Canister CSS product mockup component"
```

---

### Task 21: Build the `<WelcomeBanner>` component

**Files:**
- Create: `components/layout/welcome-banner.tsx`

- [ ] **Step 1: Create `components/layout/welcome-banner.tsx`**

```typescript
import * as React from 'react';
import { Bone } from '@/components/brand/illustrations/icons/bone';
import { cn } from '@/lib/utils';

interface WelcomeBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to show the banner. Allows runtime dismissal in future phases. */
  show?: boolean;
}

export function WelcomeBanner({ show = true, className, ...props }: WelcomeBannerProps) {
  if (!show) return null;
  return (
    <div
      className={cn(
        'w-full bg-terracotta text-cream text-xs md:text-sm py-2 px-4 text-center font-medium',
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        <Bone size={14} className="text-cream/80" />
        Welcome offer: 30% off your first order + free shipping. Code <span className="font-bold tracking-wider">WELCOME</span>
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/welcome-banner.tsx
git commit -m "feat(layout): add WelcomeBanner top strip"
```

---

### Task 22: Build the `<Header>` (sticky nav) component

**Files:**
- Create: `components/layout/header.tsx`

- [ ] **Step 1: Create `components/layout/header.tsx`**

```typescript
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/products', label: 'Shop' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cartCount = 0; // Will be wired in Phase 4

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-forest/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Wordmark + mascot accent */}
          <Link href="/" className="flex items-center gap-2 group">
            <Mascot variant="peeking" size={36} bodyColor="#E8B547" className="group-hover:animate-wiggle" />
            <span className="font-display text-2xl text-forest leading-none">PawBite</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: cart + CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/cart" aria-label="Cart" className="relative p-2 text-forest hover:text-terracotta transition-colors">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-terracotta text-cream text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button variant="primary" size="sm" asChild className="hidden md:inline-flex">
              <Link href="/quiz">Take the quiz</Link>
            </Button>
            <button
              className="md:hidden p-2 text-forest"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 border-t border-forest/10 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-forest"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild className="mt-2 w-full">
              <Link href="/quiz" onClick={() => setMobileOpen(false)}>Take the quiz</Link>
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/header.tsx
git commit -m "feat(layout): add sticky Header with mascot accent and mobile menu"
```

---

### Task 23: Build the `<Footer>` component

**Files:**
- Create: `components/layout/footer.tsx`

- [ ] **Step 1: Create `components/layout/footer.tsx`**

```typescript
import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { Button } from '@/components/ui/button';

const linkColumns = [
  {
    title: 'Shop',
    links: [
      { href: '/products/daily-probiotic', label: 'Daily Probiotic' },
      { href: '/products/hip-and-joint', label: 'Hip + Joint' },
      { href: '/products/daily-duo', label: 'The Daily Duo' },
      { href: '/quiz', label: 'Take the quiz' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { href: '/learn', label: 'Articles' },
      { href: '/concerns', label: 'Concerns' },
      { href: '/breeds', label: 'By breed' },
      { href: '/ingredients', label: 'Ingredients' },
      { href: '/science', label: 'The science' },
    ],
  },
  {
    title: 'Help',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/shipping', label: 'Shipping' },
      { href: '/returns', label: 'Returns' },
      { href: '/account/subscriptions', label: 'Manage subscription' },
      { href: 'mailto:help@pawbite.com', label: 'Contact us' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/about', label: 'About PawBite' },
      { href: '/vets', label: 'Our vets' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/perks', label: 'Subscriber perks' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream pt-32 pb-10 relative overflow-hidden">
      {/* Mascot peeking over the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Mascot variant="peeking" size={120} bodyColor="#E8B547" />
      </div>

      <Container>
        {/* Subscribe & Save callout */}
        <div className="text-center mb-16">
          <p className="font-hand text-3xl text-warmyellow mb-2">Subscribe & save 20%.</p>
          <p className="text-cream/80 text-sm max-w-md mx-auto">
            Plus free shipping on every order. Skip, swap, or cancel in one click — no calls, no fees.
          </p>
          <Button variant="light" size="md" className="mt-6" asChild>
            <Link href="/products">Browse the line</Link>
          </Button>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-lg text-warmyellow mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-cream/85 hover:text-warmyellow transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: brand line + legal */}
        <div className="border-t border-cream/15 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="font-display text-2xl text-cream mb-1">PawBite</div>
            <p className="font-hand text-warmyellow text-lg leading-tight">Made by humans in Hudson Valley, NY.</p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-xs text-cream/60">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-cream">Privacy</Link>
              <Link href="/terms" className="hover:text-cream">Terms</Link>
              <Link href="/editorial" className="hover:text-cream">Editorial policy</Link>
            </div>
            <p>© {new Date().getFullYear()} PawBite. Vet-formulated. Dog-approved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat(layout): add Footer with mascot accent, 4-col links, and Caveat sign-off"
```

---

### Task 24: Build the `<StickyATCBar>` component

**Files:**
- Create: `components/layout/sticky-atc-bar.tsx`

- [ ] **Step 1: Create `components/layout/sticky-atc-bar.tsx`**

```typescript
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StickyATCBarProps {
  /** Show the bar. Defaults true. Set false on pages where it'd conflict (cart, checkout, account). */
  show?: boolean;
}

export function StickyATCBar({ show = true }: StickyATCBarProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!show) return;
    // Reveal after user scrolls past the hero (~600px) so it doesn't dominate the first view.
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="bg-cream border-t-2 border-forest shadow-[0_-8px_24px_-12px_rgba(31,58,46,0.18)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Badge variant="warmyellow" className="hidden sm:inline-flex">Save 32%</Badge>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-forest truncate">The Daily Duo</div>
              <div className="text-xs text-forest/70">
                <span className="font-bold text-terracotta">$47.60</span>
                <span className="line-through ml-1 text-forest/40">$70</span>
                <span className="ml-1 hidden sm:inline">/ month</span>
              </div>
            </div>
          </div>
          <Button variant="primary" size="md" asChild>
            <Link href="/products/daily-duo">Add the Duo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/sticky-atc-bar.tsx
git commit -m "feat(layout): add StickyATCBar that reveals on scroll past hero"
```

---

### Task 25: Build the SEO/schema helpers

**Files:**
- Create: `lib/seo.ts`

- [ ] **Step 1: Create `lib/seo.ts`**

```typescript
export const SITE_NAME = 'PawBite';
export const SITE_DESCRIPTION =
  'The good stuff your dog needs. Nothing weird. Vet-formulated daily chews built for the essentials — gut and joints, done right.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pawbite.vercel.app';
export const ORG_LEGAL_NAME = 'PawBite Inc.';
export const ORG_LOCATION = 'Hudson Valley, NY';

/** JSON-LD: Organization */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-default.png`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hudson Valley',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'help@pawbite.com',
      availableLanguage: 'en',
    },
    sameAs: [
      // Populate as social handles are claimed
    ],
  };
}

/** JSON-LD: WebSite (enables Sitelinks search box) */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/learn?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** Render JSON-LD into a script tag — safe for use in server components */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/seo.ts
git commit -m "feat(seo): add Organization + WebSite schema helpers and JsonLd component"
```

---

### Task 26: Build the root `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx` (replace the create-next-app default)

- [ ] **Step 1: Replace `app/layout.tsx` contents**

```typescript
import type { Metadata } from 'next';
import { fontDisplay, fontSerif, fontSans, fontHand, fontMono } from '@/lib/fonts';
import { JsonLd, organizationSchema, websiteSchema, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/seo';
import { WelcomeBanner } from '@/components/layout/welcome-banner';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyATCBar } from '@/components/layout/sticky-atc-bar';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — The good stuff your dog needs. Nothing weird.`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ['dog probiotic', 'dog joint supplement', 'vet-formulated dog supplements', 'dog gut health'],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSerif.variable} ${fontSans.variable} ${fontHand.variable} ${fontMono.variable}`}
    >
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="bg-cream text-forest min-h-screen flex flex-col">
        <WelcomeBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyATCBar />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Add placeholder OG image**

Create `public/og-default.png` as a 1200×630 PNG. For the placeholder, use a cream-colored background with the PawBite wordmark — a real designer can swap this in pre-launch. Use any image editor or download a temporary placeholder; the file must exist for the Metadata API to resolve.

A quick way (from any terminal with ImageMagick installed):

```bash
brew install imagemagick 2>/dev/null
convert -size 1200x630 xc:'#F5EFE6' -gravity center -pointsize 96 -fill '#1F3A2E' -font 'Times-BoldItalic' -annotate +0+0 'PawBite' public/og-default.png
```

If you don't have ImageMagick, save any 1200×630 PNG to `public/og-default.png` for now — the real OG image is a pre-launch deliverable.

- [ ] **Step 3: Verify dev server**

```bash
npm run dev
```

Open `http://localhost:3000`. You should see:
- WelcomeBanner at top with "Welcome offer: 30% off..."
- Header with PawBite wordmark + mascot + nav links + cart + CTA
- Footer with mascot peeking over, 4 link columns, "Made by humans in Hudson Valley, NY"
- StickyATCBar should appear when you scroll past ~600px (won't appear on a short placeholder page yet — that's fine)
- View source: `<script type="application/ld+json">` blocks present for Organization + WebSite

Stop the server.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx public/og-default.png
git commit -m "feat(app): wire root layout with fonts, schema, Header/Footer/Welcome/StickyATC"
```

---

### Task 27: Build the placeholder home page

**Files:**
- Modify: `app/page.tsx` (replace the create-next-app default)

- [ ] **Step 1: Replace `app/page.tsx` contents**

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';

export default function HomePage() {
  return (
    <>
      <Section background="cream" spacing="loose">
        <Container size="narrow" className="text-center">
          <CalloutPill variant="caveat" color="warmyellow" rotation={-4} className="mb-6">
            coming soon —
          </CalloutPill>
          <h1 className="fraunces-soft text-5xl md:text-7xl font-bold leading-tight mb-6">
            The good stuff your dog needs.
            <br />
            <span className="text-terracotta italic">Nothing weird.</span>
          </h1>
          <p className="text-lg text-charcoal max-w-xl mx-auto mb-10 leading-relaxed">
            PawBite is a new line of vet-formulated dog supplements. Two products. Both daily.
            Real ingredients, no fluff. The site is in active development — come back soon, or
            drop your email and we&apos;ll tell you when we ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">Notify me at launch</Button>
            <Button variant="outline" size="lg">See the design directions</Button>
          </div>
          <div className="mt-16 flex justify-center">
            <Mascot variant="sitting" size={240} bodyColor="#E8B547" />
          </div>
        </Container>
      </Section>

      <Section background="forest" spacing="default" className="text-center">
        <Container size="narrow">
          <p className="font-hand text-3xl text-warmyellow mb-2">A note from our founder —</p>
          <p className="text-cream/90 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            I started PawBite because my dog Theo&apos;s gut was a wreck. Most dog supplements
            are made by people who&apos;ve never owned a sick dog. We&apos;re building the brand
            we wished existed.
          </p>
          <p className="font-hand text-2xl text-warmyellow mt-4">— Sam Whitlock, founder</p>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Verify dev server renders the page**

```bash
npm run dev
```

Visit `http://localhost:3000`. Should see hero with the headline, mascot below, founder note section, and the Header/Footer/WelcomeBanner from the layout.

Resize browser to 375px width — should look good on mobile too. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat(app): add placeholder home page with hero + founder note"
```

---

### Task 28: Build dev-only `/dev/colors` visual verification page

**Files:**
- Create: `app/(dev)/colors/page.tsx`

This is a developer-only page that renders every brand color swatch. Used to verify the Tailwind palette loaded correctly and as a reference during component build.

- [ ] **Step 1: Create `app/(dev)/colors/page.tsx`**

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

const palette = [
  { name: 'cream', hex: '#F5EFE6', textOn: 'forest' },
  { name: 'cream-2', hex: '#EFE7D8', textOn: 'forest' },
  { name: 'offwhite', hex: '#FAFAFA', textOn: 'forest' },
  { name: 'forest', hex: '#1F3A2E', textOn: 'cream' },
  { name: 'forest-deep', hex: '#142A20', textOn: 'cream' },
  { name: 'forest-mid', hex: '#2A4538', textOn: 'cream' },
  { name: 'terracotta', hex: '#C8765B', textOn: 'cream' },
  { name: 'terracotta-dark', hex: '#B05D43', textOn: 'cream' },
  { name: 'warmyellow', hex: '#E8B547', textOn: 'forest' },
  { name: 'pinky', hex: '#F4B8A8', textOn: 'forest' },
  { name: 'mint', hex: '#B8D4C4', textOn: 'forest' },
  { name: 'charcoal', hex: '#2A2A2A', textOn: 'cream' },
  { name: 'cream-muted', hex: '#D4CFC4', textOn: 'forest' },
];

export const metadata = { title: 'Dev — Color Palette', robots: { index: false } };

export default function DevColorsPage() {
  return (
    <Section spacing="default">
      <Container>
        <h1 className="fraunces-soft text-4xl mb-2">Brand palette</h1>
        <p className="text-charcoal mb-10">Verify every color from `tailwind.config.ts` renders.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {palette.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl p-6 h-32 flex flex-col justify-between"
              style={{ backgroundColor: c.hex, color: c.textOn === 'cream' ? '#F5EFE6' : '#1F3A2E' }}
            >
              <div className="font-mono text-sm">{c.name}</div>
              <div className="font-mono text-xs opacity-70">{c.hex}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000/dev/colors`. Verify all 13 swatches render with correct colors and labels.

Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/\(dev\)/colors/page.tsx
git commit -m "feat(dev): add /dev/colors visual verification page"
```

---

### Task 29: Build dev-only `/dev/fonts` visual verification page

**Files:**
- Create: `app/(dev)/fonts/page.tsx`

- [ ] **Step 1: Create `app/(dev)/fonts/page.tsx`**

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export const metadata = { title: 'Dev — Typography', robots: { index: false } };

export default function DevFontsPage() {
  return (
    <Section spacing="default">
      <Container size="narrow">
        <h1 className="fraunces-soft text-4xl mb-10">Typography</h1>

        <Specimen
          title="Bagel Fat One — Wordmark only"
          variableHint="--font-display"
          className="font-display text-5xl text-forest"
          sample="PawBite"
        />

        <Specimen
          title="Fraunces SOFT axis — Headlines (.fraunces-soft)"
          variableHint="--font-serif"
          className="fraunces-soft text-5xl text-forest"
          sample="The good stuff your dog needs."
        />

        <Specimen
          title="Fraunces italic"
          variableHint="--font-serif"
          className="font-serif italic text-4xl text-terracotta"
          sample="Nothing weird."
        />

        <Specimen
          title="Inter — Body"
          variableHint="--font-sans"
          className="font-sans text-base text-charcoal leading-relaxed"
          sample="PawBite makes the essentials your dog actually needs — vet-formulated, transparent, and made to be the easiest part of their day."
        />

        <Specimen
          title="Caveat — Handwriting accents"
          variableHint="--font-hand"
          className="font-hand text-3xl text-terracotta"
          sample="A note from our founder —"
        />

        <Specimen
          title="JetBrains Mono — Data"
          variableHint="--font-mono"
          className="font-mono text-sm text-forest"
          sample="Bacillus coagulans GBI-30, 6086 — 1B CFU"
        />
      </Container>
    </Section>
  );
}

function Specimen({
  title, variableHint, className, sample,
}: { title: string; variableHint: string; className: string; sample: string }) {
  return (
    <div className="border-t border-forest/15 py-8">
      <div className="font-mono text-xs text-forest/60 uppercase tracking-wider mb-1">{title}</div>
      <div className="font-mono text-[10px] text-forest/40 mb-3">{variableHint}</div>
      <p className={className}>{sample}</p>
    </div>
  );
}
```

- [ ] **Step 2: Verify visually**

Run `npm run dev`. Open `http://localhost:3000/dev/fonts`. Verify all 6 type specimens render in the correct typeface. Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/\(dev\)/fonts/page.tsx
git commit -m "feat(dev): add /dev/fonts typography specimen page"
```

---

### Task 30: Build dev-only `/dev/illustrations` visual verification page

**Files:**
- Create: `app/(dev)/illustrations/page.tsx`

- [ ] **Step 1: Create `app/(dev)/illustrations/page.tsx`**

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import {
  Star, Sparkle, Heart, Shield, Paw, Bone, Stethoscope, Mailbox, Squiggle, DashedArrow, USFactoryBadge,
  Blob, TapeAccent, Mascot, DogAvatar, CalloutPill,
} from '@/components/brand/illustrations';
import { Canister } from '@/components/brand/canister';

export const metadata = { title: 'Dev — Illustration Library', robots: { index: false } };

export default function DevIllustrationsPage() {
  return (
    <Section spacing="default">
      <Container>
        <h1 className="fraunces-soft text-4xl mb-2">Illustration library</h1>
        <p className="text-charcoal mb-10">Every custom SVG component in one place. Click-test each.</p>

        {/* Icons */}
        <Group title="Icons" subtitle="11 components">
          <Item label="Star (clean)"><Star size={32} className="text-warmyellow" /></Item>
          <Item label="Star (hand-drawn)"><Star size={32} variant="hand-drawn" className="text-warmyellow" /></Item>
          <Item label="Sparkle"><Sparkle size={32} className="text-warmyellow" /></Item>
          <Item label="Heart"><Heart size={32} className="text-terracotta" /></Item>
          <Item label="Shield"><Shield size={32} className="text-forest" /></Item>
          <Item label="Shield w/ heart"><Shield size={32} withHeart className="text-terracotta" /></Item>
          <Item label="Paw"><Paw size={32} className="text-forest" /></Item>
          <Item label="Bone"><Bone size={32} className="text-terracotta" /></Item>
          <Item label="Stethoscope"><Stethoscope size={32} className="text-forest" /></Item>
          <Item label="Squiggle"><Squiggle width={120} className="text-terracotta" /></Item>
          <Item label="Dashed arrow"><DashedArrow className="text-terracotta" /></Item>
          <Item label="USA badge"><USFactoryBadge size={48} /></Item>
          <Item label="Mailbox"><Mailbox size={64} /></Item>
        </Group>

        {/* Decor */}
        <Group title="Decor" subtitle="Blobs + tape">
          {[1, 2, 3, 4, 5, 6].map((v) => (
            <Item label={`Blob ${v} — yellow`} key={`b-y-${v}`}><Blob variant={v as 1 | 2 | 3 | 4 | 5 | 6} color="warmyellow" className="w-24 h-24" /></Item>
          ))}
          <Item label="Blob — pinky"><Blob variant={1} color="pinky" className="w-24 h-24" /></Item>
          <Item label="Blob — mint"><Blob variant={2} color="mint" className="w-24 h-24" /></Item>
          <Item label="Tape accent (yellow)"><TapeAccent color="warmyellow" /></Item>
          <Item label="Tape accent (mint)"><TapeAccent color="mint" rotation={6} /></Item>
        </Group>

        {/* Characters */}
        <Group title="Characters" subtitle="Mascot variants + 6 dog avatars">
          <Item label="Mascot — sitting"><Mascot variant="sitting" size={120} bodyColor="#E8B547" /></Item>
          <Item label="Mascot — peeking"><Mascot variant="peeking" size={120} bodyColor="#E8B547" /></Item>
          <Item label="Mascot — happy"><Mascot variant="happy" size={120} bodyColor="#F4B8A8" /></Item>
          <Item label="Mascot — sleepy"><Mascot variant="sleepy" size={120} bodyColor="#B8D4C4" /></Item>
          {[1, 2, 3, 4, 5, 6].map((v) => (
            <Item label={`DogAvatar ${v}`} key={`av-${v}`}><DogAvatar variant={v as 1 | 2 | 3 | 4 | 5 | 6} size={80} /></Item>
          ))}
        </Group>

        {/* CalloutPills */}
        <Group title="Callout pills" subtitle="Hand-drawn + clean">
          <Item label="Caveat — yellow"><CalloutPill variant="caveat" color="warmyellow">5 strains!</CalloutPill></Item>
          <Item label="Caveat — pinky"><CalloutPill variant="caveat" color="pinky" rotation={4}>No fillers</CalloutPill></Item>
          <Item label="Caveat — mint"><CalloutPill variant="caveat" color="mint" rotation={-6}>Vet-approved</CalloutPill></Item>
          <Item label="Clean — terracotta"><CalloutPill variant="clean" color="terracotta">Most popular</CalloutPill></Item>
        </Group>

        {/* Canister */}
        <Group title="Product canister" subtitle="CSS mockup for PDPs">
          <Item label="Daily Probiotic (md)">
            <Canister name="Daily" bandColor="warmyellow" tagline="probiotic + prebiotic" countLabel="30 SOFT CHEWS" />
          </Item>
          <Item label="Hip + Joint (md)">
            <Canister name="Hip+Joint" bandColor="terracotta" tagline="glucosamine + chondroitin" countLabel="60 SOFT CHEWS" />
          </Item>
          <Item label="Daily Duo (md)">
            <Canister name="Duo" bandColor="mint" tagline="both, every day" countLabel="2 PRODUCTS" />
          </Item>
          <Item label="With sticker">
            <Canister name="Daily" bandColor="warmyellow" sticker="VET" stickerColor="pinky" />
          </Item>
        </Group>
      </Container>
    </Section>
  );
}

function Group({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-forest/15 pt-6 pb-12">
      <h2 className="fraunces-soft text-2xl mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-forest/60 mb-6">{subtitle}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">{children}</div>
    </div>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-offwhite border border-forest/10 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[140px]">
      <div className="flex-1 flex items-center justify-center">{children}</div>
      <div className="font-mono text-[10px] text-forest/60 mt-3 uppercase tracking-wider">{label}</div>
    </div>
  );
}
```

- [ ] **Step 2: Verify visually**

Run `npm run dev`. Open `http://localhost:3000/dev/illustrations`. Verify every component renders correctly.

Note any visual issues with the SVGs (proportions, colors). If something looks off vs. the Design 8 mockup, refer back to `designs/08-hybrid-favorite.html` for the source-of-truth SVG markup and tune the component code.

Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/\(dev\)/illustrations/page.tsx
git commit -m "feat(dev): add /dev/illustrations visual verification page"
```

---

### Task 31: Build dynamic `app/sitemap.ts`

**Files:**
- Create: `app/sitemap.ts`

Phase 1 has minimal routes — sitemap currently lists root + the placeholder home. Later phases extend the URL set via this same file.

- [ ] **Step 1: Create `app/sitemap.ts`**

```typescript
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Phase 1: only the placeholder home is live. Subsequent phases extend this array.
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
```

- [ ] **Step 2: Verify**

```bash
npm run dev
```

Open `http://localhost:3000/sitemap.xml`. Should see valid XML with one URL entry pointing to the homepage.

Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat(seo): add dynamic sitemap.xml generator"
```

---

### Task 32: Build `app/robots.ts` with AI-crawler allow-list

**Files:**
- Create: `app/robots.ts`

Per spec Section 9: explicitly allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended so AI-search engines can crawl PawBite content.

- [ ] **Step 1: Create `app/robots.ts`**

```typescript
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General web crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/account/', '/cart', '/checkout', '/api/', '/dev/'],
      },
      // AI search crawlers — explicitly allowed per spec section 9
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

- [ ] **Step 2: Verify**

```bash
npm run dev
```

Open `http://localhost:3000/robots.txt`. Should list `Allow: /`, the AI-crawler rules, and the sitemap URL.

Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/robots.ts
git commit -m "feat(seo): add robots.txt with AI-crawler allow-list per spec section 9"
```

---

### Task 33: Build `app/llms.txt/route.ts` (AI index file)

**Files:**
- Create: `app/llms.txt/route.ts`

Per spec Section 9, `llms.txt` is a clean Markdown index AI crawlers can quickly consume. Phase 1 lists only the home page; subsequent phases extend it.

- [ ] **Step 1: Create `app/llms.txt/route.ts`**

```typescript
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const body = `# ${SITE_NAME}

${SITE_DESCRIPTION}

## What we make

- A daily probiotic chew for dogs (5 strains, 5 billion CFUs, vet-formulated)
- A hip + joint chew for dogs (glucosamine, chondroitin, MSM, green-lipped mussel)
- A subscription bundle of both (The Daily Duo)

## Pages

- [${SITE_NAME}](${SITE_URL}): Home

## Editorial policy

All content is reviewed by a licensed veterinarian. Strain-level studies are cited by author and year.
We don't make claims we can't back up. See ${SITE_URL}/editorial when that page lives.

## Contact

help@pawbite.com
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
```

- [ ] **Step 2: Verify**

```bash
npm run dev
```

Open `http://localhost:3000/llms.txt`. Should see the Markdown index.

Stop the server.

- [ ] **Step 3: Commit**

```bash
git add app/llms.txt/route.ts
git commit -m "feat(seo): add /llms.txt for AI-crawler discovery"
```

---

### Task 34: Set up GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`

- [ ] **Step 1: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - name: Format check
        run: npm run format:check
      - name: Lint
        run: npm run lint
      - name: Type check
        run: npm run type-check
      - name: Test
        run: npm run test:run
      - name: Build
        run: npm run build
```

- [ ] **Step 2: Test the pipeline locally**

Run each command to verify they pass before pushing:

```bash
npm run format:check
npm run lint
npm run type-check
npm run test:run
npm run build
```

Expected: all pass. If `format:check` fails, run `npm run format` to fix; if other commands fail, fix the underlying issue before moving on.

- [ ] **Step 3: Commit**

```bash
git add .github/
git commit -m "ci: add GitHub Actions pipeline (format, lint, type-check, test, build)"
```

---

### Task 35: Initialize Vercel project (manual)

**Files:**
- Create: `vercel.json` (optional configuration)

**This task requires the operator (you) to act in the Vercel dashboard. The agent cannot complete this alone — it requires Vercel account credentials.**

- [ ] **Step 1: Push current branch to GitHub**

If you haven't already, create a GitHub repo and push:

```bash
# Replace YOUR_GH_USERNAME with the GitHub user/org
gh repo create pawbite --private --source=. --remote=origin --push
```

If `gh` isn't installed, create the repo manually at https://github.com/new and push:

```bash
git remote add origin https://github.com/YOUR_GH_USERNAME/pawbite.git
git push -u origin main
```

- [ ] **Step 2: Connect Vercel**

In a browser:
1. Visit https://vercel.com/new
2. Import the `pawbite` GitHub repo
3. Framework Preset should auto-detect as **Next.js**
4. Root directory: `.` (default)
5. Build command: `npm run build` (default)
6. Output directory: `.next` (default)
7. Install command: `npm install` (default)
8. Environment variable: add `NEXT_PUBLIC_SITE_URL` = `https://pawbite.vercel.app` (or whatever URL Vercel assigns)
9. Click **Deploy**

- [ ] **Step 3: Verify deploy**

After build completes (~2 min), open the assigned Vercel URL (e.g., `pawbite.vercel.app`).

Verify:
- Home page loads with the placeholder content
- `/dev/colors` renders the palette
- `/dev/fonts` renders the type specimens
- `/dev/illustrations` renders the illustration library
- `/sitemap.xml` returns valid XML
- `/robots.txt` lists the AI crawler allow-list
- `/llms.txt` returns the Markdown index

- [ ] **Step 4: Optional — create `vercel.json` for future config**

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

- [ ] **Step 5: Commit**

```bash
git add vercel.json
git commit -m "ops: add vercel.json with build + region config"
git push
```

This push should trigger another Vercel deploy. Verify it succeeds.

---

### Task 36: Add `.env.example` and document local setup

**Files:**
- Create: `.env.example`
- Modify: `README.md`

- [ ] **Step 1: Create `.env.example`**

```
# Public site URL — used for canonical, OG, sitemap
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# (Future phases) Shopify Storefront API
# SHOPIFY_STORE_DOMAIN=
# SHOPIFY_STOREFRONT_ACCESS_TOKEN=

# (Future phases) Klaviyo
# KLAVIYO_PUBLIC_API_KEY=
# KLAVIYO_PRIVATE_API_KEY=

# (Future phases) Stamped reviews
# STAMPED_API_KEY=
# STAMPED_STORE_HASH=

# (Future phases) PostHog analytics
# NEXT_PUBLIC_POSTHOG_KEY=
# NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

- [ ] **Step 2: Append local setup to `README.md`**

Append this section to the existing README:

```markdown
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

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript without emit |
| `npm run format` | Prettier format all files |
| `npm run format:check` | Prettier check only |
| `npm run test` | Vitest watch mode |
| `npm run test:run` | Vitest single run |

### Deploy

Pushes to `main` deploy to Vercel automatically. PRs deploy preview URLs.
```

- [ ] **Step 3: Commit**

```bash
git add .env.example README.md
git commit -m "docs: add .env.example and local setup instructions"
git push
```

---

### Task 37: Final verification — Lighthouse + accessibility sanity check

**Files:** none (verification only)

- [ ] **Step 1: Build production locally and run**

```bash
npm run build
npm run start
```

Open `http://localhost:3000`.

- [ ] **Step 2: Run Lighthouse**

Open Chrome DevTools → Lighthouse tab → Run on the home page (mobile + desktop, all categories).

Targets:
- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: 100

Note any failures. If Performance is below 95 it's likely image-related (the placeholder OG image, the Mascot SVG size). Fix any easy wins (e.g., add `loading="lazy"` to non-critical images, compress OG). Defer hard ones to Phase 12 (Pre-launch QA).

- [ ] **Step 3: Quick accessibility sanity check**

In DevTools → Elements panel, tab through the page using keyboard:
- All interactive elements (nav links, CTAs, cart, mobile menu toggle) should receive visible focus states
- The mobile menu toggle should announce its `aria-expanded` state
- The cart icon link should have an accessible name ("Cart")

Verify color contrast on key elements with the DevTools color picker:
- Terracotta button on cream: should pass AA for large text and AA for normal text in CTA size
- Forest text on cream: passes
- Cream text on forest (footer): passes
- Cream text on terracotta (welcome banner): verify; if it fails, darken `terracotta` slightly or bump the welcome banner text weight

Stop the server.

- [ ] **Step 4: Commit any fixes**

If you made any small fixes during this verification:

```bash
git add -A
git commit -m "fix(a11y): address Lighthouse/contrast findings from Phase 1 verification"
git push
```

---

### Task 38: Tag Phase 1 complete

**Files:** none (git only)

- [ ] **Step 1: Tag the commit**

```bash
git tag -a phase-1-foundation -m "Phase 1 complete: scaffold + design system + layout + SEO plumbing"
git push --tags
```

- [ ] **Step 2: Update root `README.md` status**

In the "Status" section near the top, change:

```markdown
## Status

Pre-implementation. Design locked. Implementation plan pending (via `superpowers:writing-plans`).
```

…to:

```markdown
## Status

**Phase 1 complete** — foundation, design system, layout, and SEO plumbing deployed at https://pawbite.vercel.app

Phase 2 next: homepage (Design 8 hybrid) as a real React app.
```

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: mark Phase 1 complete"
git push
```

---

## End of Phase 1 plan.

**Deliverable:** Next.js app deployed at `pawbite.vercel.app` with brand design system (palette, fonts, illustrations), sitewide layout (Header / Footer / WelcomeBanner / StickyATCBar), and SEO/AI plumbing (sitemap, robots, llms.txt, Organization + WebSite schema). Placeholder home page demonstrates everything wired together. Dev-only `/dev/colors`, `/dev/fonts`, `/dev/illustrations` pages serve as ongoing component references for Phase 2+.

**Total: 38 tasks, expected ~80–100 commits.**

**Next phase:** Phase 2 — Homepage (Design 8 hybrid as React app). To be planned after Phase 1 ships.
