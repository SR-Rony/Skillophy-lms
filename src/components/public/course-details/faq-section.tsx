"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CourseDetailsFaq } from "@/components/public/course-details/types";
import { cn } from "@/utils";

interface FaqSectionProps {
  faqs: CourseDetailsFaq[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openFaqs, setOpenFaqs] = useState(
    faqs.filter((faq) => faq.defaultOpen).map((faq) => faq.id)
  );

  const toggleFaq = (id: string) => {
    setOpenFaqs((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]">
        Frequently Asked Questions
      </h2>

      <div className="mt-5 overflow-hidden rounded-[16px] border border-[#ece6e3] bg-white">
        {faqs.map((item, index) => {
          const isOpen = openFaqs.includes(item.id);

          return (
            <div
              key={item.id}
              className={cn(index > 0 && "border-t border-[#ece6e3]")}
            >
              <button
                type="button"
                onClick={() => toggleFaq(item.id)}
                aria-expanded={isOpen}
                className={cn(
                  "flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6",
                  isOpen
                    ? "border-l-4 border-[#ff4747] bg-[#fff4f2] pl-4 sm:pl-5"
                    : "border-l-4 border-transparent bg-white hover:bg-[#faf9f8]"
                )}
              >
                <div className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
                    {item.question}
                  </span>
                  {isOpen && (
                    <p className="mt-3 text-[14px] font-normal leading-[1.65] text-[#6f6562] sm:text-[15px]">
                      {item.answer}
                    </p>
                  )}
                </div>

                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                    isOpen
                      ? "bg-[#ff4747] text-white shadow-[0_8px_18px_rgba(255,71,71,0.24)]"
                      : "border border-[#e8e4e1] bg-[#f7f7f7] text-[#9a908c]"
                  )}
                  aria-hidden
                >
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                  />
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
