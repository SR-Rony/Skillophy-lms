import { resolveAdminCategoryManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminCategoryManagementData } from "@/types/admin-category-management.types";
import { fetchAdminData } from "./create-admin-service";

export const adminCategoryManagementService = {
  async getCategories(): Promise<AdminCategoryManagementData> {
    return fetchAdminData(() => resolveAdminCategoryManagement());
  },
};
