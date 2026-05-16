import type { Product } from './products';
import { dailyProbiotic, hipAndJoint } from './products';

export type Ingredient = {
  name: string;
  scientificName?: string;
  amount: string;
  role: string;
  reference?: string;
};

export type DosingRow = {
  weightRange: string;
  amount: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CompetitorCompare = {
  competitor: string;
  rows: Array<{ feature: string; pawbite: string; competitor: string }>;
};

export type ProductDetail = Product & {
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
  vetQuote: { name: string; credentials: string; quote: string };
  comparison: CompetitorCompare;
  faqs: FAQ[];
};

export const dailyProbioticDetail: ProductDetail = {
  ...dailyProbiotic,
  flavor: 'Chicken',
  longDescription:
    'A daily soft chew built on five clinically referenced probiotic strains, plus chicory inulin and pumpkin powder to feed the strains once they get there. Vet-formulated. Third-party tested. Made in a cGMP-certified facility in the USA.',
  ingredients: [
    {
      name: 'Bacillus coagulans GBI-30, 6086',
      scientificName: 'Bacillus coagulans',
      amount: '1 billion CFU',
      role: 'Gut barrier integrity',
      reference: 'Kalman et al., 2009',
    },
    {
      name: 'Bifidobacterium animalis subsp. lactis BB-12',
      scientificName: 'Bifidobacterium animalis',
      amount: '1 billion CFU',
      role: 'Stool consistency',
      reference: 'Eskesen et al., 2015',
    },
    {
      name: 'Lactobacillus acidophilus LA-5',
      scientificName: 'Lactobacillus acidophilus',
      amount: '1 billion CFU',
      role: 'Pathogen exclusion',
      reference: 'Saggioro, 2004',
    },
    {
      name: 'Lactobacillus plantarum 299v',
      scientificName: 'Lactobacillus plantarum',
      amount: '1 billion CFU',
      role: 'Short-chain fatty acid production',
      reference: 'Nobaek et al., 2000',
    },
    {
      name: 'Lactobacillus rhamnosus GG',
      scientificName: 'Lactobacillus rhamnosus',
      amount: '1 billion CFU',
      role: 'Immune modulation',
      reference: 'Hatakka et al., 2001',
    },
  ],
  prebioticsAndExtras:
    'Plus chicory inulin (200 mg) prebiotic and pumpkin powder (250 mg) for digestibility.',
  benefits: [
    {
      icon: 'sparkle',
      title: 'Firmer stool',
      body: 'Most dogs see firmer, more regular stool within 14 days.',
    },
    {
      icon: 'heart',
      title: 'Less gas',
      body: 'Bifidobacterium and prebiotic blend reduce fermentation gas.',
    },
    {
      icon: 'shield',
      title: 'Immune support',
      body: 'L. rhamnosus GG is the most-studied immune-modulating strain in pets and humans.',
    },
    {
      icon: 'star',
      title: 'Daily-use ready',
      body: 'Built to live in a daily routine — not a course of treatment.',
    },
  ],
  dosing: [
    { weightRange: 'Under 25 lbs', amount: '1 chew/day' },
    { weightRange: '25–50 lbs', amount: '1 chew/day' },
    { weightRange: '50–75 lbs', amount: '1 chew/day' },
    { weightRange: '75+ lbs', amount: '2 chews/day' },
  ],
  dosingNote:
    'One chew daily works for almost every dog. Larger breeds (75+ lbs) double up if you want a CFU bump.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote:
      'Most over-the-counter dog probiotics underdose the strains that actually matter. PawBite gets the dosing right and names the strains — which is what a vet wants to see.',
  },
  comparison: {
    competitor: 'PetLab Co.',
    rows: [
      { feature: 'CFU per chew', pawbite: '5 billion', competitor: '5 billion' },
      {
        feature: 'Number of strains',
        pawbite: '5 (all named)',
        competitor: '8 (proprietary blend)',
      },
      { feature: 'Strains identified by study designation', pawbite: 'Yes', competitor: 'No' },
      {
        feature: 'Prebiotic included',
        pawbite: 'Chicory inulin 200mg',
        competitor: 'Yes (amount not disclosed)',
      },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Up to 40% off (claims)',
      },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: '30 days' },
      { feature: 'Third-party tested', pawbite: 'Every batch', competitor: 'Yes' },
      { feature: 'cGMP-certified', pawbite: 'Yes', competitor: 'Yes' },
    ],
  },
  faqs: [
    {
      question: 'How long until I see results?',
      answer:
        'Most dogs show firmer stool within 7–14 days. Gas and digestion improvements often show up sooner. Coat and skin changes — the downstream effects — usually take 4–8 weeks.',
    },
    {
      question: 'Can I give this with my dog’s current food?',
      answer:
        'Yes. Daily Probiotic is designed to be given alongside any kibble, fresh, or raw food. It works best at the same time every day — most owners give it with the morning meal.',
    },
    {
      question: 'My dog is on antibiotics. Should I wait?',
      answer:
        'You can give Daily Probiotic during a course of antibiotics — separate the dose by at least 2 hours from the antibiotic to avoid the antibiotic killing the probiotic on contact. After the antibiotic course ends, continuing the probiotic helps the gut microbiome recover.',
    },
    {
      question: 'Are these chews safe for puppies?',
      answer:
        'Yes for puppies 8 weeks and older. The strains are gentle and the CFU count is appropriate. For puppies under 25 lbs, one chew a day is enough.',
    },
    {
      question: 'What’s in the chew besides the probiotics?',
      answer:
        'Chicken liver, pumpkin powder, chicory inulin (prebiotic), oat flour, glycerin, mixed tocopherols (natural preservative). No artificial flavors, colors, or preservatives. The full label is on the back of every canister.',
    },
    {
      question: 'My dog has allergies. Are these safe?',
      answer:
        'The chews are chicken-flavored, so they’re not appropriate for dogs with a confirmed chicken allergy. We don’t use corn, soy, wheat, or dairy. If your dog has known allergies, check the full ingredient panel.',
    },
    {
      question: 'How does Subscribe & Save work?',
      answer:
        'Choose Subscribe & Save at checkout. We ship a new canister every 30 days at 20% off retail, with free shipping. Skip, swap, pause, or cancel from your account in one click — no calls, no fees, no hoops.',
    },
    {
      question: 'What’s the 90-day guarantee?',
      answer:
        'If your dog doesn’t take to it, or you don’t see results within 90 days, email help@pawbite.com and we’ll refund your first order in full. Keep the chews — donate them to a shelter or pass them along to a friend.',
    },
  ],
};

