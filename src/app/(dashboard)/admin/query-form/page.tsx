import { Suspense } from "react";
import { AdminQueryFormManagementPage } from "@/components/admin/query-form-management";
import { adminQueryFormManagementService } from "@/services/admin";

export const metadata = { title: "Query Form" };

export default async function AdminQueryFormPage() {
  const data = await adminQueryFormManagementService.getQueryForms();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminQueryFormManagementPage data={data} />
    </Suspense>
  );
}
