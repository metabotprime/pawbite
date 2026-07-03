import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PdpFaq } from '@/components/pdp/pdp-faq';
import { PdpGuarantee } from '@/components/pdp/pdp-guarantee';
import { VetQuoteCard } from '@/components/pdp/vet-quote-card';
import { dailyProbioticDetail, hipAndJointDetail } from '@/data/products-detail';
import {
  dailyProbiotic,
  hipAndJoint,
  dailyDuo,
  dailyDuoMath,
  CHECKOUT_LIVE,
} from '@/data/products';
import { VET_REVIEW_LIVE } from '@/data/vets';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Daily Duo for Dogs — Probiotic + Hip & Joint Bundle (Save 32%)',
  description:
    'Daily Probiotic + Hip + Joint in one dog supplement bundle — gut and joints, the two systems most dogs need supported daily. Save 32% on subscribe and save.',
  alternates: { canonical: `${SITE_URL}/products/daily-duo` },
  openGraph: {
    title: 'The Daily Duo for Dogs — Save 32%',
    description: 'Daily Probiotic + Hip + Joint, bundled. Gut and joints, covered daily.',
    images: [{ url: '/products/daily-duo.png' }],
  },
};

const duoProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'The Daily Duo for Dogs',
  description:
    'A subscription bundle of PawBite Daily Probiotic and Hip + Joint — the two daily-essential dog chews, together at a discount.',
  brand: { '@type': 'Brand', name: 'PawBite' },
  sku: 'daily-duo',
  url: `${SITE_URL}/products/daily-duo`,
  image: `${SITE_URL}/products/daily-duo.png`,
  isRelatedTo: [
    { '@type': 'Product', name: 'Daily Probiotic', url: `${SITE_URL}/products/daily-probiotic` },
    { '@type': 'Product', name: 'Hip + Joint', url: `${SITE_URL}/products/hip-and-joint` },
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: dailyDuo.subPrice.toFixed(2),
    highPrice: dailyDuo.retailPrice.toFixed(2),
    offerCount: 2,
    availability: CHECKOUT_LIVE ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
    url: `${SITE_URL}/products/daily-duo`,
  },
};

const bundleFaqs = [
  {
    question: 'What’s included in the Daily Duo?',
    answer:
      'One canister of Daily Probiotic (30 chicken-flavored soft chews) and one canister of Hip + Joint (60 duck-flavored soft chews). That’s a 30-day supply of both — your dog gets one probiotic chew and two joint chews per day for a medium-large dog.',
  },
  {
    question: 'How is the 32% off calculated?',
    answer:
      'Retail total is $70 ($32 Probiotic + $38 Hip + Joint). The bundle discount knocks that to $59.50 (-15%). Adding Subscribe & Save stacks another 20% off, taking it to $47.60 (-32% total). The math is on the cart page.',
  },
  {
    question: 'Can I get the bundle as a one-time order?',
    answer:
      'Yes — you get the 15% bundle discount on a one-time order ($59.50). The additional Subscribe & Save 20% only stacks when you choose the subscription. Most people start on subscribe and skip months as needed.',
  },
  {
    question: 'My dog only needs one of these. Should I still bundle?',
    answer:
      'If your dog only needs one, save your money — buy the single SKU. The Duo makes sense when your dog actually needs both (e.g., senior dogs with mild GI issues, or any large breed where gut and joint support both matter long-term).',
  },
  {
    question: 'Can I swap one of the Duo products for a different SKU later?',
    answer:
      'Yes. We also make a Calming chew (L-theanine, ashwagandha, chamomile, and a gut-brain probiotic) — so once you have a subscription, you can swap any chew in it with a single click from the account portal.',
  },
  {
    question: 'How do skipping and cancelling work?',
    answer:
      'One click from your account. Skip the next shipment, pause indefinitely, or cancel entirely. No phone calls, no fees, no "are you sure?" interrogation.',
  },
];

const duoFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: bundleFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function DailyDuoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(duoProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(duoFaqSchema) }}
      />
      <Section background="cream" spacing="default">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative flex h-96 items-center justify-center rounded-3xl bg-cream-2 lg:h-[520px]">
              <Blob variant={2} color="mint" className="absolute inset-8 h-auto" />
              <Image
                src={dailyDuo.imageSrc!}
                alt="PawBite Daily Duo — Daily Probiotic and Hip + Joint canisters together"
                width={dailyDuo.imageWidth!}
                height={dailyDuo.imageHeight!}
                priority
                className="relative z-10 max-h-72 w-auto max-w-full drop-shadow-2xl lg:max-h-[440px]"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-charcoal/70">Vet-formulated • 90-day guarantee</span>
                <Badge variant="warmyellow">Most popular</Badge>
              </div>

              <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl">
                The Daily Duo.
              </h1>
              <p className="font-hand text-2xl text-terracotta">Both products, every day.</p>
              <p className="text-base leading-relaxed text-charcoal">
                Daily Probiotic for the gut. Hip + Joint for the mobility. The two systems most dogs
                need supported daily — bundled together so your dog never runs out of either.
              </p>

              <div className="rounded-2xl border-2 border-terracotta bg-offwhite p-5">
                <div className="mb-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Daily Probiotic</span>
                    <span className="font-mono text-charcoal">${dailyProbiotic.retailPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Hip + Joint</span>
                    <span className="font-mono text-charcoal">${hipAndJoint.retailPrice}</span>
                  </div>
                  <div className="flex justify-between border-t border-forest/15 pt-1 text-charcoal/70">
                    <span>Retail total</span>
                    <span className="font-mono">${dailyDuoMath.retailTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-forest/70">
                    <span>Bundle discount (15%)</span>
                    <span className="font-mono">−${dailyDuoMath.bundleDiscount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-forest/70">
                    <span>Subscribe & save (20%)</span>
                    <span className="font-mono">−${dailyDuoMath.subSavings.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-3 flex items-baseline gap-3 border-t border-forest/15 pt-3">
                  <span className="fraunces-soft text-4xl font-bold text-terracotta">
                    ${dailyDuo.subPrice.toFixed(2)}
                  </span>
                  <span className="text-base text-charcoal/60 line-through">
                    ${dailyDuo.retailPrice}
                  </span>
                  <Badge variant="warmyellow">Save 32% / mo</Badge>
                </div>

                <p className="mb-4 text-xs text-charcoal/70">
                  Ships every 30 days. Free shipping. Skip, swap, pause, or cancel in one click.
                </p>

                <Button variant="primary" size="lg" className="w-full" disabled>
                  Pre-order — coming soon
                </Button>
              </div>

              <p className="text-sm text-charcoal/70">
                Bundle pricing only available with subscription. One-time order: $
                {dailyDuoMath.bundleOneTime.toFixed(2)} (15% bundle discount only).
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="fraunces-soft mb-3 text-3xl font-bold md:text-4xl">
              What you get in each canister.
            </h2>
            <p className="text-charcoal">Read the full label on each product page.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[dailyProbioticDetail, hipAndJointDetail].map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-3xl border border-forest/15 bg-cream p-6 transition-transform hover:-translate-y-1"
              >
                <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{p.name}</h3>
                <p className="mb-4 font-hand text-xl text-terracotta">{p.tagline}</p>
                <p className="mb-4 text-sm leading-relaxed text-charcoal">{p.longDescription}</p>
                <span className="text-sm font-semibold text-terracotta underline-offset-4 group-hover:underline">
                  Read the full label →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {VET_REVIEW_LIVE && (
        <Section background="cream" spacing="default">
          <VetQuoteCard
            name="Dr. M. Hayes, DVM"
            credentials="Board-certified veterinary nutritionist"
            quote="If a dog is over five years old and active, gut and joint support are the two highest-leverage daily essentials. The Daily Duo is genuinely what most of my older patients should be on — though I admit it’s nice to finally have a brand to point them to instead of a vague Amazon search."
          />
        </Section>
      )}

      <Section background="mint" spacing="default">
        <PdpFaq faqs={bundleFaqs} />
      </Section>

      <Section background="cream" spacing="default">
        <PdpGuarantee />
      </Section>
    </>
  );
}
