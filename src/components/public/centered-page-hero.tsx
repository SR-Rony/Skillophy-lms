"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionHeadingClassName } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { CenteredPageHeroProps } from "@/types/centered-page-hero.types";

function CenteredPageHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f6] via-[#faf8f7] to-[#f7f0f4]" />
      <div className="absolute left-[-8%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#d9e8f5]/45 blur-3xl" />
      <div className="absolute right-[-6%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#f3dce8]/45 blur-3xl" />

      <svg
        className="absolute right-[-6%] top-[4%] hidden h-[360px] w-[560px] text-[#ead8d2]/55 lg:block"
        viewBox="0 0 560 360"
        fill="none"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 12} ${260 - index * 7} C ${110 + index * 10} ${88 - index * 2}, ${270 + index * 6} ${82 + index * 3}, ${520 - index * 6} ${248 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[2%] top-[12%] hidden h-[300px] w-[480px] text-[#d4a017]/10 lg:block"
        viewBox="0 0 480 300"
        fill="none"
      >
        <g transform="translate(240, 150)">
          {Array.from({ length: 12 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="0"
              rx={36 + index * 18}
              ry={24 + index * 12}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${index * 8})`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function CenteredPageHero({ title, description, className }: CenteredPageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#f8f7f6] py-14 sm:py-16 lg:py-[72px]",
        className,
      )}
    >
      <CenteredPageHeroBackground />

      <Container
        as={motion.div}
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h1 className={cn(sectionHeadingClassName, "text-[32px] sm:text-[40px] lg:text-[44px]")}>
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] text-[15px] font-normal leading-[1.6] text-[#5f5553] sm:text-[16px]">
          {description}
        </p>
      </Container>
    </section>
  );
}
