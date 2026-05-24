"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/shared";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";
import { HeroVisual } from "./hero-visual";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-[92vh] flex items-center overflow-hidden bg-white py-16 md:py-24",
        className
      )}
    >
      {/* 3D Geometric Concentric Wireframe Tunnel / Wave SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Colorful Glow Blobs */}
        <div className="absolute top-[15%] right-[10%] h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-rose-100/35 blur-[100px]" />
        <div className="absolute top-[33%] left-[33%] h-[300px] w-[300px] rounded-full bg-purple-50/40 blur-[90px]" />

        {/* Golden-orange concentric ellipses */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] opacity-[0.85] text-red-500/10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          <g transform="translate(420, 300) rotate(-18)">
            {Array.from({ length: 15 }).map((_, i) => (
              <ellipse
                key={i}
                cx="0"
                cy="0"
                rx={60 + i * 36}
                ry={30 + i * 18}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                style={{ stroke: 'rgba(239, 68, 68, 0.08)' }}
              />
            ))}
          </g>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-8">

          {/* Left Column: Text & CTA */}
          <motion.div
            className="flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline / Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Sparkles className="h-4 w-4 text-[#F05555] fill-[#F05555]" />
              <span className="text-xs font-black tracking-[0.22em] text-[#F05555]">
                BEST LEARNING PLATFORM
              </span>
              <div className="h-[1.5px] bg-[#F05555]/20 flex-grow max-w-[100px]" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl leading-[1.12] font-black tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]"
            >
              Explore Endless <br />
              Education <br />
              Anytime
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg font-medium"
            >
              With a mix of experience and stories, become suitable for life&apos;s work for the new generation, have a mentality like the new generation
            </motion.p>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <Link
                href={ROUTES.courses}
                className="inline-flex items-center justify-center rounded-full bg-[#F05555] px-10 py-4 text-sm font-extrabold text-white shadow-xl shadow-red-500/20 transition-all hover:bg-red-600 hover:shadow-red-500/30"
              >
                See All Courses
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Leaf Collage Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
