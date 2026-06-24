import { resolveAdminPromoManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminPromoManagementData } from "@/types/admin-promo-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminPromoManagementService = {
  async getPromos(): Promise<AdminPromoManagementData> {
    return fetchAdminData(() => resolveAdminPromoManagement());
  },
};
