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

- Probiotic Chews for dogs: 5 named strains, 2.5 billion CFU per 2.5 g chew. For dogs' gut wellness.
- Joint + Mobility Chews: Support your dog's active lifestyle. Glucosamine HCl 250 mg, Chondroitin Sulfate 125 mg, MSM 125 mg, Green-Lipped Mussel 125 mg and Turmeric Extract 50 mg per 2.5 g chew.
- Calming Chews for dogs: Ashwagandha Root Extract 75 mg, L-Theanine 50 mg and Chamomile Extract 50 mg per 2.5 g chew. For dogs during busy, noisy days.
- A subscription bundle of the two daily essentials (The Daily Duo)

## Key pages

- [Home](${SITE_URL}): The good stuff your dog needs. Nothing weird.
- [Shop the line](${SITE_URL}/products): All three chews and the Daily Duo bundle.
- [Probiotic Chews](${SITE_URL}/products/daily-probiotic)
- [Joint + Mobility Chews](${SITE_URL}/products/hip-and-joint)
- [Calming Chews](${SITE_URL}/products/calm): For dogs during busy, noisy days. Ashwagandha Root Extract, L-Theanine and Chamomile Extract; no Bacillus coagulans in the final formula.
- [The Daily Duo](${SITE_URL}/products/daily-duo): The two daily essentials bundled. Save 32% when you subscribe.
- [Find the right chew (quiz)](${SITE_URL}/quiz)

## Pricing

${availability} Prices in USD; subscription = Subscribe & Save 20%, free shipping, cancel anytime.

- Probiotic Chews (80 soft chews, 2.5 g each, 200 g): ${price(dailyProbiotic)}
- Joint + Mobility Chews (80 soft chews, 2.5 g each, 200 g): ${price(hipAndJoint)}
- Calming Chews (80 soft chews, 2.5 g each, 200 g): ${price(calm)}
- The Daily Duo (Probiotic + Joint + Mobility Chews bundle): ${price(dailyDuo)} — saves 32% vs buying both separately

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
