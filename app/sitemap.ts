import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { productSlugs } from '@/data/products-detail';
import { blogPostSlugs } from '@/data/blog-posts';
import { breedPageSlugs } from '@/data/breed-pages';
import { concernPageSlugs } from '@/data/concern-pages';
import { ingredientPageSlugs } from '@/data/ingredient-pages';
import { vsPageSlugs } from '@/data/vs-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    // Top-level
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/quiz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Brand pages
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/vets`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Individual advisor profiles are noindexed until a real DVM signs (see VET_REVIEW_LIVE),
    // so they stay out of the sitemap for now.
    { url: `${SITE_URL}/science`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/perks`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Legal
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/shipping`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/returns`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/editorial`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Commerce
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${SITE_URL}/products/daily-duo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...productSlugs.map((slug) => ({
      url: `${SITE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),

    // Content hubs
    { url: `${SITE_URL}/learn`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/breeds`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/concerns`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE_URL}/ingredients`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${SITE_URL}/vs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Content pages
    ...blogPostSlugs().map((slug) => ({
      url: `${SITE_URL}/learn/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...breedPageSlugs().map((slug) => ({
      url: `${SITE_URL}/breeds/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...concernPageSlugs().map((slug) => ({
      url: `${SITE_URL}/concerns/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...ingredientPageSlugs().map((slug) => ({
      url: `${SITE_URL}/ingredients/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
    ...vsPageSlugs().map((slug) => ({
      url: `${SITE_URL}/vs/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return entries;
}
