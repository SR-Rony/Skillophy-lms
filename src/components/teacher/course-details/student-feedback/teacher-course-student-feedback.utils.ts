import type {
  TeacherCourseFeedbackRatingFilterId,
  TeacherCourseStudentReview,
} from "@/types/teacher-course-details.types";

export function filterStudentFeedbackReviews(
  reviews: TeacherCourseStudentReview[],
  filterId: TeacherCourseFeedbackRatingFilterId
) {
  if (filterId === "all") {
    return reviews;
  }

  const rating = Number(filterId);
  return reviews.filter((review) => review.rating === rating);
}
