import { Star } from "lucide-react";
import { cn } from "@/utils";

interface CourseDetailsStarRatingProps {
  rating: number;
  ratingCount: number;
  className?: string;
}

export function CourseDetailsStarRating({
  rating,
  ratingCount,
  className,
}: CourseDetailsStarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating - fullStars >= 0.3;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 sm:gap-2.5",
        className
      )}
    >
      <div className="flex items-center gap-1" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => {
          const isFull = index < fullStars;
          const isOutlined =
            !isFull && hasPartialStar && index === fullStars;

          return (
            <Star
              key={index}
              className={cn(
                "h-[22px] w-[22px] sm:h-6 sm:w-6",
                isFull
                  ? "fill-[#ffa500] text-[#ffa500]"
                  : isOutlined
                    ? "fill-transparent text-[#ffa500]"
                    : "fill-transparent text-[#e5d5c8]"
              )}
              strokeWidth={isOutlined || isFull ? 1.5 : 1.25}
            />
          );
        })}
      </div>
      <span className="text-[17px] font-bold text-[#1a1a1a] sm:text-lg">
        {rating.toFixed(1)}
      </span>
      <span className="text-[15px] font-medium text-[#4a4a4a] sm:text-base">
        ({ratingCount.toLocaleString()} ratings)
      </span>
    </div>
  );
}
