import type { Product } from './products';
import { dailyProbiotic, hipAndJoint, calm } from './products';
import { productLabels, LABEL_DIRECTIONS, LABEL_CAUTIONS, LABEL_STORAGE } from './product-labels';

export type Ingredient = {
  name: string;
  scientificName?: string;
  amount: string;
  role: string;
  reference?: string;
  ingredientSlug?: string;
};
export type DosingRow = { weightRange: string; amount: string };
export type FAQ = { question: string; answer: string };
export type CompetitorCompare = {
  competitor: string;
  rows: Array<{ feature: string; pawbite: string; competitor: string }>;
};
export type ProductDetail = Product & {
  upc: string;
  seoTitle: string;
  seoDescription: string;
  longDescription: string;
  flavor: string;
  ingredients: Ingredient[];
  prebioticsAndExtras: string;
  benefits: Array<{
    icon: 'sparkle' | 'heart' | 'shield' | 'star' | 'paw' | 'stethoscope' | 'bone';
    title: string;
    body: string;
  }>;
  dosing: DosingRow[];
  dosingNote: string;
  vetQuote?: { name: string; credentials: string; quote: string };
  comparison: CompetitorCompare;
  faqs: FAQ[];
  inactiveIngredients: string;
  allergens: string;
  cautions: string;
  storage: string;
  guaranteedAnalysis: Record<string, string>;
};

const ingredientSlugs: Record<string, string> = {
  'Bacillus coagulans': 'bacillus-coagulans',
  'Bifidobacterium animalis': 'bifidobacterium-animalis',
  'Lactobacillus acidophilus': 'lactobacillus-acidophilus',
  'Lactobacillus plantarum': 'lactobacillus-plantarum',
  'Lactobacillus rhamnosus': 'lactobacillus-rhamnosus',
  'Pumpkin Powder': 'pumpkin-powder',
  'Glucosamine HCl': 'glucosamine-hcl',
  'Chondroitin Sulfate': 'chondroitin-sulfate',
  'MSM (methylsulfonylmethane)': 'msm',
  'Green-Lipped Mussel (Perna canaliculus)': 'green-lipped-mussel',
  'Turmeric Extract (Curcuma longa)': 'turmeric-curcumin',
  'Ashwagandha Root Extract': 'ashwagandha',
  'L-Theanine': 'l-theanine',
  'Chamomile Extract': 'chamomile',
};

function makeDetail(
  product: Product,
  slug: keyof typeof productLabels,
  comparison: CompetitorCompare,
): ProductDetail {
  const label = productLabels[slug];
  const ingredientSummary = label.activeIngredients.map((i) => `${i.name} ${i.amount}`).join('; ');
  return {
    ...product,
    upc: label.upc,
    seoTitle: `${label.name} for Dogs`,
    seoDescription: `${label.tagline}. ${label.flavor}, 80 soft chews, 2.5 g per chew. View ingredients, amounts and directions.`,
    longDescription: `${label.tagline}. ${label.flavor} soft chews for dogs. Each can contains approximately 80 chews, 2.5 g each, with a net weight of 200 g (7.05 oz). Made in China.`,
    flavor: label.flavor,
    ingredients: label.activeIngredients.map((i) => ({
      name: i.name,
      amount: i.amount,
      role: i.amount.includes('CFU') ? 'Probiotic strain' : 'Listed active ingredient',
      ingredientSlug: ingredientSlugs[i.name],
    })),
    prebioticsAndExtras:
      slug === 'daily-probiotic'
        ? 'Total guaranteed: 2.5 billion CFU per chew across 5 named strains. Inulin (prebiotic) 100 mg and pumpkin powder 125 mg per chew.'
        : 'Amounts shown are the label minimums per 2.5 g chew.',
    benefits: [
      { icon: 'paw', title: label.tagline, body: `${label.name} are soft chews for dogs.` },
      {
        icon: 'star',
        title: label.flavor,
        body: 'Give daily by hand or with food, following the label directions.',
      },
      {
        icon: 'sparkle',
        title: '80 soft chews',
        body: '2.5 g per chew. Net weight 200 g (7.05 oz).',
      },
      {
        icon: 'heart',
        title: 'Listed ingredients',
        body: 'Ingredient amounts, inactive ingredients and allergens are shown below.',
      },
    ],
    dosing: [
      { weightRange: 'Under 25 lb', amount: '2 chews per day' },
      { weightRange: '25 lb and over', amount: '3 chews per day' },
    ],
    dosingNote: LABEL_DIRECTIONS,
    inactiveIngredients: label.inactiveIngredients,
    allergens: label.allergens,
    cautions: LABEL_CAUTIONS,
    storage: LABEL_STORAGE,
    guaranteedAnalysis: label.guaranteedAnalysis,
    comparison,
    faqs: [
      {
        question: 'What is in each can?',
        answer: `Approximately 80 soft chews, 2.5 g each. Net weight 200 g (7.05 oz). ${label.flavor}.`,
      },
      {
        question: 'What are the active ingredients?',
        answer: `Minimum amounts per 2.5 g chew: ${ingredientSummary}.`,
      },
      {
        question: 'How many chews should I give?',
        answer: `Under 25 lb: 2 chews per day. 25 lb and over: 3 chews per day. ${LABEL_DIRECTIONS}`,
      },
      { question: 'What allergens are listed?', answer: label.allergens },
      { question: 'What else is in the chew?', answer: label.inactiveIngredients },
      { question: 'What precautions should I follow?', answer: LABEL_CAUTIONS },
      { question: 'How should I store the chews?', answer: LABEL_STORAGE },
      {
        question: 'What is the 90-day guarantee?',
        answer:
          'If your dog does not take to it, email help@pawbite.com within 90 days and we will refund your first order in full. Keep the chews.',
      },
    ],
  };
}

