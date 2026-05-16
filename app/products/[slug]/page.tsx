import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { PdpHero } from '@/components/pdp/pdp-hero';
import { IngredientsTable } from '@/components/pdp/ingredients-table';
import { DosingTable } from '@/components/pdp/dosing-table';
import { VetQuoteCard } from '@/components/pdp/vet-quote-card';
import { ComparisonTable } from '@/components/pdp/comparison-table';
import { PdpFaq } from '@/components/pdp/pdp-faq';
import { PdpBenefits } from '@/components/pdp/pdp-benefits';
import { PdpGuarantee } from '@/components/pdp/pdp-guarantee';
import { RelatedProducts } from '@/components/pdp/related-products';
import { productsDetail, productSlugs, type ProductSlug } from '@/data/products-detail';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = productsDetail[params.slug as ProductSlug];
  if (!product) return {};
  return {
    title: product.name,
    description: product.longDescription,
    alternates: { canonical: `${SITE_URL}/products/${product.slug}` },
    openGraph: {
      title: `${product.name} · PawBite`,
      description: product.longDescription,
    },
  };
}

export default function PdpPage({ params }: { params: { slug: string } }) {
  const product = productsDetail[params.slug as ProductSlug];
  if (!product) notFound();

  // Product schema for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    brand: { '@type': 'Brand', name: 'PawBite' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.subPrice.toString(),
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Section background="cream" spacing="default">
        <Container>
          <PdpHero product={product} />
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <PdpBenefits benefits={product.benefits} />
      </Section>

      <Section background="cream" spacing="default">
        <IngredientsTable
          ingredients={product.ingredients}
          prebioticsAndExtras={product.prebioticsAndExtras}
        />
      </Section>

      <Section background="warmyellow" spacing="default">
        <DosingTable dosing={product.dosing} note={product.dosingNote} />
      </Section>

      <Section background="cream" spacing="default">
        <VetQuoteCard
          name={product.vetQuote.name}
          credentials={product.vetQuote.credentials}
          quote={product.vetQuote.quote}
        />
      </Section>

      <Section background="offwhite" spacing="default">
        <ComparisonTable comparison={product.comparison} />
      </Section>

      <Section background="mint" spacing="default">
        <PdpFaq faqs={product.faqs} />
      </Section>

      <Section background="cream" spacing="default">
        <PdpGuarantee />
      </Section>

      <Section background="cream-2" spacing="default">
        <RelatedProducts currentSlug={product.slug} />
      </Section>
    </>
  );
}
