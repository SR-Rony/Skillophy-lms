"use client";

import Link from "next/link";
import { ChevronRight, Phone, Play } from "lucide-react";
import { Facebook, MessageCircle } from "lucide-react";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { StudentCourseCurriculum } from "@/components/student/course-details/student-course-curriculum";
import { cn } from "@/utils";

interface StudentCourseProgressCardProps {
  totalScore: number;
  scoreMessage: string;
  onViewProgressDetails: () => void;
  continueLesson?: {
    title: string;
    href: string;
  };
}

function ScoreRing({ totalScore }: { totalScore: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (totalScore / 100) * circumference;

  return (
    <div className="relative flex h-[140px] w-[140px] items-center justify-center">
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#f0ebe8" strokeWidth="10" />
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#e85d4c"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="text-5xl" role="img" aria-label="Panda">
        🐼
      </span>
    </div>
  );
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
        <ScoreRing totalScore={totalScore} />

        <span className="mt-4 inline-flex rounded-full bg-primary px-4 py-1.5 text-[13px] font-bold text-white">
          Total Score {totalScore}%
        </span>

        <p className="mt-4 text-[15px] font-bold leading-snug text-[#1a1a1a]">{scoreMessage}</p>
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

function StudentCourseRateCard() {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <h3 className="text-[15px] font-bold text-[#1a1a1a]">Rate this Course</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af]">
        Your constructive feedback and insights will help other learners
      </p>
      <div className="mt-4 flex gap-1" role="group" aria-label="Rate this course">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={cn(
              "text-2xl transition-colors",
              index < 3 ? "text-[#fbbf24]" : "text-[#e5e7eb] hover:text-[#fbbf24]"
            )}
            aria-label={`Rate ${index + 1} stars`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

function StudentCourseJoinGroupCard() {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <h3 className="text-[15px] font-bold text-[#1a1a1a]">Join Group</h3>
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

function StudentCourseSupportContact({ phone }: { phone: string }) {
  return (
    <div className="flex items-start gap-3 px-1 py-1">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ecfdf3]">
        <Phone className="h-4 w-4 text-[#22c55e]" aria-hidden />
      </span>
      <p className="pt-1.5 text-[12px] leading-relaxed text-[#6b7280] sm:text-[13px]">
        For any technical issue call{" "}
        <span className="font-semibold text-[#1a1a1a]">{phone}</span> (10 am to 10 pm)
      </p>
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

          <StudentCourseContinueLesson
            title={course.continueLesson.title}
            href={course.continueLesson.href}
            className="hidden lg:flex"
          />

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

interface StudentCourseDetailsProgressTabProps {
  course: StudentCourseDetailsData;
}

export function StudentCourseDetailsProgressTab({ course }: StudentCourseDetailsProgressTabProps) {
  const stats = [
    { label: "Topics completed", value: `${course.completedTopics} / ${course.totalTopics}` },
    { label: "Course progress", value: `${course.progressPercent}%` },
    { label: "Total score", value: `${course.totalScore}%` },
  ];

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-8">
      <h2 className="text-xl font-bold text-[#1a1a1a]">Progress Details</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6b7280]">
        Track your learning progress across topics, lessons, and assessments for this course.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[#f0ebe8] bg-[#fafafa] px-5 py-4"
          >
            <p className="text-[13px] font-medium text-[#9ca3af]">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-[#1a1a1a]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8">
        <div className="flex items-center justify-between text-sm font-semibold text-[#1a1a1a]">
          <span>Overall completion</span>
          <span>{course.progressPercent}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#ececec]">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${course.progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

interface StudentCourseDetailsCertificateTabProps {
  course: StudentCourseDetailsData;
}

export function StudentCourseDetailsCertificateTab({
  course,
}: StudentCourseDetailsCertificateTabProps) {
  const isEligible = course.progressPercent >= 100;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-8",
        isEligible ? "border-[#ebe8e6]" : "border-dashed border-[#e5e7eb]"
      )}
    >
      <h2 className="text-xl font-bold text-[#1a1a1a]">Certificate</h2>
      {isEligible ? (
        <>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6b7280]">
            Congratulations! You have completed this course and can download your certificate.
          </p>
          <Link
            href={course.certificateHref ?? "/student/certificates"}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Get Certificate
          </Link>
        </>
      ) : (
        <>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6b7280]">
            Complete all topics and assessments to unlock your shareable certificate for{" "}
            <span className="font-semibold text-[#1a1a1a]">{course.title}</span>.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
            {course.completedTopics} of {course.totalTopics} topics completed ({course.progressPercent}
            %)
          </p>
        </>
      )}
    </div>
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
