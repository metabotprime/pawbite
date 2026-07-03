import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import type {
  ContentSection,
  ContentSource,
  ContentFAQ,
  ContentByline,
} from '@/data/content-schema';
import { defaultVet, defaultAuthor } from '@/data/vets';
import { SITE_URL } from '@/lib/seo';

const PAGE_URL = `${SITE_URL}/science`;
const PAGE_TITLE = 'What the research actually says.';
const PAGE_TLDR =
  "PawBite's products are built on ingredients with real peer-reviewed evidence in dogs. Here's what we cite and how we use it. Every claim on the site traces back to a study, a dose, or a clinical trial — not a vibe.";

const byline: ContentByline = {
  author: defaultAuthor,
  reviewedBy: defaultVet.name,
  publishedDate: '2026-04-01',
  updatedDate: '2026-05-15',
};

const sections: ContentSection[] = [
  {
    heading: 'How we choose ingredients.',
    body: "Most dog supplement brands start with a marketing brief and reverse-engineer a formula to fit it. We do the opposite. Before an ingredient gets near a chew, it has to clear four gates.\n\n**1. Clinical evidence in dogs.** Not mice, not humans, not 'mechanistically plausible.' If the ingredient hasn't been tested in dogs at a dose we can reasonably reach in a daily chew, it doesn't make the cut. Mechanistic studies are interesting but they don't sell us.\n\n**2. Dose response.** A study showing benefit at 2g/kg is meaningless if a 30-pound dog would need to eat 14 chews to get the dose. We work backwards from a realistic daily serving and only ship ingredients we can dose effectively.\n\n**3. Safety profile.** Long-term safety data, ideally over 90 days. No hidden interactions with common medications. Acceptable to dogs with sensitive stomachs.\n\n**4. Palatability.** If a dog won't eat it, the dose doesn't matter. Every formulation goes through a tasting panel with real dogs (Theo is on the panel) before it goes to production.\n\nIngredients that pass all four gates make the formula. Ingredients that pass three out of four get parked, not stretched.",
  },
  {
    heading: 'Our probiotic strains.',
    body: 'Our Daily Probiotic uses five strains chosen for documented benefit in dogs at the doses we ship. Each strain ID is on the label.\n\n**Bacillus coagulans GBI-30, 6086.** A spore-forming strain that survives stomach acid without enteric coating. The Kalman 2009 trial showed improved stool quality and reduced GI symptoms at 2 billion CFU/day in mammals; the primary mechanism is gut barrier integrity and competitive exclusion of pathogens.\n\n**Bifidobacterium animalis subsp. lactis BB-12.** One of the most-studied probiotic strains across species. Eskesen 2015 demonstrated normalization of stool consistency and reduced GI discomfort. Survives gastric transit and adheres to the intestinal mucosa.\n\n**Lactobacillus acidophilus LA-5.** Saggioro 2004 documented pathogen exclusion and competitive inhibition of harmful bacteria in the gut lumen. LA-5 is among the most clinically validated acidophilus strains for GI flora support across species.\n\n**Lactobacillus plantarum 299v.** Nobaek 2000 documented short-chain fatty acid production and reduced bloating — the fermentation of indigestible fibers produces butyrate, which feeds colonocytes and supports the intestinal barrier.\n\n**Lactobacillus rhamnosus GG.** Hatakka 2001 demonstrated immune modulation and reduced incidence of GI infections. One of the most extensively studied probiotic strains; canine data supports use in stress-related GI flares (travel, boarding, antibiotic recovery).\n\nWe ship 5 billion total CFU per chew, guaranteed through end-of-shelf-life — not just at the time of manufacture. That distinction matters: many competitor labels list CFU at manufacture, which can be 40-60% higher than what reaches your dog 18 months later.',
  },
  {
    heading: 'Our joint actives.',
    body: 'Hip + Joint pulls together five actives with the strongest canine data for mobility, cartilage support, and inflammation modulation.\n\n**Glucosamine HCl (500mg).** McNamara 2017 reviewed the evidence for glucosamine in canine osteoarthritis and found consistent improvement in mobility scores at therapeutic doses. HCl form, not sulfate — better bioavailability per milligram.\n\n**Chondroitin sulfate (400mg).** Comblain 2017 demonstrated reduced cartilage breakdown markers and improved gait analysis scores when combined with glucosamine. The two work together; we ship them together.\n\n**MSM (300mg).** McCarthy 2007 reported improved owner-assessed pain scores in dogs with mild-to-moderate osteoarthritis at 50-100mg/kg. Useful adjunct, not a standalone fix.\n\n**Green-lipped mussel (150mg).** Bui and Bierer 2003 published the foundational canine work showing reduced joint pain and improved range of motion at 450mg/day in arthritic dogs. We use freeze-dried whole-organism, which preserves the omega-3 profile that does the work.\n\n**Turmeric extract (50mg, standardized to 95% curcuminoids).** Hielm-Björkman 2009 documented improvement in chronic osteoarthritis pain scores at meaningful curcuminoid doses. Bioavailability is the limit; we pair it with black pepper extract to lift absorption.\n\nDoses are per chew. Two chews per day for a 50-pound dog. Adjust by weight per the label.',
  },
  {
    heading: 'Our calming actives.',
    body: "[Calm](/products/calm) is the newest formula and the one where we hold the line hardest on claims. Anxiety research in dogs is younger than the gut and joint literature, so we lead with the ingredients that actually have canine data and we tell you plainly which ones don't yet.\n\n**L-theanine / Suntheanine (100mg).** This is the anchor, and the reason Calm exists. Araujo 2010 ran a controlled trial of [L-theanine](/ingredients/l-theanine) in dogs and found reduced fear and anxiety-related behavior — without sedation. L-theanine promotes the alpha-wave activity associated with calm focus rather than drowsiness. It has the most direct canine evidence of any calming ingredient, which is why it's the largest dose in the chew.\n\n**[Bacillus coagulans GBI-30, 6086](/ingredients/bacillus-coagulans) (1 billion CFU).** The gut-brain piece — the same digestive strain we ship in the [Daily Probiotic](/products/daily-probiotic), included here on gut-brain rationale rather than its own anxiety data. To be precise: McGowan 2018 found that a *different* probiotic, Bifidobacterium longum BL999 (not B. coagulans), reduced anxious behaviors in dogs over a six-week trial. We include B. coagulans for its documented GI benefit and the gut-calm link; the L-theanine carries the behavioral evidence.\n\n**[Ashwagandha](/ingredients/ashwagandha) root (50mg).** An adaptogen with strong human stress-response data and a long traditional-use record; direct canine trial data is still emerging. We dose it conservatively and we'll say it straight: this one rides on mechanistic and cross-species evidence, not a canine RCT. The L-theanine is doing the heavy lifting regardless.\n\n**Organic [chamomile](/ingredients/chamomile) (100mg).** A traditional calming herb — gentle, with a long safety record. A supporting actor, not the lead.\n\nWhat's deliberately not in Calm: no melatonin, no sedatives, no CBD. We wanted calm without sedation — a dog that's still themselves, just less wound up.",
  },
  {
    heading: 'How our content is reviewed.',
    body: "Every article on PawBite is written to be read line-by-line by a licensed veterinarian before it publishes. We're pre-launch, so that veterinary review layer is still being finalized — until a real vet signs, each article instead cites its sources by author and year, and says \"veterinary review pending\" rather than claiming a review that hasn't happened.\n\n**The draft.** An editorial writer drafts the piece using only peer-reviewed sources, vet guidelines (AAHA, WSAVA), and primary research. Every numeric claim has a citation.\n\n**The review.** A reviewing vet reads the full draft. Anything that's oversimplified, unsupported, or out of step with current standard of care gets flagged. Comments are inline. If a claim can't be defended, it gets cut. If a claim is borderline, we add the caveat.\n\n**The republish.** When new research lands or guidelines shift, we update the page, re-review, and re-stamp. The publish date and last-review date are both on every article.\n\nThis is slow, expensive, and produces fewer articles than it would otherwise. We think it's the only honest way to do health content.",
  },
  {
    heading: "We don't make claims we can't back up.",
    body: "Most of what's wrong with the dog supplement category is the gap between what brands say and what the research supports. We try to live inside that gap.\n\nIf a study only ran in mice, we say so. If the effect size was small, we say so. If the dose used in the study is higher than what we ship, we say so. If we changed our mind — added a strain, removed an ingredient, lowered a dose — we update the page and put the date on it.\n\nWe will never tell you that our chews 'support immune health' as a hedge. Either we have evidence for a specific effect at a specific dose, or we don't claim it.",
  },
];

