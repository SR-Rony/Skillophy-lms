import { cn } from "@/utils";
import type { AdminRecordedCourseStatus } from "@/types/admin-course-management.types";

const statusStyles: Record<AdminRecordedCourseStatus, string> = {
  published: "border border-[#86efac] bg-[#dcfce7] text-[#15803d]",
  draft: "border border-[#fdba74] bg-[#ffedd5] text-[#9a3412]",
};

const statusLabels: Record<AdminRecordedCourseStatus, string> = {
  published: "Published",
  draft: "Draft",
};

interface AdminRecordedCourseStatusBadgeProps {
  status: AdminRecordedCourseStatus;
}

export function AdminRecordedCourseStatusBadge({ status }: AdminRecordedCourseStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-semibold leading-none sm:text-[13px]",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
