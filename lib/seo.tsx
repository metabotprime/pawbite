export const SITE_NAME = 'PawBite';
export const SITE_DESCRIPTION =
  'Explore PawBite dog supplement chews for gut health, hip and joint support, and everyday calm. Compare ingredients, serving guidance, and pre-launch product details.';
// Vercel redirects pawbite.com to www.pawbite.com. Keep discovery signals on
// that verified primary origin, including builds served from deployment aliases.
export const SITE_URL = 'https://www.pawbite.com';

/** JSON-LD: Organization */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-default.png`,
    description: SITE_DESCRIPTION,
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

/** JSON-LD: WebSite. There is no site search, so do not advertise SearchAction. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/** Render JSON-LD into a script tag — safe for use in server components */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
