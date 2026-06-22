"use client";

import Image from "next/image";
import type { TeacherPaymentHistoryItem } from "@/types/teacher-payment-history.types";
import { TeacherPaymentHistoryStatusBadge } from "./teacher-payment-history-status-badge";
import { formatTeacherPaymentAmount } from "./teacher-payment-history.utils";
import { cn } from "@/utils";

interface TeacherPaymentHistoryTableProps {
  payments: TeacherPaymentHistoryItem[];
  selectedIds: Set<string>;
  onToggleRow: (paymentId: string) => void;
  onToggleAll: (paymentIds: string[]) => void;
}

interface TeacherPaymentHistoryTableRowProps {
  payment: TeacherPaymentHistoryItem;
  isSelected: boolean;
  onToggle: () => void;
}

function TeacherPaymentHistoryTableRow({
  payment,
  isSelected,
  onToggle,
}: TeacherPaymentHistoryTableRowProps) {
  return (
    <tr
      className={cn(
        "border-b border-[#f0f0f0] last:border-b-0",
        isSelected ? "bg-[#fff5f5]" : "bg-white"
      )}
    >
      <td className="w-12 px-4 py-4 sm:px-5 sm:py-5">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Select payment for ${payment.courseTitle}`}
          className="h-4 w-4 rounded border-[#d1d5db] text-primary focus:ring-primary/20"
        />
      </td>
      <td className="min-w-[280px] px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-11 sm:w-11">
            <Image
              src={payment.courseThumbnail}
              alt=""
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <span className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
            {payment.courseTitle}
          </span>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-[13px] font-medium text-[#757575] sm:px-5 sm:py-5 sm:text-[14px]">
        {payment.date}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-[13px] font-medium text-[#757575] sm:px-5 sm:py-5 sm:text-[14px]">
        {payment.time}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
        {formatTeacherPaymentAmount(payment.amount)}
      </td>
      <td className="px-4 py-4 sm:px-5 sm:py-5">
        <TeacherPaymentHistoryStatusBadge status={payment.status} />
      </td>
    </tr>
  );
}

export function TeacherPaymentHistoryTable({
  payments,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: TeacherPaymentHistoryTableProps) {
  const paymentIds = payments.map((payment) => payment.id);
  const allSelected = paymentIds.length > 0 && paymentIds.every((id) => selectedIds.has(id));
  const someSelected = paymentIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#ebe8e6] bg-white">
              <th className="w-12 px-4 py-4 sm:px-5 sm:py-5">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(input) => {
                    if (input) {
                      input.indeterminate = !allSelected && someSelected;
                    }
                  }}
                  onChange={() => onToggleAll(paymentIds)}
                  aria-label="Select all payments on this page"
                  className="h-4 w-4 rounded border-[#d1d5db] text-primary focus:ring-primary/20"
                />
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Course Name
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Date
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Time
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Payment Amount
              </th>
              <th className="px-4 py-4 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:py-5 sm:text-[14px]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <TeacherPaymentHistoryTableRow
                key={payment.id}
                payment={payment}
                isSelected={selectedIds.has(payment.id)}
                onToggle={() => onToggleRow(payment.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
