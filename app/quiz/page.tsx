'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { QuizProgress } from '@/components/quiz/quiz-progress';
import { QuizOption } from '@/components/quiz/quiz-option';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { quizQuestions, type QuizAnswers, type QuizQuestionId } from '@/lib/quiz';

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<QuizAnswers>({});

  const isResultsStep = step === quizQuestions.length;
  const totalSteps = quizQuestions.length + 1;
  const currentQuestion = quizQuestions[step];

  function select(id: QuizQuestionId, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function next() {
    if (step < quizQuestions.length) setStep(step + 1);
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(answers).forEach(([k, v]) => v && params.set(k, v));
    router.push(`/quiz/results?${params.toString()}`);
  }

  return (
    <Section background="cream" spacing="default">
      <Container size="narrow">
        <div className="mb-6 text-center">
          <CalloutPill variant="caveat" color="warmyellow" rotation={-3}>
            A starting point for your dog.
          </CalloutPill>
        </div>

        <QuizProgress current={step + 1} total={totalSteps} />

        <div className="rounded-3xl border border-forest/15 bg-cream p-6 md:p-10">
          {!isResultsStep && currentQuestion && (
            <>
              <h1 className="fraunces-soft mb-2 text-balance text-2xl font-bold md:text-3xl">
                {currentQuestion.question}
              </h1>
              {currentQuestion.helper && (
                <p className="mb-6 text-sm text-charcoal/70">{currentQuestion.helper}</p>
              )}

              <div className="grid gap-3">
                {currentQuestion.options.map((opt) => (
                  <QuizOption
                    key={opt.value}
                    label={opt.label}
                    sublabel={opt.sublabel}
                    selected={answers[currentQuestion.id] === opt.value}
                    onClick={() => {
                      select(currentQuestion.id, opt.value);
                      setTimeout(next, 200);
                    }}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="text-sm text-forest/60 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:opacity-30"
                >
                  ← Back
                </button>
                {currentQuestion.optional && (
                  <button
                    onClick={next}
                    className="text-sm font-semibold text-terracotta-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  >
                    Skip →
                  </button>
                )}
              </div>
            </>
          )}

          {isResultsStep && (
            <form onSubmit={submit}>
              <h1 className="fraunces-soft mb-2 text-balance text-2xl font-bold md:text-3xl">
                Your starting point is ready.
              </h1>
              <p className="mb-6 text-sm text-charcoal/70">
                See the recommendation based on your answers. No email needed. This quiz is a guide
                to our products, not a veterinary diagnosis.
              </p>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                See my dog&apos;s results →
              </Button>

              <div className="mt-4 flex items-center justify-start">
                <button
                  type="button"
                  onClick={back}
                  className="text-sm text-forest/60 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  ← Back
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
