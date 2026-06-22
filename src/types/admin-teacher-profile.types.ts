import type { AdminEmployeeStatus } from "./admin-employee-management.types";
import type {
  StudentAccountSettingsCourseFormOptions,
  StudentAccountSettingsEducationData,
  StudentAccountSettingsEducationFormOptions,
  StudentAccountSettingsMoreData,
  StudentAccountSettingsSkillsFormOptions,
} from "./student-account-settings.types";
import type {
  TeacherAccountSettingsBiography,
  TeacherAccountSettingsGeneralInfo,
  TeacherAccountSettingsSelectOption,
} from "./teacher-account-settings.types";

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
  payments: AdminTeacherPaymentsData;
  profileInfo: AdminTeacherProfileInfoData;
  moreData: AdminTeacherProfileMoreData;
}

export type AdminTeacherProfileMoreData = Pick<StudentAccountSettingsMoreData, "accountActions">;

export interface AdminTeacherProfileInfoData {
  generalInfo: TeacherAccountSettingsGeneralInfo;
  biography: TeacherAccountSettingsBiography;
  roleOptions: TeacherAccountSettingsSelectOption[];
  statusOptions: TeacherAccountSettingsSelectOption[];
  genderOptions: TeacherAccountSettingsSelectOption[];
  countryOptions: TeacherAccountSettingsSelectOption[];
  educationData: StudentAccountSettingsEducationData;
  educationFormOptions: StudentAccountSettingsEducationFormOptions;
  courseFormOptions: StudentAccountSettingsCourseFormOptions;
  skillsFormOptions: StudentAccountSettingsSkillsFormOptions;
}

export type AdminTeacherPaymentStatus = "paid" | "due";

export type AdminTeacherPaymentSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc"
  | "amount-desc"
  | "amount-asc"
  | "status-asc";

export type AdminTeacherPaymentExportId = "csv" | "xsl";

export interface AdminTeacherPaymentSortOption {
  id: AdminTeacherPaymentSortId;
  label: string;
}

export interface AdminTeacherPaymentExportOption {
  id: AdminTeacherPaymentExportId;
  label: string;
}

export interface AdminTeacherPayment {
  id: string;
  title: string;
  thumbnail: string;
  paymentDate: string;
  amount: number;
  status: AdminTeacherPaymentStatus;
}

export interface AdminTeacherPaymentsData {
  payments: AdminTeacherPayment[];
  sortOptions: AdminTeacherPaymentSortOption[];
  exportOptions: AdminTeacherPaymentExportOption[];
  defaultSortId: AdminTeacherPaymentSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
  markAsPaidLabel: string;
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
