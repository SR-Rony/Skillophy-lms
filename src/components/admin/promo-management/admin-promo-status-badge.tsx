import type { AdminPromoStatus } from "@/types/admin-promo-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminPromoStatus, string> = {
  active: "bg-[#ecfdf3] text-[#16a34a]",
  inactive: "bg-[#f3f4f6] text-[#6b7280]",
};

const statusLabels: Record<AdminPromoStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

interface AdminPromoStatusBadgeProps {
  status: AdminPromoStatus;
}

export function AdminPromoStatusBadge({ status }: AdminPromoStatusBadgeProps) {
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
