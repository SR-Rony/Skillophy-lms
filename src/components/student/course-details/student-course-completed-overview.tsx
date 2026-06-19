"use client";

import { Heading } from "@/components/shared/heading";

import Link from "next/link";
import { Sparkles, Trophy } from "lucide-react";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { StudentCourseCurriculum } from "@/components/student/course-details/student-course-curriculum";
import {
  StudentCourseRateCard,
  StudentCourseSupportContact,
} from "@/components/student/course-details/student-course-details-shared";
import { cn } from "@/utils";

function CompletedScoreRing({ totalScore }: { totalScore: number }) {
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
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff7ed] text-[#f59e0b]">
        <Trophy className="h-8 w-8" strokeWidth={1.75} aria-hidden />
      </span>
    </div>
  );
}

interface StudentCourseCompletedCardProps {
  totalScore: number;
  completedOn: string;
  certificateHref: string;
  onViewProgressDetails: () => void;
}

function StudentCourseCompletedCard({
  totalScore,
  completedOn,
  certificateHref,
  onViewProgressDetails,
}: StudentCourseCompletedCardProps) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <div className="flex flex-col items-center text-center">
        <CompletedScoreRing totalScore={totalScore} />

        <span className="-mt-3 inline-flex rounded-full bg-primary px-4 py-1.5 text-[13px] font-bold text-white">
          Total Score {totalScore}%
        </span>

        <Heading as="h2" variant="dashboard-success">Congratulations!</Heading>
        <p className="mt-2 text-[14px] leading-relaxed text-[#6b7280]">
          You successfully completed this course on{" "}
          <span className="font-semibold text-[#1a1a1a]">{completedOn}</span>
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onViewProgressDetails}
          className="inline-flex items-center justify-center rounded-xl border border-[#1a1a1a] bg-white px-4 py-3 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
        >
          View Progress Details
        </button>
        <Link
          href={certificateHref}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
        >
          Get Certificate
        </Link>
      </div>
    </div>
  );
}

function StudentCourseWhatNextCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
      <Heading as="h3" variant="position-card">What Next?</Heading>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#6b7280]">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface StudentCourseCompletedOverviewProps {
  course: StudentCourseDetailsData;
  onViewProgressDetails: () => void;
  showMobileCurriculum: boolean;
  onHideMobileCurriculum: () => void;
}

export function StudentCourseCompletedOverview({
  course,
  onViewProgressDetails,
  showMobileCurriculum,
  onHideMobileCurriculum,
}: StudentCourseCompletedOverviewProps) {
  const certificateHref = course.certificateHref ?? "/student/certificates";
  const completedOn = course.completedOn ?? "May 11, 2022";
  const whatNextItems = course.whatNextItems ?? [
    "You can download your certificate.",
    "You can add this certificate in your LinkedIn profile",
    "You can share your certificate to social media",
  ];

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
          <StudentCourseCurriculum modules={course.curriculum} isCourseCompleted />
        </div>
      )}

      <div
        className={cn(
          "grid gap-5 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-8",
          showMobileCurriculum && "hidden lg:grid"
        )}
      >
        <aside className="space-y-4">
          <StudentCourseCompletedCard
            totalScore={course.totalScore}
            completedOn={completedOn}
            certificateHref={certificateHref}
            onViewProgressDetails={onViewProgressDetails}
          />
          <StudentCourseWhatNextCard items={whatNextItems} />
          <StudentCourseRateCard />
          <StudentCourseSupportContact phone={course.supportPhone} />
        </aside>

        <div className="hidden lg:block">
          <StudentCourseCurriculum modules={course.curriculum} isCourseCompleted />
        </div>
      </div>
    </>
  );
}
