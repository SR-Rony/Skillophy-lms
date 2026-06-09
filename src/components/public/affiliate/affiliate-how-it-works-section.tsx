"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { AffiliateProcessStepCard } from "@/components/public/affiliate/affiliate-process-step-card";
import { affiliateHowItWorksData } from "@/components/public/affiliate/data/affiliate-how-it-works.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

export function AffiliateHowItWorksSection() {
  const { title, description, steps } = affiliateHowItWorksData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-[4%] h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,214,170,0.28)_0%,rgba(255,214,170,0.08)_42%,transparent_72%)]" />
        <div className="absolute bottom-[-10%] right-[-4%] hidden h-[340px] w-[520px] text-[#f0c89a]/28 lg:block">
          <svg viewBox="0 0 520 340" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <path
                key={index}
                d={`M${18 + index * 8} ${270 - index * 8} C ${90 + index * 7} ${96 - index * 2}, ${240 + index * 5} ${88 + index * 3}, ${510 - index * 6} ${248 - index * 4}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
        <div className="absolute bottom-[8%] right-[6%] hidden h-[220px] w-[220px] text-[#f5d9a8]/22 xl:block">
          <svg viewBox="0 0 220 220" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <polygon
                key={index}
                points="110,18 198,82 170,198 50,198 22,82"
                stroke="currentColor"
                strokeWidth="1"
                transform={`rotate(${index * 14} 110 110)`}
                style={{ transformOrigin: "110px 110px" }}
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
        <motion.div variants={sectionTitleFadeUpVariants} className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f] sm:text-[36px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
            {description}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-8 lg:mt-14 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={sectionTitleFadeUpVariants}
              className="lg:flex-1"
            >
              <AffiliateProcessStepCard step={step} index={index} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
