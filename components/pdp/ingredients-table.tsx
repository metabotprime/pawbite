import { Container } from '@/components/layout/container';
import type { Ingredient } from '@/data/products-detail';

export function IngredientsTable({
  ingredients,
  prebioticsAndExtras,
}: {
  ingredients: Ingredient[];
  prebioticsAndExtras: string;
}) {
  return (
    <Container>
      <div className="mb-8">
        <h2 className="fraunces-soft mb-2 text-3xl font-bold md:text-4xl">
          What&apos;s in every chew.
        </h2>
        <p className="text-charcoal">Every active ingredient, with its dose and what it does.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest/15 bg-offwhite">
        <table className="w-full text-left">
          <thead className="border-b border-forest/15 bg-cream/50">
            <tr>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70">
                Ingredient
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70">
                Amount
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70">
                Role
              </th>
              <th className="hidden px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70 md:table-cell">
                Reference
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((i, idx) => (
              <tr key={i.name} className={idx % 2 ? 'bg-cream/30' : ''}>
                <td className="px-4 py-3 font-mono text-sm text-forest">{i.name}</td>
                <td className="px-4 py-3 font-mono text-sm font-bold text-terracotta-dark">
                  {i.amount}
                </td>
                <td className="px-4 py-3 text-sm text-charcoal">{i.role}</td>
                <td className="hidden px-4 py-3 font-mono text-xs italic text-forest/60 md:table-cell">
                  {i.reference ?? '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm italic text-charcoal/80">{prebioticsAndExtras}</p>
    </Container>
  );
}
