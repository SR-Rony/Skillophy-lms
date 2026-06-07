"use client";

import { Lock, Phone } from "lucide-react";
import type {
  CheckoutContact,
  CheckoutPaymentMethod,
  CheckoutPaymentMethodId,
} from "@/components/public/checkout/types";
import { PaymentMethodOption } from "@/components/public/checkout/checkout-payment-methods";

interface CheckoutPaymentSectionProps {
  methods: CheckoutPaymentMethod[];
  selectedMethod: CheckoutPaymentMethodId;
  onSelectMethod: (id: CheckoutPaymentMethodId) => void;
  contact: CheckoutContact;
}

export function CheckoutPaymentSection({
  methods,
  selectedMethod,
  onSelectMethod,
  contact,
}: CheckoutPaymentSectionProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[20px]">
          Payment Methods
        </h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f8ef] px-3 py-1.5 text-[12px] font-semibold text-[#22c55e] sm:text-[13px]">
          <Lock className="h-3.5 w-3.5" aria-hidden />
          Secured payment
        </span>
      </div>

      <div className="mt-5 space-y-3 sm:space-y-4">
        {methods.map((method) => (
          <PaymentMethodOption
            key={method.id}
            id={method.id}
            label={method.label}
            selected={selectedMethod === method.id}
            onSelect={onSelectMethod}
          />
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 sm:mt-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef]">
          <Phone className="h-4 w-4 text-[#22c55e]" aria-hidden />
        </span>
        <p className="pt-1.5 text-[13px] leading-[1.55] text-[#6f6562]">
          For any requirement about the course call{" "}
          <span className="font-bold text-[#3c3332]">{contact.phone}</span> ({contact.hours})
        </p>
      </div>
    </div>
  );
}
