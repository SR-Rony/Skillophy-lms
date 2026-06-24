import type {
  AdminCourseCreationSelectOption,
  AdminCourseCreationTeacher,
  AdminCourseMetaBenefit,
  AdminCourseMetaRequirement,
} from "@/types/admin-course-creation.types";

export type AdminWorkshopCreationStepId =
  | "general-info"
  | "workshop-schedule"
  | "meta-info";

export interface AdminWorkshopCreationStep {
  id: AdminWorkshopCreationStepId;
  label: string;
}

export interface AdminWorkshopScheduleSlot {
  id: string;
  day: string;
  time: string;
}

export type AdminWorkshopSchedule = AdminWorkshopScheduleSlot[];

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

export interface AdminWorkshopMetaInfo {
  requirements: AdminCourseMetaRequirement[];
  benefits: AdminCourseMetaBenefit[];
}

export interface AdminWorkshopCreationData {
  steps: AdminWorkshopCreationStep[];
  generalInfo: AdminWorkshopCreationGeneralInfo;
  workshopSchedule: AdminWorkshopSchedule;
  metaInfo: AdminWorkshopMetaInfo;
  formOptions: AdminWorkshopCreationFormOptions;
}
