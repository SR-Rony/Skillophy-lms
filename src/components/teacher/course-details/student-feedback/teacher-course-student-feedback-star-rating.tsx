import { Star } from "lucide-react";
import { cn } from "@/utils";

const sizeClasses = {
  sm: "h-3.5 w-3.5",
  md: "h-[18px] w-[18px]",
  lg: "h-5 w-5",
  xl: "h-7 w-7",
};

interface TeacherCourseFeedbackStarRatingProps {
  rating: number;
  max?: number;
  size?: keyof typeof sizeClasses;
  className?: string;
}

export function TeacherCourseFeedbackStarRating({
  rating,
  max = 5,
  size = "md",
  className,
}: TeacherCourseFeedbackStarRatingProps) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, index) => {
        const isFilled = index < rating;

        return (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              isFilled ? "fill-[#f59e0b] text-[#f59e0b]" : "fill-[#e5e7eb] text-[#e5e7eb]"
            )}
            strokeWidth={1.5}
            aria-hidden
          />
        );
      })}
    </div>
  );
}
