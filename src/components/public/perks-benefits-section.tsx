"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import {
  sectionHeadingClassName,
  SectionTitle,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import { cn } from "@/utils";
import type { PerksBenefitsSectionProps } from "@/types/perks-benefits.types";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

function PerksBenefitsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,214,153,0.22),transparent_28%),radial-gradient(circle_at_88%_42%,rgba(255,196,120,0.16),transparent_34%)]" />

      <svg
        className="absolute right-[-12%] top-[8%] hidden h-[620px] w-[760px] text-[#d4a017]/14 lg:block"
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
        className="absolute right-[-4%] top-[14%] hidden h-[520px] w-[640px] text-[#efb84d]/10 lg:block"
        viewBox="0 0 640 520"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${30 + index * 10} ${420 - index * 10} C ${140 + index * 8} ${120 + index * 4}, ${320 + index * 6} ${110 + index * 3}, ${600 - index * 8} ${400 - index * 6}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function PerksBenefitsSection({
  label,
  title,
  description,
  items,
  className,
}: PerksBenefitsSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#fffcf9] py-14 sm:py-16 lg:py-20",
        className,
      )}
    >
      <PerksBenefitsBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {label ? (
          <SectionTitle label={label} title={title} description={description} />
        ) : (
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mx-auto max-w-[760px] text-center"
          >
            <h2 className={sectionHeadingClassName}>{title}</h2>
            <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.5] text-[#5f5553]">
              {description}
            </p>
          </motion.div>
        )}

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {items.map(({ id, title: itemTitle, description: itemDescription, icon }) => (
            <motion.article
              key={id}
              variants={sectionTitleFadeUpVariants}
              className="min-w-0 text-left"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center">
                {icon}
              </div>
              <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#24201f] sm:text-[19px]">
                {itemTitle}
              </h3>
              <p className="mt-3 min-h-[4.125rem] max-w-[340px] text-[14px] font-normal leading-[1.65] text-[#6f6562] sm:min-h-[4.5rem] sm:text-[15px]">
                {itemDescription}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
