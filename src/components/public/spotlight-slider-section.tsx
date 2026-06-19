"use client";

import { Heading } from "@/components/shared/heading";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { ItemsSlider } from "@/components/public/course-slider";
import { SectionTitle, sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { SpotlightSliderSectionProps } from "@/types/spotlight-slider.types";

function SpotlightSliderBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_18%_34%,rgba(255,235,190,0.3),transparent_36%)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_82%_52%,rgba(255,221,166,0.22),transparent_34%)]" />

      <svg
        className="absolute -left-[8%] -top-[12%] h-[280px] w-[420px] text-[#d4a017]/16 sm:h-[320px] sm:w-[480px]"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${-10 + index * 12} ${250 - index * 8} C ${80 + index * 10} ${70 + index * 3}, ${180 + index * 8} ${64 + index * 2}, ${460 - index * 8} ${230 - index * 5}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute -bottom-[18%] -right-[6%] h-[280px] w-[420px] text-[#d4a017]/14 sm:h-[320px] sm:w-[480px]"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 12} ${40 + index * 8} C ${120 + index * 10} ${180 - index * 2}, ${260 + index * 8} ${176 - index * 3}, ${470 - index * 6} ${50 + index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function SpotlightSliderSection<T>({
  label,
  title,
  description,
  items,
  getItemKey,
  renderItem,
  ariaLabelPrefix,
  itemsPerPage = { lg: 2, sm: 1, default: 1 },
  slideDotCount = 2,
  className,
  titleClassName,
}: SpotlightSliderSectionProps<T>) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]",
        className,
      )}
    >
      <SpotlightSliderBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {label ? (
          <SectionTitle
            className={cn("max-w-[840px]", titleClassName)}
            label={label}
            title={title}
            description={description}
            labelLines="both"
          />
        ) : (
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className={cn("mx-auto max-w-[840px] text-center", titleClassName)}
          >
            <Heading as="h2" variant="section">{title}</Heading>
            <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.5] text-[#5f5553]">
              {description}
            </p>
          </motion.div>
        )}

        <ItemsSlider
          className="mt-12"
          items={items}
          getItemKey={getItemKey}
          renderItem={renderItem}
          ariaLabelPrefix={ariaLabelPrefix}
          itemsPerPage={itemsPerPage}
          slideDotCount={slideDotCount}
        />
      </Container>
    </section>
  );
}
