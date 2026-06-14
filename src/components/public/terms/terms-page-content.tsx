"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { TermsHeader } from "@/components/public/terms/terms-header";
import { TermsIntro } from "@/components/public/terms/terms-intro";
import { TermsSectionCard } from "@/components/public/terms/terms-section-card";
import { TermsSidebar } from "@/components/public/terms/terms-sidebar";
import { termsPageData } from "@/components/public/terms/data/terms-page.data";

export function TermsPageContent() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionTitleFadeUpVariants}
          className="border-b border-[#ece6e3] pb-6 sm:pb-8"
        >
          <TermsHeader />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionTitleFadeUpVariants}
          className="mt-6 max-w-4xl lg:max-w-none"
        >
          <TermsIntro />
        </motion.div>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-12">
          <div className="order-2 min-w-0 space-y-6 lg:order-1">
            {termsPageData.sections.map((section) => (
              <TermsSectionCard key={section.id} section={section} />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <TermsSidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
