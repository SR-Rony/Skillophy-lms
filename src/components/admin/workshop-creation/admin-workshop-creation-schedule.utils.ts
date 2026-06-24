import {
  ADMIN_COURSE_CLASS_DAY_OPTIONS,
  ADMIN_COURSE_CLASS_TIME_OPTIONS,
  createAdminCourseClassRoutineSlot,
} from "@/components/admin/course-creation/class-routine/admin-course-creation-class-routine.utils";
import type { AdminWorkshopScheduleSlot } from "@/types/admin-workshop-creation.types";

export const ADMIN_WORKSHOP_SCHEDULE_DAY_OPTIONS = ADMIN_COURSE_CLASS_DAY_OPTIONS;
export const ADMIN_WORKSHOP_SCHEDULE_TIME_OPTIONS = ADMIN_COURSE_CLASS_TIME_OPTIONS;

export function createAdminWorkshopScheduleSlot(
  overrides?: Partial<AdminWorkshopScheduleSlot>
): AdminWorkshopScheduleSlot {
  return createAdminCourseClassRoutineSlot(overrides);
}

export function getAdminWorkshopScheduleDayLabel(day: string) {
  return ADMIN_WORKSHOP_SCHEDULE_DAY_OPTIONS.find((option) => option.value === day)?.label ?? day;
}

export function getAdminWorkshopScheduleTimeLabel(time: string) {
  return ADMIN_WORKSHOP_SCHEDULE_TIME_OPTIONS.find((option) => option.value === time)?.label ?? time;
}
