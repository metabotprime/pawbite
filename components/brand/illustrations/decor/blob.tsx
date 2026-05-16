import * as React from 'react';
import { cn } from '@/lib/utils';

interface BlobProps extends React.SVGProps<SVGSVGElement> {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'warmyellow' | 'terracotta' | 'mint' | 'pinky' | 'cream' | 'forest';
}

const blobPaths: Record<NonNullable<BlobProps['variant']>, string> = {
  1: 'M 50,5 Q 95,15 95,50 Q 85,90 50,95 Q 15,85 5,50 Q 10,15 50,5 Z',
  2: 'M 50,3 Q 90,20 95,50 Q 88,92 55,97 Q 12,90 5,55 Q 8,18 50,3 Z',
  3: 'M 50,8 Q 88,10 95,45 Q 90,88 52,95 Q 10,92 8,52 Q 10,12 50,8 Z',
  4: 'M 50,6 Q 92,18 93,55 Q 82,95 48,93 Q 8,88 7,48 Q 12,10 50,6 Z',
  5: 'M 48,4 Q 88,16 95,48 Q 90,92 50,94 Q 10,90 6,52 Q 10,14 48,4 Z',
  6: 'M 52,5 Q 90,22 92,52 Q 86,90 48,96 Q 14,88 6,50 Q 12,12 52,5 Z',
};

const colors: Record<NonNullable<BlobProps['color']>, string> = {
  warmyellow: '#E8B547',
  terracotta: '#C8765B',
  mint: '#B8D4C4',
  pinky: '#F4B8A8',
  cream: '#F5EFE6',
  forest: '#1F3A2E',
};

export function Blob({ variant = 1, color = 'warmyellow', className, ...props }: BlobProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d={blobPaths[variant]} fill={colors[color]} />
    </svg>
  );
}
