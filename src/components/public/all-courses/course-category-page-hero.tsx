"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/shared";
import { SectionTitle } from "@/components/public/section-title";
import { ROUTES } from "@/constants";

interface CourseCategoryPageHeroProps {
  totalCourses: number;
  title: string;
  description?: string;
}

export function CourseCategoryPageHero({
  totalCourses,
  title,
  description = "Stay ahead of the curve by joining our live batch now! In today's fast-paced world, staying competitive means staying informed and continuously honing your skills.",
}: CourseCategoryPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f2] py-16 sm:py-20 lg:py-[88px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#d9e8f5]/55 blur-3xl" />
        <div className="absolute right-[-6%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#ffe2cc]/50 blur-3xl" />
        <svg
          className="absolute right-[-4%] top-[6%] hidden h-[340px] w-[520px] text-[#e8ddd4]/70 lg:block"
          viewBox="0 0 520 340"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <path
              key={index}
              d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <Link
          href={ROUTES.courses}
          className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8a2525] transition hover:text-[#ff4747]"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          All Courses
        </Link>

        <SectionTitle
          className="max-w-[860px]"
          label={`Total ${totalCourses}+ Courses`}
          title={title}
          description={description}
        />
      </Container>
    </section>
  );
}
