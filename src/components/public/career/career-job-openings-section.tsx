"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { CategoryFilterBar } from "@/components/public/category-filter-bar";
import { JobOpeningCard } from "@/components/public/career/job-opening-card";
import { JobOpeningsEmptyState } from "@/components/public/career/job-openings-empty-state";
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

function JobOpeningsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-[8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[#ffe2cc]/35 blur-[90px]" />
      <div className="absolute right-[-6%] bottom-[8%] h-[300px] w-[300px] rounded-full bg-[#fff0eb]/55 blur-[100px]" />
    </div>
  );
}

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

function getEmptyStateLabel(categoryId: JobCategoryId) {
  const category = careerJobCategories.find((item) => item.id === categoryId);
  return category?.emptyStateLabel ?? category?.label.toLowerCase() ?? "this category";
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
  const emptyStateLabel = getEmptyStateLabel(activeCategoryId);

  return (
    <section
      id="job-openings"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffcf9] py-12 sm:py-16 lg:py-20"
    >
      <JobOpeningsBackground />

      <Container
        as={motion.div}
        className="relative z-10"
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
            key={`empty-${activeCategoryId}`}
            variants={sectionTitleFadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 sm:mt-14 lg:mt-16"
          >
            <JobOpeningsEmptyState categoryLabel={emptyStateLabel} />
          </motion.div>
        )}
      </Container>
    </section>
  );
}
