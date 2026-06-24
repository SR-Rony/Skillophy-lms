"use client";

import Image from "next/image";
import { AdminWorkshopStatusBadge } from "@/components/admin/workshop-management/admin-workshop-status-badge";
import {
  formatAdminWorkshopDate,
  formatAdminWorkshopLearners,
} from "@/components/admin/workshop-management/admin-workshop-management.utils";
import type { AdminWorkshop } from "@/types/admin-workshop-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminWorkshopManagementTableProps {
  workshops: AdminWorkshop[];
  selectedIds: Set<string>;
  onToggleRow: (workshopId: string) => void;
  onToggleAll: (workshopIds: string[]) => void;
}

function AdminWorkshopManagementTableRow({
  workshop,
  isSelected,
  onToggle,
}: {
  workshop: AdminWorkshop;
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
          aria-label={`Select ${workshop.title}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[280px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={workshop.thumbnail}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
            />
          </div>
          <p className="min-w-0 text-[13px] font-semibold leading-snug text-[#1a1a1a] sm:text-[14px]">
            {workshop.title}
          </p>
        </div>
      </td>
      <td className="min-w-[180px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={workshop.conductorAvatar}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="32px"
            />
          </div>
          <p className="truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
            {workshop.conductorName}
          </p>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {workshop.category}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {formatAdminWorkshopLearners(workshop.totalLearners)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {formatAdminWorkshopDate(workshop.date)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {workshop.time}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <AdminWorkshopStatusBadge status={workshop.status} />
      </td>
    </tr>
  );
}

export function AdminWorkshopManagementTable({
  workshops,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminWorkshopManagementTableProps) {
  const workshopIds = workshops.map((workshop) => workshop.id);
  const allSelected = workshopIds.length > 0 && workshopIds.every((id) => selectedIds.has(id));
  const someSelected = workshopIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[1180px] border-collapse text-left">
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
                onChange={() => onToggleAll(workshopIds)}
                aria-label="Select all workshops on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Workshop Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Conducted by
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Category
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Total Learners
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Date
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Time
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop) => (
            <AdminWorkshopManagementTableRow
              key={workshop.id}
              workshop={workshop}
              isSelected={selectedIds.has(workshop.id)}
              onToggle={() => onToggleRow(workshop.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
