import type { StudentNotificationGroup } from "@/types/student-notifications.types";

export const STUDENT_NOTIFICATION_PAGE_SIZE = 5;

export function getStudentNotificationPaginationMeta(totalItems: number, currentPage: number) {
  const totalPages = Math.max(1, Math.ceil(totalItems / STUDENT_NOTIFICATION_PAGE_SIZE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * STUDENT_NOTIFICATION_PAGE_SIZE;

  return {
    totalPages,
    currentPage: safePage,
    pageSize: STUDENT_NOTIFICATION_PAGE_SIZE,
    startIndex,
    endIndex: startIndex + STUDENT_NOTIFICATION_PAGE_SIZE,
  };
}

export function paginateNotificationGroups(
  groups: StudentNotificationGroup[],
  currentPage: number,
  pageSize = STUDENT_NOTIFICATION_PAGE_SIZE
) {
  const flatItems = groups.flatMap((group) =>
    group.notifications.map((notification) => ({
      groupLabel: group.label,
      notification,
    }))
  );

  const totalItems = flatItems.length;
  const { totalPages, currentPage: safePage, startIndex, endIndex } =
    getStudentNotificationPaginationMeta(totalItems, currentPage);

  const pageItems = flatItems.slice(startIndex, endIndex);
  const groupMap = new Map<string, StudentNotificationGroup["notifications"]>();
  const groupOrder: string[] = [];

  pageItems.forEach(({ groupLabel, notification }) => {
    if (!groupMap.has(groupLabel)) {
      groupMap.set(groupLabel, []);
      groupOrder.push(groupLabel);
    }

    groupMap.get(groupLabel)!.push(notification);
  });

  const paginatedGroups: StudentNotificationGroup[] = groupOrder.map((label) => ({
    label,
    notifications: groupMap.get(label)!,
  }));

  return {
    groups: paginatedGroups,
    totalPages,
    totalItems,
    currentPage: safePage,
    shouldPaginate: totalPages > 1,
  };
}
