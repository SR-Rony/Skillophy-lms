import { notFound } from "next/navigation";
import { AdminLearnerProfilePage } from "@/components/admin/learner-profile";
import { adminLearnerProfileService } from "@/services/admin";

export const metadata = { title: "Learner Profile" };

interface AdminLearnerProfileRouteProps {
  params: Promise<{ learnerId: string }>;
}

export default async function AdminLearnerProfileRoute({
  params,
}: AdminLearnerProfileRouteProps) {
  const { learnerId } = await params;
  const data = await adminLearnerProfileService.getLearnerProfile(learnerId);

  if (!data) {
    notFound();
  }

  return <AdminLearnerProfilePage data={data} />;
}
