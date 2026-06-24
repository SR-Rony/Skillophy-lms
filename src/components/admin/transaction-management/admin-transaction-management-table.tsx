"use client";

import Image from "next/image";
import {
  formatAdminTransactionAmount,
  formatAdminTransactionDate,
} from "@/components/admin/transaction-management/admin-transaction-management.utils";
import { PaymentHistoryPaymentMethod } from "@/components/student/payment-history/payment-history-payment-method";
import { PaymentHistoryStatusBadge } from "@/components/student/payment-history/payment-history-status-badge";
import type { AdminTransaction } from "@/types/admin-transaction-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminTransactionManagementTableProps {
  transactions: AdminTransaction[];
  selectedIds: Set<string>;
  onToggleRow: (transactionId: string) => void;
  onToggleAll: (transactionIds: string[]) => void;
}

function AdminTransactionManagementTableRow({
  transaction,
  isSelected,
  onToggle,
}: {
  transaction: AdminTransaction;
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
      <td className="w-11 px-4 py-3 sm:px-5">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Select ${transaction.name}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[220px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={transaction.avatar}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
              {transaction.name}
            </p>
            <p className="truncate text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
              {transaction.email}
            </p>
          </div>
        </div>
      </td>
      <td className="min-w-[240px] px-4 py-3 text-[13px] font-medium text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {transaction.courseName}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {formatAdminTransactionDate(transaction.date)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {transaction.transactionId}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <PaymentHistoryPaymentMethod method={transaction.paymentMethod} />
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {formatAdminTransactionAmount(transaction.amount)}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <PaymentHistoryStatusBadge status={transaction.status} />
      </td>
    </tr>
  );
}

export function AdminTransactionManagementTable({
  transactions,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminTransactionManagementTableProps) {
  const transactionIds = transactions.map((transaction) => transaction.id);
  const allSelected =
    transactionIds.length > 0 && transactionIds.every((id) => selectedIds.has(id));
  const someSelected = transactionIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[1240px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="w-11 px-4 py-3.5 sm:px-5">
              <input
                type="checkbox"
                checked={allSelected}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = !allSelected && someSelected;
                  }
                }}
                onChange={() => onToggleAll(transactionIds)}
                aria-label="Select all transactions on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Course Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Date
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Transaction ID
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Payment Method
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Payment Amount
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <AdminTransactionManagementTableRow
              key={transaction.id}
              transaction={transaction}
              isSelected={selectedIds.has(transaction.id)}
              onToggle={() => onToggleRow(transaction.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
