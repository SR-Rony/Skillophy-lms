"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config";
import { ROUTES } from "@/constants";
import { slideUp, staggerContainer, staggerItem } from "@/animations";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.h1
            variants={slideUp}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            The modern LMS for teams that scale
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg text-muted-foreground md:text-xl"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href={ROUTES.auth.register}>
                Start learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.courses}>Browse courses</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
