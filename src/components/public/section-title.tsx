"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils";

export const sectionTitleFadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

/** Section label — Outfit 400, 16px, 130% line-height, 6% letter-spacing */
export const sectionLabelClassName =
  "font-normal text-base uppercase leading-[1.3] tracking-[0.06em]";

/** Section heading — Outfit 700, 48px, 110% line-height */
export const sectionHeadingClassName =
  "text-[48px] font-bold leading-[1.1] tracking-normal text-[#24201f]";

/** Hero heading — Outfit 800, 62px, 120% line-height, 2% letter-spacing */
export const heroHeadingClassName =
  "text-[40px] font-extrabold leading-[1.2] tracking-[0.02em] text-[#24201f] sm:text-[52px] lg:text-[62px]";

interface SectionTitleProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  labelLines?: "both" | "trailing" | "none";
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  theme = "light",
  labelLines,
  className,
  headingClassName,
  descriptionClassName,
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";
  const lines = labelLines ?? (isCenter ? "both" : "trailing");

  const lineClassName = isDark
    ? "bg-primary/35"
    : lines === "trailing"
      ? "bg-[#a5655c]"
      : "bg-[#efb0aa]";

  const labelColorClassName = isDark
    ? "text-primary"
    : lines === "trailing"
      ? "text-primary-dark"
      : "text-primary-dark";

  return (
    <motion.div
      variants={sectionTitleFadeUpVariants}
      className={cn(
        isCenter ? "mx-auto max-w-[760px] text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          isCenter && lines === "both" && "justify-center",
          lines === "none" && "mb-4"
        )}
      >
        {lines === "both" && <span className={cn("h-px w-16", lineClassName)} />}
        <span className={cn(sectionLabelClassName, labelColorClassName)}>
          {label}
        </span>
        {lines !== "none" && <span className={cn("h-px w-16", lineClassName)} />}
      </div>

      <h2
        className={cn(
          sectionHeadingClassName,
          isCenter ? "text-center" : "text-left",
          isDark && "text-white",
          headingClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base font-normal leading-[1.5] tracking-normal",
            isCenter ? "mx-auto mt-5 max-w-[680px] text-center" : "mt-4 max-w-[680px] text-left",
            isDark ? "text-white/58" : "text-[#5f5553]",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
