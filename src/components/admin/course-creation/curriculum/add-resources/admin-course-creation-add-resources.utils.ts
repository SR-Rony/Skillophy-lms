import type { AdminCourseAddResourceForm } from "@/types/admin-course-creation.types";

export function createEmptyAdminCourseAddResourceForm(): AdminCourseAddResourceForm {
  return {
    resources: [],
  };
}
