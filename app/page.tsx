import { HeroSection } from '@/components/sections/hero';
import { PromisesSection } from '@/components/sections/promises';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { JournalTeaser } from '@/components/sections/journal-teaser';
import { NewsletterSection } from '@/components/sections/newsletter';
import {
  BrandManifesto,
  QuizCallout,
  CalmIngredients,
  BrandSignature,
} from '@/components/sections/brand-story';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandManifesto />
      <ProductShowcase />
      <QuizCallout />
      <CalmIngredients />
      <PromisesSection />
      <JournalTeaser />
      <NewsletterSection />
      <BrandSignature />
    </>
  );
}
