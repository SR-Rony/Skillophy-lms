import type { TeacherPaymentHistorySummary } from "@/types/teacher-payment-history.types";
import { formatTeacherPaymentSummaryAmount } from "./teacher-payment-history.utils";
import { cn } from "@/utils";
import { Banknote, TrendingDown, TrendingUp } from "lucide-react";

interface TeacherPaymentHistorySummaryCardsProps {
  summary: TeacherPaymentHistorySummary;
  className?: string;
}

const cards = [
  {
    key: "totalPaid",
    label: "Total Paid",
    icon: TrendingUp,
    iconClassName: "text-[#16a34a]",
    bgClassName: "bg-[#ecfdf3]",
    valueKey: "totalPaid" as const,
  },
  {
    key: "totalDue",
    label: "Total Due",
    icon: TrendingDown,
    iconClassName: "text-[#ea580c]",
    bgClassName: "bg-[#fff7ed]",
    valueKey: "totalDue" as const,
  },
  {
    key: "totalEarnings",
    label: "Total Earnings",
    icon: Banknote,
    iconClassName: "text-[#2563eb]",
    bgClassName: "bg-[#eff6ff]",
    valueKey: "totalEarnings" as const,
  },
];

export function TeacherPaymentHistorySummaryCards({
  summary,
  className,
}: TeacherPaymentHistorySummaryCardsProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-3", className)}>
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <article
            key={card.key}
            className={cn(
              "flex items-center gap-4 rounded-2xl border border-[#ebe8e6] px-5 py-5 shadow-[0_2px_14px_rgba(35,25,22,0.04)] sm:px-6",
              card.bgClassName
            )}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(35,25,22,0.06)]">
              <Icon className={cn("h-5 w-5", card.iconClassName)} strokeWidth={2} aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-[#6b7280] sm:text-[14px]">{card.label}</p>
              <p className="mt-1 text-[22px] font-bold tabular-nums text-[#1a1a1a] sm:text-[24px]">
                {formatTeacherPaymentSummaryAmount(summary[card.valueKey])}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
