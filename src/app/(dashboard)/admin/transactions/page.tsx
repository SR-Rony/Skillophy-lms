import { Suspense } from "react";
import { AdminTransactionManagementPage } from "@/components/admin/transaction-management";
import { adminTransactionManagementService } from "@/services/admin";

export const metadata = { title: "Transaction" };

export default async function AdminTransactionsPage() {
  const data = await adminTransactionManagementService.getTransactions();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminTransactionManagementPage data={data} />
    </Suspense>
  );
}
