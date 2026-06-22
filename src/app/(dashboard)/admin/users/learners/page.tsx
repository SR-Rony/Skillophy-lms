import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Learner Management" };

export default function AdminLearnersPage() {
  return (
    <ModulePlaceholder
      title="Learner Management"
      description="Manage learners, enrollments, and access."
      feature="admin/learners"
    />
  );
}
