import type {
  AdminCourseClassRoutineSlot,
  AdminCourseCreationSelectOption,
} from "@/types/admin-course-creation.types";

export const ADMIN_COURSE_CLASS_DAY_OPTIONS: AdminCourseCreationSelectOption[] = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
];

export function getAdminCourseClassTimeOptions(): AdminCourseCreationSelectOption[] {
  const options: AdminCourseCreationSelectOption[] = [];

  for (let hour = 9; hour <= 21; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 21 && minute === 30) {
        continue;
      }

      const value = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 || 12;
      const label = `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
      options.push({ value, label });
    }
  }

  return options;
}

export function createAdminCourseClassRoutineSlot(
  overrides?: Partial<AdminCourseClassRoutineSlot>
): AdminCourseClassRoutineSlot {
  return {
    id: `routine-slot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    day: "sunday",
    time: "17:00",
    ...overrides,
  };
}

export const ADMIN_COURSE_CLASS_TIME_OPTIONS = getAdminCourseClassTimeOptions();
