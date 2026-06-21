import { studentCourseDetailsBySlug } from "@/data/mock/student-course-details.mock";
import type { AssignmentProgressRow } from "@/types/assignment-progress-table.types";

export interface StudentAssignmentsCourseGroup {
  slug: string;
  title: string;
  courseType: "live" | "recorded";
  assignments: AssignmentProgressRow[];
}

export function getStudentAssignmentsPageData(): StudentAssignmentsCourseGroup[] {
  return Object.values(studentCourseDetailsBySlug)
    .filter((course) => (course.assignments?.length ?? 0) > 0)
    .map((course) => ({
      slug: course.slug,
      title: course.title,
      courseType: course.courseType,
      assignments: course.assignments ?? [],
    }));
}
