"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { TeacherDifferentiatorIcon } from "@/components/public/teachers/teacher-differentiator-icon";
import { teacherDifferentiatorsData } from "@/components/public/teachers/data/teacher-differentiators.data";

export function TeacherDifferentiatorsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070303] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,73,73,0.18),transparent_38%),radial-gradient(circle_at_50%_42%,rgba(255,73,73,0.12),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.04),transparent_22%)]" />
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mx-auto max-w-[760px] text-center"
        >
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-normal text-white sm:text-[36px] lg:text-[40px]">
            {teacherDifferentiatorsData.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.5] tracking-normal text-white/72">
            {teacherDifferentiatorsData.description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:mt-16 lg:mt-[72px] lg:grid-cols-3 lg:gap-8 xl:gap-12">
          {teacherDifferentiatorsData.items.map((item) => (
            <motion.div
              key={item.id}
              variants={sectionTitleFadeUpVariants}
              className="flex flex-col items-start"
            >
              <TeacherDifferentiatorIcon type={item.icon} color={item.color} />
              <h3 className="mt-5 text-[15px] font-bold leading-[1.45] tracking-normal text-white sm:text-[16px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[320px] text-[14px] font-normal leading-[1.65] text-white/58 sm:text-[15px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
