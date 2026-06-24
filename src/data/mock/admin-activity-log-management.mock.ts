import { ROUTES } from "@/constants";
import type {
  AdminActivityLogEntry,
  AdminActivityLogManagementData,
  AdminActivityLogMessagePart,
  AdminActivityLogTypeId,
} from "@/types/admin-activity-log.types";

const profileHrefByEmail: Record<string, string> = {
  "jeromebell@gmail.com": ROUTES.admin.learnerDetail("learner-jerome-bell"),
  "brooklyn68@gmail.com": ROUTES.admin.userDetail("employee-featured-2"),
  "guy@gmail.com": ROUTES.admin.userDetail("employee-featured-1"),
  "bessie@gmail.com": ROUTES.admin.learnerDetail("learner-bessie-cooper"),
  "brooklyn.simmons@skillophy.com": ROUTES.admin.userDetail("employee-featured-2"),
  "guy.hawkins@skillophy.com": ROUTES.admin.userDetail("employee-featured-1"),
  "nushrat@gmail.com": ROUTES.admin.learnerDetail("learner-nushrat-jahan"),
};

function emailPart(email: string): AdminActivityLogMessagePart {
  return {
    kind: "email",
    email,
    href: profileHrefByEmail[email] ?? ROUTES.admin.learners,
  };
}

function toIsoDateTime(date: Date) {
  return date.toISOString();
}

function buildSeedEntries(): Array<{
  type: AdminActivityLogTypeId;
  actorInitials: string;
  parts: AdminActivityLogMessagePart[];
  occurredAt: string;
}> {
  const now = new Date();
  const todayMorning = new Date(now);
  todayMorning.setHours(9, 30, 0, 0);

  const todayAfternoon = new Date(now);
  todayAfternoon.setHours(14, 15, 0, 0);

  const yesterdayMorning = new Date(now);
  yesterdayMorning.setDate(yesterdayMorning.getDate() - 1);
  yesterdayMorning.setHours(11, 20, 0, 0);

  const yesterdayEvening = new Date(now);
  yesterdayEvening.setDate(yesterdayEvening.getDate() - 1);
  yesterdayEvening.setHours(18, 45, 0, 0);

  const olderDate = new Date(2024, 4, 11, 21, 30, 0);

  return [
    {
      type: "user",
      actorInitials: "JE",
      parts: [
        emailPart("jeromebell@gmail.com"),
        { kind: "text", text: " was removed from the skillophy portal by " },
        emailPart("brooklyn68@gmail.com"),
      ],
      occurredAt: toIsoDateTime(todayMorning),
    },
    {
      type: "role",
      actorInitials: "GU",
      parts: [
        emailPart("guy@gmail.com"),
        { kind: "text", text: "'s role was changed from support teacher to teacher by " },
        emailPart("brooklyn68@gmail.com"),
      ],
      occurredAt: toIsoDateTime(todayAfternoon),
    },
    {
      type: "workshop",
      actorInitials: "BE",
      parts: [
        { kind: "emphasis", text: "Wordpress Theme Development Master Class" },
        { kind: "text", text: " workshop was created by " },
        emailPart("bessie@gmail.com"),
      ],
      occurredAt: toIsoDateTime(yesterdayMorning),
    },
    {
      type: "course",
      actorInitials: "BE",
      parts: [
        { kind: "emphasis", text: "Foundations of User Experience (UX) Design" },
        { kind: "text", text: " course was created by " },
        emailPart("bessie@gmail.com"),
      ],
      occurredAt: toIsoDateTime(yesterdayEvening),
    },
    {
      type: "category",
      actorInitials: "BR",
      parts: [
        { kind: "emphasis", text: "Vocational" },
        { kind: "text", text: " course category was added by " },
        emailPart("brooklyn68@gmail.com"),
      ],
      occurredAt: toIsoDateTime(olderDate),
    },
    {
      type: "user",
      actorInitials: "NU",
      parts: [
        emailPart("nushrat@gmail.com"),
        { kind: "text", text: " enrolled in a new course by " },
        emailPart("brooklyn68@gmail.com"),
      ],
      occurredAt: toIsoDateTime(yesterdayMorning),
    },
    {
      type: "course",
      actorInitials: "GU",
      parts: [
        { kind: "emphasis", text: "UI/UX Design Fundamentals" },
        { kind: "text", text: " course was published by " },
        emailPart("guy.hawkins@skillophy.com"),
      ],
      occurredAt: toIsoDateTime(olderDate),
    },
    {
      type: "role",
      actorInitials: "BR",
      parts: [
        emailPart("guy.hawkins@skillophy.com"),
        { kind: "text", text: "'s role was updated to Admin by " },
        emailPart("brooklyn.simmons@skillophy.com"),
      ],
      occurredAt: toIsoDateTime(yesterdayEvening),
    },
  ];
}

function buildOccurredAt(index: number, seedOccurredAt: string) {
  const now = new Date();
  const date = new Date(seedOccurredAt);
  const positionOnPage = index % 10;

  if (positionOnPage < 6) {
    const todayEntry = new Date(now);
    todayEntry.setHours(8 + positionOnPage, (index * 7) % 60, 0, 0);
    return todayEntry.toISOString();
  }

  if (positionOnPage < 10) {
    const yesterdayEntry = new Date(now);
    yesterdayEntry.setDate(yesterdayEntry.getDate() - 1);
    yesterdayEntry.setHours(9 + (positionOnPage - 6), (index * 11) % 60, 0, 0);
    return yesterdayEntry.toISOString();
  }

  const olderEntry = new Date(date);
  olderEntry.setDate(olderEntry.getDate() - (index % 14));
  return olderEntry.toISOString();
}

function buildActivityLogEntries(): AdminActivityLogEntry[] {
  const seeds = buildSeedEntries();
  const entries: AdminActivityLogEntry[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = seeds[index % seeds.length];

    entries.push({
      id: `activity-log-${index + 1}`,
      type: seed.type,
      actorInitials: seed.actorInitials,
      parts: seed.parts,
      occurredAt: buildOccurredAt(index, seed.occurredAt),
    });
  }

  return entries;
}

function createMockDefaultDateRange() {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - 30);

  const toValue = (date: Date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return {
    start: toValue(start),
    end: toValue(end),
  };
}

export const adminActivityLogManagementData: AdminActivityLogManagementData = {
  entries: buildActivityLogEntries(),
  typeOptions: [
    { id: "all", label: "All Type" },
    { id: "courses", label: "Courses" },
    { id: "users", label: "Users" },
    { id: "workshop", label: "Workshop" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
  ],
  defaultTypeId: "all",
  defaultSortId: "default",
  defaultDateRange: createMockDefaultDateRange(),
  pageSize: 10,
};

export function getAdminActivityLogManagement(): AdminActivityLogManagementData {
  return adminActivityLogManagementData;
}
