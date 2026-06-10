'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { dailyDuo } from '@/data/products';
import { cn } from '@/lib/utils';

interface StickyATCBarProps {
  show?: boolean;
}

export function StickyATCBar({ show = true }: StickyATCBarProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!show) return;
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="border-t-2 border-forest bg-cream shadow-[0_-8px_24px_-12px_rgba(31,58,46,0.18)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Badge variant="warmyellow" className="hidden sm:inline-flex">
              Save 32%
            </Badge>
            <div className="min-w-0">
              <div className="truncate text-xs font-semibold text-forest">The Daily Duo</div>
              <div className="text-xs text-forest/70">
                <span className="font-bold text-terracotta">${dailyDuo.subPrice.toFixed(2)}</span>
                <span className="ml-1 text-forest/60 line-through">${dailyDuo.retailPrice}</span>
                <span className="ml-1 hidden sm:inline">/ month</span>
              </div>
            </div>
          </div>
          <Button variant="primary" size="md" asChild>
            <Link href="/products/daily-duo">Add the Duo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
