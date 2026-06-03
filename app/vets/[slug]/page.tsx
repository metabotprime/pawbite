import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { vets } from '@/data/vets';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return vets.map((vet) => ({ slug: vet.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const vet = vets.find((v) => v.slug === params.slug);
  if (!vet) return {};
  return {
    title: `${vet.name} — Veterinary advisor at PawBite`,
    description: `${vet.name} is a ${vet.credentials.toLowerCase()} and editorial reviewer for PawBite. ${vet.bio}`,
    alternates: { canonical: `${SITE_URL}/vets/${vet.slug}` },
    openGraph: {
      title: vet.name,
      description: vet.credentials,
      type: 'profile',
    },
  };
}

function personSchema(vet: { slug: string; name: string; credentials: string; bio: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: vet.name,
    jobTitle: 'Veterinary advisor',
    description: vet.bio,
    honorificSuffix: 'DVM',
    affiliation: {
      '@type': 'Organization',
      name: 'PawBite',
      url: SITE_URL,
    },
    url: `${SITE_URL}/vets/${vet.slug}`,
  };
}

const focusAreas = [
  {
    title: 'Veterinary nutrition.',
    body: 'Diet, supplement formulation, and the practical question of what to feed when the prescription kibble works medically but the dog refuses to touch it.',
  },
  {
    title: 'Gut microbiome and probiotics.',
    body: 'Strain selection, dosing, and which clinical findings actually translate from human research into the dog gut. Especially interested in post-antibiotic and post-stress GI recovery.',
  },
  {
    title: 'Geriatric care.',
    body: 'Joint health, weight management, and cognitive support in dogs over seven. The bias of the field is to treat senior dogs as fragile — Dr. Hayes works to push past that.',
  },
  {
    title: 'Editorial review.',
    body: "Vetting health content for accuracy, tone, and the gap between what's technically true and what's actually useful for a dog owner standing in their kitchen at 11pm.",
  },
];

export default function VetBioPage({ params }: { params: { slug: string } }) {
  const vet = vets.find((v) => v.slug === params.slug);
  if (!vet) notFound();

  const initials = vet.name
    .replace(/^Dr\.\s*/i, '')
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // For the placeholder vet, every published article is reviewed by Hayes.
  const reviewedArticles = blogPosts.filter((post) => post.byline.reviewedBy === vet.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema(vet)),
        }}
      />

      {/* Hero */}
      <Section background="cream" spacing="loose">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Blob
                  variant={4}
                  color="mint"
                  className="absolute inset-0 -m-6 h-56 w-56"
                  aria-hidden
                />
                <div
                  className="relative flex h-44 w-44 items-center justify-center rounded-full border-4 border-forest bg-cream shadow-soft"
                  aria-hidden
                >
                  <span className="fraunces-soft text-5xl font-bold text-forest">{initials}</span>
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <CalloutPill variant="caveat" color="warmyellow" rotation={6}>
                    DVM
                  </CalloutPill>
                </div>
              </div>
            </div>

            {/* Name + credentials */}
            <div className="flex flex-col gap-4">
              <p className="font-hand text-2xl text-terracotta">— Meet our reviewer</p>
              <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight text-forest md:text-5xl lg:text-6xl">
                {vet.name}
              </h1>
              <p className="text-lg text-charcoal">{vet.credentials}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="soft" className="normal-case">
                  {vet.specialty}
                </Badge>
                <Badge variant="mint" className="normal-case">
                  Reviewed {reviewedArticles.length} article
                  {reviewedArticles.length === 1 ? '' : 's'}
                </Badge>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button variant="primary" size="md" asChild>
                  <Link href="/learn">Read reviewed articles</Link>
                </Button>
                <Button variant="outline" size="md" asChild>
                  <Link href="/vets">All advisors</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bio */}
      <Section background="cream-2" spacing="default">
        <Container size="narrow">
          <h2 className="fraunces-soft mb-3 text-balance text-3xl font-bold text-forest md:text-4xl">
            Bio.
          </h2>
          <div className="mb-6 flex justify-start">
            <Squiggle width={100} className="text-terracotta" />
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-charcoal">
            <p>{vet.bio}</p>
            <p>
              Dr. Hayes has spent 20 years in small-animal practice, with the last decade focused on
              the intersection of nutrition, microbiome, and chronic-care management. The role at
              PawBite is editorial — reading every article and formulation, flagging anything that
              doesn&apos;t hold up, and signing the page when it does.
            </p>
            <p>
              Real names and credentials for our advisory board will appear here as contracts are
              finalized. We&apos;d rather show a placeholder than fake a CV.
            </p>
          </div>
        </Container>
      </Section>

      {/* Areas of focus */}
      <Section background="cream" spacing="default">
        <Container size="narrow">
          <div className="mb-10">
            <p className="mb-2 font-hand text-2xl text-terracotta">— Areas of focus</p>
            <h2 className="fraunces-soft text-balance text-3xl font-bold text-forest md:text-4xl">
              What Dr. Hayes works on.
            </h2>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = [Stethoscope, Sparkle, Heart, Shield][i % 4];
              return (
                <li
                  key={area.title}
                  className="rounded-3xl border border-forest/10 bg-offwhite p-6"
                >
                  <Icon size={28} className="mb-3 text-terracotta" />
                  <h3 className="fraunces-soft mb-2 text-xl font-bold text-forest">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal">{area.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Articles reviewed */}
      <Section background="mint" spacing="default">
        <Container size="narrow">
          <div className="mb-10">
            <p className="mb-2 font-hand text-2xl text-terracotta">— On the record</p>
            <h2 className="fraunces-soft text-balance text-3xl font-bold text-forest md:text-4xl">
              Articles reviewed by {vet.name.split(',')[0]}.
            </h2>
            <p className="mt-3 text-base text-charcoal">
              Every article here was read, edited, and approved by {vet.name.split(',')[0]} before
              publishing.
            </p>
          </div>

          {reviewedArticles.length === 0 ? (
            <p className="text-charcoal/70">No reviewed articles yet.</p>
          ) : (
            <ul className="space-y-3">
              {reviewedArticles.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/learn/${post.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-cream p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="mb-1 flex items-center gap-2 text-xs">
                        <Badge variant="soft" className="normal-case">
                          {post.category}
                        </Badge>
                        <span className="text-charcoal/60">{post.readMin} min read</span>
                      </div>
                      <h3 className="fraunces-soft text-lg font-bold leading-tight text-forest group-hover:text-terracotta">
                        {post.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="hidden flex-shrink-0 font-mono text-sm text-terracotta-dark md:block"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </>
  );
}
