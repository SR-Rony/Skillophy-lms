import { notFound } from "next/navigation";
import { StudentLiveQuizTimeOverPage } from "@/components/student/live-quiz/student-live-quiz-time-over-page";
import { studentLiveQuizService } from "@/services/student-live-quiz.service";

interface StudentLiveQuizTimeOverRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ quiz?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveQuizTimeOverRouteProps) {
  const { slug } = await params;
  const { quiz } = await searchParams;
  const data = await studentLiveQuizService.getTimeOver(slug, quiz);

  return {
    title: data ? `${data.timeOver.title} — Time Over` : "Quiz Time Over",
  };
}

export default async function StudentLiveQuizTimeOverRoute({
  params,
  searchParams,
}: StudentLiveQuizTimeOverRouteProps) {
  const { slug } = await params;
  const { quiz: quizId } = await searchParams;
  const data = await studentLiveQuizService.getTimeOver(slug, quizId);

  if (!data) {
    notFound();
  }

  return <StudentLiveQuizTimeOverPage timeOver={data.timeOver} />;
}
