import { resolveAdminTransactionManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminTransactionManagementData } from "@/types/admin-transaction-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminTransactionManagementService = {
  async getTransactions(): Promise<AdminTransactionManagementData> {
    return fetchAdminData(() => resolveAdminTransactionManagement());
  },
};
