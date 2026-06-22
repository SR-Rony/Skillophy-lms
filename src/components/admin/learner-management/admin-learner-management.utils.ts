import type { AdminLearner, AdminLearnerSortId } from "@/types/admin-learner-management.types";

export function formatAdminLearnerCourseCount(value: number) {
  return value.toString().padStart(2, "0");
}

const statusOrder = { active: 0, inactive: 1 } as const;

export function filterAdminLearners(learners: AdminLearner[], searchQuery: string) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return learners;
  }

  return learners.filter(
    (learner) =>
      learner.name.toLowerCase().includes(normalizedSearch) ||
      learner.email.toLowerCase().includes(normalizedSearch) ||
      learner.phone.includes(normalizedSearch)
  );
}

export function sortAdminLearners(learners: AdminLearner[], sortId: AdminLearnerSortId) {
  const sorted = [...learners];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "enrolled-desc":
      return sorted.sort((a, b) => b.enrolledCourses - a.enrolledCourses);
    case "completed-desc":
      return sorted.sort((a, b) => b.completedCourses - a.completedCourses);
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminLearners(
  learners: AdminLearner[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(learners.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: learners.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
