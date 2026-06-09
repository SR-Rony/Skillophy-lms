"use client";

import { SpotlightSliderSection } from "@/components/public/spotlight-slider-section";
import { TeamMemberCard } from "@/components/public/team-member-card";
import type { TeamMember } from "@/types/team-member.types";

const mentors: TeamMember[] = [
  {
    id: "rakib-hasan",
    name: "Rakib Hasan",
    role: "Senior Product Designer",
    image: "/images/teacher-cta.png",
  },
  {
    id: "shahin-shikder",
    name: "Shahin Shikder",
    role: "Expert Sales Trainer",
    image: "/images/teacher-cta.png",
  },
  {
    id: "anowar-shohag",
    name: "Anowar Shohag",
    role: "Full Stack Web Developer",
    image: "/images/teacher-cta.png",
  },
  {
    id: "omar-faruk",
    name: "Omar Faruk",
    role: "School Teacher",
    image: "/images/teacher-cta.png",
  },
  {
    id: "nusrat-jahan",
    name: "Nusrat Jahan",
    role: "Academic Mentor",
    image: "/images/teacher-cta.png",
  },
  {
    id: "mizanur-rahman",
    name: "Mizanur Rahman",
    role: "Career Coach",
    image: "/images/teacher-cta.png",
  },
  {
    id: "maisha-ferdous",
    name: "Maisha Ferdous",
    role: "Business Mentor",
    image: "/images/teacher-cta.png",
  },
  {
    id: "tanvir-alam",
    name: "Tanvir Alam",
    role: "Software Instructor",
    image: "/images/teacher-cta.png",
  },
];

export function TopMentorsSection() {
  return (
    <SpotlightSliderSection
      label="Top Mentors"
      title="Learn with Experienced Mentors"
      description="Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity."
      items={mentors}
      getItemKey={(mentor) => mentor.id}
      renderItem={(mentor) => <TeamMemberCard member={mentor} />}
      ariaLabelPrefix="top mentors"
      itemsPerPage={{ lg: 4, sm: 2, default: 1 }}
      slideDotCount={3}
    />
  );
}
