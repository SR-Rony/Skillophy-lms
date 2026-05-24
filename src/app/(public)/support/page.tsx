import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <Container className="py-12">
      <ModulePlaceholder
        title="Help Center"
        description="FAQs, tickets, and contact support."
        feature="support"
      />
    </Container>
  );
}
