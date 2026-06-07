export type BusinessDifferentiatorIcon = "hexagon" | "chart" | "building" | "pen";

export interface BusinessDifferentiator {
  id: string;
  icon: BusinessDifferentiatorIcon;
  color: string;
  title: string;
}

export const businessDifferentiatorsData = {
  title: "What Makes Skillophy Different?",
  description:
    "Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.",
  items: [
    {
      id: "learner-management",
      icon: "hexagon",
      color: "#ffac21",
      title: "Simple yet powerful learner management",
    },
    {
      id: "learner-success",
      icon: "chart",
      color: "#24bf72",
      title: "Top-tier services to ensure learner success",
    },
    {
      id: "program-design",
      icon: "building",
      color: "#ff4747",
      title: "Tailored program design on organization's needs",
    },
    {
      id: "real-world-skills",
      icon: "pen",
      color: "#3c91ff",
      title: "Acquire the skills to outpace real-world competition.",
    },
  ] satisfies BusinessDifferentiator[],
};
