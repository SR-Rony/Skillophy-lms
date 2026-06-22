import type {
  StudentMessageCourse,
  StudentMessagesCoursesEmptyState,
  StudentMessagesEmptyState,
} from "./student-messages.types";

export type TeacherMessageCourse = StudentMessageCourse;
export type TeacherMessagesCoursesEmptyState = StudentMessagesCoursesEmptyState;
export type TeacherMessagesEmptyState = StudentMessagesEmptyState;

export interface TeacherMessagesPageData {
  totalUnreadCount: number;
  courses: TeacherMessageCourse[];
  coursesEmptyState: TeacherMessagesCoursesEmptyState;
  emptyState: TeacherMessagesEmptyState;
}
