"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { PortraitTestimonialSectionProps } from "@/types/portrait-testimonial.types";

const imageSlideInVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function PortraitTestimonialSection({
  imageSrc,
  imageAlt,
  headline,
  body,
  name,
  role,
  className,
}: PortraitTestimonialSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#0a0402] py-16 sm:py-20 lg:py-[92px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_52%,rgba(255,172,33,0.14),transparent_32%),radial-gradient(circle_at_72%_38%,rgba(255,73,73,0.1),transparent_28%)]" />
        <svg
          className="absolute bottom-[-12%] right-[-6%] hidden h-[420px] w-[760px] text-[#8a6428]/20 lg:block"
          viewBox="0 0 760 420"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 32 }).map((_, index) => (
            <path
              key={index}
              d={`M${index * 8} ${350 - index * 4} C ${160 + index * 5} ${160 - index * 2}, ${380 + index * 3} ${156 + index * 2}, ${730 - index * 4} ${260 + index * 3}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
          <motion.div
            variants={imageSlideInVariants}
            className="relative z-20 mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 80vw, 420px"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="w-full min-w-0">
            <div className="relative mx-auto max-w-[620px] lg:mx-0 lg:ml-auto lg:max-w-[640px]">
              <div className="relative">
                <div
                  className="pointer-events-none absolute -right-3 -top-5 z-0 h-[calc(100%+28px)] w-[92%] overflow-hidden rounded-[26px] rounded-tl-[72px] bg-gradient-to-br from-[#ffd06a] via-[#ffb84d] to-[#ff9f2e] sm:-right-4 sm:-top-6 sm:rounded-[30px] sm:rounded-tl-[88px]"
                  aria-hidden
                >
                  <svg
                    className="absolute right-0 top-0 h-full w-[58%] text-[#c97a12]/25"
                    viewBox="0 0 320 420"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {Array.from({ length: 16 }).map((_, index) => (
                      <path
                        key={index}
                        d={`M${20 + index * 6} ${380 - index * 8} C ${90 + index * 5} ${120 - index * 2}, ${180 + index * 4} ${100 + index * 3}, ${300 - index * 4} ${260 - index * 4}`}
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>

                <article className="relative z-10 rounded-[24px] bg-gradient-to-br from-white via-white to-[#fff7ef] px-6 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)] ring-1 ring-white/70 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                  <Quote
                    className="mx-auto mb-6 h-10 w-10 fill-[#ff8c2a] text-[#ff8c2a] sm:h-11 sm:w-11"
                    aria-hidden="true"
                  />

                  <h2 className="text-[22px] font-bold leading-[1.35] tracking-normal text-[#141414] sm:text-[24px] lg:text-[26px]">
                    {headline}
                  </h2>

                  <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-[1.75] text-[#4f4f4f] sm:text-[15px]">
                    {body}
                  </p>
                </article>
              </div>

              <div className="relative z-10 mt-8 text-left">
                <p className="text-[18px] font-bold leading-tight text-white sm:text-[20px]">
                  {name}
                </p>
                <p className="mt-1 text-[13px] font-normal text-white/72 sm:text-[14px]">
                  {role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
