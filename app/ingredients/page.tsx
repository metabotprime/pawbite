import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { ingredientPages } from '@/data/ingredient-pages';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ingredient glossary — what does what, and how much',
  description:
    "Plain-English ingredient pages for every probiotic strain, joint active, and supportive nutrient we use (and a few we don't). Doses, safety, sources.",
  alternates: { canonical: `${SITE_URL}/ingredients` },
};

const categoryColor: Record<string, 'warmyellow' | 'terracotta' | 'mint' | 'pinky' | 'soft'> = {
  probiotic: 'warmyellow',
  prebiotic: 'mint',
  joint: 'terracotta',
  omega: 'pinky',
  herbal: 'mint',
  'amino-acid': 'pinky',
  mineral: 'soft',
  other: 'soft',
};

export default function IngredientsHub() {
  // Group by category for display
  const grouped = ingredientPages.reduce<Record<string, typeof ingredientPages>>((acc, ing) => {
    (acc[ing.category] ||= []).push(ing);
    return acc;
  }, {});

  const categoryOrder = [
    'probiotic',
    'prebiotic',
    'joint',
    'omega',
    'herbal',
    'amino-acid',
    'mineral',
    'other',
  ];

  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">Ingredient glossary —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            What&apos;s in it. What it does.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            We read ingredient panels so you don&apos;t have to. Every ingredient gets a page with
            its real role, typical dose, and cited research.
          </p>
        </div>

        {ingredientPages.length === 0 ? (
          <p className="text-center text-charcoal/60">Ingredient pages coming soon.</p>
        ) : (
          <div className="space-y-10">
            {categoryOrder.map((cat) => {
              const items = grouped[cat];
              if (!items?.length) return null;
              return (
                <div key={cat}>
                  <h2 className="fraunces-soft mb-4 text-2xl font-bold capitalize text-forest">
                    {cat.replace('-', ' ')}
                  </h2>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((ing) => (
                      <Link
                        key={ing.slug}
                        href={`/ingredients/${ing.slug}`}
                        className="group block rounded-xl border border-forest/15 bg-offwhite p-4 transition-transform hover:-translate-y-1"
                      >
                        <div className="mb-2">
                          <Badge variant={categoryColor[ing.category]}>{ing.category}</Badge>
                        </div>
                        <h3 className="fraunces-soft mb-1 text-base font-bold text-forest group-hover:text-terracotta">
                          {ing.ingredientName}
                        </h3>
                        {ing.inProducts.length > 0 && (
                          <p className="text-xs text-charcoal/60">
                            In{' '}
                            {ing.inProducts
                              .map(
                                (slug) =>
                                  products.find((product) => product.slug === slug)?.name ?? slug,
                              )
                              .join(', ')}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
}
