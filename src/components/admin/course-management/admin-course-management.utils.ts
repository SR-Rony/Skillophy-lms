import { ROUTES } from "@/constants";
import type {
  AdminCourseManagementTab,
  AdminRecordedCourse,
  AdminRecordedCourseCategoryId,
  AdminRecordedCourseSortId,
} from "@/types/admin-course-management.types";

const statusOrder = { published: 0, draft: 1 } as const;

export function parseAdminCourseManagementTab(
  value: string | null | undefined
): AdminCourseManagementTab {
  if (value === "live") {
    return "live";
  }

  return "recorded";
}

export function getAdminCourseManagementHref(tab: AdminCourseManagementTab = "recorded") {
  if (tab === "recorded") {
    return ROUTES.admin.courses;
  }

  return `${ROUTES.admin.courses}?tab=live`;
}

export function formatAdminRecordedCoursePrice(price: number) {
  return `৳${price.toLocaleString("en-IN")}`;
}

export function formatAdminRecordedCourseLearners(value: number) {
  return value.toLocaleString("en-IN");
}

export function formatAdminRecordedCourseRating(rating: number) {
  return rating.toFixed(1);
}

export function filterAdminRecordedCourses(
  courses: AdminRecordedCourse[],
  searchQuery: string,
  categoryId: AdminRecordedCourseCategoryId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return courses.filter((course) => {
    const matchesCategory = categoryId === "all" || course.categoryId === categoryId;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return (
      course.title.toLowerCase().includes(normalizedSearch) ||
      course.teacherName.toLowerCase().includes(normalizedSearch) ||
      course.category.toLowerCase().includes(normalizedSearch)
    );
  });
}

export function sortAdminRecordedCourses(
  courses: AdminRecordedCourse[],
  sortId: AdminRecordedCourseSortId
) {
  const sorted = [...courses];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "learners-desc":
      return sorted.sort((a, b) => b.totalLearners - a.totalLearners);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "rating-desc":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminRecordedCourses(
  courses: AdminRecordedCourse[],
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
