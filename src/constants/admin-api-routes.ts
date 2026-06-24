/**
 * Backend API path constants for admin services.
 * Frontend services call these via `apiClient` when `NEXT_PUBLIC_USE_MOCK_API=false`.
 */
export const ADMIN_API_ROUTES = {
  dashboard: "/admin/dashboard",
  support: {
    tickets: "/admin/support/tickets",
    ticket: (ticketId: string) => `/admin/support/tickets/${ticketId}`,
    resolve: (ticketId: string) => `/admin/support/tickets/${ticketId}/resolve`,
    messages: (ticketId: string) => `/admin/support/tickets/${ticketId}/messages`,
  },
} as const;
