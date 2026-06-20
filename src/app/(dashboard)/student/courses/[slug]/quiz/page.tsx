import { notFound } from "next/navigation";
import { StudentLiveQuizPage } from "@/components/student/live-quiz/student-live-quiz-page";
import { getStudentLiveQuizSession } from "@/data/mock/student-live-quiz.mock";

interface StudentLiveQuizRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ quiz?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveQuizRouteProps) {
  const { slug } = await params;
  const { quiz } = await searchParams;
  const data = getStudentLiveQuizSession(slug, quiz);

  return {
    title: data ? `${data.session.title} — Quiz` : "Course Quiz",
  };
}

export default async function StudentLiveQuizRoute({
  params,
  searchParams,
}: StudentLiveQuizRouteProps) {
  const { slug } = await params;
  const { quiz: quizId } = await searchParams;
  const data = getStudentLiveQuizSession(slug, quizId);

  if (!data) {
    notFound();
  }

  return <StudentLiveQuizPage course={data.course} session={data.session} />;
}
