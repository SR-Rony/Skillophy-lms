import { Star } from "lucide-react";
import { cn } from "@/utils";

interface AdminTeacherProfileCourseRatingProps {
  rating: number;
  className?: string;
}

export function AdminTeacherProfileCourseRating({
  rating,
  className,
}: AdminTeacherProfileCourseRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const isFilled = rating >= starValue - 0.25;

        return (
          <Star
            key={starValue}
            className={cn(
              "h-4 w-4",
              isFilled ? "fill-[#ff9500] text-[#ff9500]" : "fill-none text-[#d1d5db]"
            )}
            strokeWidth={1.75}
            aria-hidden
          />
        );
      })}
    </div>
  );
}
