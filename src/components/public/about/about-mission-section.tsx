"use client";

import { Heading } from "@/components/shared/heading";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import {
  MissionGradientPanel,
  MissionRocketIcon,
} from "@/components/public/about/about-mission-visuals";
import { aboutMissionSectionData } from "@/components/public/about/data/about-mission-section.data";
import {
  sectionLabelClassName,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import { cn } from "@/utils";

export function AboutMissionSection() {
  const { label, title } = aboutMissionSectionData;

  return (
    <section className="relative overflow-hidden bg-[#fdf8f6] py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[42%] rounded-t-[32px] bg-gradient-to-br from-[#ffb347] via-[#ff7a45] to-[#ff4747] lg:hidden"
        aria-hidden
      />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="relative min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]">
          <MissionGradientPanel />

          <motion.article
            variants={sectionTitleFadeUpVariants}
            className="relative z-10 mx-auto w-full max-w-[920px] rounded-[24px] bg-white px-7 py-9 shadow-[0_18px_48px_rgba(80,37,31,0.08)] sm:px-9 sm:py-10 lg:ml-6 lg:mr-auto lg:px-12 lg:py-12 xl:ml-10"
          >
            <div className="mb-6 flex items-center gap-3 sm:mb-7">
              <span className={cn(sectionLabelClassName, "font-bold text-primary-dark")}>
                {label}
              </span>
              <span className="h-px w-10 bg-primary/70 sm:w-14" aria-hidden />
            </div>

            <Heading as="h2" variant="section" className="max-w-[760px] pr-16 text-left text-[28px] sm:pr-20 sm:text-[32px] lg:text-[36px] lg:leading-[1.25]">
              {title}
            </Heading>

            <MissionRocketIcon className="pointer-events-none absolute bottom-6 right-6 h-14 w-14 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16" />
          </motion.article>
        </div>
      </Container>
    </section>
  );
}
