import type { AdminJobOpeningStatus } from "@/types/admin-job-opening-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminJobOpeningStatus, string> = {
  active: "bg-[#ecfdf3] text-[#16a34a]",
  inactive: "border border-[#ebe8e6] bg-white text-[#1a1a1a]",
};

const statusLabels: Record<AdminJobOpeningStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

interface AdminJobOpeningStatusBadgeProps {
  status: AdminJobOpeningStatus;
}

export function AdminJobOpeningStatusBadge({ status }: AdminJobOpeningStatusBadgeProps) {
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
