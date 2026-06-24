import type { AdminSupportTicketStatus } from "@/types/admin-support-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminSupportTicketStatus, string> = {
  open: "bg-[#eff6ff] text-[#2563eb]",
  "in-progress": "bg-[#fff4e8] text-[#ea580c]",
  resolved: "bg-[#ecfdf3] text-[#16a34a]",
};

const statusLabels: Record<AdminSupportTicketStatus, string> = {
  open: "Open",
  "in-progress": "In Progress",
  resolved: "Resolved",
};

interface AdminSupportManagementStatusBadgeProps {
  status: AdminSupportTicketStatus;
}

export function AdminSupportManagementStatusBadge({
  status,
}: AdminSupportManagementStatusBadgeProps) {
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
