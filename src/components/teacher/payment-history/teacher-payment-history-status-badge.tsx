import type { TeacherPaymentStatus } from "@/types/teacher-payment-history.types";
import { cn } from "@/utils";

const statusStyles: Record<TeacherPaymentStatus, string> = {
  paid: "bg-[#ecfdf3] text-[#16a34a]",
  due: "bg-[#fff7ed] text-[#ea580c]",
};

const statusLabels: Record<TeacherPaymentStatus, string> = {
  paid: "Paid",
  due: "Due",
};

interface TeacherPaymentHistoryStatusBadgeProps {
  status: TeacherPaymentStatus;
}

export function TeacherPaymentHistoryStatusBadge({
  status,
}: TeacherPaymentHistoryStatusBadgeProps) {
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
