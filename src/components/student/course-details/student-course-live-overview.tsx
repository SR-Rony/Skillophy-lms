"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { StudentCourseLiveCurriculum } from "@/components/student/course-details/student-course-live-curriculum";
import {
  StudentCourseRateCard,
  StudentCourseSupportContact,
} from "@/components/student/course-details/student-course-details-shared";
import { StudentCourseScoreRing } from "@/components/student/course-details/student-course-score-ring";
import { getStudentScoreMessage } from "@/components/student/course-details/student-course-score-tier";
import { cn } from "@/utils";

function UpcomingLiveClassCard({
  upcomingLiveClass,
}: {
  upcomingLiveClass: NonNullable<StudentCourseDetailsData["upcomingLiveClass"]>;
}) {
  return (
    <div className="mt-5 rounded-xl border border-[#f5d5cf] bg-[#fff5f3] p-4">
      <div className="flex items-start gap-4">
        <div className="flex shrink-0 flex-col items-center px-1">
          <span className="text-xs font-semibold text-primary">{upcomingLiveClass.month}</span>
          <span className="mt-0.5 text-[28px] font-extrabold leading-none text-[#4a0e0e]">
            {upcomingLiveClass.day}
          </span>
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-xs font-semibold text-primary">{upcomingLiveClass.label}</p>
          <p className="text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]">
            {upcomingLiveClass.title}
          </p>
          <p className="flex items-center gap-1.5 text-[12px] text-[#9ca3af] sm:text-[13px]">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {upcomingLiveClass.datetime}
          </p>
        </div>
      </div>

      <Link
        href={upcomingLiveClass.joinUrl}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
      >
        Join LIVE Class
      </Link>
    </div>
  );
}

function LiveStatsRow({
  liveStats,
}: {
  liveStats: NonNullable<StudentCourseDetailsData["liveStats"]>;
}) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3">
      <div className="rounded-xl bg-[#f3f0ff] px-3 py-3.5 text-center sm:px-4">
        <p className="text-[18px] font-extrabold leading-none text-[#1a1a1a] sm:text-[20px]">
          {liveStats.classAttendancePercent}%
        </p>
        <p className="mt-1.5 text-[11px] font-semibold leading-snug text-[#6f6562] sm:text-[12px]">
          Class Attendance
        </p>
      </div>
      <div className="rounded-xl bg-[#fff0f3] px-3 py-3.5 text-center sm:px-4">
        <p className="text-[18px] font-extrabold leading-none text-[#1a1a1a] sm:text-[20px]">
          {liveStats.rank}/{liveStats.totalStudents}
        </p>
        <p className="mt-1.5 text-[11px] font-semibold leading-snug text-[#6f6562] sm:text-[12px]">
          Your Rank
        </p>
      </div>
    </div>
  );
}

function StudentCourseJoinGroupCard() {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <Heading as="h3" variant="position-card">
        Join Group
      </Heading>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af]">
        Please join our groups for any kind of support
      </p>
      <div className="mt-4 flex gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877f2] text-white transition-opacity hover:opacity-90"
          aria-label="Join Facebook group"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white transition-opacity hover:opacity-90"
          aria-label="Join WhatsApp group"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

interface StudentCourseLiveOverviewProps {
  course: StudentCourseDetailsData;
  onViewProgressDetails: () => void;
  showMobileCurriculum: boolean;
  onHideMobileCurriculum: () => void;
}

export function StudentCourseLiveOverview({
  course,
  onViewProgressDetails,
  showMobileCurriculum,
  onHideMobileCurriculum,
}: StudentCourseLiveOverviewProps) {
  return (
    <>
      {showMobileCurriculum && (
        <div className="lg:hidden">
          <button
            type="button"
            onClick={onHideMobileCurriculum}
            className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
          >
            ← Back to Overview
          </button>
          <StudentCourseLiveCurriculum modules={course.curriculum} />
        </div>
      )}

      <div
        className={cn(
          "grid gap-5 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-8",
          showMobileCurriculum && "hidden lg:grid"
        )}
      >
        <aside className="space-y-4">
          <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
            <div className="flex flex-col items-center text-center">
              <StudentCourseScoreRing totalScore={course.totalScore} />
              <span className="relative z-10 -mt-4 inline-flex rounded-full bg-gradient-to-r from-primary to-[#f97316] px-4 py-1.5 text-[13px] font-bold text-white shadow-[0_6px_16px_rgba(232,93,76,0.28)]">
                Total Score {course.totalScore}%
              </span>
              <p className="mt-4 text-[15px] font-bold leading-snug text-[#1a1a1a]">
                {getStudentScoreMessage(course.totalScore, course.scoreMessage)}
              </p>
            </div>

            {course.upcomingLiveClass && (
              <UpcomingLiveClassCard upcomingLiveClass={course.upcomingLiveClass} />
            )}

            {course.liveStats && <LiveStatsRow liveStats={course.liveStats} />}

            <button
              type="button"
              onClick={onViewProgressDetails}
              className="mt-5 block w-full text-center text-[13px] font-semibold text-[#6b7280] underline underline-offset-2 transition-colors hover:text-primary"
            >
              View Progress Details
            </button>
          </div>

          <StudentCourseRateCard />
          <StudentCourseJoinGroupCard />
          <StudentCourseSupportContact phone={course.supportPhone} />
        </aside>

        <div className="hidden lg:block">
          <StudentCourseLiveCurriculum modules={course.curriculum} />
        </div>
      </div>
    </>
  );
}

export function StudentCourseLiveCurriculumMobileButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#ebe8e6] bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full rounded-xl border border-[#1a1a1a] bg-white py-3.5 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
      >
        See Course Curriculum
      </button>
    </div>
  );
}
