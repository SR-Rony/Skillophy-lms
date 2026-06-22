import { resolveTeacherMessages } from "@/data/mock/teacher-data.resolvers";
import type { TeacherMessagesPageData } from "@/types/teacher-messages.types";
import { fetchTeacherData } from "./create-teacher-service";
// import { apiClient } from "@/services/api-client";

export const teacherMessagesService = {
  async getMessages(): Promise<TeacherMessagesPageData> {
    return fetchTeacherData(async () => {
      // return apiClient.get<TeacherMessagesPageData>("/teacher/messages").then((r) => r.data);
      return resolveTeacherMessages();
    });
  },
};
