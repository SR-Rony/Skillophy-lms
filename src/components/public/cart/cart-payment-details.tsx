"use client";

import { Heading } from "@/components/shared/heading";

import { useState } from "react";
import Link from "next/link";
import { Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import type { CartAppliedPromo } from "@/components/public/cart/types";
import { cn } from "@/utils";

interface CartPaymentDetailsProps {
  subtotal: number;
  total: number;
  appliedPromo: CartAppliedPromo | null;
  onApplyPromo: (code: string) => boolean;
  onRemovePromo: () => void;
}

function formatTaka(amount: number) {
  return `৳${amount}`;
}

export function CartPaymentDetails({
  subtotal,
  total,
  appliedPromo,
  onApplyPromo,
  onRemovePromo,
}: CartPaymentDetailsProps) {
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState<string | null>(null);

  const handleApplyPromo = () => {
    const code = promoInput.trim();
    if (!code) {
      setPromoError("Enter a promo code");
      return;
    }

    const applied = onApplyPromo(code);
    if (applied) {
      setPromoInput("");
      setPromoError(null);
      return;
    }

    setPromoError("Invalid promo code");
  };

  return (
    <aside className="rounded-[20px] border border-[#ece6e3] bg-white p-6 shadow-[0_8px_24px_rgba(80,37,31,0.06)] sm:p-7 lg:sticky lg:top-24">
      <Heading as="h2" variant="course-detail-sidebar">
        Payment Details
      </Heading>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4 text-[14px] sm:text-[15px]">
          <span className="font-medium text-[#4a4a4a]">Subtotal</span>
          <span className="font-semibold text-[#1a1a1a]">{formatTaka(subtotal)}</span>
        </div>

        {appliedPromo && (
          <div className="flex items-start justify-between gap-4 text-[14px] sm:text-[15px]">
            <div className="flex min-w-0 items-center gap-2">
              <span className="truncate font-medium text-[#4a4a4a]">
                {appliedPromo.code} is applied
              </span>
              <button
                type="button"
                onClick={onRemovePromo}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ece6e3] text-[#9a908c] transition hover:border-primary/30 hover:text-primary"
                aria-label={`Remove promo code ${appliedPromo.code}`}
              >
                <X className="h-3 w-3" aria-hidden />
              </button>
            </div>
            <span className="shrink-0 font-semibold text-primary">
              -{formatTaka(appliedPromo.discount)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 border-t border-[#ece6e3] pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[16px] font-bold text-[#1a1a1a] sm:text-[17px]">Total</span>
          <span className="text-[24px] font-black tracking-[-0.03em] text-primary sm:text-[28px]">
            {formatTaka(total)}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="cart-promo-code"
          className="mb-2 block text-[13px] font-semibold text-[#4a4a4a]"
        >
          Promo code
        </label>
        <div className="flex overflow-hidden rounded-[12px] border border-[#ece6e3] bg-white">
          <input
            id="cart-promo-code"
            type="text"
            value={promoInput}
            onChange={(event) => {
              setPromoInput(event.target.value);
              if (promoError) setPromoError(null);
            }}
            placeholder="Enter promo code here"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[14px] text-[#1a1a1a] outline-none placeholder:text-[#9a908c]"
          />
          <button
            type="button"
            onClick={handleApplyPromo}
            className="inline-flex shrink-0 items-center gap-1.5 border-l border-[#ece6e3] px-4 text-[13px] font-bold text-[#1a1a1a] transition hover:bg-[#faf9f8]"
          >
            <Tag className="h-4 w-4" aria-hidden />
            Apply
          </button>
        </div>
        {promoError && (
          <p className="mt-2 text-[12px] font-medium text-primary">{promoError}</p>
        )}
      </div>

      <Button asChild variant="publicCta" size="publicCta" className={cn("mt-6 w-full rounded-[14px]")}>
        <Link href={ROUTES.checkout}>Checkout</Link>
      </Button>

      <p className="mt-5 text-center text-[13px] text-[#6f6562]">
        Watch payment process{" "}
        <Link href="/support" className="font-bold text-[#1a1a1a] underline underline-offset-2">
          here
        </Link>
      </p>
    </aside>
  );
}
