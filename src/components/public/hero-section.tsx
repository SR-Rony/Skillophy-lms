"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { getHeadingClassName } from "@/components/shared/heading";
import { sectionLabelClassName } from "@/components/public/section-title";
import { cn } from "@/utils";
import { HeroVisual } from "./hero-visual";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[92vh] items-center overflow-hidden bg-white py-16 md:py-24",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute -left-[10%] top-[8%] h-[360px] w-[360px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-[2%] top-[30%] h-[240px] w-[240px] rounded-full bg-[#ffe2cc]/50 blur-[85px]" />
        <div className="absolute left-[6%] bottom-[14%] h-[200px] w-[200px] rounded-full bg-[#e8dff5]/55 blur-[75px]" />
        <div className="absolute right-[-4%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#fff0eb]/75 blur-[95px]" />
        <div className="absolute bottom-[8%] right-[12%] h-[280px] w-[280px] rounded-full bg-orange-100/35 blur-[100px]" />

        <div className="absolute left-[4%] top-[18%] hidden h-16 w-16 rotate-12 rounded-2xl bg-primary/14 sm:block" />
        <div className="absolute left-[10%] top-[56%] hidden h-11 w-11 rounded-full bg-[#ffac21]/28 sm:block" />
        <div className="absolute left-[2%] top-[42%] hidden h-24 w-24 rounded-full border-2 border-primary/18 sm:block" />
        <div className="absolute left-[13%] bottom-[20%] hidden h-9 w-9 rotate-45 rounded-md bg-[#e8dff5]/75 sm:block" />

        <svg
          className="absolute left-[-8%] top-[10%] hidden h-[420px] w-[460px] text-primary/10 lg:block"
          viewBox="0 0 460 420"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(80, 210) rotate(14)">
            {Array.from({ length: 12 }).map((_, index) => (
              <ellipse
                key={index}
                cx="0"
                cy="0"
                rx={48 + index * 28}
                ry={24 + index * 14}
                stroke="currentColor"
                strokeWidth="1.2"
              />
            ))}
          </g>
        </svg>

        <svg
          className="absolute left-[-4%] top-[20%] hidden h-[320px] w-[360px] text-[#efb0aa]/40 lg:block"
          viewBox="0 0 360 320"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <path
              key={index}
              d={`M${12 + index * 8} ${250 - index * 8} C ${70 + index * 7} ${90 - index * 2}, ${180 + index * 5} ${82 + index * 3}, ${340 - index * 6} ${238 - index * 4}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>

        <svg
          className="absolute right-[-2%] top-1/2 h-[560px] w-[820px] -translate-y-1/2 text-primary/8"
          viewBox="0 0 820 560"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(520, 280) rotate(-16)">
            {Array.from({ length: 14 }).map((_, index) => (
              <ellipse
                key={index}
                cx="0"
                cy="0"
                rx={56 + index * 34}
                ry={28 + index * 16}
                stroke="currentColor"
                strokeWidth="1.15"
              />
            ))}
          </g>
        </svg>

        <svg
          className="absolute right-[-4%] top-[8%] hidden h-[340px] w-[520px] text-[#e8ddd4]/65 lg:block"
          viewBox="0 0 520 340"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <path
              key={index}
              d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-white/50 to-[#f7f4f2]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ecd8d2]/75 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-10 xl:gap-14">
          <motion.div
            className="relative flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="pointer-events-none absolute -left-3 top-6 hidden h-16 w-1 rounded-full bg-gradient-to-b from-primary/70 via-primary/30 to-transparent lg:block" />

            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <Sparkles className="h-4 w-4 shrink-0 fill-primary text-primary" />
              <span className={cn(sectionLabelClassName, "text-primary")}>
                Best Learning Platform
              </span>
              <span className="h-px max-w-[100px] flex-grow bg-primary/25" aria-hidden />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={cn(getHeadingClassName("hero"), "mb-6 text-left")}
            >
              Explore Endless <br />
              Education <br />
              Anytime
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-lg text-[15px] font-medium leading-[1.75] text-[#6f6562] sm:text-base"
            >
              With a mix of experience and stories, become suitable for life&apos;s work for the
              new generation, have a mentality like the new generation.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button asChild variant="publicCta" size="publicCta">
                <Link href={ROUTES.courses}>See All Courses</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="pointer-events-none absolute -left-1 top-[10%] hidden h-14 w-14 rotate-[-10deg] rounded-2xl bg-primary/10 lg:block" />
            <div className="pointer-events-none absolute right-[4%] top-[6%] hidden h-20 w-20 rounded-full border border-dashed border-primary/22 lg:block" />
            <div className="pointer-events-none absolute bottom-[8%] right-0 hidden h-12 w-12 rotate-12 rounded-full bg-[#ffe2cc]/70 lg:block" />
            <div className="pointer-events-none absolute -inset-4 rounded-[48px] bg-gradient-to-br from-primary/8 via-[#ffe2cc]/15 to-[#e8dff5]/20 blur-sm" />

            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
