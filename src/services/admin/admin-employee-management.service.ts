import { resolveAdminEmployeeManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminEmployeeManagementData } from "@/types/admin-employee-management.types";
import { fetchAdminData } from "./create-admin-service";
// import { apiClient } from "@/services/api-client";

export const adminEmployeeManagementService = {
  async getEmployees(): Promise<AdminEmployeeManagementData> {
    return fetchAdminData(() => resolveAdminEmployeeManagement());
    // return apiClient.get<AdminEmployeeManagementData>("/admin/employees").then((r) => r.data);
  },
};
