'use client';

import * as React from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Mailbox } from '@/components/brand/illustrations/icons/mailbox';
import { Button } from '@/components/ui/button';

export function NewsletterSection() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <Section background="warmyellow" spacing="default">
      <Container size="narrow">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <Mailbox size={180} />
          </div>

          <div>
            <p className="mb-2 font-hand text-3xl text-terracotta">Stay in the loop.</p>
            <h2 className="fraunces-soft mb-4 text-3xl font-bold leading-tight text-forest md:text-4xl">
              Letters from PawBite.
            </h2>
            <p className="mb-6 text-charcoal">
              A short letter once a month: what we&apos;ve learned about dog nutrition, what
              we&apos;re testing in our lab, and the occasional photo of Theo. No spam, no sales
              pressure.
            </p>

            {submitted ? (
              <p className="rounded-full bg-forest/10 px-5 py-3 text-sm font-medium text-forest">
                Thanks — we&apos;ll save your spot.
              </p>
            ) : (
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 rounded-full border-2 border-forest/15 bg-cream px-5 py-3 text-sm text-forest placeholder:text-forest/60 focus:border-terracotta focus:outline-none"
                />
                <Button type="submit" variant="primary" size="md">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
