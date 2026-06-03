import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import { ingredientPageBySlug, ingredientPageSlugs } from '@/data/ingredient-pages';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return ingredientPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ing = ingredientPageBySlug(params.slug);
  if (!ing) return {};
  return {
    title: `${ing.ingredientName} for dogs: dose, safety, and benefits`,
    description: ing.tldr,
    alternates: { canonical: `${SITE_URL}/ingredients/${ing.slug}` },
  };
}

export default function IngredientPage({ params }: { params: { slug: string } }) {
  const ing = ingredientPageBySlug(params.slug);
  if (!ing) notFound();

  const title = `${ing.ingredientName} for dogs.`;
  const productLabels: Record<'daily-probiotic' | 'hip-and-joint' | 'calm', string> = {
    'daily-probiotic': 'Daily Probiotic',
    'hip-and-joint': 'Hip + Joint',
    calm: 'Calming Chew',
  };
  const inProductsLine = ing.inProducts.length
    ? `Found in PawBite products: ${ing.inProducts.map((p) => productLabels[p]).join(', ')}.`
    : 'Not currently in any PawBite product — but we get a lot of questions about it.';

  // Prepend overview + dosing sections
  const overviewBody = [
    `**What it is.** ${ing.whatItIs}`,
    `**How it works.** ${ing.howItWorks}`,
  ].join('\n\n');

  const dosingBody = [
    `**Small dogs (under 25 lbs):** ${ing.typicalDose.smallDog}`,
    `**Medium dogs (25–50 lbs):** ${ing.typicalDose.mediumDog}`,
    `**Large dogs (50+ lbs):** ${ing.typicalDose.largeDog}`,
    '',
    `**Safety:** ${ing.safetyNotes}`,
  ].join('\n\n');

  const sections = [
    { heading: 'Overview.', body: overviewBody },
    { heading: 'Typical dose for dogs.', body: dosingBody },
    ...ing.sections,
    { heading: 'In our line.', body: inProductsLine },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: ing.tldr,
              byline: ing.byline,
              url: `${SITE_URL}/ingredients/${ing.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(ing.faqs)),
        }}
      />
      <ContentPage
        category={ing.category.charAt(0).toUpperCase() + ing.category.slice(1)}
        hubLink={{ href: '/ingredients', label: 'All ingredients' }}
        title={title}
        tldr={ing.tldr}
        byline={ing.byline}
        sections={sections}
        sources={ing.sources}
        faqs={ing.faqs}
        recommendsProduct={ing.recommendsProduct}
        recommendsContext={inProductsLine}
      />
    </>
  );
}
