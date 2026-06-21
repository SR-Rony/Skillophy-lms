"use client";

import { FileText } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

interface TeacherCourseAssignmentsEmptyCardProps {
  className?: string;
}

export function TeacherCourseAssignmentsEmptyCard({
  className,
}: TeacherCourseAssignmentsEmptyCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#f5e6c8] bg-[#fffbeb] p-4 sm:p-5",
        className
      )}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fef3c7] sm:h-12 sm:w-12">
          <FileText className="h-5 w-5 text-[#f59e0b]" strokeWidth={2} aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <Heading as="h3" variant="position-card">
            Assignments
          </Heading>
          <p className="mt-0.5 text-[13px] leading-relaxed text-[#9ca3af]">
            There are no assignments to check at this time.
          </p>
        </div>
      </div>
    </div>
  );
}
