export type AdminCourseCreationStepId = "general-info" | "curriculum" | "meta-info";

export interface AdminCourseCreationStep {
  id: AdminCourseCreationStepId;
  label: string;
}

export interface AdminCourseCreationTeacher {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AdminCourseCreationSelectOption {
  value: string;
  label: string;
}

export interface AdminCourseCreationGeneralInfo {
  isActive: boolean;
  courseTitle: string;
  courseLevel: string;
  courseCategory: string;
  courseDuration: string;
  coursePrice: string;
  courseSummary: string;
  introVideoUrl: string;
  courseOverview: string;
  whatYouWillLearn: string;
  mainTeacherIds: string[];
  supportTeacherIds: string[];
}

export interface AdminCourseCreationFormOptions {
  courseLevels: AdminCourseCreationSelectOption[];
  courseCategories: AdminCourseCreationSelectOption[];
  courseDurations: AdminCourseCreationSelectOption[];
  teachers: AdminCourseCreationTeacher[];
  maxTeachersPerRole: number;
}

export interface AdminCourseCreationData {
  steps: AdminCourseCreationStep[];
  generalInfo: AdminCourseCreationGeneralInfo;
  formOptions: AdminCourseCreationFormOptions;
}
