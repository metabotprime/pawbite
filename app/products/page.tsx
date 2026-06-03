import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { ProductCard } from '@/components/pdp/product-card';
import { products, dailyDuo } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Shop the line',
  description:
    'Three daily essentials: the Daily Probiotic, Hip + Joint, and Calming chews — plus the Daily Duo subscription bundle.',
  alternates: { canonical: `${SITE_URL}/products` },
};

const blobVariants: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 3, 5];
const rotations = [-2, 0, 2];

export default function ProductsCollectionPage() {
  const singles = products.filter((p) => p.slug !== 'daily-duo');

  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">Shop the line —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Three daily essentials.
          </h1>
          <p className="mx-auto max-w-xl text-lg text-charcoal">
            Gut, joints, and calm — a focused chew for each. The Duo bundles the two most dogs start
            with and saves 32%.
          </p>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3">
          {singles.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              rotation={rotations[i]}
              blobVariant={blobVariants[i]}
            />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-sm">
          <ProductCard product={dailyDuo} rotation={0} blobVariant={2} featured />
        </div>
      </Container>
    </Section>
  );
}
