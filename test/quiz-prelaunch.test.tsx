import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuizPage from '@/app/quiz/page';
import { QuizResultsClient } from '@/app/quiz/results/quiz-results-client';

const { push } = vi.hoisted(() => ({ push: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));

describe('pre-launch quiz', () => {
  it('lets a visitor reach results without collecting an email or advertising a fake discount', async () => {
    const user = userEvent.setup();
    render(<QuizPage />);
    for (const option of [
      /Under 25 lbs/,
      /Adult/,
      /Gut \+ stool/,
      /Skip — just one thing/,
      /Kibble/,
    ]) {
      await user.click(await screen.findByRole('button', { name: option }));
    }
    await screen.findByRole('heading', { name: 'Your starting point is ready.' });
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.queryByText(/\$5/)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /See my dog.*results/ }));
    expect(push).toHaveBeenCalledWith(
      '/quiz/results?weight=under-25&age=adult&primary=gut&secondary=none&diet=kibble',
    );
  });

  it('shows the recommendation without issuing an unredeemable coupon', () => {
    render(<QuizResultsClient answers={{ primary: 'anxiety', age: 'adult' }} />);
    expect(screen.getByRole('link', { name: /Explore Calm/ })).toHaveAttribute(
      'href',
      '/products/calm',
    );
    expect(screen.queryByText(/off code|WELCOME-PAWBITE/)).not.toBeInTheDocument();
  });
});