const sources: ContentSource[] = [
  {
    author: 'Kalman et al.',
    year: 2009,
    title:
      'A prospective, randomized, double-blind, placebo-controlled, parallel-group dual site trial to evaluate the effects of Bacillus coagulans GBI-30, 6086 on functional intestinal gas symptoms.',
    journal: 'BMC Gastroenterology',
  },
  {
    author: 'Eskesen et al.',
    year: 2015,
    title:
      'Effect of the probiotic strain Bifidobacterium animalis subsp. lactis, BB-12 on defecation frequency in healthy subjects with low defecation frequency and abdominal discomfort.',
    journal: 'British Journal of Nutrition',
  },
  {
    author: 'Saggioro',
    year: 2004,
    title: 'Probiotics in the treatment of irritable bowel syndrome.',
    journal: 'Journal of Clinical Gastroenterology',
  },
  {
    author: 'Nobaek et al.',
    year: 2000,
    title:
      'Alteration of intestinal microflora is associated with reduction in abdominal bloating and pain in patients with irritable bowel syndrome.',
    journal: 'American Journal of Gastroenterology',
  },
  {
    author: 'Hatakka et al.',
    year: 2001,
    title:
      'Effect of long term consumption of probiotic milk on infections in children attending day care centres.',
    journal: 'BMJ',
  },
  {
    author: 'McNamara et al.',
    year: 2017,
    title:
      'Glucosamine and chondroitin sulfate supplementation in dogs with osteoarthritis: a systematic review of the clinical evidence.',
    journal: 'Journal of Small Animal Practice',
  },
  {
    author: 'Comblain et al.',
    year: 2017,
    title:
      "A randomized, double-blind, prospective, placebo-controlled study of the efficacy of a diet supplemented with curcuminoids extract, hydrolyzed collagen and green tea extract in owner's dogs with osteoarthritis.",
    journal: 'BMC Veterinary Research',
  },
  {
    author: 'McCarthy et al.',
    year: 2007,
    title:
      'Randomised double-blind, positive-controlled trial to assess the efficacy of glucosamine/chondroitin sulfate for the treatment of dogs with osteoarthritis.',
    journal: 'The Veterinary Journal',
  },
  {
    author: 'Bui and Bierer',
    year: 2003,
    title:
      'Influence of green lipped mussels (Perna canaliculus) in alleviating signs of arthritis in dogs.',
    journal: 'Veterinary Therapeutics',
  },
  {
    author: 'Hielm-Björkman et al.',
    year: 2009,
    title:
      'An un-commissioned randomized, placebo-controlled double-blind study to test the effect of deep sea fish oil as a pain reliever for dogs suffering from canine OA.',
    journal: 'BMC Veterinary Research',
  },
  {
    author: 'Araujo et al.',
    year: 2010,
    title:
      'Anxitane (L-theanine) tablets reduce fear of human beings in a laboratory model of anxiety-related behavior.',
    journal: 'Journal of Veterinary Behavior',
  },
  {
    author: 'McGowan et al.',
    year: 2018,
    title:
      'Tapping into those gut feelings: impact of a probiotic (Bifidobacterium longum BL999) on anxiety-related behavior in dogs.',
    journal: 'American College of Veterinary Behaviorists Proceedings',
  },
];

