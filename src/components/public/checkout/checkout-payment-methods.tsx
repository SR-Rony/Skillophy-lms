import type { ReactNode } from "react";
import type { CheckoutPaymentMethodId } from "@/components/public/checkout/types";
import { cn } from "@/utils";

function BkashLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-[8px] bg-[#e2136e] px-3 text-[13px] font-black tracking-tight text-white",
        className
      )}
    >
      bKash
    </span>
  );
}

function NagadLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-[8px] bg-[#f6921e] px-3 text-[13px] font-black tracking-tight text-white",
        className
      )}
    >
      Nagad
    </span>
  );
}

function RocketLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-[72px] items-center justify-center rounded-[8px] bg-[#8b3f98] px-3 text-[13px] font-black tracking-tight text-white",
        className
      )}
    >
      Rocket
    </span>
  );
}

function CardBrandsLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="rounded-[4px] bg-[#006fcf] px-1.5 py-0.5 text-[9px] font-bold text-white">
        AMEX
      </span>
      <span className="rounded-[4px] bg-[#1a1f71] px-1.5 py-0.5 text-[9px] font-bold text-white">
        VISA
      </span>
      <span className="inline-flex h-5 w-7 items-center justify-center rounded-[4px] bg-[#f79e1b]">
        <span className="h-3 w-3 rounded-full bg-[#eb001b]" />
        <span className="-ml-2 h-3 w-3 rounded-full bg-[#f79e1b]" />
      </span>
    </span>
  );
}

const paymentLogos: Record<CheckoutPaymentMethodId, ReactNode> = {
  bkash: <BkashLogo />,
  nagad: <NagadLogo />,
  rocket: <RocketLogo />,
  other: <CardBrandsLogo />,
};

interface PaymentMethodOptionProps {
  id: CheckoutPaymentMethodId;
  label: string;
  selected: boolean;
  onSelect: (id: CheckoutPaymentMethodId) => void;
}

export function PaymentMethodOption({
  id,
  label,
  selected,
  onSelect,
}: PaymentMethodOptionProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center justify-between gap-4 rounded-[14px] border bg-white px-4 py-4 transition sm:px-5 sm:py-[18px]",
        selected
          ? "border-[#1a1a1a] shadow-[0_4px_16px_rgba(80,37,31,0.06)]"
          : "border-[#ece6e3] hover:border-[#d9d2cf]"
      )}
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
            selected ? "border-[#1a1a1a]" : "border-[#c4bbb8]"
          )}
        >
          {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#1a1a1a]" />}
        </span>
        <input
          type="radio"
          name="payment-method"
          value={id}
          checked={selected}
          onChange={() => onSelect(id)}
          className="sr-only"
        />
        <span className="text-[15px] font-semibold text-[#1a1a1a] sm:text-[16px]">{label}</span>
      </span>

      {paymentLogos[id]}
    </label>
  );
}
