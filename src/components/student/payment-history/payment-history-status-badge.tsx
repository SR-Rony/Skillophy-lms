import type { StudentPaymentStatus } from "@/types/student-payment-history.types";
import { cn } from "@/utils";

const statusStyles: Record<StudentPaymentStatus, string> = {
  pending: "bg-[#fff4e5] text-[#c45a00]",
  failed: "bg-[#fee2e2] text-[#dc2626]",
  completed: "bg-[#dcfce7] text-[#16a34a]",
};

const statusLabels: Record<StudentPaymentStatus, string> = {
  pending: "Pending",
  failed: "Failed",
  completed: "Completed",
};

interface PaymentHistoryStatusBadgeProps {
  status: StudentPaymentStatus;
}

export function PaymentHistoryStatusBadge({ status }: PaymentHistoryStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-w-[92px] items-center justify-center rounded-full px-3 py-1.5 text-[12px] font-semibold sm:text-[13px]",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
