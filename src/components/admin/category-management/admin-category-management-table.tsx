"use client";

import { Pencil, Trash2 } from "lucide-react";
import { AdminCategoryStatusBadge } from "@/components/admin/category-management/admin-category-status-badge";
import type { AdminCategory } from "@/types/admin-category-management.types";

interface AdminCategoryManagementTableProps {
  categories: AdminCategory[];
  countColumnLabel: string;
  onEdit: (category: AdminCategory) => void;
  onDelete: (category: AdminCategory) => void;
}

function AdminCategoryManagementTableRow({
  category,
  onEdit,
  onDelete,
}: {
  category: AdminCategory;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <tr className="border-b border-[#f3f4f6] last:border-b-0 transition-colors hover:bg-[#fafafa]">
      <td className="px-4 py-3.5 sm:px-6">
        <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">{category.name}</p>
      </td>
      <td className="px-4 py-3.5 text-center text-[13px] font-medium tabular-nums text-[#757575] sm:px-6 sm:text-[14px]">
        {category.itemCount}
      </td>
      <td className="px-4 py-3.5 sm:px-6">
        <AdminCategoryStatusBadge status={category.status} />
      </td>
      <td className="px-4 py-3.5 sm:px-6">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={onDelete}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#9ca3af] transition-colors hover:bg-[#f3f4f6] hover:text-[#6b7280]"
            aria-label={`Delete ${category.name}`}
          >
            <Trash2 className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>

          <button
            type="button"
            onClick={onEdit}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#fff5f5]"
            aria-label={`Edit ${category.name}`}
          >
            <Pencil className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </td>
    </tr>
  );
}

export function AdminCategoryManagementTable({
  categories,
  countColumnLabel,
  onEdit,
  onDelete,
}: AdminCategoryManagementTableProps) {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Category
            </th>
            <th className="px-4 py-3.5 text-center text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              {countColumnLabel}
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Status
            </th>
            <th className="px-4 py-3.5 text-right text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <AdminCategoryManagementTableRow
              key={category.id}
              category={category}
              onEdit={() => onEdit(category)}
              onDelete={() => onDelete(category)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
