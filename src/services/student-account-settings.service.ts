import { env } from "@/config";
import { resolveStudentAccountSettings } from "@/data/mock/student-account-settings.resolver";
import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";
import { sleep } from "@/utils";

export const studentAccountSettingsService = {
  async getSettings(): Promise<StudentAccountSettingsPageData> {
    if (env.useMockApi) {
      await sleep(200);
      return resolveStudentAccountSettings();
    }

    return resolveStudentAccountSettings();
  },
};
