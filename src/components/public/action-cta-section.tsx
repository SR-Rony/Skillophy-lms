"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { ActionCtaCard } from "@/components/public/action-cta-card";
import { aboutActionCtaData } from "@/components/public/about/data/about-action-cta.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import type { ActionCtaSectionProps } from "@/types/action-cta.types";
import { cn } from "@/utils";

function ActionCtaSectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#f8f7f6]" />
      <div className="absolute left-[-8%] top-[20%] h-[260px] w-[260px] rounded-full bg-[#ffe2cc]/35 blur-3xl" />
      <div className="absolute right-[-6%] bottom-[10%] h-[240px] w-[240px] rounded-full bg-[#d9e8f5]/40 blur-3xl" />
    </div>
  );
}

export function ActionCtaSection({ items, className }: ActionCtaSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-14 sm:py-16 lg:py-20",
        className,
      )}
    >
      <ActionCtaSectionBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <motion.div key={item.id} variants={sectionTitleFadeUpVariants}>
              <ActionCtaCard item={item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutActionCtaSection() {
  return <ActionCtaSection items={aboutActionCtaData.items} />;
}
