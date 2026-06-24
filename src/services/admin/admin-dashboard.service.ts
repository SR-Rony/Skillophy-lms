import { resolveAdminDashboard } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminDashboardData } from "@/types/admin-dashboard.types";
import { apiClient } from "@/services/api-client";
import { fetchAdminData } from "./create-admin-service";

export const adminDashboardService = {
  async getDashboard(): Promise<AdminDashboardData> {
    return fetchAdminData(
      () => resolveAdminDashboard(),
      () => apiClient.get<AdminDashboardData>(ADMIN_API_ROUTES.dashboard).then((response) => response.data)
    );
  },
};
