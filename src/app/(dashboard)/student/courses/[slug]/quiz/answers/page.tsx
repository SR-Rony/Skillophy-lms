import { notFound } from "next/navigation";
import { StudentLiveQuizAnswersPage } from "@/components/student/live-quiz/student-live-quiz-answers-page";
import { studentLiveQuizService } from "@/services/student-live-quiz.service";

interface StudentLiveQuizAnswersRouteProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ quiz?: string }>;
}

export async function generateMetadata({ params, searchParams }: StudentLiveQuizAnswersRouteProps) {
  const { slug } = await params;
  const { quiz } = await searchParams;
  const data = await studentLiveQuizService.getAnswerReview(slug, quiz);

  return {
    title: data ? data.review.answersTitle : "Quiz Answers",
  };
}

export default async function StudentLiveQuizAnswersRoute({
  params,
  searchParams,
}: StudentLiveQuizAnswersRouteProps) {
  const { slug } = await params;
  const { quiz: quizId } = await searchParams;
  const data = await studentLiveQuizService.getAnswerReview(slug, quizId);

  if (!data) {
    notFound();
  }

  return <StudentLiveQuizAnswersPage review={data.review} />;
}
