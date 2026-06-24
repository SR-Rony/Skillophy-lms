export type AdminActivityLogTypeId =
  | "user"
  | "role"
  | "workshop"
  | "course"
  | "category"
  | "system";

export type AdminActivityLogTypeFilterId = "all" | "courses" | "users" | "workshop";

export type AdminActivityLogSortId = "default" | "newest" | "oldest";

export interface AdminActivityLogDateRange {
  start: string;
  end: string;
}

export type AdminActivityLogMessagePart =
  | { kind: "text"; text: string }
  | { kind: "email"; email: string; href: string }
  | { kind: "emphasis"; text: string };

export interface AdminActivityLogEntry {
  id: string;
  type: AdminActivityLogTypeId;
  actorInitials: string;
  parts: AdminActivityLogMessagePart[];
  occurredAt: string;
}

export interface AdminActivityLogTypeOption {
  id: AdminActivityLogTypeFilterId;
  label: string;
}

export interface AdminActivityLogSortOption {
  id: AdminActivityLogSortId;
  label: string;
}

export interface AdminActivityLogManagementData {
  entries: AdminActivityLogEntry[];
  typeOptions: AdminActivityLogTypeOption[];
  sortOptions: AdminActivityLogSortOption[];
  defaultTypeId: AdminActivityLogTypeFilterId;
  defaultSortId: AdminActivityLogSortId;
  defaultDateRange: AdminActivityLogDateRange;
  pageSize: number;
}
