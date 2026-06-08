export type TeacherDifferentiatorIcon = "clock" | "students" | "quill";

export interface TeacherDifferentiator {
  id: string;
  icon: TeacherDifferentiatorIcon;
  color: string;
  title: string;
  description: string;
}

export const teacherDifferentiatorsData = {
  title: "Why Teach Skillophy?",
  description:
    "Our focus extends to ensuring accessibility and inclusivity, while continuously refining courses through data-driven evaluation and professional development.",
  items: [
    {
      id: "flexible-scheduling",
      icon: "clock",
      color: "#ffac21",
      title: "Flexible Scheduling",
      description:
        "E-learning has become increasingly essential in education, especially with the advancement of technology.",
    },
    {
      id: "diverse-student-base",
      icon: "students",
      color: "#ff4747",
      title: "Diverse Student Base",
      description:
        "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
    },
    {
      id: "innovative-teaching-tools",
      icon: "quill",
      color: "#3c91ff",
      title: "Innovative Teaching Tools",
      description:
        "Innovation is crucial in the field of e-learning. With the rapid evolution of technology and changing education",
    },
  ] satisfies TeacherDifferentiator[],
};
