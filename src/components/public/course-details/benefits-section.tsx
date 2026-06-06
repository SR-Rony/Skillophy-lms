import type { CourseDetailsBenefitItem } from "@/components/public/course-details/types";

const BENEFIT_THEMES = {
  lifetime: { color: "#f59e0b" },
  moneyBack: { color: "#38bdf8" },
  downloadable: { color: "#ef4444" },
  certificate: { color: "#d946ef" },
  devices: { color: "#22c55e" },
  subtitle: { color: "#4338ca" },
} as const;

function LifetimeAccessIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <circle cx="24" cy="26" r="12" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 20v7l4.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M18 12c1.2-1.6 3.2-2.5 6-2.5s4.8.9 6 2.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="14" r="4" stroke="currentColor" strokeWidth="2.2" />
      <path d="M28.5 14h3M30 12.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoneyBackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <path
        d="M34 18a12 12 0 1 0-2.2 7.1M14 30a12 12 0 1 0 2.2-7.1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M30 14l4 4-4 4M18 34l-4-4 4-4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 20c-2.2 0-4 .8-4 2.2s1.8 2.2 4 2.2 4 .8 4 2.2-1.8 2.2-4 2.2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M24 18.5v1.5M24 28v1.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function DownloadableResourcesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <path
        d="M14 22c0-6.6 4.5-12 10-12s10 5.4 10 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 24c0 7.7 5.4 14 12 14s12-6.3 12-14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M24 18v14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M19 31l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareableCertificateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <rect x="10" y="12" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16 20h16M16 26h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="34" cy="30" r="5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M34 27.5v5M31.5 30h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AccessDevicesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <rect x="8" y="14" width="22" height="16" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M14 34h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="30" y="18" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M32.5 36h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M14 22l2 2 4-4M32 24l1.5 1.5 3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnglishSubtitleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <rect x="12" y="12" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M18 28v-8h3.2c2.4 0 3.8 1.2 3.8 3s-1.4 3-3.8 3H18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M28 20h4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30.25 20v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

const BENEFIT_ICONS = {
  lifetime: LifetimeAccessIcon,
  moneyBack: MoneyBackIcon,
  downloadable: DownloadableResourcesIcon,
  certificate: ShareableCertificateIcon,
  devices: AccessDevicesIcon,
  subtitle: EnglishSubtitleIcon,
} as const;

interface BenefitsSectionProps {
  benefits: CourseDetailsBenefitItem[];
}

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section id="what-youll-get" className="scroll-mt-28">
      <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]">
        What You&apos;ll Get
      </h2>

      <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-y-12">
        {benefits.map((item) => {
          const theme = BENEFIT_THEMES[item.icon];
          const Icon = BENEFIT_ICONS[item.icon];

          return (
            <article key={item.title} className="min-w-0">
              <span style={{ color: theme.color }}>
                <Icon className="h-12 w-12" />
              </span>
              <h3 className="mt-5 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[320px] text-[14px] font-normal leading-[1.6] text-[#6b7280] sm:text-[15px]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
