import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";
import { AccountSettingsContent } from "./account-settings-content";

interface AccountSettingsPageProps {
  data: StudentAccountSettingsPageData;
}

export function AccountSettingsPage({ data }: AccountSettingsPageProps) {
  return <AccountSettingsContent data={data} />;
}
