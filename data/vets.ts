export type Vet = {
  slug: string;
  name: string;
  credentials: string;
  bio: string;
  specialty: string;
};

/**
 * Single switch for every veterinary-review claim on the site.
 * While false (pre-launch, no signed DVM): bylines render "Veterinary review pending",
 * reviewedBy is omitted from Article schema, and no Person schema is emitted for advisors.
 * Flip to true ONLY when a real, named veterinarian has signed off — then repopulate
 * `vets` below with their real name, credentials, and bio.
 */
export const VET_REVIEW_LIVE = false;

export const vets: Vet[] = [
  {
    slug: 'm-hayes',
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    bio: 'Dr. Hayes is a placeholder vet reviewer for pre-launch content. Real advisory board members will be named here once contracts are finalized.',
    specialty: 'Veterinary nutrition, gut microbiome, geriatric care',
  },
];

export const defaultVet = vets[0];
export const defaultAuthor = 'PawBite editorial team';
