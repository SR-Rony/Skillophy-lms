import { Star } from "lucide-react";
import { TeacherCourseFeedbackStarRating } from "./teacher-course-student-feedback-star-rating";
import type { TeacherCourseRatingBreakdown } from "@/types/teacher-course-details.types";

interface TeacherCourseStudentFeedbackRatingSummaryProps {
  averageRating: number;
  ratingBreakdown: TeacherCourseRatingBreakdown[];
}

export function TeacherCourseStudentFeedbackRatingSummary({
  averageRating,
  ratingBreakdown,
}: TeacherCourseStudentFeedbackRatingSummaryProps) {
  const orderedBreakdown = [5, 4, 3, 2, 1].map(
    (stars) =>
      ratingBreakdown.find((item) => item.stars === stars) ?? {
        stars: stars as 5 | 4 | 3 | 2 | 1,
        percent: 0,
      }
  );

  return (
    <aside className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[14px] font-semibold text-[#6b7280] sm:text-[15px]">Course Rating</h2>

        <div className="flex items-center gap-2">
          <Star className="h-7 w-7 fill-[#f59e0b] text-[#f59e0b] sm:h-8 sm:w-8" strokeWidth={1.5} aria-hidden />
          <span className="text-[32px] font-bold leading-none text-primary sm:text-[36px]">
            {averageRating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3 sm:space-y-3.5">
        {orderedBreakdown.map((item) => (
          <div key={item.stars} className="flex items-center gap-2.5 sm:gap-3">
            <div className="h-[6px] min-w-0 flex-1 overflow-hidden rounded-full bg-[#ececec]">
              <div
                className="h-full rounded-full bg-[#1a1a1a] transition-all"
                style={{ width: `${item.percent}%` }}
              />
            </div>

            <TeacherCourseFeedbackStarRating rating={item.stars} size="sm" className="shrink-0" />

            <span className="w-9 shrink-0 text-right text-[12px] font-semibold text-[#6b7280] sm:w-10 sm:text-[13px]">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
