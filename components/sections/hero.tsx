'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { calm, dailyProbiotic, hipAndJoint, CHECKOUT_LIVE } from '@/data/products';

const slides = [
  {
    product: calm,
    label: 'Everyday calm',
    first: 'CALMING',
    accent: 'chews.',
    last: 'FOR DOGS.',
    description:
      'L-theanine, chamomile, ashwagandha, and a probiotic. Meet our calming chew, made without CBD, melatonin, or sedatives.',
    color: 'bg-mint',
    note: 'CALMING CHEW',
  },
  {
    product: dailyProbiotic,
    label: 'Gut health',
    first: 'DAILY',
    accent: 'probiotics.',
    last: 'FOR DOGS.',
    description:
      'Five named probiotic strains. Five billion CFUs. Plus chicory inulin and pumpkin in one daily soft chew.',
    color: 'bg-warmyellow',
    note: 'DAILY PROBIOTIC',
  },
  {
    product: hipAndJoint,
    label: 'Joint support',
    first: 'HIP + JOINT',
    accent: 'support.',
    last: 'FOR DOGS.',
    description:
      'Glucosamine, chondroitin, MSM, and green-lipped mussel. A focused soft chew for your dog’s joint-care routine.',
    color: 'bg-pinky',
    note: 'HIP + JOINT',
  },
];

export function HeroSection() {
  const [selected, setSelected] = useState(0);
  const slide = slides[selected];
  const product = slide.product;

  return (
    <section
      className="overflow-hidden bg-cream pb-10 pt-10 md:pb-14 md:pt-16"
      aria-label="Meet the PawBite line"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-12">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em]">
              {CHECKOUT_LIVE ? 'Meet the line' : 'Pre-launch'} / {slide.note}
            </p>
            <h1
              aria-label={`${slide.first} ${slide.accent} ${slide.last}`}
              className="editorial-heading text-[clamp(2.8rem,6.3vw,5.75rem)] leading-[0.96]"
            >
              <span className="block">{slide.first}</span>
              <span className="fraunces-soft block py-2 font-bold normal-case italic tracking-[-0.055em] text-terracotta-dark">
                {slide.accent}
              </span>
              <span className="block">{slide.last}</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal md:text-lg">
              {slide.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-4 rounded-full bg-forest px-7 py-4 text-sm font-bold text-cream transition-colors hover:bg-forest-deep"
              >
                Explore {product.shortName} <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <p className="text-xs leading-relaxed text-charcoal">
                <span className="block font-semibold">
                  ${product.retailPrice.toFixed(2)} one-time
                </span>
                <span>{product.countLabel.toLowerCase()} · 90-day guarantee</span>
              </p>
            </div>
          </div>
          <div className="relative isolate flex min-h-[330px] items-center justify-center lg:min-h-[490px]">
            <div
              className={`absolute aspect-square w-[85%] max-w-[430px] rounded-full ${slide.color}`}
              aria-hidden="true"
            />
            <div className="absolute left-2 top-4 -rotate-12 rounded-full border-2 border-forest bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wide sm:left-6 lg:top-10">
              Good stuff.
              <br />
              Nothing weird.
            </div>
            <Image
              key={product.slug}
              src={product.imageSrc!}
              alt={`PawBite ${product.name}, ${product.countLabel.toLowerCase()}`}
              width={product.imageWidth ?? 896}
              height={product.imageHeight ?? 1216}
              priority={selected === 0}
              sizes="(max-width: 1023px) 65vw, 400px"
              className="relative h-[320px] w-auto max-w-full -rotate-6 object-contain drop-shadow-2xl sm:h-[390px] lg:h-[460px]"
            />
            <span className="absolute bottom-4 right-2 rotate-6 rounded-full bg-forest px-5 py-3 font-serif text-lg italic text-cream sm:right-6">
              Made for your dog.
            </span>
          </div>
        </div>
        <div
          className="mt-10 flex flex-wrap gap-2 border-t border-forest/15 pt-5"
          role="group"
          aria-label="Choose a featured product"
        >
          {slides.map((item, index) => (
            <button
              key={item.product.slug}
              type="button"
              aria-label={item.label}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-full border px-5 py-3 text-xs font-bold transition-colors ${selected === index ? 'border-forest bg-forest text-cream' : 'border-forest/25 text-forest hover:bg-forest/5'}`}
            >
              <span className="mr-3 opacity-60">0{index + 1}</span>
              {item.label}
            </button>
          ))}
          <Link
            href="/products"
            className="ml-auto inline-flex items-center gap-2 px-2 py-3 text-xs font-bold underline underline-offset-4"
          >
            See the whole line <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
