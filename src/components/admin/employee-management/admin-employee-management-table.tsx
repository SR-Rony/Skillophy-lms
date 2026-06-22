"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import type { AdminEmployee } from "@/types/admin-employee-management.types";
import { AdminEmployeeStatusBadge } from "./admin-employee-status-badge";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminEmployeeManagementTableProps {
  employees: AdminEmployee[];
  selectedIds: Set<string>;
  onToggleRow: (employeeId: string) => void;
  onToggleAll: (employeeIds: string[]) => void;
}

function AdminEmployeeManagementTableRow({
  employee,
  isSelected,
  onToggle,
}: {
  employee: AdminEmployee;
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
          aria-label={`Select ${employee.name}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[240px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={employee.avatar}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
              {employee.name}
            </p>
            <p className="truncate text-[12px] text-[#9ca3af] sm:text-[13px]">{employee.email}</p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {employee.role}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {employee.phone}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <AdminEmployeeStatusBadge status={employee.status} />
      </td>
      <td className="w-12 px-4 py-3 text-right sm:px-5">
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f3f4f6] hover:text-[#1a1a1a]"
          aria-label={`Actions for ${employee.name}`}
        >
          <MoreHorizontal className="h-4 w-4" strokeWidth={2} />
        </button>
      </td>
    </tr>
  );
}

export function AdminEmployeeManagementTable({
  employees,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminEmployeeManagementTableProps) {
  const employeeIds = employees.map((employee) => employee.id);
  const allSelected = employeeIds.length > 0 && employeeIds.every((id) => selectedIds.has(id));
  const someSelected = employeeIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[920px] border-collapse text-left">
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
                onChange={() => onToggleAll(employeeIds)}
                aria-label="Select all employees on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Role
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Phone Number
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
            <th className="w-12 px-4 py-3.5 sm:px-5" aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <AdminEmployeeManagementTableRow
              key={employee.id}
              employee={employee}
              isSelected={selectedIds.has(employee.id)}
              onToggle={() => onToggleRow(employee.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
