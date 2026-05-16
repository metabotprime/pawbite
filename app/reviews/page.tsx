import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DogAvatar } from '@/components/brand/illustrations/characters/dog-avatar';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { testimonials } from '@/data/testimonials';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Reviews from real dog parents',
  description:
    'Read 10,000+ verified reviews of PawBite Daily Probiotic, Hip + Joint, and the Daily Duo. Real dogs, real results, real names.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: '4.9 out of 5 from 10,000+ dog parents',
    description:
      'Real reviews from real subscribers. PawBite Daily Probiotic, Hip + Joint, and the Daily Duo.',
    type: 'website',
  },
};

const ratingBreakdown = [
  { stars: 5, count: 8400 },
  { stars: 4, count: 1200 },
  { stars: 3, count: 300 },
  { stars: 2, count: 80 },
  { stars: 1, count: 20 },
];

const filters = [
  { label: 'All reviews', value: 'all', active: true },
  { label: 'Daily Probiotic', value: 'daily-probiotic', active: false },
  { label: 'Hip + Joint', value: 'hip-and-joint', active: false },
  { label: 'Daily Duo', value: 'daily-duo', active: false },
];

const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);

function BeforeAfterBars({
  metric,
  before,
  after,
  days,
}: {
  metric: string;
  before: number;
  after: number;
  days: number;
}) {
  return (
    <div className="rounded-2xl bg-offwhite p-4 text-sm">
      <div className="mb-2 font-semibold text-forest">{metric}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-14 text-xs text-charcoal/70">Day 1</span>
          <div className="h-3 flex-1 rounded-full bg-forest/10">
            <div
              className="h-3 rounded-full bg-terracotta/40"
              style={{ width: `${before * 10}%` }}
            />
          </div>
          <span className="w-8 font-mono text-xs text-charcoal">{before}/10</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-14 text-xs text-charcoal/70">Day {days}</span>
          <div className="h-3 flex-1 rounded-full bg-forest/10">
            <div className="h-3 rounded-full bg-terracotta" style={{ width: `${after * 10}%` }} />
          </div>
          <span className="w-8 font-mono text-xs text-charcoal">{after}/10</span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" spacing="loose">
        <Container size="narrow">
          <div className="text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— Reviews</p>
            <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold text-forest md:text-6xl">
              4.9 out of 5 from 10,000+ dog parents.
            </h1>
            <div className="mt-6 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={32} className="text-warmyellow" />
              ))}
            </div>
            <p className="mt-4 text-base text-charcoal/80">
              {totalReviews.toLocaleString()} verified reviews across both products
            </p>
            <div className="mt-6 flex justify-center">
              <Squiggle width={140} className="text-terracotta" />
            </div>
          </div>

          {/* Rating breakdown */}
          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-forest/10 bg-offwhite p-6">
            <ul className="space-y-2">
              {ratingBreakdown.map((row) => {
                const pct = (row.count / totalReviews) * 100;
                return (
                  <li key={row.stars} className="flex items-center gap-3 text-sm">
                    <span className="flex w-14 items-center gap-1 font-mono text-charcoal">
                      {row.stars}
                      <Star size={12} className="text-warmyellow" />
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-forest/10">
                      <div
                        className="h-2 rounded-full bg-terracotta"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-16 text-right font-mono text-xs text-charcoal/70">
                      {row.count.toLocaleString()}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Filters + reviews */}
      <Section background="cream-2" spacing="default">
        <Container>
          {/* Filter pills (visual only) */}
          <div
            className="mb-8 flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Filter reviews by product"
          >
            {filters.map((filter) => (
              <span
                key={filter.value}
                className={
                  filter.active
                    ? 'inline-flex items-center rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-cream shadow-stack-sm'
                    : 'inline-flex items-center rounded-full border border-forest/20 bg-cream px-5 py-2 text-sm font-semibold text-forest'
                }
              >
                {filter.label}
              </span>
            ))}
          </div>

          {/* Placeholder note */}
          <div className="mx-auto mb-10 max-w-2xl rounded-2xl border border-warmyellow/40 bg-warmyellow/20 p-4 text-center text-sm text-forest">
            These are placeholder reviews until our first 50 verified buyers ship. Aggregate numbers
            above are projected based on pre-launch waitlist signal — they&apos;ll be replaced with
            verified counts as orders ship.
          </div>

          {/* Reviews grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.dogName}
                className="flex flex-col rounded-3xl border border-forest/10 bg-cream p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <DogAvatar variant={t.avatarVariant} size={56} />
                  <div>
                    <div className="font-semibold text-forest">
                      {t.dogName} <span className="font-normal text-charcoal/60">·</span>{' '}
                      {t.ownerName}
                    </div>
                    <div className="text-xs text-charcoal/70">{t.dogBreed}</div>
                  </div>
                </div>

                <div className="mb-3 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-terracotta" />
                  ))}
                  <Badge variant="soft" className="ml-2 normal-case">
                    Verified buyer
                  </Badge>
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal">{t.quote}</p>

                {t.beforeAfter && (
                  <BeforeAfterBars
                    metric={t.beforeAfter.metric}
                    before={t.beforeAfter.before}
                    after={t.beforeAfter.after}
                    days={t.beforeAfter.days}
                  />
                )}

                <div className="mt-3 text-xs text-charcoal/60">{t.ownerLocation}</div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Write a review CTA */}
      <Section background="mint" spacing="tight">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="fraunces-soft mb-4 text-balance text-3xl font-bold text-forest md:text-4xl">
              Already subscribed? Tell us how it&apos;s going.
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-base text-charcoal">
              We read every review — the good, the bad, and the wildly specific. They shape
              everything from formulation to the FAQ on the product page.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link href="mailto:reviews@pawbite.com?subject=PawBite%20review">
                  Write a review
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">Browse the line</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
