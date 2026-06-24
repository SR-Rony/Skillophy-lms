import type {
  AdminSupportManagementData,
  AdminSupportTicket,
  AdminSupportTicketDetail,
  AdminSupportTicketForm,
  AdminSupportTicketPriority,
  AdminSupportTicketStatus,
  AdminSupportTicketThreadItem,
} from "@/types/admin-support-management.types";

const supportSkillophyAvatar =
  "https://api.dicebear.com/9.x/initials/png?seed=S&backgroundColor=ff4747";
const supportAgentAvatar =
  "https://api.dicebear.com/9.x/avataaars/png?seed=SkillophySupport";

const ticketSeeds: Array<{
  subject: string;
  priority: AdminSupportTicketPriority;
  createdByName: string;
  createdByAvatar: string;
  createdDate: string;
  createdTime: string;
  status: AdminSupportTicketStatus;
}> = [
  {
    subject: "Network Issue",
    priority: "high",
    createdByName: "Maisha Afrose",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
    createdDate: "2021-05-11",
    createdTime: "10:30 PM",
    status: "resolved",
  },
  {
    subject: "Can't see course video",
    priority: "medium",
    createdByName: "Darrell Steward",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Darrell%20Steward",
    createdDate: "2023-01-15",
    createdTime: "09:30 PM",
    status: "in-progress",
  },
  {
    subject: "Payment not reflecting",
    priority: "high",
    createdByName: "Guy Hawkins",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guy%20Hawkins",
    createdDate: "2024-03-19",
    createdTime: "9:00 PM",
    status: "open",
  },
  {
    subject: "Certificate download failed",
    priority: "low",
    createdByName: "Rakib Hasan",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rakib%20Hasan",
    createdDate: "2024-02-08",
    createdTime: "08:15 PM",
    status: "resolved",
  },
  {
    subject: "Live class audio problem",
    priority: "medium",
    createdByName: "Shikdar Mamun",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Shikdar%20Mamun",
    createdDate: "2024-04-02",
    createdTime: "07:45 PM",
    status: "in-progress",
  },
  {
    subject: "Account login issue",
    priority: "high",
    createdByName: "Mansur Alam",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mansur%20Alam",
    createdDate: "2024-05-10",
    createdTime: "06:20 PM",
    status: "open",
  },
  {
    subject: "Course enrollment error",
    priority: "medium",
    createdByName: "Brooklyn Simmons",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brooklyn%20Simmons",
    createdDate: "2024-01-22",
    createdTime: "05:10 PM",
    status: "resolved",
  },
  {
    subject: "Refund request pending",
    priority: "low",
    createdByName: "Kathryn Murphy",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn%20Murphy",
    createdDate: "2023-11-30",
    createdTime: "04:00 PM",
    status: "open",
  },
];

function buildTickets(): AdminSupportTicket[] {
  const tickets: AdminSupportTicket[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = ticketSeeds[index % ticketSeeds.length];
    const ticketNumber = `#${String(12345 + index).padStart(5, "0")}`;

    tickets.push({
      id: `support-ticket-${index + 1}`,
      ticketNumber,
      ...seed,
      status: index % 6 === 0 ? "resolved" : seed.status,
    });
  }

  return tickets;
}

export const adminSupportManagementData: Omit<AdminSupportManagementData, "tickets"> = {
  priorityOptions: [
    { id: "all", label: "All Priority" },
    { id: "high", label: "High" },
    { id: "medium", label: "Medium" },
    { id: "low", label: "Low" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "priority-desc", label: "Priority" },
    { id: "status-asc", label: "Status" },
  ],
  defaultPriorityId: "all",
  defaultSortId: "default",
  pageSize: 10,
  addNewTicketLabel: "Add New Ticket",
};

let supportTickets: AdminSupportTicket[] = buildTickets();
const supportTicketThreads = new Map<string, AdminSupportTicketThreadItem[]>();

const supportAgentAvatarForMessages =
  "https://api.dicebear.com/9.x/initials/png?seed=S&backgroundColor=ff4747";

export function getAdminSupportManagement(): AdminSupportManagementData {
  return {
    ...adminSupportManagementData,
    tickets: supportTickets,
  };
}

