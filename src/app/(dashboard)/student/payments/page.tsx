import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Payments" };

export default function StudentPaymentsPage() {
  return (
    <ModulePlaceholder
      title="Payments"
      description="Billing history and payment methods."
      feature="payments"
    />
  );
}
