"use client";

import Image from "next/image";
import { TeacherCourseFeedbackStarRating } from "./teacher-course-student-feedback-star-rating";
import type { TeacherCourseStudentReview } from "@/types/teacher-course-details.types";

interface TeacherCourseStudentFeedbackReviewCardProps {
  review: TeacherCourseStudentReview;
}

export function TeacherCourseStudentFeedbackReviewCard({
  review,
}: TeacherCourseStudentFeedbackReviewCardProps) {
  return (
    <article className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_1px_2px_rgba(35,25,22,0.04)] sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#ece6e3] bg-[#fafafa] sm:h-12 sm:w-12">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            unoptimized
            className="object-cover"
            sizes="48px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[15px] font-bold leading-tight text-[#1a1a1a] sm:text-[16px]">
                {review.name}
              </p>
              <p className="mt-1 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
                {review.role}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-end">
              <TeacherCourseFeedbackStarRating rating={review.rating} size="md" />
              <span className="mt-1.5 text-[11px] font-medium text-[#9ca3af] sm:text-[12px]">
                {review.reviewedAt}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-[1.7] text-[#374151] sm:mt-5 sm:text-[14px]">
        {review.comment}
      </p>
    </article>
  );
}
