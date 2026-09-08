import { Container } from '@/components/layout/container';
import { ArrowUpRight } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="bg-warmyellow py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-7 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em]">Hello from PawBite</p>
            <h2 className="editorial-heading mb-4 text-4xl md:text-5xl">
              LET’S TALK <span className="font-serif normal-case italic">dog.</span>
            </h2>
            <p className="max-w-xl leading-relaxed text-charcoal">
              Have a question about the line or our launch? Email the team. Online ordering and
              newsletter signup are coming soon.
            </p>
          </div>
          <a
            href="mailto:help@pawbite.com"
            className="inline-flex items-center justify-center gap-5 rounded-full border-2 border-forest px-6 py-4 font-semibold transition-colors hover:bg-forest hover:text-cream"
          >
            help@pawbite.com <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
