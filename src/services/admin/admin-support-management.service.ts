import { resolveAdminSupportManagement, resolveAdminSupportTicketDetail } from "@/data/mock/admin-data.resolvers";
import type {
  AdminSupportManagementData,
  AdminSupportTicketDetail,
} from "@/types/admin-support-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminSupportManagementService = {
  async getSupportTickets(): Promise<AdminSupportManagementData> {
    return fetchAdminData(() => resolveAdminSupportManagement());
  },

  async getTicketDetail(ticketId: string): Promise<AdminSupportTicketDetail | null> {
    return fetchAdminData(() => resolveAdminSupportTicketDetail(ticketId));
  },
};
