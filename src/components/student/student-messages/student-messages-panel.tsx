import type { StudentMessagesEmptyState } from "@/types/student-messages.types";
import { cn } from "@/utils";

function StudentMessagesEmptyIllustration() {
  return (
    <div className="relative mx-auto h-[120px] w-[120px] sm:h-[132px] sm:w-[132px]">
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <circle cx="68" cy="68" r="44" fill="#93c5fd" />
        <circle cx="68" cy="68" r="40" fill="none" stroke="#6366f1" strokeWidth="3" />
        <path
          d="M38 92C38 92 44 78 58 74C72 70 88 76 88 76L74 92C74 92 58 98 38 92Z"
          fill="#818cf8"
        />
        <rect x="48" y="58" width="18" height="3" rx="1.5" fill="white" opacity="0.95" />
        <rect x="48" y="66" width="28" height="3" rx="1.5" fill="white" opacity="0.95" />
        <rect x="48" y="74" width="22" height="3" rx="1.5" fill="white" opacity="0.95" />

        <circle cx="36" cy="36" r="22" fill="#ff4747" />
        <circle cx="36" cy="36" r="18" fill="none" stroke="white" strokeWidth="4" />
        <path
          d="M24 48L48 24"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

interface StudentMessagesPanelProps {
  emptyState: StudentMessagesEmptyState;
  className?: string;
}

export function StudentMessagesPanel({ emptyState, className }: StudentMessagesPanelProps) {
  return (
    <section
      className={cn(
        "flex min-h-[420px] flex-col rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:min-h-[460px]",
        className
      )}
    >
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center sm:px-6 sm:py-12">
        <StudentMessagesEmptyIllustration />
        <h3 className="mt-8 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
          {emptyState.heading}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#9ca3af] sm:text-[15px]">
          {emptyState.message}
        </p>
      </div>
    </section>
  );
}
