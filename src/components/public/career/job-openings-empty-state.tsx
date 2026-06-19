import { Heading } from "@/components/shared/heading";

interface JobOpeningsEmptyStateProps {
  categoryLabel: string;
  className?: string;
}

export function JobOpeningsEmptyState({ categoryLabel, className }: JobOpeningsEmptyStateProps) {
  return (
    <div className={className}>
      <div className="mx-auto flex max-w-[420px] flex-col items-center text-center">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[120px] w-[120px] sm:h-[132px] sm:w-[132px]"
          aria-hidden
        >
          <rect
            x="24"
            y="34"
            width="72"
            height="52"
            rx="8"
            fill="#dbeafe"
            stroke="#60a5fa"
            strokeWidth="2"
          />
          <path
            d="M42 34v-8c0-3.3 2.7-6 6-6h24c3.3 0 6 2.7 6 6v8"
            stroke="#3b82f6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <rect x="24" y="44" width="72" height="8" fill="#93c5fd" />
          <circle cx="60" cy="62" r="18" fill="#ffffff" stroke="#ef4444" strokeWidth="2.4" />
          <path
            d="M48 74 72 50"
            stroke="#ef4444"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>

        <Heading as="h3" variant="section-xs" className="mt-8 leading-tight sm:text-[24px]">
          No Job Opening
        </Heading>
        <p className="mt-3 max-w-[360px] text-[14px] leading-[1.65] text-[#6f6562] sm:text-[15px]">
          There is no job opening for {categoryLabel} at this moment.
        </p>
      </div>
    </div>
  );
}
