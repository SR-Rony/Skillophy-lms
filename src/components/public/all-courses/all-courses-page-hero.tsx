"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

interface AllCoursesPageHeroProps {
  totalCourses: number;
}

export function AllCoursesPageHero({ totalCourses }: AllCoursesPageHeroProps) {
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
        className="relative z-10 max-w-[860px] text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants} className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#a5655c]/70 sm:w-24" />
          <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#8a4a44]">
            Total {totalCourses}+ Courses
          </span>
          <span className="h-px w-16 bg-[#a5655c]/70 sm:w-24" />
        </motion.div>

        <motion.h1
          variants={sectionTitleFadeUpVariants}
          className="mt-6 text-[40px] font-black leading-[1.08] tracking-[-0.045em] text-[#24201f] sm:text-[52px] lg:text-[58px]"
        >
          All Courses
        </motion.h1>

        <motion.p
          variants={sectionTitleFadeUpVariants}
          className="mx-auto mt-5 max-w-[720px] text-sm font-medium leading-7 text-[#5a524f] sm:text-[15px]"
        >
          Stay ahead of the curve by joining our live batch now! In today&apos;s fast-paced world,
          staying competitive means staying informed and continuously honing your skills. Our live
          batch offers you the opportunity to immerse yourself.
        </motion.p>
      </Container>
    </section>
  );
}
