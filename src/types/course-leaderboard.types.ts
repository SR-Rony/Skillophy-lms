export type LeaderboardPodiumPlace = 1 | 2 | 3;

export interface CourseLeaderboardTopEntry {
  id: string;
  name: string;
  avatar: string;
  score: number;
  scoreLabel?: string;
  place: LeaderboardPodiumPlace;
}

export interface CourseLeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  score: number;
  scoreLabel?: string;
  isCurrentUser?: boolean;
}

export interface CourseLeaderboardData {
  topThree: CourseLeaderboardTopEntry[];
  others: CourseLeaderboardEntry[];
}
