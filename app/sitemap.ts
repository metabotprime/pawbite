import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { productSlugs } from '@/data/products-detail';
import { blogPosts } from '@/data/blog-posts';
import { breedPages } from '@/data/breed-pages';
import { concernPages } from '@/data/concern-pages';
import { ingredientPages } from '@/data/ingredient-pages';
import { vsPages } from '@/data/vs-pages';

// Update only after a significant edit to these pages, never on each build.
const PRODUCT_PHOTOGRAPHY_UPDATED = '2026-09-08';
const HOME_METADATA_UPDATED = '2026-09-08';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/quiz',
    '/about',
    '/vets',
    '/science',
    '/reviews',
    '/perks',
    '/privacy',
    '/terms',
    '/shipping',
    '/returns',
    '/editorial',
    '/learn',
    '/breeds',
    '/concerns',
    '/ingredients',
    '/vs',
  ];

  // Omit unknown dates. A missing lastmod is more accurate than a deploy date.
  // Cart, personalized quiz results, dev pages and unsigned advisor profiles
  // intentionally remain outside this list.
  return [
    { url: SITE_URL, lastModified: HOME_METADATA_UPDATED },
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...['/products', '/products/daily-duo', ...productSlugs.map((s) => `/products/${s}`)].map(
      (path) => ({ url: `${SITE_URL}${path}`, lastModified: PRODUCT_PHOTOGRAPHY_UPDATED }),
    ),
    ...[
      { path: '/learn', pages: blogPosts },
      { path: '/breeds', pages: breedPages },
      { path: '/concerns', pages: concernPages },
      { path: '/ingredients', pages: ingredientPages },
      { path: '/vs', pages: vsPages },
    ].flatMap(({ path, pages }) =>
      pages.map((page) => ({
        url: `${SITE_URL}${path}/${page.slug}`,
        lastModified: page.byline.updatedDate,
      })),
    ),
  ];
}
