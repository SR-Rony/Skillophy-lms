import { resolveAdminAccountSettings } from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminAccountSettingsPageData } from "@/types/admin-account-settings.types";
import { adminApiGet } from "./admin-api.helpers";
import { fetchAdminData } from "./create-admin-service";

export const adminAccountSettingsService = {
  async getSettings(): Promise<AdminAccountSettingsPageData> {
    return fetchAdminData(
      () => resolveAdminAccountSettings(),
      () => adminApiGet<AdminAccountSettingsPageData>(ADMIN_API_ROUTES.settings)
    );
  },
};
