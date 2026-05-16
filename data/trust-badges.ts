export type TrustBadge = {
  label: string;
  iconKey: 'stethoscope' | 'star' | 'shield' | 'paw' | 'us-factory';
  bgColor: 'warmyellow' | 'terracotta' | 'mint' | 'pinky' | 'cream';
};

export const trustBadges: TrustBadge[] = [
  { label: 'Vet-formulated', iconKey: 'stethoscope', bgColor: 'warmyellow' },
  { label: '10,000+ reviews', iconKey: 'star', bgColor: 'pinky' },
  { label: '90-day guarantee', iconKey: 'shield', bgColor: 'mint' },
  { label: 'Free ship $40+', iconKey: 'paw', bgColor: 'terracotta' },
  { label: 'Made in USA', iconKey: 'us-factory', bgColor: 'cream' },
];
