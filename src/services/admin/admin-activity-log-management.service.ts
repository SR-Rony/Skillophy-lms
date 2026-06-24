import { resolveAdminActivityLogManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminActivityLogManagementData } from "@/types/admin-activity-log.types";
import { fetchAdminData } from "./create-admin-service";

export const adminActivityLogManagementService = {
  async getActivityLogs(): Promise<AdminActivityLogManagementData> {
    return fetchAdminData(() => resolveAdminActivityLogManagement());
  },
};
