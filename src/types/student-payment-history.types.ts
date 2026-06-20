export interface StudentPaymentHistoryItem {
  id: string;
  courseTitle: string;
  amount: string;
  paidOn: string;
  status: "paid" | "pending" | "failed";
  invoiceUrl?: string;
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
