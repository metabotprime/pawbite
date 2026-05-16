import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?:
    | 'cream'
    | 'cream-2'
    | 'forest'
    | 'warmyellow'
    | 'mint'
    | 'pinky'
    | 'offwhite'
    | 'transparent';
  spacing?: 'tight' | 'default' | 'loose';
}

const backgrounds: Record<NonNullable<SectionProps['background']>, string> = {
  cream: 'bg-cream',
  'cream-2': 'bg-cream-2',
  forest: 'bg-forest text-cream',
  warmyellow: 'bg-warmyellow',
  mint: 'bg-mint',
  pinky: 'bg-pinky',
  offwhite: 'bg-offwhite',
  transparent: 'bg-transparent',
};

const spacings: Record<NonNullable<SectionProps['spacing']>, string> = {
  tight: 'py-10 md:py-14',
  default: 'py-16 md:py-24',
  loose: 'py-24 md:py-32',
};

export function Section({
  className,
  background = 'transparent',
  spacing = 'default',
  ...props
}: SectionProps) {
  return (
    <section className={cn(backgrounds[background], spacings[spacing], className)} {...props} />
  );
}
