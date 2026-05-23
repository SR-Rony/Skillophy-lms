import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Settings" };

export default function StudentSettingsPage() {
  return (
    <ModulePlaceholder
      title="Settings"
      description="Account and notification preferences."
      feature="settings"
    />
  );
}
