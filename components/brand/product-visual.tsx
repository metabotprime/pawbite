import Image from 'next/image';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

/**
 * Renders a product on its colored blob. Uses the real photoreal canister render
 * (`product.imageSrc`) when present, falling back to the CSS <Canister> mockup.
 */
export function ProductVisual({
  product,
  blobVariant = 1,
  className,
}: {
  product: Product;
  blobVariant?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  return (
    <div className={cn('relative flex h-56 items-center justify-center', className)}>
      <Blob
        variant={blobVariant}
        color={product.blobColor}
        className="absolute inset-0 h-full w-full"
      />
      {product.imageSrc ? (
        <Image
          src={product.imageSrc}
          alt={`PawBite ${product.name} canister`}
          width={product.imageWidth ?? 896}
          height={product.imageHeight ?? 1216}
          className="relative z-10 h-48 w-auto drop-shadow-xl"
        />
      ) : (
        <Canister
          name={product.shortName}
          bandColor={product.bandColor}
          countLabel={product.countLabel}
          tagline={product.tagline}
          size="md"
          className="relative z-10"
        />
      )}
    </div>
  );
}
