"use client";

import { Heading } from "@/components/shared/heading";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CheckoutSummary } from "@/components/public/checkout/types";
import { cn } from "@/utils";

interface CheckoutSummaryCardProps {
  summary: CheckoutSummary;
  className?: string;
}

function formatTaka(amount: number) {
  return `৳${amount}`;
}

export function CheckoutSummaryCard({ summary, className }: CheckoutSummaryCardProps) {
  const total = Math.max(0, summary.subtotal - summary.discount);

  return (
    <aside
      className={cn(
        "rounded-[20px] border border-[#ece6e3] bg-white p-6 shadow-[0_8px_24px_rgba(80,37,31,0.06)] sm:p-7 lg:sticky lg:top-24",
        className
      )}
    >
      <Heading as="h2" variant="course-detail-sidebar">
        Checkout Summary
      </Heading>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between gap-4 text-[14px] sm:text-[15px]">
          <span className="font-medium text-[#4a4a4a]">Subtotal</span>
          <span className="font-semibold text-[#1a1a1a]">{formatTaka(summary.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between gap-4 text-[14px] sm:text-[15px]">
          <span className="font-medium text-[#4a4a4a]">Discount</span>
          <span className="font-semibold text-primary">-{formatTaka(summary.discount)}</span>
        </div>
      </div>

      <div className="mt-5 border-t border-[#ece6e3] pt-5">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[16px] font-bold text-[#1a1a1a] sm:text-[17px]">Total</span>
          <span className="text-[24px] font-black tracking-[-0.03em] text-primary sm:text-[28px]">
            {formatTaka(total)}
          </span>
        </div>
      </div>

      <p className="mt-5 text-[12px] leading-[1.6] text-[#6f6562] sm:text-[13px]">
        By completing your purchase you agree to our{" "}
        <Link href="/support" className="font-bold text-[#1a1a1a] underline underline-offset-2">
          Terms &amp; Conditions
        </Link>
      </p>

      <Button variant="publicCta" size="publicCta" className="mt-6 w-full rounded-[14px]">
        Pay Now
      </Button>
    </aside>
  );
}
