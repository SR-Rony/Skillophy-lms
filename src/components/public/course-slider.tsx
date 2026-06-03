"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/utils";
import {
  PublicCourseCard,
  type PublicCourse,
  type PublicCourseCardVariant,
} from "./public-course-card";

const DEFAULT_SLIDE_DOT_COUNT = 3;
const DEFAULT_AUTO_PLAY_MS = 5000;
const TRANSITION_MS = 500;
const GAP_PX = 24;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const mediaQueries = [
      { query: "(min-width: 1024px)", value: 3 },
      { query: "(min-width: 640px)", value: 2 },
    ];

    const updateItemsPerPage = () => {
      const matchedQuery = mediaQueries.find(({ query }) => window.matchMedia(query).matches);
      setItemsPerPage(matchedQuery?.value ?? 1);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return itemsPerPage;
}

interface CourseSliderProps {
  courses: PublicCourse[];
  variant: PublicCourseCardVariant;
  slideDotCount?: number;
  autoPlayInterval?: number;
  ariaLabelPrefix: string;
  className?: string;
}

export function CourseSlider({
  courses,
  variant,
  slideDotCount = DEFAULT_SLIDE_DOT_COUNT,
  autoPlayInterval = DEFAULT_AUTO_PLAY_MS,
  ariaLabelPrefix,
  className,
}: CourseSliderProps) {
  const itemsPerPage = useItemsPerPage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  const loopCourses = useMemo(() => {
    if (courses.length === 0) {
      return [];
    }

    return [...courses, ...courses.slice(0, itemsPerPage)];
  }, [courses, itemsPerPage]);

  const canScroll = courses.length > itemsPerPage;
  const stepWidth = cardWidth + GAP_PX;

  useEffect(() => {
    const updateCardWidth = () => {
      if (!containerRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      const nextCardWidth =
        (containerWidth - GAP_PX * (itemsPerPage - 1)) / itemsPerPage;

      setCardWidth(nextCardWidth);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, [itemsPerPage]);

  useEffect(() => {
    setActiveIndex(0);
    setEnableTransition(true);
  }, [itemsPerPage, courses]);

  const goToNextSlide = useCallback(() => {
    if (!canScroll) {
      return;
    }

    setActiveIndex((index) => index + 1);
  }, [canScroll]);

  useEffect(() => {
    if (!canScroll || activeIndex !== courses.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setEnableTransition(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }, TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, canScroll, courses.length]);

  useEffect(() => {
    if (isPaused || !canScroll) {
      return;
    }

    const timer = window.setInterval(goToNextSlide, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [autoPlayInterval, canScroll, goToNextSlide, isPaused]);

  const activeDot =
    courses.length > 0
      ? Math.floor(((activeIndex % courses.length) / courses.length) * slideDotCount) %
        slideDotCount
      : 0;

  const handleDotClick = (dotIndex: number) => {
    if (!canScroll) {
      return;
    }

    const nextIndex = Math.round((dotIndex / slideDotCount) * courses.length);
    setEnableTransition(true);
    setActiveIndex(Math.min(nextIndex, courses.length));
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div ref={containerRef} className="overflow-hidden">
        <div
          className={cn(
            "flex gap-6",
            enableTransition && "transition-transform duration-500 ease-out"
          )}
          style={{
            transform:
              cardWidth > 0 ? `translateX(-${activeIndex * stepWidth}px)` : undefined,
          }}
        >
          {loopCourses.map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              className="shrink-0"
              style={{ width: cardWidth > 0 ? cardWidth : `${100 / itemsPerPage}%` }}
            >
              <PublicCourseCard course={course} variant={variant} />
            </div>
          ))}
        </div>
      </div>

      {canScroll && (
        <motion.div variants={fadeUpVariants} className="mt-10 flex justify-center gap-2">
          {Array.from({ length: slideDotCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show ${ariaLabelPrefix} slide ${index + 1}`}
              aria-current={activeDot === index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeDot === index ? "w-9 bg-[#f23e3e]" : "w-2 bg-[#b8b4ad]"
              )}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
