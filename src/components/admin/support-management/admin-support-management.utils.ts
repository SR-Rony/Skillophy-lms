import type {
  AdminSupportPriorityFilterId,
  AdminSupportSortId,
  AdminSupportTicket,
  AdminSupportTicketPriority,
} from "@/types/admin-support-management.types";

const priorityOrder: Record<AdminSupportTicketPriority, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

export function formatAdminSupportDate(value: string) {
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

export function formatAdminSupportPriorityLabel(priority: AdminSupportTicketPriority) {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}

export function filterAdminSupportTickets(
  tickets: AdminSupportTicket[],
  searchQuery: string,
  priorityId: AdminSupportPriorityFilterId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return tickets.filter((ticket) => {
    const matchesPriority = priorityId === "all" || ticket.priority === priorityId;
    if (!matchesPriority) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const searchableText = [
      ticket.ticketNumber,
      ticket.subject,
      ticket.priority,
      ticket.createdByName,
      ticket.status,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });
}

export function sortAdminSupportTickets(
  tickets: AdminSupportTicket[],
  sortId: AdminSupportSortId
) {
  const sorted = [...tickets];

  switch (sortId) {
    case "newest":
      return sorted.sort((left, right) => right.createdDate.localeCompare(left.createdDate));
    case "oldest":
      return sorted.sort((left, right) => left.createdDate.localeCompare(right.createdDate));
    case "priority-desc":
      return sorted.sort(
        (left, right) => priorityOrder[left.priority] - priorityOrder[right.priority]
      );
    case "status-asc":
      return sorted.sort((left, right) => left.status.localeCompare(right.status));
    default:
      return sorted;
  }
}

export function paginateAdminSupportTickets(
  tickets: AdminSupportTicket[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(tickets.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: tickets.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
