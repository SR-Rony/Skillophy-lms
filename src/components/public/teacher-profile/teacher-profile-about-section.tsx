"use client";

import { Heading } from "@/components/shared/heading";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { SeamCornerImageFrame } from "@/components/public/seam-corner-image-frame";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { TeacherProfileAbout } from "@/types/teacher-profile.types";

function TeacherProfileAboutBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute left-[-10%] top-[8%] hidden h-[620px] w-[760px] text-[#ffb02e]/12 lg:block"
        viewBox="0 0 760 620"
        fill="none"
      >
        <g transform="translate(380, 310)">
          {Array.from({ length: 18 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="0"
              rx={48 + index * 22}
              ry={32 + index * 15}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${index * 10})`}
            />
          ))}
        </g>
      </svg>

      <svg
        className="absolute right-[-8%] bottom-[6%] hidden h-[420px] w-[520px] text-[#ffb02e]/10 lg:block"
        viewBox="0 0 520 420"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${24 + index * 10} ${360 - index * 10} C ${130 + index * 8} ${90 + index * 4}, ${280 + index * 6} ${84 + index * 3}, ${490 - index * 8} ${340 - index * 6}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

interface TeacherProfileAboutSectionProps {
  about: TeacherProfileAbout;
}

export function TeacherProfileAboutSection({ about }: TeacherProfileAboutSectionProps) {
  const { title, paragraphs, seeMoreLabel, seeMoreHref, imageSrc, imageAlt } = about;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <TeacherProfileAboutBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative mx-auto w-full max-w-[640px] lg:mx-0 xl:max-w-[700px]"
          >
            <SeamCornerImageFrame
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              gradientIdPrefix="teacher-profile-about"
              imageSizes="(max-width: 1024px) 92vw, 700px"
              aspectClassName="aspect-[4/3] w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[460px]"
            />
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="min-w-0 lg:py-4">
            <Heading as="h2" variant="section" className="text-left text-[32px] sm:text-[36px] lg:text-[40px]">
              {title}
            </Heading>

            <div className="mt-5 space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="max-w-[540px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]"
                >
                  {paragraph}
                  {paragraph === paragraphs[paragraphs.length - 1] ? (
                    <>
                      {" "}
                      <Link
                        href={seeMoreHref}
                        className="font-semibold text-[#1a1a1a] underline decoration-[#1a1a1a]/35 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                      >
                        {seeMoreLabel}
                      </Link>
                    </>
                  ) : null}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
