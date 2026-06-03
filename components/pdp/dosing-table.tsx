import { Container } from '@/components/layout/container';
import type { DosingRow } from '@/data/products-detail';

export function DosingTable({ dosing, note }: { dosing: DosingRow[]; note: string }) {
  return (
    <Container size="narrow">
      <div className="mb-6">
        <h2 className="fraunces-soft mb-2 text-3xl font-bold md:text-4xl">How to use.</h2>
        <p className="text-charcoal">Based on your dog&apos;s weight.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {dosing.map((row) => (
          <div
            key={row.weightRange}
            className="rounded-2xl border border-forest/15 bg-offwhite p-4 text-center"
          >
            <div className="mb-2 font-mono text-xs uppercase tracking-wider text-terracotta-dark">
              {row.weightRange}
            </div>
            <div className="fraunces-soft text-2xl font-bold text-forest">{row.amount}</div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm italic text-charcoal/80">{note}</p>
    </Container>
  );
}
