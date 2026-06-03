"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/public/section-title";
import { cn } from "@/utils";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "rakib-hasan",
    quote:
      "I recommend Skillophy. The quality of content and expertise of instructors are truly top-notch. Whether you're a student looking to supplement.",
    name: "Rakib Hasan",
    role: "Graphic Designer",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rakib",
    rating: 5,
  },
  {
    id: "mansur-zoha",
    quote:
      "Skillophy has completely transformed the way I approach learning. The platform's intuitive interface and diverse range of courses.",
    name: "Mansur Zoha",
    role: "Class 9, Rajshahi Govt. School",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mansur",
    rating: 4,
  },
  {
    id: "maisha-ferdous",
    quote:
      "Skillophy helped me gain confidence, build a portfolio and microcredential to share with prospective employers.",
    name: "Maisha Ferdous",
    role: "Online business owner",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
    rating: 5,
  },
  {
    id: "nahid-islam",
    quote:
      "The lessons are clear, practical and easy to follow. I could learn at my own pace and apply the skills right away.",
    name: "Nahid Islam",
    role: "Frontend Learner",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nahid",
    rating: 5,
  },
  {
    id: "sadia-rahman",
    quote:
      "The mentors made hard topics simple. Skillophy gave me the confidence to keep learning every day.",
    name: "Sadia Rahman",
    role: "College Student",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sadia",
    rating: 4,
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.article
      variants={fadeUpVariants}
      className="relative min-h-[184px] overflow-hidden rounded-[12px] bg-white p-6 shadow-[0_20px_45px_rgba(72,26,20,0.12)]"
    >
      <p className="max-w-[260px] text-[13px] font-medium leading-6 text-[#3f3634]">
        {testimonial.quote}
      </p>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={testimonial.avatar}
            alt=""
            width={36}
            height={36}
            unoptimized
            className="rounded-full bg-[#f7ebe8]"
          />
          <div>
            <h3 className="text-[13px] font-black leading-none text-[#2d2625]">
              {testimonial.name}
            </h3>
            <p className="mt-1 text-[11px] font-semibold text-[#6a5d5b]">{testimonial.role}</p>
            <div className="mt-2 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={cn(
                    "h-3.5 w-3.5",
                    index < testimonial.rating
                      ? "fill-[#ffad21] text-[#ffad21]"
                      : "fill-[#d7d0cd] text-[#d7d0cd]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <Quote className="h-7 w-7 rotate-180 fill-[#7a1717] text-[#7a1717]" />
      </div>
    </motion.article>
  );
}

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const loopTestimonials = [...testimonials, ...testimonials.slice(0, 3)];
  const arrowButtonClassName =
    "rounded-full bg-[#6d6d6d] text-white shadow-[0_12px_24px_rgba(62,62,62,0.2)] hover:-translate-y-0.5 hover:bg-[#ff4747] hover:shadow-[0_14px_26px_rgba(255,71,71,0.26)]";

  const goToPrevious = () => {
    if (activeIndex === testimonials.length) {
      return;
    }

    if (activeIndex === 0) {
      setEnableTransition(false);
      setActiveIndex(testimonials.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setActiveIndex(testimonials.length - 1);
        });
      });
      return;
    }

    setEnableTransition(true);
    setActiveIndex((index) => index - 1);
  };

  const goToNext = () => {
    setEnableTransition(true);
    setActiveIndex((index) => Math.min(index + 1, testimonials.length));
  };

  useEffect(() => {
    if (activeIndex !== testimonials.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setEnableTransition(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section className="overflow-hidden bg-[#fff4f2] py-16 sm:py-20 lg:py-[92px]">
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid gap-10 lg:grid-cols-[290px_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionTitle
              align="left"
              headingClassName="max-w-[270px]"
              label="Testimonial"
              title={
                <>
                  Learners are <br />
                  Love to Learn
                </>
              }
            />

            <div className="mt-9 flex gap-3">
              <Button
                type="button"
                size="publicIcon"
                aria-label="Show previous testimonial"
                onClick={goToPrevious}
                className={arrowButtonClassName}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                size="publicIcon"
                aria-label="Show next testimonial"
                onClick={goToNext}
                className={arrowButtonClassName}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <motion.div variants={fadeUpVariants} className="relative min-w-0 py-10 lg:py-14">
            <div className="absolute inset-y-0 left-[18%] right-[-24%] rounded-l-[44px] bg-gradient-to-r from-[#ff7a3d] to-[#ff3f31]" />
            <div className="relative overflow-hidden py-4">
              <div
                className={cn(
                  "flex gap-6 [--testimonial-card-width:82%] sm:[--testimonial-card-width:calc((100%_-_24px)/2)] lg:[--testimonial-card-width:calc((100%_-_48px)/3)]",
                  enableTransition && "transition-transform duration-500 ease-out"
                )}
                style={{
                  transform: `translateX(calc(-${activeIndex} * (var(--testimonial-card-width) + 24px)))`,
                }}
              >
                {loopTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="w-[var(--testimonial-card-width)] shrink-0"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
