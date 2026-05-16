import { Container } from '@/components/layout/container';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';

export function VetQuoteCard({
  name,
  credentials,
  quote,
}: {
  name: string;
  credentials: string;
  quote: string;
}) {
  return (
    <Container size="narrow">
      <div className="rounded-3xl bg-forest p-8 text-cream md:p-12">
        <Stethoscope size={36} className="mb-4 text-warmyellow" />
        <blockquote className="fraunces-soft mb-6 text-balance text-2xl italic leading-snug md:text-3xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="text-sm">
          <div className="font-semibold text-warmyellow">{name}</div>
          <div className="text-cream/70">{credentials}</div>
        </div>
      </div>
    </Container>
  );
}
