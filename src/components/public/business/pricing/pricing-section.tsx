"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { PricingPlanCard } from "@/components/public/business/pricing/pricing-plan-card";
import { SectionTitle, sectionTitleFadeUpVariants } from "@/components/public/section-title";
import type { PricingSectionData } from "@/components/public/business/pricing/types";
import { pricingSectionData } from "@/components/public/business/pricing/data/pricing-plans.data";

interface PricingSectionProps {
  data?: PricingSectionData;
  className?: string;
  id?: string;
}

export function PricingSection({ data = pricingSectionData, className, id }: PricingSectionProps) {
  return (
    <section
      id={id}
      className={className ?? "relative overflow-hidden bg-white py-16 scroll-mt-24 sm:py-20 lg:py-[92px]"}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[12%] h-[260px] w-[260px] rounded-full bg-[#ffe2cc]/35 blur-3xl" />
        <svg
          className="absolute left-[-6%] top-[8%] hidden h-[320px] w-[420px] text-[#eedb96]/30 lg:block"
          viewBox="0 0 420 320"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <path
              key={index}
              d={`M${16 + index * 10} ${240 - index * 8} C ${90 + index * 8} ${80 - index * 2}, ${220 + index * 5} ${72 + index * 3}, ${400 - index * 6} ${228 - index * 4}`}
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
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <SectionTitle label={data.label} title={data.title} className="max-w-[860px]" />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {data.plans.map((plan) => (
            <motion.div key={plan.id} variants={sectionTitleFadeUpVariants} className="pt-2">
              <PricingPlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
