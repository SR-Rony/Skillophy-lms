import type {
  StudentNotification,
  StudentNotificationGroup,
  StudentNotificationsPageData,
} from "@/types/student-notifications.types";

const notificationTemplates: Omit<StudentNotification, "id">[] = [
  {
    type: "live",
    title: "Upcoming LIVE Class",
    timeAgo: "3 minutes ago",
    description: "Your LIVE class on design for different platforms will start at 09:30 PM",
    isUnread: true,
  },
  {
    type: "cancelled",
    title: "Class Canceled",
    timeAgo: "1 hour ago",
    description: "Your LIVE class on design for different platforms has been cancelled",
    isUnread: true,
  },
  {
    type: "assignment",
    title: "Assignment Assessment",
    timeAgo: "5:08 AM",
    description: "Teacher has finished assessing your assignment",
    isUnread: true,
  },
  {
    type: "live",
    title: "New Course",
    timeAgo: "12:08 PM",
    description: "A new course on design for different platforms has been added to your dashboard",
    isUnread: true,
  },
  {
    type: "quiz",
    title: "Quiz",
    timeAgo: "12:08 PM",
    description:
      "The time of giving quiz on design for different platforms will be started just in 5 minutes",
    isUnread: false,
  },
  {
    type: "live",
    title: "Upcoming LIVE Class",
    timeAgo: "Yesterday, 4:15 PM",
    description: "Your LIVE class on thinking like a UX designer will start at 08:00 PM",
    isUnread: true,
  },
  {
    type: "assignment",
    title: "Assignment Reminder",
    timeAgo: "Yesterday, 11:30 AM",
    description: "Submit your assignment on design across platforms before the deadline",
    isUnread: true,
  },
  {
    type: "quiz",
    title: "Quiz Result Published",
    timeAgo: "May 10, 2024",
    description: "Your quiz result for Introducing UX design is now available",
    isUnread: false,
  },
  {
    type: "live",
    title: "LIVE Class Recording",
    timeAgo: "May 9, 2024",
    description: "The recording for your last LIVE class is now available in the course",
    isUnread: false,
  },
];

function buildNotificationGroups(totalCount: number): StudentNotificationGroup[] {
  const groupLabels = ["Today", "Yesterday", "May 11, 2024", "May 10, 2024", "Earlier"];
  const groups: StudentNotificationGroup[] = groupLabels.map((label) => ({
    label,
    notifications: [],
  }));

  const notifications: StudentNotification[] = Array.from({ length: totalCount }, (_, index) => {
    const template = notificationTemplates[index % notificationTemplates.length];

    return {
      ...template,
      id: `notif-${index + 1}`,
      isUnread: index < 18 || (index % 4 === 0 && index < 30),
    };
  });

  notifications.forEach((notification, index) => {
    const groupIndex = Math.min(
      Math.floor(index / Math.ceil(totalCount / groupLabels.length)),
      groupLabels.length - 1
    );
    groups[groupIndex].notifications.push(notification);
  });

  return groups.filter((group) => group.notifications.length > 0);
}

const notificationGroups = buildNotificationGroups(45);
const allNotifications = notificationGroups.flatMap((group) => group.notifications);

export const studentNotificationsPageData: StudentNotificationsPageData = {
  allCount: allNotifications.length,
  unreadCount: allNotifications.filter((notification) => notification.isUnread).length,
  groups: notificationGroups,
};

export function getStudentNotificationsPageData(): StudentNotificationsPageData {
  return studentNotificationsPageData;
}

/** Dropdown preview — latest groups only. */
export function getStudentNotificationDropdownGroups(): StudentNotificationGroup[] {
  return notificationGroups.slice(0, 2);
}

export function getStudentNotificationDropdownItems(): StudentNotification[] {
  return getStudentNotificationDropdownGroups().flatMap((group) => group.notifications);
}

export function getStudentNotificationUnreadCount(): number {
  return allNotifications.filter((notification) => notification.isUnread).length;
}

/** Set to `true` to preview the empty notification dropdown in the navbar. */
export const previewEmptyNotificationDropdown = false;

export function getStudentNotificationDropdownGroupsForNavbar(): StudentNotificationGroup[] {
  if (previewEmptyNotificationDropdown) {
    return [];
  }

  return getStudentNotificationDropdownGroups();
}

export function getStudentNotificationDropdownUnreadCount(): number {
  if (previewEmptyNotificationDropdown) {
    return 0;
  }

  return getStudentNotificationUnreadCount();
}
