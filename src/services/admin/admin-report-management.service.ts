import { resolveAdminReportDetail, resolveAdminReportManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type {
  AdminReportDetail,
  AdminReportManagementData,
} from "@/types/admin-report-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminReportManagementService = {
  async getReports(): Promise<AdminReportManagementData> {
    return fetchAdminData(
      () => resolveAdminReportManagement(),
      () => adminApiGet<AdminReportManagementData>(ADMIN_API_ROUTES.reports)
    );
  },

  async getReportDetail(reportId: string): Promise<AdminReportDetail | null> {
    return fetchAdminData(
      () => resolveAdminReportDetail(reportId),
      () => adminApiGet<AdminReportDetail>(ADMIN_API_ROUTES.report(reportId))
    );
  },
};
