'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ShoppingBag, X } from 'lucide-react';
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
  const cartCount = 0; // Will be wired in Phase 4

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
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative p-2 text-forest transition-colors hover:text-terracotta"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-bold text-cream">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button variant="primary" size="sm" asChild className="hidden md:inline-flex">
              <Link href="/quiz">Take the quiz</Link>
            </Button>
            <button
              className="p-2 text-forest md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="flex flex-col gap-2 border-t border-forest/10 pb-4 pt-3 md:hidden">
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
