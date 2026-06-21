"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type { TeacherCourseAssignmentsSummary } from "@/types/teacher-course-details.types";

interface TeacherCourseAssignmentsCardProps {
  summary: TeacherCourseAssignmentsSummary;
  onCheckAssignment?: () => void;
}

export function TeacherCourseAssignmentsCard({
  summary,
  onCheckAssignment,
}: TeacherCourseAssignmentsCardProps) {
  const actionClassName =
    "shrink-0 text-[13px] font-semibold text-primary underline underline-offset-2 transition-colors hover:text-primary/80";

  return (
    <div className="rounded-2xl border border-[#f5e6c8] bg-[#fffbeb] p-4 sm:p-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fef3c7] sm:h-12 sm:w-12">
          <FileText className="h-5 w-5 text-[#f59e0b]" strokeWidth={2} aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <Heading as="h3" variant="position-card">
            Assignments
          </Heading>
          <p className="mt-0.5 text-[13px] leading-relaxed text-[#9ca3af]">
            You have {summary.pendingCount} assignments to check
          </p>
        </div>

        {onCheckAssignment ? (
          <button type="button" onClick={onCheckAssignment} className={actionClassName}>
            Check Assignment
          </button>
        ) : (
          <Link href={summary.checkHref} className={actionClassName}>
            Check Assignment
          </Link>
        )}
      </div>
    </div>
  );
}
