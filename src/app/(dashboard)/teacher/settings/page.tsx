import { TeacherAccountSettingsPage } from "@/components/teacher/account-settings";
import { teacherAccountSettingsService } from "@/services/teacher";

export const metadata = { title: "Account Settings" };

export default async function TeacherSettingsPage() {
  const data = await teacherAccountSettingsService.getSettings();

  return <TeacherAccountSettingsPage data={data} />;
}
