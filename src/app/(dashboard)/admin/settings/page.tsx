import { AdminAccountSettingsPage } from "@/components/admin/account-settings";
import { adminAccountSettingsService } from "@/services/admin";

export const metadata = { title: "Account Settings" };

export default async function AdminSettingsPage() {
  const data = await adminAccountSettingsService.getSettings();

  return <AdminAccountSettingsPage data={data} />;
}
