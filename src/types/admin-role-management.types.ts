export type AdminRoleStatus = "active" | "inactive";

export type AdminRoleSortId =
  | "default"
  | "role-asc"
  | "role-desc"
  | "status-asc"
  | "assignee-desc"
  | "updated-desc";

export type AdminRoleExportId = "csv" | "xsl";

export interface AdminRole {
  id: string;
  name: string;
  status: AdminRoleStatus;
  totalAssignee: number;
  updatedAt: string;
}

export interface AdminRoleForm {
  name: string;
}

export type AdminRolePermissionAction = "view" | "create" | "edit" | "delete";

export interface AdminRolePermissionActions {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}

export interface AdminRolePermissionModule {
  id: string;
  label: string;
  permissions: AdminRolePermissionActions;
}

export interface AdminRoleOption {
  value: string;
  label: string;
}

export interface AdminRolePermissionsPageData {
  roleId: string;
  isActive: boolean;
  roleOptions: AdminRoleOption[];
  modules: AdminRolePermissionModule[];
}

export interface AdminRoleSortOption {
  id: AdminRoleSortId;
  label: string;
}

export interface AdminRoleExportOption {
  id: AdminRoleExportId;
  label: string;
}

export interface AdminRoleManagementData {
  roles: AdminRole[];
  sortOptions: AdminRoleSortOption[];
  exportOptions: AdminRoleExportOption[];
  defaultSortId: AdminRoleSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
  addNewLabel: string;
}
