import { notFound } from "next/navigation";
import { StudentLiveAssignmentPage } from "@/components/student/live-assignment/student-live-assignment-page";
import { getStudentLiveAssignment } from "@/data/mock/student-live-assignment.mock";

interface StudentLiveAssignmentRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ assignment?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveAssignmentRouteProps) {
  const { slug } = await params;
  const { assignment } = await searchParams;
  const data = getStudentLiveAssignment(slug, assignment);

  return {
    title: data ? `${data.assignment.title} — Assignment` : "Assignment",
  };
}

export default async function StudentLiveAssignmentRoute({
  params,
  searchParams,
}: StudentLiveAssignmentRouteProps) {
  const { slug } = await params;
  const { assignment: assignmentId } = await searchParams;
  const data = getStudentLiveAssignment(slug, assignmentId);

  if (!data) {
    notFound();
  }

  return <StudentLiveAssignmentPage course={data.course} assignment={data.assignment} />;
}
