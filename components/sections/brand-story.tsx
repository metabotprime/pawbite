import Link from 'next/link';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Wordmark } from '@/components/brand/wordmark';
import { calmDetail } from '@/data/products-detail';
import { VET_REVIEW_LIVE } from '@/data/vets';

export function BrandManifesto() {
  return (
    <section className="overflow-hidden bg-forest py-14 text-cream md:py-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream/25 pb-5 text-xs font-bold uppercase tracking-[0.18em]">
          <span>The PawBite standard / 001</span>
          <span>Gut. Joints. Calm.</span>
        </div>
        <div className="grid items-center gap-10 py-10 md:grid-cols-[1.5fr_1fr]">
          <h2 className="editorial-heading text-5xl leading-none text-cream sm:text-6xl md:text-7xl">
            GOOD STUFF.
            <br />
            <span className="font-serif normal-case italic text-warmyellow">Nothing weird.</span>
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-cream/85">
            <Asterisk size={48} className="text-warmyellow" strokeWidth={1.5} aria-hidden="true" />
            <p>
              Three focused formulas. Ingredient amounts you can read. Research you can look into.
              Because choosing something for your dog should feel considered.
            </p>
            <Link
              href="/editorial"
              className="inline-flex items-center gap-3 font-semibold text-cream underline underline-offset-4"
            >
              Our editorial standards <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 border-t border-cream/25 pt-6 text-sm sm:grid-cols-3">
          <p>
            <span className="mr-3 text-warmyellow">01</span>Named ingredients
          </p>
          <p>
            <span className="mr-3 text-warmyellow">02</span>90-day money-back guarantee
          </p>
          <p>
            <span className="mr-3 text-warmyellow">03</span>
            {VET_REVIEW_LIVE ? 'Veterinary-reviewed content' : 'Veterinary review pending'}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function QuizCallout() {
  return (
    <section className="bg-pinky py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">
              A good place to start
            </p>
            <h2 className="editorial-heading text-4xl leading-none md:text-6xl">
              YOUR DOG.
              <br />
              <span className="font-serif normal-case italic">Their own routine.</span>
            </h2>
          </div>
          <div>
            <p className="mb-6 leading-relaxed text-charcoal">
              Tell us a little about your dog. Explore a starting point for their routine, then
              check the ingredients and discuss any health concerns with your vet.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-5 rounded-full bg-forest px-7 py-4 font-semibold text-cream hover:bg-forest-deep"
            >
              Take the quiz <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CalmIngredients() {
  return (
    <section className="bg-mint py-14 md:py-20">
      <Container>
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]">
              Inside the calming chew
            </p>
            <h2 className="editorial-heading text-4xl leading-tight md:text-5xl">
              SMALL CHEW.
              <br />
              <span className="font-serif normal-case italic">Open ingredient list.</span>
            </h2>
          </div>
          <div className="self-end">
            <p className="mb-4 leading-relaxed text-charcoal">
              No CBD, melatonin, or sedatives in the formula. Ingredient research is a starting
              point, not proof that the finished chew will treat anxiety. For persistent distress,
              start with your veterinarian.
            </p>
            <Link href="/products/calm" className="font-bold underline underline-offset-4">
              Explore Calm and its full formula
            </Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {calmDetail.ingredients.map((ingredient, i) => (
            <Link
              key={ingredient.name}
              href={
                ingredient.ingredientSlug
                  ? `/ingredients/${ingredient.ingredientSlug}`
                  : '/products/calm'
              }
              className="group flex flex-col rounded-2xl border border-forest/20 bg-cream/70 p-6 transition-colors hover:bg-cream"
            >
              <span className="mb-8 flex justify-between font-mono text-xs">
                0{i + 1}
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-lg font-bold">{ingredient.name}</h3>
              <p className="mt-auto text-sm text-charcoal">{ingredient.amount} per chew</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BrandSignature() {
  return (
    <div className="overflow-hidden bg-cream px-6 py-12 text-forest md:px-16 md:py-20">
      <Wordmark className="mx-auto w-full max-w-5xl" />
      <p className="mt-7 text-center text-xs font-bold uppercase tracking-[0.2em]">
        For the dog in your life.
      </p>
    </div>
  );
}
