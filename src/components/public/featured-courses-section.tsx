"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, Target } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { cn } from "@/utils";

interface FeaturedCourse {
  id: string;
  title: string;
  slug: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
  };
  lessons: number;
  rating: number;
  price: number;
  originalPrice: number;
}

const featuredCourses: FeaturedCourse[] = [
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

const SLIDE_DOT_COUNT = 3;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

function useFeaturedCoursesPerPage() {
  const [coursesPerPage, setCoursesPerPage] = useState(1);

  useEffect(() => {
    const mediaQueries = [
      { query: "(min-width: 1024px)", value: 3 },
      { query: "(min-width: 640px)", value: 2 },
    ];

    const updateCoursesPerPage = () => {
      const matchedQuery = mediaQueries.find(({ query }) => window.matchMedia(query).matches);
      setCoursesPerPage(matchedQuery?.value ?? 1);
    };

    updateCoursesPerPage();
    window.addEventListener("resize", updateCoursesPerPage);

    return () => window.removeEventListener("resize", updateCoursesPerPage);
  }, []);

  return coursesPerPage;
}

function createCourseSlides(courses: FeaturedCourse[], size: number) {
  return Array.from({ length: SLIDE_DOT_COUNT }, (_, slideIndex) =>
    Array.from({ length: size }, (_, itemIndex) => {
      const courseIndex = (slideIndex * size + itemIndex) % courses.length;
      return courses[courseIndex];
    })
  );
}

function formatTaka(amount: number) {
  return `৳${amount}`;
}

function FeaturedCourseCard({ course }: { course: FeaturedCourse }) {
  return (
    <motion.article
      variants={fadeUpVariants}
      className="h-full overflow-hidden rounded-[18px] border border-[#f1dfdc] bg-white shadow-[0_18px_38px_rgba(80,37,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(80,37,31,0.1)]"
    >
      <Link href={`/courses/${course.slug}`} className="block h-full">
        <div className="relative h-[190px] overflow-hidden sm:h-[205px] lg:h-[238px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 336px"
          />
        </div>

        <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
          <div className="mb-3 flex items-center justify-between gap-4 text-[13px] font-medium text-[#4f4747]">
            <span className="inline-flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5 text-[#f05555]" />
              {course.lessons} lessons
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff3d7] px-2 py-1 text-[12px] font-extrabold text-[#2b2220]">
              <Star className="h-3.5 w-3.5 fill-[#ffad21] text-[#ffad21]" />
              {course.rating}
            </span>
          </div>

          <h3 className="min-h-[56px] text-[19px] font-black leading-[1.18] tracking-[-0.02em] text-[#282221] sm:text-[21px]">
            {course.title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-[#615857]">
            <Image
              src={course.instructor.avatar}
              alt=""
              width={18}
              height={18}
              unoptimized
              className="rounded-full bg-[#f7ebe8]"
            />
            <span>{course.instructor.name}</span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-[22px] font-black leading-none text-[#321515]">
                {formatTaka(course.price)}
              </span>
              <span className="text-sm font-semibold text-[#9c8c8a] line-through">
                {formatTaka(course.originalPrice)}
              </span>
            </div>
            <button
              type="button"
              aria-label={`Add ${course.title} to wishlist`}
              className="rounded-full p-1 text-[#3c3332] transition hover:bg-[#fff1ef] hover:text-[#f05555]"
              onClick={(event) => event.preventDefault()}
            >
              <Heart className="h-6 w-6 stroke-[1.7]" />
            </button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function FeaturedCoursesSection() {
  const coursesPerPage = useFeaturedCoursesPerPage();
  const [activePage, setActivePage] = useState(0);

  const pages = useMemo(
    () => createCourseSlides(featuredCourses, coursesPerPage),
    [coursesPerPage]
  );

  useEffect(() => {
    setActivePage((page) => Math.min(page, SLIDE_DOT_COUNT - 1));
  }, [coursesPerPage]);

  return (
    <section className="bg-[#fff4f2] py-16 sm:py-20 lg:py-[92px]">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div variants={fadeUpVariants} className="mx-auto max-w-[760px] text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#efb0aa]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#a94d47]">
              Featured Courses
            </span>
            <span className="h-px w-16 bg-[#efb0aa]" />
          </div>
          <h2 className="text-[32px] font-black leading-[1.12] tracking-[-0.04em] text-[#24201f] sm:text-[42px] lg:text-[46px]">
            Enroll Now to Make Lifestyle More Clean Beautiful and Organised
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-sm font-medium leading-6 text-[#5f5553]">
            Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.
          </p>
        </motion.div>

        <div className="mt-12 overflow-hidden sm:mt-14">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <motion.div
                key={pageIndex}
                className="grid min-w-full gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                  },
                }}
              >
                {page.map((course) => (
                  <FeaturedCourseCard key={course.id} course={course} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeUpVariants} className="mt-10 flex justify-center gap-2">
          {Array.from({ length: SLIDE_DOT_COUNT }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show featured courses slide ${index + 1}`}
              aria-current={activePage === index}
              onClick={() => setActivePage(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activePage === index ? "w-9 bg-[#f23e3e]" : "w-2 bg-[#b8b4ad]"
              )}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
