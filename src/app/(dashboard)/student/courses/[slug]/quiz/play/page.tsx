import { notFound } from "next/navigation";
import { StudentLiveQuizPlayPage } from "@/components/student/live-quiz/student-live-quiz-play-page";
import { studentLiveQuizService } from "@/services/student-live-quiz.service";

interface StudentLiveQuizPlayRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ quiz?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveQuizPlayRouteProps) {
  const { slug } = await params;
  const { quiz } = await searchParams;
  const data = await studentLiveQuizService.getPlayData(slug, quiz);

  return {
    title: data ? `${data.attempt.session.title} — In Progress` : "Quiz",
  };
}

export default async function StudentLiveQuizPlayRoute({
  params,
  searchParams,
}: StudentLiveQuizPlayRouteProps) {
  const { slug } = await params;
  const { quiz: quizId } = await searchParams;
  const data = await studentLiveQuizService.getPlayData(slug, quizId);

  if (!data) {
    notFound();
  }

  return <StudentLiveQuizPlayPage playData={data} />;
}
