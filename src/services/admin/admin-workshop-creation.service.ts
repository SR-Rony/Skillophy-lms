import { resolveAdminWorkshopCreationNew } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminWorkshopCreationData } from "@/types/admin-workshop-creation.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminWorkshopCreationService = {
  async getNewWorkshopCreation(): Promise<AdminWorkshopCreationData> {
    return fetchAdminData(
      () => resolveAdminWorkshopCreationNew(),
      () => adminApiGet<AdminWorkshopCreationData>(ADMIN_API_ROUTES.workshopCreateForm)
    );
  },
};
