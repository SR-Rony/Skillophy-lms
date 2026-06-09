"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { ContactInfoCard } from "@/components/public/contact/contact-info-card";
import { contactMapSectionData } from "@/components/public/contact/data/contact-map-section.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

function ContactMapSectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#f8f7f6]" />

      <svg
        className="absolute left-[-8%] top-[6%] hidden h-[320px] w-[420px] text-[#ead8d2]/45 lg:block"
        viewBox="0 0 420 320"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${12 + index * 10} ${240 - index * 8} C ${70 + index * 8} ${92 - index * 2}, ${180 + index * 6} ${84 + index * 3}, ${390 - index * 5} ${228 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-6%] bottom-[8%] hidden h-[300px] w-[480px] text-[#d4a017]/10 lg:block"
        viewBox="0 0 480 300"
        fill="none"
      >
        <g transform="translate(240, 150)">
          {Array.from({ length: 12 }).map((_, index) => (
            <ellipse
              key={index}
              cx="0"
              cy="0"
              rx={36 + index * 18}
              ry={24 + index * 12}
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${index * 8})`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function ContactMapSection() {
  const { mapEmbedUrl, mapTitle, cards } = contactMapSectionData;

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <ContactMapSectionBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants} className="relative">
          <div className="overflow-hidden rounded-[24px] border border-[#ece6e3] bg-white shadow-[0_18px_48px_rgba(80,37,31,0.08)] sm:rounded-[28px] lg:rounded-[32px]">
            <iframe
              title={mapTitle}
              src={mapEmbedUrl}
              className="block h-[320px] w-full border-0 sm:h-[380px] lg:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="relative z-10 -mt-10 px-3 sm:-mt-14 sm:px-6 lg:-mt-20 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {cards.map((card) => (
                <motion.div key={card.id} variants={sectionTitleFadeUpVariants}>
                  <ContactInfoCard
                    title={card.title}
                    lines={card.lines}
                    iconTone={card.iconTone}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
