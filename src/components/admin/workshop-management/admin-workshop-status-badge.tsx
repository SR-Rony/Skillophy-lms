import type { AdminWorkshopStatus } from "@/types/admin-workshop-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminWorkshopStatus, string> = {
  completed: "border border-[#86efac] bg-[#dcfce7] text-[#15803d]",
  draft: "border border-[#fdba74] bg-[#ffedd5] text-[#9a3412]",
};

const statusLabels: Record<AdminWorkshopStatus, string> = {
  completed: "Completed",
  draft: "Draft",
};

interface AdminWorkshopStatusBadgeProps {
  status: AdminWorkshopStatus;
}

export function AdminWorkshopStatusBadge({ status }: AdminWorkshopStatusBadgeProps) {
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