const featuredSupportThread: AdminSupportTicketThreadItem[] = [
  {
    type: "date",
    id: "date-wednesday",
    label: "Wednesday",
  },
  {
    type: "message",
    id: "msg-1",
    message: {
      id: "msg-1",
      sender: "user",
      content:
        "I keep losing connection during live classes. The video buffers for a few seconds and then drops completely.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
    },
  },
  {
    type: "message",
    id: "msg-2",
    message: {
      id: "msg-2",
      sender: "support",
      content:
        "Thanks for reaching out. Can you share which browser you are using and whether this happens on Wi-Fi or mobile data?",
      avatar: supportSkillophyAvatar,
    },
  },
  {
    type: "message",
    id: "msg-3",
    message: {
      id: "msg-3",
      sender: "user",
      content: "Chrome on Windows 11. It happens on both home Wi-Fi and my phone hotspot.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
    },
  },
  {
    type: "message",
    id: "msg-4",
    message: {
      id: "msg-4",
      sender: "support",
      content:
        "We are checking our streaming servers in your region. In the meantime, try clearing your browser cache and disabling any VPN extensions.",
      avatar: supportAgentAvatar,
    },
  },
];

function buildDefaultThread(ticket: AdminSupportTicket): AdminSupportTicketThreadItem[] {
  const items: AdminSupportTicketThreadItem[] = [
    {
      type: "message",
      id: `${ticket.id}-opening`,
      message: {
        id: `${ticket.id}-opening`,
        sender: "user",
        content: `I need help with "${ticket.subject}". Please advise on the next steps.`,
        avatar: ticket.createdByAvatar,
      },
    },
  ];

  if (ticket.status !== "open") {
    items.push({
      type: "message",
      id: `${ticket.id}-reply`,
      message: {
        id: `${ticket.id}-reply`,
        sender: "support",
        content:
          "Our support team is reviewing your ticket and will follow up with troubleshooting steps shortly.",
        avatar: supportSkillophyAvatar,
      },
    });
  }

  return items;
}

function getThreadForTicket(ticket: AdminSupportTicket): AdminSupportTicketThreadItem[] {
  const existing = supportTicketThreads.get(ticket.id);
  if (existing) {
    return existing;
  }

  const initialThread =
    ticket.id === "support-ticket-1" ? [...featuredSupportThread] : buildDefaultThread(ticket);

  supportTicketThreads.set(ticket.id, initialThread);
  return initialThread;
}

function buildTicketDetail(ticket: AdminSupportTicket): AdminSupportTicketDetail {
  const normalizedTicket =
    ticket.id === "support-ticket-1"
      ? { ...ticket, status: "in-progress" as const, createdTime: "9:30 PM" }
      : ticket;

  return {
    ...normalizedTicket,
    thread: getThreadForTicket(normalizedTicket),
    resolveTicketLabel: "Resolved",
  };
}

export function getAdminSupportTicketDetail(ticketId: string): AdminSupportTicketDetail | null {
  const ticket = supportTickets.find((item) => item.id === ticketId);
  if (!ticket) {
    return null;
  }

  return buildTicketDetail(ticket);
}

function createTicketId() {
  return `support-ticket-${Date.now()}`;
}

function createTicketNumber() {
  return `#${String(12345 + supportTickets.length).padStart(5, "0")}`;
}

export function createAdminSupportTicket(form: AdminSupportTicketForm): AdminSupportTicket {
  const now = new Date();
  const ticket: AdminSupportTicket = {
    id: createTicketId(),
    ticketNumber: createTicketNumber(),
    subject: form.subject.trim(),
    priority: form.priority,
    createdByName: "Abdullah Mamun",
    createdByAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
    createdDate: now.toISOString().slice(0, 10),
    createdTime: now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    status: "open",
  };

  supportTickets = [ticket, ...supportTickets];
  supportTicketThreads.set(ticket.id, [
    {
      type: "message",
      id: `${ticket.id}-opening`,
      message: {
        id: `${ticket.id}-opening`,
        sender: "user",
        content: form.message.trim(),
        avatar: ticket.createdByAvatar,
      },
    },
  ]);

  return ticket;
}

export function resolveAdminSupportTicket(ticketId: string): AdminSupportTicketDetail | null {
  const index = supportTickets.findIndex((item) => item.id === ticketId);
  if (index === -1) {
    return null;
  }

  supportTickets[index] = {
    ...supportTickets[index],
    status: "resolved",
  };

  return buildTicketDetail(supportTickets[index]);
}

export function sendAdminSupportTicketMessage(
  ticketId: string,
  content: string
): AdminSupportTicketThreadItem | null {
  const ticket = supportTickets.find((item) => item.id === ticketId);
  if (!ticket || ticket.status === "resolved") {
    return null;
  }

  const thread = getThreadForTicket(ticket);
  const messageItem: AdminSupportTicketThreadItem = {
    type: "message",
    id: `msg-${Date.now()}`,
    message: {
      id: `msg-${Date.now()}`,
      sender: "support",
      content: content.trim(),
      avatar: supportAgentAvatarForMessages,
    },
  };

  supportTicketThreads.set(ticket.id, [...thread, messageItem]);
  return messageItem;
}
