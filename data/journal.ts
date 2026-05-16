export type JournalEntry = {
  slug: string;
  category: string;
  title: string;
  readMin: number;
  reviewedBy: string;
  illustration: 'bowl' | 'bone' | 'clock';
};

export const journalEntries: JournalEntry[] = [
  {
    slug: 'signs-your-dog-needs-a-probiotic',
    category: 'Gut health',
    title: 'Signs your dog needs a probiotic',
    readMin: 6,
    reviewedBy: 'Dr. M. Hayes, DVM',
    illustration: 'bowl',
  },
  {
    slug: 'how-long-until-joint-chews-start-working',
    category: 'Hip + joint',
    title: 'How long until joint chews start working?',
    readMin: 4,
    reviewedBy: 'Dr. M. Hayes, DVM',
    illustration: 'bone',
  },
  {
    slug: 'is-my-dogs-poop-normal-color-chart',
    category: 'Gut health',
    title: "Is my dog's poop normal? A color guide",
    readMin: 5,
    reviewedBy: 'Dr. M. Hayes, DVM',
    illustration: 'clock',
  },
];
