import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import {
  Star,
  Sparkle,
  Heart,
  Shield,
  Paw,
  Bone,
  Stethoscope,
  Mailbox,
  Squiggle,
  DashedArrow,
  USFactoryBadge,
  Blob,
  TapeAccent,
  Mascot,
  DogAvatar,
  CalloutPill,
} from '@/components/brand/illustrations';
import { Canister } from '@/components/brand/canister';

export const metadata = { title: 'Dev — Illustration Library', robots: { index: false } };

export default function DevIllustrationsPage() {
  return (
    <Section spacing="default">
      <Container>
        <h1 className="fraunces-soft mb-2 text-4xl">Illustration library</h1>
        <p className="mb-10 text-charcoal">Every custom SVG component in one place.</p>

        <Group title="Icons" subtitle="11 components">
          <Item label="Star (clean)">
            <Star size={32} className="text-warmyellow" />
          </Item>
          <Item label="Star (hand-drawn)">
            <Star size={32} variant="hand-drawn" className="text-warmyellow" />
          </Item>
          <Item label="Sparkle">
            <Sparkle size={32} className="text-warmyellow" />
          </Item>
          <Item label="Heart">
            <Heart size={32} className="text-terracotta" />
          </Item>
          <Item label="Shield">
            <Shield size={32} className="text-forest" />
          </Item>
          <Item label="Shield w/ heart">
            <Shield size={32} withHeart className="text-terracotta" />
          </Item>
          <Item label="Paw">
            <Paw size={32} className="text-forest" />
          </Item>
          <Item label="Bone">
            <Bone size={32} className="text-terracotta" />
          </Item>
          <Item label="Stethoscope">
            <Stethoscope size={32} className="text-forest" />
          </Item>
          <Item label="Squiggle">
            <Squiggle width={120} className="text-terracotta" />
          </Item>
          <Item label="Dashed arrow">
            <DashedArrow className="text-terracotta" />
          </Item>
          <Item label="USA badge">
            <USFactoryBadge size={48} />
          </Item>
          <Item label="Mailbox">
            <Mailbox size={64} />
          </Item>
        </Group>

        <Group title="Decor" subtitle="Blobs + tape">
          {[1, 2, 3, 4, 5, 6].map((v) => (
            <Item label={`Blob ${v} — yellow`} key={`b-y-${v}`}>
              <Blob variant={v as 1 | 2 | 3 | 4 | 5 | 6} color="warmyellow" className="h-24 w-24" />
            </Item>
          ))}
          <Item label="Blob — pinky">
            <Blob variant={1} color="pinky" className="h-24 w-24" />
          </Item>
          <Item label="Blob — mint">
            <Blob variant={2} color="mint" className="h-24 w-24" />
          </Item>
          <Item label="Tape accent (yellow)">
            <TapeAccent color="warmyellow" />
          </Item>
          <Item label="Tape accent (mint)">
            <TapeAccent color="mint" rotation={6} />
          </Item>
        </Group>

        <Group title="Characters" subtitle="Mascot variants + 6 dog avatars">
          <Item label="Mascot — sitting">
            <Mascot variant="sitting" size={120} bodyColor="#E8B547" />
          </Item>
          <Item label="Mascot — peeking">
            <Mascot variant="peeking" size={120} bodyColor="#E8B547" />
          </Item>
          <Item label="Mascot — happy">
            <Mascot variant="happy" size={120} bodyColor="#F4B8A8" />
          </Item>
          <Item label="Mascot — sleepy">
            <Mascot variant="sleepy" size={120} bodyColor="#B8D4C4" />
          </Item>
          {[1, 2, 3, 4, 5, 6].map((v) => (
            <Item label={`DogAvatar ${v}`} key={`av-${v}`}>
              <DogAvatar variant={v as 1 | 2 | 3 | 4 | 5 | 6} size={80} />
            </Item>
          ))}
        </Group>

        <Group title="Callout pills" subtitle="Hand-drawn + clean">
          <Item label="Caveat — yellow">
            <CalloutPill variant="caveat" color="warmyellow">
              5 strains!
            </CalloutPill>
          </Item>
          <Item label="Caveat — pinky">
            <CalloutPill variant="caveat" color="pinky" rotation={4}>
              No fillers
            </CalloutPill>
          </Item>
          <Item label="Caveat — mint">
            <CalloutPill variant="caveat" color="mint" rotation={-6}>
              Vet-approved
            </CalloutPill>
          </Item>
          <Item label="Clean — terracotta">
            <CalloutPill variant="clean" color="terracotta">
              Most popular
            </CalloutPill>
          </Item>
        </Group>

        <Group title="Product canister" subtitle="CSS mockup for PDPs">
          <Item label="Daily Probiotic (md)">
            <Canister
              name="Daily"
              bandColor="warmyellow"
              tagline="probiotic + prebiotic"
              countLabel="30 SOFT CHEWS"
            />
          </Item>
          <Item label="Hip + Joint (md)">
            <Canister
              name="Hip+Joint"
              bandColor="terracotta"
              tagline="glucosamine + chondroitin"
              countLabel="60 SOFT CHEWS"
            />
          </Item>
          <Item label="Daily Duo (md)">
            <Canister
              name="Duo"
              bandColor="mint"
              tagline="both, every day"
              countLabel="2 PRODUCTS"
            />
          </Item>
          <Item label="With sticker">
            <Canister name="Daily" bandColor="warmyellow" sticker="VET" stickerColor="pinky" />
          </Item>
        </Group>
      </Container>
    </Section>
  );
}

function Group({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-forest/15 pb-12 pt-6">
      <h2 className="fraunces-soft mb-1 text-2xl">{title}</h2>
      {subtitle && <p className="mb-6 text-sm text-forest/60">{subtitle}</p>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">{children}</div>
    </div>
  );
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-forest/10 bg-offwhite p-4 text-center">
      <div className="flex flex-1 items-center justify-center">{children}</div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-wider text-forest/60">
        {label}
      </div>
    </div>
  );
}
