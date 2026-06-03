"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  Gem,
  PlayCircle,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { PublicCourseCard, type PublicCourse } from "@/components/public/public-course-card";
import { SectionTitle } from "@/components/public/section-title";
import { cn } from "@/utils";

type CategoryId = "free" | "job" | "popular" | "skill" | "vocational" | "academic";

interface CourseCategory {
  id: CategoryId;
  label: string;
  icon: typeof PlayCircle;
  courses: PublicCourse[];
}

const VISIBLE_CATEGORY_COUNT = 5;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const courseGridVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const, staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const categories: CourseCategory[] = [
  {
    id: "free",
    label: "Free Courses",
    icon: PlayCircle,
    courses: [
      {
        id: "free-facebook-marketing",
        title: "Facebook Marketing",
        slug: "facebook-marketing",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-web-design",
        title: "Web Design",
        slug: "web-design",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maruf",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-communication-hacks",
        title: "Communication Hacks",
        slug: "communication-hacks",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
        instructor: {
          name: "Nazim Ahmed",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nazim",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-english-everyday",
        title: "English for Every day",
        slug: "english-for-every-day",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=English",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-quran-learning",
        title: "Quran Learning",
        slug: "quran-learning",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&auto=format&fit=crop",
        instructor: {
          name: "Ejazur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ejazur",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-personal-health",
        title: "Personal Health",
        slug: "personal-health",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Health",
        },
        lessons: 24,
        rating: 4.7,
      },
    ],
  },
  {
    id: "job",
    label: "Job Courses",
    icon: BriefcaseBusiness,
    courses: [
      {
        id: "job-interview-preparation",
        title: "Interview Preparation",
        slug: "interview-preparation",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hasib Alom",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hasib",
        },
        lessons: 24,
        rating: 4.7,
        price: 1800,
        originalPrice: 2200,
      },
      {
        id: "job-career-development",
        title: "Career Development",
        slug: "career-development",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mizanur",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2400,
      },
      {
        id: "job-workplace-excellence",
        title: "Workplace Excellence",
        slug: "workplace-excellence",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sujon",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
      {
        id: "job-team-management",
        title: "Team Management",
        slug: "team-management",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Team",
        },
        lessons: 24,
        rating: 4.7,
        price: 1700,
        originalPrice: 2100,
      },
      {
        id: "job-business-strategy",
        title: "Business Strategy",
        slug: "business-strategy",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Strategy",
        },
        lessons: 24,
        rating: 4.7,
        price: 2200,
        originalPrice: 2600,
      },
      {
        id: "job-professional-skills",
        title: "Professional Job Skills",
        slug: "professional-job-skills",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hasib Alom",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Professional",
        },
        lessons: 24,
        rating: 4.7,
        price: 1900,
        originalPrice: 2300,
      },
    ],
  },
  {
    id: "popular",
    label: "Popular",
    icon: Sparkles,
    courses: [
      {
        id: "popular-facebook-marketing",
        title: "Facebook Marketing",
        slug: "facebook-marketing",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
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
        id: "popular-personal-finance",
        title: "Personal Finance",
        slug: "personal-finance",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Finance",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2300,
      },
      {
        id: "popular-video-editing",
        title: "Video Editing",
        slug: "video-editing",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Video",
        },
        lessons: 24,
        rating: 4.7,
        price: 1400,
        originalPrice: 1600,
      },
      {
        id: "popular-microsoft-excel",
        title: "Microsoft Excel",
        slug: "microsoft-excel",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Excel",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2100,
      },
      {
        id: "popular-web-design",
        title: "Web Design",
        slug: "web-design",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Web",
        },
        lessons: 24,
        rating: 4.7,
        price: 1400,
        originalPrice: 1700,
      },
      {
        id: "popular-personal-health",
        title: "Personal Health",
        slug: "personal-health",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Health",
        },
        lessons: 24,
        rating: 4.7,
        price: 1800,
        originalPrice: 2000,
      },
    ],
  },
  {
    id: "skill",
    label: "Skill Development & IT",
    icon: Gem,
    courses: [
      {
        id: "skill-advanced-javascript",
        title: "Advanced JavaScript",
        slug: "advanced-javascript",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=JavaScript",
        },
        lessons: 24,
        rating: 4.7,
        price: 2200,
        originalPrice: 2500,
      },
      {
        id: "skill-react-mastery",
        title: "React Mastery",
        slug: "react-mastery",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=React",
        },
        lessons: 24,
        rating: 4.7,
        price: 2400,
        originalPrice: 2800,
      },
      {
        id: "skill-python-fundamentals",
        title: "Python Fundamentals",
        slug: "python-fundamentals",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Python",
        },
        lessons: 24,
        rating: 4.7,
        price: 1900,
        originalPrice: 2200,
      },
      {
        id: "skill-docker",
        title: "Mastering Docker",
        slug: "mastering-docker",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Docker",
        },
        lessons: 24,
        rating: 4.7,
        price: 2300,
        originalPrice: 2600,
      },
      {
        id: "skill-cloud-deployment",
        title: "Cloud Deployment",
        slug: "cloud-deployment",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Cloud",
        },
        lessons: 24,
        rating: 4.7,
        price: 2100,
        originalPrice: 2400,
      },
      {
        id: "skill-database-design",
        title: "Database Design",
        slug: "database-design",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Database",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
    ],
  },
  {
    id: "vocational",
    label: "Vocational Courses",
    icon: Wrench,
    courses: [
      {
        id: "vocational-electrical-work",
        title: "Electrical Work",
        slug: "electrical-work",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Electrical",
        },
        lessons: 24,
        rating: 4.7,
        price: 1800,
        originalPrice: 2100,
      },
      {
        id: "vocational-plumbing-basics",
        title: "Plumbing Basics",
        slug: "plumbing-basics",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Plumbing",
        },
        lessons: 24,
        rating: 4.7,
        price: 1700,
        originalPrice: 2000,
      },
      {
        id: "vocational-carpentry",
        title: "Carpentry Skills",
        slug: "carpentry-skills",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Carpentry",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
      {
        id: "vocational-welding",
        title: "Welding Techniques",
        slug: "welding-techniques",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Welding",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2300,
      },
      {
        id: "vocational-hvac",
        title: "HVAC Systems",
        slug: "hvac-systems",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=HVAC",
        },
        lessons: 24,
        rating: 4.7,
        price: 2100,
        originalPrice: 2400,
      },
      {
        id: "vocational-auto-repair",
        title: "Auto Repair",
        slug: "auto-repair",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Auto",
        },
        lessons: 24,
        rating: 4.7,
        price: 1900,
        originalPrice: 2200,
      },
    ],
  },
  {
    id: "academic",
    label: "Academic",
    icon: BookOpen,
    courses: [
      {
        id: "academic-math",
        title: "Mathematics Essentials",
        slug: "mathematics-essentials",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Math",
        },
        lessons: 24,
        rating: 4.7,
        price: 1500,
        originalPrice: 1800,
      },
      {
        id: "academic-physics",
        title: "Physics Fundamentals",
        slug: "physics-fundamentals",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Physics",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
      {
        id: "academic-chemistry",
        title: "Chemistry Basics",
        slug: "chemistry-basics",
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Chemistry",
        },
        lessons: 24,
        rating: 4.7,
        price: 1400,
        originalPrice: 1700,
      },
      {
        id: "academic-history",
        title: "History & Culture",
        slug: "history-culture",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=History",
        },
        lessons: 24,
        rating: 4.7,
        price: 1300,
        originalPrice: 1600,
      },
      {
        id: "academic-literature",
        title: "English Literature",
        slug: "english-literature",
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Literature",
        },
        lessons: 24,
        rating: 4.7,
        price: 1500,
        originalPrice: 1800,
      },
      {
        id: "academic-science",
        title: "Science & Discovery",
        slug: "science-discovery",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Science",
        },
        lessons: 24,
        rating: 4.7,
        price: 1700,
        originalPrice: 2000,
      },
    ],
  },
];

