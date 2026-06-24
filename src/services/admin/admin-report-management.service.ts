import { resolveAdminReportDetail, resolveAdminReportManagement } from "@/data/mock/admin-data.resolvers";
import type {
  AdminReportDetail,
  AdminReportManagementData,
} from "@/types/admin-report-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminReportManagementService = {
  async getReports(): Promise<AdminReportManagementData> {
    return fetchAdminData(() => resolveAdminReportManagement());
  },

  async getReportDetail(reportId: string): Promise<AdminReportDetail | null> {
    return fetchAdminData(() => resolveAdminReportDetail(reportId));
  },
};
