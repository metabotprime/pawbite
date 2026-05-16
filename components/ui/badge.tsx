import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
  {
    variants: {
      variant: {
        terracotta: 'bg-terracotta text-cream',
        warmyellow: 'bg-warmyellow text-forest',
        mint: 'bg-mint text-forest',
        pinky: 'bg-pinky text-forest',
        forest: 'bg-forest text-cream',
        outline: 'border border-forest text-forest bg-transparent',
        soft: 'bg-forest/10 text-forest',
      },
    },
    defaultVariants: {
      variant: 'soft',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
