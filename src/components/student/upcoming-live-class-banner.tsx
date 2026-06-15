import Link from "next/link";
import { Clock } from "lucide-react";
import type { UpcomingLiveClass } from "@/data/mock/student-dashboard.mock";
import { cn } from "@/utils";

interface UpcomingLiveClassBannerProps extends UpcomingLiveClass {
  className?: string;
}

function BannerDecoration() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-[120px] w-[180px] text-primary/10"
      viewBox="0 0 180 120"
      fill="none"
      aria-hidden
    >
      <path
        d="M140 10C160 30 170 55 175 80"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M155 5C175 28 185 52 190 78"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M120 20C145 38 158 62 165 90"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M100 35C118 50 128 68 132 88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UpcomingLiveClassBanner({
  month,
  day,
  label,
  title,
  datetime,
  joinUrl = "#",
  className,
}: UpcomingLiveClassBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#fff5f5] px-5 py-5 sm:px-6 sm:py-6",
        className
      )}
    >
      <BannerDecoration />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-5 sm:gap-6">
          <div className="flex shrink-0 items-center gap-5 sm:gap-6">
            <div className="flex flex-col items-center px-1">
              <span className="text-xs font-semibold text-primary">{month}</span>
              <span className="mt-0.5 text-[32px] font-extrabold leading-none text-[#4a0e0e]">
                {day}
              </span>
            </div>
            <div className="h-14 w-px shrink-0 bg-[#f0d4d4]" aria-hidden />
          </div>

          <div className="min-w-0 space-y-1.5">
            <p className="text-xs font-semibold text-primary">{label}</p>
            <h3 className="text-base font-bold leading-snug text-[#1a1a1a] sm:text-[17px]">
              {title}
            </h3>
            <p className="flex items-center gap-1.5 text-[13px] text-[#9ca3af]">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {datetime}
            </p>
          </div>
        </div>

        <Link
          href={joinUrl}
          className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 lg:w-auto"
        >
          Join LIVE Class
        </Link>
      </div>
    </div>
  );
}
