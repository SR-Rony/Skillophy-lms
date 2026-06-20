import Link from "next/link";
import type { StudentPaymentHistoryItem } from "@/types/student-payment-history.types";
import { PaymentHistoryPaymentMethod } from "./payment-history-payment-method";
import { PaymentHistoryStatusBadge } from "./payment-history-status-badge";
import { cn } from "@/utils";

function formatAmount(amount: number) {
  if (amount === 0) return "৳00";
  return `৳${amount}`;
}

interface PaymentHistoryTableRowProps {
  payment: StudentPaymentHistoryItem;
}

function PaymentHistoryTableRow({ payment }: PaymentHistoryTableRowProps) {
  const isPayNow = payment.actionLabel === "Pay Now";

  return (
    <tr className="border-b border-[#f0f0f0] bg-white last:border-b-0">
      <td className="px-4 py-4 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
        {payment.courseTitle}
      </td>
      <td className="px-4 py-4 text-[13px] font-medium text-[#757575] sm:px-5 sm:py-5 sm:text-[14px]">
        {payment.date}
      </td>
      <td className="px-4 py-4 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5 sm:py-5 sm:text-[14px]">
        {payment.transactionId}
      </td>
      <td className="px-4 py-4 sm:px-5 sm:py-5">
        <PaymentHistoryPaymentMethod method={payment.paymentMethod} />
      </td>
      <td className="px-4 py-4 text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
        {formatAmount(payment.amount)}
      </td>
      <td className="px-4 py-4 sm:px-5 sm:py-5">
        <PaymentHistoryStatusBadge status={payment.status} />
      </td>
      <td className="px-4 py-4 text-right sm:px-5 sm:py-5">
        <Link
          href={payment.actionHref}
          className={cn(
            "text-[13px] font-semibold underline underline-offset-2 transition-colors sm:text-[14px]",
            isPayNow
              ? "text-primary hover:opacity-90"
              : "text-[#9ca3af] hover:text-[#757575]"
          )}
        >
          {payment.actionLabel}
        </Link>
      </td>
    </tr>
  );
}

interface PaymentHistoryTableProps {
  payments: StudentPaymentHistoryItem[];
}

export function PaymentHistoryTable({ payments }: PaymentHistoryTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#ebe8e6] bg-white">
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Course Name
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Date
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Transaction ID
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Payment Method
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Total Amount
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Status
              </th>
              <th className="px-4 py-4 text-right text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <PaymentHistoryTableRow key={payment.id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
