import { TeacherPaymentHistoryPage } from "@/components/teacher/payment-history";
import { getTeacherPaymentHistoryPageData } from "@/data/mock/teacher-payment-history.mock";

export const metadata = { title: "Payment History" };

export default function TeacherPaymentsPage() {
  const data = getTeacherPaymentHistoryPageData();

  return <TeacherPaymentHistoryPage data={data} />;
}
