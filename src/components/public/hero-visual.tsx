"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Lightbulb, Play } from "lucide-react";

const COLLAGE = {
  blueCard: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  pinkCard: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  purpleCard: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
} as const;

export function HeroVisual() {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-[560px] grid-cols-2 items-center gap-6 py-6 sm:gap-8 sm:py-8">

      {/* Left Column - Card 1 (Sky Blue, Middle-Left) */}
      <div className="flex items-center justify-center h-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative bg-[#BAE6FD] rounded-[100px_0px_100px_100px] p-3 aspect-[0.82] w-full shadow-2xl shadow-sky-100/40"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[88px_0px_88px_88px]">
            <Image
              src={COLLAGE.blueCard}
              alt="Innovation Things student"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 250px"
            />
          </div>

          {/* Floating Speech-Bubble Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.5, duration: 0.4 },
              scale: { delay: 0.5, duration: 0.4 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
            }}
            className="absolute -top-5 -right-3 z-30 flex items-center gap-2.5 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-lg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-500">
              <Lightbulb className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-extrabold text-gray-800 whitespace-nowrap">Innovation Things</span>
            {/* Speech bubble tail pointer pointing down-right */}
            <div className="absolute -bottom-[5px] right-6 w-2.5 h-2.5 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - Card 2 (Pink) & Card 3 (Purple) */}
      <div className="flex flex-col gap-8 sm:gap-10 relative z-20">

        {/* Card 2: Top-Right (Pink background) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative bg-[#FFE5EC] rounded-[100px_100px_100px_0px] p-3 aspect-[1.15] w-full shadow-2xl shadow-pink-100/40"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[88px_88px_88px_0px]">
            <Image
              src={COLLAGE.pinkCard}
              alt="Amazing Mentor"
              fill
              className="object-cover animate-pulse-slow"
              sizes="(max-width: 1024px) 50vw, 250px"
            />
          </div>

          {/* Floating Speech-Bubble Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.6, duration: 0.4 },
              scale: { delay: 0.6, duration: 0.4 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
            }}
            className="absolute -top-5 -left-4 z-30 flex items-center gap-2.5 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-lg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Users className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-extrabold text-gray-800 whitespace-nowrap">Amazing Mentors</span>
            {/* Speech bubble tail pointer pointing down-right */}
            <div className="absolute -bottom-[5px] right-6 w-2.5 h-2.5 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        </motion.div>

        {/* Card 3: Bottom-Right (Purple background) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative bg-[#EBE3FF] rounded-[0px_100px_100px_100px] p-3 aspect-[1.15] w-full shadow-2xl shadow-purple-100/40"
        >
          <div className="relative w-full h-full overflow-hidden rounded-[0px_88px_88px_88px]">
            <Image
              src={COLLAGE.purpleCard}
              alt="Interactive Lesson Student"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 250px"
            />
          </div>

          {/* Floating Speech-Bubble Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.7, duration: 0.4 },
              scale: { delay: 0.7, duration: 0.4 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
            }}
            className="absolute -top-5 -left-2 z-30 flex items-center gap-2.5 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-lg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-500">
              <Play className="h-3.5 w-3.5 fill-blue-500 text-blue-500" />
            </span>
            <span className="text-xs font-extrabold text-gray-800 whitespace-nowrap">Interactive Lessons</span>
            {/* Speech bubble tail pointer pointing down-right */}
            <div className="absolute -bottom-[5px] right-6 h-2.5 w-2.5 rotate-45 border-r border-b border-gray-100 bg-white" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
