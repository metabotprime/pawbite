/** Current label copy, confirmed supplier package and October 28 user revisions. */
export const PRODUCT_DISCLAIMER =
  'This product is not intended to diagnose, treat, cure or prevent any disease.';

export const LABEL_DIRECTIONS =
  'Give daily by hand or with food. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Always provide fresh water.';
export const LABEL_CAUTIONS =
  "For animal use only. Not for human consumption. Keep out of reach of children and pets. In case of accidental overdose, contact a veterinarian immediately. Safe use in pregnant animals or animals intended for breeding has not been proven. If your dog's condition worsens or does not improve, stop use and consult your veterinarian.";
export const LABEL_STORAGE = 'Store in a cool, dry place. Replace lid tightly after use.';
export const productLabels = {
  calm: {
    name: 'Calming Chews',
    tagline: 'For dogs during busy, noisy days',
    flavor: 'Peanut Butter Flavor',
    countLabel: '80 SOFT CHEWS',
    chewWeight: '2.5 g',
    netWeight: '200 g (7.05 oz)',
    upc: '884400848925',
    activeIngredients: [
      {
        name: 'Ashwagandha Root Extract',
        amount: '75 mg',
      },
      {
        name: 'L-Theanine',
        amount: '50 mg',
      },
      {
        name: 'Chamomile Extract',
        amount: '50 mg',
      },
    ],
    inactiveIngredients:
      'Chickpea flour, oat flour, chicken liver meal, chicken meal, lecithin, powdered cellulose, vegetable glycerin, purified water, chicken fat, flaxseed oil, silicon dioxide, peanut butter, rosemary extract, mixed tocopherols.',
    allergens: 'Contains: peanut, chicken, chickpea.',
    guaranteedAnalysis: {
      'Crude Protein (min)': '11%',
      'Crude Fat (min)': '11%',
      'Crude Fiber (max)': '9%',
      'Moisture (max)': '10%',
      'Crude Ash (max)': '9%',
    },
  },
  'daily-probiotic': {
    name: 'Probiotic Chews',
    tagline: "For dogs' gut wellness",
    flavor: 'Chicken Flavor',
    countLabel: '80 SOFT CHEWS',
    chewWeight: '2.5 g',
    netWeight: '200 g (7.05 oz)',
    upc: '884400732651',
    activeIngredients: [
      {
        name: 'Bacillus coagulans',
        amount: '500 million CFU',
      },
      {
        name: 'Bifidobacterium animalis',
        amount: '500 million CFU',
      },
      {
        name: 'Lactobacillus acidophilus',
        amount: '500 million CFU',
      },
      {
        name: 'Lactobacillus plantarum',
        amount: '500 million CFU',
      },
      {
        name: 'Lactobacillus rhamnosus',
        amount: '500 million CFU',
      },
      {
        name: 'Inulin (prebiotic)',
        amount: '100 mg',
      },
      {
        name: 'Pumpkin Powder',
        amount: '125 mg',
      },
    ],
    inactiveIngredients:
      'Chickpea flour, chicken liver meal, oat flour, chicken meal, lecithin, powdered cellulose, vegetable glycerin, purified water, chicken fat, flaxseed oil, silicon dioxide, rosemary extract, mixed tocopherols.',
    allergens: 'Contains: chicken, chickpea.',
    guaranteedAnalysis: {
      'Crude Protein (min)': '10%',
      'Crude Fat (min)': '11%',
      'Crude Fiber (max)': '9%',
      'Moisture (max)': '10%',
      'Crude Ash (max)': '9%',
    },
  },
  'hip-and-joint': {
    name: 'Joint + Mobility Chews',
    tagline: "Support your dog's active lifestyle",
    flavor: 'Duck Flavor',
    countLabel: '80 SOFT CHEWS',
    chewWeight: '2.5 g',
    netWeight: '200 g (7.05 oz)',
    upc: '884400822468',
    activeIngredients: [
      {
        name: 'Glucosamine HCl',
        amount: '250 mg',
      },
      {
        name: 'Chondroitin Sulfate',
        amount: '125 mg',
      },
      {
        name: 'MSM (methylsulfonylmethane)',
        amount: '125 mg',
      },
      {
        name: 'Green-Lipped Mussel (Perna canaliculus)',
        amount: '125 mg',
      },
      {
        name: 'Turmeric Extract (Curcuma longa)',
        amount: '50 mg',
      },
    ],
    inactiveIngredients:
      'Chickpea flour, oat flour, duck meal, chicken fat, lecithin, flaxseed oil, powdered cellulose, purified water, vegetable glycerin, silicon dioxide, rosemary extract, mixed tocopherols.',
    allergens: 'Contains: shellfish (green-lipped mussel), duck, chicken, chickpea.',
    guaranteedAnalysis: {
      'Crude Protein (min)': '10%',
      'Crude Fat (min)': '11%',
      'Crude Fiber (max)': '9%',
      'Moisture (max)': '10%',
      'Crude Ash (max)': '8%',
    },
  },
} as const;
