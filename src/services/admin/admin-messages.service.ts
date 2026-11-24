import { resolveAdminMessages } from "@/data/mock/admin-data.resolvers";
import type { TeacherMessagesPageData } from "@/types/teacher-messages.types";
import { fetchAdminData } from "./create-admin-service";

const emptyAdminMessagesPage: TeacherMessagesPageData = {
  totalUnreadCount: 0,
  courses: [],
  coursesEmptyState: {
    sectionLabel: "Courses",
    heading: "No Courses",
    message: "You don't have any courses yet.",
    actionLabel: "Go to My Courses",
    actionHref: "/teacher/courses",
  },
  emptyState: {
    heading: "No Messages",
    message: "You have no messages at this time.",
  },
};

export const adminMessagesService = {
  async getMessages(): Promise<TeacherMessagesPageData> {
    return fetchAdminData(
      () => resolveAdminMessages(),
      async () => emptyAdminMessagesPage
    );
  },
};
