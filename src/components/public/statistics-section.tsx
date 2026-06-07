"use client";

import { motion } from "framer-motion";
import { GraduationCap, PlaySquare, UserRoundCheck, UsersRound } from "lucide-react";
import { Container } from "@/components/shared";

const stats = [
  {
    value: "4,564+",
    label: "Enrolled Learners",
    icon: UsersRound,
    color: "text-[#ffac21]",
  },
  {
    value: "1,424+",
    label: "Video Lessons",
    icon: PlaySquare,
    color: "text-[#24bf72]",
  },
  {
    value: "325+",
    label: "Experienced Mentors",
    icon: UserRoundCheck,
    color: "text-[#3c91ff]",
  },
  {
    value: "90%",
    label: "Course Completion",
    icon: GraduationCap,
    color: "text-[#ff4b5f]",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export function StatisticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070303] py-16 sm:py-20 lg:py-[92px]">
      {/* <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[245px] -translate-y-1/2 bg-[radial-gradient(circle_at_10%_50%,rgba(255,73,73,0.22),transparent_24%),radial-gradient(circle_at_78%_50%,rgba(255,255,255,0.06),transparent_28%)]" /> */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[245px] w-full -translate-y-1/2 text-white/5"
        viewBox="0 0 1200 245"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }).map((_, index) => (
          <path
            key={index}
            d={`M${-80 + index * 58} 0 C ${70 + index * 45} ${80 + index * 3}, ${-20 + index * 64} ${150 - index * 2}, ${170 + index * 56} 245`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <Container>
        <motion.div
          className="relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
            {stats.map(({ value, label, icon: Icon, color }) => (
              <motion.div
                key={label}
                variants={fadeUpVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group flex min-h-[166px] flex-col items-center justify-center rounded-[10px] border border-white/5 bg-white/[0.08] px-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-colors duration-300 hover:border-white/14 hover:bg-white/[0.12] hover:shadow-[0_24px_60px] hover:shadow-primary/12"
              >
                <Icon
                  className={`mb-5 h-8 w-8 stroke-[1.7] transition-transform duration-300 group-hover:scale-110 ${color}`}
                />
                <div className={`text-[30px] font-black leading-none tracking-[-0.04em] ${color}`}>
                  {value}
                </div>
                <p className="mt-4 text-[13px] font-semibold text-white/86">{label}</p>
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
