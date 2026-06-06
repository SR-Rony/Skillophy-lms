"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Headphones,
  Infinity,
  Play,
  PlayCircle,
  Quote,
  Smartphone,
  Star,
  Users,
} from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { JobOpeningRateSection } from "@/components/public/course-details/job-opening-rate-section";
import { CurriculumSection } from "@/components/public/course-details/curriculum-section";
import { TeacherSection } from "@/components/public/course-details/teacher-section";
import { RequirementsSection } from "@/components/public/course-details/requirements-section";
import { BusinessPromoSection } from "@/components/public/course-details/business-promo-section";
import type { CourseDetailsPageData } from "@/components/public/course-details/types";
import { cn } from "@/utils";

function SectionHeading({
  children,
  className,
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={cn(
        "text-[22px] font-bold tracking-[-0.02em] sm:text-[24px]",
        dark ? "text-[#1a1a1a]" : "text-[#ff4747]",
        className
      )}
    >
      {children}
    </h2>
  );
}

const benefitIcons = {
  lifetime: Infinity,
  certificate: Award,
  files: FileText,
  support: Headphones,
  mobile: Smartphone,
  community: Users,
};
const sidebarIcons = {
  lessons: BookOpen,
  video: PlayCircle,
  duration: Clock,
  files: FileText,
};

interface CourseDetailsMainProps {
  data: CourseDetailsPageData;
}

