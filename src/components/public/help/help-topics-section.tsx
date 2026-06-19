"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { getHeadingClassName, Heading } from "@/components/shared/heading";
import { getHelpArticleSlugByTopicId } from "@/components/public/help/help-details/data/help-details.data";
import {
  getHelpTopics,
  helpAudienceOptions,
  type HelpAudience,
} from "@/components/public/help/data/help-topics.data";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils";

interface HelpTopicsSectionProps {
  audience: HelpAudience;
  onAudienceChange: (audience: HelpAudience) => void;
}

function HelpSeamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <div className="absolute left-[-8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#ffe2cc]/30 blur-[90px]" />
      <div className="absolute right-[-6%] top-[24%] h-[240px] w-[240px] rounded-full bg-[#f5dce8]/22 blur-[85px]" />
      <svg
        className="absolute left-[-6%] top-[6%] hidden h-[280px] w-[380px] text-[#efb0aa]/28 lg:block"
        viewBox="0 0 380 280"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={index}
            d={`M${8 + index * 10} ${220 - index * 7} C ${60 + index * 8} ${80 - index * 2}, ${150 + index * 6} ${72 + index * 3}, ${340 - index * 5} ${208 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
      <svg
        className="absolute right-[-4%] bottom-[8%] hidden h-[260px] w-[420px] text-[#f0c89a]/22 lg:block"
        viewBox="0 0 420 260"
        fill="none"
      >
        {Array.from({ length: 11 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 11} ${210 - index * 7} C ${110 + index * 9} ${70 - index * 2}, ${240 + index * 6} ${64 + index * 4}, ${390 - index * 5} ${190 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function HelpTopicsSection({
  audience,
  onAudienceChange,
}: HelpTopicsSectionProps) {
  const topics = getHelpTopics(audience);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <HelpSeamBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-8 border-b border-[#ece6e3]">
            {helpAudienceOptions.map((option) => {
              const isActive = audience === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onAudienceChange(option.id)}
                  className={cn(
                    "cursor-pointer pb-3 text-[15px] font-semibold transition sm:text-[16px]",
                    isActive
                      ? "border-b-2 border-primary text-[#24201f]"
                      : "border-b-2 border-transparent text-[#9a908c] hover:text-[#6f6562]",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.h2
          variants={sectionTitleFadeUpVariants}
          className={getHeadingClassName("help-label", "mt-10 text-center")}
        >
          Select a Topic to Search for Help
        </motion.h2>

        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {topics.map((topic) => {
            const Icon = topic.icon;
            const articleSlug = getHelpArticleSlugByTopicId(topic.id);
            const cardClassName = cn(
              "block cursor-pointer rounded-[18px] border border-[#ece6e3] bg-white p-5 text-left shadow-[0_8px_24px_rgba(80,37,31,0.05)] transition sm:p-6",
              "hover:border-primary/25 hover:shadow-[0_12px_28px_rgba(80,37,31,0.08)]",
            );

            const cardContent = (
              <>
                <span
                  className={cn(
                    "inline-flex h-14 w-14 items-center justify-center rounded-full border-2",
                    topic.iconRing,
                  )}
                >
                  <Icon className={cn("h-7 w-7", topic.iconColor)} strokeWidth={1.75} />
                </span>

                <Heading as="h3" variant="help-section" className="mt-5 text-[16px] sm:text-[17px]">
                  {topic.title}
                </Heading>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#6f6562] sm:text-[14px]">
                  {topic.description}
                </p>
              </>
            );

            if (!articleSlug) {
              return (
                <div key={topic.id} className={cardClassName}>
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={topic.id}
                href={ROUTES.helpArticle(articleSlug)}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
