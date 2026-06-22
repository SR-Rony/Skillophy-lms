import { formatAdminTeacherStatCount } from "@/components/admin/teacher-profile/admin-teacher-profile.utils";
import type {
  AdminLearnerRecordedCourse,
  AdminLearnerRecordedCourseSortId,
} from "@/types/admin-learner-profile.types";

export function formatAdminLearnerProfileStatCount(value: number) {
  return formatAdminTeacherStatCount(value);
}

export function formatAdminLearnerEnrolledDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatAdminLearnerTotalScore(score: number | null) {
  if (score === null) {
    return "--";
  }

  return `${score.toFixed(1)}%`;
}

export function filterAdminLearnerRecordedCourses(
  courses: AdminLearnerRecordedCourse[],
  searchQuery: string
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return courses;
  }

  return courses.filter(
    (course) =>
      course.title.toLowerCase().includes(normalizedSearch) ||
      course.teacherName.toLowerCase().includes(normalizedSearch)
  );
}

const courseStatusOrder = { completed: 0, ongoing: 1 } as const;

export function sortAdminLearnerRecordedCourses(
  courses: AdminLearnerRecordedCourse[],
  sortId: AdminLearnerRecordedCourseSortId
) {
  const sorted = [...courses];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "date-desc":
      return sorted.sort((a, b) => b.enrolledDate.localeCompare(a.enrolledDate));
    case "date-asc":
      return sorted.sort((a, b) => a.enrolledDate.localeCompare(b.enrolledDate));
    case "score-desc":
      return sorted.sort((a, b) => (b.totalScore ?? -1) - (a.totalScore ?? -1));
    case "status-asc":
      return sorted.sort((a, b) => courseStatusOrder[a.status] - courseStatusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminLearnerRecordedCourses(
  courses: AdminLearnerRecordedCourse[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(courses.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: courses.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
