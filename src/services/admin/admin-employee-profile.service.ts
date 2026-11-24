import { resolveAdminEmployeeProfile } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminEmployeeProfilePageData } from "@/types/admin-employee-profile.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminEmployeeProfileService = {
  async getEmployeeProfile(employeeId: string): Promise<AdminEmployeeProfilePageData | null> {
    return fetchAdminData(
      () => resolveAdminEmployeeProfile(employeeId),
      () => adminApiGet<AdminEmployeeProfilePageData>(ADMIN_API_ROUTES.employee(employeeId))
    );
  },
};
