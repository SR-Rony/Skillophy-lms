import { resolveAdminJobOpeningManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminJobOpeningManagementData } from "@/types/admin-job-opening-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminJobOpeningManagementService = {
  async getJobOpenings(): Promise<AdminJobOpeningManagementData> {
    return fetchAdminData(
      () => resolveAdminJobOpeningManagement(),
      () => adminApiGet<AdminJobOpeningManagementData>(ADMIN_API_ROUTES.jobs)
    );
  },
};
