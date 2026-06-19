"use client";

import { Heading } from "@/components/shared/heading";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";

interface CartPageHeroProps {
  itemCount: number;
}

export function CartPageHero({ itemCount }: CartPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f2] py-14 sm:py-16 lg:py-[72px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[18%] h-[280px] w-[280px] rounded-full bg-[#d9e8f5]/55 blur-3xl" />
        <div className="absolute right-[-6%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#f3dce8]/50 blur-3xl" />
        <svg
          className="absolute right-[-4%] top-[6%] hidden h-[340px] w-[520px] text-[#e8ddd4]/70 lg:block"
          viewBox="0 0 520 340"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 14 }).map((_, index) => (
            <path
              key={index}
              d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Heading as="h1" variant="page-hero">
          Shopping Cart
        </Heading>
        <p className="mt-3 text-[15px] font-medium text-[#6f6562] sm:text-[16px]">
          You added {itemCount} {itemCount === 1 ? "course" : "courses"} to your cart
        </p>
      </Container>
    </section>
  );
}
