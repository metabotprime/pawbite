import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Dog Health Articles — Gut, Joint & Calming Supplement Guides',
  description:
    "Plain-English guides on dog probiotics, joint supplements, and calming chews — every claim cites a peer-reviewed study. We don't pad word counts.",
  alternates: { canonical: `${SITE_URL}/learn` },
};

export default function LearnHub() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">From the journal —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            What we&apos;ve learned about dog nutrition.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            Real answers to the questions dog parents actually search for. Every claim cites a
            peer-reviewed study, and every article is updated when the science updates.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <p className="text-center text-charcoal/60">Articles coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/learn/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-forest/15 bg-offwhite p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="soft">{post.category}</Badge>
                  <span className="text-xs text-charcoal/60">{post.readMin} min read</span>
                </div>
                <h2 className="fraunces-soft mb-3 text-xl font-bold leading-tight text-forest group-hover:text-terracotta">
                  {post.title}
                </h2>
                <p className="line-clamp-3 text-sm text-charcoal">{post.tldr}</p>
                <p className="mt-4 text-xs text-charcoal/60">
                  Updated{' '}
                  {new Date(post.byline.updatedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
