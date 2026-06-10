/**
 * Backend identifiers — empty until the Stripe/Shopify wiring (see docs/INTEGRATION.md).
 * `slug` is the stable join key the frontend already uses; these fields are where the
 * backend product/variant IDs get pasted in so add-to-cart and checkout can resolve them.
 */
export type ProductCommerce = {
  shopifyVariantId?: string; // Storefront API variant (one-time purchase)
  shopifySellingPlanId?: string; // subscription selling plan (Recharge / Skio)
  stripePriceId?: string; // Stripe one-time price
  stripeSubPriceId?: string; // Stripe recurring (subscription) price
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  bandColor: 'warmyellow' | 'terracotta' | 'mint' | 'forest';
  blobColor: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
  countLabel: string;
  tagline: string;
  oneLineDescription: string;
  retailPrice: number;
  subPrice: number;
  badge?: string;
  commerce?: ProductCommerce;
};

export const products: Product[] = [
  {
    slug: 'daily-probiotic',
    name: 'Daily Probiotic',
    shortName: 'Daily',
    bandColor: 'warmyellow',
    blobColor: 'warmyellow',
    countLabel: '30 SOFT CHEWS',
    tagline: 'probiotic + prebiotic',
    oneLineDescription: '5 strains. 5 billion CFUs. The one your dog eats every day.',
    retailPrice: 32,
    subPrice: 26,
  },
  {
    slug: 'hip-and-joint',
    name: 'Hip + Joint',
    shortName: 'Hip+Joint',
    bandColor: 'terracotta',
    blobColor: 'pinky',
    countLabel: '60 SOFT CHEWS',
    tagline: 'glucosamine + chondroitin',
    oneLineDescription:
      'Glucosamine, chondroitin, MSM, green-lipped mussel, turmeric. Built to keep moving.',
    retailPrice: 38,
    subPrice: 30,
  },
  {
    slug: 'calm',
    name: 'Calming Chew',
    shortName: 'Calm',
    bandColor: 'mint',
    blobColor: 'mint',
    countLabel: '30 SOFT CHEWS',
    tagline: 'L-theanine + chamomile',
    oneLineDescription:
      'L-theanine, chamomile, ashwagandha, and a gut-brain probiotic. For fireworks, vet visits, and everyday nerves.',
    retailPrice: 34,
    subPrice: 27,
  },
  {
    slug: 'daily-duo',
    name: 'The Daily Duo',
    shortName: 'Duo',
    bandColor: 'forest',
    blobColor: 'mint',
    countLabel: '2 PRODUCTS',
    tagline: 'both, every day',
    oneLineDescription: 'Daily Probiotic + Hip + Joint. Save 32% when you bundle and subscribe.',
    retailPrice: 70,
    subPrice: 47.6,
    badge: 'Save 32%',
  },
];

export const dailyProbiotic = products[0];
export const hipAndJoint = products[1];
export const calm = products[2];
export const dailyDuo = products[3];

/** Discount rates used to derive the Daily Duo bundle math. Single source of truth. */
export const BUNDLE_DISCOUNT = 0.15;
export const SUBSCRIBE_DISCOUNT = 0.2;

/**
 * Daily Duo pricing, derived from the two single SKUs so the bundle breakdown never
 * drifts from product prices. When the backend becomes the source of truth, update the
 * single-product prices (or fetch them) and every Duo number recomputes from here.
 */
export const dailyDuoMath = (() => {
  const retailTotal = dailyProbiotic.retailPrice + hipAndJoint.retailPrice;
  const bundleDiscount = retailTotal * BUNDLE_DISCOUNT;
  const bundleOneTime = retailTotal - bundleDiscount;
  const subSavings = bundleOneTime * SUBSCRIBE_DISCOUNT;
  const subTotal = bundleOneTime - subSavings;
  return { retailTotal, bundleDiscount, bundleOneTime, subSavings, subTotal };
})();
