import type { Notification } from "@/services/notification.service";

export const mockNotifications: Notification[] = [
  {
    id: "notif-1",
    title: "Assignment due tomorrow",
    message: "Submit your React project before 11:59 PM.",
    read: false,
    createdAt: "2025-05-22T10:00:00Z",
  },
  {
    id: "notif-2",
    title: "New live class scheduled",
    message: "Join the Q&A session on Friday at 3 PM.",
    read: true,
    createdAt: "2025-05-20T08:00:00Z",
  },
];
