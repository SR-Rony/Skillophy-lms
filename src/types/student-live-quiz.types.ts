import type { StudentCourseDetailsData } from "@/types/student-course-details.types";

export interface StudentLiveQuizNav {
  id: string;
  title: string;
  href: string;
}

export interface StudentLiveQuizSession {
  quizId: string;
  slug: string;
  title: string;
  submissionDate: string;
  linkedLessonId: string;
  totalQuestions: number;
  passMarkPercent: number;
  totalTimeMinutes: number;
  warningMessage: string;
  previousQuiz?: StudentLiveQuizNav;
  nextQuiz?: StudentLiveQuizNav;
}

export type StudentLiveQuizQuestionType = "single" | "multiple";

export type StudentLiveQuizAnswers = Record<string, string | string[]>;

export interface StudentLiveQuizPlayMeta {
  remainingSeconds: number;
  initialAnswers: StudentLiveQuizAnswers;
}

export interface StudentLiveQuizQuestion {
  id: string;
  number: number;
  question: string;
  type: StudentLiveQuizQuestionType;
  points: number;
  options: string[];
}

export interface StudentLiveQuizAttempt {
  session: StudentLiveQuizSession;
  questions: StudentLiveQuizQuestion[];
}

export interface StudentLiveQuizPlayData {
  attempt: StudentLiveQuizAttempt;
  playMeta: StudentLiveQuizPlayMeta;
}

export interface StudentLiveQuizSessionPageData {
  course: StudentCourseDetailsData;
  session: StudentLiveQuizSession;
}

export interface StudentLiveQuizResultPageData {
  course: StudentCourseDetailsData;
  result: StudentLiveQuizResult;
}

export interface StudentLiveQuizAnswerReviewPageData {
  course: StudentCourseDetailsData;
  review: StudentLiveQuizAnswerReview;
}

export interface StudentLiveQuizResult {
  quizId: string;
  slug: string;
  title: string;
  resultTitle: string;
  participatedOn: string;
  linkedLessonId: string;
  passed: boolean;
  correctAnswers: number;
  totalQuestions: number;
  gradePercent: number;
  timeTakenMinutes: number;
  allottedTimeMinutes: number;
  outcomeTitle: string;
  outcomeMessage: string;
  previousResult?: StudentLiveQuizNav;
  nextResult?: StudentLiveQuizNav;
  checkAnswersHref: string;
}

export type StudentLiveQuizAnswerOptionState =
  | "default"
  | "selected-correct"
  | "selected-incorrect"
  | "correct-unselected";

export type StudentLiveQuizAnswerFeedbackType = "correct" | "incorrect" | "missed";

export interface StudentLiveQuizAnswerFeedback {
  type: StudentLiveQuizAnswerFeedbackType;
  title: string;
  explanation: string;
}

export interface StudentLiveQuizAnswerOption {
  id: string;
  text: string;
  state: StudentLiveQuizAnswerOptionState;
  feedback?: StudentLiveQuizAnswerFeedback;
}

export interface StudentLiveQuizAnswerReviewQuestion {
  id: string;
  number: number;
  question: string;
  type: StudentLiveQuizQuestionType;
  pointsEarned: number;
  pointsTotal: number;
  options: StudentLiveQuizAnswerOption[];
}

export interface StudentLiveQuizAnswerReview {
  quizId: string;
  slug: string;
  title: string;
  answersTitle: string;
  participatedOn: string;
  linkedLessonId: string;
  questions: StudentLiveQuizAnswerReviewQuestion[];
  previousReview?: StudentLiveQuizNav;
  nextReview?: StudentLiveQuizNav;
}
