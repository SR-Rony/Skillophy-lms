"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeIn } from "@/animations";

/** Standard page/section entrance animation */
export function MotionWrapper({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
