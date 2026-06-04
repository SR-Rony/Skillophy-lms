"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SectionTitle, sectionTitleFadeUpVariants } from "@/components/public/section-title";

interface Workshop {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  schedule: string;
}

const workshops: Workshop[] = [
  {
    id: "healthy-life",
    title: "How to Achieve Healthy Life",
    slug: "how-to-achieve-healthy-life",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Sep 24, 10:30 AM",
  },
  {
    id: "facebook-marketing",
    title: "Facebook Marketing",
    slug: "facebook-marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Sep 24, 10:30 AM",
  },
  {
    id: "wordpress-theme-development",
    title: "WordPress Theme Development",
    slug: "wordpress-theme-development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Sep 24, 10:30 AM",
  },
];

function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <motion.article
      variants={sectionTitleFadeUpVariants}
      className="h-full overflow-hidden rounded-[14px] border border-[#eee1de] bg-white shadow-[0_18px_38px_rgba(80,37,31,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(80,37,31,0.1)]"
    >
      <Link href={`/workshops/${workshop.slug}`} className="block h-full">
        <div className="relative h-[190px] overflow-hidden sm:h-[205px] lg:h-[238px]">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 336px"
          />
        </div>

        <div className="px-4 pb-5 pt-4 sm:px-5">
          <span className="inline-flex rounded-full bg-[#fff8e8] px-3 py-1 text-[11px] font-semibold text-[#d6a43a]">
            {workshop.category}
          </span>
          <h3 className="mt-3 min-h-[52px] text-[19px] font-black leading-[1.18] tracking-[-0.02em] text-[#282221] sm:text-[21px]">
            {workshop.title}
          </h3>
          <p className="mt-3 flex items-center gap-1.5 text-[13px] font-medium text-[#4f4747]">
            <CalendarDays className="h-3.5 w-3.5 stroke-[1.8]" />
            {workshop.schedule}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}

export function WorkshopSection() {
  return (
    <section className="bg-[#f8f8f7] py-16 sm:py-20 lg:py-[92px]">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <SectionTitle
          label="Workshop"
          title="Upcoming LIVE Workshop"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>

        <motion.div variants={sectionTitleFadeUpVariants} className="mt-10 flex justify-center">
          <Button asChild variant="publicCta" size="publicCta">
            <Link href="/workshops">See All Workshops</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
