import { resolveAdminActivityLogManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminActivityLogManagementData } from "@/types/admin-activity-log.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminActivityLogManagementService = {
  async getActivityLogs(): Promise<AdminActivityLogManagementData> {
    return fetchAdminData(
      () => resolveAdminActivityLogManagement(),
      () => adminApiGet<AdminActivityLogManagementData>(ADMIN_API_ROUTES.activityLog)
    );
  },
};
