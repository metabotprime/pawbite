import { Container } from '@/components/layout/container';
import { Shield } from '@/components/brand/illustrations/icons/shield';

export function PdpGuarantee() {
  return (
    <Container size="narrow">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-mint p-8 text-center md:flex-row md:text-left">
        <Shield size={64} withHeart className="flex-shrink-0 text-forest" />
        <div>
          <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">
            90-day money-back guarantee.
          </h3>
          <p className="text-charcoal">
            If your dog doesn&apos;t take to it, or you don&apos;t see results within 90 days,
            we&apos;ll refund your first order in full. Keep the chews — donate them to a shelter or
            pass them along to a friend.
          </p>
        </div>
      </div>
    </Container>
  );
}
