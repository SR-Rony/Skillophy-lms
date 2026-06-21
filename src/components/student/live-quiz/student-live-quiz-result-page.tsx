"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock,
  Medal,
  X,
} from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { StudentCourseLearningCurriculum } from "@/components/student/course-details/student-course-learning-curriculum";
import { StudentCourseLiveCurriculumMobileButton } from "@/components/student/course-details/student-course-live-overview";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type { StudentLiveQuizResult } from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveQuizResultPageProps {
  course: StudentCourseDetailsData;
  result: StudentLiveQuizResult;
}

function QuizPassedIllustration() {
  return (
    <div className="relative mx-auto h-[120px] w-[120px] sm:h-[132px] sm:w-[132px]">
      <div className="absolute inset-0 rounded-[28px] bg-[#dbeafe] shadow-[0_12px_30px_rgba(59,130,246,0.15)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[72px] w-[56px] rounded-md bg-white shadow-sm">
          <div className="absolute left-1/2 top-[22px] flex -translate-x-1/2 gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1a1a1a]" />
            <span className="h-2 w-2 rounded-full bg-[#1a1a1a]" />
          </div>
          <div className="absolute bottom-[18px] left-1/2 h-2 w-6 -translate-x-1/2 rounded-full bg-[#1a1a1a]/80" />
        </div>
      </div>
      <div className="absolute -right-1 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-white shadow-md">
        A
      </div>
    </div>
  );
}

function QuizFailedIllustration() {
  return (
    <div className="relative mx-auto h-[120px] w-[120px] sm:h-[132px] sm:w-[132px]">
      <div className="absolute inset-0 rounded-[28px] bg-[#dbeafe] shadow-[0_12px_30px_rgba(59,130,246,0.15)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[72px] w-[56px] rounded-md bg-white shadow-sm">
          <div className="absolute left-1/2 top-[24px] flex -translate-x-1/2 gap-2">
            <span className="h-2 w-2 rounded-full bg-[#1a1a1a]" />
            <span className="h-2 w-2 rounded-full bg-[#1a1a1a]" />
          </div>
          <div className="absolute bottom-[20px] left-1/2 h-2.5 w-7 -translate-x-1/2 rounded-full border-b-2 border-[#1a1a1a]" />
        </div>
      </div>
      <div className="absolute -right-1 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md">
        <X className="h-5 w-5" strokeWidth={3} aria-hidden />
      </div>
    </div>
  );
}

function ResultStatCard({
  label,
  value,
  icon: Icon,
  className,
  iconClassName,
  borderClassName,
}: {
  label: string;
  value: string;
  icon: typeof CircleHelp;
  className: string;
  iconClassName: string;
  borderClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border px-4 py-5 text-center sm:px-5 sm:py-6",
        className,
        borderClassName
      )}
    >
      <Icon className={cn("h-7 w-7 sm:h-8 sm:w-8", iconClassName)} aria-hidden />
      <p className="mt-3 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">{label}</p>
      <p className="mt-1 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">{value}</p>
    </div>
  );
}

function QuizResultCard({ result }: { result: StudentLiveQuizResult }) {
  const isPassed = result.passed;

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
            {result.resultTitle}
          </Heading>
          <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
            You participated in this quiz on{" "}
            <span className="font-bold text-[#1a1a1a]">{result.participatedOn}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
          {result.previousResult ? (
            <Link
              href={result.previousResult.href}
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Previous
            </Link>
          ) : (
            <span className="text-[#c4c4c4]">Previous</span>
          )}
          {result.nextResult ? (
            <Link
              href={result.nextResult.href}
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              Next
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : (
            <span className="text-[#c4c4c4]">Next</span>
          )}
        </div>
      </div>

      <div
        className={cn(
          "mt-6 rounded-2xl px-5 py-8 text-center sm:mt-8 sm:px-8 sm:py-10",
          isPassed ? "bg-[#ecfdf3]" : "bg-[#fff0f3]"
        )}
      >
        {isPassed ? <QuizPassedIllustration /> : <QuizFailedIllustration />}
        <h2
          className={cn(
            "mt-6 text-[28px] font-bold sm:text-[32px]",
            isPassed ? "text-[#166534]" : "text-primary"
          )}
        >
          {result.outcomeTitle}
        </h2>
        <p className="mt-2 text-[15px] font-medium text-[#1a1a1a] sm:mt-3 sm:text-[16px]">
          {result.outcomeMessage}
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:mt-8">
        <ResultStatCard
          label="Correct Answers"
          value={`${result.correctAnswers}/${result.totalQuestions}`}
          icon={CircleHelp}
          className="bg-[#fff0f3]"
          iconClassName="text-[#a855f7]"
          borderClassName={!isPassed ? "border-[#e9d5ff]" : "border-transparent"}
        />
        <ResultStatCard
          label="Grade Achieved"
          value={`${result.gradePercent}%`}
          icon={Medal}
          className="bg-[#f5f0ff]"
          iconClassName="text-[#7c3aed]"
          borderClassName={!isPassed ? "border-[#e9d5ff]" : "border-transparent"}
        />
        <ResultStatCard
          label="Time Taken"
          value={`${result.timeTakenMinutes}/${result.allottedTimeMinutes} mins`}
          icon={Clock}
          className="bg-[#eff6ff]"
          iconClassName="text-[#3b82f6]"
          borderClassName={!isPassed ? "border-[#bfdbfe]" : "border-transparent"}
        />
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <Link
          href={result.checkAnswersHref}
          className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-primary px-10 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[240px] sm:py-4 sm:text-[16px]"
        >
          Check Answers
        </Link>
      </div>
    </div>
  );
}

export function StudentLiveQuizResultPage({ course, result }: StudentLiveQuizResultPageProps) {
  const [showMobileCurriculum, setShowMobileCurriculum] = useState(false);

  return (
    <div
      className={cn(
        "bg-white pt-6 sm:pt-8 lg:pb-14",
        showMobileCurriculum ? "pb-10 sm:pb-12" : "pb-24 sm:pb-28 lg:pb-14"
      )}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.student.courseDetails(course.slug)}
          className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:mb-6 sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        {showMobileCurriculum && (
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setShowMobileCurriculum(false)}
              className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
            >
              ← Back to Result
            </button>
            <StudentCourseLearningCurriculum
              course={course}
              activeLessonId={result.linkedLessonId}
            />
          </div>
        )}

        <div
          className={cn(
            "grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px]",
            showMobileCurriculum && "hidden lg:grid"
          )}
        >
          <div className="min-w-0">
            <QuizResultCard result={result} />
          </div>

          <aside className="hidden lg:sticky lg:block lg:top-6 lg:self-start">
            <StudentCourseLearningCurriculum
              course={course}
              activeLessonId={result.linkedLessonId}
            />
          </aside>
        </div>
      </div>

      {!showMobileCurriculum && (
        <StudentCourseLiveCurriculumMobileButton onClick={() => setShowMobileCurriculum(true)} />
      )}
    </div>
  );
}
