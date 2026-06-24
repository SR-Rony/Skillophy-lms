import type {
  AdminCourseCreationSelectOption,
  AdminCourseCreationTeacher,
} from "@/types/admin-course-creation.types";

export type AdminWorkshopCreationStepId =
  | "general-info"
  | "workshop-schedule"
  | "meta-info";

export interface AdminWorkshopCreationStep {
  id: AdminWorkshopCreationStepId;
  label: string;
}

export interface AdminWorkshopCreationGeneralInfo {
  workshopTitle: string;
  courseCategory: string;
  courseSummary: string;
  introVideoUrl: string;
  whatYouWillLearn: string;
  mainTeacherIds: string[];
}

export interface AdminWorkshopCreationFormOptions {
  courseCategories: AdminCourseCreationSelectOption[];
  teachers: AdminCourseCreationTeacher[];
  maxTeachersPerRole: number;
}

export interface AdminWorkshopCreationData {
  steps: AdminWorkshopCreationStep[];
  generalInfo: AdminWorkshopCreationGeneralInfo;
  formOptions: AdminWorkshopCreationFormOptions;
}
