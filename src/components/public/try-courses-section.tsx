"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";

const imageSlideInVariants = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function TryCoursesSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim() || !agreed) {
      return;
    }
  };

  return (
    <section className="relative overflow-hidden bg-primary/5 py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(255,214,170,0.22),transparent_42%)]" />
        <svg
          className="absolute left-1/2 top-1/2 h-[min(900px,120%)] w-[min(900px,120%)] -translate-x-1/2 -translate-y-1/2 text-[#f0c89a]/28"
          viewBox="0 0 520 520"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <polygon
              key={index}
              points="260,40 470,180 400,460 120,460 50,180"
              stroke="currentColor"
              strokeWidth="1"
              transform={`rotate(${index * 15} 260 260)`}
              style={{ transformOrigin: "260px 260px" }}
            />
          ))}
          {Array.from({ length: 18 }).map((_, index) => (
            <line
              key={`line-${index}`}
              x1="260"
              y1="260"
              x2={260 + Math.cos((index * Math.PI) / 9) * 240}
              y2={260 + Math.sin((index * Math.PI) / 9) * 240}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">
          <motion.div
            variants={imageSlideInVariants}
            className="relative mx-auto h-[360px] w-full max-w-[400px] sm:h-[420px] lg:mx-0 lg:h-[480px] lg:max-w-[440px]"
          >
            <Image
              src="/images/try-courses-student.png"
              alt="Student holding notebooks"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 88vw, 440px"
            />
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="max-w-[560px] lg:pt-2">
            <Heading as="h2" variant="display-dark">
              Try Our Courses
            </Heading>
            <p className="mt-4 max-w-[500px] text-sm font-medium leading-7 text-[#4f4747] sm:text-[15px]">
              Enter your email and we will send you some samples of our courses.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Email Address"
                  required
                  className="h-[52px] min-h-[52px] flex-1 rounded-[12px] border-[#ead8d4] bg-white px-5 text-[14px] font-medium text-[#282221] shadow-none placeholder:text-[#9a8f8c] focus-visible:ring-primary/30"
                />
                <Button
                  type="submit"
                  variant="publicCta"
                  size="publicCta"
                  disabled={!agreed}
                  className="shrink-0 px-10 sm:min-w-[132px] cursor-pointer"
                >
                  Submit
                </Button>
              </div>

              <label
                className={cn(
                  "mt-5 flex cursor-pointer items-start gap-3 text-[12px] font-medium leading-6 text-[#4f4747]"
                )}
              >
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-[#d9c8c4] accent-primary"
                />
                <span>
                  By sharing your email, you agree to our{" "}
                  <Link href="#" className="font-bold text-[#282221] hover:text-primary">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="font-bold text-[#282221] hover:text-primary">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
