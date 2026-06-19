import { Heading } from "@/components/shared/heading";
import { Quote } from "lucide-react";
import { TeacherPortrait } from "@/components/public/teacher-portrait";
import type { CourseDetailsTeacher } from "@/components/public/course-details/types";

interface TeacherSectionProps {
  teacher: CourseDetailsTeacher;
}

export function TeacherSection({ teacher }: TeacherSectionProps) {
  return (
    <section id="teacher" className="scroll-mt-28">
      <Heading as="h2" variant="course-detail-section">
        Teacher
      </Heading>

      <div className="relative mt-5 overflow-hidden rounded-[22px] bg-[#fff5f5] px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <Quote
          className="pointer-events-none absolute right-5 top-5 h-12 w-12 text-[#f3d4d4] sm:right-6 sm:top-6 sm:h-14 sm:w-14"
          aria-hidden
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <TeacherPortrait
            alt={teacher.name}
            imageSrc={teacher.image}
            className="mx-0 h-[280px] max-w-[280px] sm:h-[300px] sm:max-w-[300px]"
          />

          <div className="relative min-w-0 pr-2 sm:pr-10">
            <Heading as="h3" variant="course-detail-card">{teacher.name}</Heading>
            <p className="mt-1.5 text-[14px] font-medium text-[#6f6562] sm:text-[15px]">
              {teacher.role}
            </p>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#4a4a4a] sm:text-[15px]">
              {teacher.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
