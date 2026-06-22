import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Settings" };

export default function AdminSettingsPage() {
  return (
    <ModulePlaceholder
      title="Account Settings"
      description="Global configuration and integrations."
      feature="settings"
    />
  );
}
