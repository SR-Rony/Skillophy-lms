"use client";

import {
  areAllRolePermissionActionsSelected,
  areSomeRolePermissionActionsSelected,
  toggleRolePermissionActionForAllModules,
  toggleRolePermissionActionForModule,
  adminRolePermissionActionLabels,
  adminRolePermissionActions,
} from "@/components/admin/role-management/admin-role-permissions.utils";
import type {
  AdminRolePermissionAction,
  AdminRolePermissionModule,
} from "@/types/admin-role-management.types";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminRolePermissionsTableProps {
  modules: AdminRolePermissionModule[];
  onChange: (modules: AdminRolePermissionModule[]) => void;
}

function AdminRolePermissionsTableRow({
  module,
  onToggle,
}: {
  module: AdminRolePermissionModule;
  onToggle: (action: AdminRolePermissionAction, checked: boolean) => void;
}) {
  return (
    <tr className="border-b border-[#f3f4f6] last:border-b-0 bg-white hover:bg-[#fafafa]">
      <td className="min-w-[220px] px-4 py-3.5 text-[13px] font-semibold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
        {module.label}
      </td>
      {adminRolePermissionActions.map((action) => (
        <td key={action} className="px-4 py-3.5 text-center sm:px-5">
          <input
            type="checkbox"
            checked={module.permissions[action]}
            onChange={(event) => onToggle(action, event.target.checked)}
            aria-label={`${adminRolePermissionActionLabels[action]} permission for ${module.label}`}
            className={checkboxClassName}
          />
        </td>
      ))}
    </tr>
  );
}

export function AdminRolePermissionsTable({ modules, onChange }: AdminRolePermissionsTableProps) {
  function handleToggleAll(action: AdminRolePermissionAction) {
    const allSelected = areAllRolePermissionActionsSelected(modules, action);
    onChange(toggleRolePermissionActionForAllModules(modules, action, !allSelected));
  }

  function handleToggleModule(
    moduleId: string,
    action: AdminRolePermissionAction,
    checked: boolean
  ) {
    onChange(toggleRolePermissionActionForModule(modules, moduleId, action, checked));
  }

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Permission info
            </th>
            {adminRolePermissionActions.map((action) => {
              const allSelected = areAllRolePermissionActionsSelected(modules, action);
              const someSelected = areSomeRolePermissionActionsSelected(modules, action);

              return (
                <th
                  key={action}
                  className="px-4 py-3.5 text-center text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]"
                >
                  <div className="inline-flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      ref={(input) => {
                        if (input) {
                          input.indeterminate = someSelected;
                        }
                      }}
                      onChange={() => handleToggleAll(action)}
                      aria-label={`Select all ${adminRolePermissionActionLabels[action]} permissions`}
                      className={checkboxClassName}
                    />
                    <span>{adminRolePermissionActionLabels[action]}</span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <AdminRolePermissionsTableRow
              key={module.id}
              module={module}
              onToggle={(action, checked) => handleToggleModule(module.id, action, checked)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
