"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { homeStatisticsData } from "@/components/public/data/home-statistics.data";
import { cn } from "@/utils";
import type { StatisticsSectionProps } from "@/types/statistics.types";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export function StatisticsSection({
  stats = homeStatisticsData,
  variant = "dark",
  className,
}: Partial<StatisticsSectionProps> = {}) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 lg:py-[92px]",
        isLight ? "bg-white" : "bg-[#070303]",
        className,
      )}
    >
      <svg
        className={cn(
          "pointer-events-none absolute inset-x-0 top-1/2 h-[245px] w-full -translate-y-1/2",
          isLight ? "text-[#f0e8e2]/70" : "text-white/5",
        )}
        viewBox="0 0 1200 245"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }).map((_, index) => (
          <path
            key={index}
            d={`M${-80 + index * 58} 0 C ${70 + index * 45} ${80 + index * 3}, ${-20 + index * 64} ${150 - index * 2}, ${170 + index * 56} 245`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <Container>
        <motion.div
          className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {stats.map(({ id, value, label, icon: Icon, color }) => (
            <motion.div
              key={id}
              variants={fadeUpVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={cn(
                "group flex min-h-[166px] flex-col items-center justify-center rounded-[10px] px-5 text-center transition-colors duration-300",
                isLight
                  ? "border border-[#ece6e3] bg-[#faf8f7] shadow-[0_12px_32px_rgba(80,37,31,0.06)] hover:border-[#e2dbd7] hover:bg-white hover:shadow-[0_18px_40px_rgba(80,37,31,0.1)]"
                  : "border border-white/5 bg-white/[0.08] shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-sm hover:border-white/14 hover:bg-white/[0.12] hover:shadow-[0_24px_60px] hover:shadow-primary/12",
              )}
            >
              <Icon
                className={cn(
                  "mb-5 h-8 w-8 stroke-[1.7] transition-transform duration-300 group-hover:scale-110",
                  color,
                )}
              />
              <div className={cn("text-[30px] font-black leading-none tracking-[-0.04em]", color)}>
                {value}
              </div>
              <p
                className={cn(
                  "mt-4 text-[13px] font-semibold",
                  isLight ? "text-[#6f6562]" : "text-white/86",
                )}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
