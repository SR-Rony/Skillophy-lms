import { resolveAdminEmployeeManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminEmployeeManagementData } from "@/types/admin-employee-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminEmployeeManagementService = {
  async getEmployees(): Promise<AdminEmployeeManagementData> {
    return fetchAdminData(
      () => resolveAdminEmployeeManagement(),
      () => adminApiGet<AdminEmployeeManagementData>(ADMIN_API_ROUTES.employees)
    );
  },
};
