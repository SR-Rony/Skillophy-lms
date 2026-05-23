import type { Transaction } from "@/services/payment.service";

export const mockTransactions: Transaction[] = [
  {
    id: "txn-1",
    amount: 89.99,
    currency: "USD",
    status: "completed",
    description: "Full-Stack Web Development",
    createdAt: "2025-04-01T14:30:00Z",
  },
  {
    id: "txn-2",
    amount: 59.99,
    currency: "USD",
    status: "completed",
    description: "UI/UX Design Fundamentals",
    createdAt: "2025-03-15T09:00:00Z",
  },
];
