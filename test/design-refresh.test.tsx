import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeroSection } from '@/components/sections/hero';
import { JournalTeaser } from '@/components/sections/journal-teaser';
import { NewsletterSection } from '@/components/sections/newsletter';
import { calm, dailyProbiotic, hipAndJoint } from '@/data/products';
import { blogPosts } from '@/data/blog-posts';
import { journalEntries } from '@/data/journal';
import { VET_REVIEW_LIVE } from '@/data/vets';

// Exercise behavior and pre-launch integrity rather than CSS implementation details.
describe('PawBite design refresh', () => {
  it('keeps the selected hero product, destination and price together', async () => {
    const user = userEvent.setup();
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: 'Explore Calm' })).toHaveAttribute(
      'href',
      '/products/calm',
    );
    expect(screen.getByText(`$${calm.retailPrice.toFixed(2)} one-time`)).toBeVisible();
    for (const [name, product] of [
      ['Gut health', dailyProbiotic],
      ['Joint support', hipAndJoint],
    ] as const) {
      await user.click(screen.getByRole('button', { name }));
      expect(screen.getByRole('button', { name })).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByRole('link', { name: `Explore ${product.shortName}` })).toHaveAttribute(
        'href',
        `/products/${product.slug}`,
      );
      expect(screen.getByText(`$${product.retailPrice.toFixed(2)} one-time`)).toBeVisible();
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    }
  });

  it('only features published articles and respects the vet review gate', () => {
    render(<JournalTeaser />);
    expect(journalEntries).toHaveLength(3);
    for (const entry of journalEntries)
      expect(blogPosts.some((post) => post.slug === entry.slug)).toBe(true);
    if (!VET_REVIEW_LIVE) {
      expect(screen.queryByText(/Dr\. M\. Hayes/)).not.toBeInTheDocument();
      expect(screen.getAllByText('Veterinary review pending')).toHaveLength(3);
    }
  });

  it('provides a real contact action without pretending to save a subscription', () => {
    render(<NewsletterSection />);
    expect(screen.getByRole('link', { name: 'help@pawbite.com' })).toHaveAttribute(
      'href',
      'mailto:help@pawbite.com',
    );
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.queryByText(/save your spot/i)).not.toBeInTheDocument();
  });
});
