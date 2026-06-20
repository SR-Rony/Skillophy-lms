import Link from "next/link";
import type { StudentMessagesCoursesEmptyState } from "@/types/student-messages.types";
import { cn } from "@/utils";

function StudentMessagesCoursesIllustration() {
  return (
    <div className="relative mx-auto h-[120px] w-[140px] sm:h-[132px] sm:w-[152px]">
      <svg viewBox="0 0 152 132" className="h-full w-full" aria-hidden>
        <rect x="28" y="34" width="96" height="64" rx="8" fill="#dbeafe" />
        <rect x="34" y="40" width="84" height="46" rx="4" fill="#fecdd3" />
        <rect x="28" y="92" width="96" height="8" rx="2" fill="#bfdbfe" />
        <path
          d="M76 18L58 34H94L76 18Z"
          fill="#1a1a1a"
        />
        <rect x="52" y="34" width="48" height="6" rx="2" fill="#374151" />
        <path
          d="M68 12C68 8.686 70.686 6 74 6H78C81.314 6 84 8.686 84 12V18H68V12Z"
          fill="#1a1a1a"
        />
        <path
          d="M58 18H94V22C94 24.209 92.209 26 90 26H62C59.791 26 58 24.209 58 22V18Z"
          fill="#374151"
        />
        <circle cx="90" cy="14" r="4" fill="#fbbf24" />
        <path
          d="M90 10V18M86 14H94"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

interface StudentMessagesCoursesPanelProps {
  emptyState: StudentMessagesCoursesEmptyState;
  className?: string;
}

export function StudentMessagesCoursesPanel({
  emptyState,
  className,
}: StudentMessagesCoursesPanelProps) {
  return (
    <section
      className={cn(
        "flex min-h-[420px] flex-col rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:min-h-[460px]",
        className
      )}
    >
      <div className="border-b border-[#f3f4f6] px-5 py-4 sm:px-6">
        <h2 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">
          {emptyState.sectionLabel}
        </h2>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center sm:px-6 sm:py-12">
        <StudentMessagesCoursesIllustration />
        <h3 className="mt-8 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
          {emptyState.heading}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#9ca3af] sm:text-[15px]">
          {emptyState.message}
        </p>
        <Link
          href={emptyState.actionHref}
          className="mt-8 inline-flex min-w-[180px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[200px] sm:text-[15px]"
        >
          {emptyState.actionLabel}
        </Link>
      </div>
    </section>
  );
}
