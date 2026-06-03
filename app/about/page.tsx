import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { TapeAccent } from '@/components/brand/illustrations/decor/tape-accent';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About PawBite',
  description:
    'PawBite is a small dog supplement brand from the Hudson Valley. Three focused chews, vet-formulated, made by humans who actually own dogs. Read the founder story.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About PawBite',
    description:
      'Three focused chews. Vet-formulated. Made by humans who actually own dogs. The story behind PawBite, written by founder Noah Chang.',
    type: 'website',
  },
};

const promises = [
  {
    headline: "We won't use fillers.",
    body: "Every ingredient on the label is doing a job. No maltodextrin, no mystery 'flavoring agents,' no padding to make the chew look bigger than it is.",
    icon: Shield,
  },
  {
    headline: "We won't make claims we can't back up.",
    body: 'Every strain, every gram, every dose number on our site cites real peer-reviewed research in dogs. If a study only existed in mice, we say so. If we changed our mind based on new data, we update the page and timestamp it.',
    icon: Stethoscope,
  },
  {
    headline: "We won't lock you into anything.",
    body: 'Skip, pause, or cancel your subscription in one click. No phone calls, no retention scripts, no cancellation fees. If you want out, you get out — in under a minute, at 2am if you want.',
    icon: Heart,
  },
  {
    headline: "We won't sell your data.",
    body: "We don't share, sell, or rent your email or your dog's name to anyone. Your inbox is yours. We only email when there's something worth saying.",
    icon: Sparkle,
  },
];

