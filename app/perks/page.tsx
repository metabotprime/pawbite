import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Subscriber perks',
  description:
    'Subscribe to PawBite and save 20% on every order, get free shipping, a 90-day money-back guarantee, and the ability to skip, pause, or cancel anytime — no calls, no fees.',
  alternates: { canonical: `${SITE_URL}/perks` },
  openGraph: {
    title: 'PawBite subscriber perks',
    description:
      'Save 20%, free shipping, skip or cancel anytime in one click, 90-day money-back guarantee.',
    type: 'website',
  },
};

const perks = [
  {
    headline: '20% off every order.',
    body: "Subscribers pay the lower price every shipment — not just the first one. The 20% never resets, doesn't expire, and doesn't drop off after month three like some brands quietly do.",
    icon: Sparkle,
    color: 'warmyellow' as const,
  },
  {
    headline: 'Free shipping. Always.',
    body: "Every subscription order ships free, US-wide. No minimum, no 'free shipping over $40' fine print. We pay the carrier so the price you see at checkout is the price.",
    icon: Heart,
    color: 'pinky' as const,
  },
  {
    headline: 'Skip, pause, or cancel in one click.',
    body: "No phone calls. No retention scripts. No 'are you sure?' dialogue four times in a row. Click the button, choose what you want, done. 2am on a Sunday is fine.",
    icon: Shield,
    color: 'mint' as const,
  },
  {
    headline: '90-day money-back guarantee.',
    body: "If you've been on the chew for a full 90 days and your dog isn't better, we refund the order. No 'you have to send back the empty bags' games. Email us, we refund. That's it.",
    icon: Star,
    color: 'terracotta' as const,
  },
  {
    headline: 'Early access to new SKUs.',
    body: 'We will eventually launch a third product. Subscribers get it 30 days before public release, at the subscriber price, with our standard guarantee. If we ever release a limited batch, you see it first.',
    icon: Stethoscope,
    color: 'warmyellow' as const,
  },
  {
    headline: 'A free gift in your 6th shipment.',
    body: 'When you hit six months of consecutive shipments, a surprise lands in your next box — usually a hand-picked treat, sometimes a piece of merch. No survey required, no fine print, just a thank you.',
    icon: Heart,
    color: 'mint' as const,
  },
];

const howSteps = [
  {
    title: 'Pick your formula.',
    body: 'Daily Probiotic, Hip + Joint, or the Daily Duo if your dog needs both. Most subscribers go with the Duo.',
  },
  {
    title: 'Choose a cadence.',
    body: 'Monthly is the default. You can switch to every 6 or 8 weeks from the account page if your dog goes through chews slower.',
  },
  {
    title: 'We ship. You log in if you need to.',
    body: 'First box arrives in 2-5 business days. Every box after that lands on the same calendar day. Skip a month, swap formulas, or cancel any time from the dashboard.',
  },
];

const duoProduct = products.find((p) => p.slug === 'daily-duo');
const duoSavingsPct = duoProduct
  ? Math.round((1 - duoProduct.subPrice / duoProduct.retailPrice) * 100)
  : 32;

export default function PerksPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" spacing="loose">
        <Container size="narrow">
          <div className="text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— Made for the long haul</p>
            <h1 className="fraunces-soft mb-6 text-balance text-4xl font-bold text-forest md:text-6xl">
              Subscriber perks.
            </h1>
            <div className="mx-auto max-w-2xl space-y-4 text-lg leading-relaxed text-charcoal">
              <p>
                Supplements only work if your dog takes them every day. That&apos;s why our business
                is built around subscriptions — and why we put real effort into making them
                friction-free.
              </p>
              <p>
                Below is everything you get the moment you start a subscription, plus how to skip,
                pause, or leave whenever you want.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Squiggle width={140} className="text-terracotta" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Perk cards */}
      <Section background="cream-2" spacing="default">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <article
                  key={perk.headline}
                  className="relative flex flex-col rounded-3xl border border-forest/10 bg-cream p-7"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-offwhite">
                    <Icon size={24} className="text-terracotta" />
                  </div>
                  <h3 className="fraunces-soft mb-3 text-xl font-bold leading-tight text-forest">
                    {perk.headline}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal">{perk.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How subscriptions work */}
      <Section background="mint" spacing="default">
        <Container size="narrow">
          <div className="mb-12 text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— How it works</p>
            <h2 className="fraunces-soft mb-4 text-balance text-4xl font-bold text-forest md:text-5xl">
              How subscriptions work.
            </h2>
            <p className="mx-auto max-w-xl text-base text-charcoal">
              Three steps. Then we get out of your way until you tell us to do something.
            </p>
          </div>

          <ol className="space-y-6">
            {howSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-3xl border border-forest/10 bg-cream p-6"
              >
                <span className="fraunces-soft flex-shrink-0 text-4xl font-bold text-terracotta">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="fraunces-soft mb-2 text-xl font-bold text-forest">{step.title}</h3>
                  <p className="text-base leading-relaxed text-charcoal">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* What about bundling */}
      <Section background="cream" spacing="default">
        <Container>
          <div className="relative grid items-center gap-10 rounded-3xl border-2 border-terracotta bg-offwhite p-8 md:grid-cols-[1fr_2fr] md:p-12">
            <div className="pointer-events-none absolute -right-6 -top-6 hidden md:block">
              <Blob variant={2} color="warmyellow" className="h-32 w-32" />
            </div>
            <div className="relative flex flex-col items-center gap-4">
              <Mascot variant="happy" size={180} />
              <CalloutPill variant="caveat" color="warmyellow" rotation={-4}>
                Save {duoSavingsPct}%
              </CalloutPill>
            </div>
            <div>
              <Badge variant="terracotta" className="mb-3">
                Most subscribers
              </Badge>
              <h2 className="fraunces-soft mb-4 text-balance text-3xl font-bold text-forest md:text-4xl">
                What about bundling?
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-charcoal">
                <p>
                  If your dog needs both — and roughly 70% of subscribers go this way — the Daily
                  Duo bundle gives you Daily Probiotic plus Hip + Joint as a single subscription at
                  a {duoSavingsPct}% discount off the combined retail price.
                </p>
                <p>
                  Both formulas ship together, on the same day, in one box. One subscription to
                  manage instead of two. You can still skip, swap, or split it back into individual
                  subscriptions any time from the dashboard.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" size="md" asChild>
                  <Link href="/products/daily-duo">Try the Daily Duo</Link>
                </Button>
                <Button variant="outline" size="md" asChild>
                  <Link href="/products">Browse the line →</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="warmyellow" spacing="tight">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="fraunces-soft mb-4 text-balance text-3xl font-bold text-forest md:text-4xl">
              Two products. Both daily. All perks included.
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-base text-forest/80">
              Every PawBite subscription comes with all the perks above by default. Nothing to opt
              into, nothing to redeem.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/products">Browse the line →</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
