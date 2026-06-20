import { Heading } from "@/components/shared/heading";
import type { StudentLearningMaterialTopic } from "@/types/student-resources.types";
import { MyResourcesMaterialCard } from "./my-resources-material-card";
import { cn } from "@/utils";

interface MyResourcesTopicSectionProps {
  topic: StudentLearningMaterialTopic;
  className?: string;
}

export function MyResourcesTopicSection({ topic, className }: MyResourcesTopicSectionProps) {
  if (topic.items.length === 0) {
    return null;
  }

  return (
    <section className={cn("space-y-4 sm:space-y-5", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <Heading as="h2" variant="dashboard-section" className="text-[18px] sm:text-[20px]">
          {topic.title}
        </Heading>
        <span className="rounded-full bg-[#faf3e8] px-3 py-1 text-[12px] font-semibold text-[#1a1a1a]">
          {topic.items.length} materials
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {topic.items.map((item) => (
          <MyResourcesMaterialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
