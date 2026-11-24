import { resolveAdminWorkshopManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminWorkshopManagementData } from "@/types/admin-workshop-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminWorkshopManagementService = {
  async getWorkshops(): Promise<AdminWorkshopManagementData> {
    return fetchAdminData(
      () => resolveAdminWorkshopManagement(),
      () => adminApiGet<AdminWorkshopManagementData>(ADMIN_API_ROUTES.workshops)
    );
  },
};
