import { resolveAdminWorkshopManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminWorkshopManagementData } from "@/types/admin-workshop-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminWorkshopManagementService = {
  async getWorkshops(): Promise<AdminWorkshopManagementData> {
    return fetchAdminData(() => resolveAdminWorkshopManagement());
  },
};
