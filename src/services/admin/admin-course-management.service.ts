import { resolveAdminCourseManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminCourseManagementData } from "@/types/admin-course-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminCourseManagementService = {
  async getCourseManagement(): Promise<AdminCourseManagementData> {
    return fetchAdminData(() => resolveAdminCourseManagement());
  },
};
