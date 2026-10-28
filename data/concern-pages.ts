import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type ConcernCause = {
  cause: string;
  explanation: string;
};

export type ConcernPage = {
  slug: string;
  concernName: string;
  tldr: string;
  signs: string[];
  commonCauses: ConcernCause[];
  byline: ContentByline;
  sections: ContentSection[];
  whenToSeeVet: string;
  recommendsProduct: ProductRecommendation;
  reasonForRecommendation: string;
  faqs: ContentFAQ[];
};

const STANDARD_BYLINE: ContentByline = {
  author: 'PawBite editorial team',
  reviewedBy: 'Dr. M. Hayes, DVM',
  publishedDate: '2025-09-12',
  updatedDate: '2026-04-22',
};

/**
 * Filled in by Phase 5 content writer agent (concerns).
 * 10 entries total.
 */
export const concernPages: ConcernPage[] = [
  {
    slug: 'loose-stool',
    concernName: 'Loose stool in dogs',
    tldr: 'Loose stool in dogs is most commonly caused by sudden diet changes, food sensitivities, gut microbiome disruption, or recent antibiotic use. A daily probiotic with prebiotic support typically firms stool within 7-14 days — but persistent or bloody diarrhea warrants a vet visit.',
    signs: [
      'Soft, pudding-like stool that loses shape on pickup',
      'Watery diarrhea with no solid form',
      'Increased frequency — more than 3-4 bowel movements per day',
      'Urgency or accidents in house-trained dogs',
      'Mucus or jelly-like coating on the stool',
      'Mild straining without producing much',
    ],
    commonCauses: [
      {
        cause: 'Sudden diet change',
        explanation:
          'Switching foods overnight gives the gut microbiome no time to adjust, which usually shows up as soft stool within 24-48 hours.',
      },
      {
        cause: 'Food sensitivity',
        explanation:
          'A specific protein or grain the dog has trouble digesting can produce chronically soft stool even on a high-quality diet.',
      },
      {
        cause: 'Antibiotic aftermath',
        explanation:
          'Antibiotics flatten the gut bacteria population, and a thinned microbiome struggles to firm up stool until it rebuilds.',
      },
      {
        cause: 'Garbage-gut moments',
        explanation:
          'Counter surfing, trash raids, and rich table scraps overwhelm the digestive system and trigger a one-off bout of loose stool.',
      },
      {
        cause: 'Stress',
        explanation:
          'Boarding, travel, and new household members can disrupt gut motility through the gut-brain axis — a real, well-documented effect.',
      },
      {
        cause: 'Parasites or infection',
        explanation:
          'Giardia, hookworm, and bacterial overgrowth all present as loose stool and require diagnosis, not guesswork.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'What loose stool looks like (and what it does not)',
        body: 'A normal dog stool is firm, segmented, and holds its shape when you pick it up. Loose stool ranges from pudding-soft to fully liquid. Most owners notice it because the bag goes squishy, the dog has an accident overnight, or the morning walk turns into a four-bathroom-break affair.\n\nThe Bristol-style fecal scoring system used by vets runs 1 (rock-hard) to 7 (water). You want your dog landing at 2 or 3. Anything 5 and above is worth paying attention to — especially if it sticks around for more than a couple of days.',
      },
      {
        heading: 'What causes it',
        body: 'Loose stool is almost always a gut signal, not a digestive system failure. The most common triggers we see in adult dogs are diet changes made too quickly, sensitivities to a specific ingredient, recent antibiotic use, and stress events like boarding or moving. Less common but real: parasites, viral infections, pancreatitis, and inflammatory bowel disease.\n\nThe pattern usually tells the story. Sudden onset that resolves in a day or two is often a dietary indiscretion. Recurring soft stool over weeks suggests sensitivity or microbiome imbalance.',
      },
      {
        heading: 'How to address it at home',
        body: 'For mild, non-emergency cases, the standard playbook is a 12-24 hour fast (water only, never less for puppies or small dogs), then a bland diet of boiled chicken and white rice for 2-3 days. Reintroduce regular food gradually over a week, not all at once.\n\nA daily probiotic helps in two ways: it replenishes the beneficial bacteria the gut needs to firm stool, and it crowds out the opportunistic bacteria that thrive when the microbiome is disrupted. Most owners notice firmer stool within 7-14 days of consistent use.',
      },
      {
        heading: 'Long-term management',
        body: 'If loose stool is a recurring theme rather than a one-off, the goal shifts from putting out fires to building a more resilient gut. That means consistent food (no week-to-week brand switching), measured portions, limited table scraps, and a daily probiotic to keep the microbiome stable. Some dogs also do better on a limited-ingredient diet — worth asking your vet about if soft stool keeps returning.',
      },
    ],
    whenToSeeVet:
      "If your dog's stool is bloody, black, or has been loose for more than 3 days, that's a vet visit. Same goes for signs of dehydration, lethargy, vomiting, refusing food, or a distended abdomen. Probiotics support chronic, mild GI issues — they are not a substitute for diagnosing acute illness.",
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'How long should it take for a probiotic to firm up my dog’s stool?',
        answer:
          'Most owners see improvement within 7-14 days of consistent daily use. Some dogs respond faster — within a few days — while dogs with longer-standing microbiome issues may need a full month before stool consistency stabilizes.',
      },
      {
        question: 'Can I give my dog human probiotics instead?',
        answer:
          'Technically yes, but human probiotics use strains optimized for the human gut. Dog-specific probiotics include strains like Enterococcus faecium and Bacillus coagulans that are better-studied for canine digestion and stool quality.',
      },
      {
        question: 'Should I withhold food when my dog has loose stool?',
        answer:
          'For adult dogs in otherwise good health, a 12-24 hour fast with plenty of water often helps the gut reset. Skip the fast for puppies, small breeds, diabetic dogs, or any dog who seems unwell — call your vet instead.',
      },
      {
        question: 'Is loose stool the same as diarrhea?',
        answer:
          'They are on the same spectrum. Loose stool tends to mean soft but still semi-formed. Diarrhea usually means liquid or near-liquid. Both can have the same underlying causes, but full liquid diarrhea for more than a day deserves a vet call.',
      },
      {
        question: 'Will a bland diet alone fix the problem?',
        answer:
          'A bland diet calms acute episodes, but it does not rebuild the underlying microbiome. If loose stool keeps coming back after you reintroduce normal food, the gut bacteria probably need help recovering — not just the stomach.',
      },
      {
        question: 'Can stress really cause loose stool?',
        answer:
          'Yes — and it is more common than most owners realize. Boarding, travel, new pets, and schedule changes can disrupt gut motility through the gut-brain axis. Loose stool that appears around stressful events and resolves afterward is a classic pattern.',
      },
    ],
  },
  {
    slug: 'gas-and-bloating',
    concernName: 'Gas and bloating in dogs',
    tldr: 'Excessive gas and mild bloating in dogs usually trace back to fermentable food ingredients, swallowed air during fast eating, or a gut microbiome that is out of balance. A daily probiotic helps the gut process food more efficiently and reduces gas-producing bacteria over a few weeks. True bloat (GDV) is a separate, life-threatening emergency.',
    signs: [
      'Frequent, noticeably smelly flatulence',
      'Audible gut noises (gurgling, rumbling) between meals',
      'Mild abdominal distension after eating',
      'Belching, especially after fast meals',
      'Restlessness or pacing after eating',
      'Slight discomfort lying down, but no obvious pain',
    ],
    commonCauses: [
      {
        cause: 'Fast eating',
        explanation:
          'Inhaling food means inhaling air, which has nowhere to go but out the other end (or up as burps).',
      },
      {
        cause: 'High-fiber or legume-heavy diets',
        explanation:
          'Peas, lentils, beans, and certain vegetables ferment in the colon and produce gas as a byproduct.',
      },
      {
        cause: 'Lactose or dairy',
        explanation:
          'Most adult dogs are partially lactose intolerant, so cheese, milk, or yogurt can cause noticeable gas.',
      },
      {
        cause: 'Microbiome imbalance',
        explanation:
          'When gas-producing bacteria outcompete beneficial ones, fermentation increases and so does flatulence.',
      },
      {
        cause: 'Table scraps and treats',
        explanation:
          'Fatty, rich, or unusual foods stress the digestive system and produce more gas than the dog’s normal diet.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'How to tell normal gas from a problem',
        body: 'Every dog passes some gas. It is a normal byproduct of digestion. The question is whether the volume, frequency, or odor has changed — and whether your dog seems uncomfortable.\n\nProblem-level gas usually shows up as multiple noticeable episodes a day, gas that clears a room, audible stomach noises between meals, or visible bloating after eating. Some breeds (Bulldogs, Boxers, Pugs, anything flat-faced) gulp more air by design and run gassier than others. That is normal for them but still manageable.',
      },
      {
        heading: 'What causes it',
        body: 'Gas comes from two places: air that is swallowed while eating and gas that is produced when bacteria ferment food in the colon. Fast eaters get a lot of the first kind. Dogs on legume-heavy diets, lots of fiber, or anything dairy get a lot of the second.\n\nA microbiome that is out of balance — too few beneficial bacteria, too many gas producers — amplifies both. This is why dogs often turn gassy after antibiotics, after a diet change, or during a stretch of stress.',
      },
      {
        heading: 'What helps',
        body: 'Three changes do most of the work. First, slow the eating down with a slow-feeder bowl or a snuffle mat — less swallowed air, less gas, and a calmer dog. Second, simplify the diet. Cut the table scraps, drop the dairy treats, and stick to one food consistently. Third, support the microbiome with a daily probiotic. Strains like Bacillus coagulans and Enterococcus faecium help shift the bacterial balance away from gas producers within a few weeks.',
      },
    ],
    whenToSeeVet:
      'There is a difference between gassy and bloated. True bloat (gastric dilatation-volvulus, or GDV) is a surgical emergency — usually in deep-chested breeds — and looks like a hard, distended belly, unproductive retching, restlessness, and rapid decline. If you see those signs, go to an emergency vet immediately. Chronic mild gas is a diet and microbiome issue, not an emergency.',
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Why does my dog’s gas smell so much worse some days?',
        answer:
          'Odor usually comes from sulfur compounds produced when bacteria ferment protein. High-protein meals, table scraps, or a recent diet change can spike that fermentation. If smell worsens suddenly and stays bad, look at what changed in the diet first.',
      },
      {
        question: 'Will a probiotic stop my dog from passing gas entirely?',
        answer:
          'No — some gas is normal and healthy. A probiotic shifts the type and volume of gas being produced, which usually means less smell, fewer episodes, and less audible gurgling. Total elimination is not the goal.',
      },
      {
        question: 'Are slow-feeder bowls actually worth it?',
        answer:
          'For fast eaters, yes. They cut the amount of air swallowed during meals, which directly reduces burping and lower-end gas. They also reduce vomiting after eating in some dogs.',
      },
      {
        question: 'Is dairy a common cause of gas in dogs?',
        answer:
          'Yes. Most adult dogs lose much of the lactase enzyme they had as puppies, so milk, cheese, and ice cream often produce noticeable gas. A small amount of plain yogurt is usually tolerated, but the rest of the dairy aisle is not worth the experiment.',
      },
      {
        question: 'My dog is bloated and pacing — is this serious?',
        answer:
          'Possibly. If the belly is visibly distended and hard, your dog is restless or trying to vomit without producing anything, that is potential GDV — a surgical emergency, especially in deep-chested breeds. Go straight to an emergency vet. Do not wait.',
      },
      {
        question: 'How long until I see results from a daily probiotic?',
        answer:
          'Most owners notice less gas within 2-3 weeks of consistent daily use. The microbiome adjustments take time, and skipping days slows the process.',
      },
    ],
  },
  {
    slug: 'food-allergies',
    concernName: 'Food allergies and sensitivities in dogs',
    tldr: 'True food allergies in dogs are immune-mediated reactions to a specific protein, while food sensitivities are non-immune intolerances that still cause real symptoms. Most show up as itchy skin, ear infections, or chronic GI issues. Identifying the trigger requires an elimination diet, and a daily probiotic supports the gut-skin axis that drives many sensitivity symptoms.',
    signs: [
      'Chronic itching, especially paws, ears, belly, and rear',
      'Recurring ear infections that come back after treatment',
      'Red, inflamed skin or hot spots',
      'Soft stool or chronic loose stool despite a good diet',
      'Frequent paw licking and chewing',
      'Hair loss in patches from scratching',
      'Watery eyes or face rubbing',
    ],
    commonCauses: [
      {
        cause: 'Beef protein',
        explanation:
          'Beef is statistically the most common food allergen in dogs, accounting for around a third of confirmed cases.',
      },
      {
        cause: 'Chicken protein',
        explanation:
          'Chicken is second on the list and one of the most common ingredients in commercial dog food, which is why exposure is so high.',
      },
      {
        cause: 'Dairy',
        explanation:
          'Dairy is both a true allergen and a common intolerance, and the symptoms (gas, soft stool, itching) often overlap.',
      },
      {
        cause: 'Wheat or grain',
        explanation:
          'Grain sensitivity is less common than marketing suggests, but it does exist — especially in dogs who already react to multiple proteins.',
      },
      {
        cause: 'Egg',
        explanation:
          'Egg proteins can trigger both skin and GI reactions, and eggs appear in many foods, treats, and home-cooked diets.',
      },
      {
        cause: 'Microbiome dysfunction',
        explanation:
          'A disrupted gut microbiome lowers the immune threshold and can turn previously tolerated foods into trigger foods.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'Allergy or sensitivity — what is the difference',
        body: 'A true food allergy is an immune system reaction to a specific protein. It can show up as severe itching, GI symptoms, or both, and it tends to be consistent — same food, same reaction, every time.\n\nA food sensitivity (or intolerance) is non-immune. The body has trouble processing the food but is not mounting an allergic response. Symptoms are often milder and more variable, but they are still real and worth addressing.\n\nFor practical purposes, the approach is the same: identify the trigger, remove it, and support the gut.',
      },
      {
        heading: 'What causes it',
        body: 'Most food reactions are reactions to a protein the dog has been eating for a long time. Beef and chicken top the list because they are the most common ingredients in commercial dog food. Dairy, egg, lamb, and wheat round out the top six.\n\nResearch on the gut-skin axis shows that a disrupted microbiome makes dogs more reactive across the board. When the gut barrier weakens, food proteins can leak through and trigger immune responses that would not happen with a healthy gut. This is why a dog who tolerated chicken for years can suddenly start reacting after a course of antibiotics or a stretch of poor diet.',
      },
      {
        heading: 'How to identify the trigger',
        body: 'The gold standard is an elimination diet. You feed a single novel protein and a single novel carbohydrate (something the dog has never eaten — venison and sweet potato, for example) for 8-12 weeks. If symptoms improve, you reintroduce ingredients one at a time and watch for reactions.\n\nBlood and saliva tests for food allergies in dogs have poor reliability and are not recommended by most veterinary dermatologists. Elimination diets are slow and unglamorous but they remain the only reliable method.',
      },
      {
        heading: 'Supporting the gut-skin axis',
        body: 'Even after a trigger food is removed, many dogs continue to flare because the underlying gut function has not recovered. A daily probiotic helps rebuild the microbiome and strengthens the gut barrier, which lowers overall immune reactivity over time. This is not a substitute for identifying and removing the trigger, but it is a meaningful piece of the long-term picture.',
      },
    ],
    whenToSeeVet:
      'If your dog has severe itching, recurrent ear infections, chronic GI symptoms, or facial swelling, see your vet for a workup. They can rule out other causes (environmental allergies, parasites, infection) and supervise an elimination diet. Anaphylaxis is rare in dogs but possible — facial swelling with breathing changes is an emergency.',
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Are food allergies actually common in dogs?',
        answer:
          'True immune-mediated food allergies are less common than environmental allergies, but food sensitivities are widespread. Together, they account for a significant share of chronic itch and GI cases. Most dogs with seasonal itch have environmental allergies, not food allergies.',
      },
      {
        question: 'Can my dog suddenly develop an allergy to food they have always eaten?',
        answer:
          'Yes. Allergies develop with repeated exposure, so the foods dogs have eaten longest are statistically the most common triggers. A previously tolerated diet can become a problem, especially after a gut disruption like antibiotics or illness.',
      },
      {
        question: 'Is grain-free food better for dogs with allergies?',
        answer:
          'Not necessarily. Grain allergies are much less common than protein allergies, and the FDA has flagged a potential link between certain grain-free diets and heart disease. Talk to your vet before going grain-free for allergy reasons.',
      },
      {
        question: 'How long does an elimination diet take?',
        answer:
          'A proper elimination diet runs 8-12 weeks. The dog needs to be on the novel diet exclusively — no treats, no chews, no flavored medications — for the full trial. Cutting it short produces unreliable results.',
      },
      {
        question: 'Will probiotics cure my dog’s food allergy?',
        answer:
          'No. Probiotics do not cure allergies. They support gut barrier function and microbiome balance, which research suggests can reduce reactivity over time. The trigger food still needs to be identified and removed for symptoms to resolve.',
      },
      {
        question: 'Can blood tests diagnose food allergies in dogs?',
        answer:
          'Most veterinary dermatologists do not recommend blood or saliva food allergy panels for dogs. They have poor accuracy and produce many false positives. An elimination diet, supervised by a vet, remains the only reliable method.',
      },
    ],
  },
  {
    slug: 'itchy-skin-and-coat',
    concernName: 'Itchy skin and dull coat in dogs',
    tldr: 'Itchy skin and a dull coat in dogs usually trace back to one of three sources: allergies (environmental or food), skin barrier dysfunction, or gut microbiome issues that affect the gut-skin axis. A daily probiotic supports the gut-skin connection that drives chronic itch in many dogs, alongside topical care and trigger identification.',
    signs: [
      'Frequent scratching, especially at flanks, paws, and ears',
      'Chronic paw licking and chewing',
      'Dry, flaky skin or visible dandruff',
      'Dull, brittle coat that lacks shine',
      'Hair thinning or bald patches from scratching',
      'Red, inflamed skin or hot spots',
      'Greasy or musty skin smell',
      'Head shaking or ear scratching',
    ],
    commonCauses: [
      {
        cause: 'Environmental allergies (atopy)',
        explanation:
          'Pollen, dust mites, mold, and grass are the most common itch triggers — often seasonal but sometimes year-round.',
      },
      {
        cause: 'Food sensitivity',
        explanation:
          'A specific protein the dog has trouble with can show up as itch and ear infections rather than digestive symptoms.',
      },
      {
        cause: 'Flea allergy',
        explanation:
          'Some dogs react severely to a single flea bite, and the itching continues long after the flea is gone.',
      },
      {
        cause: 'Microbiome imbalance',
        explanation:
          'Gut bacteria influence skin barrier function through the gut-skin axis, and a disrupted gut often shows up first on the skin.',
      },
      {
        cause: 'Dry climate or over-bathing',
        explanation:
          'Stripping natural oils with frequent baths or low household humidity can make a healthy coat dull and the skin itchy.',
      },
      {
        cause: 'Yeast or bacterial overgrowth',
        explanation:
          'Skin yeast (often Malassezia) and bacterial overgrowth thrive in warm, damp areas like ears and paws and cause persistent itching.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'How to tell if the itch is a real problem',
        body: 'Every dog scratches sometimes. The threshold for concern is when scratching is frequent, focused on the same spots, or producing visible skin changes — redness, hair loss, hot spots, or open sores.\n\nPay attention to pattern. Year-round itch suggests food sensitivity or chronic skin issues. Seasonal itch points to environmental allergies. Itch focused on the rear half of the body often means fleas, even if you have not seen one. Itch focused on paws, face, and belly suggests allergies (food or environmental) more often than parasites.',
      },
      {
        heading: 'What causes it',
        body: 'The biggest categories are environmental allergies, food sensitivities, parasites (mostly fleas), and skin barrier dysfunction. Many dogs have more than one of these going on at the same time, which is why a single-fix approach often fails.\n\nThe gut-skin axis is the newer piece of the puzzle. Research over the last decade has shown that gut microbiome health directly affects skin barrier function and inflammatory response. Dogs with chronic itch frequently have measurably different gut bacteria compared to dogs with healthy skin.',
      },
      {
        heading: 'What helps',
        body: 'Start with the basics: a quality flea preventive, omega-3 supplementation (fish oil), and an honest look at the diet. If symptoms point to food, an elimination diet supervised by your vet is the gold standard for identifying the trigger.\n\nFor coat dullness specifically, less bathing is often more — every 4-6 weeks with a gentle shampoo, not every week. Brushing distributes natural oils and is more effective than any topical product. A daily probiotic supports the gut-skin axis from the inside, which is the longer-term lever most owners overlook.',
      },
      {
        heading: 'Long-term management',
        body: 'Chronic itch is rarely solved in a week. The realistic timeline is 2-3 months of consistent intervention to see meaningful change — and that assumes you have identified and addressed the trigger. Skin health follows gut health, and gut health follows diet, environment, and microbiome support. Patience and consistency win this one.',
      },
    ],
    whenToSeeVet:
      'See your vet if itching is severe, the skin is broken or bleeding, ear infections keep coming back, or your dog seems generally unwell. These can signal underlying conditions like atopic dermatitis, hypothyroidism, or mange that require diagnosis and prescription treatment. Constant itch is exhausting for dogs — do not wait it out.',
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Can gut health really affect my dog’s skin?',
        answer:
          'Yes. The gut-skin axis is a well-documented connection, and research shows dogs with chronic skin issues often have measurably different gut microbiomes than dogs with healthy skin. Supporting the gut does not replace topical or allergy care, but it is a meaningful piece.',
      },
      {
        question: 'Should I bathe my dog more often if their skin is itchy?',
        answer:
          'Probably less, not more. Over-bathing strips the natural oils that protect the skin barrier and can make itching worse. Stick to every 4-6 weeks with a gentle, dog-formulated shampoo unless your vet recommends medicated bathing.',
      },
      {
        question: 'Does fish oil actually help with dull coat?',
        answer:
          'Yes. Omega-3 fatty acids (EPA and DHA) reduce skin inflammation and improve coat shine in most dogs. Look for fish oil dosed by weight — under-dosing is the most common reason owners do not see results.',
      },
      {
        question: 'How long until a probiotic helps with itchy skin?',
        answer:
          'Skin and coat changes are slower than digestive changes. Most owners notice some improvement within 4-6 weeks, with continued benefit through 8-12 weeks of consistent use. This is a slow-burn lever, not an overnight fix.',
      },
      {
        question: 'My dog only itches in spring and summer — is it food or environmental?',
        answer:
          'Seasonal itch strongly suggests environmental allergies (pollen, grass, mold). Food allergies are typically year-round. That said, dogs with environmental allergies often have lower thresholds for food triggers, so both can be at play.',
      },
      {
        question: 'Are paw licking and ear infections related?',
        answer:
          'Often, yes. Both are common signs of underlying allergies — food or environmental. The pattern of paw licking plus recurring ear infections is a classic allergy presentation in dogs, and treating the ears alone usually does not stop the cycle.',
      },
    ],
  },
  {
    slug: 'hip-pain',
    concernName: 'Hip pain and stiffness in dogs',
    tldr: 'Hip pain in dogs usually comes from hip dysplasia, early arthritis, or general wear-and-tear in joints that have been working hard for years. A daily hip-and-joint supplement with glucosamine, chondroitin, MSM, and omega-3s is the standard non-prescription approach to slow progression and reduce stiffness — most effective when started before pain becomes severe.',
    signs: [
      'Difficulty getting up from lying down',
      'Stiffness after rest, looser after warming up',
      'Reluctance to climb stairs or jump on the couch',
      'Bunny-hopping gait when running',
      'Loss of muscle mass in the hind legs',
      'Lameness or limping after exercise',
      'Reduced interest in long walks or play',
      'Hesitation before standing or lying down',
    ],
    commonCauses: [
      {
        cause: 'Hip dysplasia',
        explanation:
          'A developmental malformation of the hip joint, more common in large breeds, that creates instability and accelerates wear.',
      },
      {
        cause: 'Osteoarthritis',
        explanation:
          'Cartilage in the hip joint thins over time, exposing bone-on-bone contact that causes inflammation and pain.',
      },
      {
        cause: 'Excess body weight',
        explanation:
          'Every extra pound of body weight adds about four pounds of pressure across the hips — weight is the single biggest controllable factor.',
      },
      {
        cause: 'Old injury',
        explanation:
          'Past trauma, even mild, can leave the joint mechanically uneven and prone to faster cartilage breakdown.',
      },
      {
        cause: 'Genetics and breed',
        explanation:
          'Labs, Goldens, Shepherds, Rottweilers, and other large breeds are predisposed — sometimes regardless of diet or activity history.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'How to tell hip pain from general aging',
        body: 'Dogs do not slow down just because they are getting older. Slowing down usually means something hurts. Hip pain shows up as a specific pattern: stiffness right after rest that improves with movement, hesitation before stairs and jumping, and a bunny-hopping motion when running.\n\nThe muscle mass test is useful at home. Compare the bulk of the rear legs and thighs to the front shoulders. If the rear has noticeably less muscle than the front, the dog has likely been offloading weight onto the front legs for a while — a classic sign of hip discomfort.',
      },
      {
        heading: 'What causes it',
        body: 'For most dogs, hip pain is a combination of three things: a joint that was not perfectly formed (dysplasia, even mild), accumulated wear, and body weight that increases load. Genetics set the stage and lifestyle decides how fast the curtain comes down.\n\nLarge breeds are at higher risk, but small dogs are not immune — they are just less likely to be diagnosed. Past injuries, even ones that seemed minor at the time, often resurface as joint issues later in life.',
      },
      {
        heading: 'What helps',
        body: 'Three levers do most of the work: weight management, controlled exercise, and joint support. Lean body weight is the single biggest factor under your control. A dog at a healthy weight has fewer symptoms even with the same joint structure.\n\nExercise should be regular but low-impact. Two shorter walks beat one long one. Swimming is excellent when available. Joint supplements with glucosamine, chondroitin, MSM, and omega-3s reduce inflammation and support cartilage health. They work best when started before pain is severe — preventive use beats catch-up use.',
      },
      {
        heading: 'Long-term management',
        body: 'Hip issues are managed, not cured. The goal is to slow progression and keep your dog comfortable and active for as long as possible. That looks like consistent supplementation, weight control, daily movement, traction at home (rugs on slippery floors), and vet checkups to track changes. For more advanced cases, your vet may add NSAIDs, physical therapy, or other prescription options — supplements support these, they do not replace them.',
      },
    ],
    whenToSeeVet:
      'See your vet if your dog is suddenly limping, refusing to bear weight, crying out, or showing rapid decline. These could indicate acute injury, advanced arthritis, or other conditions that need diagnosis and prescription pain management. Joint supplements support long-term joint health — they are not pain relief for acute problems.',
    recommendsProduct: 'hip-and-joint',
    reasonForRecommendation:
      "Joint + Mobility Chews: Support your dog's active lifestyle. Duck Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'At what age should I start a joint supplement?',
        answer:
          'For large breeds (over 50 lbs) and dogs predisposed to hip issues, many vets recommend starting at 4-5 years old as preventive care. For smaller breeds, 6-7 is reasonable. Earlier is fine if there is a known issue or family history.',
      },
      {
        question: 'How long until I see results from a hip-and-joint supplement?',
        answer:
          'Most owners report visible improvement in mobility within 4-6 weeks of consistent daily use. Some dogs respond faster, especially if they are starting from early-stage stiffness. Severe cases take longer and may need additional treatment.',
      },
      {
        question: 'Will glucosamine fix my dog’s hip dysplasia?',
        answer:
          'No supplement will reverse the structural malformation of dysplasia. Glucosamine and chondroitin support cartilage health and reduce inflammation, which slows progression and improves daily comfort. Severe dysplasia may require surgical evaluation.',
      },
      {
        question: 'Is my dog limping because of pain or laziness?',
        answer:
          'Dogs do not limp because they are lazy. Limping is a pain or mechanical issue every time — even subtle, intermittent limping. If you see it, take it seriously.',
      },
      {
        question: 'Can I give my dog human glucosamine instead?',
        answer:
          'The molecule is the same, but dosing in human products is calibrated for human weight and often paired with ingredients not ideal for dogs. Dog-specific formulations are dosed appropriately and avoid additives like xylitol that are toxic to dogs.',
      },
      {
        question: 'Does losing weight really help with hip pain?',
        answer:
          'Yes — more than almost any other intervention. Studies show even a 6-8% reduction in body weight produces measurable improvement in lameness and mobility scores. It is the single biggest non-medical lever owners have.',
      },
    ],
  },
  {
    slug: 'arthritis',
    concernName: 'Arthritis in dogs',
    tldr: 'Arthritis (osteoarthritis) is the gradual breakdown of joint cartilage and the most common cause of chronic pain in older dogs. It is progressive and not curable, but consistent management — weight control, low-impact movement, joint supplements, and sometimes vet-prescribed pain relief — keeps dogs comfortable and active for years. A daily hip-and-joint supplement is part of the standard long-term management protocol.',
    signs: [
      'Stiffness after rest that loosens with movement',
      'Difficulty rising, sitting, or lying down',
      'Reluctance to climb stairs, jump, or play',
      'Visible limping or favoring a leg',
      'Loss of muscle mass, especially in hindquarters',
      'Behavioral changes — irritability, withdrawal, snapping when touched',
      'Slower walks and reduced stamina',
      'Audible joint clicks or pops',
    ],
    commonCauses: [
      {
        cause: 'Age-related cartilage wear',
        explanation:
          'Decades of joint use thin the cartilage that cushions bone-on-bone contact, leaving rough, inflamed surfaces.',
      },
      {
        cause: 'Hip or elbow dysplasia',
        explanation:
          'Joints that are malformed from birth wear unevenly, accelerating the path to full arthritis.',
      },
      {
        cause: 'Previous joint injury',
        explanation:
          'Cruciate tears, fractures, and dislocations leave joints mechanically compromised and prone to early arthritis.',
      },
      {
        cause: 'Obesity',
        explanation:
          'Carrying extra weight for years multiplies joint load and produces inflammatory signals that speed cartilage breakdown.',
      },
      {
        cause: 'Breed predisposition',
        explanation:
          'Large breeds, working breeds, and certain conformations carry higher genetic risk regardless of lifestyle.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'How to tell early arthritis from normal aging',
        body: 'Arthritis is often mistaken for "just getting old." Both can look similar from across the room. The difference is that arthritis is specifically about joints — stiffness after rest, hesitation before stairs, slower starts in the morning. Normal aging is more general and does not typically produce focal lameness or pain on touch.\n\nA useful at-home check: watch how your dog gets up from lying down. A healthy dog rises smoothly. An arthritic dog often stretches first, shifts weight to the front, and pushes up in stages. The first 30 seconds of walking are usually stiff, then loosens as joints warm up.',
      },
      {
        heading: 'What causes it',
        body: 'Arthritis is the end result of cartilage damage that has accumulated over time. Cartilage covers the ends of bones inside joints and acts as a cushion. As it thins and roughens, bone surfaces grind, the joint becomes inflamed, and the inflammation itself produces more damage. It is a slow-motion cycle.\n\nThe causes upstream are usually genetic predisposition, past injury, dysplasia, or sustained obesity. Dogs who arrive at arthritis in their senior years almost always have one or more of these in their history — sometimes going back to puppyhood.',
      },
      {
        heading: 'How to address it at home',
        body: 'Three pillars hold up at-home arthritis care. The first is weight — even a small reduction (5-10%) makes a measurable difference in pain and mobility scores. The second is movement, which sounds counterintuitive but is essential. Joints need consistent low-impact use to stay lubricated and supported by surrounding muscle. Short, regular walks beat long sporadic ones. Swimming is excellent.\n\nThe third is joint support. Glucosamine, chondroitin, MSM, and omega-3s are the four ingredients with the most clinical evidence for canine joint health. They reduce inflammation, support cartilage maintenance, and improve daily comfort. They work alongside vet-prescribed NSAIDs and other pain medications in moderate-to-severe cases — not in place of them.',
      },
      {
        heading: 'Long-term management',
        body: 'Arthritis is managed for life, not cured. Expect to layer interventions as the condition progresses. Early stages may need only supplements, weight management, and lifestyle changes. Mid-stage often adds NSAIDs as needed and physical therapy. Advanced stages can involve injections, laser therapy, or surgical consultation.\n\nHouse modifications help more than owners expect. Non-slip rugs on slick floors, a ramp instead of stairs to the car, a thicker bed that does not require lowering all the way to the ground — these small changes preserve mobility and reduce daily pain.',
      },
    ],
    whenToSeeVet:
      'See your vet at the first signs of stiffness or limping — earlier intervention slows progression. Get back in touch if pain worsens suddenly, your dog cannot bear weight on a limb, or quality of life declines despite current treatment. Arthritis often requires prescription pain relief alongside supplements, and your vet is the right person to manage that.',
    recommendsProduct: 'hip-and-joint',
    reasonForRecommendation:
      "Joint + Mobility Chews: Support your dog's active lifestyle. Duck Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Can arthritis in dogs be cured?',
        answer:
          'No. Arthritis is the result of cartilage damage that cannot be reversed. The goal is to slow progression and manage symptoms so your dog stays comfortable and mobile. With consistent care, many arthritic dogs maintain a good quality of life for years.',
      },
      {
        question: 'Should I keep my arthritic dog active or let them rest?',
        answer:
          'Active, but smart. Rest worsens arthritis because joints need movement to stay healthy and muscles need use to support the joints. The right answer is consistent low-impact exercise — multiple short walks rather than one long hike, and swimming when available.',
      },
      {
        question: 'How long until joint supplements help with arthritis pain?',
        answer:
          'Most owners report noticeable improvement in mobility within 4-6 weeks of consistent daily use. Severe arthritis takes longer to respond and usually needs supplements as part of a broader treatment plan rather than as the sole intervention.',
      },
      {
        question: 'My older dog has slowed down — is that arthritis or just age?',
        answer:
          'It is most often arthritis. Dogs slow down because something hurts, not just because they are older. Stiffness that improves with movement, hesitation on stairs, and difficulty rising are classic signs and warrant a vet check.',
      },
      {
        question: 'Are there foods that help with arthritis?',
        answer:
          'Omega-3 rich foods (salmon, sardines, fish oil) are well-supported for reducing joint inflammation. Some prescription joint diets include therapeutic levels of glucosamine and omega-3s. Avoid foods with high inflammatory load — heavily processed treats and excessive grain-based fillers.',
      },
      {
        question: 'Should I be giving my arthritic dog NSAIDs?',
        answer:
          'NSAIDs are common in canine arthritis management but must be prescribed and monitored by your vet — they can affect kidney and liver function. Never give human NSAIDs (ibuprofen, naproxen) to dogs. Dog-specific NSAIDs are designed and dosed for canine metabolism.',
      },
    ],
  },
  {
    slug: 'slow-to-get-up',
    concernName: 'Slow to get up and mobility decline in dogs',
    tldr: 'A dog that has become slow to get up is almost always experiencing some level of joint stiffness, early arthritis, or muscle weakness — not just aging. The standard approach is weight management, consistent low-impact exercise, household modifications, and a daily joint supplement to support cartilage and reduce inflammation before symptoms worsen.',
    signs: [
      'Visible effort to stand up from lying down',
      'Stretching repeatedly before standing',
      'Hesitation at the bottom or top of stairs',
      'Slower morning walks that loosen up after a few minutes',
      'Sitting down halfway through walks',
      'Avoiding jumping onto couches, beds, or cars',
      'Sleeping more during the day',
      'Subtle limp that comes and goes',
    ],
    commonCauses: [
      {
        cause: 'Early-stage osteoarthritis',
        explanation:
          'Cartilage breakdown is often well underway before owners notice obvious limping, presenting first as slow starts in the morning.',
      },
      {
        cause: 'Hip dysplasia',
        explanation:
          'Even mild dysplasia creates joint instability that becomes more symptomatic as muscles weaken with age.',
      },
      {
        cause: 'Muscle loss (sarcopenia)',
        explanation:
          'Older dogs lose muscle mass naturally, and weaker muscles mean less support for joints and more work to stand up.',
      },
      {
        cause: 'Excess body weight',
        explanation:
          'Carrying extra weight makes every joint movement harder and accelerates the progression of underlying joint issues.',
      },
      {
        cause: 'Cold weather and damp conditions',
        explanation:
          'Most arthritic dogs are noticeably stiffer in cold weather, and this often surfaces before the underlying issue is diagnosed.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'What it usually means when a dog slows down',
        body: 'Dogs do not slow down on purpose. When standing up takes visible effort, when the first minute of a walk is stiff, when stairs become a deliberate choice — those are early signs of joint discomfort, not personality changes.\n\nThe pattern matters. Stiffness that loosens after a few minutes of movement points to joint and cartilage issues. Generalized weakness that does not improve with movement is a different problem and worth a vet exam. The "morning stiffness, midday fine" pattern is classic early arthritis.',
      },
      {
        heading: 'What causes mobility decline',
        body: 'The two biggest drivers are joint changes (cartilage thinning, early arthritis, dysplasia) and muscle loss. Both creep in slowly, and they amplify each other — weaker muscles mean less joint support, and more joint pain means less movement, which means even more muscle loss.\n\nWeight plays into both. Heavier dogs lose muscle faster (because joint pain limits movement) and have more joint pain (because joints carry more load). It is a feedback loop, and weight is the single lever owners can pull that affects every part of it.',
      },
      {
        heading: 'What helps',
        body: 'The basics: keep your dog at a lean body weight, maintain consistent low-impact exercise, and start joint support early — ideally before mobility becomes a real problem. Glucosamine, chondroitin, MSM, and omega-3s all have evidence for reducing inflammation and supporting cartilage health in dogs.\n\nHousehold changes punch above their weight. Non-slip runners on hardwood floors, a ramp or step up to the bed or couch, a thicker bed that does not require sinking all the way to the floor, and easy access to water and food bowls — these small modifications reduce daily strain and preserve mobility longer than most owners expect.',
      },
      {
        heading: 'Prevention',
        body: 'The best time to start supporting joints is before they hurt. For large-breed dogs and any dog with a family history of joint issues, joint supplementation starting at 4-5 years is reasonable preventive care. Lifestyle matters too: lean weight from puppyhood, regular moderate exercise (not weekend warrior patterns), and avoiding repetitive high-impact activities (jumping in and out of trucks, repetitive ball fetching on hard surfaces) all reduce lifetime joint wear.',
      },
    ],
    whenToSeeVet:
      'See your vet if mobility decline is sudden, your dog cannot bear weight, or progression seems rapid (weeks, not months). Sudden changes can signal acute injury, cruciate tear, disc disease, or other conditions that need imaging and possibly surgery. Slow gradual change still deserves a checkup — earlier diagnosis means better long-term outcomes.',
    recommendsProduct: 'hip-and-joint',
    reasonForRecommendation:
      "Joint + Mobility Chews: Support your dog's active lifestyle. Duck Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Is it normal for older dogs to be slow getting up?',
        answer:
          'Common, but not normal in the sense of inevitable. Slow rising almost always means joint discomfort or muscle weakness — both treatable to some degree. Many older dogs improve significantly with proper joint support, weight management, and exercise.',
      },
      {
        question: 'My dog is only stiff in the morning — is that something to worry about?',
        answer:
          'It is worth attention. Morning stiffness that loosens with movement is one of the earliest signs of joint issues. Starting joint support at this stage often produces better outcomes than waiting until symptoms are constant.',
      },
      {
        question: 'How much exercise should an older or stiff dog get?',
        answer:
          'Less intensity, more consistency. Aim for multiple shorter walks (10-20 minutes) rather than long weekend hikes. Swimming is excellent when available because it builds muscle without joint impact. Avoid repetitive high-impact activities like ball fetching on pavement.',
      },
      {
        question: 'Will a softer bed help my stiff dog?',
        answer:
          'A thicker orthopedic bed helps most stiff dogs — it provides support without requiring them to sink to floor level. The total height matters too: a bed that is too low takes more effort to rise from, even if the surface is soft.',
      },
      {
        question: 'How long until joint supplements make a difference?',
        answer:
          'Most owners notice improvement in 4-6 weeks of consistent daily use. Earlier stages tend to respond faster. Skipping days slows the timeline significantly — these supplements work through steady accumulation, not single doses.',
      },
      {
        question: 'Is it too late to start joint support if my dog is already stiff?',
        answer:
          'No. Joint supplements help at any stage, though earlier is generally better. Even dogs with established arthritis often show meaningful improvement in mobility and comfort within a couple of months of consistent supplementation.',
      },
    ],
  },
  {
    slug: 'post-antibiotic-recovery',
    concernName: 'Recovering from antibiotics in dogs',
    tldr: 'A course of antibiotics flattens the gut microbiome, which often causes loose stool, gas, and reduced appetite for weeks after treatment ends. A daily probiotic helps the microbiome rebuild faster, with most dogs showing visible digestive recovery within 2-4 weeks of consistent use. Probiotics should be given 2-3 hours apart from antibiotic doses, not at the same time.',
    signs: [
      'Soft or loose stool during and after antibiotic treatment',
      'Reduced appetite or pickiness',
      'Increased gas',
      'Audible stomach noises between meals',
      'Mild lethargy or low energy',
      'Bad breath or changed mouth odor',
      'Occasional vomiting or nausea',
    ],
    commonCauses: [
      {
        cause: 'Loss of beneficial gut bacteria',
        explanation:
          'Antibiotics do not distinguish between harmful bacteria and the beneficial ones that keep digestion working — both take a hit.',
      },
      {
        cause: 'Reduced microbial diversity',
        explanation:
          'Diversity is what makes a gut resilient, and antibiotics often reduce it significantly even after the targeted infection is gone.',
      },
      {
        cause: 'Yeast or opportunistic overgrowth',
        explanation:
          'With beneficial bacteria suppressed, opportunistic organisms like yeast can multiply and slow normal recovery.',
      },
      {
        cause: 'Slower gut barrier repair',
        explanation:
          'The gut lining relies on signals from healthy bacteria, so it heals more slowly when the microbiome is thin.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'What antibiotics actually do to the gut',
        body: 'Antibiotics target the bacteria causing an infection. They are excellent at that and have saved countless dog lives. The catch is that most antibiotics also kill or suppress the beneficial bacteria living in the gut — the ones that produce short-chain fatty acids, regulate immune signaling, and keep stool firm.\n\nResearch in both dogs and humans shows that gut microbial diversity drops significantly during a course of antibiotics and often takes weeks to months to rebuild on its own. During that recovery window, dogs commonly have loose stool, gas, reduced appetite, and lower energy.',
      },
      {
        heading: 'How to support recovery',
        body: 'A daily probiotic is the most direct way to reseed the gut with beneficial bacteria. Multi-strain probiotics work better than single-strain options because they more closely mirror the diversity of a healthy gut. Look for products with at least three to five well-studied canine strains and a meaningful CFU count.\n\nTiming matters: give probiotics 2-3 hours apart from antibiotic doses, since giving them at the same time means the antibiotic kills the probiotic on contact. Start probiotics during the antibiotic course if your vet approves, or immediately after.\n\nDiet plays a role too. Keep food consistent and easy to digest during recovery. This is not the time to introduce a new protein or a complicated diet. Bone broth, plain pumpkin, and a steady routine all help.',
      },
      {
        heading: 'How long recovery takes',
        body: 'Most dogs show visible improvement in digestion (firmer stool, less gas, better appetite) within 2-4 weeks of starting a daily probiotic. Full microbiome recovery — meaning bacterial diversity returning to baseline — can take longer, sometimes a few months. The early signs are the practical ones owners care about.\n\nLonger courses of antibiotics and broader-spectrum drugs (like metronidazole or amoxicillin-clavulanate) typically cause more disruption and take longer to recover from. A short course of a narrow antibiotic might cause minimal symptoms, while a multi-week broad-spectrum course can produce months of GI aftermath.',
      },
    ],
    whenToSeeVet:
      'Contact your vet if loose stool persists more than 1-2 weeks after antibiotics end, if appetite does not return, if your dog seems unwell beyond mild GI symptoms, or if the original infection seems to be returning. Probiotics support recovery from mild antibiotic aftermath — they do not address underlying issues like C. difficile overgrowth or a second infection.',
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Can I give my dog probiotics during the antibiotic course?',
        answer:
          'Yes, with timing. Give the probiotic 2-3 hours apart from the antibiotic dose so the antibiotic does not kill the probiotic on contact. Check with your vet first, especially for severe infections, but starting probiotics alongside antibiotics is generally beneficial.',
      },
      {
        question: 'How long should my dog stay on probiotics after antibiotics?',
        answer:
          'At minimum, continue daily for 4-6 weeks after the antibiotic course ends. Many dogs benefit from staying on a daily probiotic indefinitely — it supports the microbiome long-term, not just during recovery.',
      },
      {
        question: 'Why does my dog have diarrhea on antibiotics?',
        answer:
          'Antibiotics disrupt the gut bacteria that keep stool firm. With those bacteria suppressed, water absorption in the colon decreases and stool loosens. This is a common, expected side effect — though severe or persistent diarrhea should be reported to your vet.',
      },
      {
        question: 'Will my dog’s gut return to normal on its own?',
        answer:
          'Usually yes, eventually — but it can take months. Adding a probiotic significantly speeds that recovery and reduces the period of post-antibiotic GI symptoms.',
      },
      {
        question: 'Are there foods that help my dog recover from antibiotics?',
        answer:
          'Fermented foods (a small amount of plain unsweetened yogurt or kefir, if tolerated), bone broth, plain pumpkin, and easy-to-digest proteins all support recovery. Keep diet boring and consistent — this is not the time to try new foods.',
      },
      {
        question: 'Does every dog need probiotics after antibiotics?',
        answer:
          'Not strictly required, but recommended. Most dogs experience some level of microbiome disruption, even if mild. Probiotics speed recovery, reduce post-treatment symptoms, and lower the risk of chronic GI issues developing afterward.',
      },
    ],
  },
  {
    slug: 'picky-eaters',
    concernName: 'Picky eating in dogs',
    tldr: 'Picky eating in dogs is usually a behavioral pattern reinforced over time, but it can also signal mild nausea, dental pain, or an underlying digestive issue. Healthy dogs with chronic pickiness often respond to a consistent feeding routine, less food-rewarding around the bowl, and gut microbiome support. A daily probiotic helps when pickiness has a digestive root.',
    signs: [
      'Walking up to the bowl, sniffing, and walking away',
      'Eating only when hand-fed or with added toppers',
      'Holding out for treats or table food',
      'Eating one day, refusing the next, with no clear pattern',
      'Eating only certain components of a meal',
      'Faster weight loss than expected on current portions',
      'Sudden change in food preferences in a previously eager eater',
    ],
    commonCauses: [
      {
        cause: 'Learned behavior',
        explanation:
          'Dogs quickly learn that refusing food produces better food — toppers, hand-feeding, table scraps — and the pattern becomes self-reinforcing.',
      },
      {
        cause: 'Too many treats',
        explanation:
          'A dog whose calorie needs are met by treats and snacks has no reason to be excited about regular meals.',
      },
      {
        cause: 'Mild nausea or GI discomfort',
        explanation:
          'Low-grade nausea can make food seem unappealing without producing obvious symptoms like vomiting.',
      },
      {
        cause: 'Dental pain',
        explanation:
          'A sore tooth, gum infection, or worn molars can make crunchy food uncomfortable to chew, leading to food refusal.',
      },
      {
        cause: 'Stress or anxiety',
        explanation:
          'New environments, schedule changes, or household stress can suppress appetite — sometimes dramatically.',
      },
      {
        cause: 'Food fatigue',
        explanation:
          'Some dogs lose interest in a single food after months and need rotation — but this is less common than owners assume.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'Picky vs. unwell',
        body: 'The first job is separating behavioral pickiness from medical pickiness. A dog who has always been a bit selective and is otherwise bright, active, and maintaining weight is probably behaviorally picky. A dog who was an enthusiastic eater and recently became picky is a different conversation — that pattern points to something physical.\n\nWatch the rest of the picture. Energy, stool quality, weight, water intake, and breath all give clues. Sudden pickiness with bad breath suggests dental issues. Sudden pickiness with soft stool suggests GI issues. Sudden pickiness with weight loss and lethargy is a vet visit, not a feeding strategy question.',
      },
      {
        heading: 'What causes behavioral pickiness',
        body: 'Dogs are not subtle learners. If refusing breakfast produces a hand-fed bowl of chicken in the afternoon, they will refuse breakfast again tomorrow. The cycle starts innocently — owner gets worried, adds something tasty, dog eats it, owner concludes the dog "only eats" the tasty thing — and within a few weeks it becomes the norm.\n\nTreats are the other big driver. Dogs who get plenty of high-value treats during the day are not hungry at mealtime. If treats are more than about 10% of daily calories, regular meals start to look unappealing by comparison.',
      },
      {
        heading: 'How to address it at home',
        body: 'For behavioral pickiness, the standard reset works. Put food down for 15 minutes, twice a day. If they do not eat, pick it up. No toppers, no hand-feeding, no negotiation. Cut treats to 5-10% of daily calories at most. Most dogs reset within a week — they will not starve themselves.\n\nIf there is a digestive component, support the gut. A daily probiotic helps when pickiness is paired with mild GI symptoms (soft stool, gas, audible stomach noises). Microbiome imbalance can produce low-grade nausea that suppresses appetite, and rebuilding the gut often restores normal interest in food.\n\nFor dogs who seem genuinely uninterested in food despite no behavioral cues, a vet exam is the right next step. Dental issues, low-grade nausea, and other physical causes are common and treatable.',
      },
    ],
    whenToSeeVet:
      'See your vet if your dog has refused food for more than 24 hours (12 for puppies or small breeds), is losing weight, seems lethargic, has bad breath or visible dental issues, or if pickiness developed suddenly in a previously eager eater. Sudden appetite loss in dogs is rarely just behavioral and warrants a workup.',
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'Will my dog starve themselves if I do not give in?',
        answer:
          'A healthy adult dog will not voluntarily starve themselves. Most reset within 1-3 days when meals are offered on a consistent schedule with no toppers or alternatives. Puppies, small breeds, and dogs with medical conditions are different — consult your vet before withholding food from those groups.',
      },
      {
        question: 'Are food toppers a bad idea?',
        answer:
          'Toppers are not inherently bad, but they often start as a fix for pickiness and end up as a requirement. If you use them, keep them small and consistent so they do not become the meal itself. Bone broth, plain yogurt, or a spoonful of cooked vegetables work better than processed gravies.',
      },
      {
        question: 'Why did my eager eater suddenly become picky?',
        answer:
          'Sudden pickiness in a previously enthusiastic eater is almost always physical, not behavioral. Common causes include dental pain, low-grade nausea, GI issues, or other underlying medical concerns. A vet visit is the right starting point.',
      },
      {
        question: 'Can a probiotic make my dog hungrier?',
        answer:
          'It can — indirectly. When mild nausea or GI discomfort is suppressing appetite, rebuilding the gut microbiome often restores normal hunger. If pickiness is purely behavioral, a probiotic will not change that.',
      },
      {
        question: 'How many treats are too many?',
        answer:
          'Treats should make up no more than 10% of daily calories. For most small and medium dogs, that is a few small training treats per day — not handfuls. Heavy treat use is a leading cause of mealtime disinterest.',
      },
      {
        question: 'Should I rotate my dog’s food to prevent boredom?',
        answer:
          'Most dogs do not need rotation to stay interested in food. Frequent food changes can actually create digestive issues and produce more pickiness, not less. Stick to one good food consistently and let the routine do the work.',
      },
    ],
  },
  {
    slug: 'sensitive-stomach',
    concernName: 'Chronic sensitive stomach in dogs',
    tldr: 'A chronic sensitive stomach in dogs typically means frequent loose stool, gas, gurgling, or occasional vomiting that comes and goes despite a quality diet. The root cause is usually a disrupted gut microbiome, mild food sensitivity, or a low-grade inflammatory pattern. Long-term management combines a consistent simple diet, a daily probiotic, and ruling out specific triggers.',
    signs: [
      'Frequent gas and gurgling noises',
      'Soft or unpredictable stool consistency',
      'Occasional vomiting, especially in the morning',
      'Reduced or selective appetite',
      'Grass eating or licking the floor before vomiting',
      'Reactions to small diet changes that other dogs handle fine',
      'Audible stomach noises between meals',
    ],
    commonCauses: [
      {
        cause: 'Microbiome imbalance',
        explanation:
          'A gut with reduced bacterial diversity is less resilient and reacts to small changes that a healthy gut would shrug off.',
      },
      {
        cause: 'Mild food sensitivity',
        explanation:
          'A specific protein or ingredient may cause persistent low-grade reactions without producing a clear allergy presentation.',
      },
      {
        cause: 'Frequent diet changes',
        explanation:
          'Dogs who get new foods, new treats, and table scraps regularly never give the gut a chance to stabilize.',
      },
      {
        cause: 'High-fat or rich diet',
        explanation:
          'Excess dietary fat is hard on the digestive system and is a common trigger for chronic sensitive-stomach symptoms.',
      },
      {
        cause: 'Stress',
        explanation:
          'Anxiety and chronic stress affect gut motility and microbiome composition through the gut-brain axis.',
      },
      {
        cause: 'Slow gut motility or bile reflux',
        explanation:
          'Some dogs have functional issues that cause empty-stomach nausea and morning vomiting, often manageable with feeding schedule changes.',
      },
    ],
    byline: STANDARD_BYLINE,
    sections: [
      {
        heading: 'What sensitive stomach actually means',
        body: '"Sensitive stomach" is a catchall, but the pattern is recognizable. These dogs have chronic, low-grade GI symptoms — soft stool one week, gas the next, occasional morning vomiting, audible gurgling, and a long list of foods that do not agree with them. Nothing acute, nothing dramatic, but never quite settled.\n\nThe difference between a sensitive stomach and an acute GI illness is the chronicity. Sensitive stomach symptoms come and go for weeks or months. Acute illness is usually sudden, severe, and resolves in days. Different problems, different approaches.',
      },
      {
        heading: 'What causes it',
        body: 'In most cases, it is a combination of microbiome imbalance and mild food sensitivity. Dogs with sensitive stomachs often have less bacterial diversity than dogs with iron guts, which means less resilience and more reactivity to small changes. On top of that, many of these dogs have one or two specific ingredients they do not tolerate well — sometimes too subtle to count as a true allergy but enough to drive symptoms.\n\nLifestyle plays a role. Frequent diet changes, lots of treats and table scraps, high-fat foods, and stress all amplify symptoms. Some dogs also have functional issues like slow gut motility or bile reflux that cause empty-stomach nausea and predictable morning vomiting.',
      },
      {
        heading: 'How to address it at home',
        body: 'Simplify and stabilize. Stick to one quality food consistently — no switching brands every few weeks, no rotating proteins, no daily table scraps. Cut treats to a single low-fat option used in small amounts. Many sensitive-stomach dogs do better on a limited-ingredient diet because fewer ingredients means fewer potential triggers.\n\nSplit meals. Two or three smaller meals across the day are easier on a sensitive gut than one large meal. Late-evening snacks help with morning bile vomiting in dogs who get nauseous on an empty stomach.\n\nA daily probiotic addresses the microbiome side of the equation. Most dogs with sensitive stomachs show meaningful improvement within 4-6 weeks of consistent daily use — firmer stool, less gas, fewer flare-ups when small things change.',
      },
      {
        heading: 'Long-term management',
        body: 'Sensitive stomachs are managed, not cured. The goal is to build the most resilient gut possible and minimize the triggers that drive flares. That looks like consistent food, daily probiotic support, limited treats, and a quiet effort to identify and remove any specific ingredient triggers over time. Most dogs become significantly more stable within 2-3 months of this approach, even if they will never be the gut-of-steel type.',
      },
    ],
    whenToSeeVet:
      'See your vet if symptoms are severe, getting worse, include blood in stool or vomit, weight loss, lethargy, or if your dog seems generally unwell. Chronic sensitive stomach is a manageable pattern; suspected inflammatory bowel disease, pancreatitis, or other underlying conditions need diagnosis and possibly prescription treatment.',
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      "Probiotic Chews: For dogs' gut wellness. Chicken Flavor. Approximately 80 soft chews, 2.5 g each, net weight 200 g. See the product page for current ingredients and directions.",
    faqs: [
      {
        question: 'How is a sensitive stomach different from a food allergy?',
        answer:
          'A food allergy is an immune-mediated reaction to a specific protein and usually produces consistent, identifiable reactions. A sensitive stomach is a broader pattern of low-grade GI reactivity — often microbiome-driven — that does not have a single clear trigger and varies day to day.',
      },
      {
        question: 'Should I switch to a limited-ingredient diet?',
        answer:
          'Many sensitive-stomach dogs do well on limited-ingredient diets because fewer ingredients mean fewer potential triggers. Pick one and stick with it for at least 8 weeks before evaluating — constant switching defeats the purpose.',
      },
      {
        question: 'My dog vomits yellow bile in the morning — is that a sensitive stomach issue?',
        answer:
          'Often, yes. Bile reflux on an empty stomach causes morning yellow vomit in some dogs and usually responds to a small late-evening snack to keep the stomach from being fully empty overnight. If it persists despite that, talk to your vet.',
      },
      {
        question: 'How long until a probiotic helps a sensitive stomach?',
        answer:
          'Most owners notice firmer baseline stool and fewer flares within 4-6 weeks of consistent daily use. Sensitive stomachs are slower to stabilize than acute issues, but the trajectory is reliable when intake is consistent.',
      },
      {
        question: 'Are there foods I should avoid with a sensitive-stomach dog?',
        answer:
          'High-fat foods (rich treats, fatty meat trimmings, dairy), heavily processed treats, and frequent novel ingredients are the usual culprits. Bones, organ meats, and rich human foods often trigger flares. Boring is good for these dogs.',
      },
      {
        question: 'Will my dog ever have a normal stomach?',
        answer:
          'Most sensitive-stomach dogs become significantly more stable with consistent diet and microbiome support — fewer flares, more predictable stool, less reactivity to small changes. They may never have a cast-iron gut, but they can absolutely live comfortably without chronic GI drama.',
      },
    ],
  },
];

export const concernPageBySlug = (slug: string): ConcernPage | undefined =>
  concernPages.find((c) => c.slug === slug);
export const concernPageSlugs = (): string[] => concernPages.map((c) => c.slug);
