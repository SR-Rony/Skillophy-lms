import {
  resolveAdminBusinessQueryDetail,
  resolveAdminContactQueryDetail,
  resolveAdminQueryFormManagement,
} from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type {
  AdminBusinessQuery,
  AdminContactQuery,
  AdminQueryFormManagementData,
} from "@/types/admin-query-form-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminQueryFormManagementService = {
  async getQueryForms(): Promise<AdminQueryFormManagementData> {
    return fetchAdminData(
      () => resolveAdminQueryFormManagement(),
      () => adminApiGet<AdminQueryFormManagementData>(ADMIN_API_ROUTES.queryForms)
    );
  },

  async getBusinessQueryDetail(queryId: string): Promise<AdminBusinessQuery | null> {
    return fetchAdminData(
      () => resolveAdminBusinessQueryDetail(queryId),
      () => adminApiGet<AdminBusinessQuery>(ADMIN_API_ROUTES.queryFormBusiness(queryId))
    );
  },

  async getContactQueryDetail(queryId: string): Promise<AdminContactQuery | null> {
    return fetchAdminData(
      () => resolveAdminContactQueryDetail(queryId),
      () => adminApiGet<AdminContactQuery>(ADMIN_API_ROUTES.queryFormContact(queryId))
    );
  },
};
