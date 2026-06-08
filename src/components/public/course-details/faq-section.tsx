"use client";

import { FaqAccordion } from "@/components/public/faq/faq-accordion";
import type { CourseDetailsFaq } from "@/components/public/course-details/types";

interface FaqSectionProps {
  faqs: CourseDetailsFaq[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]">
        Frequently Asked Questions
      </h2>

      <FaqAccordion faqs={faqs} allowMultiple className="mt-5" />
    </section>
  );
}
