'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/pdp/product-card';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import {
  recommendFromAnswers,
  generateDiscountCode,
  type QuizAnswers,
  type QuizQuestionId,
} from '@/lib/quiz';
import { products } from '@/data/products';

const validKeys: QuizQuestionId[] = ['weight', 'age', 'primary', 'secondary', 'diet'];

export default function QuizResultsPage() {
  const searchParams = useSearchParams();
  const [discountCode, setDiscountCode] = React.useState('WELCOME-PAWBITE');

  React.useEffect(() => {
    // Read email from sessionStorage — not from URL to avoid PII leakage
    const email = sessionStorage.getItem('pawbite_quiz_email') ?? '';
    if (email) {
      setDiscountCode(generateDiscountCode(email));
    }
  }, []);

  const answers: QuizAnswers = {};
  validKeys.forEach((k) => {
    const v = searchParams.get(k);
    if (v) answers[k] = v;
  });

  const result = recommendFromAnswers(answers);

  const recommendedProduct = products.find((p) => p.slug === result.primarySku) ?? products[0];
  const alsoConsider = products.filter(
    (p) => p.slug !== result.primarySku && p.slug !== 'daily-duo',
  );

  return (
    <>
      <Section background="cream" spacing="default">
        <Container size="narrow" className="text-center">
          <div className="mb-6 flex justify-center">
            <Mascot variant="happy" size={140} bodyColor="#E8B547" />
          </div>

          <CalloutPill variant="caveat" color="warmyellow" rotation={-3} className="mb-4">
            Here&apos;s the plan —
          </CalloutPill>

          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Your dog&apos;s starting point:{' '}
            <span className="italic text-terracotta">{recommendedProduct.name}</span>.
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-charcoal">
            {result.reasoning}
          </p>

          <div className="mx-auto mb-10 inline-flex items-center gap-3 rounded-full border-2 border-terracotta bg-terracotta/5 px-6 py-3">
            <Sparkle size={20} className="text-terracotta" />
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-forest/70">
                Your $5-off code
              </div>
              <div className="font-mono text-lg font-bold text-terracotta">{discountCode}</div>
            </div>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href={`/products/${recommendedProduct.slug}`}>
                Shop {recommendedProduct.shortName} →
              </Link>
            </Button>
            {result.bundleRecommended && (
              <Badge variant="warmyellow" className="hidden sm:inline-flex">
                Bundle saves 32%
              </Badge>
            )}
          </div>
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <Container>
          <h2 className="fraunces-soft mb-8 text-center text-3xl font-bold md:text-4xl">
            What&apos;s in it for{' '}
            {recommendedProduct.shortName === 'Duo' ? 'your dog' : recommendedProduct.shortName}.
          </h2>
          <div className="mx-auto max-w-md">
            <ProductCard product={recommendedProduct} blobVariant={2} featured />
          </div>
        </Container>
      </Section>

      {alsoConsider.length > 0 && (
        <Section background="cream" spacing="default">
          <Container>
            <h2 className="fraunces-soft mb-8 text-3xl font-bold">Also worth considering.</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {alsoConsider.map((p, i) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  blobVariant={(((i + 3) % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
