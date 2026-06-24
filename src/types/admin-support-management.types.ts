export type AdminSupportTicketStatus = "open" | "in-progress" | "resolved";

export type AdminSupportTicketPriority = "high" | "medium" | "low";

export type AdminSupportPriorityFilterId = "all" | AdminSupportTicketPriority;

export type AdminSupportSortId =
  | "default"
  | "newest"
  | "oldest"
  | "priority-desc"
  | "status-asc";

export interface AdminSupportTicket {
  id: string;
  ticketNumber: string;
  subject: string;
  priority: AdminSupportTicketPriority;
  createdByName: string;
  createdByAvatar: string;
  createdDate: string;
  createdTime: string;
  status: AdminSupportTicketStatus;
}

export interface AdminSupportPriorityOption {
  id: AdminSupportPriorityFilterId;
  label: string;
}

export interface AdminSupportSortOption {
  id: AdminSupportSortId;
  label: string;
}

export interface AdminSupportManagementData {
  tickets: AdminSupportTicket[];
  priorityOptions: AdminSupportPriorityOption[];
  sortOptions: AdminSupportSortOption[];
  defaultPriorityId: AdminSupportPriorityFilterId;
  defaultSortId: AdminSupportSortId;
  pageSize: number;
  addNewTicketLabel: string;
}

export interface AdminSupportTicketForm {
  subject: string;
  priority: AdminSupportTicketPriority;
  message: string;
}

export interface AdminSupportTicketPriorityFormOption {
  value: AdminSupportTicketPriority;
  label: string;
}

export interface AdminSupportTicketDetail extends AdminSupportTicket {
  thread: AdminSupportTicketThreadItem[];
  resolveTicketLabel: string;
}

export type AdminSupportTicketThreadItem =
  | { type: "date"; id: string; label: string }
  | {
      type: "message";
      id: string;
      message: AdminSupportTicketMessage;
    };

export type AdminSupportTicketMessageSender = "user" | "support";

export interface AdminSupportTicketMessage {
  id: string;
  sender: AdminSupportTicketMessageSender;
  content: string;
  avatar: string;
}

export interface AdminSupportSendMessageInput {
  content: string;
}
