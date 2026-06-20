"use client";

import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type {
  StudentLiveQuizAnswerFeedback,
  StudentLiveQuizAnswerOption,
  StudentLiveQuizAnswerReview,
  StudentLiveQuizAnswerReviewQuestion,
  StudentLiveQuizQuestionType,
} from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentLiveQuizAnswersPageProps {
  review: StudentLiveQuizAnswerReview;
}

function formatPoints(earned: number, total: number) {
  const earnedLabel = Number.isInteger(earned) ? String(earned) : earned.toFixed(2).replace(/\.?0+$/, "");

  return `${earnedLabel}/${total} point${total === 1 ? "" : "s"}`;
}

function OptionIndicator({
  type,
  state,
}: {
  type: StudentLiveQuizQuestionType;
  state: StudentLiveQuizAnswerOption["state"];
}) {
  const isMultiple = type === "multiple";
  const isCorrect = state === "selected-correct" || state === "correct-unselected";
  const isIncorrect = state === "selected-incorrect";

  if (isCorrect) {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
      </span>
    );
  }

  if (isIncorrect) {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-white">
        <X className="h-3 w-3" strokeWidth={3} aria-hidden />
      </span>
    );
  }

  if (isMultiple) {
    return <span className="h-5 w-5 shrink-0 rounded-[4px] border-2 border-[#d1d5db] bg-white" />;
  }

  return <span className="h-5 w-5 shrink-0 rounded-full border-2 border-[#d1d5db] bg-white" />;
}

function AnswerFeedbackBox({ feedback }: { feedback: StudentLiveQuizAnswerFeedback }) {
  const isCorrect = feedback.type === "correct" || feedback.type === "missed";

  return (
    <div
      className={cn(
        "mt-3 rounded-xl border-l-4 px-4 py-4 sm:px-5 sm:py-4",
        isCorrect ? "border-[#16a34a] bg-[#ecfdf3]" : "border-[#dc2626] bg-[#fef2f2]"
      )}
    >
      <div className="flex items-start gap-2.5">
        {isCorrect ? (
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" strokeWidth={3} aria-hidden />
        ) : (
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-white">
            <X className="h-2.5 w-2.5" strokeWidth={3} aria-hidden />
          </span>
        )}
        <div>
          <p
            className={cn(
              "text-[14px] font-bold sm:text-[15px]",
              isCorrect ? "text-[#166534]" : "text-[#dc2626]"
            )}
          >
            {feedback.title}
          </p>
          <p className="mt-2 text-[13px] leading-[1.7] text-[#4a4a4a] sm:text-[14px]">
            {feedback.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}

function AnswerOptionRow({
  option,
  index,
  type,
}: {
  option: StudentLiveQuizAnswerOption;
  index: number;
  type: StudentLiveQuizQuestionType;
}) {
  const optionClassName = cn(
    "flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 sm:px-5 sm:py-4",
    option.state === "selected-correct" && "border-[#16a34a] bg-[#ecfdf3]",
    option.state === "correct-unselected" && "border-[#16a34a] bg-[#ecfdf3]",
    option.state === "selected-incorrect" && "border-[#dc2626] bg-[#fef2f2]",
    option.state === "default" && "border-[#ebe8e6] bg-white"
  );

  return (
    <div>
      <div className={optionClassName}>
        <span className="w-5 shrink-0 text-[14px] font-medium text-[#9ca3af] sm:text-[15px]">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1 text-[14px] leading-snug text-[#1a1a1a] sm:text-[15px]">
          {option.text}
        </span>
        <OptionIndicator type={type} state={option.state} />
      </div>
      {option.feedback && <AnswerFeedbackBox feedback={option.feedback} />}
    </div>
  );
}

function AnswerReviewQuestionBlock({ question }: { question: StudentLiveQuizAnswerReviewQuestion }) {
  return (
    <section className="border-b border-[#f0ebe8] pb-8 last:border-b-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
          Q {question.number}. {question.question}
        </h2>
        <span className="shrink-0 rounded-lg bg-[#f5f5f5] px-2.5 py-1 text-[12px] font-semibold text-[#6f6562] sm:text-[13px]">
          {formatPoints(question.pointsEarned, question.pointsTotal)}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {question.options.map((option, index) => (
          <AnswerOptionRow key={option.id} option={option} index={index} type={question.type} />
        ))}
      </div>
    </section>
  );
}

export function StudentLiveQuizAnswersPage({ review }: StudentLiveQuizAnswersPageProps) {
  return (
    <div className="bg-white pb-10 pt-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">
        <Link
          href={ROUTES.student.courseQuizResult(review.slug, review.quizId)}
          className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:mb-6 sm:text-[14px]"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
                {review.answersTitle}
              </Heading>
              <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
                You participated in this quiz on{" "}
                <span className="font-bold text-[#1a1a1a]">{review.participatedOn}</span>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
              {review.previousReview ? (
                <Link
                  href={review.previousReview.href}
                  className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                  Previous
                </Link>
              ) : (
                <span className="text-[#c4c4c4]">Previous</span>
              )}
              {review.nextReview ? (
                <Link
                  href={review.nextReview.href}
                  className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : (
                <span className="text-[#c4c4c4]">Next</span>
              )}
            </div>
          </div>

          <div className="mt-8 space-y-8 sm:mt-10">
            {review.questions.map((question) => (
              <AnswerReviewQuestionBlock key={question.id} question={question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
