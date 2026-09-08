import { socialMetadata } from '@/lib/social';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import { blogPostBySlug, blogPostSlugs } from '@/data/blog-posts';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return blogPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.tldr,
    alternates: { canonical: `${SITE_URL}/learn/${post.slug}` },
    ...socialMetadata({
      title: post.title,
      description: post.tldr,
      type: 'article',
      url: `${SITE_URL}/learn/${post.slug}`,
    }),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.tldr,
              byline: post.byline,
              url: `${SITE_URL}/learn/${post.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(post.faqs)),
        }}
      />
      <ContentPage
        category={post.category}
        hubLink={{ href: '/learn', label: 'All articles' }}
        title={post.title}
        tldr={post.tldr}
        byline={post.byline}
        sections={post.sections}
        dataTable={post.dataTable}
        sources={post.sources}
        faqs={post.faqs}
        recommendsProduct={post.recommendsProduct}
        recommendsContext={post.recommendsContext}
      />
    </>
  );
}
