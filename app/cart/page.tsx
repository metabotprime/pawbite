import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { ProductCard } from '@/components/pdp/product-card';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Your cart',
  description: 'Your PawBite cart.',
  alternates: { canonical: `${SITE_URL}/cart` },
  robots: { index: false },
};

export default function CartPage() {
  return (
    <>
      <Section background="cream" spacing="default">
        <Container size="narrow" className="text-center">
          <div className="mb-8 flex justify-center">
            <Mascot variant="sleepy" size={180} bodyColor="#B8D4C4" />
          </div>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Your cart is empty.
          </h1>
          <p className="mx-auto mb-8 max-w-md text-lg text-charcoal">
            Theo is taking a nap until you add something. Browse the line or take the 30-second quiz
            to find what your dog actually needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href="/products">Shop the line</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/quiz">Take the quiz</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <Container>
          <h2 className="fraunces-soft mb-8 text-center text-3xl font-bold">Most-loved picks.</h2>
          <div className="grid items-end gap-8 md:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                blobVariant={(i + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                featured={p.slug === 'daily-duo'}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
