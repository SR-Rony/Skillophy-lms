import type {
  AdminCourseAddQuizForm,
  AdminCourseQuizAnswerOption,
  AdminCourseQuizQuestion,
} from "@/types/admin-course-creation.types";

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createAdminCourseQuizAnswerOption(text = ""): AdminCourseQuizAnswerOption {
  return {
    id: createId("option"),
    text,
  };
}

export function createAdminCourseQuizQuestion(
  prompt = "",
  overrides: Partial<AdminCourseQuizQuestion> = {}
): AdminCourseQuizQuestion {
  const firstOption = createAdminCourseQuizAnswerOption();

  return {
    id: createId("question"),
    prompt,
    isExpanded: true,
    isEditing: prompt.trim().length === 0,
    options: [firstOption],
    correctOptionId: firstOption.id,
    correctAnswerDescription: "",
    points: "1",
    ...overrides,
  };
}

export function createEmptyAdminCourseAddQuizForm(): AdminCourseAddQuizForm {
  return {
    durationMinutes: "20",
    questions: [],
  };
}

export function formatAdminCourseQuizQuestionLabel(index: number, prompt: string) {
  return `Q ${index + 1}. ${prompt}`;
}

export function getAdminCourseQuizTitle(topicTitle: string) {
  return `Quiz on ${topicTitle}`;
}

export function isAdminCourseAddQuizFormValid(form: AdminCourseAddQuizForm) {
  return form.questions.some((question) => question.prompt.trim().length > 0);
}
