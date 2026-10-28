import type { Metadata } from 'next';
import { LegalPage } from '@/components/content/legal-page';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Shipping',
  description:
    'How PawBite ships, where we ship to, how long it takes, and what to do if something goes wrong.',
  alternates: { canonical: `${SITE_URL}/shipping` },
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping."
      lastUpdated="May 16, 2026"
      intro="Free shipping on orders over $40 and on every subscription order. Typical delivery is 3-7 business days. The longer version is below."
      sections={[
        {
          heading: 'Where we ship.',
          body: `We currently ship to:

- All 50 US states (including Alaska and Hawaii)
- US military APO/FPO addresses
- US territories: Puerto Rico, US Virgin Islands

Not yet shipping to: Canada (on the roadmap), the EU, the UK, or anywhere else international. We'll add international when we can do it without compromising delivery times.`,
        },
        {
          heading: 'Shipping costs.',
          body: `**Subscription orders:** Always free, no minimum.

**One-time orders over $40:** Free.

**One-time orders under $40:** $5 flat shipping.

**Expedited shipping:** Not currently offered. We're a small operation and standard shipping gets your dog's chews to you in less than a week — which is fine since you're not running out today.`,
        },
        {
          heading: 'How long it takes.',
          body: `**Processing time:** We pack orders the next business day. Orders placed before 12pm ET ship same day Monday-Thursday.

**Transit time:**
- East Coast: 2-4 business days
- Midwest: 3-5 business days
- West Coast / Mountain: 4-7 business days
- Alaska / Hawaii: 5-10 business days

**Carriers:** We use a mix of UPS Ground, USPS Priority, and DHL — whichever has the best route to your address. You'll get a tracking number via email when your order ships.`,
        },
        {
          heading: 'Subscription cadence.',
          body: `By default, subscriptions ship every 30 days. You can change to 45 or 60 days from your account.

We ship your next order based on when the prior order shipped — not when it was delivered. So if your dog finishes the chews a few days before the next order arrives, you can skip the next shipment or move it up.

Skip, pause, swap, or cancel from your account in one click. No emails. No phone calls.`,
        },
        {
          heading: 'Lost or damaged packages.',
          body: `If your tracking shows delivered but you can't find the package, wait 24 hours (carriers sometimes mark "delivered" before they actually deliver, then drop it off the next day). If it still hasn't shown up, email help@pawbite.com — we'll send a replacement at no charge.

If the canister arrives crushed, leaking, or open, send us a photo at help@pawbite.com and we'll ship a replacement. Don't feed your dog any chews from a damaged canister.

If your package is sent to the wrong address because you typed it wrong, we can still help. We'll redirect the original (if possible) or send a replacement at cost.`,
        },
        {
          heading: 'Packaging.',
          body: 'Our products are packaged in paper tubes. Follow the storage directions printed on each product label.',
        },
      ]}
      contactNote="Email help@pawbite.com. We respond within one business day."
    />
  );
}
