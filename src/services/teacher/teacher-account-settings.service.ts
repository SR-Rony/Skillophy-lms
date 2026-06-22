import { resolveTeacherAccountSettings } from "@/data/mock/teacher-data.resolvers";
import type { TeacherAccountSettingsPageData } from "@/types/teacher-account-settings.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherAccountSettingsService = {
  async getSettings(): Promise<TeacherAccountSettingsPageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherAccountSettingsPageData>("/teacher/settings").then((r) => r.data);
      return resolveTeacherAccountSettings();
    });
  },
};
