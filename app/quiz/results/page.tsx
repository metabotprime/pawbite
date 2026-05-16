import type { Metadata } from 'next';
import { QuizResultsClient } from './quiz-results-client';
import type { QuizAnswers, QuizQuestionId } from '@/lib/quiz';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Your dog’s plan',
  description: 'Personalized PawBite recommendation based on your quiz answers.',
  alternates: { canonical: `${SITE_URL}/quiz/results` },
  robots: { index: false, follow: false },
};

const validKeys: QuizQuestionId[] = ['weight', 'age', 'primary', 'secondary', 'diet'];

export default function QuizResultsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const answers: QuizAnswers = {};
  validKeys.forEach((k) => {
    const v = searchParams[k];
    if (typeof v === 'string') answers[k] = v;
  });

  return <QuizResultsClient answers={answers} />;
}
