export type CheckoutPaymentMethodId = "bkash" | "nagad" | "rocket" | "other";

export interface CheckoutPaymentMethod {
  id: CheckoutPaymentMethodId;
  label: string;
}

export interface CheckoutSummary {
  subtotal: number;
  discount: number;
}

export interface CheckoutContact {
  phone: string;
  hours: string;
}

export interface CheckoutPageData {
  paymentMethods: CheckoutPaymentMethod[];
  defaultPaymentMethod: CheckoutPaymentMethodId;
  summary: CheckoutSummary;
  contact: CheckoutContact;
}
