"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import {
  sectionTitleFadeUpVariants,
  trustedClientsHeadingClassName,
} from "@/components/public/section-title";
import { TrustedClientLogo } from "@/components/public/business/trusted-client-logo";
import { teacherTrustedClientsData } from "@/components/public/teachers/data/teacher-trusted-clients.data";

export function TeacherTrustedClientsSection() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        <h2 className={`text-center ${trustedClientsHeadingClassName}`}>
          {teacherTrustedClientsData.title}
        </h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionTitleFadeUpVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:mt-12 sm:gap-x-12 lg:mt-15 lg:gap-x-16 xl:gap-x-[72px]"
        >
          {teacherTrustedClientsData.logos.map((logo) => (
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
