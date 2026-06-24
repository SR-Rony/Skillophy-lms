import type {
  AdminLearnerTransaction,
  AdminLearnerTransactionStatusFilterId,
  AdminTeacherTransaction,
  AdminTeacherTransactionStatusFilterId,
  AdminTransactionManagementTab,
  AdminTransactionSortId,
} from "@/types/admin-transaction-management.types";
import { ROUTES } from "@/constants";

const learnerStatusOrder = { pending: 0, failed: 1, completed: 2 } as const;
const teacherStatusOrder = { paid: 0, due: 1 } as const;

export function parseAdminTransactionManagementTab(
  value: string | null | undefined
): AdminTransactionManagementTab {
  if (value === "teacher") {
    return "teacher";
  }

  return "learner";
}

export function getAdminTransactionManagementHref(tab: AdminTransactionManagementTab = "learner") {
  if (tab === "learner") {
    return ROUTES.admin.transactions;
  }

  return `${ROUTES.admin.transactions}?tab=teacher`;
}

export function formatAdminTransactionAmount(amount: number) {
  if (amount === 0) {
    return "৳00";
  }

  return `৳${amount.toLocaleString("en-IN")}`;
}

export function formatAdminTransactionDate(value: string) {
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

export function filterAdminLearnerTransactions(
  transactions: AdminLearnerTransaction[],
  searchQuery: string,
  statusId: AdminLearnerTransactionStatusFilterId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return transactions.filter((transaction) => {
    const matchesStatus = statusId === "all" || transaction.status === statusId;
    if (!matchesStatus) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return (
      transaction.name.toLowerCase().includes(normalizedSearch) ||
      transaction.email.toLowerCase().includes(normalizedSearch) ||
      transaction.courseName.toLowerCase().includes(normalizedSearch) ||
      transaction.transactionId.includes(normalizedSearch)
    );
  });
}

export function filterAdminTeacherTransactions(
  transactions: AdminTeacherTransaction[],
  searchQuery: string,
  statusId: AdminTeacherTransactionStatusFilterId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return transactions.filter((transaction) => {
    const matchesStatus = statusId === "all" || transaction.status === statusId;
    if (!matchesStatus) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return (
      transaction.name.toLowerCase().includes(normalizedSearch) ||
      transaction.email.toLowerCase().includes(normalizedSearch) ||
      transaction.courseName.toLowerCase().includes(normalizedSearch)
    );
  });
}

export function sortAdminLearnerTransactions(
  transactions: AdminLearnerTransaction[],
  sortId: AdminTransactionSortId
) {
  const sorted = [...transactions];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "date-desc":
      return sorted.sort((a, b) => b.date.localeCompare(a.date));
    case "amount-desc":
      return sorted.sort((a, b) => b.amount - a.amount);
    case "status-asc":
      return sorted.sort(
        (a, b) => learnerStatusOrder[a.status] - learnerStatusOrder[b.status]
      );
    default:
      return sorted;
  }
}

export function sortAdminTeacherTransactions(
  transactions: AdminTeacherTransaction[],
  sortId: AdminTransactionSortId
) {
  const sorted = [...transactions];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "date-desc":
      return sorted.sort((a, b) => b.date.localeCompare(a.date));
    case "amount-desc":
      return sorted.sort((a, b) => b.amount - a.amount);
    case "status-asc":
      return sorted.sort(
        (a, b) => teacherStatusOrder[a.status] - teacherStatusOrder[b.status]
      );
    default:
      return sorted;
  }
}

export function paginateAdminTransactions<T>(
  transactions: T[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(transactions.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: transactions.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
