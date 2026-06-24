import { Suspense } from "react";
import { AdminCategoryManagementPage } from "@/components/admin/category-management";
import { adminCategoryManagementService } from "@/services/admin";

export const metadata = { title: "Categories" };

export default async function AdminCategoriesPage() {
  const data = await adminCategoryManagementService.getCategories();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminCategoryManagementPage data={data} />
    </Suspense>
  );
}
