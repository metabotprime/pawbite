import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { ProductVisual } from '@/components/brand/product-visual';
import { calm, dailyProbiotic, hipAndJoint, dailyDuo } from '@/data/products';

export function ProductShowcase() {
  return (
    <section className="bg-cream py-14 md:py-20" id="the-line">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">Meet the line</p>
            <h2 className="editorial-heading text-4xl leading-none md:text-6xl">
              THREE CHEWS.
              <br />
              <span className="font-serif normal-case italic">One very good dog.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-charcoal">
            Gut, joints, and calm. Explore the ingredients and choose a routine that fits your dog.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[calm, dailyProbiotic, hipAndJoint].map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-forest/15 bg-offwhite transition-transform hover:-translate-y-1"
            >
              <div className={`${['bg-mint', 'bg-warmyellow', 'bg-pinky'][i]} px-6 pb-7 pt-4`}>
                <p className="text-xs font-bold uppercase tracking-widest">
                  0{i + 1} / {product.tagline}
                </p>
                <ProductVisual product={product} className="mt-5" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold">{product.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-charcoal">
                  {product.oneLineDescription}
                </p>
                <div className="mt-auto flex items-end justify-between border-t border-forest/15 pt-4">
                  <div>
                    <p className="text-lg font-bold">
                      ${product.retailPrice.toFixed(2)}
                      <span className="ml-2 text-xs font-normal text-charcoal">one-time</span>
                    </p>
                    <p className="mt-1 text-xs text-charcoal">
                      ${product.subPrice.toFixed(2)} on subscription
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/products/daily-duo"
          className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-forest/20 bg-forest p-6 text-cream md:px-8"
        >
          <div>
            <h3 className="mb-1 text-2xl font-bold text-cream">Better together: The Daily Duo.</h3>
            <p className="text-sm text-cream/80">
              Daily Probiotic + Hip + Joint. {dailyDuo.badge} when you bundle and subscribe.
            </p>
          </div>
          <span className="flex items-center gap-5 font-bold">
            ${dailyDuo.subPrice.toFixed(2)} / month <ArrowUpRight aria-hidden="true" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
