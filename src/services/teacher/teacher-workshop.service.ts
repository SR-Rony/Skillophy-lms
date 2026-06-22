import { resolveTeacherWorkshop } from "@/data/mock/teacher-data.resolvers";
import type { TeacherWorkshopPageData } from "@/types/teacher-workshop.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherWorkshopService = {
  async getWorkshops(): Promise<TeacherWorkshopPageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherWorkshopPageData>("/teacher/workshops").then((r) => r.data);
      return resolveTeacherWorkshop();
    });
  },
};
