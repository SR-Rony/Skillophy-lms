import {
  resolveAdminSupportCreateTicket,
  resolveAdminSupportManagement,
  resolveAdminSupportResolveTicket,
  resolveAdminSupportSendTicketMessage,
  resolveAdminSupportTicketDetail,
} from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type {
  AdminSupportManagementData,
  AdminSupportSendMessageInput,
  AdminSupportTicket,
  AdminSupportTicketDetail,
  AdminSupportTicketForm,
  AdminSupportTicketThreadItem,
} from "@/types/admin-support-management.types";
import { adminApiGet, adminApiPatch, adminApiPost } from "./admin-api.helpers";
import { fetchAdminData, mutateAdminData } from "./create-admin-service";

export const adminSupportManagementService = {
  async getSupportTickets(): Promise<AdminSupportManagementData> {
    return fetchAdminData(
      () => resolveAdminSupportManagement(),
      () => adminApiGet<AdminSupportManagementData>(ADMIN_API_ROUTES.support.tickets)
    );
  },

  async getTicketDetail(ticketId: string): Promise<AdminSupportTicketDetail | null> {
    return fetchAdminData(
      () => resolveAdminSupportTicketDetail(ticketId),
      () => adminApiGet<AdminSupportTicketDetail>(ADMIN_API_ROUTES.support.ticket(ticketId))
    );
  },

  async createTicket(form: AdminSupportTicketForm): Promise<AdminSupportTicket> {
    return mutateAdminData(
      () => resolveAdminSupportCreateTicket(form),
      () => adminApiPost<AdminSupportTicket>(ADMIN_API_ROUTES.support.tickets, form)
    );
  },

  async resolveTicket(ticketId: string): Promise<AdminSupportTicketDetail | null> {
    return mutateAdminData(
      () => resolveAdminSupportResolveTicket(ticketId),
      () => adminApiPatch<AdminSupportTicketDetail>(ADMIN_API_ROUTES.support.resolve(ticketId))
    );
  },

  async sendTicketMessage(
    ticketId: string,
    input: AdminSupportSendMessageInput
  ): Promise<AdminSupportTicketThreadItem | null> {
    return mutateAdminData(
      () => resolveAdminSupportSendTicketMessage(ticketId, input.content),
      () =>
        adminApiPost<AdminSupportTicketThreadItem>(
          ADMIN_API_ROUTES.support.messages(ticketId),
          input
        )
    );
  },
};
