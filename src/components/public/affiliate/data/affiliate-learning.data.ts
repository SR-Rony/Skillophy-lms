import type { PublicCourse } from "@/components/public/public-course-card";

export const affiliateLearningData = {
  label: "Courses For Affiliate",
  title: "Affiliate Learning",
  seeAllLabel: "See All Courses",
  courses: [
    {
      id: "affiliate-marketing-fundamentals",
      title: "Affiliate Marketing Fundamentals",
      slug: "affiliate-marketing-fundamentals",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Abdullah Mamun",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
      },
      lessons: 24,
      rating: 4.7,
      price: 2400,
      originalPrice: 2600,
    },
    {
      id: "mastering-affiliate-networks",
      title: "Mastering Affiliate Networks",
      slug: "mastering-affiliate-networks",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Ejazur Rahman",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ejazur",
      },
      lessons: 24,
      rating: 4.7,
      price: 1800,
      originalPrice: 2000,
    },
    {
      id: "content-creation-affiliate-success",
      title: "Content Creation for Affiliate Success",
      slug: "content-creation-affiliate-success",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Razib Ahamed",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Razib",
      },
      lessons: 24,
      rating: 4.7,
      price: 1400,
      originalPrice: 1600,
    },
  ] satisfies PublicCourse[],
};
