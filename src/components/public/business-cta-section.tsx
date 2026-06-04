"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";

export function BusinessCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff4f2] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_82%_42%,rgba(255,225,175,0.28),transparent_38%)]" />
        <svg
          className="absolute bottom-[-18%] right-[-8%] hidden h-[360px] w-[650px] text-[#eedb96]/25 lg:block"
          viewBox="0 0 650 360"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 22 }).map((_, index) => (
            <path
              key={index}
              d={`M${20 + index * 8} ${282 - index * 6} C ${150 + index * 6} ${96 - index * 2}, ${360 + index * 3} ${88 + index * 4}, ${630 - index * 5} ${276 - index * 2}`}
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
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div variants={sectionTitleFadeUpVariants} className="max-w-[430px]">
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#ff4747] text-[15px] font-black text-white">
                S
              </span>
              <span className="text-[18px] font-black uppercase tracking-[-0.04em] text-[#24201f]">
                Skillophy
              </span>
              <span className="text-[16px] font-semibold text-[#a94d47]">business</span>
            </div>

            <h2 className="text-[34px] font-black leading-[1.12] tracking-[-0.045em] text-[#24201f] sm:text-[42px] lg:text-[46px]">
              Best Deal for Your <br className="hidden sm:block" />
              Business Team
            </h2>

            <p className="mt-5 max-w-[390px] text-sm font-medium leading-7 text-[#4f4747]">
              The essence of continuously nurturing one&apos;s passion for education. It
              implies a commitment to keeping the flame of excitement and dedication burning
              bright amidst the challenges and demands of teaching.
            </p>

            <div className="mt-9">
              <Button asChild variant="publicCta" size="publicCta">
                <Link href={ROUTES.pricing}>See Details</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative justify-self-center overflow-hidden rounded-[16px] shadow-[0_22px_50px_rgba(80,37,31,0.08)] lg:justify-self-end"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&auto=format&fit=crop"
              alt="Business team learning together"
              width={560}
              height={350}
              className="h-auto w-full max-w-[560px] object-cover"
              sizes="(max-width: 1024px) 92vw, 560px"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
