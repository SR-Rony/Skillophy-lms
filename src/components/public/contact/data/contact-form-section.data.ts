export const contactFormSectionData = {
  label: "Contact Us",
  title: "Have Any Question?",
  description:
    "Tell us your needs and we will start on a custom plan to drive results. The intuitive platform made it easy for our employees",
  imageSrc: "/images/contact.png",
  imageAlt: "Student holding a notebook with a thoughtful expression",
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Nushrat Jahan",
    },
    email: {
      label: "Email",
      placeholder: "ex.johndoe@gmail.com",
    },
    description: {
      label: "Description (Optional)",
      placeholder: "Write Something...",
    },
  },
  submitLabel: "Send Message",
} as const;
