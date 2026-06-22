import { resolveAdminEmployeeProfile } from "@/data/mock/admin-data.resolvers";
import type { AdminEmployeeProfilePageData } from "@/types/admin-employee-profile.types";
import { fetchAdminData } from "./create-admin-service";
// import { apiClient } from "@/services/api-client";

export const adminEmployeeProfileService = {
  async getEmployeeProfile(employeeId: string): Promise<AdminEmployeeProfilePageData | null> {
    return fetchAdminData(() => resolveAdminEmployeeProfile(employeeId));
    // return apiClient.get<AdminEmployeeProfilePageData>(`/admin/employees/${employeeId}/profile`).then((r) => r.data);
  },
};
