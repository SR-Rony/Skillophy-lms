import type { AdminRole, AdminRoleSortId, AdminRoleStatus } from "@/types/admin-role-management.types";
import { ROUTES } from "@/constants";

const statusOrder: Record<AdminRoleStatus, number> = {
  active: 0,
  inactive: 1,
};

export function formatAdminRoleAssigneeCount(count: number) {
  return count.toString().padStart(2, "0");
}

export function formatAdminRoleUpdatedAt(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) {
    return value;
  }

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function filterAdminRoles(roles: AdminRole[], searchQuery: string) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return roles;
  }

  return roles.filter((role) => role.name.toLowerCase().includes(normalizedSearch));
}

export function sortAdminRoles(roles: AdminRole[], sortId: AdminRoleSortId) {
  const sorted = [...roles];

  switch (sortId) {
    case "role-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "role-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    case "assignee-desc":
      return sorted.sort((a, b) => b.totalAssignee - a.totalAssignee);
    case "updated-desc":
      return sorted.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    default:
      return sorted;
  }
}

export function paginateAdminRoles(roles: AdminRole[], currentPage: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(roles.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: roles.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}

export function getAdminRolePermissionsHref(roleId: string) {
  return ROUTES.admin.rolePermissions(roleId);
}
