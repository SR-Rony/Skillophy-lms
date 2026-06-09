"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { ItemsSlider } from "@/components/public/course-slider";
import { TeamMemberCard } from "@/components/public/team-member-card";
import { aboutLeadershipData } from "@/components/public/about/data/about-leadership.data";
import {
  SectionTitle,
  sectionTitleFadeUpVariants,
} from "@/components/public/section-title";

function LeadershipSectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_18%_34%,rgba(255,235,190,0.3),transparent_36%)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_82%_52%,rgba(255,221,166,0.22),transparent_34%)]" />

      <svg
        className="absolute -left-[8%] -top-[12%] hidden h-[320px] w-[480px] text-[#d4a017]/16 lg:block"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${-10 + index * 12} ${250 - index * 8} C ${80 + index * 10} ${70 + index * 3}, ${180 + index * 8} ${64 + index * 2}, ${460 - index * 8} ${230 - index * 5}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute -bottom-[18%] -right-[6%] hidden h-[320px] w-[480px] text-[#d4a017]/14 lg:block"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 12} ${40 + index * 8} C ${120 + index * 10} ${180 - index * 2}, ${260 + index * 8} ${176 - index * 3}, ${470 - index * 6} ${50 + index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function AboutLeadershipSection() {
  const { label, title, description, members } = aboutLeadershipData;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <LeadershipSectionBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <SectionTitle
          className="max-w-[840px]"
          label={label}
          title={title}
          description={description}
          labelLines="both"
        />

        <motion.div
          variants={sectionTitleFadeUpVariants}
          className="mt-12 hidden gap-6 lg:grid lg:grid-cols-4"
        >
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>

        <div className="mt-12 lg:hidden">
          <ItemsSlider
            items={members}
            getItemKey={(member) => member.id}
            renderItem={(member) => <TeamMemberCard member={member} />}
            ariaLabelPrefix="leadership team"
            itemsPerPage={{ sm: 2, default: 1 }}
            slideDotCount={4}
          />
        </div>
      </Container>
    </section>
  );
}
