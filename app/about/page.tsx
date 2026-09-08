import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { ProductVisual } from '@/components/brand/product-visual';
import { PromisesSection } from '@/components/sections/promises';
import { QuizCallout } from '@/components/sections/brand-story';
import { calm, dailyProbiotic, hipAndJoint } from '@/data/products';
import { VET_REVIEW_LIVE } from '@/data/vets';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About PawBite: Three Focused Dog Supplements',
  description:
    'Meet PawBite: a pre-launch dog supplement brand focused on gut, joint, and calming chews, ingredient transparency, and clear editorial standards.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-14 md:py-20">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em]">
            A little about PawBite
          </p>
          <h1 className="editorial-heading max-w-4xl text-5xl leading-none md:text-7xl">
            FOR THE DOG
            <br />
            <span className="font-serif normal-case italic">in your life.</span>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="text-xl leading-relaxed">
              A daily probiotic. A hip and joint chew. A calming chew. Three focused formulas, with
              ingredients and serving information you can look through before making a choice.
            </p>
            <div className="space-y-4 leading-relaxed text-charcoal">
              <p>
                PawBite is pre-launch. We’re building a brand around a simple standard: explain
                what’s in the product, be clear about the limits of the research, and help you ask
                better questions about your dog’s care.
              </p>
              <p>
                Our site brings the formulas and educational resources together. It is a place to
                explore, and a starting point for a conversation with your veterinarian.
              </p>
              <Link
                href="/products"
                className="inline-block font-bold text-forest underline underline-offset-4"
              >
                Meet the three chews
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[dailyProbiotic, hipAndJoint, calm].map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className={`rounded-2xl p-6 text-center ${['bg-warmyellow', 'bg-pinky', 'bg-mint'][i]}`}
              >
                <ProductVisual product={product} />
                <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
                <p className="mt-2 text-xs uppercase tracking-wide">{product.countLabel}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <PromisesSection />
      <section className="bg-cream py-14">
        <Container size="narrow">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest">Where we are today</p>
          <h2 className="editorial-heading mb-5 text-4xl">
            CLEAR ABOUT <span className="font-serif normal-case italic">the process.</span>
          </h2>
          <p className="mb-5 leading-relaxed text-charcoal">
            {VET_REVIEW_LIVE
              ? 'Our veterinary review is live. Visit our advisory page for the reviewer’s credentials and background.'
              : 'Veterinary advisory review is being finalized. Until a real reviewer signs off, our pages say veterinary review pending. We do not present placeholder names or credentials as a completed review.'}
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-bold underline underline-offset-4">
            <Link href="/vets">Veterinary review status</Link>
            <Link href="/editorial">Editorial policy</Link>
            <Link href="/science">Research and its limits</Link>
          </div>
        </Container>
      </section>
      <QuizCallout />
    </>
  );
}
