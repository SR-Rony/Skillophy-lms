"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function BusinessPageHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] top-[6%] h-[340px] w-[340px] rounded-full bg-primary/12 blur-[100px]" />
        <div className="absolute left-[2%] top-[28%] h-[220px] w-[220px] rounded-full bg-[#ffe2cc]/55 blur-[80px]" />
        <div className="absolute left-[8%] bottom-[18%] h-[180px] w-[180px] rounded-full bg-[#e8dff5]/60 blur-[70px]" />
        <div className="absolute right-[-5%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#fff0eb]/70 blur-[90px]" />

        <div className="absolute left-[5%] top-[16%] hidden h-16 w-16 rotate-12 rounded-2xl bg-primary/15 sm:block" />
        <div className="absolute left-[11%] top-[58%] hidden h-11 w-11 rounded-full bg-[#ffac21]/30 sm:block" />
        <div className="absolute left-[3%] top-[40%] hidden h-24 w-24 rounded-full border-2 border-primary/20 sm:block" />
        <div className="absolute left-[14%] bottom-[22%] hidden h-9 w-9 rotate-45 rounded-md bg-[#e8dff5]/80 sm:block" />

        <svg
          className="absolute left-[-8%] top-[8%] hidden h-[420px] w-[460px] text-primary/10 lg:block"
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
          className="absolute left-[-4%] top-[18%] hidden h-[320px] w-[360px] text-[#efb0aa]/45 lg:block"
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
          className="absolute right-[-4%] top-[6%] hidden h-[340px] w-[520px] text-[#e8ddd4]/70 lg:block"
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

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-white/40 to-[#f7f4f2]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ecd8d2]/80 to-transparent" />
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <motion.div variants={fadeUpVariants} className="relative max-w-[520px]">
            <div className="pointer-events-none absolute -left-3 top-8 hidden h-14 w-1 rounded-full bg-gradient-to-b from-primary/70 via-primary/30 to-transparent lg:block" />

            <div className="mb-6 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[13px]">
                Skillophy for Business
              </span>
              <span className="h-px w-10 bg-primary/70 sm:w-14" aria-hidden />
            </div>

            <Heading as="h1" variant="display">
              Empower Your Team&apos;s Learning with us
            </Heading>

            <p className="mt-5 max-w-[460px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              With a mix of experience and stories, become suitable for life&apos;s work for the
              new generation, have a mentality like the new generation.
            </p>

            <div className="mt-9">
              <Button asChild variant="publicCta" size="publicCta">
                <Link href="#business-form">Explore Our Plans</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="pointer-events-none absolute -left-2 top-[12%] hidden h-14 w-14 rotate-[-10deg] rounded-2xl bg-primary/10 lg:block" />
            <div className="pointer-events-none absolute -right-1 bottom-[10%] hidden h-12 w-12 rotate-12 rounded-full bg-[#ffe2cc]/70 lg:block" />
            <div className="pointer-events-none absolute right-[8%] top-[4%] hidden h-20 w-20 rounded-full border border-dashed border-primary/25 lg:block" />

            <div className="relative aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/10 via-[#ffe2cc]/20 to-[#e8dff5]/25 blur-sm" />
              <div className="relative aspect-square w-full overflow-hidden rounded-full shadow-[0_24px_60px_rgba(80,37,31,0.14)] ring-1 ring-[#ece6e3]">
                <Image
                  src="/images/business.png"
                  alt="Business team collaborating around a laptop"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 80vw, 520px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
