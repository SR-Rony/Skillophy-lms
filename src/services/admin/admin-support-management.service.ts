import {
  resolveAdminSupportCreateTicket,
  resolveAdminSupportManagement,
  resolveAdminSupportResolveTicket,
  resolveAdminSupportSendTicketMessage,
  resolveAdminSupportTicketDetail,
} from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import { apiClient } from "@/services/api-client";
import type {
  AdminSupportManagementData,
  AdminSupportSendMessageInput,
  AdminSupportTicket,
  AdminSupportTicketDetail,
  AdminSupportTicketForm,
  AdminSupportTicketThreadItem,
} from "@/types/admin-support-management.types";
import { fetchAdminData, mutateAdminData } from "./create-admin-service";

export const adminSupportManagementService = {
  async getSupportTickets(): Promise<AdminSupportManagementData> {
    return fetchAdminData(
      () => resolveAdminSupportManagement(),
      () =>
        apiClient
          .get<AdminSupportManagementData>(ADMIN_API_ROUTES.support.tickets)
          .then((response) => response.data)
    );
  },

  async getTicketDetail(ticketId: string): Promise<AdminSupportTicketDetail | null> {
    return fetchAdminData(
      () => resolveAdminSupportTicketDetail(ticketId),
      () =>
        apiClient
          .get<AdminSupportTicketDetail>(ADMIN_API_ROUTES.support.ticket(ticketId))
          .then((response) => response.data)
    );
  },

  async createTicket(form: AdminSupportTicketForm): Promise<AdminSupportTicket> {
    return mutateAdminData(
      () => resolveAdminSupportCreateTicket(form),
      () =>
        apiClient
          .post<AdminSupportTicket>(ADMIN_API_ROUTES.support.tickets, form)
          .then((response) => response.data)
    );
  },

  async resolveTicket(ticketId: string): Promise<AdminSupportTicketDetail | null> {
    return mutateAdminData(
      () => resolveAdminSupportResolveTicket(ticketId),
      () =>
        apiClient
          .patch<AdminSupportTicketDetail>(ADMIN_API_ROUTES.support.resolve(ticketId))
          .then((response) => response.data)
    );
  },

  async sendTicketMessage(
    ticketId: string,
    input: AdminSupportSendMessageInput
  ): Promise<AdminSupportTicketThreadItem | null> {
    return mutateAdminData(
      () => resolveAdminSupportSendTicketMessage(ticketId, input.content),
      () =>
        apiClient
          .post<AdminSupportTicketThreadItem>(
            ADMIN_API_ROUTES.support.messages(ticketId),
            input
          )
          .then((response) => response.data)
    );
  },
};
