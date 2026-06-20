import { studentLiveQuizAnswerReviews } from "@/data/mock/student-live-quiz-answers.mock";
import {
  studentLiveQuizPlayDemo,
  studentLiveQuizQuestionsById,
  studentLiveQuizResults,
  studentLiveQuizSessions,
} from "@/data/mock/student-live-quiz.mock";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";
import type {
  StudentLiveQuizAnswerReviewPageData,
  StudentLiveQuizAttempt,
  StudentLiveQuizPlayData,
  StudentLiveQuizPlayMeta,
  StudentLiveQuizResultPageData,
  StudentLiveQuizSessionPageData,
} from "@/types/student-live-quiz.types";

const DEFAULT_QUIZ_ID = "live-l14";

function resolveQuizId(quizId?: string) {
  return quizId ?? DEFAULT_QUIZ_ID;
}

function getLiveCourse(slug: string) {
  const course = getStudentCourseDetails(slug);

  if (!course || course.courseType !== "live") {
    return null;
  }

  return course;
}

function resolveQuestions(quizId: string, fallbackQuizId: string) {
  return (
    studentLiveQuizQuestionsById[quizId] ??
    studentLiveQuizQuestionsById[fallbackQuizId] ??
    studentLiveQuizQuestionsById[DEFAULT_QUIZ_ID]
  );
}

function resolvePlayMeta(slug: string, quizId: string, totalTimeMinutes: number): StudentLiveQuizPlayMeta {
  const demoMeta = studentLiveQuizPlayDemo[slug]?.[quizId];

  if (demoMeta) {
    return demoMeta;
  }

  return {
    remainingSeconds: totalTimeMinutes * 60,
    initialAnswers: {},
  };
}

export function resolveStudentLiveQuizSession(
  slug: string,
  quizId?: string
): StudentLiveQuizSessionPageData | null {
  const course = getLiveCourse(slug);

  if (!course) {
    return null;
  }

  const resolvedQuizId = resolveQuizId(quizId);
  const session =
    studentLiveQuizSessions[slug]?.[resolvedQuizId] ??
    studentLiveQuizSessions[slug]?.[DEFAULT_QUIZ_ID];

  if (!session) {
    return null;
  }

  return { course, session };
}

export function resolveStudentLiveQuizAttempt(
  slug: string,
  quizId?: string
): StudentLiveQuizAttempt | null {
  const data = resolveStudentLiveQuizSession(slug, quizId);

  if (!data) {
    return null;
  }

  const questions = resolveQuestions(quizId ?? data.session.quizId, data.session.quizId);

  if (!questions) {
    return null;
  }

  return {
    session: {
      ...data.session,
      totalQuestions: questions.length,
    },
    questions,
  };
}

export function resolveStudentLiveQuizPlayData(
  slug: string,
  quizId?: string
): StudentLiveQuizPlayData | null {
  const attempt = resolveStudentLiveQuizAttempt(slug, quizId);

  if (!attempt) {
    return null;
  }

  return {
    attempt,
    playMeta: resolvePlayMeta(slug, attempt.session.quizId, attempt.session.totalTimeMinutes),
  };
}

export function resolveStudentLiveQuizResult(
  slug: string,
  quizId?: string
): StudentLiveQuizResultPageData | null {
  const course = getLiveCourse(slug);

  if (!course) {
    return null;
  }

  const resolvedQuizId = resolveQuizId(quizId);
  const result =
    studentLiveQuizResults[slug]?.[resolvedQuizId] ??
    studentLiveQuizResults[slug]?.[DEFAULT_QUIZ_ID];

  if (!result) {
    return null;
  }

  return { course, result };
}

export function resolveStudentLiveQuizAnswerReview(
  slug: string,
  quizId?: string
): StudentLiveQuizAnswerReviewPageData | null {
  const course = getLiveCourse(slug);

  if (!course) {
    return null;
  }

  const resolvedQuizId = resolveQuizId(quizId);
  const review =
    studentLiveQuizAnswerReviews[slug]?.[resolvedQuizId] ??
    studentLiveQuizAnswerReviews[slug]?.[DEFAULT_QUIZ_ID];

  if (!review) {
    return null;
  }

  return { course, review };
}
