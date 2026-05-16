import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { TapeAccent } from '@/components/brand/illustrations/decor/tape-accent';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';

export function HeroSection() {
  return (
    <Section background="cream" spacing="loose">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Founder polaroid */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="relative rounded-sm bg-white p-3 pb-12 shadow-soft"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <div className="absolute -top-4 left-6 z-10">
                <TapeAccent width={80} color="warmyellow" rotation={-8} />
              </div>
              <div className="absolute -top-2 right-4 z-10">
                <Squiggle width={80} className="text-terracotta" />
              </div>
              <Image
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80"
                alt="Sam and Theo"
                width={400}
                height={500}
                className="h-auto w-full"
                priority
              />
              <p className="mt-3 text-center font-sans text-sm italic text-charcoal/70">
                Sam and Theo, 2023.
              </p>
            </div>
          </div>

          {/* Right: Founder note */}
          <div className="flex flex-col gap-6">
            <p className="font-hand text-2xl text-terracotta">— A note from our founder</p>
            <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              I started PawBite because my dog Theo&apos;s gut was a wreck.
            </h1>
            <p className="max-w-prose text-lg leading-relaxed text-charcoal">
              Theo had been on three different kibbles, four different probiotics, and a rotating
              cast of vet visits. Most dog supplements I tried were either junk-food chews with
              ingredient lists I couldn&apos;t pronounce, or sterile-looking clinical brands made by
              people who&apos;d clearly never owned a sick dog. So I started PawBite to be the brand
              I wished existed when Theo needed it. Two products. Vet-formulated. Made by humans who
              actually own dogs.
            </p>
            <p className="font-hand text-2xl text-terracotta">— Sam Whitlock, founder</p>

            <p className="pt-2 text-sm font-medium text-charcoal">
              Vet-formulated. Backed by our 90-day money-back guarantee.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link href="/products">Shop our two essentials →</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/quiz">Take the quiz</Link>
              </Button>
            </div>

            <p className="text-sm text-charcoal/70">
              Vet-formulated • 90-day guarantee • Free shipping over $40
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
