import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { vsPages } from '@/data/vs-pages';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Dog Supplement Comparisons — PetLab, Zesty Paws, Cosequin & Native Pet',
  description:
    'Honest side-by-side comparisons of PetLab Co., Native Pet, Zesty Paws, and Cosequin vs PawBite — strains, doses, price, and when each one is the right call.',
  alternates: { canonical: `${SITE_URL}/vs` },
};

export default function VsHub() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">Honest comparisons —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            PawBite vs other brands.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            We don&apos;t trash competitors. Each page covers when their product makes sense, when
            ours does, and a real feature-by-feature comparison — refreshed every year.
          </p>
        </div>

        {vsPages.length === 0 ? (
          <p className="text-center text-charcoal/60">Comparisons coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {vsPages.map((v) => (
              <Link
                key={v.slug}
                href={`/vs/${v.slug}`}
                className="group block rounded-2xl border border-forest/15 bg-offwhite p-6 transition-transform hover:-translate-y-1"
              >
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-terracotta-dark">
                  PawBite vs.
                </p>
                <h2 className="fraunces-soft mb-2 text-2xl font-bold text-forest group-hover:text-terracotta">
                  {v.competitorName}
                </h2>
                <p className="mb-3 text-sm italic text-charcoal/80">{v.competitorTagline}</p>
                <p className="mb-3 line-clamp-3 text-sm text-charcoal">{v.tldr}</p>
                <p className="text-xs text-charcoal/60">
                  Categories: {v.productCategories.join(', ')}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
