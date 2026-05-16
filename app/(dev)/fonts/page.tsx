import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export const metadata = { title: 'Dev — Typography', robots: { index: false } };

export default function DevFontsPage() {
  return (
    <Section spacing="default">
      <Container size="narrow">
        <h1 className="fraunces-soft mb-10 text-4xl">Typography</h1>

        <Specimen
          title="Bagel Fat One — Wordmark only"
          variableHint="--font-display"
          className="font-display text-5xl text-forest"
          sample="PawBite"
        />

        <Specimen
          title="Fraunces SOFT axis — Headlines (.fraunces-soft)"
          variableHint="--font-serif"
          className="fraunces-soft text-5xl text-forest"
          sample="The good stuff your dog needs."
        />

        <Specimen
          title="Fraunces italic"
          variableHint="--font-serif"
          className="font-serif text-4xl italic text-terracotta"
          sample="Nothing weird."
        />

        <Specimen
          title="Inter — Body"
          variableHint="--font-sans"
          className="font-sans text-base leading-relaxed text-charcoal"
          sample="PawBite makes the essentials your dog actually needs — vet-formulated, transparent, and made to be the easiest part of their day."
        />

        <Specimen
          title="Caveat — Handwriting accents"
          variableHint="--font-hand"
          className="font-hand text-3xl text-terracotta"
          sample="A note from our founder —"
        />

        <Specimen
          title="JetBrains Mono — Data"
          variableHint="--font-mono"
          className="font-mono text-sm text-forest"
          sample="Bacillus coagulans GBI-30, 6086 — 1B CFU"
        />
      </Container>
    </Section>
  );
}

function Specimen({
  title,
  variableHint,
  className,
  sample,
}: {
  title: string;
  variableHint: string;
  className: string;
  sample: string;
}) {
  return (
    <div className="border-t border-forest/15 py-8">
      <div className="mb-1 font-mono text-xs uppercase tracking-wider text-forest/60">{title}</div>
      <div className="mb-3 font-mono text-[10px] text-forest/40">{variableHint}</div>
      <p className={className}>{sample}</p>
    </div>
  );
}
