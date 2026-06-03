import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { Button } from '@/components/ui/button';

const linkColumns = [
  {
    title: 'Shop',
    links: [
      { href: '/products/daily-probiotic', label: 'Daily Probiotic' },
      { href: '/products/hip-and-joint', label: 'Hip + Joint' },
      { href: '/products/calm', label: 'Calming Chew' },
      { href: '/products/daily-duo', label: 'The Daily Duo' },
      { href: '/quiz', label: 'Take the quiz' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { href: '/learn', label: 'Articles' },
      { href: '/concerns', label: 'Concerns' },
      { href: '/breeds', label: 'By breed' },
      { href: '/ingredients', label: 'Ingredients' },
      { href: '/science', label: 'The science' },
    ],
  },
  {
    title: 'Help',
    links: [
      { href: '/shipping', label: 'Shipping' },
      { href: '/returns', label: 'Returns' },
      { href: '/perks', label: 'Subscriber perks' },
      { href: 'mailto:help@pawbite.com', label: 'Contact us' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/about', label: 'About PawBite' },
      { href: '/vets', label: 'Our vets' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/perks', label: 'Subscriber perks' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest pb-10 pt-32 text-cream">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Mascot variant="peeking" size={120} bodyColor="#E8B547" />
      </div>

      <Container>
        <div className="mb-16 text-center">
          <p className="mb-2 font-hand text-3xl text-warmyellow">Subscribe & save 20%.</p>
          <p className="mx-auto max-w-md text-sm text-cream/80">
            Plus free shipping on every order. Skip, swap, or cancel in one click — no calls, no
            fees.
          </p>
          <Button variant="light" size="md" className="mt-6" asChild>
            <Link href="/products">Browse the line</Link>
          </Button>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 font-display text-lg text-warmyellow">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-warmyellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 md:flex-row md:items-center">
          <div>
            <div className="mb-1 font-display text-2xl text-cream">PawBite</div>
            <p className="font-hand text-lg leading-tight text-warmyellow">
              Made by humans in Hudson Valley, NY.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-cream/60 md:items-end">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-cream">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-cream">
                Terms
              </Link>
              <Link href="/editorial" className="hover:text-cream">
                Editorial policy
              </Link>
            </div>
            <p>© {new Date().getFullYear()} PawBite. Vet-formulated. Dog-approved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
