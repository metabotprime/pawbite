import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn()', () => {
  it('merges simple class strings', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1');
  });

  it('resolves conflicting tailwind classes — later wins', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles conditional classes', () => {
    expect(cn('bg-cream', false && 'bg-terracotta', true && 'text-forest')).toBe(
      'bg-cream text-forest',
    );
  });

  it('handles arrays and objects', () => {
    expect(cn(['px-2', 'py-1'], { 'bg-cream': true, 'bg-terracotta': false })).toBe(
      'px-2 py-1 bg-cream',
    );
  });

  it('returns empty string when no args', () => {
    expect(cn()).toBe('');
  });
});
