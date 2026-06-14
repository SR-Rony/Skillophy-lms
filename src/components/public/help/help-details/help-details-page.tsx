"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { HelpFaqSection } from "@/components/public/help/help-faq-section";
import { getHelpFaqsByCategory } from "@/components/public/help/data/help-faq.data";
import { HelpDetailsHeader } from "@/components/public/help/help-details/help-details-header";
import { HelpDetailsSidebar } from "@/components/public/help/help-details/help-details-sidebar";
import { HelpDetailsContent } from "@/components/public/help/help-details/help-details-content";
import type { HelpArticleDetail } from "@/components/public/help/help-details/data/help-details.data";
import { helpArticleNavCategories } from "@/components/public/help/help-details/data/help-details.data";

interface HelpDetailsPageProps {
  article: HelpArticleDetail;
}

export function HelpDetailsPage({ article }: HelpDetailsPageProps) {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <Container
        as={motion.div}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.06 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants}>
          <HelpDetailsHeader title={article.title} lastUpdated={article.lastUpdated} />
        </motion.div>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,360px)_minmax(0,1fr)] xl:gap-12">
          <motion.div variants={sectionTitleFadeUpVariants} className="space-y-8">
            <HelpDetailsSidebar
              categories={helpArticleNavCategories}
              activeCategoryId={article.categoryId}
              activeSlug={article.slug}
            />
            <HelpFaqSection
              faqs={getHelpFaqsByCategory(article.categoryId)}
              variant="sidebar"
            />
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants}>
            <HelpDetailsContent article={article} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
