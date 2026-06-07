"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { businessTestimonialData } from "@/components/public/business/data/business-testimonial.data";
import { TelenorLogo } from "@/components/public/business/telenor-logo";

const imageSlideInVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function BusinessTestimonialSection() {
  const { imageSrc, imageAlt, headline, body, name, role } = businessTestimonialData;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_52%,rgba(255,172,33,0.16),transparent_32%),radial-gradient(circle_at_72%_38%,rgba(255,73,73,0.12),transparent_28%)]" />
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
            className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="w-full min-w-0">
            <div className="relative mx-auto max-w-[620px] lg:mx-0 lg:ml-auto lg:max-w-[640px]">
              <div className="pointer-events-none absolute -right-2 -top-2 h-[calc(100%+18px)] w-[calc(100%+18px)] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#ffb347] via-[#ff8c42] to-[#ff5a1f] sm:-right-3 sm:-top-3">
                <svg
                  className="absolute inset-0 h-full w-full text-white/20"
                  viewBox="0 0 640 360"
                  fill="none"
                  aria-hidden="true"
                >
                  {Array.from({ length: 14 }).map((_, index) => (
                    <ellipse
                      key={index}
                      cx="520"
                      cy="180"
                      rx={80 + index * 22}
                      ry={50 + index * 14}
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  ))}
                </svg>
              </div>

              <article className="relative rounded-[24px] bg-white px-6 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <Quote
                  className="mx-auto mb-6 h-10 w-10 fill-primary text-primary sm:h-11 sm:w-11"
                  aria-hidden="true"
                />

                <h2 className="text-[22px] font-bold leading-[1.35] tracking-normal text-[#141414] sm:text-[24px] lg:text-[26px]">
                  {headline}
                </h2>

                <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-[1.75] text-[#4f4f4f] sm:text-[15px]">
                  {body}
                </p>
              </article>

              <div className="relative mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[18px] font-bold leading-tight text-white sm:text-[20px]">
                    {name}
                  </p>
                  <p className="mt-1 text-[13px] font-normal text-white/72 sm:text-[14px]">
                    {role}
                  </p>
                </div>

                <TelenorLogo className="flex items-center gap-3 text-white sm:pb-0.5" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
