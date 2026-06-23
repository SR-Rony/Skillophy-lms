import type { AdminCourseCurriculumTopic } from "@/types/admin-course-creation.types";

export const ADMIN_COURSE_CURRICULUM_MAX_WIDTH_CLASS = "max-w-[760px]";

export function getAdminCourseCurriculumTopicSummary(topic: AdminCourseCurriculumTopic) {
  const lessonCount = topic.items.filter((item) => item.type === "lesson").length;
  const resourceCount = topic.items.filter((item) => item.type === "resource").length;
  const quizCount = topic.items.filter((item) => item.type === "quiz").length;

  return `${lessonCount} lessons, ${resourceCount} resources, ${quizCount} quiz`;
}

export function formatAdminCourseCurriculumTopicLabel(index: number, title: string) {
  return `Topic ${index + 1}. ${title}`;
}
