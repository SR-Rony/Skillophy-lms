import { resolveTeacherCourses } from "@/data/mock/teacher-data.resolvers";
import type { TeacherCoursesPageData } from "@/types/teacher-courses.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherCoursesService = {
  async getCoursesPage(): Promise<TeacherCoursesPageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherCoursesPageData>("/teacher/courses").then((r) => r.data);
      return resolveTeacherCourses();
    });
  },
};
