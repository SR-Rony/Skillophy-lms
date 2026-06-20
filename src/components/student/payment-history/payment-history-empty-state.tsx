import Link from "next/link";
import type { StudentPaymentHistoryEmptyState } from "@/types/student-payment-history.types";

function PaymentHistoryEmptyIllustration() {
  return (
    <div className="relative mx-auto h-[148px] w-[132px] sm:h-[160px] sm:w-[144px]">
      <svg viewBox="0 0 144 160" className="h-full w-full" aria-hidden>
        <rect x="24" y="12" width="96" height="128" rx="16" fill="#ede9fe" />
        <rect x="36" y="24" width="72" height="104" rx="10" fill="#f5f3ff" />

        <circle cx="58" cy="46" r="3" fill="#6366f1" />
        <circle cx="86" cy="46" r="3" fill="#6366f1" />
        <path
          d="M68 54C70 56 74 56 76 54"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="54" cy="50" r="4" fill="#fda4af" opacity="0.8" />
        <circle cx="90" cy="50" r="4" fill="#fda4af" opacity="0.8" />

        <circle cx="72" cy="82" r="22" fill="#dbeafe" />
        <circle cx="72" cy="82" r="18" fill="#93c5fd" />
        <path
          d="M72 70V82L80 90"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M58 82H86M72 70V94"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M88 68C94 72 98 78 98 86C98 98 86 108 72 108C58 108 46 98 46 86C46 78 50 72 56 68"
          stroke="#60a5fa"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        <rect x="48" y="112" width="48" height="4" rx="2" fill="#c4b5fd" />
        <rect x="56" y="120" width="32" height="4" rx="2" fill="#ddd6fe" />
      </svg>
    </div>
  );
}

interface PaymentHistoryEmptyStateProps {
  emptyState: StudentPaymentHistoryEmptyState;
}

export function PaymentHistoryEmptyState({ emptyState }: PaymentHistoryEmptyStateProps) {
  return (
    <div className="flex flex-col items-center bg-white px-4 py-14 text-center sm:py-16 md:py-20">
      <PaymentHistoryEmptyIllustration />
      <h2 className="mt-8 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
        {emptyState.heading}
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#9ca3af] sm:text-[15px]">
        {emptyState.message}
      </p>
      <Link
        href={emptyState.actionHref}
        className="mt-8 inline-flex min-w-[180px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[200px] sm:text-[15px]"
      >
        {emptyState.actionLabel}
      </Link>
    </div>
  );
}
