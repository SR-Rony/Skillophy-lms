import { resolveAdminCourseCreation, resolveAdminCourseCreationNew } from "@/data/mock/admin-data.resolvers";
import type { AdminCourseCreationData } from "@/types/admin-course-creation.types";
import { fetchAdminData } from "./create-admin-service";

export const adminCourseCreationService = {
  async getCourseCreation(): Promise<AdminCourseCreationData> {
    return fetchAdminData(() => resolveAdminCourseCreation());
  },

  async getNewCourseCreation(): Promise<AdminCourseCreationData> {
    return fetchAdminData(() => resolveAdminCourseCreationNew());
  },
};
