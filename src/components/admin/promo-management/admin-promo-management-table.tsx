"use client";

import { Pencil, Trash2 } from "lucide-react";
import { formatAdminPromoDiscount } from "@/components/admin/promo-management/admin-promo-management.utils";
import { AdminPromoStatusBadge } from "@/components/admin/promo-management/admin-promo-status-badge";
import type { AdminPromo } from "@/types/admin-promo-management.types";

interface AdminPromoManagementTableProps {
  promos: AdminPromo[];
  onEdit: (promo: AdminPromo) => void;
  onDelete: (promo: AdminPromo) => void;
}

function AdminPromoManagementTableRow({
  promo,
  onEdit,
  onDelete,
}: {
  promo: AdminPromo;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <tr className="border-b border-[#f3f4f6] last:border-b-0 transition-colors hover:bg-[#fafafa]">
      <td className="px-4 py-3.5 sm:px-6">
        <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">{promo.name}</p>
      </td>
      <td className="px-4 py-3.5 text-center text-[13px] font-medium tabular-nums text-[#757575] sm:px-6 sm:text-[14px]">
        {promo.courseCount}
      </td>
      <td className="px-4 py-3.5 text-center text-[13px] font-medium tabular-nums text-[#757575] sm:px-6 sm:text-[14px]">
        {promo.userCount}
      </td>
      <td className="px-4 py-3.5 text-center text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:px-6 sm:text-[14px]">
        {formatAdminPromoDiscount(promo.discountType, promo.discountValue)}
      </td>
      <td className="px-4 py-3.5 sm:px-6">
        <AdminPromoStatusBadge status={promo.status} />
      </td>
      <td className="px-4 py-3.5 sm:px-6">
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            onClick={onDelete}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#9ca3af] transition-colors hover:bg-[#f3f4f6] hover:text-[#6b7280]"
            aria-label={`Delete ${promo.name}`}
          >
            <Trash2 className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>

          <button
            type="button"
            onClick={onEdit}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#fff5f5]"
            aria-label={`Edit ${promo.name}`}
          >
            <Pencil className="h-4 w-4" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </td>
    </tr>
  );
}

export function AdminPromoManagementTable({
  promos,
  onEdit,
  onDelete,
}: AdminPromoManagementTableProps) {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Promo Name
            </th>
            <th className="px-4 py-3.5 text-center text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              No of Courses
            </th>
            <th className="px-4 py-3.5 text-center text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              No of User
            </th>
            <th className="px-4 py-3.5 text-center text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Discount
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
          {promos.map((promo) => (
            <AdminPromoManagementTableRow
              key={promo.id}
              promo={promo}
              onEdit={() => onEdit(promo)}
              onDelete={() => onDelete(promo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
