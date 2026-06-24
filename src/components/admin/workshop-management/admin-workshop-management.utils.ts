import type {
  AdminWorkshop,
  AdminWorkshopCategoryId,
  AdminWorkshopSortId,
} from "@/types/admin-workshop-management.types";

const statusOrder = { completed: 0, draft: 1 } as const;

export function formatAdminWorkshopLearners(value: number) {
  return value.toLocaleString("en-IN");
}

export function formatAdminWorkshopDate(value: string) {
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

export function filterAdminWorkshops(
  workshops: AdminWorkshop[],
  searchQuery: string,
  categoryId: AdminWorkshopCategoryId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return workshops.filter((workshop) => {
    const matchesCategory = categoryId === "all" || workshop.categoryId === categoryId;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return (
      workshop.title.toLowerCase().includes(normalizedSearch) ||
      workshop.conductorName.toLowerCase().includes(normalizedSearch) ||
      workshop.category.toLowerCase().includes(normalizedSearch)
    );
  });
}

export function sortAdminWorkshops(workshops: AdminWorkshop[], sortId: AdminWorkshopSortId) {
  const sorted = [...workshops];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "learners-desc":
      return sorted.sort((a, b) => b.totalLearners - a.totalLearners);
    case "date-desc":
      return sorted.sort((a, b) => b.date.localeCompare(a.date));
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminWorkshops(
  workshops: AdminWorkshop[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(workshops.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: workshops.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
