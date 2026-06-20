export type StudentPaymentMethodId = "bkash" | "rocket" | "visa" | "nagad" | "mastercard";

export type StudentPaymentStatus = "pending" | "failed" | "completed";

export interface StudentPaymentHistoryItem {
  id: string;
  courseTitle: string;
  courseSlug: string;
  date: string;
  transactionId: string;
  paymentMethod: StudentPaymentMethodId;
  amount: number;
  status: StudentPaymentStatus;
  actionLabel: "Pay Now" | "Go to Course";
  actionHref: string;
}

export interface StudentPaymentHistoryEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface StudentPaymentHistoryPageData {
  title: string;
  subtitle: string;
  payments: StudentPaymentHistoryItem[];
  emptyState: StudentPaymentHistoryEmptyState;
}
