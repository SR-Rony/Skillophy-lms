import type {
  AdminJobOpening,
  AdminJobOpeningSortId,
} from "@/types/admin-job-opening-management.types";

const statusOrder = { active: 0, inactive: 1 } as const;

export function formatAdminJobOpeningDeadline(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) {
    return value;
  }

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function filterAdminJobOpenings(jobOpenings: AdminJobOpening[], searchQuery: string) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return jobOpenings;
  }

  return jobOpenings.filter(
    (jobOpening) =>
      jobOpening.title.toLowerCase().includes(normalizedSearch) ||
      jobOpening.category.toLowerCase().includes(normalizedSearch)
  );
}

export function sortAdminJobOpenings(
  jobOpenings: AdminJobOpening[],
  sortId: AdminJobOpeningSortId
) {
  const sorted = [...jobOpenings];

  switch (sortId) {
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "category-asc":
      return sorted.sort((a, b) => a.category.localeCompare(b.category));
    case "deadline-desc":
      return sorted.sort((a, b) => b.deadline.localeCompare(a.deadline));
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminJobOpenings(
  jobOpenings: AdminJobOpening[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(jobOpenings.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: jobOpenings.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
