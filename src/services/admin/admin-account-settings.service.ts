import { resolveAdminAccountSettings } from "@/data/mock/admin-data.resolvers";
import type { AdminAccountSettingsPageData } from "@/types/admin-account-settings.types";
import { fetchAdminData } from "./create-admin-service";

export const adminAccountSettingsService = {
  async getSettings(): Promise<AdminAccountSettingsPageData> {
    return fetchAdminData(() => resolveAdminAccountSettings());
  },
};
