import type { AdminCourseAddLessonForm } from "@/types/admin-course-creation.types";

export const adminCourseAddLessonInputClassName =
  "w-full rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:text-[15px]";

export const adminCourseAddLessonTextareaClassName =
  "min-h-[180px] w-full resize-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:min-h-[200px] sm:text-[15px]";

export function createEmptyAdminCourseAddLessonForm(isLiveCourse = false): AdminCourseAddLessonForm {
  return {
    title: "",
    description: "",
    teacherIds: isLiveCourse ? ["teacher-abdullah"] : [],
    videoUrl: "",
    isFree: false,
    resources: [],
    ...(isLiveCourse ? { liveClassSchedule: "2024-05-08" } : {}),
  };
}

export function getAdminCourseLessonResourceLabel(resourceCount: number) {
  if (resourceCount === 0) {
    return "No resource";
  }

  if (resourceCount === 1) {
    return "1 resource";
  }

  return `${resourceCount} resources`;
}
