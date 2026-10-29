import { productLabels } from './product-labels';

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
  /** Studio product photo in /public. Falls back to the CSS <Canister> when absent. */
  imageSrc?: string;
  /** Intrinsic dimensions of imageSrc. Used to preserve the source photo aspect ratio. */
  imageWidth?: number;
  imageHeight?: number;
};

export const products: Product[] = [
  {
    slug: 'daily-probiotic',
    name: productLabels['daily-probiotic'].name,
    shortName: 'Probiotic',
    bandColor: 'warmyellow',
    blobColor: 'warmyellow',
    countLabel: productLabels['daily-probiotic'].countLabel,
    tagline: productLabels['daily-probiotic'].tagline,
    oneLineDescription: productLabels['daily-probiotic'].tagline,
    retailPrice: 32,
    subPrice: 26,
    imageSrc: '/products/studio/probiotic-paper-v1.webp',
    imageWidth: 1254,
    imageHeight: 1254,
  },
  {
    slug: 'hip-and-joint',
    name: productLabels['hip-and-joint'].name,
    shortName: 'Joint + Mobility',
    bandColor: 'terracotta',
    blobColor: 'pinky',
    countLabel: productLabels['hip-and-joint'].countLabel,
    tagline: productLabels['hip-and-joint'].tagline,
    oneLineDescription: productLabels['hip-and-joint'].tagline,
    retailPrice: 38,
    subPrice: 30,
    imageSrc: '/products/studio/joint-mobility-paper-v2.webp',
    imageWidth: 1254,
    imageHeight: 1254,
  },
  {
    slug: 'calm',
    name: productLabels['calm'].name,
    shortName: 'Calming',
    bandColor: 'mint',
    blobColor: 'mint',
    countLabel: productLabels['calm'].countLabel,
    tagline: productLabels['calm'].tagline,
    oneLineDescription: productLabels['calm'].tagline,
    retailPrice: 34,
    subPrice: 27,
    imageSrc: '/products/studio/calming-paper-v1.webp',
    imageWidth: 1254,
    imageHeight: 1254,
  },
  {
    slug: 'daily-duo',
    name: 'The Daily Duo',
    shortName: 'Duo',
    bandColor: 'forest',
    blobColor: 'mint',
    countLabel: '2 PRODUCTS',
    tagline: 'both, every day',
    oneLineDescription:
      'Probiotic Chews + Joint + Mobility Chews. Save 32% when you bundle and subscribe.',
    retailPrice: 70,
    subPrice: 47.6,
    badge: 'Save 32%',
    imageSrc: '/products/studio/probiotic-paper-v1.webp',
    imageWidth: 1254,
    imageHeight: 1254,
  },
];

export const dailyProbiotic = products[0];
export const hipAndJoint = products[1];
export const calm = products[2];
export const dailyDuo = products[3];

/**
 * Whether checkout is live. While false (pre-launch), CTAs read "Pre-order — coming soon"
 * and Product JSON-LD advertises schema.org/PreOrder instead of InStock. Flip to true the
 * day real checkout goes live so the buy buttons and structured data switch together.
 */
export const CHECKOUT_LIVE = false;

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
