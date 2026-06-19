import { notFound } from "next/navigation";
import { StudentLiveAssignmentFeedbackPage } from "@/components/student/live-assignment/student-live-assignment-feedback-page";
import { getStudentLiveAssignmentFeedback } from "@/data/mock/student-live-assignment-feedback.mock";

interface StudentLiveAssignmentFeedbackRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ assignment?: string }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: StudentLiveAssignmentFeedbackRouteProps) {
  const { slug } = await params;
  const { assignment } = await searchParams;
  const data = getStudentLiveAssignmentFeedback(slug, assignment);

  return {
    title: data ? `${data.feedback.title} — Feedback` : "Assignment Feedback",
  };
}

export default async function StudentLiveAssignmentFeedbackRoute({
  params,
  searchParams,
}: StudentLiveAssignmentFeedbackRouteProps) {
  const { slug } = await params;
  const { assignment: assignmentId } = await searchParams;
  const data = getStudentLiveAssignmentFeedback(slug, assignmentId);

  if (!data) {
    notFound();
  }

  return <StudentLiveAssignmentFeedbackPage course={data.course} feedback={data.feedback} />;
}