export function CourseDetailsMain({ data }: CourseDetailsMainProps) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]?.id ?? "course-overview");
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const [openFaqs, setOpenFaqs] = useState(
    data.faqs.filter((f) => f.defaultOpen).map((f) => f.id)
  );
  const [reviewIndex, setReviewIndex] = useState(0);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    document.getElementById(tabId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqs((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const visibleReviews = data.testimonials.slice(reviewIndex, reviewIndex + 2);

  return (
    <section className="bg-white pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pt-8">
      <Container>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <nav
              aria-label="Course sections"
              className="scrollbar-hide -mx-4 flex gap-1 overflow-x-auto border-b border-[#ece6e3] px-4 sm:mx-0 sm:px-0"
            >
              {data.tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "shrink-0 border-b-2 px-3 py-3 text-[13px] font-semibold transition sm:px-4 sm:text-[14px]",
                    activeTab === tab.id
                      ? "border-[#ff4747] text-[#ff4747]"
                      : "border-transparent text-[#5f5553] hover:text-[#2b2220]"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-14 lg:space-y-16">
              {/* Overview */}
              <section id="course-overview" className="scroll-mt-28">
                <SectionHeading>Course Overview</SectionHeading>
                <div className="relative mt-5">
                  <p
                    className={cn(
                      "text-[15px] leading-[1.7] text-[#4a4a4a] sm:text-base",
                      !overviewExpanded && "line-clamp-4"
                    )}
                  >
                    {data.overview.text}
                  </p>
                  {!overviewExpanded && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setOverviewExpanded((v) => !v)}
                  className="mt-3 text-[14px] font-bold text-[#ff4747] hover:text-[#e63d3d]"
                >
                  {overviewExpanded ? "See Less" : "See More"}
                </button>
              </section>

              {/* Learn */}
              <section id="what-youll-learn" className="scroll-mt-28">
                <SectionHeading>What You&apos;ll Learn</SectionHeading>
                <ul className="mt-5 space-y-3.5">
                  {data.learnItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff1ef] text-[#ff4747]">
                        <Play className="h-3 w-3 fill-[#ff4747]" aria-hidden />
                      </span>
                      <span className="text-[15px] leading-[1.6] text-[#4a4a4a]">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Skills */}
              <section id="skills" className="scroll-mt-28">
                <SectionHeading dark>Skills You Will Gain</SectionHeading>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {data.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#ece6e3] bg-[#faf9f8] px-4 py-2 text-[13px] font-semibold text-[#3c3332]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <JobOpeningRateSection data={data.jobOpeningRate} />

              <TeacherSection teacher={data.teacher} />

              <CurriculumSection modules={data.curriculum} />

              {/* Book */}
              <div className="flex items-center gap-4 rounded-[14px] border border-[#ece6e3] bg-[#faf9f8] p-4 sm:gap-5 sm:p-5">
                <div className="relative h-[72px] w-[52px] shrink-0 overflow-hidden rounded-[6px] shadow-sm sm:h-[84px] sm:w-[60px]">
                  <Image src={data.bookPromo.cover} alt={data.bookPromo.title} fill className="object-cover" sizes="60px" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-bold text-[#1a1a1a]">{data.bookPromo.title}</p>
                  <p className="mt-1 text-[13px] font-medium text-[#6f6562]">by {data.bookPromo.author}</p>
                </div>
                <button
                  type="button"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff4747] text-white hover:bg-[#ef4343]"
                  aria-label="View book"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <RequirementsSection requirements={data.requirements} />

              <BusinessPromoSection data={data.businessPromo} />

              {/* Benefits */}
              <section>
                <SectionHeading dark>What You&apos;ll Get</SectionHeading>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.benefits.map((item) => {
                    const Icon = benefitIcons[item.icon];
                    return (
                      <div key={item.title} className="flex items-center gap-3 rounded-[14px] border border-[#ece6e3] bg-white px-4 py-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff4f2] text-[#ff4747]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="text-[14px] font-semibold text-[#3c3332]">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Certificate */}
              <section>
                <SectionHeading>Course Certificate</SectionHeading>
                <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="text-[15px] leading-[1.7] text-[#4a4a4a]">{data.certificate.description}</p>
                    <ul className="mt-5 space-y-3">
                      {data.certificate.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-[14px] text-[#4a4a4a]">
                          <span className="mt-1 text-[#22c55e]">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-[#ece6e3] bg-[#faf9f8]">
                    <Image src={data.certificate.image} alt="Certificate preview" fill className="object-cover" sizes="400px" />
                  </div>
                </div>
              </section>

              {/* Reviews */}
              <section id="reviews" className="scroll-mt-28">
                <SectionHeading dark>What Learners Said About this Course</SectionHeading>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {visibleReviews.map((item) => (
                    <article key={item.id} className="relative rounded-[16px] border border-[#ece6e3] bg-white p-5 sm:p-6">
                      <Quote className="absolute right-5 top-5 h-8 w-8 text-[#f5ebe8]" aria-hidden />
                      <p className="pr-6 text-[14px] leading-[1.7] text-[#4a4a4a]">{item.quote}</p>
                      <div className="mt-5 flex items-center gap-3">
                        <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#ece6e3]">
                          <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="44px" />
                        </div>
                        <div>
                          <p className="text-[14px] font-bold text-[#1a1a1a]">{item.name}</p>
                          <p className="text-[12px] font-medium text-[#6f6562]">{item.role}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5" aria-hidden>
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#ffa500] text-[#ffa500]" />
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    disabled={reviewIndex === 0}
                    onClick={() => setReviewIndex((v) => Math.max(0, v - 1))}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-[8px] border",
                      reviewIndex > 0
                        ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                        : "cursor-not-allowed border-[#ece6e3] text-[#c4bbb8]"
                    )}
                    aria-label="Previous reviews"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    disabled={reviewIndex + 2 >= data.testimonials.length}
                    onClick={() => setReviewIndex((v) => v + 1)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-[8px] border",
                      reviewIndex + 2 < data.testimonials.length
                        ? "border-[#ff4747] bg-[#ff4747] text-white"
                        : "cursor-not-allowed border-[#ece6e3] text-[#c4bbb8]"
                    )}
                    aria-label="Next reviews"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-28">
                <SectionHeading dark>Frequently Asked Questions</SectionHeading>
                <div className="mt-5 space-y-3">
                  {data.faqs.map((item) => {
                    const isOpen = openFaqs.includes(item.id);
                    return (
                      <div key={item.id} className="overflow-hidden rounded-[14px] border border-[#ece6e3] bg-white">
                        <button
                          type="button"
                          onClick={() => toggleFaq(item.id)}
                          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                        >
                          <span className="text-[15px] font-bold text-[#1a1a1a]">{item.question}</span>
                          <ChevronDown className={cn("h-5 w-5 shrink-0 transition", isOpen && "rotate-180")} aria-hidden />
                        </button>
                        {isOpen && (
                          <p className="border-t border-[#f0ebe8] px-4 pb-4 text-[14px] leading-[1.65] text-[#4a4a4a] sm:px-5 sm:pb-5">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <aside
            id="enroll"
            className="mt-10 rounded-[18px] border border-[#ece6e3] bg-white p-5 shadow-[0_18px_40px_rgba(35,25,22,0.08)] sm:p-6 lg:sticky lg:top-24 lg:mt-0 lg:self-start"
          >
            <h3 className="text-[16px] font-bold text-[#1a1a1a]">This Course Includes</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {data.sidebar.includes.map((item) => {
                const Icon = sidebarIcons[item.icon];
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-[10px] border border-[#f3eeeb] bg-[#faf9f8] px-3 py-2.5"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#ff4747]" aria-hidden />
                    <span className="text-[12px] font-semibold text-[#3c3332]">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-[32px] font-black text-[#ff4747]">৳{data.sidebar.price}</span>
              <span className="text-[16px] font-medium text-[#9a908c] line-through">
                ৳{data.sidebar.originalPrice}
              </span>
            </div>
            <div className="mt-5 space-y-3">
              <Button variant="publicCta" size="publicCta" className="w-full">
                Enroll Now
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-[52px] w-full rounded-[12px] border-2 border-[#ff4747] bg-white text-[13px] font-black text-[#ff4747] hover:bg-[#fff4f2]"
              >
                <Link href="/cart">Add to Cart</Link>
              </Button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-[13px] font-semibold text-[#22c55e]">
              <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden />
              30-Day Money-Back Guarantee
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
