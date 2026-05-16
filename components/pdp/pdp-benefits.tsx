import { Container } from '@/components/layout/container';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Paw } from '@/components/brand/illustrations/icons/paw';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Bone } from '@/components/brand/illustrations/icons/bone';
import type { ProductDetail } from '@/data/products-detail';

const iconMap = {
  sparkle: Sparkle,
  heart: Heart,
  shield: Shield,
  star: Star,
  paw: Paw,
  stethoscope: Stethoscope,
  bone: Bone,
} as const;

export function PdpBenefits({ benefits }: { benefits: ProductDetail['benefits'] }) {
  return (
    <Container>
      <h2 className="fraunces-soft mb-8 text-balance text-3xl font-bold md:text-4xl">
        Why dogs do better.
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = iconMap[b.icon];
          return (
            <div key={b.title} className="rounded-2xl border border-forest/15 bg-offwhite p-6">
              <Icon size={32} className="mb-3 text-terracotta" />
              <h3 className="fraunces-soft mb-2 text-lg font-bold text-forest">{b.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal">{b.body}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
