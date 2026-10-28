import type { ProductSlug } from '@/data/products-detail';

export type QuizQuestionId = 'weight' | 'age' | 'primary' | 'secondary' | 'diet';

export type QuizOption = {
  value: string;
  label: string;
  sublabel?: string;
};

export type QuizQuestion = {
  id: QuizQuestionId;
  question: string;
  helper?: string;
  options: QuizOption[];
  optional?: boolean;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'weight',
    question: 'How much does your dog weigh?',
    helper: 'A rough estimate is fine. Check the label directions for the product you choose.',
    options: [
      { value: 'under-25', label: 'Under 25 lbs', sublabel: 'Small breed' },
      { value: '25-50', label: '25–50 lbs', sublabel: 'Medium breed' },
      { value: '50-75', label: '50–75 lbs', sublabel: 'Medium-large' },
      { value: '75-plus', label: '75+ lbs', sublabel: 'Large breed' },
    ],
  },
  {
    id: 'age',
    question: 'How old is your dog?',
    options: [
      { value: 'puppy', label: 'Puppy', sublabel: 'Under 1 year' },
      { value: 'adult', label: 'Adult', sublabel: '1–7 years' },
      { value: 'senior', label: 'Senior', sublabel: '7–10 years' },
      { value: 'super-senior', label: 'Super senior', sublabel: '10+ years' },
    ],
  },
  {
    id: 'primary',
    question: 'What’s the main thing you want to improve?',
    helper: 'Pick one. We will show a product label to review.',
    options: [
      { value: 'gut', label: 'Gut + stool', sublabel: 'Loose stool, gas, sensitive stomach' },
      { value: 'joint', label: 'Hip + joint', sublabel: 'Stiffness, slow mornings, mobility' },
      { value: 'skin', label: 'Skin + coat', sublabel: 'Itching, shedding, dullness' },
      {
        value: 'anxiety',
        label: 'Anxiety + stress',
        sublabel: 'Fireworks, vet visits, separation',
      },
      { value: 'wellness', label: 'Daily wellness', sublabel: 'An everyday routine' },
    ],
  },
  {
    id: 'secondary',
    question: 'Anything else?',
    helper: 'Optional — skip if your dog is good elsewhere.',
    optional: true,
    options: [
      { value: 'gut', label: 'Gut + stool' },
      { value: 'joint', label: 'Hip + joint' },
      { value: 'skin', label: 'Skin + coat' },
      { value: 'anxiety', label: 'Anxiety + stress' },
      { value: 'wellness', label: 'Daily wellness' },
      { value: 'none', label: 'Skip — just one thing' },
    ],
  },
  {
    id: 'diet',
    question: 'What does your dog eat now?',
    options: [
      { value: 'kibble', label: 'Kibble', sublabel: 'Dry food, any brand' },
      { value: 'fresh', label: 'Fresh / raw', sublabel: 'Cooked, raw, or fresh-frozen' },
      { value: 'mixed', label: 'Mixed', sublabel: 'Combo of kibble + fresh' },
      { value: 'rx', label: 'Prescription diet', sublabel: 'Vet-prescribed therapeutic food' },
    ],
  },
];

export type QuizAnswers = Partial<Record<QuizQuestionId, string>>;

export type QuizResult = {
  primarySku: ProductSlug | 'daily-duo';
  reasoning: string;
  bundleRecommended: boolean;
};

/** Apply rules-based recommendation. v1 is simple if/else; Phase 9 may add ML personalization. */
export function recommendFromAnswers(answers: QuizAnswers): QuizResult {
  const primary = answers.primary;
  const secondary = answers.secondary;
  const age = answers.age;

  const isSenior = age === 'senior' || age === 'super-senior';
  const wantsGut = primary === 'gut' || secondary === 'gut';
  const wantsJoint = primary === 'joint' || secondary === 'joint';
  const wantsBoth = wantsGut && wantsJoint;
  const seniorPlusJoint = isSenior && (primary === 'joint' || primary === 'wellness');

  // Preserve the existing combined-interest and senior/joint bundle routing.
  if (wantsBoth || seniorPlusJoint) {
    return {
      primarySku: 'daily-duo',
      reasoning:
        "The Daily Duo combines Probiotic Chews and Joint + Mobility Chews. Probiotic Chews are for dogs' gut wellness, and Joint + Mobility Chews support your dog's active lifestyle. You save 32% by bundling and subscribing.",
      bundleRecommended: true,
    };
  }

  // Primary joint -> Joint + Mobility Chews
  if (primary === 'joint') {
    return {
      primarySku: 'hip-and-joint',
      reasoning:
        "Joint + Mobility Chews: Support your dog's active lifestyle. Each 2.5 g chew contains 250 mg of glucosamine HCl, 125 mg each of chondroitin sulfate, MSM, and green-lipped mussel, and 50 mg of turmeric extract.",
      bundleRecommended: false,
    };
  }

  // Primary anxiety -> Calming Chews
  if (primary === 'anxiety') {
    return {
      primarySku: 'calm',
      reasoning:
        'Calming Chews: For dogs during busy, noisy days. Each 2.5 g chew contains 75 mg of ashwagandha root extract, 50 mg of L-theanine, and 50 mg of chamomile extract.',
      bundleRecommended: false,
    };
  }

  // Preserve the existing gut / skin / wellness route to Probiotic Chews.
  return {
    primarySku: 'daily-probiotic',
    reasoning:
      primary === 'gut'
        ? "Probiotic Chews: For dogs' gut wellness. Each 2.5 g chew lists a minimum of 2.5 billion CFU across five named microorganisms at 500 million CFU each, plus 100 mg of inulin and 125 mg of pumpkin powder."
        : primary === 'skin'
          ? "Probiotic Chews are for dogs' gut wellness. They are not a skin-specific product. Ask your veterinarian about persistent skin or coat concerns."
          : "Probiotic Chews: For dogs' gut wellness. Each 2.5 g chew lists a minimum of 2.5 billion CFU across five named microorganisms, plus 100 mg of inulin and 125 mg of pumpkin powder.",
    bundleRecommended: false,
  };
}

/** Generate a mock $5-off code based on email. Real Klaviyo integration is Phase 9. */
export function generateDiscountCode(email: string): string {
  const hash = email
    .toLowerCase()
    .split('')
    .reduce((acc, c) => ((acc << 5) - acc + c.charCodeAt(0)) | 0, 0);
  const abs = Math.abs(hash).toString(36).toUpperCase().slice(0, 5);
  return `WELCOME-${abs}`;
}
