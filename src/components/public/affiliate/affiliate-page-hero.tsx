"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { affiliatePageHeroData } from "@/components/public/affiliate/data/affiliate-page-hero.data";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function AffiliateHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-[10%] top-[6%] h-[340px] w-[340px] rounded-full bg-primary/12 blur-[100px]" />
      <div className="absolute left-[2%] top-[28%] h-[220px] w-[220px] rounded-full bg-[#ffe2cc]/55 blur-[80px]" />
      <div className="absolute right-[-5%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#fff0eb]/70 blur-[90px]" />

      <svg
        className="absolute right-[-10%] top-[4%] hidden h-[620px] w-[760px] text-[#d4a017]/14 lg:block"
        viewBox="0 0 760 620"
        fill="none"
      >
        <g transform="translate(380, 310)">
          {Array.from({ length: 16 }).map((_, index) => {
            const radius = 48 + index * 22;
            const points = Array.from({ length: 7 })
              .map((__, pointIndex) => {
                const angle = (Math.PI * 2 * pointIndex) / 7 - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return `${x},${y}`;
              })
              .join(" ");

            return (
              <polygon
                key={index}
                points={points}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            );
          })}
        </g>
      </svg>

      <svg
        className="absolute left-[-8%] top-[18%] hidden h-[420px] w-[520px] text-[#C58A2A]/10 lg:block"
        viewBox="0 0 520 420"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 10} ${360 - index * 10} C ${120 + index * 8} ${90 + index * 4}, ${280 + index * 6} ${84 + index * 3}, ${490 - index * 8} ${340 - index * 6}`}
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

function AffiliateHeroImage({
  imageSrc,
  imageAlt,
  statValue,
  statLabel,
  avatarSeeds,
}: {
  imageSrc: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  avatarSeeds: readonly string[];
}) {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
      <div className="absolute -right-3 top-3 h-[94%] w-[90%] rounded-[36px] bg-gradient-to-br from-[#ffb347] via-[#ff8c2a] to-[#ff6b35] sm:-right-4 sm:top-4 sm:rounded-[44px]" />

      <div className="relative overflow-hidden rounded-[32px] bg-white p-2 shadow-[0_22px_50px_rgba(80,37,31,0.12)] sm:rounded-[40px] sm:p-2.5">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px] sm:rounded-[34px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 88vw, 520px"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-10 min-w-[168px] rounded-[18px] border border-[#f3e8dc] bg-[#fff8eb] px-5 py-4 shadow-[0_16px_36px_rgba(80,37,31,0.14)] sm:bottom-6 sm:left-6">
        <div className="mb-3 flex items-center pl-1">
          {avatarSeeds.map((seed, index) => (
            <div
              key={seed}
              className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-[#f3f4f6]"
              style={{ marginLeft: index === 0 ? 0 : -10, zIndex: avatarSeeds.length - index }}
            >
              <Image
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                alt=""
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
          ))}
        </div>
        <p className="text-[28px] font-black leading-none tracking-[-0.04em] text-[#f59e0b]">
          {statValue}
        </p>
        <p className="mt-2 text-[13px] font-semibold text-[#4f4747]">{statLabel}</p>
      </div>
    </div>
  );
}

export function AffiliatePageHero() {
  const {
    label,
    title,
    description,
    ctaLabel,
    ctaHref,
    imageSrc,
    imageAlt,
    statValue,
    statLabel,
    avatarSeeds,
  } = affiliatePageHeroData;

  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <AffiliateHeroBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
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

            <p className="mt-5 max-w-[480px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              {description}
            </p>

            <div className="mt-9">
              <Button asChild variant="publicCta" size="publicCta">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="relative">
            <AffiliateHeroImage
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              statValue={statValue}
              statLabel={statLabel}
              avatarSeeds={avatarSeeds}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
