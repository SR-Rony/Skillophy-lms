import { resolveAdminTemplateManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminTemplateManagementData } from "@/types/admin-template-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminTemplateManagementService = {
  async getTemplates(): Promise<AdminTemplateManagementData> {
    return fetchAdminData(
      () => resolveAdminTemplateManagement(),
      () => adminApiGet<AdminTemplateManagementData>(ADMIN_API_ROUTES.templates)
    );
  },
};
