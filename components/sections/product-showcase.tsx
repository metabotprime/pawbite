import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, dailyDuo } from '@/data/products';
import { cn } from '@/lib/utils';

const rotations = ['-rotate-2', 'rotate-0', 'rotate-2'];

export function ProductShowcase() {
  const singles = products.filter((p) => p.slug !== 'daily-duo');

  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            What Theo takes daily.
          </h2>
          <p className="mx-auto max-w-xl text-lg text-charcoal">
            Three daily essentials — gut, joints, and calm. The Duo bundles the two most dogs start
            with.
          </p>
        </div>

        {/* Three single products */}
        <div className="grid items-end gap-8 md:grid-cols-3">
          {singles.map((p, i) => (
            <Link
              href={`/products/${p.slug}`}
              key={p.slug}
              className={cn(
                'group relative block rounded-3xl bg-offwhite p-6 transition-transform duration-200 hover:-translate-y-1',
                rotations[i % rotations.length],
              )}
            >
              <div className="relative mb-6 flex h-56 items-center justify-center">
                <Blob
                  variant={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                  color={p.blobColor}
                  className="absolute inset-0 h-full w-full"
                />
                <Canister
                  name={p.shortName}
                  bandColor={p.bandColor}
                  countLabel={p.countLabel}
                  tagline={p.tagline}
                  size="md"
                  className="relative z-10"
                />
              </div>

              <div className="text-center">
                <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{p.name}</h3>
                <p className="mb-4 min-h-[4rem] text-sm leading-relaxed text-charcoal">
                  {p.oneLineDescription}
                </p>

                <div className="mb-4 flex items-baseline justify-center gap-2">
                  <span className="text-2xl font-bold text-terracotta">
                    ${p.subPrice.toFixed(p.subPrice % 1 === 0 ? 0 : 2)}
                  </span>
                  <span className="text-sm text-charcoal/60 line-through">${p.retailPrice}</span>
                  <span className="text-xs text-charcoal/70">/ mo</span>
                </div>

                <Button variant="primary" size="md" className="w-full" asChild>
                  <span>View product</span>
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* The Daily Duo bundle band */}
        <Link
          href="/products/daily-duo"
          className="group mt-8 block rounded-3xl border-2 border-terracotta bg-forest p-6 text-cream transition-transform duration-200 hover:-translate-y-1 md:p-8"
        >
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
            <div className="relative flex h-40 w-40 items-center justify-center">
              <Blob
                variant={2}
                color="mint"
                className="absolute inset-0 h-full w-full opacity-30"
              />
              <Canister
                name="Duo"
                bandColor="forest"
                countLabel="2 PRODUCTS"
                tagline="both, every day"
                size="md"
                className="relative z-10"
              />
            </div>

            <div>
              <Badge variant="warmyellow" className="mb-2">
                {dailyDuo.badge}
              </Badge>
              <h3 className="fraunces-soft mb-1 text-2xl font-bold md:text-3xl">The Daily Duo</h3>
              <p className="max-w-md text-sm leading-relaxed text-cream/80">
                Daily Probiotic + Hip + Joint — the two most dogs start with. Bundle and subscribe
                to save 32%.
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="mb-3 flex items-baseline gap-2 md:justify-end">
                <span className="text-3xl font-bold text-warmyellow">
                  ${dailyDuo.subPrice.toFixed(2)}
                </span>
                <span className="text-sm text-cream/70 line-through">${dailyDuo.retailPrice}</span>
                <span className="text-xs text-cream/70">/ mo</span>
              </div>
              <Button variant="light" size="md">
                Get the Duo
              </Button>
            </div>
          </div>
        </Link>
      </Container>
    </Section>
  );
}
