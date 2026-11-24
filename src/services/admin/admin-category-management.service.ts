import { resolveAdminCategoryManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminCategoryManagementData } from "@/types/admin-category-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminCategoryManagementService = {
  async getCategories(): Promise<AdminCategoryManagementData> {
    return fetchAdminData(
      () => resolveAdminCategoryManagement(),
      () => adminApiGet<AdminCategoryManagementData>(ADMIN_API_ROUTES.categories)
    );
  },
};
