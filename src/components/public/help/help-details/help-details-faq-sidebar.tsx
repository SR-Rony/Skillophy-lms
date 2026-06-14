"use client";

import { FaqAccordion } from "@/components/public/faq/faq-accordion";
import { helpFaqData, filterHelpFaqs } from "@/components/public/help/data/help-faq.data";
import type { HelpTopicId } from "@/components/public/help/data/help-topics.data";

const teacherTopicIds: HelpTopicId[] = ["course-management", "payouts-earnings", "live-classes"];

interface HelpDetailsFaqSidebarProps {
  categoryId: HelpTopicId;
}

export function HelpDetailsFaqSidebar({ categoryId }: HelpDetailsFaqSidebarProps) {
  const audience = teacherTopicIds.includes(categoryId) ? "teacher" : "learner";
  const faqs = filterHelpFaqs("", audience, categoryId);

  return (
    <div>
      <h2 className="text-[15px] font-medium text-[#6f6562] sm:text-[16px]">
        {helpFaqData.title}
      </h2>

      <div className="mt-6">
        {faqs.length > 0 ? (
          <FaqAccordion faqs={faqs} />
        ) : (
          <div className="rounded-[16px] border border-[#ece6e3] bg-white px-6 py-10 text-center shadow-[0_8px_24px_rgba(80,37,31,0.04)]">
            <p className="text-[15px] font-semibold text-[#24201f]">No results found</p>
            <p className="mt-2 text-[14px] leading-[1.65] text-[#6f6562]">
              Try another topic or search with different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
