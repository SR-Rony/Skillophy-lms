import { ROUTES } from "@/constants";
import type {
  AdminPromo,
  AdminPromoCategoryId,
  AdminPromoManagementTab,
  AdminPromoSortId,
} from "@/types/admin-promo-management.types";

const statusOrder = { active: 0, inactive: 1 } as const;

export function parseAdminPromoManagementTab(
  value: string | null | undefined
): AdminPromoManagementTab {
  if (value === "bulk-discount") {
    return "bulk-discount";
  }

  return "customize-promo";
}

export function getAdminPromoManagementHref(tab: AdminPromoManagementTab = "customize-promo") {
  if (tab === "customize-promo") {
    return ROUTES.admin.promos;
  }

  return `${ROUTES.admin.promos}?tab=bulk-discount`;
}

export function formatAdminPromoDiscount(
  discountType: AdminPromo["discountType"],
  discountValue: number
) {
  if (discountType === "flat") {
    return `৳${discountValue.toLocaleString("en-IN")}`;
  }

  return `${discountValue}%`;
}

export function filterAdminPromos(
  promos: AdminPromo[],
  searchQuery: string,
  categoryId: AdminPromoCategoryId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return promos.filter((promo) => {
    const matchesCategory = categoryId === "all" || promo.categoryId === categoryId;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return promo.name.toLowerCase().includes(normalizedSearch);
  });
}

export function sortAdminPromos(promos: AdminPromo[], sortId: AdminPromoSortId) {
  const sorted = [...promos];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "courses-desc":
      return sorted.sort((a, b) => b.courseCount - a.courseCount);
    case "users-desc":
      return sorted.sort((a, b) => b.userCount - a.userCount);
    case "discount-desc":
      return sorted.sort((a, b) => {
        const aValue = a.discountType === "flat" ? a.discountValue : a.discountValue;
        const bValue = b.discountType === "flat" ? b.discountValue : b.discountValue;
        return bValue - aValue;
      });
    case "status-asc":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    default:
      return sorted;
  }
}

export function paginateAdminPromos(promos: AdminPromo[], currentPage: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(promos.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: promos.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
