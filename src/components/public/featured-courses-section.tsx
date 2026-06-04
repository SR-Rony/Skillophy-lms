"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { CourseSlider } from "@/components/public/course-slider";
import type { PublicCourse } from "@/components/public/public-course-card";
import { SectionTitle } from "@/components/public/section-title";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

const featuredCourses: PublicCourse[] = [
  {
    id: "web-design-php-laravel",
    title: "Web Design & Development with PHP & Laravel",
    slug: "web-design-development-php-laravel",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
    },
    lessons: 24,
    rating: 4.7,
    price: 2400,
    originalPrice: 2600,
  },
  {
    id: "ux-design-foundations",
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mamun",
    },
    lessons: 24,
    rating: 4.7,
    price: 1800,
    originalPrice: 2000,
  },
  {
    id: "mern-development",
    title: "Fundamental of Web Development for MERN",
    slug: "fundamental-web-development-mern",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Teacher",
    },
    lessons: 24,
    rating: 4.7,
    price: 1400,
    originalPrice: 1600,
  },
  {
    id: "frontend-design",
    title: "Modern Frontend Design with React",
    slug: "modern-frontend-design-react",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Frontend",
    },
    lessons: 24,
    rating: 4.8,
    price: 2100,
    originalPrice: 2500,
  },
  {
    id: "product-design",
    title: "Product Design Strategy for Beginners",
    slug: "product-design-strategy-beginners",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Product",
    },
    lessons: 24,
    rating: 4.6,
    price: 1700,
    originalPrice: 1900,
  },
];

export function FeaturedCoursesSection() {
  return (
    <section className="bg-[#fff4f2] py-16 sm:py-20 lg:py-[92px]">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <SectionTitle
          label="Featured Courses"
          title="Enroll Now to Make Lifestyle More Clean Beautiful and Organised"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <CourseSlider
          className="mt-12 sm:mt-14"
          courses={featuredCourses}
          variant="paid"
          ariaLabelPrefix="featured courses"
        />

        <motion.div className="mt-12 flex justify-center">
          <Button asChild variant="publicCta" size="publicCta">
            <Link href={ROUTES.courseCategory("popular")}>See All Popular Courses</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
