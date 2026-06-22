import { ROUTES } from "@/constants";
import { sharedMessagesCourses } from "@/data/mock/messages-courses.mock";
import type { TeacherMessagesPageData } from "@/types/teacher-messages.types";

/** Demo messages — set `courses` to `[]` to preview empty state. */
export function getTeacherMessagesPageData(): TeacherMessagesPageData {
  return {
    totalUnreadCount: 32,
    courses: sharedMessagesCourses,
    coursesEmptyState: {
      sectionLabel: "Courses",
      heading: "No Courses",
      message: "You don't have any courses yet.",
      actionLabel: "Go to My Courses",
      actionHref: ROUTES.teacher.courses,
    },
    emptyState: {
      heading: "No Messages",
      message: "You have no messages at this time.",
    },
  };
}
