import {
  resolveAdminBusinessQueryDetail,
  resolveAdminQueryFormManagement,
} from "@/data/mock/admin-data.resolvers";
import type {
  AdminBusinessQuery,
  AdminQueryFormManagementData,
} from "@/types/admin-query-form-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminQueryFormManagementService = {
  async getQueryForms(): Promise<AdminQueryFormManagementData> {
    return fetchAdminData(() => resolveAdminQueryFormManagement());
  },

  async getBusinessQueryDetail(queryId: string): Promise<AdminBusinessQuery | null> {
    return fetchAdminData(() => resolveAdminBusinessQueryDetail(queryId));
  },
};
