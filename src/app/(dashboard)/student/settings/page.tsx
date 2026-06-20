import { AccountSettingsPage } from "@/components/student/account-settings";
import { studentAccountSettingsService } from "@/services/student-account-settings.service";

export async function generateMetadata() {
  const data = await studentAccountSettingsService.getSettings();
  return { title: data.title };
}

export default async function StudentSettingsPage() {
  const data = await studentAccountSettingsService.getSettings();
  return <AccountSettingsPage data={data} />;
}
