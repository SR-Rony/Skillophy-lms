import type { TeacherCourseStudentFeedbackEmptyState } from "@/types/teacher-course-details.types";
import { TeacherCourseStudentFeedbackEmptyIllustration } from "./teacher-course-student-feedback-empty-illustration";

interface TeacherCourseStudentFeedbackEmptyStateProps {
  emptyState: TeacherCourseStudentFeedbackEmptyState;
}

export function TeacherCourseStudentFeedbackEmptyState({
  emptyState,
}: TeacherCourseStudentFeedbackEmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-6 py-16 text-center sm:py-20 md:py-24">
      <TeacherCourseStudentFeedbackEmptyIllustration />

      <h2 className="mt-8 text-[22px] font-bold text-[#111827] sm:text-[24px]">
        {emptyState.heading}
      </h2>
      <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
        {emptyState.message}
      </p>
    </div>
  );
}
