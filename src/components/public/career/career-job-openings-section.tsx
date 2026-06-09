"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { CategoryFilterBar } from "@/components/public/category-filter-bar";
import { JobOpeningCard } from "@/components/public/career/job-opening-card";
import {
  SectionTitle,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import {
  careerJobCategories,
  careerJobOpenings,
  careerJobOpeningsSectionData,
} from "@/components/public/career/data/career-job-openings.data";
import type { JobCategoryId } from "@/types/career.types";

const gridVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

function getCategoryCounts(jobs: typeof careerJobOpenings) {
  const counts = new Map<JobCategoryId, number>();

  for (const category of careerJobCategories) {
    if (category.id === "all") {
      counts.set("all", jobs.length);
      continue;
    }

    counts.set(
      category.id,
      jobs.filter((job) => job.categoryId === category.id).length,
    );
  }

  return counts;
}

export function CareerJobOpeningsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<JobCategoryId>("all");
  const categoryCounts = useMemo(() => getCategoryCounts(careerJobOpenings), []);

  const filterCategories = useMemo(
    () =>
      careerJobCategories.map((category) => ({
        id: category.id,
        label: category.label,
        itemCount: categoryCounts.get(category.id) ?? 0,
      })),
    [categoryCounts],
  );

  const filteredJobs = useMemo(() => {
    if (activeCategoryId === "all") {
      return careerJobOpenings;
    }

    return careerJobOpenings.filter((job) => job.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  const { label, title, description } = careerJobOpeningsSectionData;

  return (
    <section id="job-openings" className="scroll-mt-24 bg-white py-12 sm:py-16 lg:py-20">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <SectionTitle label={label} title={title} description={description} align="center" />

        <motion.div variants={sectionTitleFadeUpVariants} className="mt-10 lg:mt-12">
          <CategoryFilterBar
            categories={filterCategories}
            activeCategoryId={activeCategoryId}
            onCategoryChange={(categoryId) =>
              setActiveCategoryId(categoryId as JobCategoryId)
            }
            countLabel="positions"
            nextButtonAriaLabel="Show next job category"
          />
        </motion.div>

        {filteredJobs.length > 0 ? (
          <motion.div
            key={activeCategoryId}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-7"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredJobs.map((job) => (
              <JobOpeningCard key={job.id} job={job} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mt-10 rounded-[24px] border border-[#eee1de] bg-white px-6 py-14 text-center"
          >
            <p className="text-[18px] font-bold text-[#282221]">No openings in this category</p>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-[#6f6562]">
              Try another category to explore more opportunities at Skillophy.
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
