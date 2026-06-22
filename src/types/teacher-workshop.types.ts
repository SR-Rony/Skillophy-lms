import type {
  StudentWorkshopEmptyState,
  StudentWorkshopItem,
  StudentWorkshopTabId,
} from "./student-workshop.types";

export type TeacherWorkshopTabId = StudentWorkshopTabId;
export type TeacherWorkshopItem = StudentWorkshopItem;
export type TeacherWorkshopEmptyState = StudentWorkshopEmptyState;

export interface TeacherWorkshopTab {
  id: TeacherWorkshopTabId;
  label: string;
  workshops: TeacherWorkshopItem[];
  emptyState: TeacherWorkshopEmptyState;
}

export interface TeacherWorkshopPageData {
  defaultTabId: TeacherWorkshopTabId;
  tabs: TeacherWorkshopTab[];
}
