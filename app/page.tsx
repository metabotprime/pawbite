import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';

export default function HomePage() {
  return (
    <>
      <Section background="cream" spacing="loose">
        <Container size="narrow" className="text-center">
          <CalloutPill variant="caveat" color="warmyellow" rotation={-4} className="mb-6">
            coming soon —
          </CalloutPill>
          <h1 className="fraunces-soft mb-6 text-5xl font-bold leading-tight md:text-7xl">
            The good stuff your dog needs.
            <br />
            <span className="italic text-terracotta">Nothing weird.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-charcoal">
            PawBite is a new line of vet-formulated dog supplements. Two products. Both daily. Real
            ingredients, no fluff. The site is in active development — come back soon, or drop your
            email and we&apos;ll tell you when we ship.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg">
              Notify me at launch
            </Button>
            <Button variant="outline" size="lg">
              See the design directions
            </Button>
          </div>
          <div className="mt-16 flex justify-center">
            <Mascot variant="sitting" size={240} bodyColor="#E8B547" />
          </div>
        </Container>
      </Section>

      <Section background="forest" spacing="default" className="text-center">
        <Container size="narrow">
          <p className="mb-2 font-hand text-3xl text-warmyellow">A note from our founder —</p>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-cream/90 md:text-xl">
            I started PawBite because my dog Theo&apos;s gut was a wreck. Most dog supplements are
            made by people who&apos;ve never owned a sick dog. We&apos;re building the brand we
            wished existed.
          </p>
          <p className="mt-4 font-hand text-2xl text-warmyellow">— Sam Whitlock, founder</p>
        </Container>
      </Section>
    </>
  );
}
