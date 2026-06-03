import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactNote?: string;
}

function paragraphs(body: string) {
  return body.split(/\n\n+/).filter((p) => p.trim().length > 0);
}

export function LegalPage({ title, lastUpdated, intro, sections, contactNote }: LegalPageProps) {
  return (
    <Section background="cream" spacing="default">
      <Container size="narrow">
        <Link
          href="/"
          className="mb-6 inline-block font-mono text-xs uppercase tracking-wider text-terracotta-dark hover:underline"
        >
          ← Home
        </Link>

        <h1 className="fraunces-soft mb-3 text-balance text-4xl font-bold text-forest md:text-5xl">
          {title}
        </h1>

        <p className="mb-8 font-mono text-xs uppercase tracking-wider text-charcoal/60">
          Last updated: {lastUpdated}
        </p>

        <p className="mb-10 text-lg leading-relaxed text-charcoal">{intro}</p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="fraunces-soft mb-3 text-2xl font-bold text-forest">{s.heading}</h2>
              <div className="space-y-4 text-base leading-relaxed text-charcoal">
                {paragraphs(s.body).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {contactNote && (
          <div className="mt-12 rounded-2xl bg-offwhite p-6 text-sm leading-relaxed text-charcoal">
            <strong className="text-forest">Questions?</strong> {contactNote}
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-forest/15 bg-warmyellow/15 p-4 text-xs italic text-charcoal/80">
          <strong className="not-italic">Pre-launch note:</strong> This policy is a starting
          template and has not yet been reviewed by counsel. Final language will be set by our
          attorneys before the site accepts orders.
        </div>
      </Container>
    </Section>
  );
}
