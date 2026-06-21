"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import type { TeacherUpcomingLiveClass } from "@/types/teacher-dashboard.types";

interface TeacherCourseUpcomingLiveClassCardProps {
  liveClass: TeacherUpcomingLiveClass;
}

export function TeacherCourseUpcomingLiveClassCard({
  liveClass,
}: TeacherCourseUpcomingLiveClassCardProps) {
  return (
    <div className="rounded-2xl border border-[#f5d5cf] bg-[#fff5f3] p-4 sm:p-5">
      <div className="flex items-start gap-4">
        <div className="flex shrink-0 flex-col items-center px-1">
          <span className="text-xs font-semibold text-primary">{liveClass.month}</span>
          <span className="mt-0.5 text-[28px] font-extrabold leading-none text-[#4a0e0e]">
            {liveClass.day}
          </span>
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-xs font-semibold text-primary">{liveClass.label}</p>
          <p className="text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]">
            {liveClass.title}
          </p>
          <p className="flex items-center gap-1.5 text-[12px] text-[#9ca3af] sm:text-[13px]">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {liveClass.datetime}
          </p>
        </div>
      </div>

      <Link
        href={liveClass.joinUrl ?? "#"}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
      >
        Join LIVE Class
      </Link>
    </div>
  );
}
