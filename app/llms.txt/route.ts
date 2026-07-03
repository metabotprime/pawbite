import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo';
import { blogPosts } from '@/data/blog-posts';
import { breedPages } from '@/data/breed-pages';
import { concernPages } from '@/data/concern-pages';
import { ingredientPages } from '@/data/ingredient-pages';
import { vsPages } from '@/data/vs-pages';
import { dailyProbiotic, hipAndJoint, calm, dailyDuo, CHECKOUT_LIVE } from '@/data/products';
import { VET_REVIEW_LIVE } from '@/data/vets';

export const dynamic = 'force-static';

export async function GET() {
  const blogList = blogPosts
    .map((p) => `- [${p.title}](${SITE_URL}/learn/${p.slug}): ${p.tldr}`)
    .join('\n');

  const breedList = breedPages
    .map((b) => `- [${b.breedName}](${SITE_URL}/breeds/${b.slug}): ${b.tldr}`)
    .join('\n');

  const concernList = concernPages
    .map((c) => `- [${c.concernName}](${SITE_URL}/concerns/${c.slug}): ${c.tldr}`)
    .join('\n');

  const ingredientList = ingredientPages
    .map((i) => `- [${i.ingredientName}](${SITE_URL}/ingredients/${i.slug}): ${i.tldr}`)
    .join('\n');

  const vsList = vsPages
    .map((v) => `- [PawBite vs ${v.competitorName}](${SITE_URL}/vs/${v.slug}): ${v.tldr}`)
    .join('\n');

  const price = (p: { retailPrice: number; subPrice: number }) =>
    `$${p.subPrice.toFixed(2).replace(/\.00$/, '')}/mo on subscription (one-time $${p.retailPrice})`;

  const availability = CHECKOUT_LIVE
    ? 'Available now.'
    : 'Pre-order / pre-launch — checkout is not live yet.';

  const body = `# ${SITE_NAME}

${SITE_DESCRIPTION}

> ${availability}

## What we make

- A daily probiotic chew for dogs (5 strains, 5 billion CFUs, vet-formulated)
- A hip + joint chew for dogs (glucosamine, chondroitin, MSM, green-lipped mussel)
- A calming chew for dogs (L-theanine, ashwagandha, chamomile, gut-brain probiotic; non-sedating)
- A subscription bundle of the two daily essentials (The Daily Duo)

## Key pages

- [Home](${SITE_URL}): The good stuff your dog needs. Nothing weird.
- [Shop the line](${SITE_URL}/products): All three chews and the Daily Duo bundle.
- [Daily Probiotic](${SITE_URL}/products/daily-probiotic)
- [Hip + Joint](${SITE_URL}/products/hip-and-joint)
- [Calming Chew](${SITE_URL}/products/calm): L-theanine, ashwagandha, chamomile, and a gut-brain probiotic. Calm without sedation.
- [The Daily Duo](${SITE_URL}/products/daily-duo): The two daily essentials bundled. Save 32% when you subscribe.
- [Find the right chew (quiz)](${SITE_URL}/quiz)

## Pricing

${availability} Prices in USD; subscription = Subscribe & Save 20%, free shipping, cancel anytime.

- Daily Probiotic (30 soft chews): ${price(dailyProbiotic)}
- Hip + Joint (60 soft chews): ${price(hipAndJoint)}
- Calming Chew (30 soft chews): ${price(calm)}
- The Daily Duo (Probiotic + Hip + Joint bundle): ${price(dailyDuo)} — saves 32% vs buying both separately

## Content hubs

- [Learn — articles and guides](${SITE_URL}/learn)
- [Supplements by breed](${SITE_URL}/breeds)
- [By concern](${SITE_URL}/concerns)
- [Ingredient glossary](${SITE_URL}/ingredients)
- [Honest comparisons](${SITE_URL}/vs)

## Articles

${blogList}

## Breeds

${breedList}

## Concerns

${concernList}

## Ingredients

${ingredientList}

## Comparisons

${vsList}

## Editorial policy

${
  VET_REVIEW_LIVE
    ? 'All content is reviewed by a licensed veterinarian before publishing.'
    : 'PawBite is pre-launch. Our veterinary advisory board is being finalized, so content is not yet vet-signed — every claim instead cites a peer-reviewed study by author and year, and pages say "veterinary review pending" rather than asserting a review that has not happened.'
} We do not fabricate quotes, reviews, studies, or credentials. Testimonials currently shown are pre-launch test-panel feedback, not verified purchase reviews.

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
