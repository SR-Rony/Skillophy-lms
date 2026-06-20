"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Clock } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type {
  StudentLiveQuizAnswers,
  StudentLiveQuizPlayData,
  StudentLiveQuizQuestion,
} from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveQuizPlayPageProps {
  playData: StudentLiveQuizPlayData;
}

type QuizAnswers = StudentLiveQuizAnswers;

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function isQuestionAnswered(question: StudentLiveQuizQuestion, answers: QuizAnswers) {
  const answer = answers[question.id];

  if (question.type === "multiple") {
    return Array.isArray(answer) && answer.length > 0;
  }

  return typeof answer === "string" && answer.length > 0;
}

function OptionIndicator({
  selected,
  type,
}: {
  selected: boolean;
  type: StudentLiveQuizQuestion["type"];
}) {
  if (type === "multiple") {
    return (
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border-2 transition-colors",
          selected ? "border-[#1a1a1a] bg-[#1a1a1a] text-white" : "border-[#d1d5db] bg-white"
        )}
      >
        {selected && <Check className="h-3 w-3" strokeWidth={3} aria-hidden />}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
        selected ? "border-[#1a1a1a]" : "border-[#d1d5db]"
      )}
    >
      {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#1a1a1a]" />}
    </span>
  );
}

function QuizQuestionBlock({
  question,
  answers,
  onSingleSelect,
  onMultipleToggle,
}: {
  question: StudentLiveQuizQuestion;
  answers: QuizAnswers;
  onSingleSelect: (questionId: string, option: string) => void;
  onMultipleToggle: (questionId: string, option: string) => void;
}) {
  const answer = answers[question.id];
  const selectedSingle = typeof answer === "string" ? answer : null;
  const selectedMultiple = Array.isArray(answer) ? answer : [];

  return (
    <section className="border-b border-[#f0ebe8] pb-8 last:border-b-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
          Q {question.number}. {question.question}
        </h2>
        <span className="shrink-0 rounded-lg bg-[#f5f5f5] px-2.5 py-1 text-[12px] font-semibold text-[#6f6562] sm:text-[13px]">
          {question.points} point
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {question.options.map((option, index) => {
          const isSelected =
            question.type === "multiple"
              ? selectedMultiple.includes(option)
              : selectedSingle === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() =>
                question.type === "multiple"
                  ? onMultipleToggle(question.id, option)
                  : onSingleSelect(question.id, option)
              }
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border bg-white px-4 py-3.5 text-left transition-colors sm:px-5 sm:py-4",
                isSelected
                  ? "border-[#1a1a1a]"
                  : "border-[#ebe8e6] hover:border-[#d6d0cc]"
              )}
            >
              <span className="w-5 shrink-0 text-[14px] font-medium text-[#9ca3af] sm:text-[15px]">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1 text-[14px] leading-snug text-[#1a1a1a] sm:text-[15px]">
                {option}
              </span>
              <OptionIndicator selected={isSelected} type={question.type} />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function StudentLiveQuizPlayPage({ playData }: StudentLiveQuizPlayPageProps) {
  const router = useRouter();
  const { attempt, playMeta } = playData;
  const { session, questions } = attempt;

  const [answers, setAnswers] = useState<QuizAnswers>(playMeta.initialAnswers);
  const [secondsLeft, setSecondsLeft] = useState(playMeta.remainingSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      router.push(ROUTES.student.courseQuizResult(session.slug, session.quizId));
    }
  }, [router, secondsLeft, session.quizId, session.slug]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  const answeredCount = useMemo(
    () => questions.filter((question) => isQuestionAnswered(question, answers)).length,
    [answers, questions]
  );

  const progressPercent = Math.round((answeredCount / session.totalQuestions) * 100);

  const handleSingleSelect = (questionId: string, option: string) => {
    setAnswers((current) => ({ ...current, [questionId]: option }));
  };

  const handleMultipleToggle = (questionId: string, option: string) => {
    setAnswers((current) => {
      const existing = current[questionId];
      const selected = Array.isArray(existing) ? existing : [];

      return {
        ...current,
        [questionId]: selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option],
      };
    });
  };

  const handleEndQuiz = () => {
    router.push(ROUTES.student.courseQuizResult(session.slug, session.quizId));
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white pb-4 pt-4 sm:pb-6 sm:pt-6 lg:pb-8 lg:pt-8">
      <div className="mx-auto flex h-[calc(100dvh-9.5rem)] min-h-[520px] w-full max-w-[900px] flex-col px-4 sm:h-[calc(100dvh-11rem)] sm:px-6">
        <Link
          href={ROUTES.student.courseQuiz(session.slug, session.quizId)}
          className="mb-4 inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:mb-5 sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
          <div className="shrink-0 border-b border-[#f0ebe8] bg-white p-5 sm:p-6 lg:p-8 lg:pb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
                {session.title}
              </Heading>

              <div className="flex shrink-0 items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl bg-[#fff0f3] px-4 py-2.5">
                  <Clock className="h-4 w-4 text-primary" aria-hidden />
                  <span className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
                    {formatTime(secondsLeft)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleEndQuiz}
                  className="rounded-xl bg-primary px-5 py-2.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-[15px]"
                >
                  End Quiz
                </button>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
                  {answeredCount} of {session.totalQuestions} questions answered
                </p>
                <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                  {progressPercent}%
                </p>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#ece6e3]">
                <div
                  className="h-full rounded-full bg-[#1a1a1a] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth p-5 sm:p-6 lg:p-8 lg:pt-6">
            <div className="space-y-8">
              {questions.map((question) => (
                <QuizQuestionBlock
                  key={question.id}
                  question={question}
                  answers={answers}
                  onSingleSelect={handleSingleSelect}
                  onMultipleToggle={handleMultipleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
