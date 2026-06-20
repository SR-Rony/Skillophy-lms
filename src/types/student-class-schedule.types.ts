export type StudentClassScheduleSectionId = "live" | "support" | "workshop";

export interface StudentClassScheduleItem {
  id: string;
  courseSlug: string;
  courseTitle: string;
  month: string;
  day: number;
  topic: string;
  title: string;
  datetime: string;
  joinUrl: string;
  canJoin: boolean;
}

export interface StudentClassScheduleSection {
  id: StudentClassScheduleSectionId;
  title: string;
  initialVisibleCount: number;
  sessions: StudentClassScheduleItem[];
}

export interface StudentClassScheduleCourseFilter {
  id: string;
  label: string;
}

export interface StudentClassScheduleSortOption {
  id: string;
  label: string;
}

export interface StudentClassScheduleRoutineEntry {
  datetime: string;
}

export interface StudentClassScheduleRoutineGroup {
  title: string;
  entries: StudentClassScheduleRoutineEntry[];
}

export interface StudentClassScheduleEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface StudentClassSchedulePageData {
  title: string;
  subtitle: string;
  courseFilters: StudentClassScheduleCourseFilter[];
  sortOptions: StudentClassScheduleSortOption[];
  sections: StudentClassScheduleSection[];
  routine: StudentClassScheduleRoutineGroup[];
  emptyState: StudentClassScheduleEmptyState;
}
