import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { BowlIllustration } from '@/components/brand/illustrations/journal/bowl-illustration';
import { BoneWithSparkle } from '@/components/brand/illustrations/journal/bone-with-sparkle';
import { ClockIllustration } from '@/components/brand/illustrations/journal/clock-illustration';
import { journalEntries } from '@/data/journal';

const illustrationMap = {
  bowl: BowlIllustration,
  bone: BoneWithSparkle,
  clock: ClockIllustration,
} as const;

const bgRotation = ['bg-pinky', 'bg-mint', 'bg-warmyellow'];

export function JournalTeaser() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row md:items-baseline">
          <h2 className="fraunces-soft text-4xl italic text-forest md:text-5xl">
            From the journal.
          </h2>
          <Link
            href="/learn"
            className="text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            All articles →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry, i) => {
            const Illo = illustrationMap[entry.illustration];
            return (
              <Link
                href={`/learn/${entry.slug}`}
                key={entry.slug}
                className="group block overflow-hidden rounded-2xl border border-forest/10 bg-offwhite transition-transform hover:-translate-y-1"
              >
                <div
                  className={`flex h-44 items-center justify-center ${bgRotation[i % bgRotation.length]}`}
                >
                  <Illo size={140} />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-terracotta">
                    {entry.category} · {entry.readMin} min read
                  </div>
                  <h3 className="fraunces-soft mb-3 text-xl font-bold leading-tight text-forest group-hover:text-terracotta">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-charcoal/60">Reviewed by {entry.reviewedBy}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