export function AllCoursesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>("popular");
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);

  const activeCategoryIndex = categories.findIndex(({ id }) => id === activeCategoryId);
  const activeCategory = categories[activeCategoryIndex] ?? categories[0];
  const visibleCategories = useMemo(
    () =>
      Array.from({ length: VISIBLE_CATEGORY_COUNT }, (_, index) => {
        const categoryIndex = (categorySlideIndex + index) % categories.length;
        return categories[categoryIndex];
      }),
    [categorySlideIndex]
  );

  const nextCategory = () => {
    setCategorySlideIndex((currentIndex) => {
      const nextIndex = (currentIndex + 1) % categories.length;
      return nextIndex;
    });
  };

  return (
    <section className="bg-[#f7f7f6] py-16 sm:py-20 lg:py-[92px]">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <SectionTitle
          className="max-w-[780px]"
          label="All Courses"
          title="Expand Knowledge, Master New Skills and Enjoy the Journey"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <motion.div
          variants={fadeUpVariants}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex-1 overflow-hidden pb-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={categorySlideIndex}
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
              >
                {visibleCategories.map(({ id, label, icon: Icon, courses }) => {
                  const isActive = id === activeCategoryId;

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveCategoryId(id)}
                      className={cn(
                        "flex min-h-[58px] items-center gap-3 rounded-[10px] border bg-white px-4 py-3 text-left shadow-[0_12px_28px_rgba(55,41,38,0.05)] transition duration-300",
                        isActive
                          ? "border-[#f1b8b4] bg-[#fff4f2] text-[#8a2525]"
                          : "border-[#eee5e2] text-[#302927] hover:-translate-y-0.5 hover:border-[#f1b8b4]"
                      )}
                    >
                      <Icon className="h-5 w-5 shrink-0 stroke-[1.7]" />
                      <span>
                        <span className="block text-[13px] font-extrabold leading-none">
                          {label}
                        </span>
                        <span className="mt-1 block text-[11px] font-semibold text-[#6f6562]">
                          {courses.length} courses
                        </span>
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            type="button"
            variant="publicIcon"
            size="publicIcon"
            aria-label="Show next course category"
            onClick={nextCategory}
            className="hidden shrink-0 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            variants={courseGridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.courses.map((course) => (
              <PublicCourseCard key={course.id} course={course} variant="paid" />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div variants={fadeUpVariants} className="mt-12 flex justify-center">
          <Button asChild variant="publicCta" size="publicCta">
            <Link href="/courses">See All Courses</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
