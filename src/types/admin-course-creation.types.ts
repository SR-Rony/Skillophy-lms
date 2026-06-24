export type AdminCourseCreationStepId =
  | "general-info"
  | "class-routine"
  | "curriculum"
  | "meta-info";

export type AdminCourseCreationType = "recorded" | "live";

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

export type AdminCourseCurriculumItemType = "lesson" | "resource" | "quiz" | "assignment";

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

export interface AdminCourseClassRoutineSlot {
  id: string;
  day: string;
  time: string;
}

export interface AdminCourseClassRoutine {
  main: AdminCourseClassRoutineSlot[];
  support: AdminCourseClassRoutineSlot[];
}

export interface AdminCourseCreationData {
  courseType: AdminCourseCreationType;
  batchNo?: string;
  steps: AdminCourseCreationStep[];
  generalInfo: AdminCourseCreationGeneralInfo;
  formOptions: AdminCourseCreationFormOptions;
  classRoutine?: AdminCourseClassRoutine;
  curriculum: AdminCourseCurriculumData;
  metaInfo: AdminCourseMetaInfo;
}

export interface AdminCourseMetaJobStats {
  jobOpening: string;
  remoteJobs: string;
  hiringInBd: string;
}

export interface AdminCourseMetaBookItem {
  id: string;
  title: string;
  subtitle: string;
  isFreeDownloadable: boolean;
}

export interface AdminCourseMetaRequirement {
  id: string;
  title: string;
  templateId?: string;
}

export interface AdminCourseMetaBenefit {
  id: string;
  title: string;
  subtitle: string;
  templateId?: string;
}

export interface AdminCourseMetaFaq {
  id: string;
  question: string;
  answer: string;
  templateId?: string;
}

export interface AdminCourseMetaInfo {
  jobStats: AdminCourseMetaJobStats;
  skillBooks: AdminCourseMetaBookItem[];
  academicGuides: AdminCourseMetaBookItem[];
  skills: string[];
  requirements: AdminCourseMetaRequirement[];
  benefits: AdminCourseMetaBenefit[];
  faqs: AdminCourseMetaFaq[];
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
  liveClassSchedule?: string;
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

export interface AdminCourseQuizAnswerOption {
  id: string;
  text: string;
}

export interface AdminCourseQuizQuestion {
  id: string;
  prompt: string;
  isExpanded: boolean;
  isEditing: boolean;
  options: AdminCourseQuizAnswerOption[];
  correctOptionId: string | null;
  correctAnswerDescription: string;
  points: string;
}

export interface AdminCourseAddQuizForm {
  durationMinutes: string;
  questions: AdminCourseQuizQuestion[];
}
