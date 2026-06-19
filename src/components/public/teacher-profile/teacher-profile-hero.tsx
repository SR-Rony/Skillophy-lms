"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Linkedin } from "lucide-react";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { TeacherProfile, TeacherProfileSocialAction } from "@/types/teacher-profile.types";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function TeacherProfileHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <div className="absolute left-[8%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,214,170,0.18)_0%,rgba(255,180,160,0.08)_38%,transparent_72%)] sm:left-[10%] sm:h-[520px] sm:w-[520px]" />

      <svg
        className="absolute right-[-8%] top-1/2 hidden h-[620px] w-[760px] -translate-y-1/2 text-[#c58a2a]/14 lg:block"
        viewBox="0 0 760 620"
        fill="none"
      >
        <g transform="translate(380, 310)">
          {Array.from({ length: 16 }).map((_, index) => {
            const radius = 48 + index * 22;
            const points = Array.from({ length: 7 })
              .map((__, pointIndex) => {
                const angle = (Math.PI * 2 * pointIndex) / 7 - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return `${x},${y}`;
              })
              .join(" ");

            return (
              <polygon
                key={index}
                points={points}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function SocialActionButton({ action }: { action: TeacherProfileSocialAction }) {
  const Icon = action.platform === "linkedin" ? Linkedin : Facebook;
  const isPrimary = action.variant === "primary";

  return (
    <Link
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-[52px] min-w-[170px] items-center justify-center gap-2.5 rounded-lg px-6 text-[14px] font-semibold transition duration-300 sm:min-w-[188px] sm:px-7 sm:text-[15px]",
        isPrimary
          ? "bg-primary text-white shadow-[0_12px_28px_rgba(255,71,71,0.22)] hover:-translate-y-0.5 hover:bg-primary/90"
          : "border border-[#e8e2de] bg-white text-[#1a1a1a] hover:-translate-y-0.5 hover:bg-[#faf8f7]",
      )}
    >
      <Icon className="h-[18px] w-[18px] shrink-0" />
      <span>{action.label}</span>
    </Link>
  );
}

interface TeacherProfileHeroProps {
  profile: TeacherProfile;
}

export function TeacherProfileHero({ profile }: TeacherProfileHeroProps) {
  const { name, credentials, imageSrc, imageAlt, imageWidth, imageHeight, socialActions } = profile;

  return (
    <section className="relative isolate overflow-hidden bg-white pb-10 pt-10 sm:pb-12 sm:pt-12 lg:pb-0 lg:pt-0">
      <TeacherProfileHeroBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="grid items-end gap-10 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col justify-center pb-4 lg:min-h-[560px] lg:py-16 xl:py-20"
          >
            <Heading as="h1" variant="display-bold">
              {name}
            </Heading>

            <div className="mt-5 space-y-1.5">
              {credentials.map((credential) => (
                <p
                  key={credential.id}
                  className="text-[14px] font-medium leading-[1.7] text-[#6f6562] sm:text-[15px]"
                >
                  {credential.text}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {socialActions.map((action) => (
                <SocialActionButton key={action.id} action={action} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[520px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                priority
                unoptimized
                className="relative z-10 h-auto w-full object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
