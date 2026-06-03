export type Testimonial = {
  dogName: string;
  dogBreed: string;
  ownerName: string;
  ownerLocation: string;
  avatarVariant: 1 | 2 | 3 | 4 | 5 | 6;
  quote: string;
  beforeAfter?: {
    metric: string;
    before: number;
    after: number;
    days: number;
  };
};

export const testimonials: Testimonial[] = [
  {
    dogName: 'Bella',
    dogBreed: 'Rescue mix, 7 yo',
    ownerName: 'Maya R.',
    ownerLocation: 'Brooklyn, NY',
    avatarVariant: 1,
    quote:
      "When we adopted Bella she'd been through three different probiotics with no improvement. PawBite is the first one that genuinely worked — within a couple of weeks her stool was firm and the gas was gone. I love that I can read the ingredient list without Googling things.",
    beforeAfter: { metric: 'Stool quality', before: 2, after: 9, days: 14 },
  },
  {
    dogName: 'Otis',
    dogBreed: 'Golden Retriever, 9 yo',
    ownerName: 'Marcus T.',
    ownerLocation: 'Austin, TX',
    avatarVariant: 2,
    quote:
      "Otis was getting slow on his morning walks. Two weeks on Hip + Joint and he's back to jumping on the couch like he's two. The duck flavor is the only chew he doesn't side-eye.",
    beforeAfter: { metric: 'Mobility', before: 4, after: 8, days: 21 },
  },
  {
    dogName: 'Juniper',
    dogBreed: 'Border Collie, 3 yo',
    ownerName: 'Dana K.',
    ownerLocation: 'Portland, OR',
    avatarVariant: 3,
    quote:
      "Juniper used to shake through every thunderstorm and turn into a different dog at the vet. We give her a Calm chew about half an hour ahead and she's still herself — just not vibrating out of her skin. It doesn't knock her out, which is exactly what I wanted.",
    beforeAfter: { metric: 'Storm-night stress', before: 3, after: 8, days: 14 },
  },
  {
    dogName: 'Pickle',
    dogBreed: 'French Bulldog, 4 yo',
    ownerName: 'Priya S.',
    ownerLocation: 'Chicago, IL',
    avatarVariant: 4,
    quote:
      "We've tried every probiotic the vet recommended. PawBite is the only one that actually fixed Pickle's gas situation — which, if you've lived with a frenchie, you know is life-changing. The Daily Duo gets here on the same day every month and we never run out.",
    beforeAfter: { metric: 'Gas + bloating', before: 3, after: 9, days: 30 },
  },
];
