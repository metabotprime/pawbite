import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';

// The quiz page itself is a client component and can't export metadata,
// so this layout supplies its title, description, and self-canonical
// (otherwise it inherits the root layout's homepage canonical).
export const metadata: Metadata = {
  title: 'Dog Supplement Quiz — Find the Right Chew in 60 Seconds',
  description:
    "Answer a few questions about your dog's age, size, and needs, and we'll recommend the right PawBite chew — probiotic, hip & joint, calming, or the Daily Duo.",
  alternates: { canonical: `${SITE_URL}/quiz` },
  openGraph: {
    title: 'Find the right dog chew — 60-second quiz',
    description: "Age, size, and needs in, a vet-formulated recommendation out. It's free.",
    type: 'website',
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
