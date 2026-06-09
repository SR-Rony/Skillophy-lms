import type { TeamMember } from "@/types/team-member.types";

const leaderImage = "/images/teacher-cta.png";

export const aboutLeadershipData = {
  label: "Our Leadership",
  title: "The People Who Make this Amazing",
  description:
    "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
  members: [
    {
      id: "fazlur-rahman",
      name: "Fazlur Rahman",
      role: "Founder & Board Member",
      image: leaderImage,
    },
    {
      id: "rakib-hasan",
      name: "Rakib Hasan",
      role: "Founder & CEO",
      image: leaderImage,
    },
    {
      id: "nushrat-jahan",
      name: "Nushrat Jahan",
      role: "Chief Financial Officer",
      image: leaderImage,
    },
    {
      id: "shahin-shikder-vp",
      name: "Shahin Shikder",
      role: "VP. People",
      image: leaderImage,
    },
    {
      id: "abdul-hakim",
      name: "Abdul Hakim",
      role: "Chief Operational Officer",
      image: leaderImage,
    },
    {
      id: "jinat-fauzia",
      name: "Jinat Fauzia",
      role: "Chief Executive Officer",
      image: leaderImage,
    },
    {
      id: "mansur-zoha",
      name: "Mansur Zoha",
      role: "Chief Technology Officer",
      image: leaderImage,
    },
    {
      id: "shahin-shikder-exec",
      name: "Shahin Shikder",
      role: "Executive Officer",
      image: leaderImage,
    },
  ] satisfies TeamMember[],
};
