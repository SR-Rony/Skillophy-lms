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
    ? "bg-[#ff4747]/35"
    : lines === "trailing"
      ? "bg-[#a5655c]"
      : "bg-[#efb0aa]";

  const labelClassName = isDark
    ? "text-[#ff4747]"
    : lines === "trailing"
      ? "text-[#8a2525]"
      : "text-[#a94d47]";

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
          "mb-3 flex items-center gap-3",
          isCenter && lines === "both" && "justify-center",
          lines === "none" && "mb-3"
        )}
      >
        {lines === "both" && <span className={cn("h-px w-16", lineClassName)} />}
        <span
          className={cn(
            "text-[12px] font-extrabold uppercase tracking-[0.18em]",
            labelClassName
          )}
        >
          {label}
        </span>
        {lines !== "none" && <span className={cn("h-px w-16", lineClassName)} />}
      </div>

      <h2
        className={cn(
          "font-black leading-[1.12] text-[#24201f] sm:text-[42px] lg:text-[46px]",
          isCenter
            ? "text-[32px] tracking-[-0.04em]"
            : "text-[34px] tracking-[-0.045em]",
          isDark && "text-white sm:text-[44px] lg:text-[48px]",
          headingClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-sm font-medium leading-6",
            isCenter ? "mx-auto mt-5 max-w-[680px]" : "mt-4 max-w-[680px]",
            isDark ? "leading-7 text-white/58" : "text-[#5f5553]",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
