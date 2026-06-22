import { resolveAdminLearnerManagement } from "@/data/mock/admin-data.resolvers";
import type { AdminLearnerManagementData } from "@/types/admin-learner-management.types";
import { fetchAdminData } from "./create-admin-service";
// import { apiClient } from "@/services/api-client";

export const adminLearnerManagementService = {
  async getLearners(): Promise<AdminLearnerManagementData> {
    return fetchAdminData(() => resolveAdminLearnerManagement());
    // return apiClient.get<AdminLearnerManagementData>("/admin/learners").then((r) => r.data);
  },
};
