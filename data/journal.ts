import { blogPosts } from './blog-posts';

export type JournalEntry = {
  slug: string;
  category: string;
  title: string;
  readMin: number;
  reviewedBy: string;
  illustration: 'bowl' | 'bone' | 'clock';
};

const featured = [
  { slug: 'signs-your-dog-needs-a-probiotic', illustration: 'bowl' },
  { slug: 'signs-of-joint-pain-in-dogs', illustration: 'bone' },
  { slug: 'is-my-dogs-poop-normal-color-chart', illustration: 'clock' },
] as const;

// Resolve cards from published content so titles, slugs, and reading times stay in sync.
export const journalEntries: JournalEntry[] = featured.flatMap(({ slug, illustration }) => {
  const post = blogPosts.find((entry) => entry.slug === slug);
  return post
    ? [
        {
          slug: post.slug,
          category: post.category,
          title: post.title,
          readMin: post.readMin,
          reviewedBy: post.byline.reviewedBy ?? '',
          illustration,
        },
      ]
    : [];
});
