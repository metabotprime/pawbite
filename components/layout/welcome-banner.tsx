'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Bone } from '@/components/brand/illustrations/icons/bone';
import { cn } from '@/lib/utils';

const DISMISS_KEY = 'pawbite_welcome_dismissed';

interface WelcomeBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export function WelcomeBanner({ show = true, className, ...props }: WelcomeBannerProps) {
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY) === '1') setDismissed(true);
    } catch {
      // localStorage unavailable (private mode) — keep the banner visible
    }
  }, []);

  function dismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore write failures
    }
  }

  if (!show || dismissed) return null;

  return (
    <div
      className={cn(
        'relative w-full bg-terracotta px-10 py-2 text-center text-xs font-medium text-cream md:text-sm',
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        <Bone size={14} className="text-cream/80" />
        Welcome offer: 30% off your first order + free shipping. Code{' '}
        <span className="font-bold tracking-wider">WELCOME</span>
      </span>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss offer"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-cream/80 transition-colors hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta"
      >
        <X size={16} />
      </button>
    </div>
  );
}
