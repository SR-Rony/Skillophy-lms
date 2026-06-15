import { Container } from "@/components/shared";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";

export const metadata = { title: "Assignments" };

export default function StudentAssignmentsPage() {
  return (
    <Container className="py-8">
      <ModulePlaceholder
        title="Assignments"
        description="View and submit your assignments."
        feature="assignments"
      />
    </Container>
  );
}
