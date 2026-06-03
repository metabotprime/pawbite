import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { DogChewScene } from '@/components/brand/illustrations/scenes/dog-chew-scene';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';

const goesIn = [
  'Named, clinically-studied ingredients',
  'Doses that match the research',
  'Third-party tested, every single batch',
  'Made in a cGMP-certified facility in the USA',
];

const staysOut = [
  'No fillers or maltodextrin',
  'No artificial colors or flavors',
  "No mystery 'flavoring agents'",
  'No corn, soy, or wheat',
];

export function LoveSection() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            Made with weird amounts of love.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            We sweat the ingredient list so you don&apos;t have to. Here&apos;s what goes into every
            chew — and what stays out.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border-2 border-forest/15 bg-offwhite p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left: illustrated scene with callouts */}
            <div className="relative">
              <div className="flex justify-center">
                <DogChewScene size={360} />
              </div>

              <div className="pointer-events-none absolute -left-2 top-2 hidden md:block">
                <CalloutPill variant="caveat" color="warmyellow" rotation={-8}>
                  5 strains!
                </CalloutPill>
              </div>
              <div className="pointer-events-none absolute -right-2 top-6 hidden md:block">
                <CalloutPill variant="caveat" color="pinky" rotation={6}>
                  Vet-approved
                </CalloutPill>
              </div>
              <div className="pointer-events-none absolute bottom-2 left-6 hidden md:block">
                <CalloutPill variant="caveat" color="mint" rotation={-4}>
                  Tail-wag tested
                </CalloutPill>
              </div>

              {/* Mobile callouts */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:hidden">
                <CalloutPill variant="caveat" color="warmyellow">
                  5 strains!
                </CalloutPill>
                <CalloutPill variant="caveat" color="pinky" rotation={4}>
                  Vet-approved
                </CalloutPill>
                <CalloutPill variant="caveat" color="mint" rotation={-3}>
                  Tail-wag tested
                </CalloutPill>
              </div>
            </div>

            {/* Right: what goes in / what stays out */}
            <div className="space-y-6">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Sparkle size={20} className="text-warmyellow" />
                  <h3 className="fraunces-soft text-xl font-bold text-forest">What goes in</h3>
                </div>
                <ul className="space-y-2.5">
                  {goesIn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-forest"
                      >
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-forest/10" />

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="fraunces-soft text-xl font-bold text-forest">What stays out</h3>
                </div>
                <ul className="space-y-2.5">
                  {staysOut.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-xs font-bold text-terracotta-dark"
                      >
                        ✕
                      </span>
                      <span className="text-sm leading-relaxed text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
