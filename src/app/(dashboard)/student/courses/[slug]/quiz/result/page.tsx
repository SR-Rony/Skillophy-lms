import { notFound } from "next/navigation";
import { StudentLiveQuizResultPage } from "@/components/student/live-quiz/student-live-quiz-result-page";
import { studentLiveQuizService } from "@/services/student-live-quiz.service";

interface StudentLiveQuizResultRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ quiz?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveQuizResultRouteProps) {
  const { slug } = await params;
  const { quiz } = await searchParams;
  const data = await studentLiveQuizService.getResult(slug, quiz);

  return {
    title: data ? `${data.result.resultTitle}` : "Quiz Result",
  };
}

export default async function StudentLiveQuizResultRoute({
  params,
  searchParams,
}: StudentLiveQuizResultRouteProps) {
  const { slug } = await params;
  const { quiz: quizId } = await searchParams;
  const data = await studentLiveQuizService.getResult(slug, quizId);

  if (!data) {
    notFound();
  }

  return <StudentLiveQuizResultPage course={data.course} result={data.result} />;
}
