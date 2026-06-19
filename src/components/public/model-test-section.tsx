"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star, Target } from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SectionTitle, sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";

interface ModelTest {
  id: string;
  title: string;
  slug: string;
  image: string;
  questions: number;
  rating: number;
  price?: number;
  isFavorite?: boolean;
}

const modelTests: ModelTest[] = [
  {
    id: "bcs-50th",
    title: "BCS (50th)",
    slug: "bcs-50th",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=900&auto=format&fit=crop",
    questions: 100,
    rating: 4.7,
    isFavorite: true,
  },
  {
    id: "combined-bank-job-preparation",
    title: "Combined Bank Job Preparation",
    slug: "combined-bank-job-preparation",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&auto=format&fit=crop",
    questions: 100,
    rating: 4.7,
  },
  {
    id: "admission-test",
    title: "Admission Test",
    slug: "admission-test",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop",
    questions: 100,
    rating: 4.7,
    price: 1400,
  },
];

function formatTaka(amount: number) {
  return `৳${amount}`;
}

function ModelTestCard({ test }: { test: ModelTest }) {
  return (
    <motion.article
      variants={sectionTitleFadeUpVariants}
      className="h-full overflow-hidden rounded-[18px] border border-[#f1dfdc] bg-white shadow-[0_18px_38px_rgba(80,37,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(80,37,31,0.1)]"
    >
      <Link href={`/model-tests/${test.slug}`} className="block h-full">
        <div className="relative h-[190px] overflow-hidden sm:h-[205px] lg:h-[238px]">
          <Image
            src={test.image}
            alt={test.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 336px"
          />
        </div>

        <div className="px-4 pb-5 pt-3 sm:px-5">
          <div className="mb-3 flex items-center justify-between gap-4 text-[13px] font-medium text-[#4f4747]">
            <span className="inline-flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5 text-primary" />
              {test.questions} questions
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff3d7] px-2 py-1 text-[12px] font-extrabold text-[#2b2220]">
              <Star className="h-3.5 w-3.5 fill-[#ffad21] text-[#ffad21]" />
              {test.rating}
            </span>
          </div>

          <Heading as="h3" variant="card-display">
            {test.title}
          </Heading>

          <div className="mt-4 flex items-end justify-between gap-4">
            {test.price ? (
              <span className="text-[22px] font-black leading-none text-[#321515]">
                {formatTaka(test.price)}
              </span>
            ) : (
              <span className="text-[22px] font-black leading-none text-[#701d1d]">Free</span>
            )}

            <Button
              type="button"
              variant="wishlist"
              size="wishlist"
              aria-label={`Add ${test.title} to wishlist`}
              onClick={(event) => event.preventDefault()}
            >
              <Heart
                className={cn(
                  "h-6 w-6 stroke-[1.7]",
                  test.isFavorite && "fill-primary text-primary"
                )}
              />
            </Button>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ModelTestSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_18%_34%,rgba(255,235,190,0.3),transparent_36%)]" />
        <svg
          className="absolute right-0 top-[28%] hidden h-[335px] w-[600px] text-[#eedb96]/30 lg:block"
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
          className="max-w-[900px]"
          label="Model Test"
          title="Exclusive Model Test to Assess Your Preparation"
          description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modelTests.map((test) => (
            <ModelTestCard key={test.id} test={test} />
          ))}
        </div>

        <motion.div variants={sectionTitleFadeUpVariants} className="mt-10 flex justify-center">
          <Button asChild variant="publicCta" size="publicCta">
            <Link href="/model-tests">See All Model Tests</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
