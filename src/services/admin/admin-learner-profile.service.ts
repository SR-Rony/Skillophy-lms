import { resolveAdminLearnerProfile } from "@/data/mock/admin-data.resolvers";
import type { AdminLearnerProfilePageData } from "@/types/admin-learner-profile.types";
import { fetchAdminData } from "./create-admin-service";
// import { apiClient } from "@/services/api-client";

export const adminLearnerProfileService = {
  async getLearnerProfile(learnerId: string): Promise<AdminLearnerProfilePageData | null> {
    return fetchAdminData(() => resolveAdminLearnerProfile(learnerId));
    // return apiClient.get<AdminLearnerProfilePageData>(`/admin/learners/${learnerId}/profile`).then((r) => r.data);
  },
};
