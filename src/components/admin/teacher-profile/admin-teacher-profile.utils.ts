import type {
  AdminTeacherLiveCourse,
  AdminTeacherLiveCourseSortId,
  AdminTeacherRecordedCourse,
  AdminTeacherRecordedCourseSortId,
} from "@/types/admin-teacher-profile.types";

export function formatAdminTeacherEarnings(amount: number) {
  return `৳${amount.toLocaleString("en-IN")}`;
}

export function formatAdminTeacherStatCount(value: number) {
  return value.toString().padStart(2, "0");
}

export function formatAdminTeacherPublishDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatAdminTeacherEnrolledStudents(count: number) {
  return count.toLocaleString("en-US");
}

export function filterAdminTeacherRecordedCourses(
  courses: AdminTeacherRecordedCourse[],
  searchQuery: string
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return courses;
  }

  return courses.filter((course) => course.title.toLowerCase().includes(normalizedSearch));
}

export function sortAdminTeacherRecordedCourses(
  courses: AdminTeacherRecordedCourse[],
  sortId: AdminTeacherRecordedCourseSortId
) {
  const sorted = [...courses];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "date-desc":
      return sorted.sort((a, b) => b.publishDate.localeCompare(a.publishDate));
    case "date-asc":
      return sorted.sort((a, b) => a.publishDate.localeCompare(b.publishDate));
    case "students-desc":
      return sorted.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
    default:
      return sorted;
  }
}

export function paginateAdminTeacherRecordedCourses(
  courses: AdminTeacherRecordedCourse[],
  currentPage: number,
  pageSize: number
) {
  return paginateItems(courses, currentPage, pageSize);
}

function paginateItems<T>(items: T[], currentPage: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}

export function formatAdminTeacherProgress(progress: number) {
  return `${progress}%`;
}

const liveCourseStatusOrder: Record<AdminTeacherLiveCourse["status"], number> = {
  completed: 0,
  ongoing: 1,
  upcoming: 2,
};

export function filterAdminTeacherLiveCourses(
  courses: AdminTeacherLiveCourse[],
  searchQuery: string
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return courses;
  }

  return courses.filter((course) => course.title.toLowerCase().includes(normalizedSearch));
}

export function sortAdminTeacherLiveCourses(
  courses: AdminTeacherLiveCourse[],
  sortId: AdminTeacherLiveCourseSortId
) {
  const sorted = [...courses];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "date-desc":
      return sorted.sort((a, b) => b.startDate.localeCompare(a.startDate));
    case "date-asc":
      return sorted.sort((a, b) => a.startDate.localeCompare(b.startDate));
    case "students-desc":
      return sorted.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
    case "status-asc":
      return sorted.sort(
        (a, b) => liveCourseStatusOrder[a.status] - liveCourseStatusOrder[b.status]
      );
    default:
      return sorted;
  }
}

export function paginateAdminTeacherLiveCourses(
  courses: AdminTeacherLiveCourse[],
  currentPage: number,
  pageSize: number
) {
  return paginateItems(courses, currentPage, pageSize);
}
