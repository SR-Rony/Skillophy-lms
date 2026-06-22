import type {
  StudentClassScheduleItem,
  StudentClassSchedulePageData,
  StudentClassScheduleSection,
} from "@/types/student-class-schedule.types";

export type TeacherClassSchedulePageData = Pick<
  StudentClassSchedulePageData,
  "sections" | "routine" | "emptyState"
>;

export type {
  StudentClassScheduleItem as TeacherClassScheduleItem,
  StudentClassScheduleSection as TeacherClassScheduleSection,
};
