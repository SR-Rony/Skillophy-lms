"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/shared";
import { myCoursesByTab } from "@/data/mock/my-courses.mock";
import type { MyCoursesTab } from "@/types/student-course.types";
import { DashboardEmptyState } from "@/components/shared/dashboard-empty-state";
import { MyCoursesHero } from "./my-courses-hero";
import { MyCoursesSection } from "./my-courses-section";

const emptyMessages: Record<MyCoursesTab, string> = {
  ongoing: "You have no ongoing courses at this time.",
  completed: "You haven't completed any courses yet.",
  wishlists: "Your wishlist is empty. Browse courses to add some.",
  recommended: "No recommended courses available at this time.",
};

export function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState<MyCoursesTab>("ongoing");
  const { recorded, live } = myCoursesByTab[activeTab];
  const hasCourses = recorded.length > 0 || live.length > 0;

  return (
    <>
      <MyCoursesHero activeTab={activeTab} onTabChange={setActiveTab} />

      <Container className="space-y-10 py-8 md:space-y-12 md:py-10">
        {hasCourses ? (
          <>
            <MyCoursesSection title="Recorded Courses" courses={recorded} />
            <MyCoursesSection title="LIVE Courses" courses={live} />
          </>
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
