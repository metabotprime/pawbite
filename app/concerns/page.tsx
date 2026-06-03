import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { concernPages } from '@/data/concern-pages';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Common dog health concerns',
  description:
    'Signs, causes, and what helps for the 10 most common dog health concerns we get asked about. Every page reviewed by a licensed veterinarian.',
  alternates: { canonical: `${SITE_URL}/concerns` },
};

export default function ConcernsHub() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">By concern —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            What&apos;s your dog dealing with?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            Real answers for the things owners actually search for. Every page is signed off by Dr.
            M. Hayes, DVM and includes a clear &quot;when to see your vet&quot; line.
          </p>
        </div>

        {concernPages.length === 0 ? (
          <p className="text-center text-charcoal/60">Concern guides coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {concernPages.map((c) => (
              <Link
                key={c.slug}
                href={`/concerns/${c.slug}`}
                className="group block rounded-2xl border border-forest/15 bg-offwhite p-6 transition-transform hover:-translate-y-1"
              >
                <h2 className="fraunces-soft mb-3 text-xl font-bold text-forest group-hover:text-terracotta">
                  {c.concernName}
                </h2>
                <p className="mb-4 line-clamp-3 text-sm text-charcoal">{c.tldr}</p>
                <span className="text-xs font-semibold text-terracotta-dark">Read the guide →</span>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
