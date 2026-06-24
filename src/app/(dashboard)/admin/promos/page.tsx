import { Suspense } from "react";
import { AdminPromoManagementPage } from "@/components/admin/promo-management";
import { adminPromoManagementService } from "@/services/admin";

export const metadata = { title: "Promo & Discounts" };

export default async function AdminPromosPage() {
  const data = await adminPromoManagementService.getPromos();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminPromoManagementPage data={data} />
    </Suspense>
  );
}
