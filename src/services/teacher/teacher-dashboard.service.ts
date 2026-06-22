import { resolveTeacherDashboard } from "@/data/mock/teacher-data.resolvers";
import type { TeacherDashboardData } from "@/types/teacher-dashboard.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherDashboardService = {
  async getDashboard(): Promise<TeacherDashboardData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherDashboardData>("/teacher/dashboard").then((r) => r.data);
      return resolveTeacherDashboard();
    });
  },
};
