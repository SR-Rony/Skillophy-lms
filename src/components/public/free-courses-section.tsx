"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { CourseSlider } from "@/components/public/course-slider";
import type { PublicCourse } from "@/components/public/public-course-card";
import { SectionTitle } from "@/components/public/section-title";

const freeCourses: PublicCourse[] = [
  {
    id: "english-everyday",
    title: "English for Every day",
    slug: "english-for-every-day",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
    },
    lessons: 24,
    rating: 4.7,
  },
  {
    id: "quran-learning",
    title: "Quran Learning",
    slug: "quran-learning",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Quran",
    },
    lessons: 24,
    rating: 4.7,
  },
  {
    id: "communication-hacks",
    title: "Communication Hacks",
    slug: "communication-hacks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Comm",
    },
    lessons: 24,
    rating: 4.7,
  },
  {
    id: "personal-health",
    title: "Personal Health",
    slug: "personal-health",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Health",
    },
    lessons: 24,
    rating: 4.6,
  },
  {
    id: "facebook-marketing",
    title: "Facebook Marketing",
    slug: "facebook-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marketing",
    },
    lessons: 24,
    rating: 4.8,
  },
  {
    id: "web-design-basics",
    title: "Web Design Basics",
    slug: "web-design-basics",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=WebDesign",
    },
    lessons: 24,
    rating: 4.7,
  },
];

export function FreeCoursesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff4f2] py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute right-0 top-[12%] hidden h-[335px] w-[600px] text-[#eedb96]/30 lg:block"
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <SectionTitle
          label="Free Courses"
          title="Enhance Your Skills through Free Learning Opportunities"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <CourseSlider
          className="mt-12 sm:mt-14"
          courses={freeCourses}
          variant="free"
          ariaLabelPrefix="free courses"
        />
      </Container>
    </section>
  );
}
