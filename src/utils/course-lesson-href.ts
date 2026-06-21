import { ROUTES } from "@/constants";
import type { StudentCourseCurriculumLesson } from "@/types/student-course-details.types";

export function getRecordedCourseLessonHref(
  lesson: StudentCourseCurriculumLesson,
  courseSlug: string
) {
  if (lesson.href && !lesson.href.startsWith("#")) {
    return lesson.href;
  }

  if (lesson.type === "video") {
    return ROUTES.student.courseLesson(courseSlug, lesson.id);
  }

  if (lesson.type === "reading") {
    return ROUTES.student.courseResources(courseSlug, lesson.id);
  }

  if (lesson.type === "quiz") {
    return ROUTES.student.courseQuiz(courseSlug, lesson.id);
  }

  if (lesson.type === "assignment") {
    return ROUTES.student.courseAssignment(courseSlug, lesson.id);
  }

  return undefined;
}