const team = [
  {
    name: 'Noah Chang',
    role: 'Founder',
    bio: "Noah started PawBite in 2024 after spending two years and an embarrassing amount of money trying to fix his rescue dog Theo's gut. Background in consumer product design. Lives in the Hudson Valley with Theo and a confused cat named Wallace.",
    initials: 'NC',
    color: 'bg-warmyellow',
  },
  {
    name: 'Dr. M. Hayes, DVM',
    role: 'Veterinary advisor',
    bio: 'Board-certified veterinary nutritionist. Reviews every formulation, every blog post, and every claim we make on the site. Twenty years in small-animal practice with a focus on gut microbiome and geriatric care.',
    initials: 'MH',
    color: 'bg-mint',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — founder note */}
      <Section background="cream" spacing="loose">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Founder polaroid */}
            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="relative rounded-sm bg-white p-3 pb-12 shadow-soft"
                style={{ transform: 'rotate(-3deg)' }}
              >
                <div className="absolute -top-4 left-6 z-10">
                  <TapeAccent width={80} color="warmyellow" rotation={-8} />
                </div>
                <div className="absolute -top-2 right-4 z-10">
                  <Squiggle width={80} className="text-terracotta" />
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1600&q=80"
                  alt="Noah Chang with his rescue dog Theo"
                  width={600}
                  height={750}
                  className="h-auto w-full"
                  priority
                />
                <p className="mt-3 text-center font-sans text-sm italic text-charcoal/70">
                  Noah and Theo, 2023.
                </p>
              </div>
            </div>

            {/* Founder long-form */}
            <div className="flex flex-col gap-6">
              <p className="font-hand text-2xl text-terracotta">— About us</p>
              <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight text-forest md:text-5xl lg:text-6xl">
                Made by humans who actually own dogs.
              </h1>
              <div className="space-y-4 text-lg leading-relaxed text-charcoal">
                <p>
                  PawBite started in a kitchen in the Hudson Valley in 2024, mostly out of
                  frustration. I&apos;d adopted Theo a year earlier — a five-year-old shepherd mix
                  with a gut that had been through it. Three kibbles, four probiotics, two
                  prescription diets, one emergency vet visit, and a small mountain of paper towels
                  later, I was still nowhere.
                </p>
                <p>
                  The supplements I&apos;d been buying split into two camps. One was bright, loud,
                  and full of ingredients I could not pronounce — chews engineered to look like dog
                  candy with a probiotic strain that had never been studied in dogs attached as an
                  afterthought. The other was clinical: white tubs, science-fair fonts,
                  twelve-syllable strain names, and a brand voice that read like it had never met an
                  actual dog. Neither felt right.
                </p>
                <p>
                  So I started PawBite. Three focused chews — a daily probiotic, a hip + joint chew,
                  and a calming chew. Each one cites the studies it&apos;s built on. Each one is
                  reviewed by Dr. M. Hayes, our veterinary nutritionist. Each one is the version I
                  wish I could have handed past-me at 2am on a Tuesday, standing in the kitchen,
                  Googling whether the new chew Theo had thrown up was something to call the vet
                  about.
                </p>
                <p>
                  That&apos;s the whole brand. Three focused chews, made carefully, sold honestly,
                  by people who feed them to their own dogs every morning.
                </p>
              </div>
              <p className="font-hand text-2xl text-terracotta">— Noah Chang, founder</p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/products">Shop the line</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/science">Read the science</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we won't do */}
      <Section background="mint" spacing="default">
        <Container size="narrow">
          <div className="mb-12 text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— The promises</p>
            <h2 className="fraunces-soft mb-4 text-balance text-4xl font-bold text-forest md:text-5xl">
              What we won&apos;t do.
            </h2>
            <div className="flex justify-center">
              <Squiggle width={140} className="text-terracotta" />
            </div>
          </div>

          <ul className="space-y-10">
            {promises.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.headline} className="flex gap-5">
                  <span className="mt-1 flex-shrink-0">
                    <Icon size={32} className="text-terracotta" />
                  </span>
                  <div>
                    <h3 className="fraunces-soft mb-2 text-xl font-bold text-forest md:text-2xl">
                      {p.headline}
                    </h3>
                    <p className="text-base leading-relaxed text-charcoal">{p.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Why we keep the line short */}
      <Section background="cream" spacing="default">
        <Container size="narrow">
          <div className="relative">
            <div className="pointer-events-none absolute -left-12 top-0 hidden md:block">
              <Blob variant={3} color="warmyellow" className="h-32 w-32" />
            </div>
            <div className="pointer-events-none absolute -right-8 bottom-0 hidden md:block">
              <Blob variant={5} color="pinky" className="h-28 w-28" />
            </div>
            <div className="relative">
              <p className="mb-2 font-hand text-2xl text-terracotta">— The focused line</p>
              <h2 className="fraunces-soft mb-6 text-balance text-4xl font-bold text-forest md:text-5xl">
                Why we keep the line short.
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-charcoal">
                <p>
                  Most dog supplement brands sell twenty or thirty SKUs. Skin chew, allergy chew,
                  multivitamin chew, dental chew, eye chew, a different anxiety chew for every week
                  of the month. Half of them are the same base recipe with a different sticker.
                </p>
                <p>
                  We make three: a daily probiotic, a hip + joint chew, and a calming chew.
                  That&apos;s what most dogs actually need, and it&apos;s what we can stand behind
                  without bending the evidence. Every dollar we don&apos;t spend launching a
                  fourteenth flavor of multivitamin goes into better strains, higher doses, and
                  slower, more careful formulation. A short line means we know every ingredient,
                  every supplier, and every batch. It also means if your dog only needs one,
                  we&apos;ll tell you.
                </p>
                <p>
                  Calm is the most recent addition — and proof of the rule, not an exception to it.
                  We only added it because we found a version we could do meaningfully better than
                  the shelf: L-theanine and ashwagandha for calm without sedation, plus a gut-brain
                  probiotic, because anxious dogs are so often gut-unsettled dogs. When we find the
                  next one worth doing, we&apos;ll add it. Not before.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The team */}
      <Section background="cream-2" spacing="default">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— The team</p>
            <h2 className="fraunces-soft mb-4 text-balance text-4xl font-bold text-forest md:text-5xl">
              Small team. Real names.
            </h2>
            <p className="mx-auto max-w-xl text-base text-charcoal">
              There are two of us behind the brand right now, plus Theo, who is technically head of
              product testing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((m) => (
              <article
                key={m.name}
                className="flex flex-col items-start gap-4 rounded-3xl border border-forest/10 bg-cream p-8"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${m.color} font-bold text-forest`}
                  aria-hidden
                >
                  <span className="fraunces-soft text-2xl">{m.initials}</span>
                </div>
                <div>
                  <h3 className="fraunces-soft text-2xl font-bold text-forest">{m.name}</h3>
                  <Badge variant="soft" className="mt-2 normal-case">
                    {m.role}
                  </Badge>
                </div>
                <p className="text-base leading-relaxed text-charcoal">{m.bio}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="md" asChild>
              <Link href="/vets">Meet our veterinary advisor</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Made in Hudson Valley callout */}
      <Section background="warmyellow" spacing="tight">
        <Container size="narrow">
          <div className="flex flex-col items-center gap-6 text-center">
            <Mascot variant="happy" size={140} />
            <CalloutPill variant="caveat" color="terracotta" rotation={-3}>
              Made in Hudson Valley, NY
            </CalloutPill>
            <p className="max-w-xl text-base leading-relaxed text-forest">
              PawBite is independently owned, US-formulated, and packaged in upstate New York. No
              private equity, no celebrity stakeholders, no investor slide deck. Just three focused
              chews and a small team.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button variant="primary" size="md" asChild>
                <Link href="/products">Shop the line</Link>
              </Button>
              <Button variant="forest" size="md" asChild>
                <Link href="/quiz">Take the 60-second quiz</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
