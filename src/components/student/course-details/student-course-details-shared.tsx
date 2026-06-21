"use client";

import { useState } from "react";
import { Heading } from "@/components/shared/heading";
import { Phone, Star } from "lucide-react";
import { StudentCourseRateFeedbackModal } from "@/components/student/course-details/student-course-rate-feedback-modal";
import { cn } from "@/utils";

export function StudentCourseRateCard() {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [previewRating, setPreviewRating] = useState(3);

  function handleStarClick(starValue: number) {
    setPreviewRating(starValue);
    setIsFeedbackModalOpen(true);
  }

  return (
    <>
      <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)]">
        <Heading as="h3" variant="position-card">
          Rate this Course
        </Heading>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af]">
          Your constructive feedback and insights will help other learners
        </p>
        <div className="mt-4 flex gap-1" role="group" aria-label="Rate this course">
          {Array.from({ length: 5 }).map((_, index) => {
            const starValue = index + 1;
            const isActive = starValue <= previewRating;

            return (
              <button
                key={starValue}
                type="button"
                onClick={() => handleStarClick(starValue)}
                className="rounded-md p-0.5 transition-transform hover:scale-105"
                aria-label={`Rate ${starValue} stars`}
              >
                <Star
                  className={cn(
                    "h-7 w-7",
                    isActive
                      ? "fill-[#f97316] text-[#f97316]"
                      : "fill-[#e5e7eb] text-[#e5e7eb] hover:fill-[#fdba74] hover:text-[#fdba74]"
                  )}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
      </div>

      <StudentCourseRateFeedbackModal
        open={isFeedbackModalOpen}
        onOpenChange={setIsFeedbackModalOpen}
        initialRating={previewRating}
      />
    </>
  );
}

export function StudentCourseSupportContact({ phone }: { phone: string }) {
  return (
    <div className="flex items-start gap-3 px-1 py-1">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ecfdf3]">
        <Phone className="h-4 w-4 text-[#22c55e]" aria-hidden />
      </span>
      <p className="pt-1.5 text-[12px] leading-relaxed text-[#6b7280] sm:text-[13px]">
        For any technical issue call{" "}
        <span className="font-semibold text-[#1a1a1a]">{phone}</span> (10 am to 10 pm)
      </p>
    </div>
  );
}
