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
    helper: 'A rough estimate is fine — we use this to dial dosing.',
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
    helper: 'Pick one — we’ll recommend a SKU that targets it.',
    options: [
      { value: 'gut', label: 'Gut + stool', sublabel: 'Loose stool, gas, sensitive stomach' },
      { value: 'joint', label: 'Hip + joint', sublabel: 'Stiffness, slow mornings, mobility' },
      { value: 'skin', label: 'Skin + coat', sublabel: 'Itching, shedding, dullness' },
      {
        value: 'anxiety',
        label: 'Anxiety + stress',
        sublabel: 'Fireworks, vet visits, separation',
      },
      { value: 'wellness', label: 'Daily wellness', sublabel: 'General support, prevention' },
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

  // Senior dogs benefit from both — recommend the Duo
  if (wantsBoth || seniorPlusJoint) {
    return {
      primarySku: 'daily-duo',
      reasoning:
        'Both gut health and joint mobility tend to need attention together — especially in adult and senior dogs. The Daily Duo covers both daily, and you save 32% by bundling and subscribing.',
      bundleRecommended: true,
    };
  }

  // Primary joint → Hip + Joint
  if (primary === 'joint') {
    return {
      primarySku: 'hip-and-joint',
      reasoning:
        'Hip + Joint is clinically dosed glucosamine (500 mg), chondroitin (400 mg), MSM, green-lipped mussel, and turmeric — built to ease stiffness and protect cartilage. Most dogs notice easier mornings within 14–21 days.',
      bundleRecommended: false,
    };
  }

  // Primary anxiety → Calm
  if (primary === 'anxiety') {
    return {
      primarySku: 'calm',
      reasoning:
        'Calm pairs L-theanine, ashwagandha, and chamomile for relaxed focus without sedation — plus a gut-brain probiotic, since anxious dogs are very often gut-unsettled dogs. Give a chew 30 minutes before a known stressor, or one daily for everyday nerves.',
      bundleRecommended: false,
    };
  }

  // Gut / skin / wellness → Daily Probiotic (the gut-first thesis)
  return {
    primarySku: 'daily-probiotic',
    reasoning:
      primary === 'gut'
        ? 'Daily Probiotic is 5 strains, 5 billion CFUs — including the strains most-studied for firming stool, reducing gas, and supporting digestion. Most dogs see improvement within 7–14 days.'
        : primary === 'skin'
          ? 'Skin and coat issues often trace back to the gut — it’s called the gut-skin axis, and it’s real. Most owners see coat improvements once digestion stabilizes. Daily Probiotic is our recommendation while we develop a skin-specific chew.'
          : 'Daily Probiotic is our most-recommended daily essential. Five strains, five billion CFUs, third-party tested. The simplest way to support overall wellness from the gut up.',
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
