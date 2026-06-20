"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock,
  Trophy,
} from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { StudentCourseLiveCurriculum } from "@/components/student/course-details/student-course-live-curriculum";
import { StudentCourseLiveCurriculumMobileButton } from "@/components/student/course-details/student-course-live-overview";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type { StudentLiveQuizSession } from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveQuizPageProps {
  course: StudentCourseDetailsData;
  session: StudentLiveQuizSession;
}

function QuizStatCard({
  label,
  value,
  icon: Icon,
  className,
  iconClassName,
}: {
  label: string;
  value: string;
  icon: typeof CircleHelp;
  className: string;
  iconClassName: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl px-4 py-5 text-center sm:px-5 sm:py-6",
        className
      )}
    >
      <Icon className={cn("h-7 w-7 sm:h-8 sm:w-8", iconClassName)} aria-hidden />
      <p className="mt-3 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">{label}</p>
      <p className="mt-1 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">{value}</p>
    </div>
  );
}

function QuizIntroCard({ session }: { session: StudentLiveQuizSession }) {
  const router = useRouter();

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
            {session.title}
          </Heading>
          <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
            Submission Date:{" "}
            <span className="font-bold text-[#1a1a1a]">{session.submissionDate}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
          {session.previousQuiz ? (
            <Link
              href={session.previousQuiz.href}
              className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Previous
            </Link>
          ) : (
            <span className="text-[#c4c4c4]">Previous</span>
          )}
          {session.nextQuiz ? (
            <Link
              href={session.nextQuiz.href}
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

      <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:mt-8">
        <QuizStatCard
          label="Total Questions"
          value={String(session.totalQuestions)}
          icon={CircleHelp}
          className="bg-[#fff0f3]"
          iconClassName="text-[#a855f7]"
        />
        <QuizStatCard
          label="Pass Mark"
          value={`${session.passMarkPercent}%`}
          icon={Trophy}
          className="bg-[#f5f0ff]"
          iconClassName="text-[#7c3aed]"
        />
        <QuizStatCard
          label="Total Time"
          value={`${session.totalTimeMinutes} mins`}
          icon={Clock}
          className="bg-[#eff6ff]"
          iconClassName="text-[#3b82f6]"
        />
      </div>

      <div className="mt-6 flex gap-3 rounded-xl border-l-4 border-[#f59e0b] bg-[#fffbeb] px-4 py-4 sm:mt-8 sm:px-5 sm:py-5">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#f59e0b]" aria-hidden />
        <p className="text-[13px] leading-[1.7] text-[#92400e] sm:text-[14px]">
          {session.warningMessage}
        </p>
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <button
          type="button"
          onClick={() =>
            router.push(ROUTES.student.courseQuizPlay(session.slug, session.quizId))
          }
          className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-primary px-10 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[240px] sm:py-4 sm:text-[16px]"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export function StudentLiveQuizPage({ course, session }: StudentLiveQuizPageProps) {
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
              ← Back to Quiz
            </button>
            <StudentCourseLiveCurriculum
              modules={course.curriculum}
              courseSlug={course.slug}
              activeLessonId={session.linkedLessonId}
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
            <QuizIntroCard session={session} />
          </div>

          <aside className="hidden lg:sticky lg:block lg:top-6 lg:self-start">
            <StudentCourseLiveCurriculum
              modules={course.curriculum}
              courseSlug={course.slug}
              activeLessonId={session.linkedLessonId}
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
