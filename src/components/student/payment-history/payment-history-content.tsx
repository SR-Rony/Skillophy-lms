import { Container } from "@/components/shared";
import type { StudentPaymentHistoryPageData } from "@/types/student-payment-history.types";
import { PaymentHistoryEmptyState } from "./payment-history-empty-state";
import { PaymentHistoryHero } from "./payment-history-hero";

interface PaymentHistoryContentProps {
  data: StudentPaymentHistoryPageData;
}

export function PaymentHistoryContent({ data }: PaymentHistoryContentProps) {
  const hasPayments = data.payments.length > 0;

  return (
    <div className="bg-white">
      <PaymentHistoryHero title={data.title} subtitle={data.subtitle} />

      <Container className="bg-white py-6 md:py-8 lg:py-10">
        {hasPayments ? (
          <div>{/* Payment list — wire up when API is ready */}</div>
        ) : (
          <PaymentHistoryEmptyState emptyState={data.emptyState} />
        )}
      </Container>
    </div>
  );
}
