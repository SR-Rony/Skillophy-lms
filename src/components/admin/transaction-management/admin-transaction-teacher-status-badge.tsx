import type { AdminTeacherTransactionStatus } from "@/types/admin-transaction-management.types";
import { cn } from "@/utils";

const statusStyles: Record<AdminTeacherTransactionStatus, string> = {
  paid: "bg-[#dcfce7] text-[#16a34a]",
  due: "bg-[#fff4e5] text-[#c45a00]",
};

const statusLabels: Record<AdminTeacherTransactionStatus, string> = {
  paid: "Paid",
  due: "Due",
};

interface AdminTransactionTeacherStatusBadgeProps {
  status: AdminTeacherTransactionStatus;
}

export function AdminTransactionTeacherStatusBadge({
  status,
}: AdminTransactionTeacherStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-w-[72px] items-center justify-center rounded-full px-3 py-1.5 text-[12px] font-semibold sm:text-[13px]",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
