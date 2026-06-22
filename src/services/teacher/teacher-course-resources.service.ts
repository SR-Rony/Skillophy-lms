import { resolveTeacherCourseResources } from "@/data/mock/teacher-data.resolvers";
import type { TeacherCourseResourcesPageData } from "@/types/teacher-course-resources.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherCourseResourcesService = {
  async getResourcesPage(): Promise<TeacherCourseResourcesPageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherCourseResourcesPageData>("/teacher/resources").then((r) => r.data);
      return resolveTeacherCourseResources();
    });
  },
};
