import type { TeacherProfile } from "@/types/teacher-profile.types";

export const teacherProfiles: TeacherProfile[] = [
  {
    id: "maisha-afrose",
    slug: "maisha-afrose",
    name: "Maisha Afrose",
    credentials: [
      { id: "msc-oxford", text: "MSc (English), University of Oxford (UK);" },
      { id: "ba-ma-dhaka", text: "BA, MA (English), University of Dhaka;" },
      { id: "ielts", text: "IELTS Score: 8.5" },
    ],
    imageSrc: "/images/teacher-public.png",
    imageAlt: "Maisha Afrose smiling in a coral sweater",
    imageWidth: 381,
    imageHeight: 513,
    socialActions: [
      {
        id: "linkedin",
        label: "Send Connection",
        href: "https://linkedin.com",
        variant: "primary",
        platform: "linkedin",
      },
      {
        id: "facebook",
        label: "Follow Teacher",
        href: "https://facebook.com",
        variant: "secondary",
        platform: "facebook",
      },
    ],
    about: {
      title: "About Maisha Afrose",
      paragraphs: [
        "Maisha Afrose, a beacon of linguistic excellence and educational prowess, serves as an esteemed English teacher at Skillophy. With a rich academic background and a passion for nurturing minds, Maisha epitomizes dedication and proficiency in her field.",
        "Her academic journey began with a Bachelor of Arts and subsequently a Master of Arts in English from the prestigious University of Dhaka, where she honed her language skills and developed a deep understanding of literature and linguistics. Fuelled by her thirst for knowledge and a drive for academic excellence, Maisha pursued further studies at the University of Oxford in the United Kingdom, where she attained a Master of Science degree in English.",
      ],
      seeMoreLabel: "See More",
      seeMoreHref: "#",
      imageSrc: "/images/techer.png",
      imageAlt: "Maisha Afrose teaching at a chalkboard",
    },
  },
];

export function getTeacherProfileBySlug(slug: string) {
  return teacherProfiles.find((profile) => profile.slug === slug);
}
