import { resolveAdminJobOpeningManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminJobOpeningManagementData } from "@/types/admin-job-opening-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminJobOpeningManagementService = {
  async getJobOpenings(): Promise<AdminJobOpeningManagementData> {
    return fetchAdminData(() => resolveAdminJobOpeningManagement());
  },
};