export const hipAndJointDetail: ProductDetail = {
  ...hipAndJoint,
  flavor: 'Duck',
  longDescription:
    'A daily soft chew built on clinically-dosed joint support actives — glucosamine, chondroitin, MSM — plus green-lipped mussel and turmeric for a broader inflammation profile. Vet-formulated. Third-party tested. Made in a cGMP-certified facility in the USA.',
  ingredients: [
    { name: 'Glucosamine HCl', amount: '500 mg', role: 'Cartilage building block' },
    { name: 'Chondroitin sulfate', amount: '400 mg', role: 'Joint cushion + lubrication' },
    {
      name: 'MSM (methylsulfonylmethane)',
      amount: '250 mg',
      role: 'Anti-inflammatory sulfur source',
    },
    { name: 'Green-lipped mussel', amount: '150 mg', role: 'Omega-3 + glycosaminoglycans' },
    {
      name: 'Turmeric (curcumin standardized)',
      amount: '100 mg',
      role: 'Anti-inflammatory antioxidant',
    },
    { name: 'Hyaluronic acid', amount: '10 mg', role: 'Joint fluid viscosity' },
    { name: 'Salmon oil (EPA + DHA)', amount: '50 mg', role: 'Omega-3 anti-inflammatory' },
  ],
  prebioticsAndExtras: 'No prebiotics in this one — clinically-dosed joint actives only.',
  benefits: [
    {
      icon: 'sparkle',
      title: 'Easier mornings',
      body: 'Glucosamine + chondroitin help cushion joints overnight so dogs wake up looser.',
    },
    {
      icon: 'heart',
      title: 'Less inflammation',
      body: 'Turmeric + MSM + omega-3 stack a real anti-inflammatory profile.',
    },
    {
      icon: 'paw',
      title: 'Better mobility',
      body: 'Most dogs show easier stair-climbing and jumping within 21 days.',
    },
    {
      icon: 'shield',
      title: 'Daily-use safe',
      body: 'No NSAIDs, no liver-taxing actives. Built for years of daily use.',
    },
  ],
  dosing: [
    { weightRange: 'Under 25 lbs', amount: '1 chew/day' },
    { weightRange: '25–50 lbs', amount: '2 chews/day' },
    { weightRange: '50–75 lbs', amount: '2 chews/day' },
    { weightRange: '75+ lbs', amount: '3 chews/day' },
  ],
  dosingNote:
    'A 60-chew canister lasts ~30 days for a medium-large dog. Senior dogs and dogs with diagnosed arthritis often benefit from the higher end of their weight band.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote:
      'Most dog joint chews are underdosed on glucosamine — usually 250mg per serving. PawBite is at 500mg, which is the dose actually backed by trial data. The green-lipped mussel addition is the right kind of belt-and-suspenders.',
  },
  comparison: {
    competitor: 'Cosequin',
    rows: [
      { feature: 'Glucosamine HCl per serving', pawbite: '500 mg', competitor: '500 mg' },
      { feature: 'Chondroitin sulfate per serving', pawbite: '400 mg', competitor: '400 mg' },
      { feature: 'MSM included', pawbite: 'Yes (250mg)', competitor: 'No (DS version only)' },
      { feature: 'Green-lipped mussel', pawbite: 'Yes (150mg)', competitor: 'No' },
      { feature: 'Turmeric / curcumin', pawbite: 'Yes (100mg)', competitor: 'No' },
      { feature: 'Form', pawbite: 'Soft chew', competitor: 'Capsule / soft chew' },
      { feature: 'Flavor', pawbite: 'Duck', competitor: 'Chicken / beef' },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Varies by retailer',
      },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: 'Retailer-dependent' },
    ],
  },
  faqs: [
    {
      question: 'How long until I see results?',
      answer:
        'Glucosamine and chondroitin build up over time. Most owners report easier mornings and better stair-climbing within 14–21 days. The full anti-inflammatory effect from MSM and omega-3 takes 4–6 weeks.',
    },
    {
      question: 'Is this safe for senior dogs?',
      answer:
        'Yes — senior dogs are the primary use case. Hip + Joint contains no NSAIDs and no liver-taxing actives, so it’s safe to give daily long-term. Many vets recommend starting hip and joint support around age 5 for medium-large breeds.',
    },
    {
      question: 'My dog is on Carprofen or another NSAID. Can I give this?',
      answer:
        'Yes. Hip + Joint is a nutritional supplement, not an NSAID — it complements prescription anti-inflammatories without competing with them. Many owners use Hip + Joint to reduce the NSAID dose their vet would otherwise prescribe. Always loop in your vet for chronic conditions.',
    },
    {
      question: 'Is this for prevention or for dogs that already have joint problems?',
      answer:
        'Both. Used preventively in healthy adult dogs (especially large breeds prone to hip dysplasia), Hip + Joint reduces wear on cartilage over time. Used in dogs with diagnosed arthritis or slowing mobility, it eases stiffness and improves daily function. Same chew, same dosing.',
    },
    {
      question: 'Why duck flavor instead of chicken?',
      answer:
        'A lot of senior dogs develop sensitivities to chicken. We made Hip + Joint duck-flavored so the dogs most likely to need it can still take it. Also: duck just lands better with picky eaters.',
    },
    {
      question: 'Can my dog take this and the Daily Probiotic together?',
      answer:
        'Absolutely — that’s exactly what The Daily Duo is for. The probiotic and the joint chew work on entirely different systems and pair cleanly. Bundle them and save 32%.',
    },
    {
      question: 'What’s in the chew besides the active ingredients?',
      answer:
        'Duck liver, oat flour, glycerin, mixed tocopherols (natural preservative), salmon oil. No corn, soy, wheat, dairy, artificial flavors, colors, or preservatives.',
    },
    {
      question: 'What’s the 90-day guarantee?',
      answer:
        'If your dog doesn’t take to it, or you don’t see mobility improvement within 90 days, email help@pawbite.com and we’ll refund your first order in full. Keep the chews.',
    },
  ],
};

export const productsDetail = {
  'daily-probiotic': dailyProbioticDetail,
  'hip-and-joint': hipAndJointDetail,
};

export type ProductSlug = keyof typeof productsDetail;
export const productSlugs: ProductSlug[] = Object.keys(productsDetail) as ProductSlug[];
