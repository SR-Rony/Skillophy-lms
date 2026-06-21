import { studentLiveQuizAnswerReviews } from "@/data/mock/student-live-quiz-answers.mock";
import {
  studentLiveQuizPlayDemo,
  studentLiveQuizQuestionsById,
  studentLiveQuizResults,
  studentLiveQuizSessions,
  studentLiveQuizTimeOverDemo,
} from "@/data/mock/student-live-quiz.mock";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import type {
  StudentLiveQuizAnswerReviewPageData,
  StudentLiveQuizAttempt,
  StudentLiveQuizPlayData,
  StudentLiveQuizPlayMeta,
  StudentLiveQuizResultPageData,
  StudentLiveQuizSessionPageData,
  StudentLiveQuizTimeOverPageData,
} from "@/types/student-live-quiz.types";

const DEFAULT_QUIZ_ID = "live-l14";

function getLearningCourse(slug: string) {
  const course = getStudentCourseDetails(slug);

  if (!course || (course.courseType !== "live" && course.courseType !== "recorded")) {
    return null;
  }

  return course;
}

function getDefaultQuizId(course: StudentCourseDetailsData) {
  return course.courseType === "recorded" ? "lesson-quiz-intro" : DEFAULT_QUIZ_ID;
}

function resolveQuizId(quizId: string | undefined, course: StudentCourseDetailsData) {
  return quizId ?? getDefaultQuizId(course);
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
  const course = getLearningCourse(slug);

  if (!course) {
    return null;
  }

  const defaultQuizId = getDefaultQuizId(course);
  const resolvedQuizId = resolveQuizId(quizId, course);
  const session =
    studentLiveQuizSessions[slug]?.[resolvedQuizId] ??
    studentLiveQuizSessions[slug]?.[defaultQuizId];

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
  const course = getLearningCourse(slug);

  if (!course) {
    return null;
  }

  const defaultQuizId = getDefaultQuizId(course);
  const resolvedQuizId = resolveQuizId(quizId, course);
  const result =
    studentLiveQuizResults[slug]?.[resolvedQuizId] ??
    studentLiveQuizResults[slug]?.[defaultQuizId];

  if (!result) {
    return null;
  }

  return { course, result };
}

export function resolveStudentLiveQuizAnswerReview(
  slug: string,
  quizId?: string
): StudentLiveQuizAnswerReviewPageData | null {
  const course = getLearningCourse(slug);

  if (!course) {
    return null;
  }

  const defaultQuizId = getDefaultQuizId(course);
  const resolvedQuizId = resolveQuizId(quizId, course);
  const review =
    studentLiveQuizAnswerReviews[slug]?.[resolvedQuizId] ??
    studentLiveQuizAnswerReviews[slug]?.[defaultQuizId];

  if (!review) {
    return null;
  }

  return { course, review };
}

export function resolveStudentLiveQuizTimeOver(
  slug: string,
  quizId?: string
): StudentLiveQuizTimeOverPageData | null {
  const course = getLearningCourse(slug);

  if (!course) {
    return null;
  }

  const defaultQuizId = getDefaultQuizId(course);
  const resolvedQuizId = resolveQuizId(quizId, course);
  const timeOver =
    studentLiveQuizTimeOverDemo[slug]?.[resolvedQuizId] ??
    studentLiveQuizTimeOverDemo[slug]?.[defaultQuizId];

  if (!timeOver) {
    return null;
  }

  return { course, timeOver };
}
