import Link from 'next/link';
import { Canister } from '@/components/brand/canister';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import type { ProductRecommendation } from '@/data/content-schema';

export function ContentProductRecommend({
  slug,
  reason,
}: {
  slug: ProductRecommendation;
  reason: string;
}) {
  const product = products.find((p) => p.slug === slug) ?? products[0];
  return (
    <aside className="my-10 rounded-3xl border-2 border-terracotta/30 bg-cream p-6 md:p-8">
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
        <div className="flex justify-center">
          <Canister
            name={product.shortName}
            bandColor={product.bandColor}
            countLabel={product.countLabel}
            tagline={product.tagline}
            size="md"
          />
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-terracotta-dark">
              Our recommendation
            </span>
            {product.badge && <Badge variant="warmyellow">{product.badge}</Badge>}
          </div>
          <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{product.name}</h3>
          <p className="mb-4 text-sm leading-relaxed text-charcoal">{reason}</p>
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-terracotta">
              ${product.subPrice.toFixed(product.subPrice % 1 === 0 ? 0 : 2)}
            </span>
            <span className="text-sm text-charcoal/60 line-through">${product.retailPrice}</span>
            <span className="text-xs text-charcoal/70">/ mo</span>
          </div>
          <Button variant="primary" size="md" asChild>
            <Link href={`/products/${product.slug}`}>Shop {product.shortName} →</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
