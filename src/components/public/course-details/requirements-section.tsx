import type { CourseDetailsRequirement } from "@/components/public/course-details/types";

const THEMES = {
  internet: {
    cardBg: "#f5f2ff",
    iconColor: "#7b61ff",
    blob: "rgba(123, 97, 255, 0.16)",
  },
  device: {
    cardBg: "#ecfdf8",
    iconColor: "#20b2aa",
    blob: "rgba(32, 178, 170, 0.18)",
  },
  mindset: {
    cardBg: "#fdf2fa",
    iconColor: "#d122e3",
    blob: "rgba(209, 34, 227, 0.14)",
  },
} as const;

function InternetRequirementIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="6" ry="14" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10 24h28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M12 17.5c3.2-2.2 7-3.5 12-3.5s8.8 1.3 12 3.5M12 30.5c3.2 2.2 7 3.5 12 3.5s8.8-1.3 12-3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="34" cy="34" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M31.2 34.2l1.8 1.8 3.8-3.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeviceRequirementIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect x="8" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 38h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 34h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function MindsetRequirementIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M30 10c6.5 2.2 10 8.2 10 15.5 0 8.8-6.2 16-14 16-1.8 0-3.5-.3-5.1-.9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10C11.5 12.2 8 18.2 8 25.5 8 34.3 14.2 41.5 22 41.5c1.8 0 3.5-.3 5.1-.9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="5.5" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M24 20.5v3.5l2.2 2.2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30.5" cy="17.5" r="1.2" fill="currentColor" />
      <circle cx="33.5" cy="21" r="1.2" fill="currentColor" />
      <circle cx="30.5" cy="24.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const REQUIREMENT_ICONS = {
  internet: InternetRequirementIcon,
  device: DeviceRequirementIcon,
  mindset: MindsetRequirementIcon,
} as const;

interface RequirementsSectionProps {
  requirements: CourseDetailsRequirement[];
}

export function RequirementsSection({ requirements }: RequirementsSectionProps) {
  return (
    <section id="requirements" className="scroll-mt-28">
      <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]">
        Requirements
      </h2>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
        {requirements.map((item) => {
          const theme = THEMES[item.icon];
          const Icon = REQUIREMENT_ICONS[item.icon];

          return (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[24px] px-[30px] py-10"
              style={{ backgroundColor: theme.cardBg }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full"
                style={{ backgroundColor: theme.blob }}
              />

              <div className="relative z-[1]">
                <span style={{ color: theme.iconColor }}>
                  <Icon className="h-12 w-12" />
                </span>
                <p className="mt-6 max-w-[220px] text-[18px] font-bold leading-[1.35] tracking-[-0.01em] text-[#111827]">
                  {item.title}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
