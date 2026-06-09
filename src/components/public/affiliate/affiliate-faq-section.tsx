"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { FaqAccordion } from "@/components/public/faq/faq-accordion";
import { affiliateFaqData } from "@/components/public/affiliate/data/affiliate-faq.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

export function AffiliateFaqSection() {
  const { label, title, description, faqs } = affiliateFaqData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[-10%] h-[280px] w-[280px] rounded-full bg-[#ffe2cc]/45 blur-[90px]" />
        <div className="absolute right-[-6%] top-[-8%] h-[260px] w-[260px] rounded-full bg-[#ffe2cc]/35 blur-[85px]" />
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="max-w-[500px] lg:sticky lg:top-28"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[13px]">
                {label}
              </span>
              <span className="h-px w-10 bg-primary/70 sm:w-14" aria-hidden />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f]">
              {title}
            </h2>

            <p className="mt-5 max-w-[430px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              {description}
            </p>
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="w-full min-w-0">
            <FaqAccordion faqs={faqs} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
