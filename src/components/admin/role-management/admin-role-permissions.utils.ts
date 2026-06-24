import type {
  AdminRolePermissionAction,
  AdminRolePermissionModule,
} from "@/types/admin-role-management.types";

export const adminRolePermissionActions: AdminRolePermissionAction[] = [
  "view",
  "create",
  "edit",
  "delete",
];

export const adminRolePermissionActionLabels: Record<AdminRolePermissionAction, string> = {
  view: "View",
  create: "Create",
  edit: "Edit",
  delete: "Delete",
};

export function areAllRolePermissionActionsSelected(
  modules: AdminRolePermissionModule[],
  action: AdminRolePermissionAction
) {
  return modules.length > 0 && modules.every((module) => module.permissions[action]);
}

export function areSomeRolePermissionActionsSelected(
  modules: AdminRolePermissionModule[],
  action: AdminRolePermissionAction
) {
  return (
    modules.some((module) => module.permissions[action]) &&
    !areAllRolePermissionActionsSelected(modules, action)
  );
}

export function toggleRolePermissionActionForAllModules(
  modules: AdminRolePermissionModule[],
  action: AdminRolePermissionAction,
  checked: boolean
): AdminRolePermissionModule[] {
  return modules.map((module) => ({
    ...module,
    permissions: {
      ...module.permissions,
      [action]: checked,
    },
  }));
}

export function toggleRolePermissionActionForModule(
  modules: AdminRolePermissionModule[],
  moduleId: string,
  action: AdminRolePermissionAction,
  checked: boolean
): AdminRolePermissionModule[] {
  return modules.map((module) =>
    module.id === moduleId
      ? {
          ...module,
          permissions: {
            ...module.permissions,
            [action]: checked,
          },
        }
      : module
  );
}
