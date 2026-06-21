import Image from "next/image";
import Link from "next/link";
import { TeacherCourseFilter } from "@/components/teacher/dashboard/teacher-course-filter";
import { TeacherDashboardEmptyState } from "@/components/teacher/dashboard/teacher-dashboard-empty-state";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import { TeacherEmptyIllustration } from "@/components/teacher/shared/teacher-empty-illustration";
import type {
  TeacherDashboardCourseFilter,
  TeacherDashboardEmptyState as TeacherDashboardEmptyStateData,
  TeacherSubmittedAssignment,
} from "@/types/teacher-dashboard.types";
import { cn } from "@/utils";

interface TeacherSubmittedAssignmentsCardProps {
  assignments: TeacherSubmittedAssignment[];
  emptyState: TeacherDashboardEmptyStateData;
  courseFilters: TeacherDashboardCourseFilter[];
  selectedCourseId: string;
  className?: string;
}

export function TeacherSubmittedAssignmentsCard({
  assignments,
  emptyState,
  courseFilters,
  selectedCourseId,
  className,
}: TeacherSubmittedAssignmentsCardProps) {
  const hasAssignments = assignments.length > 0;

  return (
    <TeacherDashboardPanel
      title="Submitted Assignments"
      className={cn(hasAssignments ? "min-h-0" : "min-h-[360px] lg:min-h-[390px]", className)}
      action={
        <TeacherCourseFilter
          courseFilters={courseFilters}
          selectedCourseId={selectedCourseId}
        />
      }
    >
      {hasAssignments ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[#f0ebe8] bg-[#fafafa]">
                <th className="px-5 py-3.5 text-[12px] font-semibold text-[#6b7280] sm:px-6 sm:text-[13px]">
                  Student Name
                </th>
                <th className="px-3 py-3.5 text-[12px] font-semibold text-[#6b7280] sm:text-[13px]">
                  Topic Name
                </th>
                <th className="px-3 py-3.5 text-[12px] font-semibold text-[#6b7280] sm:text-[13px]">
                  Date of Submission
                </th>
                <th className="px-5 py-3.5 text-right text-[12px] font-semibold text-[#6b7280] sm:px-6 sm:text-[13px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3f4f6]">
              {assignments.map((assignment) => (
                <tr key={assignment.id} className="transition-colors hover:bg-[#fafafa]">
                  <td className="px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#f0f0f0] bg-[#f9fafb]">
                        <Image
                          src={assignment.studentAvatar}
                          alt={assignment.studentName}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="36px"
                        />
                      </div>
                      <span className="text-[13px] font-semibold text-[#111827] sm:text-[14px]">
                        {assignment.studentName}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <p className="text-[13px] font-semibold text-[#111827] sm:text-[14px]">
                      {assignment.topicTitle}
                    </p>
                    <p className="mt-0.5 text-[12px] text-[#9ca3af]">{assignment.topicSubtitle}</p>
                  </td>
                  <td className="px-3 py-4 text-[12px] text-[#6b7280] sm:text-[13px]">
                    {assignment.submittedAt}
                  </td>
                  <td className="px-5 py-4 text-right sm:px-6">
                    <Link
                      href={assignment.checkHref ?? "#"}
                      className="text-[13px] font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Check
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <TeacherDashboardEmptyState
          icon={<TeacherEmptyIllustration size="md" />}
          message={emptyState.message}
          className="py-14 sm:py-16"
        />
      )}
    </TeacherDashboardPanel>
  );
}
