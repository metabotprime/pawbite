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
