import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type BreedSize = 'small' | 'medium' | 'large' | 'giant';

export type BreedPage = {
  slug: string;
  breedName: string;
  size: BreedSize;
  weightRange: string;
  lifespanRange: string;
  tldr: string;
  commonHealthConcerns: string[];
  byline: ContentByline;
  sections: ContentSection[];
  recommendsProduct: ProductRecommendation;
  reasonForRecommendation: string;
  dosingNote: string;
  faqs: ContentFAQ[];
};

const standardByline: ContentByline = {
  author: 'PawBite editorial team',
  reviewedBy: 'Dr. M. Hayes, DVM',
  publishedDate: '2026-04-01',
  updatedDate: '2026-10-28',
};

/**
 * Filled in by Phase 5 content writer agent (breeds).
 * 25 entries total.
 */
export const breedPages: BreedPage[] = [
  {
    slug: 'labrador-retriever',
    breedName: 'Labrador Retriever',
    size: 'large',
    weightRange: '55-80 lbs',
    lifespanRange: '10-12 years',
    tldr: 'Labrador Retrievers are large, food-motivated, and prone to both hip dysplasia and food-sensitivity-related GI upset. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Cruciate ligament tears',
      'Food-sensitivity-related loose stool',
      'Obesity-driven joint wear',
      'Gas and bloating from fast eating',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Labrador Retrievers',
        body: 'The Lab is the most-diagnosed breed for hip dysplasia in the United States. Their build, weight, and famous love of food put structural strain on the hips and elbows that shows up as stiffness by middle age. They also carry one of the higher rates of cruciate ligament rupture among large breeds.\n\nOn the gut side, Labs are notorious for fast eating, food motivation that bypasses self-control, and sensitivity to protein changes. Loose stool when switching kibble, gas after a stolen meal, and intermittent diarrhea are routine vet complaints. Their digestive tract is not delicate, but it is busy.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        heading: 'Diet considerations',
        body: 'Keep your Lab lean. Every pound of body weight above ideal is roughly four pounds of pressure across each hip joint. The single biggest favor you can do their joints is portion control. PawBite chews do not replace an individualized weight-management plan.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'When should I start joint supplements for my Lab?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Lab has chronic loose stool. Is a probiotic enough?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness and list 2.5 billion CFU per 2.5 g chew. The current label does not establish a reduction in gas or a time to firmer stool. Persistent symptoms need veterinary assessment. If diarrhea is severe, bloody, or longer than 48 hours, see your vet to rule out parasites or pancreatitis first.",
      },
      {
        question: 'Can I give Daily Duo to a Lab puppy?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Lab is already on Carprofen. Should I still give Joint + Mobility Chews?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Lab is overweight. Will supplements help his joints?',
        answer:
          "Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian. Work with your veterinarian on an appropriate weight-management plan.",
      },
    ],
  },
  {
    slug: 'golden-retriever',
    breedName: 'Golden Retriever',
    size: 'large',
    weightRange: '55-75 lbs',
    lifespanRange: '10-12 years',
    tldr: 'Golden Retrievers are large, joint-vulnerable, and live with one of the higher rates of food allergy and skin sensitivity of any popular breed. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Food allergies and atopic skin issues',
      'Ear infections tied to gut and immune health',
      'Cruciate ligament injury',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Golden Retrievers',
        body: 'Goldens carry a heavy joint burden. Hip and elbow dysplasia rates are among the highest of any breed, and torn cruciate ligaments are common past middle age. By age 8, most Goldens show some measurable joint stiffness, even the ones still happy to fetch.\n\nThe other half of the Golden story is skin and coat. Food sensitivities, environmental allergies, and recurring ear infections are constant themes in the breed. A lot of that traces back to gut and immune health, which is why probiotics belong in the picture and not just on a joint supplement.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Golden has itchy skin. Can a probiotic really help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'When should a Golden start hip and joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Golden gets recurring ear infections. Is this related?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'Can my Golden take Joint + Mobility Chews with their thyroid medication?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My senior Golden is slowing down. Is it too late to start?',
        answer:
          "Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
    ],
  },
  {
    slug: 'french-bulldog',
    breedName: 'French Bulldog',
    size: 'small',
    weightRange: '20-28 lbs',
    lifespanRange: '10-12 years',
    tldr: 'French Bulldogs are small, brachycephalic, and famously sensitive in the gut and skin. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Food allergies and dietary sensitivity',
      'Chronic loose stool and flatulence',
      'Skin fold dermatitis tied to immune health',
      'Intervertebral disc disease (IVDD)',
      'Hip dysplasia in some lines',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for French Bulldogs',
        body: 'Frenchies have one of the most reactive digestive systems of any popular breed. Chronic loose stool, intermittent diarrhea, food allergies, and aggressive flatulence are the defining quality-of-life complaints from owners. A surprising amount of skin and ear trouble traces back to the same place.\n\nOn the structural side, the breed carries elevated IVDD risk because of their short backs and stocky build. Some lines also show up with hip dysplasia, even though Frenchies are not a true large breed. Their lifespan is decent for the size, so long-term supplementation pays off.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        heading: 'Diet considerations',
        body: 'A lot of Frenchie GI trouble is novel-protein responsive. If chicken-based food causes flares, talk to your vet about a duck, fish, or limited-ingredient option. Both Probiotic Chews and Joint + Mobility Chews list chicken among their allergens; the duck flavor is not a chicken-free alternative.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Frenchie has terrible gas. Will a probiotic fix it?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness and list 2.5 billion CFU per 2.5 g chew. The current label does not establish a reduction in gas or a time to firmer stool. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My Frenchie has chronic loose stool. Is it food allergies?',
        answer:
          'A response to a probiotic is not a diagnostic test for a food allergy. Discuss persistent loose stool and any elimination diet with your veterinarian. Probiotic Chews contain chicken and chickpea; Joint + Mobility Chews also contain chicken.',
      },
      {
        question: 'Are PawBite chews safe for brachycephalic dogs?',
        answer:
          'The products are soft chews, 2.5 g each. That does not establish suitability for an individual dog with breathing, swallowing or dental difficulties. Ask your veterinarian about an appropriate form and follow the product directions.',
      },
      {
        question: 'My Frenchie has IVDD. Should I avoid joint chews?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'Can I give a chicken-flavored probiotic to a chicken-allergic Frenchie?',
        answer:
          "Probiotic Chews contain chicken and chickpea. Joint + Mobility Chews contain shellfish (green-lipped mussel), duck, chicken and chickpea, so the duck flavor is not a chicken-free alternative. Check the complete ingredient lists against your dog's known allergens with your veterinarian.",
      },
    ],
  },
  {
    slug: 'poodle',
    breedName: 'Poodle',
    size: 'medium',
    weightRange: '40-70 lbs (Standard), 15-20 lbs (Miniature), under 10 lbs (Toy)',
    lifespanRange: '12-15 years',
    tldr: 'Poodles are long-lived, intelligent, and generally healthy, but Standards carry real hip and bloat risk while Miniatures and Toys lean GI-sensitive. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip dysplasia (especially Standards)',
      'Bloat and gastric torsion (Standards)',
      'Food and environmental allergies',
      'Patellar luxation (Toys and Miniatures)',
      'Senior cognitive and joint changes',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Poodles',
        body: 'The breed runs three sizes with different problems. Standard Poodles deal with hip dysplasia and a serious bloat risk because of their deep chests. Miniatures and Toys avoid the big joint issues but pick up patellar luxation and dental crowding. All three sizes show up with food sensitivities and environmental allergies more often than the average breed.\n\nPoodles are also one of the longest-lived popular breeds, especially the smaller sizes. That long timeline means daily supplementation pays off more than it does for shorter-lived breeds. Senior cognitive changes and gradual mobility loss are the main quality-of-life issues in old Poodles.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'Does breed size change which supplement I should use?',
        answer:
          "Choose a product using the individual dog's needs, ingredients, allergens and label directions, rather than breed alone. Probiotic Chews are labeled for dogs' gut wellness; Joint + Mobility Chews are labeled to support your dog's active lifestyle. Breed or activity level alone does not establish a need to combine them.",
      },
      {
        question: 'My Standard Poodle has a deep chest. Should I worry about bloat?',
        answer:
          'Yes, every Standard Poodle owner should know the signs of bloat. Probiotic Chews are not intended to prevent bloat. Feed multiple small meals, avoid heavy exercise right after eating, and learn the symptoms.',
      },
      {
        question: 'My Toy Poodle is skipping on her back leg. Is that patellar luxation?',
        answer:
          "Get a veterinary diagnosis for the change in gait. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'Poodles live a long time. Are these chews safe for daily long-term use?',
        answer:
          "The labels direct daily use, but do not establish suitability for every senior dog or for combined use of multiple products. Review the individual product's ingredients and cautions with your veterinarian. If your dog's condition worsens or does not improve, stop use and consult your veterinarian.",
      },
      {
        question: 'My Poodle has allergies. Is the chew safe?',
        answer:
          "Probiotic Chews contain chicken and chickpea. Joint + Mobility Chews contain shellfish (green-lipped mussel), duck, chicken and chickpea, so the duck flavor is not a chicken-free alternative. Check the complete ingredient lists against your dog's known allergens with your veterinarian.",
      },
    ],
  },
  {
    slug: 'bulldog',
    breedName: 'Bulldog',
    size: 'medium',
    weightRange: '40-55 lbs',
    lifespanRange: '8-10 years',
    tldr: 'English Bulldogs combine the joint risk of a heavy stocky breed with the GI and skin sensitivity of a brachycephalic. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Chronic food allergies and skin issues',
      'Loose stool and flatulence',
      'Cruciate ligament tears',
      'Skin fold dermatitis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Bulldogs',
        body: 'The Bulldog is a structural challenge. Their build puts heavy load on the front end, and hip and elbow dysplasia rates are higher than average even though they are not a giant breed. Cruciate ligament tears are common, especially in dogs that carry extra weight.\n\nDigestively, Bulldogs are famously gassy, often with chronic loose stool and recurring food allergies. Skin fold dermatitis is its own well-known issue, and a lot of that traces back to gut and immune health. Their shorter average lifespan means the daily quality-of-life issues hit harder, sooner.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'Senior considerations',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Bulldog has constant gas. Will a probiotic actually help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness and list 2.5 billion CFU per 2.5 g chew. The current label does not establish a reduction in gas or a time to firmer stool. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'When should I start joint chews for a Bulldog?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Bulldog has chronic skin and ear problems. Can supplements help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My Bulldog has food allergies. Is the chew safe?',
        answer:
          "Probiotic Chews contain chicken and chickpea. Joint + Mobility Chews contain shellfish (green-lipped mussel), duck, chicken and chickpea, so the duck flavor is not a chicken-free alternative. Check the complete ingredient lists against your dog's known allergens with your veterinarian.",
      },
      {
        question:
          'My Bulldog has had cruciate surgery. Should he still take Joint + Mobility Chews?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
    ],
  },
  {
    slug: 'german-shepherd',
    breedName: 'German Shepherd',
    size: 'large',
    weightRange: '65-90 lbs',
    lifespanRange: '9-13 years',
    tldr: 'German Shepherds are one of the most joint-vulnerable popular breeds in the world, with elevated rates of hip dysplasia, degenerative myelopathy, and exocrine pancreatic insufficiency. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Degenerative myelopathy',
      'Exocrine pancreatic insufficiency',
      'Chronic loose stool and IBD',
      'Bloat and gastric torsion',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for German Shepherds',
        body: 'The Shepherd lives near the top of every hip dysplasia statistic. Their angulated rear and large frame mean joint wear starts early and progresses. Degenerative myelopathy, a slow spinal disease, is also overrepresented in the breed and changes how you think about senior care.\n\nOn the gut side, German Shepherds are famously sensitive. Chronic loose stool, IBD, and exocrine pancreatic insufficiency are diagnosed in this breed more often than almost any other large dog. The deep chest also means bloat is a constant background risk.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Shepherd has chronic diarrhea. Could it be EPI?',
        answer:
          'Possibly. Exocrine pancreatic insufficiency is overrepresented in German Shepherds. The diagnostic is a TLI blood test from your vet. If EPI is confirmed, your dog needs prescription pancreatic enzymes. Probiotic Chews are not intended to diagnose or treat EPI and do not replace the prescribed treatment.',
      },
      {
        question: 'When should I start joint supplements for a German Shepherd?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Shepherd has degenerative myelopathy. Will joint chews help?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Shepherd has a deep chest. Bloat risk?',
        answer:
          'Yes. Every deep-chested Shepherd owner should know the bloat symptoms. Probiotic Chews are not intended to prevent bloat. Feed smaller meals, avoid exercise around feeding, and learn the warning signs.',
      },
      {
        question: 'My working Shepherd is high-drive. Is daily supplementation still useful?',
        answer:
          "Choose a product using the individual dog's needs, ingredients, allergens and label directions, rather than breed alone. Probiotic Chews are labeled for dogs' gut wellness; Joint + Mobility Chews are labeled to support your dog's active lifestyle. Breed or activity level alone does not establish a need to combine them.",
      },
    ],
  },
  {
    slug: 'dachshund',
    breedName: 'Dachshund',
    size: 'small',
    weightRange: '11-32 lbs',
    lifespanRange: '12-16 years',
    tldr: 'Dachshunds are long-lived, long-spined, and famously back-vulnerable. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Intervertebral disc disease (IVDD)',
      'Patellar luxation',
      'Obesity-related joint strain',
      'Dental disease',
      'Anal gland issues',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Dachshunds',
        body: 'IVDD is the defining health risk of the breed. Their elongated spine puts disc material under constant load, and somewhere around 25 percent of Dachshunds will have a clinically significant disc episode in their lifetime. Patellar luxation is also common, and any extra weight makes both problems worse fast.\n\nThe rest of the Dachshund medical picture is comparatively gentle. Dental disease is common because of small jaws, and anal gland issues come up. Most Dachshunds live 12 to 16 years, which is a long timeline for supplements to do real work.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        heading: 'Diet considerations',
        body: 'Weight is everything for a Dachshund. Even half a pound of extra weight is a real load on the spine. The single most useful thing for IVDD prevention is portion control. Supplements support a healthy weight regimen, they do not replace it.',
      },
    ],
    recommendsProduct: 'hip-and-joint',
    reasonForRecommendation:
      "Joint + Mobility Chews: Support your dog's active lifestyle. Duck Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'Can supplements prevent IVDD?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Dachshund had an IVDD episode. What now?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Dachshund is overweight. What is the priority?',
        answer:
          'Weight management is the priority. Work with your veterinarian on portions and activity appropriate to your dog. Joint + Mobility Chews are not intended to treat a spinal or joint condition.',
      },
      {
        question: 'How do I dose Joint + Mobility Chews for a small Dachshund?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
      {
        question: 'Are PawBite chews safe for senior Dachshunds?',
        answer:
          "The labels direct daily use, but do not establish suitability for every senior dog or for combined use of multiple products. Review the individual product's ingredients and cautions with your veterinarian. If your dog's condition worsens or does not improve, stop use and consult your veterinarian.",
      },
    ],
  },
  {
    slug: 'beagle',
    breedName: 'Beagle',
    size: 'medium',
    weightRange: '20-30 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Beagles are food-motivated, long-lived, and prone to weight-driven joint problems and GI flares from eating things they should not. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Obesity-driven hip and joint wear',
      'Loose stool from scavenging',
      'Food allergies',
      'Ear infections tied to floppy ears',
      'Hypothyroidism',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Beagles',
        body: 'Beagles will eat what they find, which is the source of most of their GI problems. Loose stool, gas, and intermittent vomiting from kitchen counter raids are routine for the breed. They also pick up food allergies more often than the average mid-size dog, often manifesting as itchy skin and recurring ear infections.\n\nStructurally, Beagles are sound but vulnerable to weight gain. They are food-motivated to the point of self-harm, and extra pounds load the hips and back. A Beagle at the right weight stays mobile through old age. An overweight Beagle starts showing joint stiffness by 7 or 8.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Beagle eats anything off the floor. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish protection against dietary indiscretion or faster recovery after eating unsuitable food. Keep unsafe food and objects out of reach.",
      },
      {
        question: 'My Beagle is overweight. Should I start joint support now?',
        answer:
          "Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian. Work with your veterinarian on an appropriate weight-management plan.",
      },
      {
        question: 'My Beagle has chronic ear infections. Is this gut-related?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'Is the chew flavor a concern for a food-motivated Beagle?',
        answer:
          'Probiotic Chews are chicken flavored and Joint + Mobility Chews are duck flavored. The directions allow giving a chew by hand or with food; acceptance varies by dog. Keep the canister out of reach of children and pets.',
      },
      {
        question: 'Can a senior Beagle take both chews?',
        answer:
          "The labels direct daily use, but do not establish suitability for every senior dog or for combined use of multiple products. Review the individual product's ingredients and cautions with your veterinarian. If your dog's condition worsens or does not improve, stop use and consult your veterinarian.",
      },
    ],
  },
  {
    slug: 'rottweiler',
    breedName: 'Rottweiler',
    size: 'large',
    weightRange: '80-135 lbs',
    lifespanRange: '8-10 years',
    tldr: 'Rottweilers are giant, joint-vulnerable, and have one of the shortest lifespans of any popular breed. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Osteosarcoma risk',
      'Cruciate ligament injury',
      'Bloat and gastric torsion',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Rottweilers',
        body: 'Rotts carry a heavy joint load and live with elevated rates of hip and elbow dysplasia, cruciate ligament tears, and senior arthritis. Bloat is a real risk because of their deep chests. Osteosarcoma is also overrepresented in the breed, which is one of several reasons their average lifespan is shorter than other large breeds.\n\nGastrointestinally, Rotts are not as sensitive as some giant breeds, but loose stool from diet changes and stress is still routine. Bloat risk reduction includes managing fermentation gas and eating habits, which probiotics help with.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'When should I start joint chews for a Rottweiler?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Rott has a deep chest. Bloat risk?',
        answer:
          'Yes. Every Rottweiler owner should know the bloat signs and have an emergency vet plan. Probiotic Chews are not intended to prevent bloat. Feed smaller meals, avoid exercise around eating, learn the symptoms.',
      },
      {
        question: 'My Rott is post-cruciate-surgery. Should he take Joint + Mobility Chews?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Rott is on Carprofen for arthritis. Can he take Joint + Mobility Chews?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'How much chew does a giant Rottweiler need?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
    ],
  },
  {
    slug: 'pointer',
    breedName: 'Pointer',
    size: 'large',
    weightRange: '45-75 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Pointers are athletic, lean, and structurally one of the healthier large breeds. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip dysplasia (lower rate than other large breeds)',
      'Working-dog joint wear',
      'Hypothyroidism',
      'Mild food sensitivities',
      'Skin issues from environmental exposure',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Pointers',
        body: 'Pointers are athletic and lean, and their structural health is well above the large-breed average. Hip dysplasia rates exist but sit below most retrievers and shepherds. Their main joint risk comes from a working life: high-mileage running, jumping, and field work that loads cartilage over years.\n\nGastrointestinally, the breed is mostly steady. Some lines pick up mild food sensitivities or seasonal skin issues. Hypothyroidism is the most common endocrine issue and is unrelated to gut or joint supplementation.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Pointer is a working dog. Should he start joint support earlier?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Pointer is structurally sound. Does he need a probiotic?',
        answer:
          "Choose a product using the individual dog's needs, ingredients, allergens and label directions, rather than breed alone. Probiotic Chews are labeled for dogs' gut wellness; Joint + Mobility Chews are labeled to support your dog's active lifestyle. Breed or activity level alone does not establish a need to combine them.",
      },
      {
        question: 'My Pointer has seasonal skin flares. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'Are the chews safe to give before a hunting trip?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish prevention of travel-related stomach upset or a pre-trip treatment schedule. Use the individual product according to its label and discuss recurring symptoms with your veterinarian.",
      },
      {
        question: 'When should a senior Pointer start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'yorkshire-terrier',
    breedName: 'Yorkshire Terrier',
    size: 'small',
    weightRange: '4-7 lbs',
    lifespanRange: '13-16 years',
    tldr: 'Yorkies are tiny, long-lived, and famously gut-sensitive, with patellar luxation and dental disease as the other consistent issues. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Sensitive stomach and chronic diarrhea',
      'Hypoglycemia in toy-sized individuals',
      'Patellar luxation',
      'Dental disease',
      'Tracheal collapse',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Yorkshire Terriers',
        body: 'Yorkies have one of the most reactive digestive tracts of any small breed. Chronic loose stool, intermittent diarrhea, and food sensitivities are the most consistent owner complaints. Their small size also means tiny GI upsets become real problems fast, including dehydration and hypoglycemia in very small individuals.\n\nStructurally, patellar luxation is the most common orthopedic issue, and dental disease is essentially universal because of their small jaws. Tracheal collapse is another well-known issue in the breed. Yorkies typically live 13 to 16 years, which is a long window for daily supplementation to pay off.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Yorkie has chronic loose stool. Will a probiotic fix it?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness and list 2.5 billion CFU per 2.5 g chew. The current label does not establish a reduction in gas or a time to firmer stool. Persistent symptoms need veterinary assessment. If diarrhea is severe, bloody, or longer than 48 hours, see your vet first to rule out parasites, pancreatitis, or other acute causes.",
      },
      {
        question: 'How do I dose a 4 lb Yorkie?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
      {
        question: 'My Yorkie is skipping on her back leg. Is that patellar luxation?',
        answer:
          "Get a veterinary diagnosis for the change in gait. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'Are the chews safe for a senior Yorkie on medications?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Yorkie is picky. Will she eat the chew?',
        answer:
          'Probiotic Chews are chicken flavored and Joint + Mobility Chews are duck flavored. The directions allow giving a chew by hand or with food; acceptance varies by dog. Keep the canister out of reach of children and pets.',
      },
    ],
  },
  {
    slug: 'boxer',
    breedName: 'Boxer',
    size: 'large',
    weightRange: '55-80 lbs',
    lifespanRange: '10-12 years',
    tldr: 'Boxers are athletic, joint-vulnerable, and live with elevated rates of GI issues and chronic colitis. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip dysplasia and elbow dysplasia',
      'Chronic colitis (Boxer colitis)',
      'Cruciate ligament injury',
      'Cardiomyopathy (unrelated to supplements)',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Boxers',
        body: 'Boxers are a deceptively athletic large breed with a real joint load. Hip dysplasia, cruciate tears, and senior arthritis are routine. They are also one of the few breeds with a named GI condition: Boxer colitis, also called histiocytic ulcerative colitis, which is overrepresented in young Boxers and presents as chronic bloody mucus diarrhea.\n\nBoxer cardiomyopathy is the major heart issue in the breed and is genetic, not nutritional. Supplements do not address it, but they do not interfere with cardiac care either.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Boxer has chronic bloody diarrhea. Is this Boxer colitis?',
        answer:
          'Possibly. Histiocytic ulcerative colitis is overrepresented in young Boxers and presents exactly that way. It needs vet diagnosis and antibiotic treatment, not probiotics alone. Discuss any use of Probiotic Chews with the veterinarian managing the condition.',
      },
      {
        question: 'When should I start joint chews for a Boxer?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Boxer has heart disease. Can he take supplements?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Boxer is on antibiotics for colitis. Should I wait on the probiotic?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My senior Boxer is slowing down. Is it too late to start joint support?',
        answer:
          "Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
    ],
  },
  {
    slug: 'doodle',
    breedName: 'Doodle (Goldendoodle / Labradoodle)',
    size: 'large',
    weightRange: '45-90 lbs',
    lifespanRange: '10-15 years',
    tldr: 'Doodles inherit the joint risk of their retriever parent and the gut and skin sensitivity of their Poodle side. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Food allergies and atopic skin issues',
      'Ear infections',
      'Coat-related skin sensitivity',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Doodles',
        body: 'Doodles inherit from both parent breeds. The retriever side brings hip dysplasia, cruciate risk, and the broad joint vulnerability of any large dog. The Poodle side adds elevated rates of allergies, sensitive skin, and ear infections. Most Doodles end up with at least one issue from each column over the course of their lives.\n\nTheir wavy or curly coat traps moisture and debris, which contributes to skin and ear issues. Coat care is meaningful for skin health in this breed group, and so is gut and immune support from a daily probiotic.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Doodle has constant ear infections. Is this gut-related?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'When should I start joint chews for a Doodle?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Doodle has itchy skin. Will supplements help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'Is the chew safe for a Doodle with a chicken allergy?',
        answer:
          "Probiotic Chews contain chicken and chickpea. Joint + Mobility Chews contain shellfish (green-lipped mussel), duck, chicken and chickpea, so the duck flavor is not a chicken-free alternative. Check the complete ingredient lists against your dog's known allergens with your veterinarian.",
      },
      {
        question: 'My Doodle is a puppy. When can I start supplements?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'great-dane',
    breedName: 'Great Dane',
    size: 'giant',
    weightRange: '110-175 lbs',
    lifespanRange: '7-10 years',
    tldr: 'Great Danes are giant, short-lived, and live with severe joint load and bloat risk from day one. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Bloat and gastric torsion',
      'Dilated cardiomyopathy',
      'Wobbler syndrome (cervical spinal issues)',
      'Severe senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Great Danes',
        body: 'The Dane is one of the most structurally challenged breeds in the world. Their size means every joint takes massive load, and hip and elbow dysplasia rates are high. Wobbler syndrome, a cervical spinal condition, is also overrepresented and shows up as neck pain and rear-end weakness.\n\nBloat is the single biggest acute risk for the breed. Deep-chested giant breeds have the highest gastric dilatation and volvulus rates of any dog group, and Danes are at the top of the list. Dilated cardiomyopathy is the major heart issue and is largely genetic.\n\nAverage lifespan is 7 to 10 years, one of the shortest among popular breeds, which means daily quality-of-life support matters even more, not less.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'How much chew does a Great Dane need?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
      {
        question: 'When should I start joint support for a Dane?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Dane has a deep chest. Bloat risk?',
        answer:
          'Among the highest of any breed. Every Dane owner should know the bloat signs and have an emergency vet plan. Many Dane owners also do prophylactic gastropexy surgery. Probiotic Chews are not intended to prevent bloat.',
      },
      {
        question: 'My young Dane has wobbler syndrome. Will joint chews help?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Dane is 7 and slowing down. Is it too late?',
        answer:
          "Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
    ],
  },
  {
    slug: 'siberian-husky',
    breedName: 'Siberian Husky',
    size: 'large',
    weightRange: '35-60 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Huskies are athletic, long-lived for a working breed, and structurally healthier than most large dogs, with mild GI sensitivity and ophthalmic concerns as the main issues. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Mild food sensitivities',
      'Eye conditions (cataracts, corneal dystrophy)',
      'Hip dysplasia (lower than most large breeds)',
      'Hypothyroidism',
      'Zinc-responsive dermatosis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Siberian Huskies',
        body: 'Huskies are structurally one of the healthier large breeds. Hip dysplasia exists but at lower rates than retrievers or shepherds. Their main breed-specific issues are ophthalmic: juvenile cataracts and corneal dystrophy are overrepresented. Zinc-responsive dermatosis is another well-known issue.\n\nGastrointestinally, Huskies are mostly steady but can be picky and run mild food sensitivities. Their high-mileage working background means joint wear is a real factor for any Husky doing serious work, sledding, or skijoring, even if pet Huskies stay structurally sound longer than other large breeds.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Husky is picky. Will he eat the chew?',
        answer:
          'Probiotic Chews are chicken flavored and Joint + Mobility Chews are duck flavored. The directions allow giving a chew by hand or with food; acceptance varies by dog. Keep the canister out of reach of children and pets.',
      },
      {
        question: 'My working Husky runs a lot. Should I start joint support earlier?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'Are PawBite chews safe alongside thyroid medication?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Husky has bad shedding. Will a probiotic help his coat?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish a coat-shine benefit, reduced shedding or a time to results. Brushing and an appropriate diet remain part of routine coat care.",
      },
      {
        question: 'When should a senior Husky start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'australian-shepherd',
    breedName: 'Australian Shepherd',
    size: 'medium',
    weightRange: '40-65 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Aussies are athletic, work-driven, and structurally healthier than the average large breed, with hip dysplasia and food sensitivities as the consistent issues. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip dysplasia',
      'Food and environmental allergies',
      'MDR1 drug sensitivity (genetic)',
      'Working-dog joint wear',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Australian Shepherds',
        body: 'Aussies are athletic, sharp, and structurally healthier than the average large or near-large breed. Hip dysplasia exists in the breed but at lower rates than retrievers or shepherds. The single most important genetic issue is MDR1, a drug sensitivity that affects how Aussies respond to certain prescription medications. It does not affect supplement use.\n\nFood allergies and environmental atopic skin issues are common, especially in show and pet lines. Working Aussies tend to be structurally sound but accumulate joint wear from high-mileage herding and agility work.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Aussie has MDR1 sensitivity. Are PawBite chews safe?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Aussie has itchy skin. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My agility Aussie runs hard. When should joint support start?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Aussie has food allergies. Is the chew safe?',
        answer:
          "Probiotic Chews contain chicken and chickpea. Joint + Mobility Chews contain shellfish (green-lipped mussel), duck, chicken and chickpea, so the duck flavor is not a chicken-free alternative. Check the complete ingredient lists against your dog's known allergens with your veterinarian.",
      },
      {
        question: 'When should a senior Aussie start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'cavalier-king-charles-spaniel',
    breedName: 'Cavalier King Charles Spaniel',
    size: 'small',
    weightRange: '13-18 lbs',
    lifespanRange: '9-14 years',
    tldr: 'Cavaliers are small, affectionate, and live with two breed-defining conditions: mitral valve disease and syringomyelia. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Mitral valve disease (MVD)',
      'Syringomyelia',
      'Patellar luxation',
      'Mild food sensitivities',
      'Ear infections',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Cavaliers',
        body: 'Two conditions define the breed. Mitral valve disease, a progressive heart condition, affects most Cavaliers by middle age and is the most common cause of death in the breed. Syringomyelia, a neurological condition involving fluid pockets in the spinal cord, is also overrepresented and presents as head and neck pain.\n\nNeither condition is treated by nutritional supplements. Both need vet-directed care. The supportive supplement picture for Cavaliers is therefore about general wellness: gut, immune, skin, and joint health to support the dog through whatever else they are dealing with.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Cavalier has mitral valve disease. Are supplements safe?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Cavalier has syringomyelia. Will supplements help?',
        answer:
          "Follow your veterinarian's treatment or recovery plan. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'When should a Cavalier start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Cavalier has chronic ear infections. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'How do I dose Joint + Mobility Chews for a small Cavalier?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
    ],
  },
  {
    slug: 'mini-schnauzer',
    breedName: 'Miniature Schnauzer',
    size: 'small',
    weightRange: '11-20 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Mini Schnauzers are small, long-lived, and most known for pancreatitis risk and elevated triglycerides. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Pancreatitis',
      'Hyperlipidemia (elevated triglycerides)',
      'Bladder stones',
      'Diabetes',
      'Atopic skin issues',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Miniature Schnauzers',
        body: 'The defining health concern in the breed is pancreatitis. Mini Schnauzers are uniquely prone to high triglycerides, which is the major risk factor for pancreatitis flares. A low-fat diet is essentially mandatory in the breed, and any high-fat treat or table food can trigger an acute episode.\n\nBladder stones, diabetes, and skin issues are also overrepresented. Structurally, the breed is reasonably sound. They live 12 to 15 years on average, which is a long window for daily support.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'Diet considerations',
        body: 'Fat is the variable. Discuss any treats and supplements with your vet if your Mini Schnauzer has a pancreatitis history. The PawBite labels list crude fat at a minimum of 11%, which does not establish suitability for a prescribed low-fat diet. Every dog with diagnosed pancreatitis needs an individualized diet plan.',
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Mini Schnauzer has had pancreatitis. Are chews safe?',
        answer:
          'The labels list crude fat at a minimum of 11%; they do not establish that these chews are suitable for a pancreatitis diet. Show the full ingredient list and guaranteed analysis to your veterinarian before use.',
      },
      {
        question: 'My Mini Schnauzer has high triglycerides. Will supplements help?',
        answer:
          'Diet management is the main lever for triglycerides. The current Joint + Mobility Chews label does not list fish oil or establish a cardiovascular benefit. Discuss any supplement with your veterinarian as part of the prescribed diet plan.',
      },
      {
        question: 'My Mini Schnauzer has bladder stones. Is the chew safe?',
        answer:
          'Discuss the complete ingredient list and guaranteed analysis with your veterinarian, especially if your dog is on a prescription urinary diet. The current label does not provide an oxalate analysis or establish suitability for that diet.',
      },
      {
        question: 'When should a Mini Schnauzer start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Mini Schnauzer is itchy. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
    ],
  },
  {
    slug: 'shih-tzu',
    breedName: 'Shih Tzu',
    size: 'small',
    weightRange: '9-16 lbs',
    lifespanRange: '10-16 years',
    tldr: 'Shih Tzus are small, brachycephalic, and live with chronic skin, eye, and dental issues, plus moderate GI sensitivity. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Atopic skin and ear infections',
      'Brachycephalic airway syndrome',
      'Dental disease',
      'Patellar luxation',
      'Eye problems (corneal ulcers, dry eye)',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Shih Tzus',
        body: 'Shih Tzus carry the typical brachycephalic concerns: airway issues, dental crowding, and eye sensitivity from prominent eyes. Atopic skin disease and recurring ear infections are the most common chronic quality-of-life issues, and a lot of that traces back to gut and immune health.\n\nStructurally, the breed is mostly sound but patellar luxation is overrepresented. They live 10 to 16 years, which is a long window for daily support to pay off in skin and coat quality as well as joint preservation.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Shih Tzu has chronic skin issues. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My Shih Tzu has recurring ear infections. Is this gut-related?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'Is the chew safe for a brachycephalic Shih Tzu?',
        answer:
          'The products are soft chews, 2.5 g each. That does not establish suitability for an individual dog with breathing, swallowing or dental difficulties. Ask your veterinarian about an appropriate form and follow the product directions.',
      },
      {
        question: 'My Shih Tzu has dental disease. Should I still give chews?',
        answer:
          'The products are soft chews, 2.5 g each. That does not establish suitability for an individual dog with breathing, swallowing or dental difficulties. Ask your veterinarian about an appropriate form and follow the product directions.',
      },
      {
        question: 'When should a senior Shih Tzu start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'bernese-mountain-dog',
    breedName: 'Bernese Mountain Dog',
    size: 'giant',
    weightRange: '70-115 lbs',
    lifespanRange: '7-10 years',
    tldr: 'Berners are giant, gentle, and live with one of the shortest lifespans of any popular breed due to heavy cancer and joint risk. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Osteosarcoma and other cancers',
      'Cruciate ligament injury',
      'Bloat',
      'Severe senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Bernese Mountain Dogs',
        body: 'The Berner is one of the most heartbreaking breeds in terms of average lifespan, with elevated rates of multiple cancers driving the median to about 7 to 9 years. On the structural side, hip and elbow dysplasia rates are high, and cruciate tears are common past middle age.\n\nGastrointestinally, the breed is not famously sensitive, but the deep chest means bloat is a real background risk. Berners are gentle and slow-aging on the personality side, which can mask early joint stiffness from their owners.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'The Daily Duo pairs Probiotic Chews with Joint + Mobility Chews. Each can contains approximately 80 soft chews, 2.5 g each. Follow the directions for each product.',
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'When should I start joint support for a Berner?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Berner has cancer treatment scheduled. Can he take supplements?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Berner has a deep chest. Bloat risk?',
        answer:
          'Yes. Every Berner owner should know bloat signs and have an emergency vet plan. Probiotic Chews are not intended to prevent bloat.',
      },
      {
        question: 'How much chew does a Berner need?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
      {
        question: 'My senior Berner is slowing down. Is it too late?',
        answer:
          "Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
    ],
  },
  {
    slug: 'boston-terrier',
    breedName: 'Boston Terrier',
    size: 'small',
    weightRange: '12-25 lbs',
    lifespanRange: '11-15 years',
    tldr: 'Boston Terriers are small, brachycephalic, and live with chronic GI sensitivity, allergies, and eye issues. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Chronic flatulence and loose stool',
      'Brachycephalic airway syndrome',
      'Food and environmental allergies',
      'Patellar luxation',
      'Eye problems (corneal ulcers, cataracts)',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Boston Terriers',
        body: 'Bostons are one of the gassiest small breeds, and the joke is well-earned. Chronic flatulence, intermittent loose stool, and food sensitivities are the most consistent owner complaints. A meaningful share traces back to brachycephalic air swallowing, but a real share is microbial fermentation that responds well to probiotic support.\n\nStructurally, patellar luxation is the main orthopedic concern. Eye issues are common because of their prominent eyes. The breed lives 11 to 15 years on average, which is a long window for daily support.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Boston has terrible gas. Will a probiotic actually help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness and list 2.5 billion CFU per 2.5 g chew. The current label does not establish a reduction in gas or a time to firmer stool. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My Boston has chronic loose stool. Is it food allergies?',
        answer:
          'A response to a probiotic is not a diagnostic test for a food allergy. Discuss persistent loose stool and any elimination diet with your veterinarian. Probiotic Chews contain chicken and chickpea; Joint + Mobility Chews also contain chicken.',
      },
      {
        question: 'Are the chews safe for a brachycephalic Boston?',
        answer:
          'The products are soft chews, 2.5 g each. That does not establish suitability for an individual dog with breathing, swallowing or dental difficulties. Ask your veterinarian about an appropriate form and follow the product directions.',
      },
      {
        question: 'My Boston has allergies. Is the chew safe?',
        answer:
          "Probiotic Chews contain chicken and chickpea. Joint + Mobility Chews contain shellfish (green-lipped mussel), duck, chicken and chickpea, so the duck flavor is not a chicken-free alternative. Check the complete ingredient lists against your dog's known allergens with your veterinarian.",
      },
      {
        question: 'When should a senior Boston start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'pomeranian',
    breedName: 'Pomeranian',
    size: 'small',
    weightRange: '3-7 lbs',
    lifespanRange: '12-16 years',
    tldr: 'Pomeranians are tiny, long-lived, and most prone to dental disease, tracheal collapse, and patellar luxation. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Dental disease',
      'Tracheal collapse',
      'Patellar luxation',
      'Hypoglycemia in very small individuals',
      'Alopecia X (coat loss)',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Pomeranians',
        body: 'Poms are tiny and live a long time, often 12 to 16 years. Dental disease is universal because of their small jaws. Tracheal collapse is the major airway issue. Patellar luxation is the dominant orthopedic concern.\n\nGastrointestinally, the breed is generally steady but small body size means small GI upsets become real problems fast, including dehydration and hypoglycemia in very small individuals. Alopecia X, a hormonal coat loss issue, is overrepresented in the breed but is unrelated to gut or joint supplementation.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'How do I dose for a tiny 3 lb Pom?',
        answer:
          "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
      },
      {
        question: 'My Pom is skipping on her back leg. Is that patellar luxation?',
        answer:
          "Get a veterinary diagnosis for the change in gait. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Pom has tracheal collapse. Are chews safe?',
        answer:
          'The products are soft chews, 2.5 g each. That does not establish suitability for an individual dog with breathing, swallowing or dental difficulties. Ask your veterinarian about an appropriate form and follow the product directions.',
      },
      {
        question: 'My Pom has Alopecia X. Will supplements help his coat?',
        answer:
          'Alopecia X is hormonal and needs veterinary assessment. The current Probiotic Chews label does not establish treatment of hair loss or a coat-growth benefit.',
      },
      {
        question: 'When should a senior Pom start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'havanese',
    breedName: 'Havanese',
    size: 'small',
    weightRange: '7-13 lbs',
    lifespanRange: '13-16 years',
    tldr: 'Havanese are small, long-lived, and structurally healthier than many small breeds, with mild allergies and patellar luxation as the most common issues. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Patellar luxation',
      'Hip dysplasia (some lines)',
      'Mild food and environmental allergies',
      'Dental disease',
      'Cataracts',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Havanese',
        body: 'Havanese are one of the healthier small breeds. Patellar luxation is the dominant orthopedic concern, and some lines show hip dysplasia. Mild allergies and atopic skin issues come up but are typically less severe than in some other small breeds.\n\nDental disease is common because of small jaws. Cataracts are overrepresented in the breed. The Havanese lives 13 to 16 years on average, which is a long timeline for daily supplementation to do real work.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Havanese has a beautiful coat. Will a probiotic help maintain it?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish a coat-shine benefit, reduced shedding or a time to results. Brushing and an appropriate diet remain part of routine coat care.",
      },
      {
        question: 'My Havanese is skipping on her back leg. Patellar luxation?',
        answer:
          "Get a veterinary diagnosis for the change in gait. Joint + Mobility Chews are labeled to support your dog's active lifestyle. The current label does not establish treatment of a joint or spinal condition, prevention of cartilage damage or a time to improved mobility. Discuss the individual dog's needs with your veterinarian.",
      },
      {
        question: 'My Havanese has mild allergies. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'Is the chew safe for a senior Havanese on medications?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'When should a Havanese start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'shetland-sheepdog',
    breedName: 'Shetland Sheepdog',
    size: 'small',
    weightRange: '15-25 lbs',
    lifespanRange: '12-14 years',
    tldr: 'Shelties are small, athletic, and one of the healthier herding breeds, with MDR1 sensitivity and skin issues as the most common concerns. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'MDR1 drug sensitivity (genetic)',
      'Hip dysplasia (low rate)',
      'Skin and coat issues',
      'Hypothyroidism',
      'Collie eye anomaly',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Shetland Sheepdogs',
        body: 'Shelties are sharp, athletic, and structurally healthier than many small to mid-size breeds. Hip dysplasia rates exist but are low. The defining genetic issue is MDR1 drug sensitivity, which affects how Shelties respond to certain prescription medications but does not affect supplement use.\n\nSkin and coat issues come up, often tied to mild food sensitivities or environmental allergies. Hypothyroidism is the most common endocrine concern. Collie eye anomaly is a known ophthalmic issue in the breed.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Sheltie has MDR1 sensitivity. Are chews safe?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My Sheltie has itchy skin. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My agility Sheltie runs hard. When should joint support start?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'Are chews safe with thyroid medication?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'When should a senior Sheltie start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
  {
    slug: 'brittany',
    breedName: 'Brittany',
    size: 'medium',
    weightRange: '30-40 lbs',
    lifespanRange: '12-14 years',
    tldr: 'Brittanys are athletic, lean, and one of the healthiest popular breeds, with hip dysplasia and seizures as the most consistent issues. Choose products by their current ingredients, allergens and label directions.',
    commonHealthConcerns: [
      'Hip dysplasia (low to moderate rate)',
      'Epilepsy',
      'Hypothyroidism',
      'Working-dog joint wear',
      'Mild allergies in some lines',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Brittanys',
        body: 'Brittanys are one of the healthier popular breeds. Hip dysplasia exists at low to moderate rates, generally below most retrievers. Epilepsy is the most well-known breed-specific neurological issue. Hypothyroidism comes up. Most Brittanys live 12 to 14 years and stay structurally sound through middle age.\n\nGastrointestinally, the breed is mostly steady. Some lines pick up mild food sensitivities or seasonal skin issues. Working Brittanys, which the breed is bred for, accumulate joint wear from years of field work that shows up in middle age.',
      },
      {
        heading: 'PawBite label details',
        body: "Probiotic Chews are labeled: For dogs' gut wellness. Each 2.5 g chew lists five probiotic strains at 500 million CFU each, for a total of 2.5 billion CFU, plus inulin 100 mg and pumpkin powder 125 mg.\n\nJoint + Mobility Chews are labeled: Support your dog's active lifestyle. Each 2.5 g chew lists glucosamine HCl 250 mg, chondroitin sulfate 125 mg, MSM 125 mg, green-lipped mussel 125 mg and turmeric extract 50 mg. Review the complete ingredients, allergens and directions for the individual product. This product is not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: 'When to start',
        body: "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    dosingNote:
      "Use your dog's actual weight for the individual product: under 25 lb, 2 chews per day; 25 lb and over, 3 chews per day. For toy breeds under 10 lb, start with 1 chew daily and increase to 2. Give daily by hand or with food. Always provide fresh water.",
    faqs: [
      {
        question: 'My Brittany has epilepsy. Are supplements safe?',
        answer:
          "The current labels do not establish compatibility with your dog's medication or treatment. Show the complete active and inactive ingredient lists to the veterinarian managing that treatment before adding a product. Do not change prescribed medication based on a supplement claim.",
      },
      {
        question: 'My working Brittany hunts every weekend. When should joint support start?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
      {
        question: 'My Brittany has mild seasonal allergies. Will a probiotic help?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish treatment of skin or ear conditions, fewer allergy flares or a time to improvement. Persistent symptoms need veterinary assessment.",
      },
      {
        question: 'My Brittany travels with me. Will the probiotic help with travel stomach?',
        answer:
          "Probiotic Chews are labeled for dogs' gut wellness. The current label does not establish prevention of travel-related stomach upset or a pre-trip treatment schedule. Use the individual product according to its label and discuss recurring symptoms with your veterinarian.",
      },
      {
        question: 'When should a senior Brittany start joint support?',
        answer:
          "The current PawBite labels do not specify a minimum starting age or a breed-specific preventive schedule. Ask your veterinarian whether an individual product is appropriate for your dog, especially for puppies or dogs with diagnosed conditions or medications. Follow that product's label directions.",
      },
    ],
  },
];

export const breedPageBySlug = (slug: string): BreedPage | undefined =>
  breedPages.find((b) => b.slug === slug);
export const breedPageSlugs = (): string[] => breedPages.map((b) => b.slug);
