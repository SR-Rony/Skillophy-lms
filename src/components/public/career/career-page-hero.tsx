"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { careerPageHeroData } from "@/components/public/career/data/career-page-hero.data";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function CareerHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -left-[10%] top-[6%] h-[340px] w-[340px] rounded-full bg-primary/12 blur-[100px]" />
      <div className="absolute left-[2%] top-[28%] h-[220px] w-[220px] rounded-full bg-[#ffe2cc]/55 blur-[80px]" />
      <div className="absolute right-[-5%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#fff0eb]/70 blur-[90px]" />

      <svg
        className="absolute right-[-8%] top-[8%] hidden h-[520px] w-[620px] text-[#C58A2A]/20 lg:block"
        viewBox="0 0 620 520"
        fill="none"
      >
        <g transform="translate(310, 260)">
          {Array.from({ length: 14 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="0"
              rx={42 + index * 24}
              ry={28 + index * 16}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${index * 8})`}
            />
          ))}
        </g>
      </svg>

      <svg
        className="absolute right-[-2%] top-[18%] hidden h-[420px] w-[500px] text-[#D4A017]/15 lg:block"
        viewBox="0 0 500 420"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 10} ${360 - index * 10} C ${120 + index * 8} ${80 + index * 4}, ${280 + index * 6} ${70 + index * 3}, ${460 - index * 8} ${340 - index * 6}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-white/40 to-[#f7f4f2]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ecd8d2]/80 to-transparent" />
    </div>
  );
}

export function CareerPageHero() {
  const { label, title, description, ctaLabel, ctaHref, imageSrc, imageAlt } =
    careerPageHeroData;

  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <CareerHeroBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 xl:gap-16">
          <motion.div variants={fadeUpVariants} className="relative max-w-[560px]">
            <div className="pointer-events-none absolute -left-3 top-8 hidden h-14 w-1 rounded-full bg-gradient-to-b from-primary/70 via-primary/30 to-transparent lg:block" />

            <div className="mb-6 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[13px]">
                {label}
              </span>
              <span className="h-px w-10 bg-primary/70 sm:w-14" aria-hidden />
            </div>

            <h1 className="text-[34px] font-black leading-[1.12] tracking-[-0.04em] text-[#1a1a1a] sm:text-[42px] lg:text-[48px]">
              {title}
            </h1>

            <p className="mt-5 max-w-[500px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              {description}
            </p>

            <div className="mt-9">
              <Button asChild variant="publicCta" size="publicCta">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="pointer-events-none absolute -right-1 bottom-[10%] hidden h-12 w-12 rotate-12 rounded-full bg-[#ffe2cc]/70 lg:block" />
            <div className="pointer-events-none absolute right-[8%] top-[4%] hidden h-20 w-20 rounded-full border border-dashed border-primary/25 lg:block" />

            <div className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] shadow-[0_22px_50px_rgba(80,37,31,0.1)] sm:rounded-[32px]">
              <div className="relative aspect-[16/11] w-full sm:aspect-[16/10]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 92vw, 560px"
                />
              </div>

              <button
                type="button"
                aria-label="Play career video"
                className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_14px_rgba(255,77,77,0.2)] transition hover:scale-105 hover:bg-primary/90 sm:h-[72px] sm:w-[72px]"
              >
                <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
