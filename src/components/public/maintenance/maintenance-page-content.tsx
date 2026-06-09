"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { MaintenanceIllustration } from "@/components/public/maintenance/maintenance-illustration";
import {
  maintenancePageData,
  type MaintenanceSocialLink,
} from "@/components/public/maintenance/data/maintenance-page.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";

function MaintenanceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,214,170,0.14),transparent_32%),radial-gradient(circle_at_84%_22%,rgba(255,180,160,0.1),transparent_30%)]" />

      <svg
        className="absolute left-[-8%] top-[12%] h-[280px] w-[420px] text-[#f0c89a]/20 sm:h-[320px] sm:w-[480px]"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${12 + index * 8} ${250 - index * 8} C ${70 + index * 7} ${90 - index * 2}, ${180 + index * 5} ${82 + index * 3}, ${340 - index * 6} ${238 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute bottom-[6%] right-[-5%] h-[260px] w-[420px] text-[#efb0aa]/18 sm:h-[300px] sm:w-[480px]"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${18 + index * 8} ${250 - index * 8} C ${96 + index * 7} ${78 - index * 2}, ${230 + index * 5} ${72 + index * 3}, ${460 - index * 6} ${236 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.53 3H20.5l-7.19 8.21L21.5 21h-6.6l-5.16-6.73L4.1 21H1.12l7.68-8.78L2.5 3h6.77l4.67 6.17L17.53 3Zm-1.16 16.2h1.83L7.78 4.73H5.82l10.55 14.47Z" />
    </svg>
  );
}

function SocialIconLink({ link }: { link: MaintenanceSocialLink }) {
  const Icon = link.icon !== "x" ? link.icon : null;

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#ece6e3] text-[#4f4747] transition duration-300",
        "hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_10px_24px] hover:shadow-primary/24",
      )}
    >
      {Icon ? <Icon className="h-[18px] w-[18px]" /> : <XIcon className="h-[18px] w-[18px]" />}
    </Link>
  );
}

export function MaintenancePageContent() {
  const { title, description, socialLinks } = maintenancePageData;

  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <MaintenanceBackground />

      <Container
        as={motion.div}
        className="relative z-10 w-full"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <motion.div variants={sectionTitleFadeUpVariants}>
            <MaintenanceIllustration />
          </motion.div>

          <motion.h1
            variants={sectionTitleFadeUpVariants}
            className="mt-8 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] sm:text-[34px] lg:text-[38px]"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={sectionTitleFadeUpVariants}
            className="mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[#6f6562] sm:text-[16px]"
          >
            {description}
          </motion.p>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mt-10 flex items-center justify-center gap-3 sm:gap-4"
          >
            {socialLinks.map((link) => (
              <SocialIconLink key={link.id} link={link} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
