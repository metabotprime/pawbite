import Link from 'next/link';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

export function ProductCard({
  product,
  rotation = 0,
  featured = false,
  blobVariant = 1,
}: {
  product: Product;
  rotation?: number;
  featured?: boolean;
  blobVariant?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group relative block rounded-3xl bg-offwhite p-6 transition-transform duration-200 hover:-translate-y-1',
        featured && 'border-2 border-terracotta md:scale-105',
      )}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
    >
      {product.badge && (
        <Badge
          variant="warmyellow"
          className="absolute -right-2 -top-2 z-10 rotate-3 shadow-stack-sm"
        >
          {product.badge}
        </Badge>
      )}
      <div className="relative mb-6 flex h-56 items-center justify-center">
        <Blob
          variant={blobVariant}
          color={product.blobColor}
          className="absolute inset-0 h-full w-full"
        />
        <Canister
          name={product.shortName}
          bandColor={product.bandColor}
          countLabel={product.countLabel}
          tagline={product.tagline}
          size="md"
          className="relative z-10"
        />
      </div>
      <div className="text-center">
        <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{product.name}</h3>
        <p className="mb-4 min-h-[4rem] text-sm leading-relaxed text-charcoal">
          {product.oneLineDescription}
        </p>
        <div className="mb-4 flex items-baseline justify-center gap-2">
          <span className="text-2xl font-bold text-terracotta">
            ${product.subPrice.toFixed(product.subPrice % 1 === 0 ? 0 : 2)}
          </span>
          <span className="text-sm text-charcoal/60 line-through">${product.retailPrice}</span>
          <span className="text-xs text-charcoal/70">/ mo</span>
        </div>
        <Button variant="primary" size="md" className="w-full" asChild>
          <span>View product</span>
        </Button>
      </div>
    </Link>
  );
}
