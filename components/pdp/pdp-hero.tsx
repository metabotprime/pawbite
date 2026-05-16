'use client';

import * as React from 'react';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import type { ProductDetail } from '@/data/products-detail';
import { cn } from '@/lib/utils';

export function PdpHero({ product }: { product: ProductDetail }) {
  const [subscribe, setSubscribe] = React.useState(true);
  const price = subscribe ? product.subPrice : product.retailPrice;
  const savings = product.retailPrice - product.subPrice;

  return (
    <div className="grid items-start gap-12 lg:grid-cols-2">
      {/* Image / canister */}
      <div className="relative flex h-96 items-center justify-center rounded-3xl bg-cream-2 lg:h-[520px]">
        <Blob variant={2} color={product.blobColor} className="absolute inset-12 h-auto" />
        <Canister
          name={product.shortName}
          bandColor={product.bandColor}
          countLabel={product.countLabel}
          tagline={product.tagline}
          size="lg"
          className="relative z-10"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} className="text-terracotta" />
            ))}
          </div>
          <span className="text-sm text-charcoal/70">4.9 (10,000+ reviews)</span>
        </div>

        <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl">
          {product.name}
        </h1>

        <p className="font-hand text-2xl text-terracotta">{product.tagline}</p>

        <p className="text-base leading-relaxed text-charcoal">{product.longDescription}</p>

        <div className="rounded-2xl border border-forest/15 bg-offwhite p-5">
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setSubscribe(true)}
              className={cn(
                'flex-1 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all',
                subscribe
                  ? 'border-terracotta bg-terracotta text-cream'
                  : 'border-forest/20 bg-transparent text-forest hover:border-forest',
              )}
            >
              Subscribe & save 20%
            </button>
            <button
              type="button"
              onClick={() => setSubscribe(false)}
              className={cn(
                'flex-1 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all',
                !subscribe
                  ? 'border-forest bg-forest text-cream'
                  : 'border-forest/20 bg-transparent text-forest hover:border-forest',
              )}
            >
              One-time
            </button>
          </div>

          <div className="mb-3 flex items-baseline gap-3">
            <span className="fraunces-soft text-4xl font-bold text-terracotta">
              ${price.toFixed(price % 1 === 0 ? 0 : 2)}
            </span>
            {subscribe && (
              <>
                <span className="text-base text-charcoal/60 line-through">
                  ${product.retailPrice}
                </span>
                <Badge variant="warmyellow">Save ${savings.toFixed(0)}/mo</Badge>
              </>
            )}
          </div>

          <p className="mb-4 text-xs text-charcoal/70">
            {subscribe
              ? 'Ships every 30 days. Free shipping. Skip, swap, pause, or cancel in one click.'
              : 'One-time delivery. Free shipping over $40.'}
          </p>

          <Button variant="primary" size="lg" className="w-full">
            Add to cart
          </Button>
        </div>

        <div className="flex items-center gap-3 pt-2 text-sm text-charcoal/70">
          <Shield size={18} className="text-forest" />
          <span>90-day money-back guarantee · Free shipping over $40 · Vet-formulated</span>
        </div>
      </div>
    </div>
  );
}
