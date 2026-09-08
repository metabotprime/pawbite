import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { VET_REVIEW_LIVE } from '@/data/vets';

const promises = [
  {
    title: 'No mystery formulas.',
    body: 'See the named ingredients and listed amounts before you choose a chew.',
    href: '/ingredients',
    label: 'Read the ingredient glossary',
  },
  {
    title: 'No borrowed certainty.',
    body: 'A study on an ingredient is not a trial of our finished product. The distinction belongs in the conversation.',
    href: '/science',
    label: 'Explore the research',
  },
  {
    title: 'No invented experts.',
    body: VET_REVIEW_LIVE
      ? 'Our veterinary review is live. See the reviewer’s credentials and background on our advisory page.'
      : 'Our veterinary review is being finalized. We label its status, and won’t present a placeholder as a signed review.',
    href: '/vets',
    label: 'See our review status',
  },
  {
    title: 'No pressure to pick everything.',
    body: 'Start with your dog’s needs. Read the formula, check the serving guidance, and ask your vet when you’re unsure.',
    href: '/quiz',
    label: 'Find a starting point',
  },
];

export function PromisesSection() {
  return (
    <section className="bg-offwhite py-14 md:py-20">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <h2 className="editorial-heading text-4xl md:text-5xl">
            WHAT WE
            <br />
            <span className="font-serif normal-case italic">won’t do.</span>
          </h2>
          <Link href="/editorial" className="text-sm font-bold underline underline-offset-4">
            Read our editorial policy
          </Link>
        </div>
        <div className="grid gap-x-10 md:grid-cols-2">
          {promises.map((promise, i) => (
            <div key={promise.title} className="border-t border-forest/20 py-7">
              <span className="mb-4 block font-mono text-xs">0{i + 1}</span>
              <h3 className="mb-3 text-2xl font-bold">{promise.title}</h3>
              <p className="mb-4 max-w-lg text-sm leading-relaxed text-charcoal">{promise.body}</p>
              <Link
                href={promise.href}
                className="inline-flex items-center gap-3 text-sm font-semibold underline underline-offset-4"
              >
                {promise.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
