import { resolveAdminCourseManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminCourseManagementData } from "@/types/admin-course-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminCourseManagementService = {
  async getCourseManagement(): Promise<AdminCourseManagementData> {
    return fetchAdminData(
      () => resolveAdminCourseManagement(),
      () => adminApiGet<AdminCourseManagementData>(ADMIN_API_ROUTES.courses)
    );
  },
};
