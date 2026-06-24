import type {
  AdminRolePermissionAction,
  AdminRolePermissionActions,
  AdminRolePermissionModule,
  AdminRolePermissionsPageData,
} from "@/types/admin-role-management.types";
import { adminRoleManagementData } from "./admin-role-management.mock";

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

const permissionModules: Array<{ id: string; label: string }> = [
  { id: "employee-management", label: "Employee Management" },
  { id: "learner-management", label: "Learner Management" },
  { id: "course-management", label: "Course Management" },
  { id: "categories", label: "Categories" },
  { id: "batches", label: "Batches" },
  { id: "messages", label: "Messages" },
  { id: "transaction", label: "Transaction" },
];

const emptyPermissions: AdminRolePermissionActions = {
  view: false,
  create: false,
  edit: false,
  delete: false,
};

const moderatorPermissionOverrides: Record<string, AdminRolePermissionActions> = {
  "employee-management": { view: true, create: false, edit: false, delete: false },
  "learner-management": { view: false, create: true, edit: false, delete: false },
  "course-management": { view: true, create: false, edit: true, delete: true },
  categories: { view: true, create: false, edit: false, delete: false },
  batches: { view: true, create: false, edit: false, delete: false },
  messages: { ...emptyPermissions },
  transaction: { ...emptyPermissions },
};

function createPermissionModules(
  overrides: Record<string, AdminRolePermissionActions> = {}
): AdminRolePermissionModule[] {
  return permissionModules.map((module) => ({
    id: module.id,
    label: module.label,
    permissions: overrides[module.id] ?? { ...emptyPermissions },
  }));
}

function getRolePermissionOverrides(roleName: string) {
  if (roleName === "Moderator" || roleName.startsWith("Moderator ")) {
    return moderatorPermissionOverrides;
  }

  return {};
}

export function getAdminRolePermissions(
  roleId: string,
  fallbackRoleName?: string | null
): AdminRolePermissionsPageData | null {
  const role = adminRoleManagementData.roles.find((item) => item.id === roleId);
  const resolvedRole =
    role ??
    (fallbackRoleName
      ? {
          id: roleId,
          name: fallbackRoleName,
          status: "active" as const,
          totalAssignee: 0,
          updatedAt: "2021-05-11",
        }
      : null);

  if (!resolvedRole) {
    return null;
  }

  const roleOptions = adminRoleManagementData.roles.slice(0, 12).map((item) => ({
    value: item.id,
    label: item.name,
  }));

  if (!roleOptions.some((option) => option.value === resolvedRole.id)) {
    roleOptions.unshift({
      value: resolvedRole.id,
      label: resolvedRole.name,
    });
  }

  return {
    roleId: resolvedRole.id,
    isActive: resolvedRole.status === "active",
    roleOptions,
    modules: createPermissionModules(getRolePermissionOverrides(resolvedRole.name)),
  };
}
