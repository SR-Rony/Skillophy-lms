"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { FaqAccordion } from "@/components/public/faq/faq-accordion";
import { helpFaqData } from "@/components/public/help/data/help-faq.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import type { FaqItem } from "@/components/public/faq/types";
import { cn } from "@/utils";

interface HelpFaqSectionProps {
  faqs: FaqItem[];
  variant?: "page" | "sidebar";
}

function HelpFaqEmptyState() {
  return (
    <div className="rounded-[16px] border border-[#ece6e3] bg-white px-6 py-10 text-center shadow-[0_8px_24px_rgba(80,37,31,0.04)]">
      <p className="text-[15px] font-semibold text-[#24201f]">No results found</p>
      <p className="mt-2 text-[14px] leading-[1.65] text-[#6f6562]">
        Try another topic or search with different keywords.
      </p>
    </div>
  );
}

function HelpFaqList({ faqs }: { faqs: FaqItem[] }) {
  return faqs.length > 0 ? <FaqAccordion faqs={faqs} /> : <HelpFaqEmptyState />;
}

export function HelpFaqSection({ faqs, variant = "page" }: HelpFaqSectionProps) {
  if (variant === "sidebar") {
    return (
      <div>
        <h2 className="text-[15px] font-medium text-[#6f6562] sm:text-[16px]">
          {helpFaqData.title}
        </h2>
        <div className="mt-6">
          <HelpFaqList faqs={faqs} />
        </div>
      </div>
    );
  }

  return (
    <section
      id="help-faq"
      className="relative overflow-hidden bg-white pb-16 sm:pb-20 lg:pb-[92px]"
    >
      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.h2
          variants={sectionTitleFadeUpVariants}
          className={cn(
            "text-center text-[15px] font-medium text-[#6f6562] sm:text-[16px]",
          )}
        >
          {helpFaqData.title}
        </motion.h2>

        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto mt-8 max-w-[920px]"
        >
          <HelpFaqList faqs={faqs} />
        </motion.div>
      </Container>
    </section>
  );
}
