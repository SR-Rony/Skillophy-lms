"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import {
  sectionHeadingClassName,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import { cn } from "@/utils";
import type { LifeAtGalleryImage, LifeAtSectionProps } from "@/types/life-at.types";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

function LifeAtBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.95)_0%,rgba(255,248,246,0.72)_38%,rgba(255,241,236,0.92)_100%)]" />
      <div className="absolute -left-[8%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#ffe2cc]/35 blur-[90px]" />
      <div className="absolute right-[-6%] top-[8%] h-[320px] w-[320px] rounded-full bg-[#fff0eb]/55 blur-[100px]" />

      <svg
        className="absolute right-[-10%] top-[12%] hidden h-[520px] w-[620px] text-[#C58A2A]/18 lg:block"
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
        className="absolute right-[-2%] top-[22%] hidden h-[420px] w-[500px] text-[#D4A017]/12 lg:block"
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
    </div>
  );
}

interface LifeAtGalleryImageProps {
  image: LifeAtGalleryImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

function LifeAtGalleryImageCard({
  image,
  className,
  sizes = "(max-width: 1024px) 92vw, 360px",
  priority = false,
}: LifeAtGalleryImageProps) {
  return (
    <motion.div
      variants={sectionTitleFadeUpVariants}
      className={cn(
        "group relative min-h-0 overflow-hidden rounded-[20px] shadow-[0_16px_40px_rgba(80,37,31,0.08)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(80,37,31,0.12)] sm:rounded-[24px]",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes={sizes}
      />
    </motion.div>
  );
}

export function LifeAtSection({ title, description, images, className }: LifeAtSectionProps) {
  const { leftTop, leftBottom, center, rightTop, rightBottom } = images;
  const sideImages = [leftTop, leftBottom, rightTop, rightBottom];

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#fff8f6] py-14 sm:py-16 lg:py-20",
        className,
      )}
    >
      <LifeAtBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto max-w-[760px] text-center"
        >
          <h2 className={sectionHeadingClassName}>{title}</h2>
          <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.5] text-[#5f5553]">
            {description}
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <div className="flex flex-col gap-4 sm:gap-5 lg:hidden">
            <LifeAtGalleryImageCard
              image={center}
              className="relative aspect-[4/5] w-full"
              sizes="92vw"
              priority
            />

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {sideImages.map((image) => (
                <LifeAtGalleryImageCard
                  key={image.id}
                  image={image}
                  className="relative aspect-[4/3] w-full"
                  sizes="44vw"
                />
              ))}
            </div>
          </div>

          <div className="mx-auto hidden max-w-[1140px] lg:grid lg:h-[500px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.42fr)_minmax(0,1fr)] lg:grid-rows-2 lg:gap-5 xl:h-[540px]">
            <LifeAtGalleryImageCard
              image={leftTop}
              className="h-full w-full lg:col-start-1 lg:row-start-1"
              sizes="280px"
            />
            <LifeAtGalleryImageCard
              image={leftBottom}
              className="h-full w-full lg:col-start-1 lg:row-start-2"
              sizes="280px"
            />
            <LifeAtGalleryImageCard
              image={center}
              className="h-full w-full lg:col-start-2 lg:row-start-1 lg:row-span-2"
              sizes="460px"
              priority
            />
            <LifeAtGalleryImageCard
              image={rightTop}
              className="h-full w-full lg:col-start-3 lg:row-start-1"
              sizes="280px"
            />
            <LifeAtGalleryImageCard
              image={rightBottom}
              className="h-full w-full lg:col-start-3 lg:row-start-2"
              sizes="280px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
