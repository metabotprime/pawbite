import { socialMetadata } from '@/lib/social';
import { ProductVisual } from '@/components/brand/product-visual';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
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
import { PRODUCT_DISCLAIMER } from '@/data/product-labels';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Daily Duo for Dogs | Probiotic + Joint + Mobility Chews (Save 32%)',
  description:
    'Probiotic Chews + Joint + Mobility Chews in one bundle. Approximately 80 soft chews per can. Save 32% on subscribe and save.',
  alternates: { canonical: `${SITE_URL}/products/daily-duo` },
  ...socialMetadata({
    title: 'The Daily Duo for Dogs — Save 32%',
    description:
      'Probiotic Chews + Joint + Mobility Chews, bundled. Approximately 80 soft chews per can.',
    url: `${SITE_URL}/products/daily-duo`,
    image: '/share/daily-duo-r2.png',
  }),
};

const duoProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'The Daily Duo for Dogs',
  description:
    'A subscription bundle of PawBite Probiotic Chews and Joint + Mobility Chews — the two daily-essential dog chews, together at a discount.',
  brand: { '@type': 'Brand', name: 'PawBite' },
  sku: 'daily-duo',
  url: `${SITE_URL}/products/daily-duo`,
  image: [dailyProbiotic, hipAndJoint].map((product) => `${SITE_URL}${product.imageSrc}`),
  isRelatedTo: [
    { '@type': 'Product', name: 'Probiotic Chews', url: `${SITE_URL}/products/daily-probiotic` },
    {
      '@type': 'Product',
      name: 'Joint + Mobility Chews',
      url: `${SITE_URL}/products/hip-and-joint`,
    },
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
      'One canister of Probiotic Chews and one canister of Joint + Mobility Chews. Each contains approximately 80 soft chews, 2.5 g each, net weight 200 g. Follow the directions on each product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day.',
  },
  {
    question: 'How is the 32% off calculated?',
    answer:
      'Retail total is $70 ($32 Probiotic + $38 Joint + Mobility Chews). The bundle discount knocks that to $59.50 (-15%). Adding Subscribe & Save stacks another 20% off, taking it to $47.60 (-32% total). The math is on the cart page.',
  },
  {
    question: 'Can I get the bundle as a one-time order?',
    answer:
      'Yes — you get the 15% bundle discount on a one-time order ($59.50). The additional Subscribe & Save 20% only stacks when you choose the subscription. Most people start on subscribe and skip months as needed.',
  },
  {
    question: 'My dog only needs one of these. Should I still bundle?',
    answer:
      'Choose the individual product if you only want one. Review the ingredients, allergens and directions for both products before choosing the bundle.',
  },
  {
    question: 'Can I swap one of the Duo products for a different SKU later?',
    answer:
      'Yes. We also make Calming Chews (Ashwagandha Root Extract, L-Theanine and Chamomile Extract) — so once you have a subscription, you can swap any chew in it with a single click from the account portal.',
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
            <figure className="overflow-hidden rounded-[2rem] border border-forest/10 bg-offwhite lg:sticky lg:top-28">
              <ProductVisual product={dailyDuo} priority className="rounded-none" />
              <figcaption className="grid grid-cols-2 gap-4 p-5 text-center">
                <div>
                  <p className="font-bold">Probiotic Chews</p>
                  <p className="mt-1 text-xs text-charcoal">
                    {dailyProbiotic.countLabel.toLowerCase()}
                  </p>
                </div>
                <div>
                  <p className="font-bold">Joint + Mobility Chews</p>
                  <p className="mt-1 text-xs text-charcoal">
                    {hipAndJoint.countLabel.toLowerCase()}
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-charcoal/70">90-day guarantee</span>
                <Badge variant="warmyellow">Most popular</Badge>
              </div>

              <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl">
                The Daily Duo.
              </h1>
              <p className="font-hand text-2xl text-terracotta">Both products, every day.</p>
              <p className="text-base leading-relaxed text-charcoal">
                Probiotic Chews for dogs&apos; gut wellness. Joint + Mobility Chews to support your
                dog&apos;s active lifestyle. Each can contains approximately 80 soft chews, 2.5 g
                each, net weight 200 g.
              </p>

              <p className="text-sm text-charcoal/80">{PRODUCT_DISCLAIMER}</p>

              <div className="rounded-2xl border-2 border-terracotta bg-offwhite p-5">
                <div className="mb-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Probiotic Chews</span>
                    <span className="font-mono text-charcoal">${dailyProbiotic.retailPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Joint + Mobility Chews</span>
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
