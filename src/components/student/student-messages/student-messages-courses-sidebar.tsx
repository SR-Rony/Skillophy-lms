"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { StudentMessageCourse } from "@/types/student-messages.types";
import { StudentMessagesCourseItem } from "./student-messages-course-item";
import { MessagesScrollArea } from "./messages-scroll-area";
import { messagesPanelClassName } from "./messages-layout";
import { cn } from "@/utils";

interface StudentMessagesCoursesSidebarProps {
  courses: StudentMessageCourse[];
  totalUnreadCount: number;
  selectedCourseId: string | null;
  onSelectCourse: (courseId: string) => void;
  className?: string;
}

export function StudentMessagesCoursesSidebar({
  courses,
  totalUnreadCount,
  selectedCourseId,
  onSelectCourse,
  className,
}: StudentMessagesCoursesSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return courses;

    return courses.filter((course) => course.title.toLowerCase().includes(query));
  }, [courses, searchQuery]);

  return (
    <section
      className={cn(messagesPanelClassName, className)}
    >
      <div className="shrink-0 border-b border-[#f3f4f6] px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Courses</h2>
          <span className="inline-flex shrink-0 rounded-full bg-[#f3f4f6] px-3 py-1 text-[12px] font-semibold text-[#6b7280]">
            Unread {totalUnreadCount}
          </span>
        </div>

        <label className="relative mt-4 block">
          <span className="sr-only">Search courses</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search"
            className="h-11 w-full rounded-full border border-[#ebe8e6] bg-white px-4 pr-11 text-[13px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
          />
          <Search
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
            strokeWidth={2}
            aria-hidden
          />
        </label>
      </div>

      <MessagesScrollArea>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <StudentMessagesCourseItem
              key={course.id}
              course={course}
              isActive={course.id === selectedCourseId}
              onSelect={onSelectCourse}
            />
          ))
        ) : (
          <p className="px-5 py-8 text-center text-[13px] text-[#9ca3af]">No courses found</p>
        )}
      </MessagesScrollArea>
    </section>
  );
}
