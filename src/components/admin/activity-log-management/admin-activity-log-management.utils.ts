import type {
  AdminActivityLogDateRange,
  AdminActivityLogEntry,
  AdminActivityLogSortId,
  AdminActivityLogTypeFilterId,
  AdminActivityLogTypeId,
} from "@/types/admin-activity-log.types";
import { isAdminActivityLogDateInRange } from "./admin-activity-log-date-range.utils";

export type AdminActivityLogGroupLabel = "Today" | "Yesterday" | string;

export interface AdminActivityLogGroup {
  label: AdminActivityLogGroupLabel;
  entries: AdminActivityLogEntry[];
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function formatAdminActivityLogTimestamp(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} at ${formattedTime}`;
}

export function getAdminActivityLogGroupLabel(occurredAt: string, now = new Date()): AdminActivityLogGroupLabel {
  const entryDate = startOfDay(new Date(occurredAt));
  const today = startOfDay(now);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (entryDate.getTime() === today.getTime()) {
    return "Today";
  }

  if (entryDate.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  return entryDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getAdminActivityLogGroupSortValue(label: AdminActivityLogGroupLabel, entries: AdminActivityLogEntry[]) {
  if (label === "Today") {
    return 0;
  }

  if (label === "Yesterday") {
    return 1;
  }

  const newestEntry = entries[0]?.occurredAt ?? "";
  return 2 - new Date(newestEntry).getTime() / 1_000_000_000_000;
}

export function groupAdminActivityLogEntries(entries: AdminActivityLogEntry[]): AdminActivityLogGroup[] {
  const groups = new Map<AdminActivityLogGroupLabel, AdminActivityLogEntry[]>();

  entries.forEach((entry) => {
    const label = getAdminActivityLogGroupLabel(entry.occurredAt);
    const current = groups.get(label) ?? [];
    current.push(entry);
    groups.set(label, current);
  });

  return Array.from(groups.entries())
    .map(([label, groupEntries]) => ({
      label,
      entries: groupEntries,
    }))
    .sort(
      (left, right) =>
        getAdminActivityLogGroupSortValue(left.label, left.entries) -
        getAdminActivityLogGroupSortValue(right.label, right.entries)
    );
}

export function matchesAdminActivityLogTypeFilter(
  entryType: AdminActivityLogTypeId,
  typeId: AdminActivityLogTypeFilterId
) {
  if (typeId === "all") {
    return true;
  }

  if (typeId === "courses") {
    return entryType === "course" || entryType === "category";
  }

  if (typeId === "users") {
    return entryType === "user" || entryType === "role";
  }

  return entryType === "workshop";
}

export function filterAdminActivityLogEntries(
  entries: AdminActivityLogEntry[],
  searchQuery: string,
  typeId: AdminActivityLogTypeFilterId,
  dateRange: AdminActivityLogDateRange
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return entries.filter((entry) => {
    const matchesType = matchesAdminActivityLogTypeFilter(entry.type, typeId);
    if (!matchesType) {
      return false;
    }

    if (!isAdminActivityLogDateInRange(entry.occurredAt, dateRange)) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const searchableText = entry.parts
      .map((part) => {
        if (part.kind === "email") {
          return part.email;
        }

        return part.text;
      })
      .join(" ")
      .toLowerCase();

    return (
      searchableText.includes(normalizedSearch) ||
      entry.actorInitials.toLowerCase().includes(normalizedSearch)
    );
  });
}

export function sortAdminActivityLogEntries(
  entries: AdminActivityLogEntry[],
  sortId: AdminActivityLogSortId
) {
  const sorted = [...entries];

  switch (sortId) {
    case "newest":
      return sorted.sort((a, b) => b.occurredAt.localeCompare(a.occurredAt));
    case "oldest":
      return sorted.sort((a, b) => a.occurredAt.localeCompare(b.occurredAt));
    default:
      return sorted;
  }
}

export function paginateAdminActivityLogEntries(
  entries: AdminActivityLogEntry[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: entries.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
