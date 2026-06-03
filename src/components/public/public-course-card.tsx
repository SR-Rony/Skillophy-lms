"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Heart, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

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

interface PublicCourseCardProps {
  course: PublicCourse;
  variant: PublicCourseCardVariant;
}

export function PublicCourseCard({ course, variant }: PublicCourseCardProps) {
  const LessonsIcon = variant === "free" ? Clock : Target;

  return (
    <motion.article
      variants={publicCourseCardVariants}
      className="h-full overflow-hidden rounded-[18px] border border-[#f1dfdc] bg-white shadow-[0_18px_38px_rgba(80,37,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(80,37,31,0.1)]"
    >
      <Link href={`/courses/${course.slug}`} className="block h-full">
        <div className="relative h-[190px] overflow-hidden sm:h-[205px] lg:h-[238px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 336px"
          />
        </div>

        <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
          <div className="mb-3 flex items-center justify-between gap-4 text-[13px] font-medium text-[#4f4747]">
            <span className="inline-flex items-center gap-1.5">
              <LessonsIcon className="h-3.5 w-3.5 text-[#f05555]" />
              {course.lessons} lessons
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff3d7] px-2 py-1 text-[12px] font-extrabold text-[#2b2220]">
              <Star className="h-3.5 w-3.5 fill-[#ffad21] text-[#ffad21]" />
              {course.rating}
            </span>
          </div>

          <h3 className="min-h-[56px] text-[19px] font-black leading-[1.18] tracking-[-0.02em] text-[#282221] sm:text-[21px]">
            {course.title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-[#615857]">
            <Image
              src={course.instructor.avatar}
              alt=""
              width={18}
              height={18}
              unoptimized
              className="rounded-full bg-[#f7ebe8]"
            />
            <span>{course.instructor.name}</span>
          </div>

          <div
            className={`mt-4 flex items-end justify-between gap-4 ${
              variant === "free" ? "border-t border-[#f3ebe8] pt-4" : ""
            }`}
          >
            {variant === "free" ? (
              <span className="text-[22px] font-black leading-none text-[#701d1d]">Free</span>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-black leading-none text-[#321515]">
                  {formatTaka(course.price ?? 0)}
                </span>
                {course.originalPrice != null && (
                  <span className="text-sm font-semibold text-[#9c8c8a] line-through">
                    {formatTaka(course.originalPrice)}
                  </span>
                )}
              </div>
            )}
            <Button
              type="button"
              variant="wishlist"
              size="wishlist"
              aria-label={`Add ${course.title} to wishlist`}
              onClick={(event) => event.preventDefault()}
            >
              <Heart className="h-6 w-6 stroke-[1.7]" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
