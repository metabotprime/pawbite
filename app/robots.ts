import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    // The wildcard preserves public access for web and AI crawlers without
    // specific Allow-only groups overriding the utility-path restrictions.
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account/', '/checkout', '/api/', '/dev/'],
    },
    // Let crawlers fetch /cart and /quiz/results to see their noindex tags.
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
