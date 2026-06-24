import { ROUTES } from "@/constants";
import type {
  AdminCategory,
  AdminCategoryManagementTab,
  AdminCategorySortId,
} from "@/types/admin-category-management.types";

const statusOrder = { active: 0, inactive: 1 } as const;

export function parseAdminCategoryManagementTab(
  value: string | null | undefined
): AdminCategoryManagementTab {
  if (value === "workshop") {
    return "workshop";
  }

  if (value === "job-position") {
    return "job-position";
  }

  return "course";
}

export function getAdminCategoryManagementHref(tab: AdminCategoryManagementTab = "course") {
  if (tab === "course") {
    return ROUTES.admin.categories;
  }

  return `${ROUTES.admin.categories}?tab=${tab}`;
}

export function filterAdminCategories(categories: AdminCategory[], searchQuery: string) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return categories;
  }

  return categories.filter((category) =>
    category.name.toLowerCase().includes(normalizedSearch)
  );
}

export function sortAdminCategories(categories: AdminCategory[], sortId: AdminCategorySortId) {
  const sorted = [...categories];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "count-desc":
      return sorted.sort((a, b) => b.itemCount - a.itemCount);
    case "count-asc":
      return sorted.sort((a, b) => a.itemCount - b.itemCount);
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminCategories(
  categories: AdminCategory[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(categories.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: categories.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
