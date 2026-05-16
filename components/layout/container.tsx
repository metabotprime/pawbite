import * as React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide';
}

export function Container({ className, size = 'default', ...props }: ContainerProps) {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  };
  return <div className={cn('mx-auto w-full px-6 md:px-8', sizes[size], className)} {...props} />;
}
