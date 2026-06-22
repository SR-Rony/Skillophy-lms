"use client";

import Image from "next/image";
import { AdminTeacherProfilePaymentStatusBadge } from "@/components/admin/teacher-profile/admin-teacher-profile-payment-status-badge";
import {
  formatAdminTeacherEarnings,
  formatAdminTeacherPublishDate,
} from "@/components/admin/teacher-profile/admin-teacher-profile.utils";
import type { AdminTeacherPayment } from "@/types/admin-teacher-profile.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminTeacherProfilePaymentTableProps {
  payments: AdminTeacherPayment[];
  selectedIds: Set<string>;
  onToggleRow: (paymentId: string) => void;
  onToggleAll: (paymentIds: string[]) => void;
}

function AdminTeacherProfilePaymentTableRow({
  payment,
  isSelected,
  onToggle,
}: {
  payment: AdminTeacherPayment;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <tr
      className={cn(
        "border-b border-[#f3f4f6] last:border-b-0 transition-colors",
        isSelected ? "bg-[#fff5f5]" : "bg-white hover:bg-[#fafafa]"
      )}
    >
      <td className="w-11 px-4 py-3.5 sm:px-6">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Select ${payment.title}`}
          className={checkboxClassName}
        />
      </td>
      <td className="px-4 py-3.5 sm:px-6">
        <div className="flex min-w-[260px] items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={payment.thumbnail}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="40px"
            />
          </div>
          <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">{payment.title}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium text-[#757575] sm:px-6">
        {formatAdminTeacherPublishDate(payment.paymentDate)}
      </td>
      <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:px-6">
        {formatAdminTeacherEarnings(payment.amount)}
      </td>
      <td className="px-4 py-3.5 sm:px-6">
        <AdminTeacherProfilePaymentStatusBadge status={payment.status} />
      </td>
    </tr>
  );
}

export function AdminTeacherProfilePaymentTable({
  payments,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminTeacherProfilePaymentTableProps) {
  const paymentIds = payments.map((payment) => payment.id);
  const allSelected = paymentIds.length > 0 && paymentIds.every((id) => selectedIds.has(id));
  const someSelected = paymentIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[920px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="w-11 px-4 py-3.5 sm:px-6">
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
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Course Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Date
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Payment Amount
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <AdminTeacherProfilePaymentTableRow
              key={payment.id}
              payment={payment}
              isSelected={selectedIds.has(payment.id)}
              onToggle={() => onToggleRow(payment.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
