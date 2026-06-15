"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/shared";
import { myCoursesByTab } from "@/data/mock/my-courses.mock";
import type { MyCoursesTab } from "@/types/student-course.types";
import { DashboardEmptyState } from "@/components/shared/dashboard-empty-state";
import { MyCoursesCatalogSection } from "./my-courses-catalog-section";
import { MyCoursesHero } from "./my-courses-hero";
import { MyCoursesSection } from "./my-courses-section";
import { MyCoursesUpcomingSection } from "./my-courses-upcoming-section";
import { MyCoursesWishlistSection } from "./my-courses-wishlist-section";

const emptyMessages: Record<MyCoursesTab, string> = {
  ongoing: "You have no ongoing courses at this time.",
  completed: "You haven't completed any courses yet.",
  wishlists: "Your wishlist is empty. Browse courses to add some.",
  recommended: "No recommended courses available at this time.",
};

export function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState<MyCoursesTab>("ongoing");
  const tabData = myCoursesByTab[activeTab];
  const { recorded, live, wishlist = [], upcoming = [], recommended = [] } = tabData;
  const hasCourses =
    recorded.length > 0 ||
    live.length > 0 ||
    wishlist.length > 0 ||
    upcoming.length > 0 ||
    recommended.length > 0;

  return (
    <>
      <MyCoursesHero activeTab={activeTab} onTabChange={setActiveTab} />

      <Container className="space-y-10 py-8 md:space-y-12 md:py-10">
        {hasCourses ? (
          activeTab === "completed" ? (
            <MyCoursesSection title="Completed Courses" courses={recorded} />
          ) : activeTab === "wishlists" ? (
            <MyCoursesWishlistSection courses={wishlist} />
          ) : activeTab === "recommended" ? (
            <>
              <MyCoursesUpcomingSection courses={upcoming} />
              <MyCoursesCatalogSection
                title="Recommended for You"
                courses={recommended}
              />
            </>
          ) : (
            <>
              <MyCoursesSection title="Recorded Courses" courses={recorded} />
              <MyCoursesSection title="LIVE Courses" courses={live} />
            </>
          )
        ) : (
          <div className="rounded-2xl border border-dashed border-[#e5e7eb] bg-[#fafafa] py-16">
            <DashboardEmptyState
              icon={
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f4f6]">
                  <BookOpen className="h-8 w-8 text-[#9ca3af]" strokeWidth={1.5} />
                </div>
              }
              title={emptyMessages[activeTab]}
            />
          </div>
        )}
      </Container>
    </>
  );
}
