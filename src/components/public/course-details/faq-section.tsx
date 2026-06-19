"use client";

import { Heading } from "@/components/shared/heading";

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
      <Heading as="h2" variant="course-detail-section">
        Frequently Asked Questions
      </Heading>

      <FaqAccordion faqs={faqs} allowMultiple className="mt-5" />
    </section>
  );
}
