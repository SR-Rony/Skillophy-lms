"use client";

import Link from "next/link";
import { Calendar, Clock, Play, Timer } from "lucide-react";
import type { TeacherCourseClassRecording } from "@/types/teacher-course-details.types";

interface TeacherCourseClassRecordingCardProps {
  recording: TeacherCourseClassRecording;
}

export function TeacherCourseClassRecordingCard({ recording }: TeacherCourseClassRecordingCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#ebe8e6] bg-white p-4 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <Link
        href={recording.recordingUrl}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_6px_16px_rgba(232,93,76,0.28)] transition-transform hover:scale-[1.02] sm:h-12 sm:w-12"
        aria-label={`Play ${recording.title}`}
      >
        <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={0} aria-hidden />
      </Link>

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
          {recording.title}
        </h3>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-medium text-[#6b7280] sm:text-[13px]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 shrink-0 text-[#9ca3af]" strokeWidth={2} aria-hidden />
            {recording.classDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 shrink-0 text-[#9ca3af]" strokeWidth={2} aria-hidden />
            {recording.classTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Timer className="h-4 w-4 shrink-0 text-[#9ca3af]" strokeWidth={2} aria-hidden />
            {recording.duration}
          </span>
        </div>
      </div>

      <Link
        href={recording.recordingUrl}
        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_6px_16px_rgba(232,93,76,0.24)] transition-colors hover:bg-primary/90 sm:px-5 sm:py-3 sm:text-[14px]"
      >
        Class Recording
      </Link>
    </article>
  );
}
