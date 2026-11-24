import { resolveAdminTransactionManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminTransactionManagementData } from "@/types/admin-transaction-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminTransactionManagementService = {
  async getTransactions(): Promise<AdminTransactionManagementData> {
    return fetchAdminData(
      () => resolveAdminTransactionManagement(),
      () => adminApiGet<AdminTransactionManagementData>(ADMIN_API_ROUTES.transactions)
    );
  },
};
