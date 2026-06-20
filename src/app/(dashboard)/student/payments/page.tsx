import { PaymentHistoryPage } from "@/components/student/payment-history";
import { studentPaymentHistoryService } from "@/services/student-payment-history.service";

export async function generateMetadata() {
  const data = await studentPaymentHistoryService.getPaymentHistory();

  return {
    title: data.title,
  };
}

export default async function StudentPaymentsPage() {
  const data = await studentPaymentHistoryService.getPaymentHistory();

  return <PaymentHistoryPage data={data} />;
}
