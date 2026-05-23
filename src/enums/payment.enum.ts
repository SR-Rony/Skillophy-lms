export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
  REFUNDED = "refunded",
}

export enum TransactionType {
  PURCHASE = "purchase",
  REFUND = "refund",
  SUBSCRIPTION = "subscription",
}
