"use client";

import { useRouter } from "next/navigation";
import {
  formatAdminQueryFormSubmittedDate,
  getAdminContactQueryDetailHref,
} from "@/components/admin/query-form-management/admin-query-form-management.utils";
import type { AdminContactQuery } from "@/types/admin-query-form-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminQueryFormContactTableProps {
  queries: AdminContactQuery[];
  selectedIds: Set<string>;
  onToggleRow: (queryId: string) => void;
  onToggleAll: (queryIds: string[]) => void;
}

function AdminQueryFormContactTableRow({
  query,
  isSelected,
  onToggle,
}: {
  query: AdminContactQuery;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  function handleRowClick() {
    router.push(getAdminContactQueryDetailHref(query.id));
  }

  function stopRowNavigation(event: React.MouseEvent) {
    event.stopPropagation();
  }

  return (
    <tr
      onClick={handleRowClick}
      className={cn(
        "cursor-pointer border-b border-[#f3f4f6] last:border-b-0 transition-colors",
        isSelected ? "bg-[#fff5f5]" : "bg-white hover:bg-[#fafafa]"
      )}
    >
      <td className="w-11 px-4 py-3 sm:px-5" onClick={stopRowNavigation}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Select ${query.name}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[200px] px-4 py-3 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {query.name}
      </td>
      <td className="min-w-[260px] px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {query.email}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {formatAdminQueryFormSubmittedDate(query.submittedDate)}
      </td>
    </tr>
  );
}

export function AdminQueryFormContactTable({
  queries,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminQueryFormContactTableProps) {
  const queryIds = queries.map((query) => query.id);
  const allSelected = queryIds.length > 0 && queryIds.every((id) => selectedIds.has(id));
  const someSelected = queryIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left">
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
                onChange={() => onToggleAll(queryIds)}
                aria-label="Select all contact queries on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Email
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Submitted Date
            </th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <AdminQueryFormContactTableRow
              key={query.id}
              query={query}
              isSelected={selectedIds.has(query.id)}
              onToggle={() => onToggleRow(query.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
