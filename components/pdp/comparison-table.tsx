import { Container } from '@/components/layout/container';
import type { CompetitorCompare } from '@/data/products-detail';
import { Check } from 'lucide-react';

export function ComparisonTable({ comparison }: { comparison: CompetitorCompare }) {
  return (
    <Container>
      <div className="mb-8">
        <h2 className="fraunces-soft mb-2 text-3xl font-bold md:text-4xl">
          PawBite vs. {comparison.competitor}.
        </h2>
        <p className="text-charcoal">Side by side, honestly.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest/15 bg-offwhite">
        <table className="w-full text-left">
          <thead className="border-b-2 border-forest/15 bg-cream/50">
            <tr>
              <th className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-forest/70">
                Feature
              </th>
              <th className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-terracotta">
                <Check size={14} className="mr-1 inline" />
                PawBite
              </th>
              <th className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-forest/50">
                {comparison.competitor}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, idx) => (
              <tr key={row.feature} className={idx % 2 ? 'bg-cream/30' : ''}>
                <td className="px-4 py-3 text-sm font-medium text-forest">{row.feature}</td>
                <td className="px-4 py-3 text-sm font-semibold text-terracotta">{row.pawbite}</td>
                <td className="px-4 py-3 text-sm text-charcoal/70">{row.competitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
