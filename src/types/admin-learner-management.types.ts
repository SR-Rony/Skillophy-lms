export type AdminLearnerStatus = "active" | "inactive";

export type AdminLearnerSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "enrolled-desc"
  | "completed-desc"
  | "status-asc";

export interface AdminLearner {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  enrolledCourses: number;
  completedCourses: number;
  status: AdminLearnerStatus;
}

export interface AdminLearnerSortOption {
  id: AdminLearnerSortId;
  label: string;
}

export type AdminLearnerExportId = "csv" | "xsl";

export interface AdminLearnerExportOption {
  id: AdminLearnerExportId;
  label: string;
}

export interface AdminLearnerManagementData {
  learners: AdminLearner[];
  sortOptions: AdminLearnerSortOption[];
  exportOptions: AdminLearnerExportOption[];
  defaultSortId: AdminLearnerSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
}
