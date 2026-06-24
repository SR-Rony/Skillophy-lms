import type { AdminCourseAddAssignmentForm } from "@/types/admin-course-creation.types";

export function createEmptyAdminCourseAddAssignmentForm(): AdminCourseAddAssignmentForm {
  return {
    lastSubmissionDate: "2024-05-28",
    tasks: "",
  };
}

export function getAdminCourseAssignmentTitle(topicTitle: string) {
  return `Assignment on ${topicTitle}`;
}

export function isAdminCourseAddAssignmentFormValid(form: AdminCourseAddAssignmentForm) {
  return form.lastSubmissionDate.trim().length > 0;
}
