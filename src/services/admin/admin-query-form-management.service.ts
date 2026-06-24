import {
  resolveAdminBusinessQueryDetail,
  resolveAdminContactQueryDetail,
  resolveAdminQueryFormManagement,
} from "@/data/mock/admin-data.resolvers";
import type {
  AdminBusinessQuery,
  AdminContactQuery,
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

  async getContactQueryDetail(queryId: string): Promise<AdminContactQuery | null> {
    return fetchAdminData(() => resolveAdminContactQueryDetail(queryId));
  },
};
