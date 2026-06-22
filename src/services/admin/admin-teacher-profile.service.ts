import { resolveAdminTeacherProfile } from "@/data/mock/admin-data.resolvers";
import type { AdminTeacherProfilePageData } from "@/types/admin-teacher-profile.types";
import { fetchAdminData } from "./create-admin-service";
// import { apiClient } from "@/services/api-client";

export const adminTeacherProfileService = {
  async getTeacherProfile(employeeId: string): Promise<AdminTeacherProfilePageData | null> {
    return fetchAdminData(() => resolveAdminTeacherProfile(employeeId));
    // return apiClient.get<AdminTeacherProfilePageData>(`/admin/employees/${employeeId}/profile`).then((r) => r.data);
  },
};
