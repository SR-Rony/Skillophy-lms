import type { EmployeeSpotlight } from "@/types/spotlight-slider.types";

export const careerEmployeeOfTheYearData = {
  title: "Employee of the Year",
  description:
    "With a mix of experience and stories, become suitable for life's work for the new generation, have a mentality like the new generation.",
  employees: [
    {
      id: "maisha-afrose",
      quote:
        "I'm fortunate to be a teacher at Skillophy. The environment and policies here are truly remarkable",
      name: "Maisha Afrose",
      role: "English Teacher",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&crop=faces",
      imageAlt: "Maisha Afrose, English Teacher at Skillophy",
      theme: "chalkboard",
      readMoreHref: "#",
    },
    {
      id: "abdullah-mamun",
      quote: "Skillophy is a gem! Grateful to be a part of such a wonderful community",
      name: "Abdullah Mamun",
      role: "Moderator",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&crop=faces",
      imageAlt: "Abdullah Mamun, Moderator at Skillophy",
      theme: "ocean",
      readMoreHref: "#",
    },
    {
      id: "nadia-islam",
      quote:
        "Working at Skillophy has helped me grow professionally while staying connected to meaningful education",
      name: "Nadia Islam",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&crop=faces",
      imageAlt: "Nadia Islam, Product Designer at Skillophy",
      theme: "ocean",
      readMoreHref: "#",
    },
    {
      id: "rahim-karim",
      quote:
        "The culture here encourages creativity, collaboration, and continuous learning every single day",
      name: "Rahim Karim",
      role: "Content Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=700&auto=format&fit=crop&crop=faces",
      imageAlt: "Rahim Karim, Content Lead at Skillophy",
      theme: "chalkboard",
      readMoreHref: "#",
    },
  ] satisfies EmployeeSpotlight[],
};
