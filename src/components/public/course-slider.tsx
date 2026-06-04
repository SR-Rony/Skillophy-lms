"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils";
import {
  PublicCourseCard,
  type PublicCourse,
  type PublicCourseCardBadge,
  type PublicCourseCardVariant,
} from "./public-course-card";

const DEFAULT_SLIDE_DOT_COUNT = 3;
const DEFAULT_AUTO_PLAY_MS = 5000;
const TRANSITION_MS = 500;
const GAP_PX = 24;
const TOUCH_SWIPE_THRESHOLD = 48;

const DEFAULT_ITEMS_PER_PAGE = {
  lg: 3,
  sm: 2,
  default: 1,
} as const;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export interface ItemsPerPageConfig {
  lg?: number;
  md?: number;
  sm?: number;
  default?: number;
}

function useItemsPerPage(config: ItemsPerPageConfig = DEFAULT_ITEMS_PER_PAGE) {
  const [itemsPerPage, setItemsPerPage] = useState(
    config.default ?? DEFAULT_ITEMS_PER_PAGE.default
  );

  useEffect(() => {
    const mediaQueries = [
      { query: "(min-width: 1024px)", value: config.lg ?? DEFAULT_ITEMS_PER_PAGE.lg },
      { query: "(min-width: 768px)", value: config.md ?? config.sm ?? DEFAULT_ITEMS_PER_PAGE.sm },
      { query: "(min-width: 640px)", value: config.sm ?? DEFAULT_ITEMS_PER_PAGE.sm },
    ];

    const updateItemsPerPage = () => {
      const matchedQuery = mediaQueries.find(({ query }) => window.matchMedia(query).matches);
      setItemsPerPage(matchedQuery?.value ?? (config.default ?? DEFAULT_ITEMS_PER_PAGE.default));
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [config.default, config.lg, config.md, config.sm]);

  return itemsPerPage;
}

export interface ItemsSliderProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getItemKey: (item: T) => string;
  slideDotCount?: number;
  autoPlayInterval?: number;
  ariaLabelPrefix: string;
  className?: string;
  itemsPerPage?: ItemsPerPageConfig;
  showPagination?: boolean;
  enableTouch?: boolean;
}

export function ItemsSlider<T>({
  items,
  renderItem,
  getItemKey,
  slideDotCount = DEFAULT_SLIDE_DOT_COUNT,
  autoPlayInterval = DEFAULT_AUTO_PLAY_MS,
  ariaLabelPrefix,
  className,
  itemsPerPage: itemsPerPageConfig,
  showPagination = true,
  enableTouch = true,
}: ItemsSliderProps<T>) {
  const itemsPerPage = useItemsPerPage(itemsPerPageConfig);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const loopItems = useMemo(() => {
    if (items.length === 0) {
      return [];
    }

    return [...items, ...items.slice(0, itemsPerPage)];
  }, [items, itemsPerPage]);

  const canScroll = items.length > itemsPerPage;
  const stepWidth = cardWidth + GAP_PX;

  useEffect(() => {
    const updateCardWidth = () => {
      if (!containerRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      if (containerWidth <= 0) {
        return;
      }

      const nextCardWidth =
        (containerWidth - GAP_PX * (itemsPerPage - 1)) / itemsPerPage;

      setCardWidth(nextCardWidth);
    };

    updateCardWidth();
    const frame = requestAnimationFrame(updateCardWidth);

    const container = containerRef.current;
    let resizeObserver: ResizeObserver | null = null;

    if (container && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateCardWidth);
      resizeObserver.observe(container);
    }

    window.addEventListener("resize", updateCardWidth);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateCardWidth);
    };
  }, [itemsPerPage]);

  useEffect(() => {
    setActiveIndex(0);
    setEnableTransition(true);
  }, [itemsPerPage, items]);

  const goToNextSlide = useCallback(() => {
    if (!canScroll) {
      return;
    }

    setEnableTransition(true);
    setActiveIndex((index) => index + 1);
  }, [canScroll]);

  const goToPrevSlide = useCallback(() => {
    if (!canScroll) {
      return;
    }

    setEnableTransition(true);
    setActiveIndex((index) => (index > 0 ? index - 1 : index));
  }, [canScroll]);

  useEffect(() => {
    if (!canScroll || activeIndex !== items.length) {
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
  }, [activeIndex, canScroll, items.length]);

  useEffect(() => {
    if (isPaused || !canScroll || isDragging) {
      return;
    }

    const timer = window.setInterval(goToNextSlide, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [autoPlayInterval, canScroll, goToNextSlide, isDragging, isPaused]);

  const activeDot =
    items.length > 0
      ? Math.floor(((activeIndex % items.length) / items.length) * slideDotCount) %
        slideDotCount
      : 0;

  const handleDotClick = (dotIndex: number) => {
    if (!canScroll) {
      return;
    }

    const nextIndex = Math.round((dotIndex / slideDotCount) * items.length);
    setEnableTransition(true);
    setActiveIndex(Math.min(nextIndex, items.length));
  };

  const handleTouchStart = (clientX: number) => {
    if (!enableTouch || !canScroll) {
      return;
    }

    touchStartX.current = clientX;
    touchDeltaX.current = 0;
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (clientX: number) => {
    if (!isDragging) {
      return;
    }

    touchDeltaX.current = clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging) {
      return;
    }

    if (touchDeltaX.current <= -TOUCH_SWIPE_THRESHOLD) {
      goToNextSlide();
    } else if (touchDeltaX.current >= TOUCH_SWIPE_THRESHOLD) {
      goToPrevSlide();
    }

    touchDeltaX.current = 0;
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className={cn(
          "overflow-hidden",
          enableTouch && canScroll && "touch-pan-y"
        )}
        onTouchStart={(event) => handleTouchStart(event.touches[0]?.clientX ?? 0)}
        onTouchMove={(event) => handleTouchMove(event.touches[0]?.clientX ?? 0)}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
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
          {loopItems.map((item, index) => (
            <div
              key={`${getItemKey(item)}-${index}`}
              className="shrink-0"
              style={{ width: cardWidth > 0 ? cardWidth : `${100 / itemsPerPage}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {canScroll && showPagination && (
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

interface CourseSliderProps {
  courses: PublicCourse[];
  variant: PublicCourseCardVariant;
  cardBadge?: PublicCourseCardBadge;
  slideDotCount?: number;
  autoPlayInterval?: number;
  ariaLabelPrefix: string;
  className?: string;
  itemsPerPage?: ItemsPerPageConfig;
  showPagination?: boolean;
  enableTouch?: boolean;
}

export function CourseSlider({
  courses,
  variant,
  cardBadge,
  slideDotCount,
  autoPlayInterval,
  ariaLabelPrefix,
  className,
  itemsPerPage,
  showPagination,
  enableTouch,
}: CourseSliderProps) {
  return (
    <ItemsSlider
      items={courses}
      getItemKey={(course) => course.id}
      renderItem={(course) => (
        <PublicCourseCard course={course} variant={variant} badge={cardBadge} />
      )}
      slideDotCount={slideDotCount}
      autoPlayInterval={autoPlayInterval}
      ariaLabelPrefix={ariaLabelPrefix}
      className={className}
      itemsPerPage={itemsPerPage}
      showPagination={showPagination}
      enableTouch={enableTouch}
    />
  );
}
