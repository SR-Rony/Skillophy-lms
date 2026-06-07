"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { CourseDetailsTestimonial } from "@/components/public/course-details/types";
import { cn } from "@/utils";

const GAP_PX = 16;

const arrowButtonClassName =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#ece6e3] cursor-pointer bg-[#888888] text-[#1a1a1a] shadow-[0_8px_20px_rgba(35,25,22,0.08)] transition hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-[#ece6e3] disabled:bg-white disabled:text-[#c4bbb8] disabled:shadow-none disabled:hover:border-[#ece6e3] disabled:hover:bg-white disabled:hover:text-[#c4bbb8]";

function useReviewItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateItemsPerPage = () => {
      setItemsPerPage(mediaQuery.matches ? 2 : 1);
    };

    updateItemsPerPage();
    mediaQuery.addEventListener("change", updateItemsPerPage);

    return () => mediaQuery.removeEventListener("change", updateItemsPerPage);
  }, []);

  return itemsPerPage;
}

function ReviewCard({ item }: { item: CourseDetailsTestimonial }) {
  return (
    <article className="relative h-full rounded-[16px] border border-[#ece6e3] bg-white p-5 sm:p-6">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-[#f5ebe8]" aria-hidden />
      <p className="pr-6 text-[14px] leading-[1.7] text-[#4a4a4a]">{item.quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#ece6e3]">
          <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="44px" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] font-bold text-[#1a1a1a]">{item.name}</p>
          <p className="text-[12px] font-medium text-[#6f6562]">{item.role}</p>
        </div>
        <div className="ml-auto flex shrink-0 gap-0.5" aria-hidden>
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#ffa500] text-[#ffa500]" />
          ))}
        </div>
      </div>
    </article>
  );
}

interface ReviewsSectionProps {
  testimonials: CourseDetailsTestimonial[];
}

export function ReviewsSection({ testimonials }: ReviewsSectionProps) {
  const itemsPerPage = useReviewItemsPerPage();
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex, itemsPerPage]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className="scroll-mt-28">
      <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]">
        What Learners Said About this Course
      </h2>

      <div className="relative mt-5 min-w-0">
        <div className="overflow-hidden">
          <div
            className={cn(
              "flex gap-4 [--review-card-width:100%] md:[--review-card-width:calc((100%_-_16px)/2)]",
              "transition-transform duration-500 ease-out"
            )}
            style={{
              transform: `translateX(calc(-${activeIndex} * (var(--review-card-width) + ${GAP_PX}px)))`,
            }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="w-[var(--review-card-width)] shrink-0">
                <ReviewCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {testimonials.length > itemsPerPage && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              disabled={!canGoPrev}
              onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
              className={arrowButtonClassName}
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              disabled={!canGoNext}
              onClick={() => setActiveIndex((index) => Math.min(maxIndex, index + 1))}
              className={arrowButtonClassName}
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
