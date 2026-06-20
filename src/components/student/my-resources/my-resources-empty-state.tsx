import Link from "next/link";
import type { StudentResourcesEmptyState } from "@/types/student-resources.types";

function MyResourcesEmptyIllustration() {
  return (
    <div className="relative mx-auto h-[140px] w-[160px] sm:h-[156px] sm:w-[176px]">
      <div className="absolute left-[10%] top-4 h-[92px] w-[72px] rotate-[-10deg] rounded-[14px] bg-[#dbeafe] shadow-[0_8px_22px_rgba(59,130,246,0.14)]">
        <div className="space-y-2 px-4 pt-5">
          <div className="h-1.5 rounded-full bg-white/90" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/75" />
          <div className="h-1.5 w-full rounded-full bg-white/75" />
        </div>
      </div>

      <div className="absolute left-[28%] top-0 h-[104px] w-[80px] rounded-[16px] bg-[#ede9fe] shadow-[0_12px_28px_rgba(139,92,246,0.16)]">
        <div className="space-y-2 px-4 pt-6">
          <div className="h-1.5 rounded-full bg-white/95" />
          <div className="h-1.5 w-5/6 rounded-full bg-white/80" />
          <div className="h-1.5 w-full rounded-full bg-white/80" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/80" />
        </div>
      </div>

      <svg
        viewBox="0 0 64 88"
        className="absolute bottom-0 right-[4%] h-[88px] w-[64px]"
        aria-hidden
      >
        <path
          d="M14 10H42C48.627 10 54 15.373 54 22V66C54 72.627 48.627 78 42 78H14C7.373 78 2 72.627 2 66V22C2 15.373 7.373 10 14 10Z"
          fill="#f3f4f6"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <path d="M14 24H42M14 34H36M14 44H40M14 54H32" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M46 42C54 42 60 48 60 56C60 64 54 70 46 70C38 70 32 64 32 56C32 48 38 42 46 42Z"
          fill="#ff4747"
        />
        <path
          d="M46 48V64M40 52H52M40 60H52"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

interface MyResourcesEmptyStateProps {
  emptyState: StudentResourcesEmptyState;
}

export function MyResourcesEmptyState({ emptyState }: MyResourcesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-4 py-14 text-center sm:py-16 md:py-20">
      <MyResourcesEmptyIllustration />
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
