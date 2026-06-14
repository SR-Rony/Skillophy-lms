"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { PrivacyHeader } from "@/components/public/privacy/privacy-header";
import { PrivacyIntro } from "@/components/public/privacy/privacy-intro";
import { PrivacySectionCard } from "@/components/public/privacy/privacy-section-card";
import { PrivacySidebar } from "@/components/public/privacy/privacy-sidebar";
import { privacyPageData } from "@/components/public/privacy/data/privacy-page.data";

export function PrivacyPageContent() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionTitleFadeUpVariants}
          className="border-b border-[#ece6e3] pb-6 sm:pb-8"
        >
          <PrivacyHeader />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionTitleFadeUpVariants}
          className="mt-6 max-w-4xl lg:max-w-none"
        >
          <PrivacyIntro />
        </motion.div>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-12">
          <div className="order-2 min-w-0 space-y-6 lg:order-1">
            {privacyPageData.sections.map((section) => (
              <PrivacySectionCard key={section.id} section={section} />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <PrivacySidebar />
          </div>
        </div>
      </Container>
    </section>
  );
}
