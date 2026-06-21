"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { StudentCourseLearningCurriculum } from "@/components/student/course-details/student-course-learning-curriculum";
import { StudentCourseLiveCurriculumMobileButton } from "@/components/student/course-details/student-course-live-overview";
import { StudentLiveAssignmentTasksCard } from "@/components/student/live-assignment/student-live-assignment-tasks-card";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type { StudentLiveAssignmentFeedback } from "@/types/student-live-assignment.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveAssignmentFeedbackPageProps {
  course: StudentCourseDetailsData;
  feedback: StudentLiveAssignmentFeedback;
}

function YourSubmissionLinkCard({ feedback }: { feedback: StudentLiveAssignmentFeedback }) {
  return (
    <div className="flex min-h-[148px] flex-col justify-between rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:min-h-[160px] sm:p-6">
      <Heading as="h2" variant="dashboard-section" className="text-[18px] sm:text-[20px]">
        Your Submission
      </Heading>
      <Link
        href={feedback.assignmentHref}
        className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-[15px]"
      >
        Go to Assignment
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

function YourMarksCard({ feedback }: { feedback: StudentLiveAssignmentFeedback }) {
  return (
    <div className="flex min-h-[148px] flex-col justify-between rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:min-h-[160px] sm:p-6">
      <Heading as="h2" variant="dashboard-section" className="text-[18px] sm:text-[20px]">
        Your Marks
      </Heading>
      <p className="text-[36px] font-bold leading-none text-[#7c3aed] sm:text-[40px]">
        {feedback.marks}
        <span className="text-[22px] font-bold text-[#a78bfa] sm:text-[24px]">
          /{feedback.maxMarks}
        </span>
      </p>
    </div>
  );
}

function InstructorFeedbackCard({ feedback }: { feedback: StudentLiveAssignmentFeedback }) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-[#f8f5ff] p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
      <Heading as="h2" variant="dashboard-section" className="text-[20px] sm:text-[22px]">
        Instructors&apos; Feedback
      </Heading>
      <p className="mt-5 text-[14px] leading-[1.75] text-[#4a4a4a] sm:mt-6 sm:text-[15px]">
        {feedback.instructorFeedback}
      </p>
    </div>
  );
}

export function StudentLiveAssignmentFeedbackPage({
  course,
  feedback,
}: StudentLiveAssignmentFeedbackPageProps) {
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
              activeLessonId={feedback.linkedLessonId}
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
            <StudentLiveAssignmentTasksCard assignment={feedback} />

            <div className="grid gap-5 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-6">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <YourSubmissionLinkCard feedback={feedback} />
                <YourMarksCard feedback={feedback} />
              </div>
              <InstructorFeedbackCard feedback={feedback} />
            </div>
          </div>

          <aside className="hidden lg:sticky lg:block lg:top-6 lg:self-start">
            <StudentCourseLearningCurriculum
              course={course}
              activeLessonId={feedback.linkedLessonId}
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
