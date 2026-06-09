"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { PositionJobDetailPanel } from "@/components/public/position/position-job-detail-panel";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";
import type { PositionJobDetail } from "@/types/position.types";

function PositionJobDetailDesktopRedirect() {
  const router = useRouter();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleRedirect = () => {
      if (mediaQuery.matches) {
        router.replace(ROUTES.position);
      }
    };

    handleRedirect();
    mediaQuery.addEventListener("change", handleRedirect);

    return () => mediaQuery.removeEventListener("change", handleRedirect);
  }, [router]);

  return null;
}

interface PositionJobDetailPageContentProps {
  job: PositionJobDetail;
}

export function PositionJobDetailPageContent({ job }: PositionJobDetailPageContentProps) {
  return (
    <>
      <PositionJobDetailDesktopRedirect />

      <div className="lg:hidden">
        <section className="relative overflow-hidden bg-white pb-10 pt-6 sm:pb-12 sm:pt-8">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-[8%] top-[8%] h-[220px] w-[220px] rounded-full bg-[#ffe2cc]/30 blur-[80px]" />
            <div className="absolute right-[-6%] bottom-[6%] h-[240px] w-[240px] rounded-full bg-[#fff0eb]/45 blur-[90px]" />
          </div>

          <Container
            as={motion.div}
            className="relative z-10"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={sectionTitleFadeUpVariants}>
              <Link
                href={ROUTES.position}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6f6562] transition hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Go Back
              </Link>
            </motion.div>

            <motion.div variants={sectionTitleFadeUpVariants} className="mt-6">
              <PositionJobDetailPanel job={job} />
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
}
