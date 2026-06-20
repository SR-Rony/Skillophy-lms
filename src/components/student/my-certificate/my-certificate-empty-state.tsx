import Link from "next/link";
import type { StudentCertificateEmptyState } from "@/types/student-certificate.types";

function MyCertificateEmptyIllustration() {
  return (
    <div className="relative mx-auto h-[148px] w-[136px] sm:h-[160px] sm:w-[148px]">
      <svg viewBox="0 0 148 160" className="h-full w-full" aria-hidden>
        <rect x="20" y="16" width="108" height="128" rx="14" fill="#dbeafe" />
        <rect x="32" y="28" width="84" height="104" rx="10" fill="#eff6ff" />

        <rect x="44" y="44" width="60" height="6" rx="3" fill="#93c5fd" />
        <rect x="44" y="58" width="48" height="6" rx="3" fill="#93c5fd" />
        <rect x="44" y="72" width="54" height="6" rx="3" fill="#bfdbfe" />

        <path
          d="M44 98C48 102 52 104 56 102C60 100 62 96 60 92"
          stroke="#64748b"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        <circle cx="98" cy="108" r="18" fill="#ff4747" />
        <circle cx="98" cy="108" r="14" fill="#ef4444" />
        <path
          d="M98 98L101.5 106.5H108.5L103 111.5L105 120L98 115.5L91 120L93 111.5L87.5 106.5H94.5L98 98Z"
          fill="#fbbf24"
        />

        <path d="M88 124C90 128 94 132 98 132C102 132 106 128 108 124" stroke="#ff4747" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M92 126L98 134L104 126" stroke="#ff4747" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

interface MyCertificateEmptyStateProps {
  emptyState: StudentCertificateEmptyState;
}

export function MyCertificateEmptyState({ emptyState }: MyCertificateEmptyStateProps) {
  return (
    <div className="flex flex-col items-center bg-white px-4 py-14 text-center sm:py-16 md:py-20">
      <MyCertificateEmptyIllustration />
      <h2 className="mt-8 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
        {emptyState.heading}
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#9ca3af] sm:text-[15px]">
        {emptyState.message}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Link
          href={emptyState.secondaryActionHref}
          className="inline-flex min-w-[180px] items-center justify-center rounded-xl border border-[#ebe8e6] bg-white px-8 py-3.5 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-[#fafafa] sm:min-w-[200px] sm:text-[15px]"
        >
          {emptyState.secondaryActionLabel}
        </Link>
        <Link
          href={emptyState.primaryActionHref}
          className="inline-flex min-w-[180px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[200px] sm:text-[15px]"
        >
          {emptyState.primaryActionLabel}
        </Link>
      </div>
    </div>
  );
}
