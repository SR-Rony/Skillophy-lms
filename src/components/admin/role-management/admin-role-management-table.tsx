"use client";

import { useRouter } from "next/navigation";
import { AdminRoleManagementStatusBadge } from "@/components/admin/role-management/admin-role-management-status-badge";
import {
  formatAdminRoleAssigneeCount,
  formatAdminRoleUpdatedAt,
  getAdminRolePermissionsHref,
} from "@/components/admin/role-management/admin-role-management.utils";
import type { AdminRole } from "@/types/admin-role-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminRoleManagementTableProps {
  roles: AdminRole[];
  selectedIds: Set<string>;
  onToggleRow: (roleId: string) => void;
  onToggleAll: (roleIds: string[]) => void;
}

function AdminRoleManagementTableRow({
  role,
  isSelected,
  onToggle,
}: {
  role: AdminRole;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();

  function handleRowClick() {
    router.push(getAdminRolePermissionsHref(role.id));
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
          aria-label={`Select ${role.name}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[180px] px-4 py-3 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {role.name}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <AdminRoleManagementStatusBadge status={role.status} />
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {formatAdminRoleAssigneeCount(role.totalAssignee)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5 sm:text-[14px]">
        {formatAdminRoleUpdatedAt(role.updatedAt)}
      </td>
    </tr>
  );
}

export function AdminRoleManagementTable({
  roles,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminRoleManagementTableProps) {
  const roleIds = roles.map((role) => role.id);
  const allSelected = roleIds.length > 0 && roleIds.every((id) => selectedIds.has(id));
  const someSelected = roleIds.some((id) => selectedIds.has(id));

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
                onChange={() => onToggleAll(roleIds)}
                aria-label="Select all roles on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Role
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Total Assignee
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Updated at
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <AdminRoleManagementTableRow
              key={role.id}
              role={role}
              isSelected={selectedIds.has(role.id)}
              onToggle={() => onToggleRow(role.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
