"use client";

import { Heading } from "@/components/shared/heading";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import {
  sectionLabelClassName,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import { CourseDetailsHeroBackground } from "@/components/public/course-details/hero/course-details-hero-background";
import { CourseDetailsHeroVideoPreview } from "@/components/public/course-details/hero/course-details-hero-video-preview";
import { CourseDetailsStarRating } from "@/components/public/course-details/hero/course-details-star-rating";
import type { CourseDetailsHeroData } from "@/components/public/course-details/types";
import { cn } from "@/utils";

interface CourseDetailsHeroProps {
  hero: CourseDetailsHeroData;
}

export function CourseDetailsHero({ hero }: CourseDetailsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <CourseDetailsHeroBackground />

      <Container
        as={motion.div}
        className="relative z-10 pb-6 pt-14 text-center sm:pt-16 lg:pt-[72px] lg:pb-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants} className="mx-auto max-w-[920px]">
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span className="h-px w-14 bg-[#a5655c] sm:w-16" aria-hidden />
            <span className={cn(sectionLabelClassName, "text-[#8a3a35]")}>
              {hero.levelLabel}
            </span>
            <span className="h-px w-14 bg-[#a5655c] sm:w-16" aria-hidden />
          </div>

          <Heading as="h1" variant="page-hero-centered">
            {hero.title}
          </Heading>

          <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.55] text-[#4a4a4a] sm:mt-6 sm:text-[17px]">
            {hero.description}
          </p>
        </motion.div>

        <motion.div variants={sectionTitleFadeUpVariants} className="mt-7 sm:mt-8">
          <CourseDetailsStarRating
            rating={hero.rating}
            ratingCount={hero.ratingCount}
          />
        </motion.div>
      </Container>

      <div className="relative z-20 mt-8 pb-12 sm:mt-10 sm:pb-14 lg:mt-12 lg:pb-16">
        <CourseDetailsHeroVideoPreview image={hero.previewImage} title={hero.title} />
      </div>
    </section>
  );
}
