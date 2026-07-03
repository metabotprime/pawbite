import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { vets } from '@/data/vets';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Our veterinary advisory board',
  description:
    "How PawBite's editorial review works: every claim cites a peer-reviewed study, and our veterinary advisory board — real names, not logos — is being finalized before launch.",
  alternates: { canonical: `${SITE_URL}/vets` },
  openGraph: {
    title: 'The vets behind PawBite',
    description:
      'Source-cited editorial review today. Named veterinary advisors signing every page as the board is finalized.',
    type: 'website',
  },
};

const reviewSteps = [
  {
    title: 'A staff writer drafts the article.',
    body: 'Our editorial team writes a first draft using published research, vet guidelines, and a strict source-citation rule: every claim with a number or a recommendation has to be traceable.',
    icon: Sparkle,
  },
  {
    title: 'A reviewing vet reads the draft.',
    body: 'The reviewing vet reads the full draft and flags anything that is unsupported, oversimplified, or out of step with current standards of care. Comments are line by line.',
    icon: Stethoscope,
  },
  {
    title: 'We rewrite and re-cite.',
    body: 'Edits get folded in, sources get re-checked, dose ranges get verified against the cited studies. If a claim cannot be supported, it gets cut. We do not soften — we delete.',
    icon: Shield,
  },
  {
    title: 'It gets a published timestamp.',
    body: 'Every page lists the publish date, last review date, and the reviewing vet by name. When the science updates, the page gets updated, re-reviewed, and re-stamped.',
    icon: Heart,
  },
];

export default function VetsPage() {
  const reviewedArticleCount = blogPosts.length;

  return (
    <>
      {/* Hero */}
      <Section background="cream" spacing="loose">
        <Container size="narrow">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Blob
                  variant={2}
                  color="mint"
                  className="absolute inset-0 -m-4 h-24 w-24"
                  aria-hidden
                />
                <Stethoscope size={56} className="relative text-forest" />
              </div>
            </div>
            <p className="mb-3 font-hand text-2xl text-terracotta">— Our advisory board</p>
            <h1 className="fraunces-soft mb-6 text-balance text-4xl font-bold text-forest md:text-6xl">
              The vets behind PawBite.
            </h1>
            <div className="mx-auto flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-charcoal">
              <p>
                Every product we sell and every article we publish is built to be reviewed by a
                licensed veterinarian — not as a logo on the footer, but as a person who reads the
                draft, flags the weak parts, and signs the page. We&apos;re pre-launch: contracts
                with our advisory vets are being finalized, and until a real name signs, our pages
                say &ldquo;veterinary review pending&rdquo; instead of pretending otherwise.
              </p>
              <p>
                The board will be small on purpose. We&apos;d rather have one vet who reads every
                article carefully than a wall of 12 names who skim.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <Squiggle width={140} className="text-terracotta" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Vet cards */}
      <Section background="cream-2" spacing="default">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {vets.map((vet) => {
              const initials = vet.name
                .replace(/^Dr\.\s*/i, '')
                .split(/\s+/)
                .map((part) => part[0])
                .filter(Boolean)
                .slice(0, 2)
                .join('')
                .toUpperCase();
              return (
                <article
                  key={vet.slug}
                  className="flex flex-col rounded-3xl border border-forest/10 bg-cream p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-mint font-bold text-forest"
                      aria-hidden
                    >
                      <span className="fraunces-soft text-2xl">{initials}</span>
                    </div>
                    <div>
                      <h2 className="fraunces-soft text-2xl font-bold text-forest">{vet.name}</h2>
                      <p className="text-sm text-charcoal/80">{vet.credentials}</p>
                    </div>
                  </div>

                  <Badge variant="soft" className="mb-4 self-start normal-case">
                    {vet.specialty}
                  </Badge>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal">{vet.bio}</p>

                  <div className="mb-6 rounded-2xl bg-offwhite p-4 text-sm">
                    <div className="font-mono text-xs uppercase tracking-wider text-charcoal/60">
                      In review queue
                    </div>
                    <div className="fraunces-soft text-2xl font-bold text-forest">
                      {reviewedArticleCount} article{reviewedArticleCount === 1 ? '' : 's'}
                    </div>
                  </div>

                  <Button variant="outline" size="md" asChild>
                    <Link href={`/vets/${vet.slug}`}>Read full bio →</Link>
                  </Button>
                </article>
              );
            })}

            {/* Placeholder card for future advisors */}
            <article className="flex flex-col items-start justify-center rounded-3xl border-2 border-dashed border-forest/20 bg-cream/50 p-8 text-center">
              <div
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-warmyellow/40 font-bold text-forest"
                aria-hidden
              >
                <Sparkle size={28} className="text-forest" />
              </div>
              <h2 className="fraunces-soft mx-auto text-xl font-bold text-forest">
                More advisors coming.
              </h2>
              <p className="mx-auto mt-2 text-sm leading-relaxed text-charcoal">
                We&apos;re adding specialists in dermatology and behavior in 2026 as we expand the
                editorial library. New names will land here once contracts are finalized.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* How our review process works */}
      <Section background="mint" spacing="default">
        <Container size="narrow">
          <div className="mb-12 text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— How it works</p>
            <h2 className="fraunces-soft mb-4 text-balance text-4xl font-bold text-forest md:text-5xl">
              How our review process works.
            </h2>
            <p className="mx-auto max-w-xl text-base text-charcoal">
              No drive-by approvals. No copy-pasted disclaimers. Here&apos;s exactly what happens
              between a draft and a published page.
            </p>
          </div>

          <ol className="space-y-8">
            {reviewSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-3xl border border-forest/10 bg-cream p-6"
                >
                  <div className="flex flex-shrink-0 flex-col items-center gap-2">
                    <span className="fraunces-soft text-3xl font-bold text-terracotta">
                      0{i + 1}
                    </span>
                    <Icon size={24} className="text-forest" />
                  </div>
                  <div>
                    <h3 className="fraunces-soft mb-2 text-xl font-bold text-forest">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-charcoal">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* Disclaimer */}
      <Section background="cream" spacing="tight">
        <Container size="narrow">
          <div className="rounded-2xl border border-forest/15 bg-offwhite p-6 text-sm leading-relaxed text-charcoal/90">
            <strong className="text-forest">A note on what our vets do — and don&apos;t do.</strong>{' '}
            Our advisory vets review editorial content and product formulations. They are not
            seeing, diagnosing, or treating your specific dog. Nothing on this site is a substitute
            for an in-person veterinary exam. If your dog is unwell, please call your own vet.
          </div>
        </Container>
      </Section>
    </>
  );
}
