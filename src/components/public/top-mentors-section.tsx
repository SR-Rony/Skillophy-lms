"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { ItemsSlider } from "@/components/public/course-slider";
import { SectionTitle } from "@/components/public/section-title";

interface Mentor {
  id: string;
  name: string;
  role: string;
  image: string;
}

const mentors: Mentor[] = [
  {
    id: "rakib-hasan",
    name: "Rakib Hasan",
    role: "Senior Product Designer",
    image: "/images/teacher-cta.png",
  },
  {
    id: "shahin-shikder",
    name: "Shahin Shikder",
    role: "Expert Sales Trainer",
    image: "/images/teacher-cta.png",
  },
  {
    id: "anowar-shohag",
    name: "Anowar Shohag",
    role: "Full Stack Web Developer",
    image: "/images/teacher-cta.png",
  },
  {
    id: "omar-faruk",
    name: "Omar Faruk",
    role: "School Teacher",
    image: "/images/teacher-cta.png",
  },
  {
    id: "nusrat-jahan",
    name: "Nusrat Jahan",
    role: "Academic Mentor",
    image: "/images/teacher-cta.png",
  },
  {
    id: "mizanur-rahman",
    name: "Mizanur Rahman",
    role: "Career Coach",
    image: "/images/teacher-cta.png",
  },
  {
    id: "maisha-ferdous",
    name: "Maisha Ferdous",
    role: "Business Mentor",
    image: "/images/teacher-cta.png",
  },
  {
    id: "tanvir-alam",
    name: "Tanvir Alam",
    role: "Software Instructor",
    image: "/images/teacher-cta.png",
  },
];

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <article className="group rounded-[14px] transition duration-300">
      <div className="relative h-[255px] w-full overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[78%] rounded-t-[44px] bg-[#ffd221]" />
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-contain object-bottom transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 42vw, 260px"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-5 bg-gradient-to-t from-black/78 via-black/38 to-transparent px-5 pb-7 pt-20 text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-[20px] font-black leading-none tracking-[-0.02em] text-white">
            {mentor.name}
          </h3>
          <p className="mt-2 text-[12px] font-semibold text-white/85">{mentor.role}</p>
        </div>
      </div>

      <div className="relative min-h-[82px] overflow-hidden rounded-b-[14px] border-x border-b border-[#eee7e4] bg-white px-4 pb-5 pt-4 sm:px-5">
        <div className="transition duration-300 group-hover:-translate-y-5 group-hover:opacity-0">
          <h3 className="text-[20px] font-black leading-[1.16] tracking-[-0.02em] text-[#282221]">
            {mentor.name}
          </h3>
          <p className="mt-2 text-[13px] font-medium text-[#4f4747]">{mentor.role}</p>
        </div>

        <div className="absolute inset-0 flex translate-y-4 items-center justify-center gap-5 bg-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="#"
            aria-label={`${mentor.name} LinkedIn`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-[13px] font-black text-primary-dark transition hover:bg-primary hover:text-white"
          >
            in
          </a>
          <a
            href="#"
            aria-label={`${mentor.name} Facebook`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-[13px] font-black text-primary-dark transition hover:bg-primary hover:text-white"
          >
            f
          </a>
        </div>
      </div>
    </article>
  );
}

export function TopMentorsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_18%_34%,rgba(255,235,190,0.3),transparent_36%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_82%_52%,rgba(255,221,166,0.22),transparent_34%)]" />
      </div>

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
          label="Top Mentors"
          title="Learn with Experienced Mentors"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <ItemsSlider
          className="mt-12"
          items={mentors}
          getItemKey={(mentor) => mentor.id}
          renderItem={(mentor) => <MentorCard mentor={mentor} />}
          ariaLabelPrefix="top mentors"
          itemsPerPage={{ lg: 4, sm: 2, default: 1 }}
        />
      </Container>
    </section>
  );
}