export const dailyProbioticDetail = makeDetail(dailyProbiotic, 'daily-probiotic', {
  competitor: 'PetLab Co.',
  rows: [
    {
      feature: 'CFU per chew',
      pawbite: '2.5 billion',
      competitor: '5 billion',
    },
    {
      feature: 'Number of strains',
      pawbite: '5 named strains',
      competitor: '8 (proprietary blend)',
    },
    {
      feature: 'Prebiotic included',
      pawbite: 'Inulin 100 mg per chew',
      competitor: 'Yes (amount not disclosed)',
    },
    {
      feature: 'Subscribe & Save',
      pawbite: '20% off + free shipping',
      competitor: 'Up to 40% off (claims)',
    },
    {
      feature: 'Money-back guarantee',
      pawbite: '90 days',
      competitor: '30 days',
    },
  ],
});

export const hipAndJointDetail = makeDetail(hipAndJoint, 'hip-and-joint', {
  competitor: 'Cosequin',
  rows: [
    {
      feature: 'Glucosamine HCl',
      pawbite: '250 mg per chew',
      competitor: '500 mg',
    },
    {
      feature: 'Chondroitin sulfate',
      pawbite: '125 mg per chew',
      competitor: '400 mg',
    },
    {
      feature: 'MSM included',
      pawbite: 'Yes (125 mg per chew)',
      competitor: 'No (DS version only)',
    },
    {
      feature: 'Green-lipped mussel',
      pawbite: 'Yes (125 mg per chew)',
      competitor: 'No',
    },
    {
      feature: 'Turmeric extract',
      pawbite: 'Yes (50 mg per chew)',
      competitor: 'No',
    },
    {
      feature: 'Flavor',
      pawbite: 'Duck',
      competitor: 'Chicken / beef',
    },
    {
      feature: 'Money-back guarantee',
      pawbite: '90 days',
      competitor: 'Retailer-dependent',
    },
  ],
});

export const calmDetail = makeDetail(calm, 'calm', {
  competitor: 'Zesty Paws Calming Bites',
  rows: [
    {
      feature: 'L-Theanine',
      pawbite: '50 mg per chew',
      competitor: 'Yes',
    },
    {
      feature: 'Ashwagandha Root Extract',
      pawbite: '75 mg per chew',
      competitor: 'No',
    },
    {
      feature: 'Chamomile Extract',
      pawbite: '50 mg per chew',
      competitor: 'Yes',
    },
    {
      feature: 'Flavor',
      pawbite: 'Peanut butter',
      competitor: 'Various',
    },
    {
      feature: 'Subscribe & Save',
      pawbite: '20% off + free shipping',
      competitor: 'Varies by retailer',
    },
    {
      feature: 'Money-back guarantee',
      pawbite: '90 days',
      competitor: 'Retailer-dependent',
    },
  ],
});

export const productsDetail = {
  'daily-probiotic': dailyProbioticDetail,
  'hip-and-joint': hipAndJointDetail,
  calm: calmDetail,
};
export type ProductSlug = keyof typeof productsDetail;
export const productSlugs: ProductSlug[] = Object.keys(productsDetail) as ProductSlug[];
