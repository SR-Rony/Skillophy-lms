export interface TeacherHowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const teacherHowItWorksData = {
  title: "How it Works",
  description:
    "Tell us your needs and we will start on a custom plan to drive results. The intuitive platform made it easy for our employees to embrace.",
  imageSrc: "/images/Image.png",
  imageAlt: "Teacher working with headphones while writing in a notebook",
  steps: [
    {
      id: "sign-up",
      step: 1,
      title: "Sign Up & Create Profile",
      description:
        "Teachers begin by signing up for an account on the platform, providing basic information such.",
    },
    {
      id: "availability",
      step: 2,
      title: "Set Availability & Classes",
      description: "Teachers then set their availability for classes, specifying preferred times.",
    },
    {
      id: "engage-students",
      step: 3,
      title: "Engage with Students & Manage Schedule",
      description:
        "Once classes are set up, teachers engage with enrolled students through messaging tools.",
    },
    {
      id: "payments-support",
      step: 4,
      title: "Handle Payments & Access Support",
      description:
        "Payment processes between teachers and students are handled securely by the platform.",
    },
  ] satisfies TeacherHowItWorksStep[],
};
