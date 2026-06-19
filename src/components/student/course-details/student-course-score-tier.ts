export type StudentScoreTier = "high" | "average" | "normal";

export interface StudentScoreTierConfig {
  tier: StudentScoreTier;
  avatar: string;
  alt: string;
  message: string;
}

export const STUDENT_SCORE_TIER_CONFIG: Record<
  StudentScoreTier,
  Omit<StudentScoreTierConfig, "tier">
> = {
  high: {
    avatar: "/images/lione.png",
    alt: "Lion mascot",
    message: "Your outstanding score crowns you as a lion, the ruler of the jungle.",
  },
  average: {
    avatar: "/images/fox.png",
    alt: "Fox mascot",
    message: "With an average score, you're like a clever fox. Keep improving.",
  },
  normal: {
    avatar: "/images/panda.png",
    alt: "Panda mascot",
    message: "You are chilling like a panda, boost up your score.",
  },
};

export function getStudentScoreTier(score: number): StudentScoreTier {
  if (score >= 90) return "high";
  if (score >= 75) return "average";
  return "normal";
}

export function getStudentScoreTierConfig(score: number): StudentScoreTierConfig {
  const tier = getStudentScoreTier(score);
  return { tier, ...STUDENT_SCORE_TIER_CONFIG[tier] };
}

export function getStudentScoreMessage(score: number, override?: string) {
  return override ?? getStudentScoreTierConfig(score).message;
}
