import { resolveAdminDashboard } from "@/data/mock/admin-data.resolvers";
import type { AdminDashboardData } from "@/types/admin-dashboard.types";
import { fetchAdminData } from "./create-admin-service";
// import { apiClient } from "@/services/api-client";

export const adminDashboardService = {
  async getDashboard(): Promise<AdminDashboardData> {
    return fetchAdminData(() => resolveAdminDashboard());
    // return apiClient.get<AdminDashboardData>("/admin/dashboard").then((r) => r.data);
  },
};
