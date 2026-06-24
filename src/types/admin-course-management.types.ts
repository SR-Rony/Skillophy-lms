export type AdminCourseManagementTab = "recorded" | "live";

export type AdminRecordedCourseCategoryId =
  | "all"
  | "free"
  | "job"
  | "vocational"
  | "skill-development"
  | "popular";

export type AdminRecordedCourseStatus = "published" | "draft";

export type AdminRecordedCourseSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "learners-desc"
  | "price-desc"
  | "price-asc"
  | "rating-desc"
  | "status-asc";

export interface AdminRecordedCourseCategoryOption {
  id: AdminRecordedCourseCategoryId;
  label: string;
}

export interface AdminRecordedCourseSortOption {
  id: AdminRecordedCourseSortId;
  label: string;
}

export type AdminRecordedCourseExportId = "csv" | "xsl";

export interface AdminRecordedCourseExportOption {
  id: AdminRecordedCourseExportId;
  label: string;
}

export interface AdminRecordedCourse {
  id: string;
  title: string;
  thumbnail: string;
  teacherName: string;
  teacherAvatar: string;
  category: string;
  categoryId: Exclude<AdminRecordedCourseCategoryId, "all">;
  totalLearners: number;
  price: number;
  status: AdminRecordedCourseStatus;
  rating: number;
}

export interface AdminRecordedCoursesData {
  courses: AdminRecordedCourse[];
  categoryOptions: AdminRecordedCourseCategoryOption[];
  sortOptions: AdminRecordedCourseSortOption[];
  exportOptions: AdminRecordedCourseExportOption[];
  defaultCategoryId: AdminRecordedCourseCategoryId;
  defaultSortId: AdminRecordedCourseSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
  addNewLabel: string;
}

export interface AdminCourseManagementData {
  recordedCourses: AdminRecordedCoursesData;
  liveCourses: AdminLiveCoursesData;
}

export type AdminLiveCourse = AdminRecordedCourse;

export type AdminLiveCoursesData = AdminRecordedCoursesData;
