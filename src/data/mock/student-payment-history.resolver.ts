import { studentPaymentHistoryDemo } from "@/data/mock/student-payment-history.mock";
import type { StudentPaymentHistoryPageData } from "@/types/student-payment-history.types";

export function resolveStudentPaymentHistory(): StudentPaymentHistoryPageData {
  return studentPaymentHistoryDemo;
}
