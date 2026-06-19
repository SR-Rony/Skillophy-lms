import { Heading } from "@/components/shared/heading";
import Link from "next/link";
import type { CourseDetailsBusinessPromo } from "@/components/public/course-details/types";
import { Button } from "@/components/ui/button";

function BoxLogo() {
  return (
    <span className="text-[22px] font-black lowercase tracking-[-0.04em] text-[#374151]">
      box
    </span>
  );
}

function EventbriteLogo() {
  return (
    <span className="text-[20px] font-semibold lowercase tracking-[-0.03em] text-[#374151]">
      eventbrite
    </span>
  );
}

function NasdaqLogo() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[#374151]">
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0">
        <path
          d="M4 18V6l8 6-8 6Zm8-6 8-6v12l-8-6Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-[18px] font-bold tracking-[-0.02em]">Nasdaq</span>
    </span>
  );
}

function NetAppLogo() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[#374151]">
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
        <path
          d="M9 15V9h2.2l1.8 3.2V9H15v6h-2.1l-1.9-3.3V15H9Z"
          fill="#f8f9fa"
        />
      </svg>
      <span className="text-[18px] font-semibold tracking-[-0.02em]">NetApp</span>
    </span>
  );
}

function SamsungLogo() {
  return (
    <span className="inline-flex items-center justify-center rounded-full border-[2.5px] border-[#374151] px-3 py-1">
      <span className="text-[11px] font-bold tracking-[0.18em] text-[#374151]">SAMSUNG</span>
    </span>
  );
}

const BUSINESS_LOGOS = {
  box: BoxLogo,
  eventbrite: EventbriteLogo,
  nasdaq: NasdaqLogo,
  netapp: NetAppLogo,
  samsung: SamsungLogo,
} as const;

interface BusinessPromoSectionProps {
  data: CourseDetailsBusinessPromo;
}

export function BusinessPromoSection({ data }: BusinessPromoSectionProps) {
  return (
    <section className="rounded-[12px] border border-[#e5e7eb] bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="max-w-2xl">
          <Heading as="h3" variant="course-detail-promo">
            {data.title}
          </Heading>
          <p className="mt-2 text-[14px] font-normal leading-[1.55] text-[#6b7280] sm:text-[15px]">
            {data.description}
          </p>
        </div>

        <Button
          asChild
          variant="publicCta"
          size="publicCta"
          className="w-full shrink-0 sm:w-auto lg:mt-1"
        >
          <Link href={data.ctaHref}>{data.ctaLabel}</Link>
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 sm:mt-10 sm:justify-between">
        {data.logos.map((logoId) => {
          const Logo = BUSINESS_LOGOS[logoId];
          return (
            <span key={logoId} className="inline-flex shrink-0 items-center">
              <Logo />
            </span>
          );
        })}
      </div>
    </section>
  );
}
