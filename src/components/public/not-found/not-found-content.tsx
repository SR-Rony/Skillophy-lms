"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Mail, Newspaper, Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/shared";
import { NotFoundIllustration } from "@/components/public/not-found/not-found-illustration";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

function NotFoundBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,214,170,0.18),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(255,180,160,0.12),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(255,235,220,0.16),transparent_42%)]" />

      <svg
        className="absolute left-[-8%] top-[10%] h-[300px] w-[440px] text-[#f0c89a]/24 sm:h-[340px] sm:w-[500px]"
        viewBox="0 0 500 340"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${10 + index * 8} ${260 - index * 8} C ${80 + index * 7} ${88 - index * 2}, ${210 + index * 5} ${80 + index * 3}, ${470 - index * 6} ${246 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute bottom-[4%] right-[-5%] h-[280px] w-[440px] text-[#efb0aa]/22 sm:h-[320px] sm:w-[500px]"
        viewBox="0 0 500 320"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${16 + index * 8} ${250 - index * 8} C ${96 + index * 7} ${78 - index * 2}, ${230 + index * 5} ${72 + index * 3}, ${480 - index * 6} ${236 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

const quickLinks = [
  { href: ROUTES.about, label: "About", icon: BookOpen },
  { href: ROUTES.blog, label: "Blog", icon: Newspaper },
  { href: ROUTES.contact, label: "Contact", icon: Mail },
] as const;

export function NotFoundContent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();

    if (!query) {
      router.push(ROUTES.courses);
      return;
    }

    router.push(`${ROUTES.courses}?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-[#fffcf9] py-16 sm:py-20 lg:py-24">
      <NotFoundBackground />

      <Container
        as={motion.div}
        className="relative z-10 w-full"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <motion.div variants={sectionTitleFadeUpVariants}>
            <NotFoundIllustration />
          </motion.div>

          <motion.span
            variants={sectionTitleFadeUpVariants}
            className="mt-6 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary"
          >
            Error 404
          </motion.span>

          <motion.h1
            variants={sectionTitleFadeUpVariants}
            className="mt-5 text-[34px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] sm:text-[40px] lg:text-[44px]"
          >
            Page Not Found!
          </motion.h1>

          <motion.p
            variants={sectionTitleFadeUpVariants}
            className="mt-4 max-w-[560px] text-[15px] leading-[1.75] text-[#6f6562] sm:text-[16px]"
          >
            Maybe you got a broken link, or maybe you made a misprint in the address bar. Try
            searching for a course or return to the homepage to start again.
          </motion.p>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mt-10 w-full max-w-[560px] rounded-[24px] border border-[#ece6e3] bg-white p-5 shadow-[0_18px_50px_rgba(80,37,31,0.06)] sm:p-6"
          >
            <p className="text-left text-[14px] font-semibold text-[#24201f] sm:text-[15px]">
              What are you looking for?
            </p>

            <form
              onSubmit={handleSearch}
              className="mt-4 flex w-full items-center gap-2 rounded-full border border-[#ece6e3] bg-[#faf9f8] py-1.5 pl-5 pr-1.5 transition focus-within:border-primary/30 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(255,71,71,0.08)]"
              role="search"
            >
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search courses, topics, or mentors..."
                className="min-w-0 flex-1 bg-transparent text-[15px] text-[#24201f] outline-none placeholder:text-[#b8b0ad]"
                aria-label="Search courses"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] p-3 text-white transition hover:bg-primary"
                aria-label="Search"
              >
                <Search className="h-4 w-4" aria-hidden />
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mt-8 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Button asChild variant="publicCta" size="publicCta" className="w-full sm:w-auto">
              <Link href={ROUTES.home}>Back to Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="publicCta"
              className="h-[52px] w-full rounded-[12px] border-[#1a1a1a] bg-white text-[13px] font-black text-[#1a1a1a] hover:border-primary hover:bg-primary hover:text-white sm:w-auto"
            >
              <Link href={ROUTES.courses}>Browse Courses</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-[#ece6e3] bg-white px-4 py-2 text-[13px] font-semibold text-[#4f4747] transition hover:border-primary/25 hover:text-primary"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {label}
              </Link>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
