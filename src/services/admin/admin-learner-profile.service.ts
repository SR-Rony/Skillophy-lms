import { resolveAdminLearnerProfile } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminLearnerProfilePageData } from "@/types/admin-learner-profile.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminLearnerProfileService = {
  async getLearnerProfile(learnerId: string): Promise<AdminLearnerProfilePageData | null> {
    return fetchAdminData(
      () => resolveAdminLearnerProfile(learnerId),
      () => adminApiGet<AdminLearnerProfilePageData>(ADMIN_API_ROUTES.learner(learnerId))
    );
  },
};
