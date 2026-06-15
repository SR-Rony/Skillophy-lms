import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Payments" };

export default function StudentPaymentsPage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Payments"
        description="Billing history and payment methods."
        feature="payments"
      />
    </Container>
  );
}
