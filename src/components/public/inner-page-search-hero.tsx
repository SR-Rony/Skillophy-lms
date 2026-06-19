"use client";

import { Heading } from "@/components/shared/heading";

import { type FormEvent } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container } from "@/components/shared";
import {
  sectionLabelClassName,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";
import { cn } from "@/utils";
import type { InnerPageSearchHeroProps } from "@/types/inner-page-search-hero.types";

function InnerPageSearchHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <div className="absolute left-[-8%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#d9e8f5]/45 blur-3xl" />
      <div className="absolute right-[-6%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#ffe2cc]/45 blur-3xl" />
      <div className="absolute left-[20%] top-[42%] h-[220px] w-[220px] rounded-full bg-[#f5dce8]/30 blur-3xl" />

      <svg
        className="absolute left-[-6%] top-[8%] hidden h-[320px] w-[420px] text-[#efb0aa]/35 lg:block"
        viewBox="0 0 420 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${8 + index * 10} ${240 - index * 7} C ${60 + index * 8} ${88 - index * 2}, ${170 + index * 6} ${78 + index * 3}, ${380 - index * 5} ${228 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-4%] top-[6%] hidden h-[340px] w-[520px] text-[#f0c89a]/28 lg:block"
        viewBox="0 0 520 340"
        fill="none"
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
    </div>
  );
}

export function InnerPageSearchHero({
  label,
  title,
  description,
  searchPlaceholder,
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
  searchAriaLabel = "Search",
  scrollTargetId,
  className,
  showLabel = true,
  showDescription = true,
}: InnerPageSearchHeroProps) {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearchSubmit();

    if (scrollTargetId) {
      document.getElementById(scrollTargetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[88px]",
        className,
      )}
    >
      <InnerPageSearchHeroBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto max-w-[860px] text-center"
        >
          {showLabel ? (
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#efb0aa]" aria-hidden />
              <span className={cn(sectionLabelClassName, "font-bold uppercase text-primary-dark")}>
                {label}
              </span>
              <span className="h-px w-16 bg-[#efb0aa]" aria-hidden />
            </div>
          ) : null}

          <Heading as="h1" variant="section">{title}</Heading>

          {showDescription ? (
            <p className="mx-auto mt-5 max-w-[680px] text-center text-base font-normal leading-[1.5] tracking-normal text-[#5f5553]">
              {description}
            </p>
          ) : null}
        </motion.div>

        <motion.form
          variants={sectionTitleFadeUpVariants}
          onSubmit={handleSearch}
          className={cn(
            "mx-auto flex w-full max-w-[640px] items-center rounded-lg border border-[#e8e4e2] bg-white py-1.5 pl-6 pr-1.5 shadow-[0_8px_30px_rgba(36,32,31,0.04)]",
            showDescription ? "mt-10 sm:mt-12" : "mt-8 sm:mt-10",
          )}
          role="search"
        >
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
            placeholder={searchPlaceholder}
            className="min-w-0 flex-1 bg-transparent text-[15px] text-[#24201f] outline-none placeholder:text-[#b8b0ad]"
            aria-label={searchAriaLabel}
          />
          <button
            type="submit"
            className="flex shrink-0 items-center justify-center rounded-md bg-[#1a1a1a] p-[10px] text-white transition hover:bg-[#2a2a2a]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" aria-hidden />
          </button>
        </motion.form>
      </Container>
    </section>
  );
}
