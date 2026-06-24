import { resolveAdminMessages } from "@/data/mock/admin-data.resolvers";
import type { TeacherMessagesPageData } from "@/types/teacher-messages.types";
import { fetchAdminData } from "./create-admin-service";

export const adminMessagesService = {
  async getMessages(): Promise<TeacherMessagesPageData> {
    return fetchAdminData(() => resolveAdminMessages());
  },
};
