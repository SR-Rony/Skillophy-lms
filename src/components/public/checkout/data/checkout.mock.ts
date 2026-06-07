import type { CheckoutPageData } from "@/components/public/checkout/types";

export const checkoutPageMockData: CheckoutPageData = {
  paymentMethods: [
    { id: "bkash", label: "bKash" },
    { id: "nagad", label: "Nagad" },
    { id: "rocket", label: "Rocket" },
    { id: "other", label: "Other payment method" },
  ],
  defaultPaymentMethod: "bkash",
  summary: {
    subtotal: 4200,
    discount: 800,
  },
  contact: {
    phone: "165387",
    hours: "10 am to 10 pm",
  },
};
