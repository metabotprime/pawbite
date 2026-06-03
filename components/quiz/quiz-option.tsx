'use client';

import { cn } from '@/lib/utils';

interface QuizOptionProps {
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
}

export function QuizOption({ label, sublabel, selected, onClick }: QuizOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full flex-col items-start gap-1 rounded-2xl border-2 p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2',
        selected
          ? 'border-terracotta bg-terracotta/5 shadow-stack-sm'
          : 'border-forest/15 bg-offwhite hover:border-forest/40',
      )}
    >
      <span className="fraunces-soft text-lg font-bold text-forest">{label}</span>
      {sublabel && <span className="text-sm text-charcoal/70">{sublabel}</span>}
    </button>
  );
}
