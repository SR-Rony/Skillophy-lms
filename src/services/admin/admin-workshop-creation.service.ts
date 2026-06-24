import { resolveAdminWorkshopCreationNew } from "@/data/mock/admin-data.resolvers";
import type { AdminWorkshopCreationData } from "@/types/admin-workshop-creation.types";
import { fetchAdminData } from "./create-admin-service";

export const adminWorkshopCreationService = {
  async getNewWorkshopCreation(): Promise<AdminWorkshopCreationData> {
    return fetchAdminData(() => resolveAdminWorkshopCreationNew());
  },
};
