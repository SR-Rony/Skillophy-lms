"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { affiliateSpecialMomentsData } from "@/components/public/affiliate/data/affiliate-special-moments.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { AffiliateMomentImage } from "@/components/public/affiliate/data/affiliate-special-moments.data";

function AffiliateMomentsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,214,153,0.22),transparent_28%),radial-gradient(circle_at_88%_42%,rgba(255,196,120,0.16),transparent_34%)]" />

      <svg
        className="absolute right-[-12%] top-[8%] hidden h-[620px] w-[760px] text-[#d4a017]/14 lg:block"
        viewBox="0 0 760 620"
        fill="none"
      >
        <g transform="translate(380, 310)">
          {Array.from({ length: 18 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="0"
              rx={48 + index * 22}
              ry={32 + index * 15}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${index * 10})`}
            />
          ))}
        </g>
      </svg>

      <svg
        className="absolute right-[-4%] top-[14%] hidden h-[520px] w-[640px] text-[#efb84d]/10 lg:block"
        viewBox="0 0 640 520"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${30 + index * 10} ${420 - index * 10} C ${140 + index * 8} ${120 + index * 4}, ${320 + index * 6} ${110 + index * 3}, ${600 - index * 8} ${400 - index * 6}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

function MomentImage({
  image,
  className,
  priority = false,
}: {
  image: AffiliateMomentImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[18px] bg-[#f3f0ed]", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1024px) 92vw, 24vw"
      />
    </div>
  );
}

function MomentStack({ images }: { images: AffiliateMomentImage[] }) {
  return (
    <div className="flex h-full min-h-[320px] flex-col gap-5 lg:min-h-[520px]">
      {images.map((image) => (
        <MomentImage key={image.id} image={image} className="min-h-0 flex-1" />
      ))}
    </div>
  );
}

export function AffiliateSpecialMomentsSection() {
  const { title, description, columns } = affiliateSpecialMomentsData;
  const mobileImages = columns.flatMap((column) => column.images);

  return (
    <section className="relative overflow-hidden bg-[#fffcf9] py-16 sm:py-20 lg:py-[92px]">
      <AffiliateMomentsBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto max-w-[860px] text-center"
        >
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-normal text-[#24201f] sm:text-[34px] lg:text-[40px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
            {description}
          </p>
        </motion.div>

        <motion.div variants={sectionTitleFadeUpVariants} className="mt-10 flex flex-col gap-5 sm:mt-12 lg:hidden">
          {mobileImages.map((image, index) => (
            <MomentImage
              key={image.id}
              image={image}
              priority={index === 0}
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
            />
          ))}
        </motion.div>

        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mt-10 hidden gap-5 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)_minmax(0,1.08fr)_minmax(0,1fr)] lg:items-stretch"
        >
          {columns.map((column) =>
            column.variant === "stack" ? (
              <MomentStack key={column.id} images={column.images} />
            ) : (
              <MomentImage
                key={column.id}
                image={column.images[0]}
                className="min-h-[520px]"
              />
            ),
          )}
        </motion.div>
      </Container>
    </section>
  );
}
