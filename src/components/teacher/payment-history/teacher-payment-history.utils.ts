import type {
  TeacherPaymentHistoryItem,
  TeacherPaymentHistorySortId,
} from "@/types/teacher-payment-history.types";

export function formatTeacherPaymentAmount(amount: number) {
  return `৳${amount.toLocaleString("en-IN")}`;
}

export function formatTeacherPaymentSummaryAmount(amount: number) {
  return `৳${amount.toLocaleString("en-IN")}`;
}

function parsePaymentDate(date: string) {
  return new Date(date).getTime();
}

export function filterAndSortTeacherPayments(
  payments: TeacherPaymentHistoryItem[],
  courseId: string,
  sortId: TeacherPaymentHistorySortId
) {
  const filtered =
    courseId === "all" ? payments : payments.filter((payment) => payment.courseId === courseId);

  const sorted = [...filtered];

  switch (sortId) {
    case "date-desc":
      sorted.sort((a, b) => parsePaymentDate(b.date) - parsePaymentDate(a.date));
      break;
    case "date-asc":
      sorted.sort((a, b) => parsePaymentDate(a.date) - parsePaymentDate(b.date));
      break;
    case "amount-desc":
      sorted.sort((a, b) => b.amount - a.amount);
      break;
    case "amount-asc":
      sorted.sort((a, b) => a.amount - b.amount);
      break;
    default:
      break;
  }

  return sorted;
}

export function paginateTeacherPayments<T>(items: T[], page: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    items: items.slice(startIndex, startIndex + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
