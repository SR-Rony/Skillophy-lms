"use client";

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

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Join as a Teacher", href: "/register" },
      { label: "Career", href: "/about" },
      { label: "Skillophy Affiliation", href: "/about" },
      { label: "Skillophy Business", href: "/pricing" },
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
    <footer className="relative overflow-hidden bg-[#230201] text-white">
      <Container
        as={motion.div}
        className="flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:py-[64px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerVariants}
      >
        <motion.div variants={footerVariants}>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-white text-[#230201]">
              <BookOpenCheck className="h-4 w-4" />
            </span>
            <span className="text-[22px] font-black uppercase tracking-[-0.04em]">Skillophy</span>
          </Link>

          <p className="mt-6 max-w-[245px] text-[13px] font-medium leading-6 text-white/78">
            The essence of continuously nurturing one&apos;s passion for education. It implies a commitment to keeping the flame of excitement
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {socialLinks.map(({ icon: Icon, label, href }, index) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:border-[#ff4444] hover:bg-[#ff4444]"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-3.5 w-3.5" />
                {index === 0 && <span className="sr-only">Facebook</span>}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-14 lg:pt-1"
          variants={staggerVariants}
        >
          {footerColumns.map((column) => (
            <motion.nav key={column.title} variants={footerVariants} aria-label={column.title}>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium leading-5 text-white/86 transition hover:text-[#ff4444]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </motion.div>

        <motion.div variants={footerVariants} className="lg:pt-1">
          <h3 className="text-[15px] font-bold text-white">Contact Us</h3>
          <ul className="mt-5 space-y-3.5">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex items-center gap-3 text-[13px] font-medium text-white/86 transition hover:text-[#ff4444]"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>

      <motion.div
        className="border-t border-white/12 px-4 py-5 text-center text-[13px] font-medium text-white/82"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        © 2024 Skillophy All rights reserved.
      </motion.div>

      <Link
        href="/support"
        aria-label="Chat with support"
        className="absolute bottom-[58px] right-5 hidden h-11 w-11 items-center justify-center rounded-xl bg-[#ff4444] text-white shadow-[0_12px_28px_rgba(255,68,68,0.35)] transition hover:-translate-y-1 hover:bg-[#ff3030] md:flex xl:right-8"
      >
        <MessageCircle className="h-6 w-6 fill-white/20" />
      </Link>
    </footer>
  );
}
