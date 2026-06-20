import { studentClassScheduleDemo } from "@/data/mock/student-class-schedule.mock";
import type { StudentClassSchedulePageData } from "@/types/student-class-schedule.types";

export function resolveStudentClassSchedule(): StudentClassSchedulePageData {
  return studentClassScheduleDemo;
}
