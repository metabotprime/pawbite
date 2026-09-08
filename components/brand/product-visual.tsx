import Image from 'next/image';
import { Canister } from '@/components/brand/canister';
import { dailyProbiotic, hipAndJoint, type Product } from '@/data/products';
import { cn } from '@/lib/utils';

/**
 * Renders the supplied product photography. Uses the canister photo
 * (`product.imageSrc`) when present, falling back to the CSS <Canister> mockup.
 */
export function ProductVisual({
  product,
  className,
  imageClassName,
  priority = false,
}: {
  product: Product;
  blobVariant?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl',
        className,
      )}
    >
      {product.imageSrc ? (
        (product.slug === 'daily-duo' ? [dailyProbiotic, hipAndJoint] : [product]).map((item) => (
          <Image
            key={item.slug}
            src={item.imageSrc!}
            alt={`PawBite ${item.name} tin`}
            width={item.imageWidth ?? 896}
            height={item.imageHeight ?? 1216}
            priority={priority}
            sizes="(max-width: 767px) 50vw, 400px"
            className={cn(
              'aspect-square h-auto w-full object-cover',
              product.slug === 'daily-duo' && 'w-1/2',
              imageClassName,
            )}
          />
        ))
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
