import type { AdminEmployeeStatus } from "@/types/admin-employee-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminEmployeeStatus, string> = {
  active: "bg-[#ecfdf3] text-[#16a34a]",
  inactive: "bg-[#f3f4f6] text-[#6b7280]",
};

const statusLabels: Record<AdminEmployeeStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

interface AdminEmployeeStatusBadgeProps {
  status: AdminEmployeeStatus;
}

export function AdminEmployeeStatusBadge({ status }: AdminEmployeeStatusBadgeProps) {
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
