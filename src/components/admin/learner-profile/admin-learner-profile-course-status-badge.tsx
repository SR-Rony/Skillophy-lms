import type { AdminLearnerRecordedCourseStatus } from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminLearnerRecordedCourseStatus, string> = {
  completed: "bg-[#ecfdf3] text-[#16a34a]",
  ongoing: "bg-[#fff7ed] text-[#ea580c]",
};

const statusLabels: Record<AdminLearnerRecordedCourseStatus, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
};

interface AdminLearnerProfileCourseStatusBadgeProps {
  status: AdminLearnerRecordedCourseStatus;
}

export function AdminLearnerProfileCourseStatusBadge({
  status,
}: AdminLearnerProfileCourseStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[12px] font-semibold sm:text-[13px]",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
