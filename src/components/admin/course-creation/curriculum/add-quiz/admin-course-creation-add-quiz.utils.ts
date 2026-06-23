import type { AdminCourseAddQuizForm, AdminCourseQuizQuestion } from "@/types/admin-course-creation.types";

export function createEmptyAdminCourseAddQuizForm(): AdminCourseAddQuizForm {
  return {
    questions: [],
  };
}

export function createAdminCourseQuizQuestion(prompt = ""): AdminCourseQuizQuestion {
  return {
    id: `question-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    prompt,
  };
}

export function getAdminCourseQuizTitle(topicTitle: string) {
  return `Quiz on ${topicTitle}`;
}
