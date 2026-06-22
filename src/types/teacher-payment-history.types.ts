export type TeacherPaymentStatus = "paid" | "due";

export type TeacherPaymentHistorySortId =
  | "default"
  | "date-desc"
  | "date-asc"
  | "amount-desc"
  | "amount-asc";

export interface TeacherPaymentHistoryItem {
  id: string;
  courseId: string;
  courseTitle: string;
  courseSlug: string;
  courseThumbnail: string;
  date: string;
  time: string;
  amount: number;
  status: TeacherPaymentStatus;
}

export interface TeacherPaymentHistorySummary {
  totalPaid: number;
  totalDue: number;
  totalEarnings: number;
}

export interface TeacherPaymentHistoryCourseOption {
  id: string;
  label: string;
}

export interface TeacherPaymentHistorySortOption {
  id: TeacherPaymentHistorySortId;
  label: string;
}

export interface TeacherPaymentHistoryEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface TeacherPaymentHistoryPageData {
  summary: TeacherPaymentHistorySummary;
  courses: TeacherPaymentHistoryCourseOption[];
  defaultCourseId: string;
  sortOptions: TeacherPaymentHistorySortOption[];
  payments: TeacherPaymentHistoryItem[];
  pageSize: number;
  exportLabel: string;
  emptyState: TeacherPaymentHistoryEmptyState;
}
