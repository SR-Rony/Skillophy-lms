import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Settings" };

export default function StudentSettingsPage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Settings"
        description="Account and notification preferences."
        feature="settings"
      />
    </Container>
  );
}
