"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { CategoryFilterSlider } from "@/components/public/category-filter-slider";
import { Button } from "@/components/ui/button";
import { SectionTitle, sectionTitleFadeUpVariants } from "@/components/public/section-title";

interface Book {
  id: string;
  title: string;
  slug: string;
  author: string;
  cover: string;
}

interface BookCategory {
  id: string;
  label: string;
  books: Book[];
}

const categories: BookCategory[] = [
  {
    id: "academic",
    label: "Academic",
    books: [
      {
        id: "dont-make-me-think",
        title: "Don’t Make Me Think",
        slug: "dont-make-me-think",
        author: "Steve Krug",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700&auto=format&fit=crop",
      },
      {
        id: "refactoring-ui",
        title: "Refactoring UI",
        slug: "refactoring-ui",
        author: "Adam Wathan & Steve Schoger",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=700&auto=format&fit=crop",
      },
      {
        id: "ux-ui-design",
        title: "UX/UI Design",
        slug: "ux-ui-design",
        author: "Fraid Miles",
        cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=700&auto=format&fit=crop",
      },
      {
        id: "ux-design-job",
        title: "How to Get a UX Design Job",
        slug: "how-to-get-a-ux-design-job",
        author: "Lisa Murnan",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=700&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "language",
    label: "Language",
    books: [
      {
        id: "english-everyday-book",
        title: "English for Every Day",
        slug: "english-for-every-day-book",
        author: "Sarah Collins",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700&auto=format&fit=crop",
      },
      {
        id: "writing-clearly",
        title: "Writing Clearly",
        slug: "writing-clearly",
        author: "David Brown",
        cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=700&auto=format&fit=crop",
      },
      {
        id: "spoken-english",
        title: "Spoken English Basics",
        slug: "spoken-english-basics",
        author: "Rafiq Ahmed",
        cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&auto=format&fit=crop",
      },
      {
        id: "grammar-masterclass",
        title: "Grammar Masterclass",
        slug: "grammar-masterclass",
        author: "Nadia Rahman",
        cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=700&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "creative-soft-skills",
    label: "Creative & Soft Skills",
    books: [
      {
        id: "dont-make-me-think-creative",
        title: "Don’t Make Me Think",
        slug: "dont-make-me-think-creative",
        author: "Steve Krug",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700&auto=format&fit=crop",
      },
      {
        id: "refactoring-ui-creative",
        title: "Refactoring UI",
        slug: "refactoring-ui-creative",
        author: "Adam Wathan & Steve Schoger",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=700&auto=format&fit=crop",
      },
      {
        id: "ux-ui-design-creative",
        title: "UX/UI Design",
        slug: "ux-ui-design-creative",
        author: "Fraid Miles",
        cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=700&auto=format&fit=crop",
      },
      {
        id: "ux-design-job-creative",
        title: "How to Get a UX Design Job",
        slug: "ux-design-job-creative",
        author: "Lisa Murnan",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=700&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "professional-exam",
    label: "Professional Exam",
    books: [
      {
        id: "bcs-prep-book",
        title: "BCS Preparation Guide",
        slug: "bcs-preparation-guide",
        author: "Hasan Mahmud",
        cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=700&auto=format&fit=crop",
      },
      {
        id: "bank-job-guide",
        title: "Bank Job Guide",
        slug: "bank-job-guide",
        author: "Mizanur Rahman",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&auto=format&fit=crop",
      },
      {
        id: "exam-math",
        title: "Exam Math Practice",
        slug: "exam-math-practice",
        author: "Tanvir Alam",
        cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&auto=format&fit=crop",
      },
      {
        id: "job-viva",
        title: "Job Viva Confidence",
        slug: "job-viva-confidence",
        author: "Nasrin Akter",
        cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "job-preparation",
    label: "Job Preparation",
    books: [
      {
        id: "career-growth",
        title: "Career Growth Guide",
        slug: "career-growth-guide",
        author: "Arafat Hossain",
        cover: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&auto=format&fit=crop",
      },
      {
        id: "interview-ready",
        title: "Interview Ready",
        slug: "interview-ready",
        author: "Fahim Rahman",
        cover: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&auto=format&fit=crop",
      },
      {
        id: "cv-portfolio",
        title: "CV & Portfolio",
        slug: "cv-portfolio",
        author: "Maisha Ferdous",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop",
      },
      {
        id: "workplace-skills",
        title: "Workplace Skills",
        slug: "workplace-skills",
        author: "Rakib Hasan",
        cover: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "admission-preparation",
    label: "Admission Preparation",
    books: [
      {
        id: "admission-physics",
        title: "Admission Physics",
        slug: "admission-physics",
        author: "Dr. Jalal Uddin",
        cover: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=700&auto=format&fit=crop",
      },
      {
        id: "admission-chemistry",
        title: "Admission Chemistry",
        slug: "admission-chemistry",
        author: "Nusrat Jahan",
        cover: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=700&auto=format&fit=crop",
      },
      {
        id: "admission-biology",
        title: "Admission Biology",
        slug: "admission-biology",
        author: "Hossain Ahmed",
        cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&auto=format&fit=crop",
      },
      {
        id: "admission-english",
        title: "Admission English",
        slug: "admission-english",
        author: "Shaila Akter",
        cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700&auto=format&fit=crop",
      },
    ],
  },
];

const bookFilterCategories = categories.map((category) => ({
  id: category.id,
  label: category.label,
  itemCount: category.books.length,
}));

const bookGridVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const, staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

function BookCard({ book }: { book: Book }) {
  return (
    <motion.article
      variants={sectionTitleFadeUpVariants}
      className="group overflow-hidden rounded-[18px] border border-[#eee1de] bg-white shadow-[0_18px_38px_rgba(80,37,31,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#f0c6c1] hover:shadow-[0_28px_55px_rgba(80,37,31,0.12)]"
    >
      <Link href={`/books/${book.slug}`} className="block h-full">
        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),transparent_34%),linear-gradient(180deg,#fff8f6_0%,#fff1ef_100%)] px-5 pt-5">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f6d6d2]/60 to-transparent" />
          <div className="relative mx-auto h-[270px] max-w-[210px] overflow-hidden rounded-[10px] bg-white shadow-[0_18px_34px_rgba(55,31,28,0.18)] ring-1 ring-black/5 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg] group-hover:shadow-[0_24px_46px_rgba(55,31,28,0.24)]">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="210px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 opacity-70" />
          </div>
          <div className="pointer-events-none mx-auto mt-3 h-4 max-w-[170px] rounded-full bg-black/12 blur-md transition duration-500 group-hover:max-w-[190px] group-hover:bg-black/18" />
        </div>

        <div className="px-4 pb-5 pt-4 sm:px-5">
          <h3 className="line-clamp-1 text-[20px] font-black leading-[1.18] tracking-[-0.02em] text-[#282221]">
            {book.title}
          </h3>
          <p className="mt-2 line-clamp-1 text-[13px] font-semibold text-[#5f5553]">
            By {book.author}
          </p>
          <span className="mt-4 inline-flex rounded-full bg-[#fff4f2] px-3 py-1 text-[11px] font-bold text-[#a94d47]">
            Read Book
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function BooksSection() {
  const [activeCategoryId, setActiveCategoryId] = useState("creative-soft-skills");

  const activeCategory = useMemo(
    () => categories.find(({ id }) => id === activeCategoryId) ?? categories[0],
    [activeCategoryId]
  );

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
          className="max-w-[760px]"
          label="Books"
          title="Books for Modern Learning"
          description="Our book will enlighten your knowledge and equip you with modern skills for effective learning."
        />

        <motion.div className="mt-10">
          <CategoryFilterSlider
            categories={bookFilterCategories}
            activeCategoryId={activeCategoryId}
            onCategoryChange={setActiveCategoryId}
            countLabel="books"
            nextButtonAriaLabel="Show next book category"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            variants={bookGridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {activeCategory.books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div variants={sectionTitleFadeUpVariants} className="mt-12 flex justify-center">
          <Button asChild variant="publicCta" size="publicCta">
            <Link href="/books">Get Books</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
