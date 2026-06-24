import type {
  AdminSupportTicketForm,
  AdminSupportTicketPriority,
  AdminSupportTicketPriorityFormOption,
} from "@/types/admin-support-management.types";

export const adminSupportTicketPriorityFormOptions: AdminSupportTicketPriorityFormOption[] = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export function createDefaultAdminSupportTicketForm(): AdminSupportTicketForm {
  return {
    subject: "Network Issue",
    priority: "low",
    message: "",
  };
}

export function isAdminSupportTicketFormValid(form: AdminSupportTicketForm) {
  return form.subject.trim().length > 0 && form.message.trim().length > 0;
}

export function adminSupportTicketFormToTicket(
  form: AdminSupportTicketForm,
  ticketId: string,
  ticketNumber: string
) {
  const now = new Date();

  return {
    id: ticketId,
    ticketNumber,
    subject: form.subject.trim(),
    priority: form.priority as AdminSupportTicketPriority,
    createdByName: "Abdullah Mamun",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
    createdDate: now.toISOString().slice(0, 10),
    createdTime: now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    status: "open" as const,
  };
}

export function createAdminSupportTicketId() {
  return `support-ticket-${Date.now()}`;
}
