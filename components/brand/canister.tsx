import * as React from 'react';
import { cn } from '@/lib/utils';

interface CanisterProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  bandColor: 'warmyellow' | 'terracotta' | 'mint' | 'forest';
  countLabel?: string;
  tagline?: string;
  size?: 'sm' | 'md' | 'lg';
  sticker?: string;
  stickerColor?: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
}

const sizes: Record<
  NonNullable<CanisterProps['size']>,
  { container: string; name: string; band: string }
> = {
  sm: { container: 'w-24 h-32', name: 'text-base', band: 'h-8' },
  md: { container: 'w-40 h-56', name: 'text-xl', band: 'h-12' },
  lg: { container: 'w-56 h-80', name: 'text-3xl', band: 'h-16' },
};

const bandColors: Record<CanisterProps['bandColor'], string> = {
  warmyellow: 'bg-warmyellow',
  terracotta: 'bg-terracotta',
  mint: 'bg-mint',
  forest: 'bg-forest',
};

const stickerColors: Record<NonNullable<CanisterProps['stickerColor']>, string> = {
  warmyellow: 'bg-warmyellow text-forest',
  terracotta: 'bg-terracotta text-cream',
  mint: 'bg-mint text-forest',
  pinky: 'bg-pinky text-forest',
};

export function Canister({
  name,
  bandColor,
  countLabel = '30 SOFT CHEWS',
  tagline,
  size = 'md',
  sticker,
  stickerColor = 'pinky',
  className,
  ...props
}: CanisterProps) {
  const s = sizes[size];
  return (
    <div
      className={cn(
        'relative inline-block flex-shrink-0 overflow-hidden rounded-2xl border border-forest/10 bg-cream shadow-soft',
        s.container,
        className,
      )}
      {...props}
    >
      <div className="absolute left-0 right-0 top-0 h-3 rounded-t-2xl bg-forest/15" />
      <div className="absolute bottom-2 left-2 top-3 w-2 rounded-full bg-white/30" />
      <div className="absolute left-0 right-0 top-5 text-center">
        <span className="font-display text-xs tracking-wide text-forest">PawBite</span>
      </div>
      <div
        className={cn(
          'absolute left-0 right-0 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center',
          s.band,
          bandColors[bandColor],
        )}
      >
        <span
          className={cn(
            'fraunces-soft font-bold leading-none',
            s.name,
            bandColor === 'forest' || bandColor === 'terracotta' ? 'text-cream' : 'text-forest',
          )}
        >
          {name}
        </span>
        {tagline && (
          <span
            className={cn(
              'mt-0.5 text-[10px] italic',
              bandColor === 'forest' || bandColor === 'terracotta'
                ? 'text-cream/80'
                : 'text-forest/70',
            )}
          >
            {tagline}
          </span>
        )}
      </div>
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="font-mono text-[9px] uppercase tracking-widest text-forest/60">
          {countLabel}
        </span>
      </div>
      {sticker && (
        <div
          className={cn(
            'absolute -right-2 -top-2 rounded-full px-2 py-1 text-[10px] font-bold shadow-stack-sm',
            stickerColors[stickerColor],
          )}
          style={{ transform: 'rotate(8deg)' }}
        >
          {sticker}
        </div>
      )}
    </div>
  );
}
