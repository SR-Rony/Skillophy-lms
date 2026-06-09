"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { ContactForm } from "@/components/public/contact/contact-form";
import { contactFormSectionData } from "@/components/public/contact/data/contact-form-section.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

export function ContactFormSection() {
  const { label, title, description, imageSrc, imageAlt } = contactFormSectionData;

  return (
    <section className="relative overflow-hidden bg-[#fdf5f2] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[-8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[#ffe2cc]/35 blur-[90px]" />
        <div className="absolute right-[-6%] bottom-[8%] h-[260px] w-[260px] rounded-full bg-[#f3dce8]/40 blur-[90px]" />

        <svg
          className="absolute left-[-4%] top-[12%] hidden h-[340px] w-[420px] text-[#ffac21]/18 lg:block"
          viewBox="0 0 420 340"
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
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[520px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 88vw, 460px"
              />

              <div className="absolute left-[70%] top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8c2a] text-[22px] font-bold leading-none text-white shadow-[0_10px_24px_rgba(255,140,42,0.35)] sm:h-14 sm:w-14 sm:text-[26px]">
                ?
              </div>
            </div>
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[13px]">
                {label}
              </span>
              <span className="h-px w-10 bg-primary/70 sm:w-14" aria-hidden />
            </div>

            <h2 className="text-[32px] font-bold leading-[1.2] tracking-normal text-[#24201f] sm:text-[36px] lg:text-[40px]">
              {title}
            </h2>

            <p className="mt-5 max-w-[520px] text-[14px] leading-[1.75] text-[#6f6562] sm:text-[15px]">
              {description}
            </p>

            <div className="mt-8 lg:mt-10">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
