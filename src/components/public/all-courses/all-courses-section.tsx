"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { AllCoursesCategoryFilter } from "./all-courses-category-filter";
import { Button } from "@/components/ui/button";
import { PublicCourseCard } from "@/components/public/public-course-card";
import { SectionTitle } from "@/components/public/section-title";
import { ROUTES } from "@/constants";
import {
  homepageAllCoursesCategories,
  type CategoryId,
} from "@/data/mock/all-courses-categories";

const courseGridVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const, staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

export function AllCoursesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>("popular");

  const activeCategory = useMemo(
    () =>
      homepageAllCoursesCategories.find(({ id }) => id === activeCategoryId) ??
      homepageAllCoursesCategories[0],
    [activeCategoryId]
  );

  return (
    <section className="bg-[#f7f7f6] py-16 sm:py-20 lg:py-[92px]">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <SectionTitle
          className="max-w-[780px]"
          label="All Courses"
          title="Expand Knowledge, Master New Skills and Enjoy the Journey"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <motion.div className="mt-10">
          <AllCoursesCategoryFilter
            categories={homepageAllCoursesCategories}
            activeCategoryId={activeCategoryId}
            onCategoryChange={setActiveCategoryId}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            variants={courseGridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.courses.map((course) => (
              <PublicCourseCard
                key={course.id}
                course={course}
                variant={activeCategory.variant}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={courseGridVariants}
          className="mt-12 flex justify-center"
        >
          <Button asChild variant="publicCta" size="publicCta">
            <Link href={ROUTES.courseCategory(activeCategoryId)}>
              See All {activeCategory.filterLabel ?? activeCategory.label}
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
