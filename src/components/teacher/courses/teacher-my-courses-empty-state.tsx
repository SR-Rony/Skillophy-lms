import Link from "next/link";
import { TeacherEmptyIllustration } from "@/components/teacher/shared/teacher-empty-illustration";
import type { TeacherCoursesEmptyState } from "@/types/teacher-courses.types";

interface TeacherMyCoursesEmptyStateProps {
  emptyState: TeacherCoursesEmptyState;
}

export function TeacherMyCoursesEmptyState({ emptyState }: TeacherMyCoursesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-6 py-16 text-center sm:py-20 md:py-24">
      <TeacherEmptyIllustration size="md" />

      <h2 className="mt-8 text-[22px] font-bold text-[#111827] sm:text-[24px]">
        {emptyState.heading}
      </h2>
      <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
        {emptyState.message}
      </p>

      <Link
        href={emptyState.actionHref}
        className="mt-8 inline-flex min-w-[180px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[200px] sm:text-[15px]"
      >
        {emptyState.actionLabel}
      </Link>
    </div>
  );
}
