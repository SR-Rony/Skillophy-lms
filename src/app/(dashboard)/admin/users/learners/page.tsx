import { Suspense } from "react";
import { AdminLearnerManagementPage } from "@/components/admin/learner-management";
import { adminLearnerManagementService } from "@/services/admin";

export const metadata = { title: "Learner Management" };

export default async function AdminLearnersPage() {
  const data = await adminLearnerManagementService.getLearners();

  return (
    <Suspense fallback={<div className="min-h-[320px] rounded-2xl bg-white" />}>
      <AdminLearnerManagementPage data={data} />
    </Suspense>
  );
}
