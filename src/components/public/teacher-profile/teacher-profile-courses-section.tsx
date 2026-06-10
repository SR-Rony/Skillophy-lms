"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { PublicCourseCard } from "@/components/public/public-course-card";
import {
  sectionHeadingClassName,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import { teacherProfileCoursesData } from "@/components/public/teacher-profile/data/teacher-profile-courses.data";
import { cn } from "@/utils";

export function TeacherProfileCoursesSection() {
  const { title, description, courses } = teacherProfileCoursesData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-[6%] h-[340px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,214,170,0.2)_0%,rgba(255,214,170,0.06)_42%,transparent_72%)]" />
        <div className="absolute bottom-[-8%] right-[-3%] hidden h-[320px] w-[500px] text-[#f0c89a]/22 lg:block">
          <svg viewBox="0 0 500 320" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <path
                key={index}
                d={`M${16 + index * 8} ${260 - index * 8} C ${88 + index * 7} ${92 - index * 2}, ${230 + index * 5} ${84 + index * 3}, ${490 - index * 6} ${242 - index * 4}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto max-w-[760px] text-center"
        >
          <h2 className={cn(sectionHeadingClassName, "text-[32px] sm:text-[40px] lg:text-[48px]")}>
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.5] text-[#5f5553]">
            {description}
          </p>
        </motion.div>

        <div className="mt-12 grid justify-items-center gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {courses.map((course) => (
            <PublicCourseCard
              key={course.id}
              course={course}
              variant="paid"
              className="mx-0 w-full max-w-none"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
