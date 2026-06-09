import { MousePointer2, SkipForward, Sparkle } from "lucide-react";
import type { FeatureHighlightSectionProps } from "@/types/feature-highlight.types";

export const aboutCoreValuesData: FeatureHighlightSectionProps = {
  title: "Our Core Values Guide How We Work",
  description:
    "Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.",
  items: [
    {
      id: "simplicity",
      title: "Simplicity",
      description:
        "E-learning has become increasingly essential in education, especially with the advancement of technology.",
      icon: <MousePointer2 className="h-12 w-12 stroke-[1.45] text-[#24bf72]" />,
      glowClass: "bg-[#24bf72]/18",
    },
    {
      id: "speed",
      title: "Speed",
      description:
        "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
      icon: <SkipForward className="h-12 w-12 stroke-[1.45] text-[#ff485a]" />,
      glowClass: "bg-[#ff485a]/18",
    },
    {
      id: "soundness",
      title: "Soundness",
      description:
        "Innovation is crucial in the field of e-learning. With the rapid evolution of technology and changing education",
      icon: <Sparkle className="h-12 w-12 stroke-[1.45] text-[#2f91ff]" />,
      glowClass: "bg-[#2f91ff]/18",
    },
  ],
};
