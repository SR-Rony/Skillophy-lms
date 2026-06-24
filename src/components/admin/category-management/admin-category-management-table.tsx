"use client";

import { AdminCategoryStatusBadge } from "@/components/admin/category-management/admin-category-status-badge";
import type { AdminCategory } from "@/types/admin-category-management.types";

interface AdminCategoryManagementTableProps {
  categories: AdminCategory[];
  countColumnLabel: string;
}

export function AdminCategoryManagementTable({
  categories,
  countColumnLabel,
}: AdminCategoryManagementTableProps) {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[560px] border-collapse text-left">
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
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr
              key={category.id}
              className="border-b border-[#f3f4f6] last:border-b-0 transition-colors hover:bg-[#fafafa]"
            >
              <td className="px-4 py-3.5 sm:px-6">
                <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                  {category.name}
                </p>
              </td>
              <td className="px-4 py-3.5 text-center text-[13px] font-medium tabular-nums text-[#757575] sm:px-6 sm:text-[14px]">
                {category.itemCount}
              </td>
              <td className="px-4 py-3.5 sm:px-6">
                <AdminCategoryStatusBadge status={category.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
