import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/hero';

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

const advance = () =>
  act(() => {
    vi.advanceTimersByTime(5000);
  });

describe('homepage product rotation', () => {
  it('cycles all three headlines with their matching photo, price and destination, then loops', () => {
    render(<HeroSection />);
    for (const [headline, slug, price, photo] of [
      ['CALMING', 'calm', '34.00', 'calming-tin-label'],
      ['HIP & JOINT', 'hip-and-joint', '38.00', 'joint-tin-label'],
      ['GUT HEALTH', 'daily-probiotic', '32.00', 'probiotic-tin-label'],
      ['CALMING', 'calm', '34.00', 'calming-tin-label'],
    ]) {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headline);
      expect(screen.getByRole('link', { name: /Explore/ })).toHaveAttribute(
        'href',
        `/products/${slug}`,
      );
      expect(screen.getByText(`$${price} one-time`)).toBeVisible();
      expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining(photo));
      advance();
    }
  });

  it('can pause and resume, and holds the slide while a visitor focuses its link', () => {
    render(<HeroSection />);
    fireEvent.click(screen.getByRole('button', { name: 'Pause product rotation' }));
    advance();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('CALMING');
    fireEvent.click(screen.getByRole('button', { name: 'Resume product rotation' }));
    advance();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('HIP & JOINT');
    const link = screen.getByRole('link', { name: /Explore/ });
    fireEvent.focus(link);
    advance();
    expect(link).toHaveAttribute('href', '/products/hip-and-joint');
    fireEvent.blur(link, { relatedTarget: null });
    advance();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('GUT HEALTH');
  });

  it('starts paused for reduced motion and still allows manual product selection', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    } as unknown as MediaQueryList);
    render(<HeroSection />);
    advance();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('CALMING');
    expect(screen.getByRole('button', { name: 'Resume product rotation' })).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Gut health' }));
    advance();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('GUT HEALTH');
  });
});
