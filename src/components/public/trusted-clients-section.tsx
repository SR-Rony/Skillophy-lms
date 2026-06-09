"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import {
  sectionTitleFadeUpVariants,
  trustedClientsHeadingClassName,
} from "@/components/public/section-title";
import { trustedClientsData } from "@/components/public/data/trusted-clients.data";
import { TrustedClientLogo } from "@/components/public/trusted-client-logo";
import type { TrustedClientsSectionProps } from "@/types/trusted-clients.types";
import { cn } from "@/utils";

function TrustedClientsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#f8f7f6]" />
      <div className="absolute left-[-8%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#ffe2cc]/40 blur-3xl" />
      <div className="absolute right-[-6%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#d9e8f5]/45 blur-3xl" />
    </div>
  );
}

export function TrustedClientsSection({
  data = trustedClientsData,
  className,
}: TrustedClientsSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-12 sm:py-14 lg:py-16",
        className,
      )}
    >
      <TrustedClientsBackground />

      <Container className="relative z-10">
        <h2 className={`text-center ${trustedClientsHeadingClassName}`}>{data.title}</h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionTitleFadeUpVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:mt-12 lg:mt-15 sm:gap-x-12 lg:gap-x-16 xl:gap-x-[72px]"
        >
          {data.logos.map((logo) => (
            <li key={logo.id} className="flex items-center justify-center text-[#4f4f4f]">
              <TrustedClientLogo id={logo.id} className="h-7 w-auto sm:h-8 lg:h-[34px]" />
              <span className="sr-only">{logo.name}</span>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
