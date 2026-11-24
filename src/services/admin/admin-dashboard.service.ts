import { resolveAdminDashboard } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminDashboardData } from "@/types/admin-dashboard.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminDashboardService = {
  async getDashboard(): Promise<AdminDashboardData> {
    return fetchAdminData(
      () => resolveAdminDashboard(),
      () => adminApiGet<AdminDashboardData>(ADMIN_API_ROUTES.dashboard)
    );
  },
};
