import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { ContentByline } from './content-byline';
import { ContentTldr } from './content-tldr';
import { ContentSectionRender } from './content-section';
import { ContentDataTable } from './content-data-table';
import { ContentSources } from './content-sources';
import { ContentFaqSection } from './content-faq';
import { ContentProductRecommend } from './content-product-recommend';
import type {
  ContentByline as Byline,
  ContentSection,
  ContentSource,
  ContentFAQ,
  DataTable,
  ProductRecommendation,
} from '@/data/content-schema';

interface ContentPageProps {
  /** Top-of-page category label (e.g., "Gut health", "Labrador retriever", "vs. Cosequin") */
  category: string;
  /** Optional link back to the hub (e.g., "/learn", "/breeds") */
  hubLink?: { href: string; label: string };
  /** Main page title */
  title: string;
  /** Definitive 2-3 sentence answer (the AI-citation snippet) */
  tldr: string;
  byline: Byline;
  /** Body sections */
  sections: ContentSection[];
  /** Optional data table embedded mid-content (after the first 2 sections) */
  dataTable?: DataTable;
  /** Optional cited sources */
  sources?: ContentSource[];
  /** FAQ block (drives FAQPage schema) */
  faqs: ContentFAQ[];
  /** Inline product recommendation */
  recommendsProduct: ProductRecommendation;
  recommendsContext: string;
  /** Optional extra blocks rendered above the FAQ (e.g., comparison table for vs pages) */
  extra?: React.ReactNode;
}

export function ContentPage({
  category,
  hubLink,
  title,
  tldr,
  byline,
  sections,
  dataTable,
  sources,
  faqs,
  recommendsProduct,
  recommendsContext,
  extra,
}: ContentPageProps) {
  // Render data table after the first 2 sections (or after all, whichever is fewer)
  const tableInsertIndex = Math.min(2, sections.length);
  const sectionsBeforeTable = sections.slice(0, tableInsertIndex);
  const sectionsAfterTable = sections.slice(tableInsertIndex);

  return (
    <Section background="cream" spacing="default">
      <Container size="narrow">
        {/* Breadcrumb / category */}
        <div className="mb-4 flex items-center gap-3 text-xs">
          {hubLink ? (
            <Link
              href={hubLink.href}
              className="font-mono uppercase tracking-wider text-terracotta-dark hover:underline"
            >
              ← {hubLink.label}
            </Link>
          ) : (
            <Badge variant="soft">{category}</Badge>
          )}
        </div>

        {/* Title */}
        <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold leading-tight text-forest md:text-5xl">
          {title}
        </h1>

        {/* Byline */}
        <ContentByline byline={byline} />

        {/* TLDR — definitive answer */}
        <ContentTldr>{tldr}</ContentTldr>

        {/* Body */}
        <article className="prose-pawbite">
          {sectionsBeforeTable.map((s, i) => (
            <ContentSectionRender key={`s1-${i}`} section={s} id={`s-${i}`} />
          ))}

          {dataTable && <ContentDataTable table={dataTable} />}

          {sectionsAfterTable.map((s, i) => (
            <ContentSectionRender key={`s2-${i}`} section={s} id={`s-${tableInsertIndex + i}`} />
          ))}
        </article>

        {/* Product recommendation */}
        <ContentProductRecommend slug={recommendsProduct} reason={recommendsContext} />

        {/* Extra block (used by vs pages for comparison table) */}
        {extra}

        {/* FAQs (FAQPage schema-eligible) */}
        <ContentFaqSection faqs={faqs} />

        {/* Sources */}
        {sources && <ContentSources sources={sources} />}

        {/* Vet reviewer reaffirmation */}
        <div className="mt-12 rounded-2xl bg-forest/5 p-5 text-sm text-charcoal/80">
          <strong className="text-forest">Last reviewed by {byline.reviewedBy}</strong> on{' '}
          {new Date(byline.updatedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          . PawBite content is reviewed by a licensed veterinarian. Not a substitute for veterinary
          advice for your specific dog.
        </div>
      </Container>
    </Section>
  );
}

/** Build FAQPage JSON-LD schema from a FAQ list. */
export function faqPageSchema(faqs: ContentFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/** Build Article JSON-LD schema. */
export function articleSchema({
  title,
  description,
  byline,
  url,
}: {
  title: string;
  description: string;
  byline: Byline;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Organization', name: byline.author },
    reviewedBy: { '@type': 'Person', name: byline.reviewedBy },
    datePublished: byline.publishedDate,
    dateModified: byline.updatedDate,
    publisher: {
      '@type': 'Organization',
      name: 'PawBite',
    },
    mainEntityOfPage: url,
  };
}
