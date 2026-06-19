import type { CourseLeaderboardData } from "@/types/course-leaderboard.types";

const avatar = (seed: string) =>
  `https://api.dicebear.com/9.x/avataaars/png?seed=${encodeURIComponent(seed)}`;

export const liveCourseLeaderboardMock: CourseLeaderboardData = {
  topThree: [
    {
      id: "leader-1",
      place: 1,
      name: "Dianne Russell",
      avatar: avatar("DianneRussell"),
      score: 98.8,
    },
    {
      id: "leader-2",
      place: 2,
      name: "Jenny Wilson",
      avatar: avatar("JennyWilson"),
      score: 95.8,
    },
    {
      id: "leader-3",
      place: 3,
      name: "Ronald Richards",
      avatar: avatar("RonaldRichards"),
      score: 90.8,
    },
  ],
  others: [
    { id: "leader-4", rank: 4, name: "Kathryn Murphy", avatar: avatar("KathrynMurphy"), score: 89.1 },
    { id: "leader-5", rank: 5, name: "Jerome Bell", avatar: avatar("JeromeBell"), score: 88.4 },
    { id: "leader-6", rank: 6, name: "Marvin McKinney", avatar: avatar("MarvinMcKinney"), score: 87.6 },
    { id: "leader-7", rank: 7, name: "Cameron Williamson", avatar: avatar("CameronWilliamson"), score: 86.9 },
    { id: "leader-8", rank: 8, name: "Theresa Webb", avatar: avatar("TheresaWebb"), score: 85.2 },
    { id: "leader-9", rank: 9, name: "Brooklyn Simmons", avatar: avatar("BrooklynSimmons"), score: 84.7 },
    { id: "leader-10", rank: 10, name: "Leslie Alexander", avatar: avatar("LeslieAlexander"), score: 83.5 },
    { id: "leader-11", rank: 11, name: "Floyd Miles", avatar: avatar("FloydMiles"), score: 82.1 },
    {
      id: "leader-12",
      rank: 12,
      name: "Nushrat Jahan",
      avatar: avatar("NushratJahan"),
      score: 82.8,
      isCurrentUser: true,
    },
    { id: "leader-13", rank: 13, name: "Devon Lane", avatar: avatar("DevonLane"), score: 81.4 },
    { id: "leader-14", rank: 14, name: "Eleanor Pena", avatar: avatar("EleanorPena"), score: 80.2 },
    { id: "leader-15", rank: 15, name: "Annette Black", avatar: avatar("AnnetteBlack"), score: 79.5 },
    { id: "leader-16", rank: 16, name: "Darrell Steward", avatar: avatar("DarrellSteward"), score: 78.8 },
    { id: "leader-17", rank: 17, name: "Courtney Henry", avatar: avatar("CourtneyHenry"), score: 77.6 },
    { id: "leader-18", rank: 18, name: "Jacob Jones", avatar: avatar("JacobJones"), score: 85.1 },
    { id: "leader-19", rank: 19, name: "Kristin Watson", avatar: avatar("KristinWatson"), score: 73.6 },
    { id: "leader-20", rank: 20, name: "Guy Hawkins", avatar: avatar("GuyHawkins"), score: 72.4 },
    { id: "leader-21", rank: 21, name: "Albert Flores", avatar: avatar("AlbertFlores"), score: 71.2 },
    { id: "leader-22", rank: 22, name: "Savannah Nguyen", avatar: avatar("SavannahNguyen"), score: 70.5 },
    { id: "leader-23", rank: 23, name: "Wade Warren", avatar: avatar("WadeWarren"), score: 68.9 },
    { id: "leader-24", rank: 24, name: "Arlene McCoy", avatar: avatar("ArleneMcCoy"), score: 56.8 },
  ],
};
