import {
  resolveAdminCourseCreation,
  resolveAdminCourseCreationNew,
  resolveAdminLiveCourseCreation,
} from "@/data/mock/admin-data.resolvers";
import type { AdminCourseCreationData } from "@/types/admin-course-creation.types";
import { fetchAdminCourseCreationForm } from "./admin-course-creation.adapter";
import { fetchAdminData } from "./create-admin-service";

export const adminCourseCreationService = {
  async getCourseCreation(): Promise<AdminCourseCreationData> {
    return fetchAdminData(() => resolveAdminCourseCreation());
  },

  async getNewCourseCreation(): Promise<AdminCourseCreationData> {
    return fetchAdminData(
      () => resolveAdminCourseCreationNew(),
      () => fetchAdminCourseCreationForm("recorded")
    );
  },

  async getLiveCourseCreation(): Promise<AdminCourseCreationData> {
    return fetchAdminData(
      () => resolveAdminLiveCourseCreation(),
      () => fetchAdminCourseCreationForm("live")
    );
  },
};
