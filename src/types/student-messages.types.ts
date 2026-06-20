export type StudentChatMessageSender = "user" | "instructor";

export interface StudentChatMessage {
  id: string;
  sender: StudentChatMessageSender;
  content: string;
  avatar: string;
}

export type StudentChatThreadItem =
  | { type: "date"; id: string; label: string }
  | { type: "message"; id: string; message: StudentChatMessage };

export interface StudentMessageCourse {
  id: string;
  slug: string;
  title: string;
  lastActivityDate: string;
  thumbnail: string;
  headerAvatar: string;
  lastSeenLabel: string;
  hasUnread?: boolean;
  thread: StudentChatThreadItem[];
}

export interface StudentMessagesEmptyState {
  heading: string;
  message: string;
}

export interface StudentMessagesCoursesEmptyState {
  sectionLabel: string;
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface StudentMessagesPageData {
  title: string;
  subtitle: string;
  totalUnreadCount: number;
  courses: StudentMessageCourse[];
  coursesEmptyState: StudentMessagesCoursesEmptyState;
  emptyState: StudentMessagesEmptyState;
}
