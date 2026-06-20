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
