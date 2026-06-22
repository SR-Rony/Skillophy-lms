import type { AdminLearnerStatus } from "./admin-learner-management.types";
import type { AdminTeacherProfileMoreData } from "./admin-teacher-profile.types";
import type {
  TeacherAccountSettingsBiography,
  TeacherAccountSettingsGeneralInfo,
  TeacherAccountSettingsSelectOption,
} from "./teacher-account-settings.types";

export type AdminLearnerProfileTabId =
  | "recorded-courses"
  | "live-courses"
  | "learner-profile"
  | "more";

export interface AdminLearnerProfileTab {
  id: AdminLearnerProfileTabId;
  label: string;
}

export interface AdminLearnerProfileStats {
  enrolledCourses: number;
  completedCourses: number;
}

export interface AdminLearnerProfile {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  avatarUrl: string;
  status: AdminLearnerStatus;
  stats: AdminLearnerProfileStats;
  tabs: AdminLearnerProfileTab[];
}

export type AdminLearnerRecordedCourseStatus = "completed" | "ongoing";

export type AdminLearnerRecordedCourseSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc"
  | "score-desc"
  | "status-asc";

export interface AdminLearnerRecordedCourseSortOption {
  id: AdminLearnerRecordedCourseSortId;
  label: string;
}

export interface AdminLearnerRecordedCourse {
  id: string;
  title: string;
  thumbnail: string;
  teacherName: string;
  teacherAvatar: string;
  enrolledDate: string;
  totalScore: number | null;
  status: AdminLearnerRecordedCourseStatus;
  detailsHref: string;
}

export interface AdminLearnerRecordedCoursesData {
  courses: AdminLearnerRecordedCourse[];
  sortOptions: AdminLearnerRecordedCourseSortOption[];
  defaultSortId: AdminLearnerRecordedCourseSortId;
  pageSize: number;
}

export interface AdminLearnerProfileInfoData {
  generalInfo: TeacherAccountSettingsGeneralInfo;
  biography: TeacherAccountSettingsBiography;
  roleOptions: TeacherAccountSettingsSelectOption[];
  statusOptions: TeacherAccountSettingsSelectOption[];
  genderOptions: TeacherAccountSettingsSelectOption[];
  countryOptions: TeacherAccountSettingsSelectOption[];
}

export interface AdminLearnerProfilePageData {
  profile: AdminLearnerProfile;
  recordedCourses: AdminLearnerRecordedCoursesData;
  profileInfo: AdminLearnerProfileInfoData;
  moreData: AdminTeacherProfileMoreData;
}
