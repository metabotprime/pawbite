import { Container } from '@/components/layout/container';
import { ProductCard } from './product-card';
import { products } from '@/data/products';

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = products.filter((p) => p.slug !== currentSlug);
  return (
    <Container>
      <h2 className="fraunces-soft mb-8 text-3xl font-bold md:text-4xl">More from PawBite.</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {related.map((p, i) => (
          <ProductCard
            key={p.slug}
            product={p}
            blobVariant={(i + 2) as 1 | 2 | 3 | 4 | 5 | 6}
            featured={p.slug === 'daily-duo'}
          />
        ))}
      </div>
    </Container>
  );
}
