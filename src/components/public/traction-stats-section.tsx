"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { cn } from "@/utils";
import type { TractionStatsSectionProps } from "@/types/traction-stats.types";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

function getItemsGridClass(itemCount: number) {
  if (itemCount >= 4) {
    return "sm:grid-cols-2 lg:grid-cols-4";
  }

  if (itemCount === 3) {
    return "sm:grid-cols-2 lg:grid-cols-3";
  }

  return "sm:grid-cols-2";
}

function TractionStatsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ecd8d2]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#ecd8d2]/70 to-transparent" />
      <svg
        className="absolute left-[-6%] top-1/2 h-[220px] w-[520px] -translate-y-1/2 text-[#d4a017]/12"
        viewBox="0 0 520 220"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${-20 + index * 14} ${180 - index * 6} C ${90 + index * 10} ${40 + index * 2}, ${220 + index * 8} ${36 + index * 3}, ${500 - index * 6} ${170 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-4%] top-1/2 h-[220px] w-[520px] -translate-y-1/2 text-[#d4a017]/10"
        viewBox="0 0 520 220"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 14} ${40 + index * 6} C ${130 + index * 10} ${160 - index * 2}, ${260 + index * 8} ${164 - index * 3}, ${480 - index * 6} ${50 + index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function TractionStatsSection({ items, className }: TractionStatsSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#f7f4f2] py-14 sm:py-16 lg:py-20",
        className,
      )}
    >
      <TractionStatsBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className={cn("grid gap-5 lg:gap-6", getItemsGridClass(items.length))}>
          {items.map(
            ({
              id,
              value,
              label,
              icon,
              valueClassName,
              cardClassName,
              iconWrapClassName,
            }) => (
              <motion.article
                key={id}
                variants={fadeUpVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={cn(
                  "group flex min-h-[190px] flex-col items-center justify-center rounded-[24px] px-6 py-8 text-center shadow-[0_10px_30px_rgba(80,37,31,0.06)] transition duration-300 hover:shadow-[0_22px_48px_rgba(80,37,31,0.12)] sm:min-h-[210px] sm:px-7 sm:py-9",
                  cardClassName,
                )}
              >
                <div
                  className={cn(
                    "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110",
                    iconWrapClassName,
                  )}
                >
                  {icon}
                </div>

                <p
                  className={cn(
                    "text-[32px] font-black leading-none tracking-[-0.04em] sm:text-[36px] lg:text-[40px]",
                    valueClassName,
                  )}
                >
                  {value}
                </p>

                <p className="mt-4 text-[14px] font-semibold text-[#4f4747] sm:text-[15px]">
                  {label}
                </p>
              </motion.article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
