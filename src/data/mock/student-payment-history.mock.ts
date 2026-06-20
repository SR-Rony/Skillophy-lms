import { ROUTES } from "@/constants";
import type { StudentPaymentHistoryPageData } from "@/types/student-payment-history.types";

/** Demo payment history — set `payments` to `[]` to preview empty state. */
export const studentPaymentHistoryDemo: StudentPaymentHistoryPageData = {
  title: "Payment History",
  subtitle:
    "Access your complete payment history and conveniently settle any pending transactions at any time.",
  payments: [],
  emptyState: {
    heading: "No Payment History!",
    message: "No purchases found in your history",
    actionLabel: "Explore Courses",
    actionHref: ROUTES.student.courses,
  },
};
