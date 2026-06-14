"use client";

import { AccordionPanel } from "@/components/shared/accordion-panel";
import type { FaqItem } from "@/components/public/faq/types";
import { cn } from "@/utils";

interface FaqAccordionProps {
  faqs: FaqItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FaqAccordion({
  faqs,
  allowMultiple = false,
  className,
}: FaqAccordionProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <AccordionPanel
      allowMultiple={allowMultiple}
      className={cn(className)}
      items={faqs.map((faq) => ({
        id: faq.id,
        title: faq.question,
        defaultOpen: faq.defaultOpen,
        content: (
          <p className="text-[14px] font-normal leading-[1.65] text-[#6f6562] sm:text-[15px]">
            {faq.answer}
          </p>
        ),
      }))}
    />
  );
}
