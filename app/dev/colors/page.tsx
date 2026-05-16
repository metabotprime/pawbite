import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

const palette = [
  { name: 'cream', hex: '#F5EFE6', textOn: 'forest' },
  { name: 'cream-2', hex: '#EFE7D8', textOn: 'forest' },
  { name: 'offwhite', hex: '#FAFAFA', textOn: 'forest' },
  { name: 'forest', hex: '#1F3A2E', textOn: 'cream' },
  { name: 'forest-deep', hex: '#142A20', textOn: 'cream' },
  { name: 'forest-mid', hex: '#2A4538', textOn: 'cream' },
  { name: 'terracotta', hex: '#C8765B', textOn: 'cream' },
  { name: 'terracotta-dark', hex: '#B05D43', textOn: 'cream' },
  { name: 'warmyellow', hex: '#E8B547', textOn: 'forest' },
  { name: 'pinky', hex: '#F4B8A8', textOn: 'forest' },
  { name: 'mint', hex: '#B8D4C4', textOn: 'forest' },
  { name: 'charcoal', hex: '#2A2A2A', textOn: 'cream' },
  { name: 'cream-muted', hex: '#D4CFC4', textOn: 'forest' },
];

export const metadata = { title: 'Dev — Color Palette', robots: { index: false } };

export default function DevColorsPage() {
  return (
    <Section spacing="default">
      <Container>
        <h1 className="fraunces-soft mb-2 text-4xl">Brand palette</h1>
        <p className="mb-10 text-charcoal">
          Verify every color from <code>tailwind.config.ts</code> renders.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {palette.map((c) => (
            <div
              key={c.name}
              className="flex h-32 flex-col justify-between rounded-2xl p-6"
              style={{
                backgroundColor: c.hex,
                color: c.textOn === 'cream' ? '#F5EFE6' : '#1F3A2E',
              }}
            >
              <div className="font-mono text-sm">{c.name}</div>
              <div className="font-mono text-xs opacity-70">{c.hex}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
