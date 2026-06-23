import type { AdminLearnerRecordedCourseStatus } from "@/types/admin-learner-profile.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminLearnerRecordedCourseStatus, string> = {
  completed: "border border-[#86efac] bg-[#dcfce7] text-[#15803d]",
  ongoing: "border border-[#fdba74] bg-[#ffedd5] text-[#9a3412]",
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
        "inline-flex rounded-full px-3 py-1 text-[12px] font-semibold leading-none sm:text-[13px]",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
