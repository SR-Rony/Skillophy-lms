import { ROUTES } from "@/constants";
import { sharedMessagesCourses } from "@/data/mock/messages-courses.mock";
import type { StudentMessagesPageData } from "@/types/student-messages.types";

/** Demo messages — set `courses` to `[]` to preview empty state. */
export const studentMessagesDemo: StudentMessagesPageData = {
  title: "Messages",
  subtitle:
    "Easily communicate with your course instructor here, receiving prompt responses to any questions or inquiries you may have.",
  totalUnreadCount: 32,
  courses: sharedMessagesCourses,
  coursesEmptyState: {
    sectionLabel: "Courses",
    heading: "No Courses",
    message: "You don't enroll any courses yet.",
    actionLabel: "Explore Courses",
    actionHref: ROUTES.student.courses,
  },
  emptyState: {
    heading: "No Messages",
    message: "You have no messages at this time.",
  },
};
