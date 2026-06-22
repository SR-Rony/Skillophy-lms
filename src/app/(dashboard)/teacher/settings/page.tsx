import { TeacherAccountSettingsPage } from "@/components/teacher/account-settings";
import { getTeacherAccountSettingsPageData } from "@/data/mock/teacher-account-settings.mock";

export const metadata = { title: "Account Settings" };

export default function TeacherSettingsPage() {
  const data = getTeacherAccountSettingsPageData();

  return <TeacherAccountSettingsPage data={data} />;
}
