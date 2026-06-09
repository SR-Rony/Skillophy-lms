"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { CtaBannerSectionProps } from "@/types/cta-banner.types";

export function CtaBannerSection({
  title,
  description,
  ctaLabel,
  ctaHref,
  className,
}: CtaBannerSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#fff5f2] py-16 sm:py-20 lg:py-[92px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-20%] left-[-10%] h-[380px] w-[680px] text-[#eedb96]/40">
          <svg viewBox="0 0 680 380" fill="none" className="h-full w-full" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, index) => (
              <path
                key={index}
                d={`M${18 + index * 7} ${300 - index * 6} C ${140 + index * 6} ${100 - index * 2}, ${340 + index * 4} ${90 + index * 3}, ${640 - index * 6} ${290 - index * 3}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <svg
          className="absolute right-[-6%] top-[8%] hidden h-[360px] w-[480px] text-[#efb0aa]/45 lg:block"
          viewBox="0 0 480 360"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <path
              key={index}
              d={`M${12 + index * 8} ${280 - index * 8} C ${80 + index * 7} ${90 - index * 2}, ${220 + index * 5} ${82 + index * 3}, ${450 - index * 6} ${268 - index * 4}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>

        <svg
          className="absolute right-[-4%] bottom-[-12%] hidden h-[320px] w-[420px] text-primary/10 lg:block"
          viewBox="0 0 420 320"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(210, 160) rotate(-8)">
            {Array.from({ length: 10 }).map((_, index) => (
              <ellipse
                key={index}
                cx="0"
                cy="0"
                rx={42 + index * 24}
                ry={22 + index * 12}
                stroke="currentColor"
                strokeWidth="1.1"
              />
            ))}
          </g>
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto max-w-[720px] text-center"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-normal text-[#1a1a1a] sm:text-[36px] lg:text-[40px]">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
            {description}
          </p>

          <div className="mt-9 flex justify-center">
            <Button asChild variant="publicCta" size="publicCta">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
