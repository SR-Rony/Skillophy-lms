"use client";

import { Heading } from "@/components/shared/heading";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { cn } from "@/utils";
import type { FeatureHighlightSectionProps } from "@/types/feature-highlight.types";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

function getItemsGridClass(itemCount: number) {
  if (itemCount >= 4) {
    return "sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10";
  }

  if (itemCount === 3) {
    return "sm:grid-cols-2 lg:grid-cols-3 lg:gap-[72px]";
  }

  if (itemCount === 2) {
    return "sm:grid-cols-2 lg:grid-cols-2 lg:gap-12 xl:gap-16";
  }

  return "sm:grid-cols-2 lg:grid-cols-3 lg:gap-[72px]";
}

export function FeatureHighlightSection({
  title,
  description,
  items,
  className,
}: FeatureHighlightSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#120202] py-20 text-white sm:py-24 lg:py-[108px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_13%_58%,rgba(95,39,8,0.58)_0%,rgba(55,14,4,0.38)_24%,transparent_48%),radial-gradient(ellipse_at_50%_50%,rgba(61,4,18,0.46)_0%,rgba(35,4,12,0.34)_28%,transparent_55%),radial-gradient(ellipse_at_83%_51%,rgba(5,32,64,0.44)_0%,rgba(8,17,38,0.28)_30%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,3,1,0.96)_0%,rgba(18,2,3,0.84)_34%,rgba(12,3,9,0.86)_64%,rgba(6,6,15,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,1,1,0.28)_72%,rgba(4,0,0,0.6)_100%)]" />
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUpVariants} className="mx-auto max-w-[650px] text-center">
          <Heading as="h2" variant="display-feature">
            {title}
          </Heading>
          <p className="mx-auto mt-4 max-w-[620px] text-[13px] font-medium leading-6 text-white/76 sm:text-sm">
            {description}
          </p>
        </motion.div>

        <div
          className={cn(
            "mt-14 grid gap-10 lg:mt-[72px]",
            getItemsGridClass(items.length),
          )}
        >
          {items.map(({ id, title: itemTitle, description: itemDescription, icon, glowClass }) => (
            <motion.article key={id} variants={fadeUpVariants} className="group text-left">
              <div className="relative mb-7 inline-flex h-[54px] w-[54px] items-center justify-center">
                <span
                  className={cn(
                    "absolute inset-1 rounded-full blur-xl transition group-hover:scale-125",
                    glowClass,
                  )}
                />
                <div className="relative flex h-12 w-12 items-center justify-center">{icon}</div>
              </div>
              <Heading as="h3" variant="card-display-inverse">
                {itemTitle}
              </Heading>
              {itemDescription ? (
                <p className="mt-3 max-w-[285px] text-[13px] font-medium leading-6 text-white/74">
                  {itemDescription}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
