import type { AdminTeacherPaymentStatus } from "@/types/admin-teacher-profile.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminTeacherPaymentStatus, string> = {
  paid: "bg-[#ecfdf3] text-[#16a34a]",
  due: "bg-[#fff7ed] text-[#ea580c]",
};

const statusLabels: Record<AdminTeacherPaymentStatus, string> = {
  paid: "Paid",
  due: "Due",
};

interface AdminTeacherProfilePaymentStatusBadgeProps {
  status: AdminTeacherPaymentStatus;
}

export function AdminTeacherProfilePaymentStatusBadge({
  status,
}: AdminTeacherProfilePaymentStatusBadgeProps) {
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
