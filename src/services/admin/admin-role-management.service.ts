import {
  resolveAdminRoleManagement,
  resolveAdminRolePermissions,
} from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type {
  AdminRoleManagementData,
  AdminRolePermissionsPageData,
} from "@/types/admin-role-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminRoleManagementService = {
  async getRoles(): Promise<AdminRoleManagementData> {
    return fetchAdminData(
      () => resolveAdminRoleManagement(),
      () => adminApiGet<AdminRoleManagementData>(ADMIN_API_ROUTES.roles)
    );
  },

  async getRolePermissions(
    roleId: string,
    roleName?: string | null
  ): Promise<AdminRolePermissionsPageData | null> {
    return fetchAdminData(
      () => resolveAdminRolePermissions(roleId, roleName),
      () => adminApiGet<AdminRolePermissionsPageData>(ADMIN_API_ROUTES.rolePermissions(roleId))
    );
  },
};
