import { TeacherDifferentiatorIcon } from "@/components/public/teachers/teacher-differentiator-icon";
import type { FeatureHighlightSectionProps } from "@/types/feature-highlight.types";

export const teacherFeatureHighlightData: FeatureHighlightSectionProps = {
  title: "Why Teach Skillophy?",
  description:
    "Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.",
  items: [
    {
      id: "flexible-scheduling",
      title: "Flexible Scheduling",
      description:
        "E-learning has become increasingly essential in education, especially with the advancement of technology.",
      icon: <TeacherDifferentiatorIcon type="clock" color="#ffac21" className="h-12 w-12" />,
      glowClass: "bg-[#ff8a1f]/18",
    },
    {
      id: "diverse-student-base",
      title: "Diverse Student Base",
      description:
        "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
      icon: (
        <TeacherDifferentiatorIcon type="students" color="#ff4747" className="h-12 w-12" />
      ),
      glowClass: "bg-[#ff485a]/18",
    },
    {
      id: "innovative-teaching-tools",
      title: "Innovative Teaching Tools",
      description:
        "Innovation is crucial in the field of e-learning. With the rapid evolution of technology and changing education",
      icon: <TeacherDifferentiatorIcon type="quill" color="#3c91ff" className="h-12 w-12" />,
      glowClass: "bg-[#2f91ff]/18",
    },
  ],
};
