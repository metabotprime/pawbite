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
import { CHECKOUT_LIVE } from '@/data/products';
import { VET_REVIEW_LIVE } from '@/data/vets';
import { ingredientPages } from '@/data/ingredient-pages';
import { vsPages } from '@/data/vs-pages';
import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = productsDetail[params.slug as ProductSlug];
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `${SITE_URL}/products/${product.slug}` },
    openGraph: {
      title: `${product.seoTitle} · PawBite`,
      description: product.seoDescription,
      // openGraph override replaces the root default entirely — re-supply an image.
      images: [{ url: product.imageSrc ?? '/og-default.png' }],
    },
  };
}

export default function PdpPage({ params }: { params: { slug: string } }) {
  const product = productsDetail[params.slug as ProductSlug];
  if (!product) notFound();

  // Product schema for SEO. Availability tracks CHECKOUT_LIVE so it can never
  // claim InStock while the CTA reads "Pre-order — coming soon". Prices span the
  // one-time (retail) and subscription (sub) offers via AggregateOffer.
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    brand: { '@type': 'Brand', name: 'PawBite' },
    sku: product.slug,
    url: productUrl,
    ...(product.imageSrc && { image: `${SITE_URL}${product.imageSrc}` }),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: product.subPrice.toString(),
      highPrice: product.retailPrice.toString(),
      offerCount: 2,
      availability: CHECKOUT_LIVE ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      url: productUrl,
    },
  };

  // Contextual internal links: comparisons that recommend this product + the /vs hub.
  const relatedVs = vsPages.filter((v) => v.recommendsProduct === product.slug);
  // Ingredient deep-dives for the actives actually in this product.
  const deepDives = ingredientPages.filter((p) =>
    (p.inProducts as readonly string[]).includes(product.slug),
  );

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

      {VET_REVIEW_LIVE && (
        <Section background="cream" spacing="default">
          <VetQuoteCard
            name={product.vetQuote.name}
            credentials={product.vetQuote.credentials}
            quote={product.vetQuote.quote}
          />
        </Section>
      )}

      <Section background="offwhite" spacing="default">
        <ComparisonTable comparison={product.comparison} />
      </Section>

      {(deepDives.length > 0 || relatedVs.length > 0) && (
        <Section background="cream" spacing="default">
          <Container size="narrow">
            {deepDives.length > 0 && (
              <div className="mb-8">
                <h2 className="fraunces-soft mb-4 text-2xl font-bold text-forest md:text-3xl">
                  Dig into the ingredients.
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {deepDives.map((ing) => (
                    <li key={ing.slug}>
                      <Link
                        href={`/ingredients/${ing.slug}`}
                        className="group block rounded-2xl border border-forest/10 bg-offwhite p-4 transition-transform hover:-translate-y-0.5"
                      >
                        <span className="font-semibold text-forest group-hover:text-terracotta">
                          {ing.ingredientName}
                        </span>
                        <span className="mt-1 block text-xs text-charcoal/70">
                          What it does, the dose, and the evidence →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="text-charcoal/70">Comparing options?</span>
              {relatedVs.map((v) => (
                <Link
                  key={v.slug}
                  href={`/vs/${v.slug}`}
                  className="font-medium text-terracotta-dark underline underline-offset-2 hover:text-terracotta"
                >
                  {v.competitorName} vs PawBite
                </Link>
              ))}
              <Link
                href="/vs"
                className="font-medium text-terracotta-dark underline underline-offset-2 hover:text-terracotta"
              >
                All brand comparisons
              </Link>
              <Link
                href="/science"
                className="font-medium text-terracotta-dark underline underline-offset-2 hover:text-terracotta"
              >
                The research behind the formulas
              </Link>
            </div>
          </Container>
        </Section>
      )}

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
