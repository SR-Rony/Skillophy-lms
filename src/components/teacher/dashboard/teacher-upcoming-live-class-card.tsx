import Link from "next/link";
import { Clock } from "lucide-react";
import type { TeacherUpcomingLiveClass } from "@/types/teacher-dashboard.types";
import { cn } from "@/utils";

function BannerDecoration() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-[45%] text-primary/10"
      viewBox="0 0 280 140"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M120 20C160 35 190 55 220 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M150 10C195 28 230 50 260 78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M90 40C130 58 165 78 200 105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M180 30C215 48 245 68 270 95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

interface TeacherUpcomingLiveClassCardProps {
  liveClass: TeacherUpcomingLiveClass;
  className?: string;
}

export function TeacherUpcomingLiveClassCard({
  liveClass,
  className,
}: TeacherUpcomingLiveClassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[#fecaca] bg-[#fff1f2] px-5 py-5 shadow-[0_2px_10px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6",
        className
      )}
    >
      <BannerDecoration />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">
          <div className="flex shrink-0 items-center rounded-xl border border-[#ffe0e0] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(255,71,71,0.08)]">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-primary sm:text-xs">
                {liveClass.month}
              </span>
              <span className="mt-0.5 text-[28px] font-extrabold leading-none text-primary sm:text-[32px]">
                {liveClass.day}
              </span>
            </div>
          </div>

          <div className="min-w-0 space-y-1.5">
            <p className="text-[12px] font-semibold text-primary sm:text-[13px]">{liveClass.label}</p>
            <h3 className="text-[15px] font-bold leading-snug text-[#111827] sm:text-[16px]">
              {liveClass.title}
            </h3>
            <p className="flex items-center gap-1.5 text-[12px] text-[#6b7280] sm:text-[13px]">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {liveClass.datetime}
            </p>
          </div>
        </div>

        <Link
          href={liveClass.joinUrl ?? "#"}
          className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-primary px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-primary/90 sm:text-sm lg:w-auto"
        >
          Join LIVE Class
        </Link>
      </div>
    </div>
  );
}
