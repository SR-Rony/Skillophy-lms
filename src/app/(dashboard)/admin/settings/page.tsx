import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Settings" };

export default function AdminSettingsPage() {
  return (
    <ModulePlaceholder
      title="Platform settings"
      description="Global configuration and integrations."
      feature="settings"
    />
  );
}
