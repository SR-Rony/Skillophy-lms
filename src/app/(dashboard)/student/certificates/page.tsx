import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Certificates" };

export default function StudentCertificatesPage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Certificates"
        description="Download and share your achievements."
        feature="certificates"
      />
    </Container>
  );
}
