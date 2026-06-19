"use client";

import { Heading } from "@/components/shared/heading";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { SeamCornerImageFrame } from "@/components/public/seam-corner-image-frame";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { teacherHowItWorksData } from "@/components/public/teachers/data/teacher-how-it-works.data";

export function TeacherHowItWorksSection() {
  const { title, description, imageSrc, imageAlt, steps } = teacherHowItWorksData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[10%] hidden h-[420px] w-[460px] text-primary/8 lg:block">
          <svg viewBox="0 0 460 420" fill="none" className="h-full w-full" aria-hidden="true">
            <g transform="translate(80, 210) rotate(14)">
              {Array.from({ length: 12 }).map((_, index) => (
                <ellipse
                  key={index}
                  cx="0"
                  cy="0"
                  rx={48 + index * 28}
                  ry={24 + index * 14}
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              ))}
            </g>
          </svg>
        </div>
        <div className="absolute bottom-[-12%] left-[-6%] hidden h-[320px] w-[560px] text-[#eedb96]/30 lg:block">
          <svg viewBox="0 0 560 320" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <path
                key={index}
                d={`M${14 + index * 7} ${250 - index * 7} C ${80 + index * 6} ${90 - index * 2}, ${220 + index * 4} ${82 + index * 3}, ${530 - index * 5} ${238 - index * 4}`}
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
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-16">
          <motion.div variants={sectionTitleFadeUpVariants}>
            <Heading as="h2" variant="section-md">
              {title}
            </Heading>
            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              {description}
            </p>

            <div className="mt-8 space-y-4 sm:mt-10">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  variants={sectionTitleFadeUpVariants}
                  className="relative overflow-hidden rounded-2xl border border-[#ece6e3] bg-white px-5 py-5 sm:px-6 sm:py-6"
                >
                  <div
                    className="pointer-events-none absolute inset-y-3 right-3 flex w-[62px] items-center justify-center rounded-[14px] bg-primary/[0.08] sm:inset-y-4 sm:right-4 sm:w-[72px] sm:rounded-2xl"
                    aria-hidden
                  >
                    <span className="text-[46px] font-bold leading-none text-primary/35 sm:text-[54px]">
                      {step.step}
                    </span>
                  </div>
                  <div className="relative max-w-[calc(100%-76px)] sm:max-w-[calc(100%-88px)]">
                    <Heading as="h3" variant="card-title-xs">
                      {step.title}
                    </Heading>
                    <p className="mt-2 text-[13px] leading-[1.65] text-[#6f6562] sm:text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:ml-auto xl:max-w-[660px]"
          >
            <SeamCornerImageFrame
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              gradientIdPrefix="teacher-how-it-works"
              imageSizes="(max-width: 1024px) 92vw, 660px"
              aspectClassName="aspect-[4/3] w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]"
              playButtonAriaLabel="Play video"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
