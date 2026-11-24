import { resolveAdminTeacherProfile } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminTeacherProfilePageData } from "@/types/admin-teacher-profile.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminTeacherProfileService = {
  async getTeacherProfile(employeeId: string): Promise<AdminTeacherProfilePageData | null> {
    return fetchAdminData(
      () => resolveAdminTeacherProfile(employeeId),
      async () => {
        try {
          return await adminApiGet<AdminTeacherProfilePageData>(
            ADMIN_API_ROUTES.employee(employeeId)
          );
        } catch {
          return null;
        }
      }
    );
  },
};
