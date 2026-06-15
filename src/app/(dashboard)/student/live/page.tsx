import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Live Classes" };

export default function StudentLivePage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Live classes"
        description="Join scheduled sessions and view recordings."
        feature="live-class"
      />
    </Container>
  );
}
