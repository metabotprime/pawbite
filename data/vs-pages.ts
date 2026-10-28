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
    tldr: "PetLab Co. is the most recognizable direct-to-consumer dog supplement brand in the US and their Probiotic Chews are a legitimate top-seller on Amazon. If you already trust the brand and your dog likes the formula, there's no urgent reason to switch. PawBite Probiotic Chews list 2.5 billion CFU per 2.5 g chew across five named microorganisms, plus 100 mg of inulin and 125 mg of pumpkin powder. PetLab's listed CFU count is 5 billion per chew. These different formulas should not be treated as equivalent.",
    byline: {
      author: 'PawBite editorial team',
      publishedDate: '2026-02-14',
      updatedDate: '2026-10-28',
    },
    comparisonRows: [
      { feature: 'CFU per chew', pawbite: '2.5 billion', competitor: '5 billion (claimed)' },
      {
        feature: 'Number of strains',
        pawbite: '5 (named at species level)',
        competitor: '8 (proprietary blend)',
      },
      {
        feature: 'Strains identified by study ID',
        pawbite: 'No; species names are listed',
        competitor: 'No',
      },
      {
        feature: 'Prebiotic',
        pawbite: 'Inulin, 100 mg per chew',
        competitor: 'Included, amount not disclosed',
      },
      {
        feature: 'Pumpkin / digestive aid',
        pawbite: '125 mg pumpkin powder per chew',
        competitor: 'No',
      },
      { feature: 'Form', pawbite: 'Soft chew', competitor: 'Soft chew' },
      { feature: 'Flavor', pawbite: 'Chicken', competitor: 'Pork' },
      { feature: 'Price per month (subscription)', pawbite: '$26', competitor: '~$28–32' },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Tiered up to 40% off (promo-driven)',
      },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: '30 days' },
      {
        feature: 'Third-party tested per batch',
        pawbite: 'Not confirmed by current label',
        competitor: 'Yes',
      },
      {
        feature: 'cGMP-certified manufacturing',
        pawbite: 'Made in China; GMP-certified facility stated on label',
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
      'PawBite Probiotic Chews may suit owners who prefer a chicken-flavored soft chew with the amount of each listed microorganism disclosed. The label lists five species at 500 million CFU each, plus 100 mg of inulin and 125 mg of pumpkin powder per chew. It does not identify clinical strain designations. PawBite also offers direct purchasing and a 90-day guarantee.',
    sections: [
      {
        heading: 'What PetLab does well',
        body: "PetLab Co. is the most successful DTC dog supplement brand in the US for a reason. The Probiotic Chews have over 100,000 Amazon reviews and a genuinely positive average rating. The formula works for most dogs — pork-flavored chews most dogs eat without complaint, prebiotic fiber blended in, and a CFU count that's actually in the clinically useful range (a lot of competitors come in at 1 billion or below, which is not enough to move the needle).\n\nPetLab also invests in customer service in a way most supplement brands don't — their support team is responsive, refunds tend to be processed without friction, and the brand has built real trust over the years. If you're new to dog probiotics and want a low-risk way to try one, PetLab is a reasonable place to start.\n\nWhere we'd push back: PetLab uses a proprietary blend, which is the supplement industry's way of saying we won't tell you exactly which strains are in here and at what ratio. That's a business decision (it protects the formula from copycats), but it also means a vet who wants to evaluate the supplement for a specific gut condition is working blind.",
      },
      {
        heading: 'Where PawBite is different',
        body: "PawBite Probiotic Chews list Bacillus coagulans, Bifidobacterium animalis, Lactobacillus acidophilus, Lactobacillus plantarum, and Lactobacillus rhamnosus at a minimum of 500 million CFU each per 2.5 g chew, for a total of 2.5 billion CFU. The label names these microorganisms at species level; it does not supply clinical strain IDs.\n\nEach chew also contains 100 mg of inulin and 125 mg of pumpkin powder. The chicken-flavored formula contains chicken and chickpea. Each tube contains approximately 80 soft chews, with a net weight of 200 g (7.05 oz). The label states Made in China and Made in a GMP-certified facility.\n\nThe product's label description is: For dogs' gut wellness. Ingredient names and amounts do not establish that a finished product has the same effects as another formulation.",
      },
      {
        heading: 'On price and subscription',
        body: "PetLab and PawBite are in the same price band per month. PetLab lists at around $35–40 for a one-time order and runs aggressive promotional discounts on Amazon Subscribe & Save (claims of up to 40% off, though the actual landed price varies by promo cycle). PawBite is $32 retail, $26 on Subscribe & Save — a flat 20% off plus free shipping, no promo gymnastics required.\n\nThe Subscribe & Save discount also stacks if you add Joint + Mobility Chews via The Daily Duo bundle, dropping the combined per-month cost to $47.60 versus $70 retail — 32% off. PetLab sells joint chews too, but the bundle math depends on which retailer you buy from and which promo is live that week.\n\nNeither brand locks you in. You can skip, pause, or cancel a PawBite subscription from your account portal in one click — no calls, no fees. PetLab's cancellation flow is reasonable but goes through customer service rather than self-serve.",
      },
      {
        heading: 'On testing and certification',
        body: "PawBite's current label lists a minimum of 2.5 billion CFU per chew. It does not specify whether that count is measured at manufacture or guaranteed through expiration. A through-expiration guarantee should not be assumed from the count alone.\n\nPetLab tests every batch, but the testing data is not published publicly — you'd need to contact support to get a COA. That's not unusual for the supplement industry but it's a meaningful gap if you're the kind of owner who wants to verify what's on the label.",
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
        question: "How is PawBite Probiotic Chews different from PetLab's Probiotic Chews?",
        answer:
          'PawBite Probiotic Chews list 2.5 billion CFU per chew across five named microorganisms, each at 500 million CFU. PetLab uses an 8-strain proprietary blend with a listed total of 5 billion CFU. PawBite also includes 100 mg of inulin and 125 mg of pumpkin powder per chew. PawBite has a 90-day money-back guarantee; PetLab is 30 days.',
      },
      {
        question: 'Should I switch from PetLab to PawBite if my dog is doing well on PetLab?',
        answer:
          'If your dog is doing well on PetLab, there is no reason to switch solely because PawBite has a different formula. PawBite lists species names and amounts, but not clinical strain IDs. Ask your veterinarian before changing a product used as part of a care plan.',
      },
      {
        question: 'Which has more CFUs — PetLab or PawBite?',
        answer:
          'PetLab labels 5 billion CFU per chew; PawBite labels 2.5 billion CFU per chew. PawBite lists five named microorganisms at 500 million CFU each. PetLab uses eight strains in a proprietary blend with ratios undisclosed. CFU count alone does not establish which product is a better fit for a particular dog.',
      },
      {
        question: 'Is the PawBite chew chicken or pork flavored?',
        answer:
          'PawBite Probiotic Chews are chicken-flavored and contain chicken and chickpea. PetLab Probiotic Chews are pork-flavored. For a dog with a known food sensitivity, compare the full ingredient and allergen lists with your veterinarian; flavor alone does not establish suitability.',
      },
      {
        question: "Are PetLab's probiotic strains the same as PawBite's?",
        answer:
          'The labels do not establish an exact strain match. PawBite lists Bacillus coagulans, Bifidobacterium animalis, Lactobacillus acidophilus, Lactobacillus plantarum, and Lactobacillus rhamnosus without clinical strain IDs. PetLab also does not publish exact strain designations in its blend. Shared species names do not establish identical strains or effects.',
      },
      {
        question: "What's the PawBite money-back guarantee?",
        answer:
          "90 days from your first order. If your dog doesn't take to the chews or you don't see results within 90 days, email help@pawbite.com and we refund the first order in full. Keep the chews — donate them or pass them to a friend. PetLab's guarantee is 30 days, which is short for a probiotic since coat and immune effects often take 4–8 weeks to show up.",
      },
      {
        question: 'Is more strains better?',
        answer:
          'Strain count alone does not establish effectiveness. Look for the exact strain, the amount, and research relevant to the intended use. A larger blend is not automatically a better choice.',
      },
      {
        question: 'Why does it matter when CFU is measured?',
        answer:
          'CFU counts describe viable microorganisms. A count guaranteed through expiration is different from a count measured only at manufacture. Check the label for the guarantee and storage instructions.',
      },
      {
        question: 'Can I switch from PetLab to PawBite without a gap?',
        answer:
          'There is no universal transition schedule for all probiotic products or dogs. Follow the product instructions and ask your veterinarian before changing a supplement used as part of treatment.',
      },
      {
        question: 'My dog hates chews. What now?',
        answer:
          'A chew is useful only if your dog eats it. Ask your veterinarian about a suitable alternative format, especially if your dog follows a prescription or elimination diet.',
      },
      {
        question: 'How long until I see results from either?',
        answer:
          'Response depends on the formulation, the reason for use, and your dog. A fixed timeline cannot be promised for either product. Discuss persistent or worsening symptoms with your veterinarian rather than waiting for a supplement to work.',
      },
    ],
  },
  {
    slug: 'vs-native-pet',
    competitorName: 'Native Pet',
    competitorTagline: 'Whole-food, vet-formulated supplements for dogs',
    productCategories: ['Probiotics', 'Joint chews', 'Allergy support', 'Bone broth'],
    tldr: 'Native Pet is one of the strongest premium-natural brands in the category — vet-nutritionist-formulated, whole-food forward (powders and bone broths in addition to chews), and stocked at Whole Foods and Target Premium Pet. If you prefer powders you sprinkle on food and you value the whole-food positioning, Native Pet is a defensible pick. PawBite offers Probiotic Chews and Joint + Mobility Chews together in the Daily Duo bundle, with ingredient amounts listed per 2.5 g chew.',
    byline: {
      author: 'PawBite editorial team',
      publishedDate: '2026-02-21',
      updatedDate: '2026-10-28',
    },
    comparisonRows: [
      {
        feature: 'Format',
        pawbite: 'Soft chews (both probiotic and joint)',
        competitor: 'Powder (probiotic), chew (joint), bone broth',
      },
      {
        feature: 'Probiotic CFU per serving',
        pawbite: '2.5 billion per 2.5 g chew',
        competitor: '2 billion (Probiotic powder)',
      },
      {
        feature: 'Probiotic strains named',
        pawbite: '5 (named at species level)',
        competitor: '4 (named at genus/species level)',
      },
      {
        feature: 'Glucosamine per joint serving',
        pawbite: '250 mg per 2.5 g chew',
        competitor: '300 mg',
      },
      {
        feature: 'Chondroitin per joint serving',
        pawbite: '125 mg per 2.5 g chew',
        competitor: 'Not used (whole-food alternative: green-lipped mussel)',
      },
      {
        feature: 'Vet formulator',
        pawbite: 'Veterinary review pending',
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
        pawbite: 'Not confirmed by current label',
        competitor: 'Yes',
      },
      {
        feature: 'Retail distribution',
        pawbite: 'Direct only (pawbite.com)',
        competitor: 'Whole Foods, Target Premium Pet, Chewy, Amazon',
      },
      {
        feature: 'NASC member',
        pawbite: 'Not currently claimed',
        competitor: 'Yes',
      },
    ],
    whenCompetitorMakesSense:
      "Native Pet is the right call if you prefer a powder you mix into food over a chew — some dogs simply won't eat chews, and Native Pet's probiotic powder is one of the cleanest options on shelf. The brand's whole-food angle (bone broths, freeze-dried toppers, mushroom blends) is also genuinely useful if you want a single brand for both supplements and food add-ons. The Whole Foods and Target Premium Pet distribution means you can buy in person without waiting for shipping. And if you trust the vet-nutritionist founding story, the brand's medical credibility is real.",
    whenPawbiteMakesSense:
      "PawBite may suit owners who prefer soft chews and want to buy Probiotic Chews and Joint + Mobility Chews together in the Daily Duo bundle. Probiotic Chews list 2.5 billion CFU per chew; Joint + Mobility Chews list 250 mg of glucosamine HCl and 125 mg of chondroitin sulfate per chew. Follow each product's weight-based directions when comparing daily servings. These amounts do not establish superior effectiveness.",
    sections: [
      {
        heading: 'What Native Pet does well',
        body: "Native Pet has built one of the most credible premium-natural brands in the pet supplement space. The founding story is real — co-founded with a practicing veterinarian (Dr. Mondrian Contreras, DVM) — and the formulations show a willingness to use whole-food ingredients (bone broth, mushroom powders, organ meats) instead of relying solely on synthesized actives. The brand is stocked at Whole Foods, Target Premium Pet, and Chewy, which is meaningful retail real estate that very few DTC competitors have earned.\n\nThe product line is also broader than ours. Native Pet sells freeze-dried bone broths, mushroom immune blends, and seasonal allergy support powders in addition to the core probiotic and joint chews. If you want a single brand to cover supplements, toppers, and functional foods, they're a strong choice.\n\nNative Pet's joint chew uses 300 mg of glucosamine. Its whole-food positioning may appeal to owners who prefer that formulation approach. The amount of one ingredient alone does not establish how a product will perform.",
      },
      {
        heading: 'Where PawBite is different',
        body: "PawBite lists ingredient amounts per 2.5 g chew. Probiotic Chews contain a minimum of 2.5 billion CFU across five named microorganisms, plus 100 mg of inulin and 125 mg of pumpkin powder. Joint + Mobility Chews contain 250 mg of glucosamine HCl, 125 mg each of chondroitin sulfate, MSM, and green-lipped mussel, and 50 mg of turmeric extract.\n\nPawBite's veterinary review is pending. The current labels provide ingredient amounts, but do not establish clinical strain IDs or finished-product efficacy. Each tube contains approximately 80 soft chews, with a net weight of 200 g (7.05 oz).\n\nPawBite is chew-only (no powders, no broths), direct-to-consumer only (no retail), and bundle-priced for owners who want Probiotic Chews and Joint + Mobility Chews together. Native Pet is multi-format, multi-channel, and priced category-by-category.",
      },
      {
        heading: 'On price',
        body: "Native Pet's probiotic powder retails around $30 for a 30-day supply at the recommended dose. Their joint chew is around $32–35 for a 30-day supply at the recommended dose. Buying both on subscription with the standard 20% discount lands you around $50–55 per month for the combined regimen.\n\nPawBite's Daily Duo bundle subscription is $47.60 per month — same kind of regimen (daily probiotic + daily joint), lower combined cost. The savings come from two places: PawBite's bundle stacks a 15% bundle discount on top of the 20% subscription discount (32% total), and our direct-only distribution means we're not pricing in retail margin to support Whole Foods and Target placement.\n\nIf you only need one category (just probiotic or just joint), the per-product pricing is closer to a wash — Native Pet's probiotic powder is ~$24 on subscription, PawBite Probiotic Chews is $26 on subscription. The bundle is where PawBite pulls ahead.",
      },
      {
        heading: 'Who should pick Native Pet',
        body: "Pick Native Pet if any of these matter to you: your dog doesn't eat chews and a powder mixed into food works better; you want to buy in person at Whole Foods or Target instead of waiting for shipping; you want a brand that also sells bone broths, mushroom blends, and seasonal toppers so you can consolidate your supplement and food-additive purchasing; you specifically prefer whole-food ingredients; or you trust the founding-vet story and that's the primary credibility signal you weight.\n\nNative Pet is one of the brands we recommend to friends when chews don't work for their dog. The category benefits from having multiple credible options, and Native Pet is genuinely one of them.",
      },
    ],
    recommendsProduct: 'daily-duo',
    faqs: [
      {
        question: 'Is Native Pet a good brand?',
        answer:
          "Yes. Native Pet is one of the more credible premium-natural dog supplement brands in the US. It's vet-co-founded, stocked at Whole Foods and Target Premium Pet, and the formulations are honest about what they contain. Its powders and chews offer different formats from PawBite's soft-chew range.",
      },
      {
        question: "How does PawBite's probiotic compare to Native Pet's probiotic powder?",
        answer:
          'PawBite Probiotic Chews list 2.5 billion CFU per 2.5 g chew; Native Pet is a powder at around 2 billion CFU per serving. Both name microorganisms on the label. The formats and serving instructions differ, and the CFU totals alone do not establish faster results or superior effectiveness.',
      },
      {
        question: "How does PawBite Joint + Mobility Chews compare to Native Pet's joint chew?",
        answer:
          "PawBite Joint + Mobility Chews list 250 mg of glucosamine HCl, 125 mg of chondroitin sulfate, 125 mg of MSM, 125 mg of green-lipped mussel, and 50 mg of turmeric extract per 2.5 g chew. Native Pet's joint chew uses 300 mg of glucosamine and skips chondroitin in favor of green-lipped mussel as the joint nutrient source. These are different formulations; ingredient amounts alone do not establish equivalent effects.",
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
          'Yes — Native Pet was co-founded with Dr. Mondrian Contreras, DVM, who is involved in formulation. PawBite veterinary review is pending.',
      },
      {
        question: "Does Native Pet do bone broth and PawBite doesn't?",
        answer:
          'Correct. Native Pet sells freeze-dried bone broth as a food topper, and PawBite does not. PawBite offers Probiotic Chews, Joint + Mobility Chews, and Calming Chews. If you want a single brand for both supplements and food additives, Native Pet covers more ground.',
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
    tldr: "Zesty Paws is the broadest mass-market dog supplement brand on the market — they sell well over a hundred SKUs, they're B-Corp certified, they're stocked everywhere from Chewy to Petco to Costco, and the top-selling products have hundreds of thousands of positive reviews. If you want a one-stop wellness shop at Costco prices, Zesty Paws is a defensible pick. PawBite has three soft-chew products: Probiotic Chews, Joint + Mobility Chews, and Calming Chews, with amounts listed for each active ingredient.",
    byline: {
      author: 'PawBite editorial team',
      publishedDate: '2026-02-28',
      updatedDate: '2026-10-28',
    },
    comparisonRows: [
      {
        feature: 'Probiotic CFU per chew (top probiotic SKU)',
        pawbite: '2.5 billion',
        competitor: '3 billion (Probiotic Bites)',
      },
      {
        feature: 'Probiotic strains named',
        pawbite: '5 (named at species level)',
        competitor: '6 (named at species level, not strain ID)',
      },
      {
        feature: 'Number of SKUs in the line',
        pawbite: '3 chews (probiotic, joint, calming), plus Daily Duo bundle',
        competitor: '100+',
      },
      {
        feature: 'B-Corp certified',
        pawbite: 'No',
        competitor: 'Yes',
      },
      {
        feature: 'NASC Quality Seal',
        pawbite: 'Not currently claimed',
        competitor: 'Yes',
      },
      {
        feature: 'Joint chew glucosamine',
        pawbite: '250 mg per chew',
        competitor: '250 mg (Mobility Bites)',
      },
      {
        feature: 'Joint chew chondroitin',
        pawbite: '125 mg per chew',
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
        pawbite: 'Not confirmed by current label',
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
      'PawBite may suit owners who prefer a focused range and direct purchasing. Probiotic Chews list 2.5 billion CFU per chew across five named microorganisms. Joint + Mobility Chews list 250 mg of glucosamine HCl and 125 mg of chondroitin sulfate per chew. Zesty Paws Probiotic Bites list 3 billion CFU per chew, and Mobility Bites list 250 mg of glucosamine and 200 mg of chondroitin. The formulas differ, and these quantities do not establish that one product works better.',
    sections: [
      {
        heading: 'What Zesty Paws does well',
        body: "Zesty Paws is the closest thing the dog supplement industry has to a mass-market multi-category brand. They sell over 100 SKUs, they're carried at every major pet retailer in the US (Chewy, Amazon, Petco, PetSmart, Target, Costco), and the volume drives prices down meaningfully — a 90-count jar of Zesty Paws Probiotic Bites on Amazon Subscribe & Save during a promo cycle can land under $20.\n\nThe brand also has real third-party credentials. Zesty Paws is B-Corp certified — a meaningful signal about supply chain and labor practices that very few supplement brands have earned. They carry the National Animal Supplement Council (NASC) Quality Seal on most SKUs, which requires annual facility audits, adverse event reporting, and ingredient-specific risk reviews. Both of those are credible signals that PawBite has not yet earned (PawBite does not currently claim these certifications).\n\nZesty Paws Probiotic Bites list 3 billion CFU per chew. Mobility Bites list 250 mg of glucosamine and 200 mg of chondroitin. PawBite Probiotic Chews list 2.5 billion CFU per chew; Joint + Mobility Chews list 250 mg of glucosamine HCl and 125 mg of chondroitin sulfate per chew. Compare the full formulas and directions rather than treating ingredient totals as a measure of effectiveness.",
      },
      {
        heading: 'Where PawBite is different',
        body: "PawBite offers three soft-chew formulas through its direct site.\n\nProbiotic Chews list a minimum of 2.5 billion CFU per chew across Bacillus coagulans, Bifidobacterium animalis, Lactobacillus acidophilus, Lactobacillus plantarum, and Lactobacillus rhamnosus, each at 500 million CFU. Joint + Mobility Chews list 250 mg of glucosamine HCl, 125 mg each of chondroitin sulfate, MSM, and green-lipped mussel, and 50 mg of turmeric extract. Calming Chews contain 75 mg of ashwagandha root extract, 50 mg of L-theanine, and 50 mg of chamomile extract. Calming Chews do not contain Bacillus coagulans.\n\nThe label descriptions are For dogs' gut wellness for Probiotic Chews, Support your dog's active lifestyle for Joint + Mobility Chews, and For dogs during busy, noisy days for Calming Chews. The Daily Duo bundle combines Probiotic Chews and Joint + Mobility Chews at a 32% discount.\n\nWe don't sell multivitamins, dental chews, or skin-and-coat treats. Distribution is direct only, with a 90-day guarantee.",
      },
      {
        heading: 'On price and what you pay for',
        body: "Zesty Paws is cheaper per month on the probiotic side — $16–22 on Amazon Subscribe & Save versus PawBite's $26. The formulas have different CFU totals: Zesty Paws lists 3 billion per chew and PawBite lists 2.5 billion per chew.\n\nZesty Paws Mobility Bites are around $22 a month; PawBite Joint + Mobility Chews are $30 on subscription. Both list 250 mg of glucosamine per chew, while their chondroitin amounts differ.\n\nPawBite's Daily Duo bundle is $47.60 per month. Compare the number of chews and each product's daily directions when assessing cost; these listed ingredient amounts do not establish a PawBite dose-adjusted price or efficacy advantage.",
      },
      {
        heading: 'On certification and testing',
        body: "Zesty Paws holds two third-party credentials PawBite does not yet hold: NASC Quality Seal and B-Corp certification. Both are meaningful.\n\nThe NASC Quality Seal requires participating brands to undergo a biennial third-party facility audit, maintain an adverse event reporting system, follow specific labeling and quality guidelines, and submit to ingredient-by-ingredient risk reviews. It's the most credible quality seal in the animal supplement industry. PawBite does not currently claim an NASC Quality Seal.\n\nB-Corp certification covers governance, workers, community, environment, and customers. It's harder to earn than people assume — most brands that claim sustainability values don't pursue it because the audit is genuinely demanding. Zesty Paws is one of the few US dog supplement brands to hold it. PawBite is not currently pursuing B-Corp; if that's an explicit deal-breaker for you, Zesty Paws is the better fit on that axis alone.\n\nZesty Paws publishes or provides third-party COAs covering CFU verification (where applicable), heavy metals, and microbial contamination panels, and manufactures in cGMP-certified US facilities. PawBite's label states Made in China and Made in a GMP-certified facility. PawBite's current label does not establish batch-test results or a CFU guarantee through expiration.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    faqs: [
      {
        question: 'Is Zesty Paws a good brand?',
        answer:
          "Yes. Zesty Paws is one of the most credible mass-market dog supplement brands in the US. They're B-Corp certified, NASC-sealed, third-party tested, and stocked at every major retailer. Its broad range and retail availability offer different purchasing options from PawBite's direct soft-chew range.",
      },
      {
        question: 'How does PawBite Probiotic Chews compare to Zesty Paws Probiotic Bites?',
        answer:
          'PawBite Probiotic Chews list 2.5 billion CFU per chew across five named microorganisms at 500 million CFU each. Zesty Paws Probiotic Bites have 3 billion CFU per chew across six strains, listed at species level rather than by clinical strain ID. Both include prebiotics. PawBite is $26/month on subscription; Zesty Paws is $16–22/month on Amazon Subscribe & Save depending on promo cycle.',
      },
      {
        question: 'How does PawBite Joint + Mobility Chews compare to Zesty Paws Mobility Bites?',
        answer:
          'PawBite Joint + Mobility Chews list 250 mg of glucosamine HCl, 125 mg of chondroitin sulfate, 125 mg of MSM, 125 mg of green-lipped mussel, and 50 mg of turmeric extract per 2.5 g chew. Zesty Paws Mobility Bites list 250 mg of glucosamine and 200 mg of chondroitin. Compare the full label and daily directions; ingredient quantities alone do not establish superior effectiveness.',
      },
      {
        question: 'Is Zesty Paws cheaper than PawBite?',
        answer:
          'On sticker price, yes — Zesty Paws on Amazon Subscribe & Save runs $5–10 less per month per SKU than PawBite direct. PawBite Daily Duo is $47.60 per month on subscription. Compare serving instructions and package size; the current formulas do not support a blanket claim that PawBite has higher per-active doses or a better dose-adjusted price.',
      },
      {
        question: 'Is Zesty Paws B-Corp certified?',
        answer:
          'Yes. Zesty Paws is one of the few US dog supplement brands to hold B-Corp certification, which covers governance, workers, community, environment, and customer practices. PawBite is not currently B-Corp certified. If B-Corp status is an explicit purchasing criterion for you, Zesty Paws wins on that axis.',
      },
      {
        question: 'Does Zesty Paws have an NASC Quality Seal?',
        answer:
          'Yes. The National Animal Supplement Council Quality Seal is the most credible third-party quality program in the animal supplement category. Zesty Paws carries it on most SKUs. PawBite does not currently claim an NASC Quality Seal.',
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
    tldr: 'Cosequin is the longest-established canine joint supplement and has decades of veterinarian recommendations and clinical trial data behind it. If your vet has already prescribed it and your dog is responding well, continuity matters. PawBite Joint + Mobility Chews have a different formula: 250 mg of glucosamine HCl, 125 mg of chondroitin sulfate, 125 mg of MSM, 125 mg of green-lipped mussel, and 50 mg of turmeric extract per 2.5 g chew. The products should not be treated as dose-equivalent.',
    byline: {
      author: 'PawBite editorial team',
      publishedDate: '2026-03-07',
      updatedDate: '2026-10-28',
    },
    comparisonRows: [
      {
        feature: 'Glucosamine HCl per serving',
        pawbite: '250 mg per 2.5 g chew',
        competitor: '500 mg (Cosequin DS)',
      },
      {
        feature: 'Chondroitin sulfate per serving',
        pawbite: '125 mg per 2.5 g chew',
        competitor: '400 mg (Cosequin DS)',
      },
      {
        feature: 'MSM included',
        pawbite: 'Yes (125 mg per chew)',
        competitor: 'Only in Cosequin DS Plus MSM SKU',
      },
      {
        feature: 'Green-lipped mussel',
        pawbite: 'Yes (125 mg per chew)',
        competitor: 'No',
      },
      {
        feature: 'Turmeric / curcumin',
        pawbite: 'Turmeric extract, 50 mg per chew',
        competitor: 'No',
      },
      {
        feature: 'Hyaluronic acid',
        pawbite: 'Not included',
        competitor: 'No',
      },
      {
        feature: 'Omega-3 (EPA + DHA)',
        pawbite: 'No EPA + DHA amount stated on label',
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
        pawbite: 'No finished-product clinical trial evidence established',
        competitor: 'Decades of brand-specific clinical trial data',
      },
    ],
    whenCompetitorMakesSense:
      "Cosequin is the right pick when your vet has specifically prescribed it. The brand has more product-specific clinical trial data than any other canine joint supplement on the market — multiple peer-reviewed trials going back to the 1990s — and it's the formulation most veterinary teaching hospitals reach for first. If your dog has been on Cosequin for years and is responding well, there's no reason to switch. Cosequin is also the safer choice in cases where vet-prescribed continuity matters — post-orthopedic-surgery rehabilitation, dogs on complex medication regimens, or owners who want a supplement their vet has personally validated in their clinic.",
    whenPawbiteMakesSense:
      "PawBite Joint + Mobility Chews may suit owners looking for a duck-flavored soft chew with declared ingredient amounts. Each 2.5 g chew lists 250 mg of glucosamine HCl, 125 mg each of chondroitin sulfate, MSM, and green-lipped mussel, and 50 mg of turmeric extract. The formula does not contain hyaluronic acid or salmon oil. It differs from Cosequin DS and should not be presented as matching Cosequin's dosing or clinical evidence. Ask your veterinarian before replacing a product in an existing care plan.",
    sections: [
      {
        heading: 'What Cosequin does well',
        body: "Cosequin (made by Nutramax Laboratories) is the longest-established canine joint supplement in the US and has earned its position as the #1 veterinarian-recommended joint brand. The dosing is right — Cosequin DS uses 500 mg glucosamine HCl and 400 mg chondroitin sulfate, which is the combination used in the original arthritis trial data and remains the benchmark dose for the category.\n\nNutramax has invested in product-specific clinical research in a way that almost no other supplement brand has matched. Cosequin and its sister product Dasuquin have been studied in placebo-controlled trials in dogs with osteoarthritis (McCarthy et al. 2007; D'Altilio et al. 2007; and others), with results that show improvements in lameness, pain scores, and weight-bearing on force plate analysis. That body of evidence is genuinely rare in the supplement category.\n\nThe brand also has distribution through vet clinics and through Chewy/Amazon/PetSmart, which means continuity of supply is reliable and your vet can dispense it directly if that's the channel you prefer. If your vet has already recommended Cosequin, sticking with it is a defensible default — you're paying a brand premium, but you're paying it for a real evidence base.",
      },
      {
        heading: 'Where PawBite is different',
        body: "PawBite Joint + Mobility Chews list 250 mg of glucosamine HCl, 125 mg of chondroitin sulfate, 125 mg of MSM, 125 mg of green-lipped mussel, and 50 mg of turmeric extract per 2.5 g chew. These are not the same declared quantities as Cosequin DS.\n\nThe PawBite formula does not contain hyaluronic acid or salmon oil. It is duck-flavored and contains shellfish (green-lipped mussel), duck, chicken, and chickpea. Each tube contains approximately 80 soft chews, with a net weight of 200 g (7.05 oz). Its label description is Support your dog's active lifestyle.\n\nPawBite's current label does not establish finished-product clinical efficacy. Ingredient research does not establish that the finished chew matches the effects of Cosequin or another product. A veterinarian should compare both labels before changing an existing care plan.",
      },
      {
        heading: 'On price',
        body: "Cosequin DS for medium-large dogs typically runs $35–45 per month at the standard daily dose, depending on whether you buy at Chewy Autoship, Amazon, PetSmart, or through your vet. Cosequin DS Plus MSM and Dasuquin Advanced run $40–55 and $55–75 per month respectively.\n\nPawBite Joint + Mobility Chews are $38 retail and $30 on Subscribe & Save. The Daily Duo bundle is $47.60 on subscription and includes Joint + Mobility Chews and Probiotic Chews. The products' formulas and serving instructions differ, so these prices do not establish equivalent dosing or a cost advantage for equivalent treatment.\n\nNeither brand locks you in to a subscription you can't cancel. PawBite subscriptions cancel in one click from your account. Cosequin via Chewy Autoship is also self-serve cancel.",
      },
      {
        heading: 'Who should pick Cosequin',
        body: "Pick Cosequin if your vet has specifically prescribed it, your dog is mid-treatment for a diagnosed joint condition and continuity matters, or you specifically value product-level clinical trial data over a broader active-ingredient stack. Cosequin is also the right call if your dog has had an orthopedic surgery and the rehab plan includes a specific joint supplement your vet has used in their practice — switching brands during rehabilitation isn't a great time to introduce variables.\n\nCosequin is one of the few supplements in this entire category that has genuinely earned its veterinarian-recommended status. The brand premium reflects real evidence. We won't tell you to switch off it if it's working. PawBite Joint + Mobility Chews have a different formula and do not establish equivalent dosing or results.",
      },
    ],
    recommendsProduct: 'hip-and-joint',
    faqs: [
      {
        question: 'Is Cosequin the best joint supplement for dogs?',
        answer:
          "It's the most clinically studied at the product level, which is a meaningful credential. Whether it's the best fit for your specific dog depends on what you're optimizing for. If you want product-specific trial evidence and your vet has recommended it, Cosequin is hard to beat. PawBite Joint + Mobility Chews offer a different formula and should not be assumed to provide equivalent effects.",
      },
      {
        question: 'How does PawBite Joint + Mobility Chews compare to Cosequin DS?',
        answer:
          'PawBite Joint + Mobility Chews list 250 mg of glucosamine HCl, 125 mg of chondroitin sulfate, 125 mg of MSM, 125 mg of green-lipped mussel, and 50 mg of turmeric extract per 2.5 g chew. Cosequin DS lists 500 mg of glucosamine HCl and 400 mg of chondroitin sulfate per serving. These quantities and formulas differ; PawBite does not match that declared dosing.',
      },
      {
        question: 'Is PawBite cheaper than Cosequin?',
        answer:
          'PawBite Joint + Mobility Chews are $30 on subscription. Cosequin DS runs $35–45/month, Cosequin DS Plus MSM runs $40–55/month, and Dasuquin Advanced runs $55–75/month. Package size, daily directions, and formulas differ, so these figures should not be treated as prices for equivalent doses or outcomes.',
      },
      {
        question: 'Should I switch from Cosequin to PawBite if my dog is doing well on Cosequin?',
        answer:
          "If your dog is responding well to Cosequin, especially in a post-surgical rehab or vet-managed arthritis case, we wouldn't push you to switch. Continuity matters in chronic care. PawBite Joint + Mobility Chews have different ingredient amounts. Ask your veterinarian before changing a product used in a treatment plan.",
      },
      {
        question: 'Does PawBite have clinical trials like Cosequin does?',
        answer:
          "PawBite's current label does not establish finished-product clinical efficacy. Research on individual ingredients does not establish equivalent effects for Joint + Mobility Chews. Cosequin has product-specific trial evidence. Discuss the relevance of that evidence and both formulas with your veterinarian.",
      },
      {
        question:
          'Is PawBite Joint + Mobility Chews safe to give with a vet-prescribed NSAID like Carprofen?',
        answer:
          'Ask your prescribing veterinarian before combining Joint + Mobility Chews with an NSAID or any other medicine. A supplement can still have adverse effects or interactions. Do not reduce or stop prescribed pain medication because you have added a supplement.',
      },
      {
        question: 'What flavor is PawBite Joint + Mobility Chews? Cosequin comes in chicken.',
        answer:
          'PawBite Joint + Mobility Chews are duck-flavored, but the formula also contains chicken fat. The label declares shellfish (green-lipped mussel), duck, chicken, and chickpea. It should not be treated as chicken-free. Cosequin offers chicken, tuna, and unflavored capsule SKUs depending on which product line you pick.',
      },
      {
        question: 'Can I switch from Cosequin to PawBite without a gap?',
        answer:
          'Ask your veterinarian to compare the formulas and plan the change, especially if Cosequin is part of an arthritis care plan. Do not change prescribed pain treatment when switching supplements.',
      },
      {
        question: 'Is one safer than the other?',
        answer:
          'Safety depends on the full formula, dose, health conditions, and other medicines your dog takes. Ingredient overlap does not establish equal safety. Ask your veterinarian to review the labels.',
      },
      {
        question: 'Does Cosequin work better because it costs more?',
        answer:
          'Price alone does not establish effectiveness. Compare the exact formulation, serving instructions, and evidence for the finished product, with advice from your veterinarian.',
      },
      {
        question: 'How long until either works?',
        answer:
          'There is no guaranteed response time. Agree on a monitoring and review plan with your veterinarian. Pain or worsening mobility needs assessment, not a longer supplement trial.',
      },
      {
        question: 'Can I give both?',
        answer:
          'Combining products may duplicate ingredients and increase the total dose. Have your veterinarian review both labels before using them together.',
      },
    ],
  },
];

export const vsPageBySlug = (slug: string): VsPage | undefined =>
  vsPages.find((v) => v.slug === slug);
export const vsPageSlugs = (): string[] => vsPages.map((v) => v.slug);
