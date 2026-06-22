import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Transaction" };

export default function AdminTransactionsPage() {
  return (
    <ModulePlaceholder
      title="Transaction"
      description="View and manage platform transactions and payouts."
      feature="admin/transactions"
    />
  );
}
