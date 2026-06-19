"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, PublicCtaLink } from "@/components/shared";
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
    <div className="relative mx-auto w-full max-w-[540px] pl-5 sm:pl-6 lg:mx-0 lg:ml-auto">
      <div className="relative pt-5 pr-5 sm:pt-6 sm:pr-6">
        <div
          className="absolute bottom-0 left-6 right-0 top-0 rounded-[44px] bg-[#F99F1C] sm:left-8 sm:rounded-[52px]"
          aria-hidden
        >
          <span className="absolute right-8 top-8 h-2 w-2 rounded-full bg-[#fdf5e6]/90 sm:right-10 sm:top-10" />
          <span className="absolute right-16 top-14 h-1.5 w-1.5 rounded-full bg-[#fdf5e6]/75 sm:right-20 sm:top-16" />
          <span className="absolute right-10 top-20 h-1.5 w-1.5 rounded-full bg-[#fdf5e6]/60" />
        </div>

        <div className="relative overflow-hidden rounded-[36px] rounded-tl-[48px] bg-white p-2.5 shadow-[0_24px_54px_rgba(80,37,31,0.14)] sm:rounded-[44px] sm:rounded-tl-[60px] sm:p-3">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] rounded-tl-[40px] sm:rounded-[36px] sm:rounded-tl-[52px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[center_18%]"
              priority
              sizes="(max-width: 1024px) 88vw, 540px"
            />
          </div>
        </div>

        <div className="absolute -left-2 bottom-5 z-10 min-w-[176px] rounded-[18px] border border-[#f3e8dc]/80 bg-[#fdf5e6] px-5 py-4 shadow-[0_16px_36px_rgba(80,37,31,0.14)] sm:-left-5 sm:bottom-7 sm:min-w-[188px] sm:rounded-[20px] sm:px-6 sm:py-5">
          <div className="mb-3 flex items-center pl-0.5">
            {avatarSeeds.map((seed, index) => (
              <div
                key={seed}
                className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-[#f3f4f6] sm:h-10 sm:w-10"
                style={{ marginLeft: index === 0 ? 0 : -10, zIndex: avatarSeeds.length - index }}
              >
                <Image
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ))}
          </div>
          <p className="text-[30px] font-black leading-none tracking-[-0.04em] text-[#F99F1C] sm:text-[32px]">
            {statValue}
          </p>
          <p className="mt-2 text-[13px] font-semibold text-[#4f4747] sm:text-[14px]">{statLabel}</p>
        </div>
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

            <Heading as="h1" variant="display">
              {title}
            </Heading>

            <p className="mt-5 max-w-[480px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              {description}
            </p>

            <div className="mt-9">
              <PublicCtaLink href={ctaHref}>{ctaLabel}</PublicCtaLink>
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
