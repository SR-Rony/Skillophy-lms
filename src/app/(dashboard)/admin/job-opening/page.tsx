import { Suspense } from "react";
import { AdminJobOpeningManagementPage } from "@/components/admin/job-opening-management";
import { adminJobOpeningManagementService } from "@/services/admin";

export const metadata = { title: "Job Opening" };

export default async function AdminJobOpeningPage() {
  const data = await adminJobOpeningManagementService.getJobOpenings();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminJobOpeningManagementPage data={data} />
    </Suspense>
  );
}
