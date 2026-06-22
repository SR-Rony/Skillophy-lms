import { resolveTeacherLiveVideoSession } from "@/data/mock/teacher-data.resolvers";
import type { TeacherCourseLiveDetailsData } from "@/types/teacher-course-details.types";
import type { StudentLiveVideoSession } from "@/types/student-live-video.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherLiveVideoService = {
  async getSession(
    slug: string,
    lessonId?: string
  ): Promise<{ course: TeacherCourseLiveDetailsData; session: StudentLiveVideoSession } | null> {
    return fetchTeacherData(async () => {
      // return apiClient
      //   .get<StudentLiveVideoSessionData>(`/teacher/courses/${slug}/live`, {
      //     params: { lesson: lessonId },
      //   })
      //   .then((r) => r.data);
      return resolveTeacherLiveVideoSession(slug, lessonId);
    });
  },
};
