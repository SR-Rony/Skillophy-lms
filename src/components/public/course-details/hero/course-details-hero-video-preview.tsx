"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import {
  COURSE_DETAILS_DEFAULT_VIDEO_IMAGE,
  COURSE_DETAILS_VIDEO_THUMB,
} from "./course-details-hero.constants";

interface CourseDetailsHeroVideoPreviewProps {
  image?: string;
  title: string;
}

export function CourseDetailsHeroVideoPreview({
  image = COURSE_DETAILS_DEFAULT_VIDEO_IMAGE,
  title,
}: CourseDetailsHeroVideoPreviewProps) {
  const { width, height, borderRadius } = COURSE_DETAILS_VIDEO_THUMB;

  return (
    <div className="relative z-20 flex justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
        className="relative w-full max-w-[793px] overflow-hidden opacity-100 shadow-[0_24px_56px_rgba(35,25,22,0.16)]"
        style={{
          width: "100%",
          maxWidth: width,
          height: "auto",
          aspectRatio: `${width} / ${height}`,
          borderRadius,
          opacity: 1,
        }}
      >
        <Image
          src={image}
          alt={`${title} video preview`}
          width={width}
          height={height}
          className="h-full w-full object-cover object-center"
          sizes="(max-width: 820px) 100vw, 793px"
          priority
        />
        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_14px] shadow-primary/28 transition hover:scale-105 hover:bg-primary/90 sm:h-[72px] sm:w-[72px]"
          aria-label="Play course preview video"
        >
          <Play className="ml-1 h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden />
        </button>
      </motion.div>
    </div>
  );
}
