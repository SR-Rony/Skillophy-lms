import type { AdminReportStatus } from "@/types/admin-report-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminReportStatus, string> = {
  open: "bg-[#eff6ff] text-[#2563eb]",
  resolved: "bg-[#ecfdf3] text-[#16a34a]",
};

const statusLabels: Record<AdminReportStatus, string> = {
  open: "Open",
  resolved: "Resolved",
};

interface AdminReportManagementStatusBadgeProps {
  status: AdminReportStatus;
}

export function AdminReportManagementStatusBadge({ status }: AdminReportManagementStatusBadgeProps) {
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
