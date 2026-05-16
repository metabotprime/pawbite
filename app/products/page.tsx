import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { ProductCard } from '@/components/pdp/product-card';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Shop the line',
  description:
    'Two products. Both daily. The Daily Probiotic and Hip + Joint chews, plus the Daily Duo subscription bundle that combines both.',
  alternates: { canonical: `${SITE_URL}/products` },
};

const blobVariants: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 3, 5];
const rotations = [-2, 0, 2];

export default function ProductsCollectionPage() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">Shop the line —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Two products. Both daily.
          </h1>
          <p className="mx-auto max-w-xl text-lg text-charcoal">
            We make exactly two: a daily probiotic and a hip + joint chew. The Duo combines both —
            what most subscribers go with.
          </p>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              rotation={rotations[i]}
              blobVariant={blobVariants[i]}
              featured={p.slug === 'daily-duo'}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
