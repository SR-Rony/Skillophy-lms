"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { PublicCourseCard } from "@/components/public/public-course-card";
import { SectionTitle } from "@/components/public/section-title";
import { affiliateLearningData } from "@/components/public/affiliate/data/affiliate-learning.data";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

export function AffiliateLearningSection() {
  const { label, title, courses, seeAllLabel } = affiliateLearningData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-[6%] h-[340px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,214,170,0.26)_0%,rgba(255,214,170,0.08)_42%,transparent_72%)]" />
        <div className="absolute bottom-[-8%] right-[-3%] hidden h-[320px] w-[500px] text-[#f0c89a]/26 lg:block">
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
        <div className="absolute bottom-[10%] right-[5%] hidden h-[200px] w-[200px] text-[#f5d9a8]/20 xl:block">
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <polygon
                key={index}
                points="100,16 180,74 154,182 46,182 20,74"
                stroke="currentColor"
                strokeWidth="1"
                transform={`rotate(${index * 14} 100 100)`}
                style={{ transformOrigin: "100px 100px" }}
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
        <SectionTitle label={label} title={title} />

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

        <motion.div className="mt-12 flex justify-center sm:mt-14">
          <Button asChild variant="publicCta" size="publicCta">
            <Link href={ROUTES.courses}>{seeAllLabel}</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
