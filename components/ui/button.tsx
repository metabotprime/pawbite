import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary CTA with the bouncy stacked shadow from Design 8
        primary:
          'bg-terracotta-dark text-cream rounded-full shadow-stack hover:translate-y-[2px] hover:shadow-stack-sm active:translate-y-[4px] active:shadow-none',
        // Secondary outlined CTA
        outline:
          'border-2 border-forest bg-transparent text-forest rounded-full hover:bg-forest hover:text-cream',
        // Tertiary text link with hand-drawn underline on hover
        ghost: 'bg-transparent text-terracotta underline-offset-4 hover:underline px-2',
        // Forest-on-cream variant for use on warm yellow / cream backgrounds
        forest: 'bg-forest text-cream rounded-full hover:bg-forest-deep',
        // Light variant for use on dark backgrounds
        light: 'bg-cream text-forest rounded-full hover:bg-offwhite',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { buttonVariants };
