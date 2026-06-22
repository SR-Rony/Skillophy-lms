import { resolveTeacherCourseDetails } from "@/data/mock/teacher-data.resolvers";
import type { TeacherCourseDetailsData } from "@/types/teacher-course-details.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherCourseDetailsService = {
  async getCourseDetails(slug: string): Promise<TeacherCourseDetailsData | null> {
    return fetchTeacherData(async () => {
      // return apiClient
      //   .get<TeacherCourseDetailsData>(`/teacher/courses/${slug}`)
      //   .then((r) => r.data);
      return resolveTeacherCourseDetails(slug);
    });
  },
};
