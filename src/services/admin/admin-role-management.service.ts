import {
  resolveAdminRoleManagement,
  resolveAdminRolePermissions,
} from "@/data/mock/admin-data.resolvers";
import type {
  AdminRoleManagementData,
  AdminRolePermissionsPageData,
} from "@/types/admin-role-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminRoleManagementService = {
  async getRoles(): Promise<AdminRoleManagementData> {
    return fetchAdminData(() => resolveAdminRoleManagement());
  },

  async getRolePermissions(
    roleId: string,
    roleName?: string | null
  ): Promise<AdminRolePermissionsPageData | null> {
    return fetchAdminData(() => resolveAdminRolePermissions(roleId, roleName));
  },
};
