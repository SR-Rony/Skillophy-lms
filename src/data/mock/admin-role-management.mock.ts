import type {
  AdminRole,
  AdminRoleManagementData,
  AdminRoleStatus,
} from "@/types/admin-role-management.types";

const roleSeeds: Array<{
  name: string;
  status: AdminRoleStatus;
  totalAssignee: number;
  updatedAt: string;
}> = [
  { name: "Super Admin", status: "active", totalAssignee: 0, updatedAt: "2021-05-11" },
  { name: "Admin", status: "active", totalAssignee: 5, updatedAt: "2021-05-11" },
  { name: "Teacher", status: "active", totalAssignee: 10, updatedAt: "2021-05-11" },
  { name: "Moderator", status: "active", totalAssignee: 3, updatedAt: "2021-05-11" },
  { name: "General Staff", status: "active", totalAssignee: 8, updatedAt: "2021-05-11" },
  { name: "Super Admin", status: "inactive", totalAssignee: 0, updatedAt: "2021-05-11" },
  { name: "Admin", status: "active", totalAssignee: 5, updatedAt: "2021-05-11" },
  { name: "Teacher", status: "inactive", totalAssignee: 10, updatedAt: "2021-05-11" },
  { name: "General Staff", status: "inactive", totalAssignee: 2, updatedAt: "2021-05-11" },
];

function buildRoles(): AdminRole[] {
  const roles: AdminRole[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = roleSeeds[index % roleSeeds.length];
    const cycle = Math.floor(index / roleSeeds.length);

    roles.push({
      id: `role-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`,
      status: index % 7 === 0 ? "inactive" : seed.status,
      totalAssignee: seed.totalAssignee,
      updatedAt: seed.updatedAt,
    });
  }

  return roles;
}

export const adminRoleManagementData: AdminRoleManagementData = {
  roles: buildRoles(),
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "role-asc", label: "Role (A-Z)" },
    { id: "role-desc", label: "Role (Z-A)" },
    { id: "status-asc", label: "Status" },
    { id: "assignee-desc", label: "Most Assignees" },
    { id: "updated-desc", label: "Recently Updated" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  exportLabel: "Export",
  addNewLabel: "Add New",
};

export function getAdminRoleManagement(): AdminRoleManagementData {
  return adminRoleManagementData;
}
