import * as React from 'react';
import { cn } from '@/lib/utils';

interface TapeAccentProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  rotation?: number;
  color?: 'warmyellow' | 'mint' | 'pinky';
}

const colors = {
  warmyellow: '#E8B547',
  mint: '#B8D4C4',
  pinky: '#F4B8A8',
};

export function TapeAccent({
  width = 80,
  rotation = -8,
  color = 'warmyellow',
  className,
  ...props
}: TapeAccentProps) {
  return (
    <svg
      width={width}
      height={width / 3}
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      style={{ transform: `rotate(${rotation}deg)` }}
      {...props}
    >
      <rect x="2" y="6" width="76" height="16" fill={colors[color]} fillOpacity="0.85" />
      <line x1="8" y1="10" x2="8" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="20" y1="10" x2="20" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="32" y1="10" x2="32" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="44" y1="10" x2="44" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="56" y1="10" x2="56" y2="18" stroke="rgba(255,255,255,0.4)" />
      <line x1="68" y1="10" x2="68" y2="18" stroke="rgba(255,255,255,0.4)" />
    </svg>
  );
}
