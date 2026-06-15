import type { MyCoursesTab, MyCoursesTabData, UpcomingCourse } from "@/types/student-course.types";
import type { PublicCourse } from "@/components/public/public-course-card";

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

const liveBatchImage =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop";

function createRecordedCourse(id: string): MyCoursesTabData["recorded"][number] {
  return {
    id,
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design",
    image: uxCourseImage,
    type: "recorded",
    completedLessons: 13,
    totalLessons: 43,
    progressPercent: 10,
    continueHref: "/courses/foundations-user-experience-ux-design",
  };
}

const ongoingRecordedCourses = Array.from({ length: 6 }, (_, index) =>
  createRecordedCourse(`ongoing-recorded-${index + 1}`)
);

const ongoingLiveCourses: MyCoursesTabData["live"] = [
  {
    id: "ongoing-live-1",
    title: "HSC 25 Online Batch",
    slug: "hsc-25-online-batch",
    image: liveBatchImage,
    type: "live",
    description: "Online courses on physics, chemistry, mathematics",
    continueHref: "/student/live",
  },
];

const completedRecordedCourses: MyCoursesTabData["recorded"] = [
  {
    id: "completed-mern",
    title: "Fundamental of Web Development for MERN",
    slug: "fundamental-web-development-mern",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop",
    type: "recorded",
    completedOn: "May 11, 2022",
    certificateHref: "/student/certificates",
  },
  {
    id: "completed-graphic-design",
    title: "Professional Graphic Design",
    slug: "professional-graphic-design",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
    type: "recorded",
    completedOn: "May 11, 2022",
    certificateHref: "/student/certificates",
  },
  {
    id: "completed-facebook-marketing",
    title: "Facebook Marketing",
    slug: "facebook-marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
    type: "recorded",
    completedOn: "May 11, 2022",
    certificateHref: "/student/certificates",
  },
];

const wishlistCourses: PublicCourse[] = [
  {
    id: "wishlist-web-design-php",
    title: "Web Design & Development with PHP & Laravel",
    slug: "web-design-development-php-laravel",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop",
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
    id: "wishlist-communication-hacks",
    title: "Communication Hacks",
    slug: "communication-hacks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
    instructor: {
      name: "Razib Ahamed",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Razib",
    },
    lessons: 24,
    rating: 4.7,
  },
  {
    id: "wishlist-personal-health",
    title: "Personal Health",
    slug: "personal-health",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop",
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
    id: "wishlist-leadership",
    title: "Leadership Excellence",
    slug: "leadership-excellence",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Leader",
    },
    lessons: 24,
    rating: 4.7,
    price: 1600,
    originalPrice: 1800,
  },
  {
    id: "wishlist-english-everyday",
    title: "English for Every day",
    slug: "english-for-every-day",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=English",
    },
    lessons: 24,
    rating: 4.7,
  },
  {
    id: "wishlist-mern",
    title: "Fundamental of Web Development for MERN",
    slug: "fundamental-web-development-mern",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mern",
    },
    lessons: 24,
    rating: 4.7,
    price: 1400,
    originalPrice: 1600,
  },
];

const upcomingCourses: UpcomingCourse[] = [
  {
    id: "upcoming-healthy-life",
    title: "How to Achieve Healthy Life",
    slug: "how-to-achieve-healthy-life",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop",
    category: "Creative",
    startDate: "Sep 24, 2024",
  },
  {
    id: "upcoming-digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
    category: "Creative",
    startDate: "Oct 3, 2024",
  },
  {
    id: "upcoming-wordpress-theme",
    title: "Wordpress Theme Development",
    slug: "wordpress-theme-development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
    category: "Creative",
    startDate: "Sep 24, 2024",
  },
];

const recommendedCourses: PublicCourse[] = [
  {
    id: "recommended-facebook-marketing",
    title: "Facebook Marketing",
    slug: "facebook-marketing",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
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
    id: "recommended-personal-finance",
    title: "Personal Finance",
    slug: "personal-finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop",
    instructor: {
      name: "Hashibur Alam",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hashibur",
    },
    lessons: 24,
    rating: 4.7,
    price: 2000,
    originalPrice: 2200,
  },
  {
    id: "recommended-video-editing",
    title: "Video Editing",
    slug: "video-editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&auto=format&fit=crop",
    instructor: {
      name: "Haidaruzzaman Sujon",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sujon",
    },
    lessons: 24,
    rating: 4.7,
    price: 1800,
    originalPrice: 2000,
  },
];

/** Demo data per tab — set arrays to `[]` to preview empty states. */
export const myCoursesByTab: Record<MyCoursesTab, MyCoursesTabData> = {
  ongoing: {
    recorded: ongoingRecordedCourses,
    live: ongoingLiveCourses,
  },
  completed: {
    recorded: completedRecordedCourses,
    live: [],
  },
  wishlists: {
    recorded: [],
    live: [],
    wishlist: wishlistCourses,
  },
  recommended: {
    recorded: [],
    live: [],
    upcoming: upcomingCourses,
    recommended: recommendedCourses,
  },
};

export const myCoursesTabs: { id: MyCoursesTab; label: string }[] = [
  { id: "ongoing", label: "Ongoing Courses" },
  { id: "completed", label: "Completed" },
  { id: "wishlists", label: "Wishlists" },
  { id: "recommended", label: "Recommended" },
];

export { wishlistCourses, upcomingCourses, recommendedCourses };
