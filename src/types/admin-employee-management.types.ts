export type AdminEmployeeTab = "all" | "employee" | "teacher";

export type AdminEmployeeRole =
  | "Admin"
  | "Super Admin"
  | "Moderator"
  | "Batch Coordinator"
  | "General Staff"
  | "Teacher";

export type AdminEmployeeStatus = "active" | "inactive";

export type AdminEmployeeCategory = "employee" | "teacher";

export type AdminEmployeeSortId = "default" | "name-asc" | "name-desc" | "role-asc";

export interface AdminEmployee {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: AdminEmployeeRole;
  phone: string;
  status: AdminEmployeeStatus;
  category: AdminEmployeeCategory;
}

export interface AdminEmployeeRoleOption {
  id: string;
  label: string;
}

export interface AdminEmployeeSortOption {
  id: AdminEmployeeSortId;
  label: string;
}

export type AdminEmployeeExportId = "csv" | "xsl";

export interface AdminEmployeeExportOption {
  id: AdminEmployeeExportId;
  label: string;
}

export interface AdminEmployeeInviteRoleOption {
  id: string;
  label: string;
}

export interface AdminEmployeeManagementData {
  employees: AdminEmployee[];
  roleOptions: AdminEmployeeRoleOption[];
  sortOptions: AdminEmployeeSortOption[];
  exportOptions: AdminEmployeeExportOption[];
  inviteRoleOptions: AdminEmployeeInviteRoleOption[];
  addMemberDefaults: {
    email: string;
    roleId: string;
  };
  defaultRoleId: string;
  defaultSortId: AdminEmployeeSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
  addNewLabel: string;
}
