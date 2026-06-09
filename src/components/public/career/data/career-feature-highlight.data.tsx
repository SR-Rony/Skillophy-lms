import { Compass, Lightbulb, UsersRound } from "lucide-react";
import type { FeatureHighlightSectionProps } from "@/types/feature-highlight.types";

export const careerFeatureHighlightData: FeatureHighlightSectionProps = {
  title: "Why Join Skillophy?",
  description:
    "Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.",
  items: [
    {
      id: "inclusive",
      title: "Inclusive",
      description:
        "E-learning has become increasingly essential in education, especially with the advancement of technology.",
      icon: <UsersRound className="h-12 w-12 stroke-[1.45] text-[#ffb12f]" />,
      glowClass: "bg-[#ff8a1f]/18",
    },
    {
      id: "revolutionary",
      title: "Revolutionary",
      description:
        "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
      icon: <Compass className="h-12 w-12 stroke-[1.45] text-[#ff485a]" />,
      glowClass: "bg-[#ff485a]/18",
    },
    {
      id: "curious",
      title: "Curious",
      description:
        "Innovation is crucial in the field of e-learning. With the rapid evolution of technology and changing education",
      icon: <Lightbulb className="h-12 w-12 stroke-[1.45] text-[#2f91ff]" />,
      glowClass: "bg-[#2f91ff]/18",
    },
  ],
};
