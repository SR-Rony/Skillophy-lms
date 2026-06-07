"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { BusinessInquiryForm } from "@/components/public/business/business-inquiry-form";
import { businessFormData } from "@/components/public/business/data/business-form.data";

export function BusinessFormSection() {
  return (
    <section id="business-form" className="relative scroll-mt-24 overflow-hidden bg-[#fff5f2] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-18%] left-[-8%] hidden h-[360px] w-[650px] text-[#eedb96]/35 lg:block">
          <svg viewBox="0 0 650 360" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 22 }).map((_, index) => (
              <path
                key={index}
                d={`M${20 + index * 8} ${282 - index * 6} C ${150 + index * 6} ${96 - index * 2}, ${360 + index * 3} ${88 + index * 4}, ${630 - index * 5} ${276 - index * 2}`}
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="flex max-w-[500px] flex-col justify-center text-center lg:max-w-none lg:text-left"
          >
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[13px]">
                {businessFormData.label}
              </span>
              <span className="h-px w-10 bg-primary/70 sm:w-14" aria-hidden />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f]">
              {businessFormData.title}
            </h2>

            <p className="mx-auto mt-5 max-w-[430px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px] lg:mx-0">
              {businessFormData.description}
            </p>
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="w-full min-w-0">
            <BusinessInquiryForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
