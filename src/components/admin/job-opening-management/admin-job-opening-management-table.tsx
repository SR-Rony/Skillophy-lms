"use client";

import { Pencil, Trash2 } from "lucide-react";
import { AdminJobOpeningStatusBadge } from "@/components/admin/job-opening-management/admin-job-opening-status-badge";
import { formatAdminJobOpeningDeadline } from "@/components/admin/job-opening-management/admin-job-opening-management.utils";
import type { AdminJobOpening } from "@/types/admin-job-opening-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminJobOpeningManagementTableProps {
  jobOpenings: AdminJobOpening[];
  selectedIds: Set<string>;
  onToggleRow: (jobOpeningId: string) => void;
  onToggleAll: (jobOpeningIds: string[]) => void;
  onEdit: (jobOpening: AdminJobOpening) => void;
  onDelete: (jobOpening: AdminJobOpening) => void;
}

function AdminJobOpeningManagementTableRow({
  jobOpening,
  isSelected,
  onToggle,
  onEdit,
  onDelete,
}: {
  jobOpening: AdminJobOpening;
  isSelected: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
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
          aria-label={`Select ${jobOpening.title}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[200px] px-4 py-3 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {jobOpening.title}
      </td>
      <td className="min-w-[220px] px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {jobOpening.category}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {formatAdminJobOpeningDeadline(jobOpening.deadline)}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <AdminJobOpeningStatusBadge status={jobOpening.status} />
      </td>
      <td className="px-4 py-3 sm:px-5">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={onDelete}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#9ca3af] transition-colors hover:bg-[#f3f4f6] hover:text-[#6b7280]"
            aria-label={`Delete ${jobOpening.title}`}
          >
            <Trash2 className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>

          <button
            type="button"
            onClick={onEdit}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#fff5f5]"
            aria-label={`Edit ${jobOpening.title}`}
          >
            <Pencil className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </td>
    </tr>
  );
}

export function AdminJobOpeningManagementTable({
  jobOpenings,
  selectedIds,
  onToggleRow,
  onToggleAll,
  onEdit,
  onDelete,
}: AdminJobOpeningManagementTableProps) {
  const jobOpeningIds = jobOpenings.map((jobOpening) => jobOpening.id);
  const allSelected =
    jobOpeningIds.length > 0 && jobOpeningIds.every((id) => selectedIds.has(id));
  const someSelected = jobOpeningIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[980px] border-collapse text-left">
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
                onChange={() => onToggleAll(jobOpeningIds)}
                aria-label="Select all job openings on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Job Title
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Category
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Deadline
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
            <th className="px-4 py-3.5 text-right text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobOpenings.map((jobOpening) => (
            <AdminJobOpeningManagementTableRow
              key={jobOpening.id}
              jobOpening={jobOpening}
              isSelected={selectedIds.has(jobOpening.id)}
              onToggle={() => onToggleRow(jobOpening.id)}
              onEdit={() => onEdit(jobOpening)}
              onDelete={() => onDelete(jobOpening)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
