import { describe, it, expect, vi, afterEach } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { SITE_URL, websiteSchema } from '@/lib/seo';
import { blogPosts } from '@/data/blog-posts';

afterEach(() => vi.useRealTimers());

describe('search discovery', () => {
  it('does not mark unchanged pages as new on a later deployment', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-09-08T12:00:00Z'));
    const first = sitemap();
    vi.setSystemTime(new Date('2027-02-01T12:00:00Z'));
    expect(sitemap()).toEqual(first);
    for (const post of blogPosts) {
      expect(
        first.find((page) => page.url === `${SITE_URL}/learn/${post.slug}`)?.lastModified,
      ).toBe(post.byline.updatedDate);
    }
  });

  it('lists only unique canonical public pages and excludes utility and retired routes', () => {
    const urls = sitemap().map((page) => page.url);
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) expect(new URL(url).origin).toBe(SITE_URL);
    for (const path of [
      '/cart',
      '/quiz/results',
      '/dev/colors',
      '/vets/m-hayes',
      '/learn/cosequin-vs-pawbite-hip-joint',
      '/learn/petlab-vs-pawbite-probiotic',
    ]) {
      expect(urls).not.toContain(`${SITE_URL}${path}`);
    }
    for (const path of [
      '/products/calm',
      '/products/hip-and-joint',
      '/products/daily-probiotic',
      '/vs/vs-cosequin',
    ]) {
      expect(urls).toContain(`${SITE_URL}${path}`);
    }
  });

  it('keeps public crawler permissions consistent and lets crawlers read cart noindex', () => {
    const rules = robots().rules;
    expect(rules).toEqual({
      userAgent: '*',
      allow: '/',
      disallow: ['/account/', '/checkout', '/api/', '/dev/'],
    });
    expect(robots().sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it('does not advertise a nonexistent search endpoint', () => {
    expect(websiteSchema()).not.toHaveProperty('potentialAction');
  });
});

it('consolidates the deployment alias onto the custom domain without redirecting that domain', async () => {
  const config = (await import('../next.config.mjs')).default;
  if (!config.redirects) throw new Error('Canonical host redirect is missing');
  const redirects = await config.redirects();
  const redirect = redirects.find((entry) =>
    entry.has?.some((rule) => rule.value === 'pawbite-zeta.vercel.app'),
  );
  expect(SITE_URL).toBe('https://www.pawbite.com');
  expect(redirect?.source).toBe('/:path*');
  expect(redirect?.destination).toBe(`${SITE_URL}/:path*`);
  expect(redirect?.permanent).toBe(true);
  expect(redirect?.has).toEqual([{ type: 'host', value: 'pawbite-zeta.vercel.app' }]);
});
