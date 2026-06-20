import type { StudentPaymentHistoryPageData } from "@/types/student-payment-history.types";
import { PaymentHistoryContent } from "./payment-history-content";

interface PaymentHistoryPageProps {
  data: StudentPaymentHistoryPageData;
}

export function PaymentHistoryPage({ data }: PaymentHistoryPageProps) {
  return <PaymentHistoryContent data={data} />;
}
