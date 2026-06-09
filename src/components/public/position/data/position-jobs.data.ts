import { careerJobOpenings } from "@/components/public/career/data/career-job-openings.data";
import type { JobOpening } from "@/types/career.types";
import type { PositionJobDetail } from "@/types/position.types";
import { positionJobCategoryLabels } from "@/types/position.types";

const defaultLookingFor = [
  {
    term: "Proven Experience",
    description:
      "Demonstrated experience in a similar role with a strong portfolio or track record of delivering high-quality work.",
  },
  {
    term: "Collaborative Mindset",
    description:
      "Ability to work closely with cross-functional teams and communicate design or project decisions clearly.",
  },
  {
    term: "Growth Orientation",
    description:
      "A willingness to learn, iterate quickly, and contribute to Skillophy's mission of transforming education.",
  },
] as const;

const defaultOfferings = [
  {
    term: "Learning Culture",
    description:
      "Access to Skillophy courses, mentorship, and a yearly professional development budget.",
  },
  {
    term: "Flexible Environment",
    description:
      "Hybrid-friendly policies and supportive workflows that help you do your best work.",
  },
  {
    term: "Meaningful Impact",
    description:
      "Join a team building products that help learners and educators across Bangladesh and beyond.",
  },
] as const;

const detailOverrides: Partial<
  Record<
    string,
    Pick<
      PositionJobDetail,
      "fullDescription" | "lookingFor" | "offerings" | "deadline" | "vacancy"
    >
  >
> = {
  "visual-designer": {
    deadline: "May 11, 2024",
    vacancy: "02",
    fullDescription:
      "We are looking for a Visual Designer who can bring our brand and learning experiences to life across digital products, campaigns, and internal communications. You will collaborate with product, marketing, and content teams to create visuals that are clear, engaging, and accessible.",
    lookingFor: [
      {
        term: "Proven Experience",
        description:
          "Strong portfolio showcasing visual design work for digital products, campaigns, or educational platforms.",
      },
      {
        term: "Design Systems",
        description:
          "Experience working within design systems and maintaining consistency across multiple touchpoints.",
      },
      {
        term: "Creative Collaboration",
        description:
          "Comfort partnering with product designers, marketers, and stakeholders to refine concepts and ship polished work.",
      },
    ],
    offerings: [
      {
        term: "Creative Freedom",
        description:
          "Room to experiment with visual storytelling while staying aligned with Skillophy's brand.",
      },
      {
        term: "Professional Growth",
        description:
          "Learning incentives, mentorship, and exposure to diverse product and marketing challenges.",
      },
      {
        term: "Supportive Team",
        description:
          "A collaborative culture that values feedback, ownership, and continuous improvement.",
      },
    ],
  },
};

function buildPositionJobDetail(job: JobOpening, index: number): PositionJobDetail {
  const overrides = detailOverrides[job.id];
  const day = 8 + (index % 20);

  return {
    ...job,
    categoryLabel: positionJobCategoryLabels[job.categoryId],
    deadline: overrides?.deadline ?? `May ${day}, 2024`,
    vacancy: overrides?.vacancy ?? String((index % 3) + 1).padStart(2, "0"),
    fullDescription:
      overrides?.fullDescription ??
      `${job.description} You will play an important role at Skillophy, contributing to projects that improve how learners discover, engage with, and complete courses.`,
    lookingFor: overrides?.lookingFor ?? [...defaultLookingFor],
    offerings: overrides?.offerings ?? [...defaultOfferings],
  };
}

export const positionJobs: PositionJobDetail[] = careerJobOpenings.map(buildPositionJobDetail);

export function getPositionJobById(jobId: string) {
  return positionJobs.find((job) => job.id === jobId);
}
