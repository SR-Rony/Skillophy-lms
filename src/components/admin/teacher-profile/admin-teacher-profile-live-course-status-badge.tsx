import type { AdminTeacherLiveCourseStatus } from "@/types/admin-teacher-profile.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminTeacherLiveCourseStatus, string> = {
  completed: "bg-[#ecfdf3] text-[#16a34a]",
  ongoing: "bg-[#fff7ed] text-[#ea580c]",
  upcoming: "bg-[#eff6ff] text-[#2563eb]",
};

const statusLabels: Record<AdminTeacherLiveCourseStatus, string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  upcoming: "Upcoming",
};

interface AdminTeacherProfileLiveCourseStatusBadgeProps {
  status: AdminTeacherLiveCourseStatus;
}

export function AdminTeacherProfileLiveCourseStatusBadge({
  status,
}: AdminTeacherProfileLiveCourseStatusBadgeProps) {
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
