'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';

const navLinks = [
  { href: '/products', label: 'Shop' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Cart icon hidden until Phase 8 (Shopify wiring) ships functional cart

  // Mobile menu keyboard + scroll management: Esc closes, body scroll locks while open.
  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <Mascot
              variant="peeking"
              size={36}
              bodyColor="#E8B547"
              className="group-hover:animate-wiggle"
            />
            <span className="font-display text-2xl leading-none text-forest">PawBite</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest transition-colors hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" asChild className="hidden md:inline-flex">
              <Link href="/quiz">Take the quiz</Link>
            </Button>
            <button
              className="rounded-md p-2 text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            className="flex flex-col gap-2 border-t border-forest/10 pb-4 pt-3 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-forest"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild className="mt-2 w-full">
              <Link href="/quiz" onClick={() => setMobileOpen(false)}>
                Take the quiz
              </Link>
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
