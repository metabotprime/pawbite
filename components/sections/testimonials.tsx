import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { DogAvatar } from '@/components/brand/illustrations/characters/dog-avatar';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';

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

export function TestimonialsSection() {
  return (
    <Section background="cream-2" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            Real dogs. Real differences.
          </h2>
          <p className="text-lg text-charcoal">
            Pre-launch testimonials from dogs who tested the formulas with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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
  );
}
