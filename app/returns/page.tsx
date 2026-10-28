import type { Metadata } from 'next';
import { LegalPage } from '@/components/content/legal-page';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Returns + 90-day guarantee',
  description:
    'Our 90-day money-back guarantee on your first order — and how returns work on subsequent shipments.',
  alternates: { canonical: `${SITE_URL}/returns` },
};

export default function ReturnsPage() {
  return (
    <LegalPage
      title="Returns + the 90-day guarantee."
      lastUpdated="May 16, 2026"
      intro="If your dog doesn't take to it, or you don't see results in 90 days, email help@pawbite.com and we'll refund your first order in full. Keep the chews — donate them or pass them along."
      sections={[
        {
          heading: 'The 90-day money-back guarantee.',
          body: `Your first order with PawBite — whether one-time or your first subscription shipment — is covered by a 90-day money-back guarantee. If you're not satisfied for any reason, email help@pawbite.com and we'll refund the order in full.

You don't need to ship the chews back. We don't ask follow-up questions. We don't make you fill out forms. Just email us with your order number and we'll process the refund within 5 business days.

Why are we so easy about this? Because if a dog doesn't respond well to a supplement, the right move is to figure out what does work — not to make the owner feel stuck. And honestly, very few people use the guarantee. Most dogs respond to one or both of our products.`,
        },
        {
          heading: 'After the first 90 days.',
          body: `Subsequent subscription shipments aren't covered by the guarantee, but we handle a few cases anyway:

**Damaged on arrival:** Send a photo within 14 days, we'll ship a replacement at no charge.

**Sudden adverse reaction:** Stop the chew, contact your vet, then email us. We'll refund the affected order and pause your subscription so you can decide whether to swap SKUs or cancel.

**Allergic reaction discovered later:** If you've been on PawBite for months and discover your dog has developed a chicken sensitivity (both Probiotic Chews and Joint + Mobility Chews list chicken ingredients; flavor names do not identify every allergen), email us and we'll work it out.

**Wrong product shipped:** Our fault — we ship the right thing at no charge and you can keep the wrong one.`,
        },
        {
          heading: 'What we cannot accept.',
          body: `**Opened canisters for resale.** We can't take back opened canisters from someone else and put them on another dog's shelf. So we don't ask you to ship them back — but we also can't apply the "return" to inventory.

**Damage caused by leaving the package outside.** If tracking shows delivered and the canister was rained on while it sat on your porch for three days, that's not on us. Bring it in.

**Returns more than 14 days after delivery, unless covered by the 90-day guarantee.** After 14 days, the assumption is the product is fine and we've already invoiced you. The 90-day guarantee is the catch for "I tried it and it didn't work" — the 14-day window is for "it arrived broken."`,
        },
        {
          heading: 'How to cancel a subscription.',
          body: `One click from your account at pawbite.com/account/subscriptions. We don't make you call. We don't send retention offers designed to wear you down. We don't charge cancellation fees.

If you cancel and want to come back later, your account stays — log in with the same email and reactivate.

If you want to pause for a bit instead of cancelling, you can do that too. Pause indefinitely, or set a return date.`,
        },
        {
          heading: 'How refunds work.',
          body: `Refunds go back to the original payment method. Card refunds typically post within 3-7 business days depending on your bank. Apple Pay / Google Pay refunds tend to be faster.

If you paid with a gift card, store credit, or promo code, the refund returns to those original sources first, then any remainder to your card.

You'll get an email confirmation when the refund is processed.`,
        },
      ]}
      contactNote="Email help@pawbite.com with your order number. We respond within one business day. No forms, no hoops."
    />
  );
}
