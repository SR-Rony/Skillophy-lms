import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Settings" };

export default function TeacherSettingsPage() {
  return (
    <ModulePlaceholder
      title="Settings"
      description="Account and teaching preferences."
      feature="settings"
    />
  );
}
