export type StudentNotificationType = "live" | "assignment" | "quiz" | "cancelled";

export interface StudentNotification {
  id: string;
  type: StudentNotificationType;
  title: string;
  description: string;
  timeAgo: string;
  isUnread: boolean;
}

export interface StudentNotificationGroup {
  label: string;
  notifications: StudentNotification[];
}

export type StudentNotificationTab = "all" | "unread";

export interface StudentNotificationsPageData {
  allCount: number;
  unreadCount: number;
  groups: StudentNotificationGroup[];
}
