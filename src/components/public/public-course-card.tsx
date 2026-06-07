"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Play, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

/** Figma course card specs */
export const PUBLIC_COURSE_CARD = {
  width: 384,
  imageHeight: 280,
  borderRadius: 16,
  contentPadding: {
    top: 16,
    right: 16,
    bottom: 24,
    left: 16,
  },
  contentGap: 8,
} as const;

export interface PublicCourse {
  id: string;
  title: string;
  slug: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  lessons: number;
  rating: number;
  price?: number;
  originalPrice?: number;
}

export type PublicCourseCardVariant = "paid" | "free";

export const publicCourseCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

function formatTaka(amount: number) {
  return `৳${amount}`;
}

export type PublicCourseCardBadge = "live" | "workshop-live";

interface PublicCourseCardProps {
  course: PublicCourse;
  variant: PublicCourseCardVariant;
  badge?: PublicCourseCardBadge;
  className?: string;
}

function LessonsMeta({ lessons }: { lessons: number }) {
  return (
    <span className="inline-flex items-center gap-2 text-[14px] font-normal leading-none text-[#6b7280]">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
        <Play className="ml-[1px] h-[10px] w-[10px] fill-white text-white" aria-hidden />
      </span>
      {lessons} lessons
    </span>
  );
}

function CourseCardSkeleton() {
  return (
    <div className="mx-auto w-full max-w-[384px] self-start overflow-hidden rounded-[16px] border border-[#ebe8e6] bg-white">
      <Skeleton className="h-[280px] w-full rounded-none" />
      <div className="flex flex-col gap-2 px-4 pb-6 pt-4">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-7 w-32" />
      </div>
    </div>
  );
}

export { CourseCardSkeleton };

export function PublicCourseCard({
  course,
  variant,
  badge,
  className,
}: PublicCourseCardProps) {
  return (
    <motion.article
      variants={publicCourseCardVariants}
      className={`mx-auto w-full max-w-[384px] self-start overflow-hidden rounded-[16px] border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(35,25,22,0.09)] ${className ?? ""}`}
    >
      <Link href={`/courses/${course.slug}`} className="block font-sans">
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-t-[16px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition duration-500 hover:scale-[1.02]"
            sizes="(max-width: 640px) 92vw, 384px"
          />
          {badge === "live" && (
            <span className="absolute left-3 top-3 rounded-[6px] bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Live
            </span>
          )}
          {badge === "workshop-live" && (
            <span className="absolute bottom-3 left-3 rounded-[6px] bg-[#ffca18] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2b2220]">
              Live
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[8px] px-4 pb-6 pt-4">
          <div className="flex items-center justify-between gap-3">
            <LessonsMeta lessons={course.lessons} />
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#fff4e5] px-[10px] py-[4px] text-[13px] font-bold leading-none text-[#1a1a1a]">
              <Star className="h-[14px] w-[14px] fill-[#ff9500] text-[#ff9500]" aria-hidden />
              {course.rating.toFixed(1)}
            </span>
          </div>

          <h3 className="text-[20px] font-bold leading-[1.35] tracking-[-0.01em] text-[#1a1a1a]">
            {course.title}
          </h3>

          <div className="flex items-center gap-2">
            <Image
              src={course.instructor.avatar}
              alt=""
              width={28}
              height={28}
              unoptimized
              className="h-7 w-7 shrink-0 rounded-full bg-[#f3f4f6] object-cover"
            />
            <span className="text-[14px] font-normal leading-none text-[#6b7280]">
              {course.instructor.name}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3">
            {variant === "free" ? (
              <span className="text-[24px] font-bold leading-none text-[#4a0e0e]">Free</span>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-[24px] font-bold leading-none text-[#4a0e0e]">
                  {formatTaka(course.price ?? 0)}
                </span>
                {course.originalPrice != null && (
                  <span className="text-[15px] font-normal leading-none text-[#9ca3af] line-through">
                    {formatTaka(course.originalPrice)}
                  </span>
                )}
              </div>
            )}
            <button
              type="button"
              className="shrink-0 rounded-full p-1 text-[#1a1a1a] transition-colors hover:text-primary"
              aria-label={`Add ${course.title} to wishlist`}
              onClick={(event) => event.preventDefault()}
            >
              <Heart className="h-[22px] w-[22px] stroke-[1.5] fill-none" aria-hidden />
            </button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
