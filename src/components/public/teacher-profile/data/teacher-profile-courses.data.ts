import type { PublicCourse } from "@/components/public/public-course-card";

export const teacherProfileCoursesData = {
  title: "All Courses",
  description:
    "Online courses using cutting-edge technology and instructional strategies. We prioritise accessibility and inclusivity.",
  courses: [
    {
      id: "facebook-marketing",
      title: "Facebook Marketing",
      slug: "facebook-marketing",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Maisha Afrose",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
      },
      lessons: 24,
      rating: 4.7,
      price: 2400,
      originalPrice: 2600,
    },
    {
      id: "personal-finance",
      title: "Personal Finance",
      slug: "personal-finance",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Maisha Afrose",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
      },
      lessons: 24,
      rating: 4.7,
      price: 2000,
      originalPrice: 2300,
    },
    {
      id: "video-editing",
      title: "Video Editing",
      slug: "video-editing",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Maisha Afrose",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
      },
      lessons: 24,
      rating: 4.7,
      price: 1400,
      originalPrice: 1600,
    },
    {
      id: "microsoft-excel",
      title: "Microsoft Excel",
      slug: "microsoft-excel",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Maisha Afrose",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
      },
      lessons: 24,
      rating: 4.7,
      price: 2000,
      originalPrice: 2100,
    },
    {
      id: "web-design",
      title: "Web Design",
      slug: "web-design",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Maisha Afrose",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
      },
      lessons: 24,
      rating: 4.7,
      price: 1400,
      originalPrice: 1700,
    },
    {
      id: "personal-health",
      title: "Personal Health",
      slug: "personal-health",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop&q=80",
      instructor: {
        name: "Maisha Afrose",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha",
      },
      lessons: 24,
      rating: 4.7,
      price: 1800,
      originalPrice: 2000,
    },
  ] satisfies PublicCourse[],
};
