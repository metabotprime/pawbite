'use client';

import * as React from 'react';
import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // In production, log to error tracking (Sentry, etc.) — Phase 9 wiring
    if (process.env.NODE_ENV === 'development') {
      console.error('GlobalError caught:', error);
    }
  }, [error]);

  return (
    <Section background="cream" spacing="loose">
      <Container size="narrow" className="text-center">
        <div className="mb-8 flex justify-center">
          <Mascot variant="sleepy" size={180} bodyColor="#B8D4C4" />
        </div>

        <CalloutPill variant="caveat" color="terracotta" rotation={-3} className="mb-4">
          Hmm —
        </CalloutPill>

        <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold leading-tight md:text-5xl">
          Something went wrong.
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg leading-relaxed text-charcoal">
          We hit an unexpected error loading that page. Try again, or head back to the home page. If
          this keeps happening, email help@pawbite.com and we&apos;ll look into it.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" onClick={reset}>
            Try again
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>

        {error.digest && (
          <p className="mt-12 font-mono text-xs text-charcoal/60">
            Error reference: {error.digest}
          </p>
        )}
      </Container>
    </Section>
  );
}
