import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Assignments" };

export default function StudentAssignmentsPage() {
  return (
    <ModulePlaceholder
      title="Assignments"
      description="View and submit your assignments."
      feature="assignments"
    />
  );
}
