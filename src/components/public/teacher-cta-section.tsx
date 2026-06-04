"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SectionTitle, sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";

export function TeacherCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#120202] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,172,33,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(255,71,71,0.16),transparent_30%),linear-gradient(90deg,rgba(27,4,2,0.95),rgba(18,2,2,0.86)_48%,rgba(13,1,2,0.98))]" />
        <svg
          className="absolute bottom-[-19%] right-[-4%] h-[460px] w-[820px] text-[#8a6428]/22"
          viewBox="0 0 820 460"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 38 }).map((_, index) => (
            <path
              key={index}
              d={`M${index * 9} ${384 - index * 4} C ${180 + index * 5} ${178 - index * 2}, ${418 + index * 3} ${176 + index * 2}, ${790 - index * 4} ${288 + index * 3}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative mx-auto h-[470px] w-full max-w-[430px] lg:mx-0 lg:ml-2 lg:h-[540px]"
          >
            <div className="absolute inset-x-2 bottom-0 h-[72%] rounded-[48px] bg-[#ffca18] sm:rounded-[58px]" />
            <Image
              src="/images/teacher-cta.png"
              alt="Teacher holding course material"
              fill
              priority={false}
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 86vw, 430px"
            />
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="max-w-[570px] lg:pt-4">
            <SectionTitle
              align="left"
              theme="dark"
              label="For Individual Teachers"
              title={
                <>
                  Sustain Your Enthusiasm <br className="hidden sm:block" />
                  for Teaching
                </>
              }
              description="The essence of continuously nurturing one's passion for education. It implies a commitment to keeping the flame of excitement and dedication burning bright amidst the challenges and demands of teaching. This succinct phrase serves as a reminder to educators to actively cultivate their passion, find joy in their work, and remain inspired to make a positive impact on their students' lives."
              headingClassName="lg:text-[42px]"
              descriptionClassName="max-w-[545px] text-[13px] leading-[1.72] text-white/76"
            />

            <div className="mt-9">
              <Button asChild variant="publicCta" size="publicCta">
                <Link href={ROUTES.auth.register}>Start Teaching Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
