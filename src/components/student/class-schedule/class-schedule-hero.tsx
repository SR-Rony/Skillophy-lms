import { Heading } from "@/components/shared/heading";
import { Container } from "@/components/shared";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { cn } from "@/utils";

interface ClassScheduleHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function ClassScheduleHero({ title, subtitle, className }: ClassScheduleHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[#f3f4f6] py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <MyCoursesSeamBackground />

      <Container className="relative z-10">
        <Heading as="h1" variant="dashboard-page-sm">
          {title}
        </Heading>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