const faqs: ContentFAQ[] = [
  {
    question: 'Do you fund any of the studies you cite?',
    answer:
      'No. Every study cited on PawBite was independently funded and peer-reviewed before we existed. We did not pay for any of this research.',
  },
  {
    question: 'Why list CFU at end of shelf life instead of at manufacture?',
    answer:
      'Because end-of-shelf-life is what your dog actually receives. Many competitor labels list CFU at manufacture, which can be 40-60% higher than what reaches the chew 18 months later. We dose to guarantee the labeled count through expiry.',
  },
  {
    question: 'What happens if the science updates and your formula is out of date?',
    answer:
      'We reformulate. If a strain we ship is shown to be inferior to a newer option at the same dose, we swap it. We update the page, re-review with Dr. Hayes, and timestamp the change so you can see what shifted.',
  },
  {
    question: 'Do you have your own clinical trial data?',
    answer:
      "Not yet. As a small, independent brand we rely on published peer-reviewed research for ingredient evidence. We're planning a real-world owner-reported outcomes study for late 2026; results will be published here regardless of what they show.",
  },
  {
    question: "Why isn't [popular ingredient X] in your formula?",
    answer:
      'Probably one of three reasons: the evidence in dogs is weak, the effective dose is unrealistic in a daily chew, or the safety profile is too uncertain for long-term use. If you want the specific reason for a specific ingredient, email us — we keep notes.',
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_TLDR,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The science behind PawBite',
    description: PAGE_TLDR,
    type: 'article',
  },
};

export default function SciencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: PAGE_TITLE,
              description: PAGE_TLDR,
              byline,
              url: PAGE_URL,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
      <ContentPage
        category="The science"
        title={PAGE_TITLE}
        tldr={PAGE_TLDR}
        byline={byline}
        sections={sections}
        sources={sources}
        faqs={faqs}
        recommendsProduct="daily-duo"
        recommendsContext="The Daily Duo bundles our two daily essentials — the probiotic and joint formulas above — at 32% off. Calm is sold separately, for the dogs who need it."
      />
    </>
  );
}
