import { ROUTES } from "@/constants";
import {
  formatAdminSupportDate,
  formatAdminSupportPriorityLabel,
} from "@/components/admin/support-management/admin-support-management.utils";
import type { AdminSupportTicketPriority } from "@/types/admin-support-management.types";

export function getAdminSupportManagementHref() {
  return ROUTES.admin.support;
}

export function formatAdminSupportTicketIdLabel(ticketNumber: string) {
  return `Ticket ID:${ticketNumber}`;
}

export function getAdminSupportDetailHref(ticketId: string) {
  return ROUTES.admin.supportDetail(ticketId);
}

export function formatAdminSupportDetailOpenedAt(createdDate: string, createdTime: string) {
  return `${formatAdminSupportDate(createdDate)} at ${createdTime}`;
}

export function formatAdminSupportDetailMetaLine(
  createdByName: string,
  createdDate: string,
  createdTime: string,
  priority: AdminSupportTicketPriority
) {
  return `${createdByName} opened this ticket on ${formatAdminSupportDetailOpenedAt(createdDate, createdTime)} • ${formatAdminSupportPriorityLabel(priority)} Priority`;
}
