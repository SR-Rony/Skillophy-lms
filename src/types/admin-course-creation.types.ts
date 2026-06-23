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

export type AdminCourseCurriculumItemType = "lesson" | "resource" | "quiz";

export interface AdminCourseCurriculumItem {
  id: string;
  type: AdminCourseCurriculumItemType;
  title: string;
  resourceLabel?: string;
}

export interface AdminCourseCurriculumTopic {
  id: string;
  title: string;
  isExpanded: boolean;
  items: AdminCourseCurriculumItem[];
}

export interface AdminCourseCurriculumData {
  topics: AdminCourseCurriculumTopic[];
}

export interface AdminCourseCreationData {
  steps: AdminCourseCreationStep[];
  generalInfo: AdminCourseCreationGeneralInfo;
  formOptions: AdminCourseCreationFormOptions;
  curriculum: AdminCourseCurriculumData;
}

export type AdminCourseAddLessonTabId = "overview" | "lesson-video" | "resource";

export type AdminCourseLessonResourceFileType = "pdf" | "txt" | "doc" | "rtf";

export interface AdminCourseLessonResourceFile {
  id: string;
  name: string;
  sizeLabel: string;
  type: AdminCourseLessonResourceFileType;
  progress: number;
}

export interface AdminCourseAddLessonForm {
  title: string;
  description: string;
  teacherIds: string[];
  videoUrl: string;
  isFree: boolean;
  resources: AdminCourseLessonResourceFile[];
}

export type AdminCourseAddResourceTabId = "overview" | "upload";

export interface AdminCourseResourceFile {
  id: string;
  name: string;
  sizeLabel: string;
  type: AdminCourseLessonResourceFileType;
  progress: number;
  isFreeDownloadable: boolean;
}

export interface AdminCourseAddResourceForm {
  resources: AdminCourseResourceFile[];
}

export interface AdminCourseQuizQuestion {
  id: string;
  prompt: string;
}

export interface AdminCourseAddQuizForm {
  questions: AdminCourseQuizQuestion[];
}
