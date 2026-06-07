"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { BusinessDifferentiatorIcon } from "@/components/public/business/business-differentiator-icon";
import { businessDifferentiatorsData } from "@/components/public/business/data/business-differentiators.data";

export function BusinessDifferentiatorsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070303] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,73,73,0.16),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(255,172,33,0.08),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.04),transparent_22%)]" />
        
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
            {businessDifferentiatorsData.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-base font-normal leading-[1.5] tracking-normal text-white/72">
            {businessDifferentiatorsData.description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {businessDifferentiatorsData.items.map((item) => (
            <motion.div
              key={item.id}
              variants={sectionTitleFadeUpVariants}
              className="flex flex-col items-start"
            >
              <BusinessDifferentiatorIcon type={item.icon} color={item.color} />
              <p className="mt-5 max-w-[220px] text-[15px] font-bold leading-[1.45] tracking-normal text-white sm:text-[16px]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
