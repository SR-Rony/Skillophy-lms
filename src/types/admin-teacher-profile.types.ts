import type { AdminEmployeeStatus } from "./admin-employee-management.types";

export type AdminTeacherProfileTabId =
  | "recorded-courses"
  | "live-courses"
  | "payment"
  | "profile-info"
  | "more";

export interface AdminTeacherProfileTab {
  id: AdminTeacherProfileTabId;
  label: string;
}

export interface AdminTeacherProfileStats {
  totalEarnings: number;
  totalCourses: number;
  ongoingCourses: number;
}

export interface AdminTeacherProfile {
  id: string;
  fullName: string;
  role: string;
  phone: string;
  email: string;
  avatarUrl: string;
  status: AdminEmployeeStatus;
  stats: AdminTeacherProfileStats;
  tabs: AdminTeacherProfileTab[];
}

export type AdminTeacherRecordedCourseSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc"
  | "students-desc";

export interface AdminTeacherRecordedCourseSortOption {
  id: AdminTeacherRecordedCourseSortId;
  label: string;
}

export interface AdminTeacherRecordedCourse {
  id: string;
  title: string;
  thumbnail: string;
  publishDate: string;
  enrolledStudents: number;
  rating: number;
  detailsHref: string;
}

export interface AdminTeacherRecordedCoursesData {
  courses: AdminTeacherRecordedCourse[];
  sortOptions: AdminTeacherRecordedCourseSortOption[];
  defaultSortId: AdminTeacherRecordedCourseSortId;
  pageSize: number;
}

export interface AdminTeacherProfilePageData {
  profile: AdminTeacherProfile;
  recordedCourses: AdminTeacherRecordedCoursesData;
  liveCourses: AdminTeacherLiveCoursesData;
}

export type AdminTeacherLiveCourseStatus = "completed" | "ongoing" | "upcoming";

export type AdminTeacherLiveCourseSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc"
  | "students-desc"
  | "status-asc";

export interface AdminTeacherLiveCourseSortOption {
  id: AdminTeacherLiveCourseSortId;
  label: string;
}

export interface AdminTeacherLiveCourse {
  id: string;
  title: string;
  thumbnail: string;
  startDate: string;
  enrolledStudents: number;
  status: AdminTeacherLiveCourseStatus;
  progress: number;
  rating: number;
  detailsHref: string;
}

export interface AdminTeacherLiveCoursesData {
  courses: AdminTeacherLiveCourse[];
  sortOptions: AdminTeacherLiveCourseSortOption[];
  defaultSortId: AdminTeacherLiveCourseSortId;
  pageSize: number;
}
