import { resolveAdminPromoManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminPromoManagementData } from "@/types/admin-promo-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminPromoManagementService = {
  async getPromos(): Promise<AdminPromoManagementData> {
    return fetchAdminData(
      () => resolveAdminPromoManagement(),
      () => adminApiGet<AdminPromoManagementData>(ADMIN_API_ROUTES.promos)
    );
  },
};
