"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { StudentCourseLearningCurriculum } from "@/components/student/course-details/student-course-learning-curriculum";
import { StudentCourseLiveCurriculumMobileButton } from "@/components/student/course-details/student-course-live-overview";
import { StudentLiveAssignmentTasksCard } from "@/components/student/live-assignment/student-live-assignment-tasks-card";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type { StudentLiveAssignmentTask } from "@/types/student-live-assignment.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveAssignmentPageProps {
  course: StudentCourseDetailsData;
  assignment: StudentLiveAssignmentTask;
}

function YourSubmissionCard({ assignment }: { assignment: StudentLiveAssignmentTask }) {
  const [submissionUrl, setSubmissionUrl] = useState(assignment.placeholderUrl ?? "");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionUrl.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <div className="flex flex-col gap-2 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Heading as="h2" variant="dashboard-section" className="text-[20px] sm:text-[22px]">
          Your Submission
        </Heading>
        <p className="text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
          Last Date: {assignment.lastSubmissionDate}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 sm:mt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="url"
            value={submissionUrl}
            onChange={(event) => setSubmissionUrl(event.target.value)}
            placeholder="Paste your Figma, Google Drive, or project link here"
            className={cn(
              "min-w-0 flex-1 rounded-xl border border-[#e5e0dd] bg-white px-4 py-3.5 text-[14px] text-[#1a1a1a] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-primary focus:ring-2 focus:ring-primary/15 sm:text-[15px]"
            )}
            required
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:text-[15px]"
          >
            Submit
          </button>
        </div>

        {submitted && (
          <p className="mt-3 text-[13px] font-medium text-[#16a34a] sm:text-[14px]">
            Assignment submitted successfully.
          </p>
        )}
      </form>
    </div>
  );
}

export function StudentLiveAssignmentPage({
  course,
  assignment,
}: StudentLiveAssignmentPageProps) {
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
              ← Back to Assignment
            </button>
            <StudentCourseLearningCurriculum
              course={course}
              activeLessonId={assignment.linkedLessonId}
            />
          </div>
        )}

        <div
          className={cn(
            "grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px]",
            showMobileCurriculum && "hidden lg:grid"
          )}
        >
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <StudentLiveAssignmentTasksCard assignment={assignment} />
            <YourSubmissionCard assignment={assignment} />
          </div>

          <aside className="hidden lg:sticky lg:block lg:top-6 lg:self-start">
            <StudentCourseLearningCurriculum
              course={course}
              activeLessonId={assignment.linkedLessonId}
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
