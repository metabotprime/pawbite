import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely. Later classes win conflicts.
 *
 * @example
 * cn('px-2 py-1', 'px-4') // → 'py-1 px-4'
 * cn('bg-cream', isActive && 'bg-terracotta') // conditional
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
