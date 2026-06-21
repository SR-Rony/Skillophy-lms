"use client";

import { useMemo, useState } from "react";
import { filterStudentFeedbackReviews } from "./teacher-course-student-feedback.utils";
import { TeacherCourseStudentFeedbackEmptyState } from "./teacher-course-student-feedback-empty-state";
import { TeacherCourseStudentFeedbackRatingSummary } from "./teacher-course-student-feedback-rating-summary";
import { TeacherCourseStudentFeedbackRatingsFilter } from "./teacher-course-student-feedback-ratings-filter";
import { TeacherCourseStudentFeedbackReviewCard } from "./teacher-course-student-feedback-review-card";
import type {
  TeacherCourseFeedbackRatingFilterId,
  TeacherCourseStudentFeedbackTabData,
} from "@/types/teacher-course-details.types";

interface TeacherCourseStudentFeedbackTabProps {
  data: TeacherCourseStudentFeedbackTabData;
}

export function TeacherCourseStudentFeedbackTab({ data }: TeacherCourseStudentFeedbackTabProps) {
  const [selectedFilterId, setSelectedFilterId] = useState<TeacherCourseFeedbackRatingFilterId>("all");

  const hasReviews = data.reviews.length > 0;

  const filteredReviews = useMemo(
    () => filterStudentFeedbackReviews(data.reviews, selectedFilterId),
    [data.reviews, selectedFilterId]
  );

  if (!hasReviews) {
    return (
      <section className="bg-white pb-10 sm:pb-12 md:pb-14">
        <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
          <TeacherCourseStudentFeedbackEmptyState emptyState={data.emptyState} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-start lg:gap-x-6 lg:gap-y-5 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-x-8">
          <TeacherCourseStudentFeedbackRatingsFilter
            options={data.ratingFilterOptions}
            selectedFilterId={selectedFilterId}
            onFilterChange={setSelectedFilterId}
          />

          <div className="hidden lg:block" aria-hidden />

          <div className="space-y-4 sm:space-y-5">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <TeacherCourseStudentFeedbackReviewCard key={review.id} review={review} />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-[#ebe8e6] bg-[#fafafa] px-6 py-10 text-center">
                <p className="text-[14px] font-semibold text-[#1a1a1a]">
                  No reviews for this rating filter
                </p>
                <p className="mt-1 text-[13px] text-[#6b7280]">
                  Try selecting a different rating option.
                </p>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            <TeacherCourseStudentFeedbackRatingSummary
              averageRating={data.averageRating}
              ratingBreakdown={data.ratingBreakdown}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
