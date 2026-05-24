"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, UsersRound } from "lucide-react";
import { Container } from "@/components/shared";

const reasons = [
  {
    title: "E-learning Expert",
    description:
      "E-learning has become increasingly essential in education, especially with the advancement of technology.",
    icon: BookOpen,
    color: "text-[#ffb12f]",
    glow: "bg-[#ff8a1f]/18",
  },
  {
    title: "Experienced Mentors",
    description:
      "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
    icon: UsersRound,
    color: "text-[#ff485a]",
    glow: "bg-[#ff485a]/18",
  },
  {
    title: "Believing in Innovation",
    description:
      "Innovation is crucial in the field of e-learning. With the rapid evolution of technology and changing education",
    icon: Lightbulb,
    color: "text-[#2f91ff]",
    glow: "bg-[#2f91ff]/18",
  },
];

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

export function WhySkillophySection() {
  return (
    <section className="relative overflow-hidden bg-[#120202] py-20 text-white sm:py-24 lg:py-[108px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_13%_58%,rgba(95,39,8,0.58)_0%,rgba(55,14,4,0.38)_24%,transparent_48%),radial-gradient(ellipse_at_50%_50%,rgba(61,4,18,0.46)_0%,rgba(35,4,12,0.34)_28%,transparent_55%),radial-gradient(ellipse_at_83%_51%,rgba(5,32,64,0.44)_0%,rgba(8,17,38,0.28)_30%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,3,1,0.96)_0%,rgba(18,2,3,0.84)_34%,rgba(12,3,9,0.86)_64%,rgba(6,6,15,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,1,1,0.28)_72%,rgba(4,0,0,0.6)_100%)]" />
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUpVariants} className="mx-auto max-w-[650px] text-center">
          <h2 className="text-[34px] font-black leading-tight tracking-[-0.04em] sm:text-[42px] lg:text-[46px]">
            Why Skillophy is Best?
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[13px] font-medium leading-6 text-white/76 sm:text-sm">
            Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-[72px] lg:grid-cols-3 lg:gap-[72px]">
          {reasons.map(({ title, description, icon: Icon, color, glow }) => (
            <motion.article
              key={title}
              variants={fadeUpVariants}
              className="group text-left"
            >
              <div className="relative mb-7 inline-flex h-[54px] w-[54px] items-center justify-center">
                <span
                  className={`absolute inset-1 rounded-full blur-xl transition group-hover:scale-125 ${glow}`}
                />
                <Icon className={`relative h-12 w-12 stroke-[1.45] ${color}`} />
              </div>
              <h3 className="text-[21px] font-black leading-tight tracking-[-0.03em] text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-[285px] text-[13px] font-medium leading-6 text-white/74">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
