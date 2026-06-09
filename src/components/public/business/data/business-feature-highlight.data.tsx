import { BusinessDifferentiatorIcon } from "@/components/public/business/business-differentiator-icon";
import type { FeatureHighlightSectionProps } from "@/types/feature-highlight.types";

export const businessFeatureHighlightData: FeatureHighlightSectionProps = {
  title: "What Makes Skillophy Different?",
  description:
    "Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.",
  items: [
    {
      id: "learner-management",
      title: "Simple yet powerful learner management",
      icon: (
        <BusinessDifferentiatorIcon type="hexagon" color="#ffac21" className="h-12 w-12" />
      ),
      glowClass: "bg-[#ff8a1f]/18",
    },
    {
      id: "learner-success",
      title: "Top-tier services to ensure learner success",
      icon: <BusinessDifferentiatorIcon type="chart" color="#24bf72" className="h-12 w-12" />,
      glowClass: "bg-[#24bf72]/18",
    },
    {
      id: "program-design",
      title: "Tailored program design on organization's needs",
      icon: (
        <BusinessDifferentiatorIcon type="building" color="#ff4747" className="h-12 w-12" />
      ),
      glowClass: "bg-[#ff485a]/18",
    },
    {
      id: "real-world-skills",
      title: "Acquire the skills to outpace real-world competition.",
      icon: <BusinessDifferentiatorIcon type="pen" color="#3c91ff" className="h-12 w-12" />,
      glowClass: "bg-[#2f91ff]/18",
    },
  ],
};
