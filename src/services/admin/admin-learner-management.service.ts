import { resolveAdminLearnerManagement } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminLearnerManagementData } from "@/types/admin-learner-management.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminLearnerManagementService = {
  async getLearners(): Promise<AdminLearnerManagementData> {
    return fetchAdminData(
      () => resolveAdminLearnerManagement(),
      () => adminApiGet<AdminLearnerManagementData>(ADMIN_API_ROUTES.learners)
    );
  },
};
