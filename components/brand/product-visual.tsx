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
    <div className={cn('relative flex h-56 items-center justify-center', className)}>
      {product.imageSrc ? (
        (product.slug === 'daily-duo' ? [dailyProbiotic, hipAndJoint] : [product]).map(
          (item, index) => (
            <Image
              key={item.slug}
              src={item.imageSrc!}
              alt={`PawBite ${item.name} tin`}
              width={item.imageWidth ?? 896}
              height={item.imageHeight ?? 1216}
              priority={priority}
              sizes="(max-width: 767px) 50vw, 400px"
              className={cn(
                'relative z-10 h-48 w-auto max-w-full object-contain drop-shadow-xl',
                product.slug === 'daily-duo' && 'max-w-[50%]',
                index === 1 && '-ml-4',
                imageClassName,
              )}
            />
          ),
        )
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
