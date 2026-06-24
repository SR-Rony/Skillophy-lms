import type { AdminRole, AdminRoleForm } from "@/types/admin-role-management.types";

export function createDefaultAdminRoleForm(): AdminRoleForm {
  return {
    name: "Moderator",
  };
}

export function createEmptyAdminRoleForm(): AdminRoleForm {
  return {
    name: "",
  };
}

export function isAdminRoleFormValid(form: AdminRoleForm) {
  return form.name.trim().length > 0;
}

export function createAdminRoleId() {
  return `role-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function getTodayIsoDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function adminRoleFormToRole(form: AdminRoleForm, roleId: string): AdminRole {
  return {
    id: roleId,
    name: form.name.trim(),
    status: "active",
    totalAssignee: 0,
    updatedAt: getTodayIsoDate(),
  };
}
