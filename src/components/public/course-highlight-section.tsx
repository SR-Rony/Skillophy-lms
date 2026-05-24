"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";
import { Container } from "@/components/shared";

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

const stats = [
  {
    value: "1256",
    label: "Reviewed by",
    className: "bg-[#f3edff] text-[#883cf5] lg:absolute lg:right-0 lg:top-0",
  },
  {
    value: "1300",
    label: "Enrolled Student",
    className: "bg-[#e9fffa] text-[#00a992] lg:absolute lg:left-0 lg:top-[90px]",
  },
  {
    value: "4.9",
    label: "Course Rating",
    className: "bg-[#fff7df] text-[#f59b00] lg:absolute lg:right-0 lg:top-[156px]",
    icon: Star,
  },
  {
    value: "45",
    label: "Total Lessons",
    className: "bg-[#fff0ff] text-[#cf31e8] lg:absolute lg:left-0 lg:bottom-0",
  },
];

export function CourseHighlightSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-[116px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_22%_36%,rgba(255,235,190,0.32),transparent_38%)]" />
        <svg
          className="absolute right-0 top-[20%] hidden h-[335px] w-[600px] text-[#eedb96]/30 lg:block"
          viewBox="0 0 560 330"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <path
              key={index}
              d={`M${24 + index * 8} ${244 - index * 6} C ${130 + index * 7} ${76 - index * 1.8}, ${304 + index * 3.5} ${72 + index * 4.6}, ${540 - index * 4} ${266 - index * 2.6}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[326px_480px_minmax(270px,1fr)] lg:gap-5">
          <motion.div variants={fadeUpVariants} className="flex flex-col items-start">
            <div className="relative h-[214px] w-full max-w-[326px] overflow-hidden rounded-[18px] bg-[#ef98a7] shadow-[0_18px_50px_rgba(67,27,27,0.08)] sm:h-[232px] sm:max-w-[360px] lg:h-[228px] lg:max-w-[326px]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop"
                alt="UX design course mentors"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 360px, 326px"
              />
            </div>

            <Link
              href="/courses/foundations-user-experience-ux-design"
              className="mt-8 inline-flex min-h-[52px] min-w-[176px] items-center justify-center rounded-[12px] bg-[#ff3d3f] px-7 text-[13px] font-black text-white shadow-[0_14px_28px_rgba(255,61,63,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ef3033] lg:mt-[34px]"
            >
              Enroll this Course
            </Link>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="max-w-[510px] lg:self-start lg:pt-1">
            <div className="flex items-start gap-4">
              <h2 className="max-w-[440px] text-[32px] font-black leading-[1.15] tracking-[-0.045em] text-[#292323] sm:text-[38px] lg:text-[38px]">
                Foundations of User <br className="hidden lg:block" />
                Experience (UX) Design
              </h2>
              <span className="mt-0 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffbd16]/15 text-[#ffbd16] sm:flex">
                <Award className="h-10 w-10 fill-[#ffbd16]/15 stroke-[2.3]" />
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-[#4d4442]">
              <Image
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah"
                alt=""
                width={22}
                height={22}
                unoptimized
                className="rounded-full bg-[#f7ebe8]"
              />
              <span>Abdullah Mamun</span>
            </div>

            <p className="mt-5 max-w-[385px] text-[13px] font-medium leading-[1.72] text-[#413937]">
              In the forthcoming future, the demand for product designers is expected to surge exponentially. As technology continues to evolve.
            </p>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-[28px] font-black leading-none tracking-[-0.04em] text-[#4a1111]">৳2400</span>
              <span className="text-sm font-semibold text-[#9a8c8a] line-through">৳2600</span>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-2 gap-5 sm:max-w-[380px] lg:relative lg:min-h-[360px] lg:w-[332px] lg:max-w-none lg:grid-cols-none lg:justify-self-end"
          >
            {stats.map(({ value, label, className, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeUpVariants}
                className={`min-h-[104px] w-full rounded-[20px] p-6 shadow-[0_16px_36px_rgba(60,31,35,0.06)] lg:w-[142px] ${className}`}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-5 w-5 fill-current" />}
                  <span className="text-[31px] font-black leading-none tracking-[-0.04em]">
                    {value}
                  </span>
                </div>
                <p className="mt-3 max-w-[82px] text-[14px] font-medium leading-6 text-[#2f2928]">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
