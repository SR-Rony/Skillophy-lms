import { resolveTeacherClassSchedule } from "@/data/mock/teacher-data.resolvers";
import type { TeacherClassSchedulePageData } from "@/types/teacher-class-schedule.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherClassScheduleService = {
  async getSchedule(): Promise<TeacherClassSchedulePageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherClassSchedulePageData>("/teacher/schedule").then((r) => r.data);
      return resolveTeacherClassSchedule();
    });
  },
};
