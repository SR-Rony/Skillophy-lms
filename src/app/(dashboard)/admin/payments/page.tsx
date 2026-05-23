import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Payments" };

export default function AdminPaymentsPage() {
  return (
    <ModulePlaceholder
      title="Payments"
      description="Transactions, refunds, and revenue."
      feature="payments"
    />
  );
}
