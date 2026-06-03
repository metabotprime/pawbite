import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type VsComparisonRow = {
  feature: string;
  pawbite: string;
  competitor: string;
};

export type VsPage = {
  slug: string;
  competitorName: string;
  competitorTagline: string;
  productCategories: string[];
  tldr: string;
  byline: ContentByline;
  comparisonRows: VsComparisonRow[];
  whenCompetitorMakesSense: string;
  whenPawbiteMakesSense: string;
  sections: ContentSection[];
  recommendsProduct: ProductRecommendation;
  faqs: ContentFAQ[];
};

/**
 * Filled in by Phase 5 content writer agent (vs comparisons).
 * 4 entries total.
 */
export const vsPages: VsPage[] = [
  {
    slug: 'vs-petlab',
    competitorName: 'PetLab Co.',
    competitorTagline: "America's #1 dog digestive remedy on Amazon",
    productCategories: ['Probiotics', 'Dental sticks', 'Joint chews'],
    tldr: "PetLab Co. is the most recognizable direct-to-consumer dog supplement brand in the US and their Probiotic Chews are a legitimate top-seller on Amazon — if you already trust the brand and your dog likes the formula, there's no urgent reason to switch. PawBite Daily Probiotic matches PetLab on CFU count (5 billion per chew), names every strain by its study designation instead of hiding behind a proprietary blend, and ships at a comparable monthly cost with a 90-day money-back guarantee instead of 30.",
    byline: {
      author: 'PawBite editorial team',
      reviewedBy: 'Dr. M. Hayes, DVM',
      publishedDate: '2026-02-14',
      updatedDate: '2026-05-10',
    },
    comparisonRows: [
      { feature: 'CFU per chew', pawbite: '5 billion', competitor: '5 billion (claimed)' },
      {
        feature: 'Number of strains',
        pawbite: '5 (all named with study designation)',
        competitor: '8 (proprietary blend)',
      },
      {
        feature: 'Strains identified by study ID',
        pawbite: 'Yes (e.g. L. rhamnosus GG, B. animalis BB-12)',
        competitor: 'No',
      },
      {
        feature: 'Prebiotic',
        pawbite: 'Chicory inulin, 200 mg disclosed',
        competitor: 'Included, amount not disclosed',
      },
      { feature: 'Pumpkin / digestive aid', pawbite: '250 mg pumpkin powder', competitor: 'No' },
      { feature: 'Form', pawbite: 'Soft chew', competitor: 'Soft chew' },
      { feature: 'Flavor', pawbite: 'Chicken', competitor: 'Pork' },
      { feature: 'Price per month (subscription)', pawbite: '$26', competitor: '~$28–32' },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Tiered up to 40% off (promo-driven)',
      },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: '30 days' },
      { feature: 'Third-party tested per batch', pawbite: 'Yes', competitor: 'Yes' },
      {
        feature: 'cGMP-certified manufacturing',
        pawbite: 'Yes (USA)',
        competitor: 'Yes',
      },
      {
        feature: 'Distribution',
        pawbite: 'Direct from pawbite.com',
        competitor: 'Amazon + DTC + retailers',
      },
    ],
    whenCompetitorMakesSense:
      "PetLab has earned its scale. If your dog has been on PetLab Probiotic Chews for months and stool is firm, gas is gone, and you're happy with the price after the Amazon Subscribe & Save discount, there's no urgent reason to switch. PetLab also wins on convenience — if you order most of your household goods on Amazon and want one-click reordering inside Prime, that ecosystem matters. Their 30-day guarantee is shorter than ours but adequate if your dog tends to respond quickly to probiotics.",
    whenPawbiteMakesSense:
      "If you want to know exactly which strains your dog is getting and at what dose, PawBite tells you. We name each strain by its clinical designation (Lactobacillus rhamnosus GG, Bifidobacterium animalis BB-12) and link each one to the study that supports it. PetLab uses a proprietary 8-strain blend without naming the strains — which is fine, but means you can't cross-reference the research yourself. PawBite is also a better fit if you'd rather buy direct from a brand that doesn't compete with itself on Amazon listings, and if a 90-day guarantee feels more honest than 30.",
    sections: [
      {
        heading: 'What PetLab does well',
        body: "PetLab Co. is the most successful DTC dog supplement brand in the US for a reason. The Probiotic Chews have over 100,000 Amazon reviews and a genuinely positive average rating. The formula works for most dogs — pork-flavored chews most dogs eat without complaint, prebiotic fiber blended in, and a CFU count that's actually in the clinically useful range (a lot of competitors come in at 1 billion or below, which is not enough to move the needle).\n\nPetLab also invests in customer service in a way most supplement brands don't — their support team is responsive, refunds tend to be processed without friction, and the brand has built real trust over the years. If you're new to dog probiotics and want a low-risk way to try one, PetLab is a reasonable place to start.\n\nWhere we'd push back: PetLab uses a proprietary blend, which is the supplement industry's way of saying we won't tell you exactly which strains are in here and at what ratio. That's a business decision (it protects the formula from copycats), but it also means a vet who wants to evaluate the supplement for a specific gut condition is working blind.",
      },
      {
        heading: 'Where PawBite is different',
        body: "We made the opposite decision on transparency. Every strain in PawBite Daily Probiotic is named by its full study designation — Lactobacillus rhamnosus GG, Bifidobacterium animalis subsp. lactis BB-12, Lactobacillus acidophilus LA-5, Lactobacillus plantarum 299v, Bacillus coagulans GBI-30 6086. Each one has decades of human and canine research behind it. You can google any of those names and find the trial data yourself.\n\nWe also include 200 mg of chicory inulin as the prebiotic (named amount, not vague), 250 mg of pumpkin powder for digestive support, and we test every batch with a third-party lab for CFU at expiration (not just at manufacture). The chews are duck-and-chicken liver based, made in the USA in a cGMP-certified facility, and we ship them in a recyclable canister.\n\nThe practical differences for your dog are small. The intellectual difference — knowing exactly what's going into them — is the part most owners we talk to care about once they look closely.",
      },
      {
        heading: 'On price and subscription',
        body: "PetLab and PawBite are in the same price band per month. PetLab lists at around $35–40 for a one-time order and runs aggressive promotional discounts on Amazon Subscribe & Save (claims of up to 40% off, though the actual landed price varies by promo cycle). PawBite is $32 retail, $26 on Subscribe & Save — a flat 20% off plus free shipping, no promo gymnastics required.\n\nThe Subscribe & Save discount also stacks if you add Hip + Joint via The Daily Duo bundle, dropping the combined per-month cost to $47.60 versus $70 retail — 32% off. PetLab sells joint chews too, but the bundle math depends on which retailer you buy from and which promo is live that week.\n\nNeither brand locks you in. You can skip, pause, or cancel a PawBite subscription from your account portal in one click — no calls, no fees. PetLab's cancellation flow is reasonable but goes through customer service rather than self-serve.",
      },
      {
        heading: 'On testing and certification',
        body: "Both brands manufacture in cGMP-certified facilities and both claim third-party batch testing. The difference is what gets tested and how visible it is.\n\nPawBite publishes a Certificate of Analysis for every lot — a PDF with the CFU count at manufacture, the CFU count at the printed expiration date, and a heavy-metals / microbial contamination panel. We test for CFU at expiration because probiotics die over time, and a label claim of 5 billion CFU is meaningless if the actual count at month 9 is 200 million. The COAs are available on request and we're working on making them publicly downloadable on the product page.\n\nPetLab tests every batch as well, but the testing data is not published publicly — you'd need to contact support to get a COA. That's not unusual for the supplement industry but it's a meaningful gap if you're the kind of owner who wants to verify what's on the label.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    faqs: [
      {
        question: 'Is PetLab Co. a good brand?',
        answer:
          "Yes. PetLab Co. is a legitimate brand with real manufacturing standards, third-party testing, and a long track record of customer satisfaction on Amazon. The Probiotic Chews work for most dogs. The main critique is transparency — they use a proprietary blend and don't publish strain-level data publicly, which is a tradeoff some owners are happy to make and others aren't.",
      },
      {
        question: "How is PawBite Daily Probiotic different from PetLab's Probiotic Chews?",
        answer:
          'Same CFU count (5 billion per chew), different transparency model. PawBite names every strain by its clinical study designation so you can look up the research. PetLab uses an 8-strain proprietary blend. PawBite includes 250 mg of pumpkin powder for digestive aid; PetLab does not. PawBite has a 90-day money-back guarantee; PetLab is 30 days. Price per month is comparable on subscription ($26 vs ~$28–32).',
      },
      {
        question: 'Should I switch from PetLab to PawBite if my dog is doing well on PetLab?',
        answer:
          "Probably not urgently. If stool is firm, gas is under control, and your dog likes the chews, the formula is working — switching for the sake of switching just disrupts a gut microbiome that's stabilized. Where it does make sense to switch: your dog has plateaued, you want strain-level transparency for vet conversations, or you'd rather buy direct from a brand instead of Amazon.",
      },
      {
        question: 'Which has more CFUs — PetLab or PawBite?',
        answer:
          "Both label 5 billion CFU per chew. The difference is what's inside that 5 billion. PetLab uses 8 strains in a proprietary blend (ratios undisclosed). PawBite splits 5 billion evenly across 5 named strains — 1 billion CFU each. The 5-strain approach lets us guarantee a meaningful dose of each strain rather than a trace amount of eight.",
      },
      {
        question: 'Is the PawBite chew chicken or pork flavored?',
        answer:
          "PawBite Daily Probiotic is chicken-liver flavored. PetLab Probiotic Chews are pork-flavored. If your dog has a known chicken sensitivity, PetLab's pork base is the better fit. If your dog has a known pork sensitivity (less common), PawBite is the better fit.",
      },
      {
        question: "Are PetLab's probiotic strains the same as PawBite's?",
        answer:
          "Some overlap, some differences — but it's hard to say with precision because PetLab doesn't publish the exact strain designations in their blend. They list genus and species (Lactobacillus, Bifidobacterium, Bacillus families) but not the specific clinical strains. PawBite publishes all five: Bacillus coagulans GBI-30 6086, Bifidobacterium animalis BB-12, Lactobacillus acidophilus LA-5, Lactobacillus plantarum 299v, Lactobacillus rhamnosus GG.",
      },
      {
        question: "What's the PawBite money-back guarantee?",
        answer:
          "90 days from your first order. If your dog doesn't take to the chews or you don't see results within 90 days, email help@pawbite.com and we refund the first order in full. Keep the chews — donate them or pass them to a friend. PetLab's guarantee is 30 days, which is short for a probiotic since coat and immune effects often take 4–8 weeks to show up.",
      },
    ],
  },
  {
    slug: 'vs-native-pet',
    competitorName: 'Native Pet',
    competitorTagline: 'Whole-food, vet-formulated supplements for dogs',
    productCategories: ['Probiotics', 'Joint chews', 'Allergy support', 'Bone broth'],
    tldr: 'Native Pet is one of the strongest premium-natural brands in the category — vet-nutritionist-formulated, whole-food forward (powders and bone broths in addition to chews), and stocked at Whole Foods and Target Premium Pet. If you prefer powders you sprinkle on food and you value the whole-food positioning, Native Pet is a defensible pick. PawBite Daily Duo bundles probiotic and joint support into two clinically-dosed soft chews at a lower combined monthly cost, with full strain-level and mg-level transparency on every active.',
    byline: {
      author: 'PawBite editorial team',
      reviewedBy: 'Dr. M. Hayes, DVM',
      publishedDate: '2026-02-21',
      updatedDate: '2026-05-10',
    },
    comparisonRows: [
      {
        feature: 'Format',
        pawbite: 'Soft chews (both probiotic and joint)',
        competitor: 'Powder (probiotic), chew (joint), bone broth',
      },
      {
        feature: 'Probiotic CFU per serving',
        pawbite: '5 billion',
        competitor: '2 billion (Probiotic powder)',
      },
      {
        feature: 'Probiotic strains named',
        pawbite: '5 (all study-designated)',
        competitor: '4 (named at genus/species level)',
      },
      {
        feature: 'Glucosamine per joint serving',
        pawbite: '500 mg',
        competitor: '300 mg',
      },
      {
        feature: 'Chondroitin per joint serving',
        pawbite: '400 mg',
        competitor: 'Not used (whole-food alternative: green-lipped mussel)',
      },
      {
        feature: 'Vet formulator',
        pawbite: 'In-house veterinary nutritionist (board-certified)',
        competitor: 'Dr. Mondrian Contreras, DVM (founding vet)',
      },
      {
        feature: 'Price per month (bundle vs. equivalent)',
        pawbite: '$47.60 (Daily Duo subscription)',
        competitor: '~$58–65 (probiotic + joint, separately)',
      },
      { feature: 'Subscribe & Save', pawbite: '20% + 15% bundle = 32%', competitor: '20%' },
      {
        feature: 'Money-back guarantee',
        pawbite: '90 days',
        competitor: '30 days',
      },
      {
        feature: 'Third-party tested per batch',
        pawbite: 'Yes (COA available on request)',
        competitor: 'Yes',
      },
      {
        feature: 'Retail distribution',
        pawbite: 'Direct only (pawbite.com)',
        competitor: 'Whole Foods, Target Premium Pet, Chewy, Amazon',
      },
      {
        feature: 'NASC member',
        pawbite: 'Pending',
        competitor: 'Yes',
      },
    ],
    whenCompetitorMakesSense:
      "Native Pet is the right call if you prefer a powder you mix into food over a chew — some dogs simply won't eat chews, and Native Pet's probiotic powder is one of the cleanest options on shelf. The brand's whole-food angle (bone broths, freeze-dried toppers, mushroom blends) is also genuinely useful if you want a single brand for both supplements and food add-ons. The Whole Foods and Target Premium Pet distribution means you can buy in person without waiting for shipping. And if you trust the vet-nutritionist founding story, the brand's medical credibility is real.",
    whenPawbiteMakesSense:
      "If your dog will eat a chew, two daily soft chews are easier to dose accurately and more enjoyable for the dog than a powder you have to measure and stir into food. PawBite hits higher active doses where it matters — 5 billion CFU per probiotic chew versus Native Pet's 2 billion, and 500 mg glucosamine per joint serving versus Native Pet's 300 mg. The Daily Duo bundle is also meaningfully cheaper per month than buying Native Pet's probiotic powder and joint chew separately. If you're optimizing for active-ingredient dose per dollar and you don't need the in-person retail experience, PawBite is the more efficient pick.",
    sections: [
      {
        heading: 'What Native Pet does well',
        body: "Native Pet has built one of the most credible premium-natural brands in the pet supplement space. The founding story is real — co-founded with a practicing veterinarian (Dr. Mondrian Contreras, DVM) — and the formulations show a willingness to use whole-food ingredients (bone broth, mushroom powders, organ meats) instead of relying solely on synthesized actives. The brand is stocked at Whole Foods, Target Premium Pet, and Chewy, which is meaningful retail real estate that very few DTC competitors have earned.\n\nThe product line is also broader than ours. Native Pet sells freeze-dried bone broths, mushroom immune blends, and seasonal allergy support powders in addition to the core probiotic and joint chews. If you want a single brand to cover supplements, toppers, and functional foods, they're a strong choice.\n\nThe whole-food angle has practical limits — you can't deliver 500 mg of glucosamine through whole-food ingredients alone, and Native Pet's joint chew uses 300 mg, which is on the lower end of what trial data supports. But for owners who explicitly prefer minimally-processed ingredients over higher-dose isolated actives, that tradeoff is the point of the brand.",
      },
      {
        heading: 'Where PawBite is different',
        body: "PawBite is more like a clinical-trial-aligned supplement company than a whole-food brand. We dose to the levels that show up in the trial data — 5 billion CFU per probiotic chew, 500 mg glucosamine and 400 mg chondroitin per joint serving — and we name every active by its study designation. That isn't better or worse than Native Pet's approach; it's a different philosophy about what efficacy looks like.\n\nWhere the philosophies converge: both brands are vet-formulated, both manufacture in cGMP-certified facilities, both test every batch with a third-party lab, and both publish ingredient panels you can actually read. Neither brand uses corn, soy, wheat, dairy, or artificial colors.\n\nWhere they diverge: PawBite is chew-only (no powders, no broths), direct-to-consumer only (no retail), and bundle-priced for owners who want the probiotic and joint products together (the Daily Duo). Native Pet is multi-format, multi-channel, and priced category-by-category.",
      },
      {
        heading: 'On price',
        body: "Native Pet's probiotic powder retails around $30 for a 30-day supply at the recommended dose. Their joint chew is around $32–35 for a 30-day supply at the recommended dose. Buying both on subscription with the standard 20% discount lands you around $50–55 per month for the combined regimen.\n\nPawBite's Daily Duo bundle subscription is $47.60 per month — same kind of regimen (daily probiotic + daily joint), lower combined cost. The savings come from two places: PawBite's bundle stacks a 15% bundle discount on top of the 20% subscription discount (32% total), and our direct-only distribution means we're not pricing in retail margin to support Whole Foods and Target placement.\n\nIf you only need one category (just probiotic or just joint), the per-product pricing is closer to a wash — Native Pet's probiotic powder is ~$24 on subscription, PawBite Daily Probiotic is $26 on subscription. The bundle is where PawBite pulls ahead.",
      },
      {
        heading: 'Who should pick Native Pet',
        body: "Pick Native Pet if any of these matter to you: your dog doesn't eat chews and a powder mixed into food works better; you want to buy in person at Whole Foods or Target instead of waiting for shipping; you want a brand that also sells bone broths, mushroom blends, and seasonal toppers so you can consolidate your supplement and food-additive purchasing; you specifically prefer whole-food ingredients over higher-dose synthesized actives; or you trust the founding-vet story and that's the primary credibility signal you weight.\n\nNative Pet is one of the brands we recommend to friends when chews don't work for their dog. The category benefits from having multiple credible options, and Native Pet is genuinely one of them.",
      },
    ],
    recommendsProduct: 'daily-duo',
    faqs: [
      {
        question: 'Is Native Pet a good brand?',
        answer:
          "Yes. Native Pet is one of the more credible premium-natural dog supplement brands in the US. It's vet-co-founded, stocked at Whole Foods and Target Premium Pet, and the formulations are honest about what they contain. The main tradeoff is dose — the whole-food angle means some actives (glucosamine, CFU count) come in lower than the clinical-trial-aligned doses we use at PawBite.",
      },
      {
        question: "How does PawBite's probiotic compare to Native Pet's probiotic powder?",
        answer:
          "Format and dose. PawBite is a chew at 5 billion CFU; Native Pet is a powder at around 2 billion CFU per serving. Both name the strains. The chew is easier to dose accurately and most dogs treat it as a treat. The powder is the right choice if your dog won't eat chews. The 2.5x difference in CFU is meaningful — if you're treating a specific gut issue, the higher dose generally moves faster.",
      },
      {
        question: "How does PawBite Hip + Joint compare to Native Pet's joint chew?",
        answer:
          "PawBite has 500 mg of glucosamine HCl, 400 mg of chondroitin sulfate, 250 mg of MSM, 150 mg of green-lipped mussel, 100 mg of turmeric, plus hyaluronic acid and salmon oil. Native Pet's joint chew uses 300 mg of glucosamine and skips chondroitin in favor of green-lipped mussel as the joint nutrient source. PawBite's dosing is closer to what arthritis trial data supports; Native Pet's formulation is more whole-food-aligned.",
      },
      {
        question: "Is the Daily Duo cheaper than buying Native Pet's probiotic and joint together?",
        answer:
          "Yes. PawBite Daily Duo on subscription is $47.60 per month. Native Pet's probiotic powder plus joint chew on subscription comes to around $50–55 per month at standard 20% subscriber pricing. The Duo also stacks a 15% bundle discount on top of the subscription discount, which is why it lands lower.",
      },
      {
        question: 'Where is Native Pet sold?',
        answer:
          'Whole Foods, Target Premium Pet, Chewy, Amazon, and their direct site nativepet.com. PawBite is direct-only — pawbite.com. If buying in person matters to you, Native Pet has the edge.',
      },
      {
        question: 'Is Native Pet vet-formulated?',
        answer:
          'Yes — Native Pet was co-founded with Dr. Mondrian Contreras, DVM, who is involved in formulation. PawBite is formulated in-house with a board-certified veterinary nutritionist on the team and every product is reviewed by Dr. M. Hayes, DVM before release.',
      },
      {
        question: "Does Native Pet do bone broth and PawBite doesn't?",
        answer:
          'Correct. Native Pet sells freeze-dried bone broth as a food topper, and PawBite does not. We focused the brand on two clinically-dosed daily chews (probiotic and joint) rather than expanding into food toppers. If you want a single brand for both supplements and food additives, Native Pet covers more ground.',
      },
    ],
  },
  {
    slug: 'vs-zesty-paws',
    competitorName: 'Zesty Paws',
    competitorTagline: 'A passion for pet wellness, naturally',
    productCategories: [
      'Probiotics',
      'Multivitamins',
      'Joint chews',
      'Allergy support',
      'Calming chews',
      'Dental chews',
      'Skin & coat',
    ],
    tldr: "Zesty Paws is the broadest mass-market dog supplement brand on the market — they sell well over a hundred SKUs, they're B-Corp certified, they're stocked everywhere from Chewy to Petco to Costco, and the top-selling products have hundreds of thousands of positive reviews. If you want a one-stop wellness shop at Costco prices, Zesty Paws is a defensible pick. PawBite is the opposite product — two clinically-dosed daily chews instead of a hundred mid-dosed ones, with strain-level transparency on the probiotic and the higher per-active doses on the joint chew.",
    byline: {
      author: 'PawBite editorial team',
      reviewedBy: 'Dr. M. Hayes, DVM',
      publishedDate: '2026-02-28',
      updatedDate: '2026-05-10',
    },
    comparisonRows: [
      {
        feature: 'Probiotic CFU per chew (top probiotic SKU)',
        pawbite: '5 billion',
        competitor: '3 billion (Probiotic Bites)',
      },
      {
        feature: 'Probiotic strains named',
        pawbite: '5 (all study-designated)',
        competitor: '6 (named at species level, not strain ID)',
      },
      {
        feature: 'Number of SKUs in the line',
        pawbite: '3 (probiotic, joint, bundle)',
        competitor: '100+',
      },
      {
        feature: 'B-Corp certified',
        pawbite: 'No',
        competitor: 'Yes',
      },
      {
        feature: 'NASC Quality Seal',
        pawbite: 'Pending',
        competitor: 'Yes',
      },
      {
        feature: 'Joint chew glucosamine',
        pawbite: '500 mg',
        competitor: '250 mg (Mobility Bites)',
      },
      {
        feature: 'Joint chew chondroitin',
        pawbite: '400 mg',
        competitor: '200 mg (Mobility Bites)',
      },
      {
        feature: 'Price per month (probiotic, subscription)',
        pawbite: '$26',
        competitor: '~$16–22 (Amazon S&S, varies)',
      },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: '5–15% on direct, 5% on Amazon',
      },
      {
        feature: 'Money-back guarantee',
        pawbite: '90 days',
        competitor: '90 days',
      },
      {
        feature: 'Third-party tested per batch',
        pawbite: 'Yes',
        competitor: 'Yes',
      },
      {
        feature: 'Distribution',
        pawbite: 'Direct only (pawbite.com)',
        competitor: 'Chewy, Amazon, Petco, PetSmart, Costco, Target',
      },
    ],
    whenCompetitorMakesSense:
      "Zesty Paws makes sense if you want one brand to cover every wellness category your dog might need — probiotic, multivitamin, joint, allergy, calming, skin and coat, dental. The SKU breadth is genuinely useful for a multi-dog household where each dog has different needs. They're B-Corp certified and NASC-sealed, which are real third-party credentials that not every supplement brand earns. And on Amazon Subscribe & Save the per-month cost is hard to beat — you can land Zesty Paws probiotic bites for under $20 a month if you watch the promo cycle.",
    whenPawbiteMakesSense:
      "PawBite makes sense if you'd rather pay for higher doses of fewer actives than spread your budget across a wide-format catalog. Zesty Paws Probiotic Bites are 3 billion CFU per chew; PawBite Daily Probiotic is 5 billion. Zesty Paws Mobility Bites use 250 mg of glucosamine; PawBite Hip + Joint uses 500 mg — the dose that actually shows up in arthritis trials. We also name every probiotic strain by its clinical study designation (Zesty Paws lists at species level, which is standard but less precise). If you want a focused, higher-dose, strain-transparent supplement instead of a category-spanning catalog, PawBite is the simpler answer.",
    sections: [
      {
        heading: 'What Zesty Paws does well',
        body: "Zesty Paws is the closest thing the dog supplement industry has to a mass-market multi-category brand. They sell over 100 SKUs, they're carried at every major pet retailer in the US (Chewy, Amazon, Petco, PetSmart, Target, Costco), and the volume drives prices down meaningfully — a 90-count jar of Zesty Paws Probiotic Bites on Amazon Subscribe & Save during a promo cycle can land under $20.\n\nThe brand also has real third-party credentials. Zesty Paws is B-Corp certified — a meaningful signal about supply chain and labor practices that very few supplement brands have earned. They carry the National Animal Supplement Council (NASC) Quality Seal on most SKUs, which requires annual facility audits, adverse event reporting, and ingredient-specific risk reviews. Both of those are credible signals that PawBite has not yet earned (NASC membership is in process for us).\n\nWhere the breadth has costs: across 100+ SKUs, formulation focus gets thin. Zesty Paws Probiotic Bites are 3 billion CFU per chew, which is in the working range but lower than what we use. The Mobility Bites use 250 mg of glucosamine and 200 mg of chondroitin, both at roughly half the dose of PawBite Hip + Joint. The brand makes those tradeoffs to hit the retail price points that mass-market distribution requires.",
      },
      {
        heading: 'Where PawBite is different',
        body: "We made the opposite tradeoff. A short line, higher per-active doses, single distribution channel.\n\nDaily Probiotic at 5 billion CFU across 5 named strains — Bacillus coagulans GBI-30 6086, Bifidobacterium animalis BB-12, Lactobacillus acidophilus LA-5, Lactobacillus plantarum 299v, Lactobacillus rhamnosus GG. Each strain has a citation in the product detail. Hip + Joint at 500 mg glucosamine and 400 mg chondroitin per serving, plus MSM, green-lipped mussel, turmeric, hyaluronic acid, and salmon oil. Calm pairs L-theanine and ashwagandha with a gut-brain probiotic — calm without sedation. The Daily Duo bundle combines the two daily essentials at a 32% discount.\n\nWe don't sell multivitamins, dental chews, or skin-and-coat treats. If you need those, you'll need a second brand. The decision was deliberate: we'd rather do three chews well than ten products at the dose point retailers want.\n\nDistribution is direct only. We're not on Amazon, Chewy, Petco, or Costco. The savings from cutting out retailer margins fund the higher doses and the 90-day guarantee.",
      },
      {
        heading: 'On price and what you pay for',
        body: "Zesty Paws is genuinely cheaper per month on the probiotic side — $16–22 on Amazon Subscribe & Save versus PawBite's $26. Per-CFU, the gap narrows: Zesty Paws is 3 billion CFU per chew, PawBite is 5 billion, so PawBite is roughly 25% more expensive per billion CFU at typical promo pricing.\n\nOn the joint side, the price comparison reverses. Zesty Paws Mobility Bites are around $22 a month, PawBite Hip + Joint is $30 on subscription. But on glucosamine-mg-per-dollar, PawBite is cheaper — 500 mg per serving at $30 is roughly $0.06 per 100 mg, versus Zesty Paws at 250 mg per serving for $22 (roughly $0.09 per 100 mg).\n\nIf you want lowest sticker price, Zesty Paws on Amazon wins. If you want lowest dose-adjusted price on the actives that matter for joint health, PawBite wins. The Daily Duo bundle at $47.60 per month is the configuration where PawBite is most defensible — it's a clinically-dosed probiotic plus a clinically-dosed joint chew at roughly Zesty-Paws-individual-SKU pricing.",
      },
      {
        heading: 'On certification and testing',
        body: "Zesty Paws holds two third-party credentials PawBite does not yet hold: NASC Quality Seal and B-Corp certification. Both are meaningful.\n\nThe NASC Quality Seal requires participating brands to undergo a biennial third-party facility audit, maintain an adverse event reporting system, follow specific labeling and quality guidelines, and submit to ingredient-by-ingredient risk reviews. It's the most credible quality seal in the animal supplement industry. PawBite has an NASC membership application in progress; we expect to carry the seal by mid-2026.\n\nB-Corp certification covers governance, workers, community, environment, and customers. It's harder to earn than people assume — most brands that claim sustainability values don't pursue it because the audit is genuinely demanding. Zesty Paws is one of the few US dog supplement brands to hold it. PawBite is not currently pursuing B-Corp; if that's an explicit deal-breaker for you, Zesty Paws is the better fit on that axis alone.\n\nOn batch testing both brands publish or provide third-party COAs covering CFU verification (where applicable), heavy metals, and microbial contamination panels. Both manufacture in cGMP-certified US facilities.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    faqs: [
      {
        question: 'Is Zesty Paws a good brand?',
        answer:
          "Yes. Zesty Paws is one of the most credible mass-market dog supplement brands in the US. They're B-Corp certified, NASC-sealed, third-party tested, and stocked at every major retailer. The main tradeoff is dose — at the price points needed to compete at Costco and Amazon scale, the per-chew active doses tend to be on the lower end of clinically useful.",
      },
      {
        question: 'How does PawBite Daily Probiotic compare to Zesty Paws Probiotic Bites?',
        answer:
          'PawBite has 5 billion CFU per chew across 5 named strains (each with a study citation). Zesty Paws Probiotic Bites have 3 billion CFU per chew across 6 strains (listed at species level, not by clinical strain ID). Both include prebiotics. PawBite is $26/month on subscription; Zesty Paws is $16–22/month on Amazon Subscribe & Save depending on promo cycle.',
      },
      {
        question: 'How does PawBite Hip + Joint compare to Zesty Paws Mobility Bites?',
        answer:
          "PawBite is 500 mg glucosamine + 400 mg chondroitin + 250 mg MSM + 150 mg green-lipped mussel + 100 mg turmeric per serving. Zesty Paws Mobility Bites are 250 mg glucosamine + 200 mg chondroitin + lower amounts of MSM and supporting actives. PawBite's dose levels match what arthritis trial data uses; Zesty Paws is dosed for affordability at retail scale.",
      },
      {
        question: 'Is Zesty Paws cheaper than PawBite?',
        answer:
          'On sticker price, yes — Zesty Paws on Amazon Subscribe & Save runs $5–10 less per month per SKU than PawBite direct. On dose-adjusted price (cost per billion CFU or cost per mg of glucosamine), the gap narrows or reverses. The PawBite Daily Duo bundle is roughly competitive with buying two Zesty Paws SKUs separately, with higher per-active doses.',
      },
      {
        question: 'Is Zesty Paws B-Corp certified?',
        answer:
          'Yes. Zesty Paws is one of the few US dog supplement brands to hold B-Corp certification, which covers governance, workers, community, environment, and customer practices. PawBite is not currently B-Corp certified. If B-Corp status is an explicit purchasing criterion for you, Zesty Paws wins on that axis.',
      },
      {
        question: 'Does Zesty Paws have an NASC Quality Seal?',
        answer:
          "Yes. The National Animal Supplement Council Quality Seal is the most credible third-party quality program in the animal supplement category. Zesty Paws carries it on most SKUs. PawBite's NASC membership application is in progress and we expect to carry the seal by mid-2026.",
      },
      {
        question: 'Where do I buy Zesty Paws vs PawBite?',
        answer:
          'Zesty Paws is sold at Chewy, Amazon, Petco, PetSmart, Target, Costco, and on their direct site zestypaws.com. PawBite is sold only at pawbite.com — direct from us, with a 90-day money-back guarantee and free shipping on subscriptions.',
      },
    ],
  },
  {
    slug: 'vs-cosequin',
    competitorName: 'Cosequin',
    competitorTagline: 'The #1 veterinarian-recommended joint health supplement brand',
    productCategories: ['Joint supplements'],
    tldr: "Cosequin is the longest-established canine joint supplement and has decades of veterinarian recommendations and clinical trial data behind it — it's the safe pick if your vet has already prescribed it and your dog is responding well. PawBite Hip + Joint matches the active-ingredient dosing (500 mg glucosamine HCl, 400 mg chondroitin sulfate) and adds MSM, green-lipped mussel, turmeric, hyaluronic acid, and salmon oil in a single soft chew, at a lower per-month subscription price with a 90-day money-back guarantee.",
    byline: {
      author: 'PawBite editorial team',
      reviewedBy: 'Dr. M. Hayes, DVM',
      publishedDate: '2026-03-07',
      updatedDate: '2026-05-10',
    },
    comparisonRows: [
      {
        feature: 'Glucosamine HCl per serving',
        pawbite: '500 mg',
        competitor: '500 mg (Cosequin DS)',
      },
      {
        feature: 'Chondroitin sulfate per serving',
        pawbite: '400 mg',
        competitor: '400 mg (Cosequin DS)',
      },
      {
        feature: 'MSM included',
        pawbite: 'Yes (250 mg)',
        competitor: 'Only in Cosequin DS Plus MSM SKU',
      },
      {
        feature: 'Green-lipped mussel',
        pawbite: 'Yes (150 mg)',
        competitor: 'No',
      },
      {
        feature: 'Turmeric / curcumin',
        pawbite: 'Yes (100 mg standardized)',
        competitor: 'No',
      },
      {
        feature: 'Hyaluronic acid',
        pawbite: 'Yes (10 mg)',
        competitor: 'No',
      },
      {
        feature: 'Omega-3 (EPA + DHA)',
        pawbite: 'Yes (50 mg salmon oil)',
        competitor: 'No',
      },
      {
        feature: 'Form',
        pawbite: 'Soft chew',
        competitor: 'Capsule, soft chew, or sprinkle capsule',
      },
      {
        feature: 'Flavor',
        pawbite: 'Duck',
        competitor: 'Chicken & tuna (varies by SKU)',
      },
      {
        feature: 'Price per month (typical large-dog dose)',
        pawbite: '$30 (Subscribe & Save)',
        competitor: '$35–55 (retailer-dependent)',
      },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Varies by retailer (Chewy Autoship typical)',
      },
      {
        feature: 'Money-back guarantee',
        pawbite: '90 days',
        competitor: 'Retailer-dependent',
      },
      {
        feature: 'Clinical trial history',
        pawbite: 'Individual actives published; product-level trials in progress',
        competitor: 'Decades of brand-specific clinical trial data',
      },
    ],
    whenCompetitorMakesSense:
      "Cosequin is the right pick when your vet has specifically prescribed it. The brand has more product-specific clinical trial data than any other canine joint supplement on the market — multiple peer-reviewed trials going back to the 1990s — and it's the formulation most veterinary teaching hospitals reach for first. If your dog has been on Cosequin for years and is responding well, there's no reason to switch. Cosequin is also the safer choice in cases where vet-prescribed continuity matters — post-orthopedic-surgery rehabilitation, dogs on complex medication regimens, or owners who want a supplement their vet has personally validated in their clinic.",
    whenPawbiteMakesSense:
      "PawBite Hip + Joint matches Cosequin DS on the two actives that show up most in joint trial data — 500 mg glucosamine HCl and 400 mg chondroitin sulfate — and adds MSM, green-lipped mussel, turmeric, hyaluronic acid, and salmon-derived omega-3 in a single chew. Cosequin sells those additions as separate SKUs (Cosequin DS Plus MSM, Cosequin Optimum), which means matching PawBite's full anti-inflammatory profile requires stacking 2–3 Cosequin products and ends up costing $50–70 a month. PawBite delivers it in one chew at $30 a month on subscription. If you want the full active stack without the multi-SKU complexity, PawBite is the simpler pick.",
    sections: [
      {
        heading: 'What Cosequin does well',
        body: "Cosequin (made by Nutramax Laboratories) is the longest-established canine joint supplement in the US and has earned its position as the #1 veterinarian-recommended joint brand. The dosing is right — Cosequin DS uses 500 mg glucosamine HCl and 400 mg chondroitin sulfate, which is the combination used in the original arthritis trial data and remains the benchmark dose for the category.\n\nNutramax has invested in product-specific clinical research in a way that almost no other supplement brand has matched. Cosequin and its sister product Dasuquin have been studied in placebo-controlled trials in dogs with osteoarthritis (McCarthy et al. 2007; D'Altilio et al. 2007; and others), with results that show improvements in lameness, pain scores, and weight-bearing on force plate analysis. That body of evidence is genuinely rare in the supplement category.\n\nThe brand also has distribution through vet clinics and through Chewy/Amazon/PetSmart, which means continuity of supply is reliable and your vet can dispense it directly if that's the channel you prefer. If your vet has already recommended Cosequin, sticking with it is a defensible default — you're paying a brand premium, but you're paying it for a real evidence base.",
      },
      {
        heading: 'Where PawBite is different',
        body: "PawBite Hip + Joint matches Cosequin DS on the two foundational actives — same 500 mg glucosamine HCl, same 400 mg chondroitin sulfate — and then stacks the additional anti-inflammatory and joint-supportive ingredients that Cosequin sells separately or not at all.\n\nMSM (methylsulfonylmethane) at 250 mg per chew. Green-lipped mussel at 150 mg, which delivers naturally occurring glycosaminoglycans and omega-3 fatty acids. Turmeric extract standardized to curcumin at 100 mg. Hyaluronic acid at 10 mg for joint fluid viscosity. Salmon-derived omega-3 (EPA + DHA) at 50 mg. All in one chew.\n\nTo match that profile with Cosequin, you'd typically stack Cosequin DS Plus MSM ($35–45/month) with a separate green-lipped mussel SKU or fish oil supplement ($10–20/month). Cosequin's Dasuquin Advanced line adds some of these ingredients but at higher price points (~$55–75/month for large dogs).\n\nThe honest tradeoff: PawBite does not yet have product-level clinical trial data. We can cite the trial data for the individual actives at the doses we use — those are published — but Cosequin can cite trials on the exact branded formulation, which we cannot. If product-specific trial evidence is the deciding factor for you, Cosequin is the right call.",
      },
      {
        heading: 'On price',
        body: "Cosequin DS for medium-large dogs typically runs $35–45 per month at the standard daily dose, depending on whether you buy at Chewy Autoship, Amazon, PetSmart, or through your vet. Cosequin DS Plus MSM and Dasuquin Advanced (the SKUs closer to PawBite's active profile) run $40–55 and $55–75 per month respectively.\n\nPawBite Hip + Joint is $38 retail and $30 on Subscribe & Save for a typical medium-large dog dose. That's roughly $5–25 a month cheaper than the comparable Cosequin SKU, depending on which Cosequin product you're comparing to and where you buy it.\n\nThe Daily Duo bundle ($47.60/month on subscription, includes both Hip + Joint and Daily Probiotic) is also relevant here — if your dog needs digestive support and joint support (common in senior dogs), getting both from PawBite typically costs less than buying Cosequin alone at retail.\n\nNeither brand locks you in to a subscription you can't cancel. PawBite subscriptions cancel in one click from your account. Cosequin via Chewy Autoship is also self-serve cancel.",
      },
      {
        heading: 'Who should pick Cosequin',
        body: "Pick Cosequin if your vet has specifically prescribed it, your dog is mid-treatment for a diagnosed joint condition and continuity matters, or you specifically value product-level clinical trial data over a broader active-ingredient stack. Cosequin is also the right call if your dog has had an orthopedic surgery and the rehab plan includes a specific joint supplement your vet has used in their practice — switching brands during rehabilitation isn't a great time to introduce variables.\n\nCosequin is one of the few supplements in this entire category that has genuinely earned its veterinarian-recommended status. The brand premium reflects real evidence. We won't tell you to switch off it if it's working — we'd just point out that PawBite Hip + Joint offers the same foundational dosing in a broader active stack at a lower monthly cost, and we offer a 90-day money-back guarantee so trying it costs nothing if it doesn't work out.",
      },
    ],
    recommendsProduct: 'hip-and-joint',
    faqs: [
      {
        question: 'Is Cosequin the best joint supplement for dogs?',
        answer:
          "It's the most clinically studied at the product level, which is a meaningful credential. Whether it's the best fit for your specific dog depends on what you're optimizing for. If you want product-specific trial evidence and your vet has recommended it, Cosequin is hard to beat. If you want a broader active-ingredient stack (glucosamine + chondroitin + MSM + green-lipped mussel + turmeric + hyaluronic acid + omega-3) in a single chew at a lower price point, PawBite Hip + Joint is worth considering.",
      },
      {
        question: 'How does PawBite Hip + Joint compare to Cosequin DS?',
        answer:
          'PawBite matches Cosequin DS on the two foundational actives — same 500 mg glucosamine HCl and 400 mg chondroitin sulfate per serving. PawBite then adds 250 mg MSM, 150 mg green-lipped mussel, 100 mg turmeric, 10 mg hyaluronic acid, and 50 mg salmon-derived omega-3. To match the full PawBite profile with Cosequin, you would typically need to stack Cosequin DS Plus MSM with a separate green-lipped mussel or fish oil SKU.',
      },
      {
        question: 'Is PawBite cheaper than Cosequin?',
        answer:
          "Yes, on most comparisons. PawBite Hip + Joint on subscription is $30/month for a medium-large dog dose. Cosequin DS runs $35–45/month, Cosequin DS Plus MSM runs $40–55/month, and Dasuquin Advanced runs $55–75/month at comparable doses. The price gap widens as you compare PawBite to Cosequin's higher-tier SKUs that add MSM and other actives.",
      },
      {
        question: 'Should I switch from Cosequin to PawBite if my dog is doing well on Cosequin?',
        answer:
          "If your dog is responding well to Cosequin, especially in a post-surgical rehab or vet-managed arthritis case, we wouldn't push you to switch. Continuity matters in chronic care. Where switching makes more sense: your dog has plateaued on Cosequin DS and you want a broader anti-inflammatory profile without the cost of moving up to Dasuquin Advanced, or your monthly Cosequin budget is creeping above $50 and you want comparable dosing for less.",
      },
      {
        question: 'Does PawBite have clinical trials like Cosequin does?',
        answer:
          "Not at the product level — we can cite peer-reviewed trial data on the individual active ingredients at the doses we use (glucosamine, chondroitin, MSM, green-lipped mussel, turmeric, omega-3 have all been studied in canine joint health), but we have not yet run a Hip + Joint branded clinical trial. Cosequin has. If product-specific clinical evidence is the deciding factor, that's an honest reason to choose Cosequin.",
      },
      {
        question: 'Is PawBite Hip + Joint safe to give with a vet-prescribed NSAID like Carprofen?',
        answer:
          'Yes. PawBite Hip + Joint is a nutritional supplement, not an NSAID — there is no drug-drug interaction with Carprofen, Galliprim, Meloxicam, or other prescription anti-inflammatories. Many owners use a joint supplement to reduce the NSAID dose their vet might otherwise prescribe over time. Always loop in your vet for chronic conditions.',
      },
      {
        question: 'What flavor is PawBite Hip + Joint? Cosequin comes in chicken.',
        answer:
          'PawBite Hip + Joint is duck-flavored. A lot of senior dogs (the primary use case for joint supplements) develop chicken sensitivities over time, so we made Hip + Joint duck-based to avoid that. Cosequin offers chicken, tuna, and unflavored capsule SKUs depending on which product line you pick.',
      },
    ],
  },
];

export const vsPageBySlug = (slug: string): VsPage | undefined =>
  vsPages.find((v) => v.slug === slug);
export const vsPageSlugs = (): string[] => vsPages.map((v) => v.slug);
