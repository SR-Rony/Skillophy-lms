"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

interface AcademicProgram {
  id: string;
  title: string;
  slug: string;
  image: string;
  imageBg: string;
  description: string;
  price: number;
}

const programs: AcademicProgram[] = [
  {
    id: "hsc-25-online-batch",
    title: "HSC 25 Online Batch",
    slug: "hsc-25-online-batch",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=900&auto=format&fit=crop",
    imageBg: "bg-[#b9dfef]",
    description: "Online courses on physics, chemistry, mathematics",
    price: 3000,
  },
  {
    id: "ssc-25-online-batch",
    title: "SSC 25 Online Batch",
    slug: "ssc-25-online-batch",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop",
    imageBg: "bg-[#f4c2ca]",
    description: "Online courses on physics, chemistry, mathematics",
    price: 2400,
  },
  {
    id: "class-9-science",
    title: "Class 9 (Science)",
    slug: "class-9-science",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=900&auto=format&fit=crop",
    imageBg: "bg-[#ffdca8]",
    description: "Online courses on physics, chemistry, mathematics",
    price: 1800,
  },
  {
    id: "class-10-science",
    title: "Class 10 (Science)",
    slug: "class-10-science",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop",
    imageBg: "bg-[#d9edbf]",
    description: "Online courses on physics, chemistry, mathematics",
    price: 2200,
  },
  {
    id: "academic-english-program",
    title: "Academic English Program",
    slug: "academic-english-program",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop",
    imageBg: "bg-[#d8c8ff]",
    description: "Online courses on grammar, writing, communication",
    price: 1600,
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

function formatTaka(amount: number) {
  return `৳${amount}`;
}

export function AcademicProgramSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const loopPrograms = [...programs, ...programs.slice(0, 3)];
  const arrowButtonClassName =
    "rounded-full bg-[#6d6d6d] text-white shadow-[0_12px_24px_rgba(62,62,62,0.2)] hover:-translate-y-0.5 hover:bg-[#ff4747] hover:shadow-[0_14px_26px_rgba(255,71,71,0.26)] cursor-pointer";

  const goToPrevious = () => {
    if (activeIndex === programs.length) {
      return;
    }

    if (activeIndex === 0) {
      setEnableTransition(false);
      setActiveIndex(programs.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setActiveIndex(programs.length - 1);
        });
      });
      return;
    }

    setEnableTransition(true);
    setActiveIndex((index) => index - 1);
  };

  const goToNext = () => {
    setEnableTransition(true);
    setActiveIndex((index) => Math.min(index + 1, programs.length));
  };

  useEffect(() => {
    if (activeIndex !== programs.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setEnableTransition(false);
      setActiveIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[92px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_18%_30%,rgba(255,235,190,0.38),transparent_36%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_82%_52%,rgba(255,221,166,0.28),transparent_34%)]" />
        <svg
          className="absolute right-0 top-[12%] hidden h-[360px] w-[600px] text-[#eedb96]/25 lg:block"
          viewBox="0 0 560 330"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 18 }).map((_, index) => (
            <path
              key={index}
              d={`M${32 + index * 9} ${252 - index * 6} C ${144 + index * 6} ${92 - index * 2}, ${315 + index * 3} ${78 + index * 4}, ${545 - index * 4} ${268 - index * 2}`}
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div variants={fadeUpVariants} className="max-w-[760px]">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#8a2525]">
                Live Courses
              </span>
              <span className="h-px w-16 bg-[#a5655c]" />
            </div>
            <h2 className="text-[34px] font-black leading-[1.12] tracking-[-0.045em] text-[#24201f] sm:text-[42px] lg:text-[46px]">
              Academic Program
            </h2>
            <p className="mt-4 max-w-[680px] text-sm font-medium leading-6 text-[#5f5553]">
              Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="flex gap-3 lg:pb-2">
            <Button
              type="button"
              size="publicIcon"
              aria-label="Show previous academic program"
              onClick={goToPrevious}
              className={arrowButtonClassName}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="publicIcon"
              size="publicIcon"
              aria-label="Show next academic program"
              onClick={goToNext}
              className={arrowButtonClassName}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        <motion.div variants={fadeUpVariants} className="mt-12 overflow-hidden">
          <div
            className={cn(
              "flex gap-6 [--program-card-width:100%] md:[--program-card-width:calc((100%_-_24px)/2)] lg:[--program-card-width:calc((100%_-_48px)/3)]",
              enableTransition && "transition-transform duration-500 ease-out"
            )}
            style={{
              transform: `translateX(calc(-${activeIndex} * (var(--program-card-width) + 24px)))`,
            }}
          >
            {loopPrograms.map((program, index) => (
              <motion.article
                key={`${program.id}-${index}`}
                variants={fadeUpVariants}
                className="w-[var(--program-card-width)] shrink-0 overflow-hidden rounded-[14px] border border-[#eee1de] bg-white shadow-[0_18px_38px_rgba(80,37,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(80,37,31,0.1)]"
              >
                <Link href={`/courses/${program.slug}`} className="block h-full">
                  <div className={cn("relative h-[220px] overflow-hidden", program.imageBg)}>
                    <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-[6px] bg-[#ff4747] px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.05em] text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      Live
                    </span>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover object-top mix-blend-multiply transition duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 336px"
                    />
                  </div>

                  <div className="px-4 pb-5 pt-4 sm:px-5">
                    <h3 className="text-[20px] font-black leading-[1.16] tracking-[-0.02em] text-[#282221]">
                      {program.title}
                    </h3>
                    <p className="mt-3 max-w-[250px] text-[13px] font-medium leading-5 text-[#4f4747]">
                      {program.description}
                    </p>
                    <div className="mt-5 text-[22px] font-black leading-none text-[#4a1111]">
                      {formatTaka(program.price)}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
