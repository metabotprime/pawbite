export const SITE_NAME = 'PawBite';
export const SITE_DESCRIPTION =
  'Vet-formulated dog supplements: a daily probiotic chew, a hip & joint chew, and a calming chew. Real named strains, clinical doses, and every claim cited to a study.';
// Fallback is the real production domain (not the *.vercel.app alias) so canonicals,
// sitemap, OG, and schema URLs never bake the preview host. Still set
// NEXT_PUBLIC_SITE_URL in each environment (see .env.example) — this is just the safety net.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pawbite.com';
export const ORG_LEGAL_NAME = 'PawBite Inc.';
export const ORG_LOCATION = 'Hudson Valley, NY';

/** JSON-LD: Organization */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-default.png`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hudson Valley',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'help@pawbite.com',
      availableLanguage: 'en',
    },
    sameAs: [
      // Populate as social handles are claimed
    ],
  };
}

/** JSON-LD: WebSite (enables Sitelinks search box) */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/learn?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** Render JSON-LD into a script tag — safe for use in server components */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
