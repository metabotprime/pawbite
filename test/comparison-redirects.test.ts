// @vitest-environment node
import { describe, expect, it } from 'vitest';
import config from '../next.config.mjs';
import { blogPostSlugs } from '@/data/blog-posts';
import { vsPageSlugs } from '@/data/vs-pages';
import sitemap from '@/app/sitemap';
import { GET } from '@/app/llms.txt/route';

describe('comparison consolidation', () => {
  it('permanently redirects retired articles to published comparisons and removes discovery duplicates', async () => {
    if (!config.redirects) throw new Error('Comparison redirects are missing');
    const redirects = (await config.redirects()).filter((redirect) =>
      redirect.source.startsWith('/learn/'),
    );
    expect(redirects).toHaveLength(2);
    const llms = await (await GET()).text();
    const urls = sitemap().map((entry) => entry.url);
    for (const redirect of redirects) {
      const oldSlug = redirect.source.split('/').pop();
      const newSlug = redirect.destination.split('/').pop();
      expect(redirect.statusCode).toBe(301);
      expect(blogPostSlugs()).not.toContain(oldSlug);
      expect(vsPageSlugs()).toContain(newSlug);
      expect(urls.some((url) => url.endsWith(redirect.source))).toBe(false);
      expect(urls.some((url) => url.endsWith(redirect.destination))).toBe(true);
      expect(llms).not.toContain(redirect.source);
      expect(llms).toContain(redirect.destination);
    }
  });
});
