import { resolveAdminTemplateManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminTemplateManagementData } from "@/types/admin-template-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminTemplateManagementService = {
  async getTemplates(): Promise<AdminTemplateManagementData> {
    return fetchAdminData(() => resolveAdminTemplateManagement());
  },
};
