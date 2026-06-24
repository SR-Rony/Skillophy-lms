export type AdminReportStatus = "open" | "resolved";

export type AdminReportTypeId = "course" | "lesson" | "workshop" | "content";

export type AdminReportTypeFilterId = "all" | AdminReportTypeId;

export type AdminReportSortId =
  | "default"
  | "newest"
  | "oldest"
  | "status-asc"
  | "course-asc";

export interface AdminReportPerson {
  name: string;
  email: string;
  avatar: string;
}

export interface AdminReportCourseInfo {
  title: string;
  topic: string;
  thumbnail: string;
}

export interface AdminReport {
  id: string;
  type: AdminReportTypeId;
  courseName: string;
  courseThumbnail: string;
  lessonName: string;
  reporterName: string;
  reporterEmail: string;
  reporterAvatar: string;
  reportedDate: string;
  reportedTime: string;
  status: AdminReportStatus;
}

export interface AdminReportTypeOption {
  id: AdminReportTypeFilterId;
  label: string;
}

export interface AdminReportSortOption {
  id: AdminReportSortId;
  label: string;
}

export interface AdminReportManagementData {
  reports: AdminReport[];
  typeOptions: AdminReportTypeOption[];
  sortOptions: AdminReportSortOption[];
  defaultTypeId: AdminReportTypeFilterId;
  defaultSortId: AdminReportSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  markResolvedLabel: string;
  resolveReportLabel: string;
}

export interface AdminReportDetail {
  id: string;
  status: AdminReportStatus;
  lessonName: string;
  reportedAt: string;
  courseInfo: AdminReportCourseInfo;
  courseTeacher: AdminReportPerson;
  reportedBy: AdminReportPerson;
  resolvedBy?: AdminReportPerson;
  reportTags: string[];
  reportDetails: string;
  resolveReportLabel: string;
}
