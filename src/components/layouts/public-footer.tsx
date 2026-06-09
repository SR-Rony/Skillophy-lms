"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Send,
} from "lucide-react";
import { Container } from "@/components/shared";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

const FOOTER_LOGO_SRC = "/images/footer.png";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Join as a Teacher", href: "/register" },
      { label: "Career", href: ROUTES.career },
      { label: "Skillophy Affiliation", href: "/about" },
      { label: "Skillophy Business", href: ROUTES.business },
      { label: "About Us", href: "/about" },
      { label: "Faq", href: "/support" },
      { label: "Press/News Feature", href: "/blog" },
      { label: "Media Kit", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Podcast", href: "/blog" },
      { label: "Blog", href: "/blog" },
      { label: "Book Store", href: "/courses" },
      { label: "Notes & Resources", href: "/courses" },
      { label: "Free Download", href: "/courses" },
      { label: "Invite Your Campus", href: "/support" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Privacy & Cookie Policy", href: "/support" },
      { label: "Refund Policy", href: "/support" },
      { label: "Terms & Conditions", href: "/support" },
      { label: "Verify Certificate", href: "/support" },
    ],
  },
];

const contactItems = [
  { icon: Phone, label: "+880 1700000000", href: "tel:+8801700000000" },
  { icon: Mail, label: "info@skillophy.com", href: "mailto:info@skillophy.com" },
  { icon: MapPin, label: "Dhaka, Bangladesh", href: "https://maps.google.com/?q=Dhaka,Bangladesh" },
  { icon: BookOpenCheck, label: "Site Map", href: "/courses" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Send, label: "YouTube", href: "https://youtube.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Music2, label: "X", href: "https://x.com" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
];

const footerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerVariants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export function PublicFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#140808] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1f0c0b_0%,#160707_48%,#100505_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,color-mix(in srgb, var(--color-primary) 18%, transparent),transparent_42%),radial-gradient(ellipse_at_88%_100%,rgba(255,172,33,0.1),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
        <svg
          className="absolute -right-[12%] top-[8%] h-[420px] w-[620px] text-white/[0.04]"
          viewBox="0 0 620 420"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <path
              key={index}
              d={`M${18 + index * 10} ${300 - index * 8} C ${140 + index * 8} ${110 - index * 2}, ${320 + index * 4} ${104 + index * 5}, ${590 - index * 6} ${286 - index * 3}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container
        as={motion.div}
        className="relative z-10 flex flex-col gap-12 py-16 sm:py-[72px] lg:flex-row lg:items-start lg:justify-between lg:gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerVariants}
      >
        <motion.div variants={footerVariants} className="max-w-[300px]">
          <Link href="/" className="inline-flex">
            <Image
              src={FOOTER_LOGO_SRC}
              alt="Skillophy"
              width={190}
              height={48}
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>

          <p className="mt-6 text-[13px] font-medium leading-[1.75] text-white/72">
            The essence of continuously nurturing one&apos;s passion for education. We help
            learners and teams grow with expert-led courses and practical learning paths.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.05] text-white/88 transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary hover:text-white hover:shadow-[0_8px_20px] shadow-primary/28"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid flex-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:max-w-[620px] lg:gap-12 lg:pt-2"
          variants={staggerVariants}
        >
          {footerColumns.map((column) => (
            <motion.nav key={column.title} variants={footerVariants} aria-label={column.title}>
              <h3 className="text-[14px] font-bold tracking-wide text-white">
                {column.title}
              </h3>
              <span className="mt-2 mb-4 block h-[2px] w-8 rounded-full bg-primary" />
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium leading-5 text-white/72 transition hover:translate-x-0.5 hover:text-primary/70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        <motion.div
          variants={footerVariants}
          className="rounded-[16px] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm lg:max-w-[260px] lg:pt-2"
        >
          <h3 className="text-[14px] font-bold tracking-wide text-white">Contact Us</h3>
          <span className="mt-2 mb-5 block h-[2px] w-8 rounded-full bg-primary" />
          <ul className="space-y-4">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex items-start gap-3 text-[13px] font-medium text-white/78 transition hover:text-white"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-white/10 bg-primary/15 text-primary/70 transition group-hover:border-primary/40 group-hover:bg-primary/25">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="pt-1 leading-5">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>

      <motion.div
        className="relative z-10 border-t border-white/[0.08] bg-black/25 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] font-medium text-white/65">
            © {new Date().getFullYear()} Skillophy. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <Link
                key={item}
                href="/support"
                className="text-[12px] font-medium text-white/55 transition hover:text-primary/70"
              >
                {item}
              </Link>
            ))}
          </div>
        </Container>
      </motion.div>

      <Link
        href="/support"
        aria-label="Chat with support"
        className={cn(
          "fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-[14px]",
          "bg-primary text-white shadow-[0_14px_32px] shadow-primary/38",
          "transition hover:-translate-y-1 hover:bg-primary/90 sm:bottom-8 sm:right-8"
        )}
      >
        <MessageCircle className="h-6 w-6 fill-white/15" />
      </Link>
    </footer>
  );
}
