import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import { ContentDataTable } from '@/components/content/content-data-table';
import { vsPageBySlug, vsPageSlugs } from '@/data/vs-pages';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return vsPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const vs = vsPageBySlug(params.slug);
  if (!vs) return {};
  return {
    // Competitor-first: people search "[Competitor] alternative/vs", not the pre-launch brand.
    title: { absolute: `${vs.competitorName} vs PawBite: Honest Comparison & Alternative` },
    description: vs.tldr.length > 155 ? `${vs.tldr.slice(0, 152).trimEnd()}…` : vs.tldr,
    alternates: { canonical: `${SITE_URL}/vs/${vs.slug}` },
    openGraph: {
      title: `${vs.competitorName} vs PawBite — honest comparison`,
      description: 'A fair, side-by-side look at the formulas, strains, doses, and price.',
      type: 'article',
    },
  };
}

export default function VsPage({ params }: { params: { slug: string } }) {
  const vs = vsPageBySlug(params.slug);
  if (!vs) notFound();

  const title = `${vs.competitorName} vs PawBite.`;

  const whenSection = [
    { heading: `When ${vs.competitorName} makes sense.`, body: vs.whenCompetitorMakesSense },
    { heading: 'When PawBite makes sense.', body: vs.whenPawbiteMakesSense },
  ];

  const sections = [...whenSection, ...vs.sections];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: vs.tldr,
              byline: vs.byline,
              url: `${SITE_URL}/vs/${vs.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(vs.faqs)),
        }}
      />
      <ContentPage
        category={`vs ${vs.competitorName}`}
        hubLink={{ href: '/vs', label: 'All comparisons' }}
        title={title}
        tldr={vs.tldr}
        byline={vs.byline}
        sections={sections}
        faqs={vs.faqs}
        recommendsProduct={vs.recommendsProduct}
        recommendsContext={vs.whenPawbiteMakesSense}
        extra={
          <ContentDataTable
            table={{
              caption: 'Side-by-side comparison',
              headers: ['Feature', 'PawBite', vs.competitorName],
              rows: vs.comparisonRows.map((r) => [r.feature, r.pawbite, r.competitor]),
            }}
          />
        }
      />
    </>
  );
}
