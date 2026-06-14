"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { LOGO_SRC } from "@/components/shared/logo";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ComingSoonBackground } from "@/components/public/coming-soon/coming-soon-background";
import { ComingSoonHero } from "@/components/public/coming-soon/coming-soon-hero";
import { ComingSoonEmailForm } from "@/components/public/coming-soon/coming-soon-email-form";
import { ComingSoonCountdown } from "@/components/public/coming-soon/coming-soon-countdown";
import { ComingSoonSocialLinks } from "@/components/public/coming-soon/coming-soon-social-links";
import { siteConfig } from "@/config";

export function ComingSoonPageContent() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      <ComingSoonBackground />

      <Container
        as={motion.div}
        className="relative z-10 flex min-h-screen flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.header variants={sectionTitleFadeUpVariants} className="flex justify-center pt-2 sm:pt-4">
          <Image
            src={LOGO_SRC}
            alt={siteConfig.name}
            width={180}
            height={44}
            priority
            className="h-8 w-auto object-contain sm:h-9"
          />
        </motion.header>

        <div className="flex flex-1 flex-col items-center justify-center py-10 sm:py-12 lg:py-16">
          <motion.div variants={sectionTitleFadeUpVariants} className="w-full max-w-[720px]">
            <ComingSoonHero />
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="mt-10 w-full sm:mt-12">
            <ComingSoonEmailForm />
          </motion.div>
        </div>

        <motion.footer
          variants={sectionTitleFadeUpVariants}
          className="flex flex-col items-center gap-8 pb-4 sm:pb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-6"
        >
          <ComingSoonCountdown />
          <ComingSoonSocialLinks />
        </motion.footer>
      </Container>
    </section>
  );
}
