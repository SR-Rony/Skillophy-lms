import { TeacherPaymentHistoryPage } from "@/components/teacher/payment-history";
import { teacherPaymentHistoryService } from "@/services/teacher";

export const metadata = { title: "Payment History" };

export default async function TeacherPaymentsPage() {
  const data = await teacherPaymentHistoryService.getPaymentHistory();

  return <TeacherPaymentHistoryPage data={data} />;
}
