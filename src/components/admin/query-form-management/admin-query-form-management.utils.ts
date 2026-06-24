import type {
  AdminBusinessQuery,
  AdminQueryFormCompanySize,
  AdminQueryFormManagementTab,
  AdminQueryFormSortId,
} from "@/types/admin-query-form-management.types";
import { ROUTES } from "@/constants";

const companySizeOrder: Record<AdminQueryFormCompanySize, number> = {
  small: 0,
  medium: 1,
  large: 2,
};

export function parseAdminQueryFormManagementTab(
  value: string | null | undefined
): AdminQueryFormManagementTab {
  if (value === "contact") {
    return "contact";
  }

  return "business";
}

export function getAdminQueryFormManagementHref(tab: AdminQueryFormManagementTab = "business") {
  if (tab === "business") {
    return ROUTES.admin.queryForm;
  }

  return `${ROUTES.admin.queryForm}?tab=contact`;
}

export function getAdminBusinessQueryDetailHref(queryId: string) {
  return ROUTES.admin.businessQueryDetail(queryId);
}

export function formatAdminQueryFormCompanySize(size: AdminQueryFormCompanySize) {
  const labels: Record<AdminQueryFormCompanySize, string> = {
    small: "Small",
    medium: "Medium",
    large: "Large",
  };

  return labels[size];
}

export function formatAdminQueryFormSubmittedDate(value: string) {
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

export function formatAdminQueryFormSubmittedDateTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} at ${formattedTime}`;
}

export function filterAdminBusinessQueries(queries: AdminBusinessQuery[], searchQuery: string) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  if (!normalizedSearch) {
    return queries;
  }

  return queries.filter(
    (query) =>
      query.name.toLowerCase().includes(normalizedSearch) ||
      query.email.toLowerCase().includes(normalizedSearch) ||
      query.companyName.toLowerCase().includes(normalizedSearch) ||
      formatAdminQueryFormCompanySize(query.companySize).toLowerCase().includes(normalizedSearch)
  );
}

export function sortAdminBusinessQueries(
  queries: AdminBusinessQuery[],
  sortId: AdminQueryFormSortId
) {
  const sorted = [...queries];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "company-asc":
      return sorted.sort((a, b) => a.companyName.localeCompare(b.companyName));
    case "date-desc":
      return sorted.sort((a, b) => b.submittedDate.localeCompare(a.submittedDate));
    case "company-size-asc":
      return sorted.sort(
        (a, b) => companySizeOrder[a.companySize] - companySizeOrder[b.companySize]
      );
    default:
      return sorted;
  }
}

export function paginateAdminQueryForms(
  queries: AdminBusinessQuery[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(queries.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: queries.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
