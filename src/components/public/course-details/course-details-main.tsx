"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  BadgeCheck,
  BookOpen,
  Clock,
  FileText,
  Play,
  PlayCircle,
} from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { JobOpeningRateSection } from "@/components/public/course-details/job-opening-rate-section";
import { BookPromoSection } from "@/components/public/course-details/book-promo-section";
import { CurriculumSection } from "@/components/public/course-details/curriculum-section";
import { TeacherSection } from "@/components/public/course-details/teacher-section";
import { RequirementsSection } from "@/components/public/course-details/requirements-section";
import { BusinessPromoSection } from "@/components/public/course-details/business-promo-section";
import { BenefitsSection } from "@/components/public/course-details/benefits-section";
import { CertificateSection } from "@/components/public/course-details/certificate-section";
import { ReviewsSection } from "@/components/public/course-details/reviews-section";
import { FaqSection } from "@/components/public/course-details/faq-section";
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
        dark ? "text-[#1a1a1a]" : "text-primary",
        className
      )}
    >
      {children}
    </h2>
  );
}

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

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    document.getElementById(tabId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

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
                      ? "border-primary text-primary"
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
                  className="mt-3 text-[14px] font-bold text-primary hover:text-primary/90"
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
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <Play className="h-3 w-3 fill-primary" aria-hidden />
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

              <BookPromoSection book={data.bookPromo} />

              <RequirementsSection requirements={data.requirements} />

              <BusinessPromoSection data={data.businessPromo} />

              <BenefitsSection benefits={data.benefits} />

              <CertificateSection data={data.certificate} />

              <ReviewsSection testimonials={data.testimonials} />

              <FaqSection faqs={data.faqs} />
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
                    <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span className="text-[12px] font-semibold text-[#3c3332]">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-[32px] font-black text-primary">৳{data.sidebar.price}</span>
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
                className="h-[52px] w-full rounded-[12px] border-2 border-primary bg-white text-[13px] font-black text-primary hover:bg-primary/5"
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
