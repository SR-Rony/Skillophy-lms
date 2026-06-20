"use client";

import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Clock, Pencil } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type { StudentLiveQuizTimeOver } from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";

interface StudentLiveQuizTimeOverPageProps {
  timeOver: StudentLiveQuizTimeOver;
}

function QuizTimeOverIllustration() {
  return (
    <div className="relative mx-auto h-[140px] w-[160px] sm:h-[156px] sm:w-[180px]">
      <div className="absolute left-1/2 top-2 h-[118px] w-[92px] -translate-x-1/2 rounded-[18px] bg-[#dbeafe] shadow-[0_12px_30px_rgba(59,130,246,0.15)]">
        <div className="absolute left-4 right-4 top-5 space-y-2.5">
          <div className="h-1.5 rounded-full bg-white/90" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/80" />
          <div className="flex items-center gap-2 pt-1">
            <span className="h-3 w-3 rounded-[3px] border border-white/90" />
            <span className="h-1.5 flex-1 rounded-full bg-white/75" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[3px] border border-white/90" />
            <span className="h-1.5 flex-1 rounded-full bg-white/75" />
          </div>
        </div>
      </div>

      <div className="absolute left-[18%] top-0 flex h-11 w-11 items-center justify-center rounded-full bg-[#fde047] shadow-md">
        <Clock className="h-5 w-5 text-[#1a1a1a]" aria-hidden />
      </div>

      <div className="absolute bottom-2 right-[16%] flex h-10 w-10 rotate-12 items-center justify-center rounded-full bg-primary text-white shadow-md">
        <Pencil className="h-4 w-4" aria-hidden />
      </div>
    </div>
  );
}

export function StudentLiveQuizTimeOverPage({ timeOver }: StudentLiveQuizTimeOverPageProps) {
  return (
    <div className="bg-white pb-10 pt-6 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">
        <Link
          href={ROUTES.student.courseDetails(timeOver.slug)}
          className="mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:mb-6 sm:text-[14px]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-4 border-b border-[#f0ebe8] pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <Heading as="h1" variant="dashboard-section" className="text-[22px] sm:text-[24px]">
                {timeOver.title}
              </Heading>
              <p className="mt-1.5 text-[13px] font-medium text-[#6f6562] sm:text-[14px]">
                You missed the quiz deadline. It was due on{" "}
                <span className="font-bold text-[#1a1a1a]">{timeOver.deadlineDate}</span>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
              {timeOver.previousNav ? (
                <Link
                  href={timeOver.previousNav.href}
                  className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                  Previous
                </Link>
              ) : (
                <span className="text-[#c4c4c4]">Previous</span>
              )}
              {timeOver.nextNav ? (
                <Link
                  href={timeOver.nextNav.href}
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

          <div className="flex flex-col items-center px-2 py-10 text-center sm:py-12 lg:py-14">
            <QuizTimeOverIllustration />
            <h2 className="mt-8 text-[28px] font-bold text-[#1a1a1a] sm:mt-10 sm:text-[32px]">
              {timeOver.heading}
            </h2>
            <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#6f6562] sm:text-[16px]">
              {timeOver.message}
            </p>
            <Link
              href={timeOver.checkAnswersHref}
              className="mt-8 inline-flex min-w-[200px] items-center justify-center rounded-xl bg-primary px-10 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:mt-10 sm:min-w-[240px] sm:py-4 sm:text-[16px]"
            >
              Check Answers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
