"use client";

import { Heading } from "@/components/shared/heading";

import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { Facebook, MessageCircle } from "lucide-react";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { StudentCourseCurriculum } from "@/components/student/course-details/student-course-curriculum";
import {
  StudentCourseRateCard,
  StudentCourseSupportContact,
} from "@/components/student/course-details/student-course-details-shared";
import { StudentCourseScoreRing } from "@/components/student/course-details/student-course-score-ring";
import { getStudentScoreMessage } from "@/components/student/course-details/student-course-score-tier";
import { cn } from "@/utils";

interface StudentCourseProgressCardProps {
  totalScore: number;
  scoreMessage?: string;
  onViewProgressDetails: () => void;
  continueLesson?: {
    title: string;
    href: string;
  };
}

function StudentCourseContinueLesson({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-[#f5d5cf] bg-[#fff5f3] p-3.5 transition-colors hover:bg-[#ffeeea] sm:gap-4 sm:p-4",
        className
      )}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_18px_rgba(232,93,76,0.28)] sm:h-11 sm:w-11">
        <Play className="h-4 w-4 fill-current sm:h-5 sm:w-5" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-semibold text-primary sm:text-[13px]">Continue your lesson</p>
        <p className="mt-0.5 line-clamp-2 text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]">
          {title}
        </p>
      </div>
      <ChevronRight
        className="h-5 w-5 shrink-0 text-primary/70 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}

function StudentCourseProgressCard({
  totalScore,
  scoreMessage,
  onViewProgressDetails,
  continueLesson,
}: StudentCourseProgressCardProps) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <div className="flex flex-col items-center text-center">
        <StudentCourseScoreRing totalScore={totalScore} />

        <span className="relative z-10 -mt-4 inline-flex rounded-full bg-primary px-4 py-1.5 text-[13px] font-bold text-white">
          Total Score {totalScore}%
        </span>

        <p className="mt-4 text-[15px] font-bold leading-snug text-[#1a1a1a]">
          {getStudentScoreMessage(totalScore, scoreMessage)}
        </p>
      </div>

      {continueLesson && (
        <StudentCourseContinueLesson
          title={continueLesson.title}
          href={continueLesson.href}
          className="mt-5 lg:hidden"
        />
      )}

      <button
        type="button"
        onClick={onViewProgressDetails}
        className="mt-5 block w-full text-center text-[13px] font-semibold text-[#6b7280] underline underline-offset-2 transition-colors hover:text-primary"
      >
        View Progress Details
      </button>
    </div>
  );
}

function StudentCourseJoinGroupCard() {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <Heading as="h3" variant="position-card">Join Group</Heading>
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
          <Facebook className="h-5 w-5" aria-hidden />
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white transition-opacity hover:opacity-90"
          aria-label="Join WhatsApp group"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </div>
  );
}

interface StudentCourseDetailsOverviewProps {
  course: StudentCourseDetailsData;
  onViewProgressDetails: () => void;
  showMobileCurriculum: boolean;
  onHideMobileCurriculum: () => void;
}

export function StudentCourseDetailsOverview({
  course,
  onViewProgressDetails,
  showMobileCurriculum,
  onHideMobileCurriculum,
}: StudentCourseDetailsOverviewProps) {
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
          <StudentCourseCurriculum modules={course.curriculum} />
        </div>
      )}

      <div
        className={cn(
          "grid gap-5 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-8",
          showMobileCurriculum && "hidden lg:grid"
        )}
      >
        <aside className="space-y-4">
          <StudentCourseProgressCard
            totalScore={course.totalScore}
            scoreMessage={course.scoreMessage}
            onViewProgressDetails={onViewProgressDetails}
            continueLesson={course.continueLesson}
          />

          {course.continueLesson && (
            <StudentCourseContinueLesson
              title={course.continueLesson.title}
              href={course.continueLesson.href}
              className="hidden lg:flex"
            />
          )}

          <StudentCourseRateCard />
          <StudentCourseJoinGroupCard />
          <StudentCourseSupportContact phone={course.supportPhone} />
        </aside>

        <div className="hidden lg:block">
          <StudentCourseCurriculum modules={course.curriculum} />
        </div>
      </div>
    </>
  );
}

interface StudentCourseCurriculumMobileButtonProps {
  onClick: () => void;
}

export function StudentCourseCurriculumMobileButton({ onClick }: StudentCourseCurriculumMobileButtonProps) {
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
