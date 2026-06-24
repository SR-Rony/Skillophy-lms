import type {
  AdminReport,
  AdminReportSortId,
  AdminReportTypeFilterId,
} from "@/types/admin-report-management.types";
import { ROUTES } from "@/constants";

export function getAdminReportManagementHref() {
  return ROUTES.admin.report;
}

export function getAdminReportDetailHref(reportId: string) {
  return ROUTES.admin.reportDetail(reportId);
}

export function formatAdminReportDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function filterAdminReports(
  reports: AdminReport[],
  searchQuery: string,
  typeId: AdminReportTypeFilterId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return reports.filter((report) => {
    const matchesType = typeId === "all" || report.type === typeId;
    if (!matchesType) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const searchableText = [
      report.courseName,
      report.lessonName,
      report.reporterName,
      report.reporterEmail,
      report.status,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });
}

export function sortAdminReports(reports: AdminReport[], sortId: AdminReportSortId) {
  const sorted = [...reports];

  switch (sortId) {
    case "newest":
      return sorted.sort((left, right) => right.reportedDate.localeCompare(left.reportedDate));
    case "oldest":
      return sorted.sort((left, right) => left.reportedDate.localeCompare(right.reportedDate));
    case "status-asc":
      return sorted.sort((left, right) => left.status.localeCompare(right.status));
    case "course-asc":
      return sorted.sort((left, right) => left.courseName.localeCompare(right.courseName));
    default:
      return sorted;
  }
}

export function paginateAdminReports(
  reports: AdminReport[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(reports.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: reports.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
