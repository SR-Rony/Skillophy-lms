import { StudentAssignmentsPage } from "@/components/student/student-assignments-page";
import { getStudentAssignmentsPageData } from "@/data/mock/student-assignments.mock";

export const metadata = { title: "Assignments" };

export default function StudentAssignmentsRoute() {
  const courseGroups = getStudentAssignmentsPageData();

  return <StudentAssignmentsPage courseGroups={courseGroups} />;
}
