"use client";

import Image from "next/image";
import { ChevronDown, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import type {
  TeacherCourseAssignmentStatus,
  TeacherCourseAssignmentSubmission,
  TeacherCourseAssignmentsTabData,
} from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

const STATUS_LABELS: Record<TeacherCourseAssignmentStatus, string> = {
  pending: "Pending",
  submitted: "Submitted",
  approved: "Approved",
};

const STATUS_STYLES: Record<TeacherCourseAssignmentStatus, string> = {
  pending: "bg-[#fff0e6] text-[#c2410c]",
  submitted: "bg-[#eff6ff] text-[#2563eb]",
  approved: "bg-[#ecfdf3] text-[#16a34a]",
};

function AssignmentStatusBadge({ status }: { status: TeacherCourseAssignmentStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-bold sm:text-[13px]",
        STATUS_STYLES[status]
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

interface TeacherCourseAssignmentFiltersProps {
  courseFilterLabel: string;
  sortLabel: string;
}

function TeacherCourseAssignmentFilters({
  courseFilterLabel,
  sortLabel,
}: TeacherCourseAssignmentFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-[#e8e4e1] bg-white px-3 py-2 text-[12px] font-semibold text-[#4a4a4a] shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:text-[13px]"
        >
          <SlidersHorizontal className="h-4 w-4 text-[#6b7280]" strokeWidth={2} />
          Course
        </button>

        <label className="relative min-w-0 flex-1 sm:flex-none">
          <select
            defaultValue="current-course"
            className="w-full appearance-none rounded-lg border border-[#e8e4e1] bg-white py-2 pl-3 pr-9 text-[12px] font-semibold text-[#1a1a1a] shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none sm:min-w-[280px] sm:max-w-[360px] sm:text-[13px]"
          >
            <option value="current-course">{courseFilterLabel}</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
            strokeWidth={2}
          />
        </label>
      </div>

      <label className="relative shrink-0">
        <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
          <ArrowUpDown className="h-4 w-4 text-[#6b7280]" strokeWidth={2} />
        </span>
        <select
          defaultValue="default"
          className="appearance-none rounded-lg border border-[#e8e4e1] bg-white py-2 pl-9 pr-9 text-[12px] font-semibold text-[#1a1a1a] shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none sm:text-[13px]"
        >
          <option value="default">{sortLabel}</option>
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
          strokeWidth={2}
        />
      </label>
    </div>
  );
}

function TeacherCourseAssignmentTableRow({
  submission,
  onCheck,
}: {
  submission: TeacherCourseAssignmentSubmission;
  onCheck: (submission: TeacherCourseAssignmentSubmission) => void;
}) {
  return (
    <tr className="border-b border-[#f0ebe8] last:border-b-0 transition-colors hover:bg-[#fafafa]">
      <td className="px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#f0f0f0] bg-[#f9fafb]">
            <Image
              src={submission.studentAvatar}
              alt={submission.studentName}
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
            />
          </div>
          <span className="text-[13px] font-semibold text-[#111827] sm:text-[14px]">
            {submission.studentName}
          </span>
        </div>
      </td>
      <td className="px-3 py-4 sm:py-5">
        <p className="text-[13px] font-semibold text-[#111827] sm:text-[14px]">
          {submission.topicLabel}: {submission.topicTitle}
        </p>
      </td>
      <td className="px-3 py-4 text-[12px] text-[#6b7280] sm:text-[13px] sm:py-5">
        {submission.submittedAt}
      </td>
      <td className="px-3 py-4 sm:py-5">
        <AssignmentStatusBadge status={submission.status} />
      </td>
      <td className="px-5 py-4 text-right sm:px-6 sm:py-5">
        <button
          type="button"
          onClick={() => onCheck(submission)}
          className="text-[13px] font-semibold text-primary transition-colors hover:text-primary/80 sm:text-[14px]"
        >
          Check
        </button>
      </td>
    </tr>
  );
}

interface TeacherCourseAssignmentTableProps {
  submissions: TeacherCourseAssignmentSubmission[];
  assignmentsTab: TeacherCourseAssignmentsTabData;
  onCheckSubmission: (submission: TeacherCourseAssignmentSubmission) => void;
}

export function TeacherCourseAssignmentTable({
  submissions,
  assignmentsTab,
  onCheckSubmission,
}: TeacherCourseAssignmentTableProps) {
  return (
    <div className="space-y-4 sm:space-y-5">
      <TeacherCourseAssignmentFilters
        courseFilterLabel={assignmentsTab.courseFilterLabel}
        sortLabel={assignmentsTab.sortLabel}
      />

      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#ece6e3] bg-white">
                <th className="px-5 py-4 text-[14px] font-bold text-[#1a1a1a] sm:px-6 sm:py-5 sm:text-[15px]">
                  Student Name
                </th>
                <th className="px-3 py-4 text-[14px] font-bold text-[#1a1a1a] sm:py-5 sm:text-[15px]">
                  Topic Name
                </th>
                <th className="px-3 py-4 text-[14px] font-bold text-[#1a1a1a] sm:py-5 sm:text-[15px]">
                  Date of Submission
                </th>
                <th className="px-3 py-4 text-[14px] font-bold text-[#1a1a1a] sm:py-5 sm:text-[15px]">
                  Status
                </th>
                <th className="px-5 py-4 text-right text-[14px] font-bold text-[#1a1a1a] sm:px-6 sm:py-5 sm:text-[15px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <TeacherCourseAssignmentTableRow
                  key={submission.id}
                  submission={submission}
                  onCheck={onCheckSubmission}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
