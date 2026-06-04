export interface MegaMenuCourse {
  id: string;
  title: string;
  image: string;
  categoryId: string;
}

export interface MegaMenuCategory {
  id: string;
  label: string;
  courseCount: number;
  iconName: "play" | "briefcase" | "wrench" | "zap" | "star" | "book-open";
}

export const megaMenuCategories: MegaMenuCategory[] = [
  { id: "free", label: "Free Courses", courseCount: 6, iconName: "play" },
  { id: "job", label: "Job Courses", courseCount: 6, iconName: "briefcase" },
  { id: "vocational", label: "Vocational Courses", courseCount: 6, iconName: "wrench" },
  { id: "skill", label: "Skill Development & IT", courseCount: 6, iconName: "zap" },
  { id: "popular", label: "Popular", courseCount: 6, iconName: "star" },
  { id: "academic", label: "Academic", courseCount: 6, iconName: "book-open" },
];

export const megaMenuCoursesByCategory: Record<string, MegaMenuCourse[]> = {
  free: [
    { id: "1", title: "Web Design & Development with PHP", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "free" },
    { id: "2", title: "Facebook Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop", categoryId: "free" },
    { id: "3", title: "Fundamental of Web Development", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "free" },
    { id: "4", title: "Web Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop", categoryId: "free" },
    { id: "5", title: "Communication Hacks", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "free" },
    { id: "6", title: "Personal Health", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop", categoryId: "free" },
  ],
  job: [
    { id: "7", title: "Professional Job Skills", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "job" },
    { id: "8", title: "Career Development", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "job" },
    { id: "9", title: "Interview Preparation", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "job" },
    { id: "10", title: "Workplace Excellence", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "job" },
    { id: "11", title: "Team Management", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "job" },
    { id: "12", title: "Business Strategy", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "job" },
  ],
  vocational: [
    { id: "13", title: "Plumbing Basics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "vocational" },
    { id: "14", title: "Electrical Work", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "vocational" },
    { id: "15", title: "Carpentry Skills", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "vocational" },
    { id: "16", title: "Welding Techniques", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "vocational" },
    { id: "17", title: "HVAC Systems", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "vocational" },
    { id: "18", title: "Auto Repair", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "vocational" },
  ],
  skill: [
    { id: "19", title: "Web Design & Development with PHP", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "20", title: "Negotiation Skills", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "21", title: "Facebook Marketing", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "22", title: "Mastering Docker for Software Developers", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "23", title: "Fundamental of Web Development for", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "24", title: "Microsoft Excel", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "37", title: "Web Design", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "38", title: "Adobe Illustrator", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "39", title: "Communication Hacks", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "skill" },
    { id: "40", title: "Personal Health", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop", categoryId: "skill" },
  ],
  popular: [
    { id: "25", title: "Microsoft Excel", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "popular" },
    { id: "26", title: "Adobe Illustrator", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "popular" },
    { id: "27", title: "Negotiation Skills", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "popular" },
    { id: "28", title: "Data Analysis Pro", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "popular" },
    { id: "29", title: "Digital Marketing", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "popular" },
    { id: "30", title: "Leadership Training", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "popular" },
  ],
  academic: [
    { id: "31", title: "Mathematics Essentials", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "academic" },
    { id: "32", title: "Physics Fundamentals", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "academic" },
    { id: "33", title: "Chemistry Basics", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "academic" },
    { id: "34", title: "History & Culture", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop", categoryId: "academic" },
    { id: "35", title: "English Literature", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", categoryId: "academic" },
    { id: "36", title: "Science & Discovery", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop", categoryId: "academic" },
  ],
};
