import type { PublicCourse } from "@/components/public/public-course-card";
import type { CourseDetailsPageData } from "@/components/public/course-details/types";

/** Default similar courses — backend can return per slug */
export const defaultSimilarCourses: PublicCourse[] = [
  {
    id: "similar-web-design-php",
    title: "Web Design & Development with PHP & Laravel",
    slug: "web-design-development-php-laravel",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop",
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
    id: "similar-ux-design",
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mamun",
    },
    lessons: 24,
    rating: 4.7,
    price: 1800,
    originalPrice: 2000,
  },
  {
    id: "similar-mern",
    title: "Fundamental of Web Development for MERN",
    slug: "fundamental-web-development-mern",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Teacher",
    },
    lessons: 24,
    rating: 4.7,
    price: 1400,
    originalPrice: 1600,
  },
  {
    id: "similar-frontend",
    title: "Modern Frontend Design with React",
    slug: "modern-frontend-design-react",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Frontend",
    },
    lessons: 24,
    rating: 4.8,
    price: 2100,
    originalPrice: 2500,
  },
];

export const COURSE_DETAILS_DEFAULT_VIDEO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=793&h=500&auto=format&fit=crop&q=80";

/**
 * Default page content — edit here until backend is connected.
 * API should return the same `CourseDetailsPageData` shape per slug.
 */
export const defaultCourseDetailsPageData: CourseDetailsPageData = {
  slug: "foundations-user-experience-ux-design",
  hero: {
    levelLabel: "BEGINNER LEVEL",
    title: "Foundations of User Experience (UX) Design",
    description:
      "Foundations of User Experience (UX) Design is the first of a series of seven courses that will equip you with the skills needed to apply to entry-level jobs in user experience design. UX designers focus on the interactions that people have with products and services.",
    rating: 4.7,
    ratingCount: 4689,
    previewImage: COURSE_DETAILS_DEFAULT_VIDEO_IMAGE,
  },
  tabs: [
    { id: "course-overview", label: "Course Overview" },
    { id: "what-youll-learn", label: "What You'll Learn" },
    { id: "skills", label: "Skills You Will Gain" },
    { id: "teacher", label: "Teacher" },
    { id: "curriculum", label: "Course Curriculum" },
    { id: "requirements", label: "Requirements" },
    { id: "reviews", label: "Reviews" },
    { id: "faq", label: "FAQ" },
  ],
  overview: {
    text: `This course is designed for beginners who want to build a strong foundation in user experience design. You will learn how to research users, create wireframes, and deliver polished interfaces that solve real problems.

Through hands-on projects and guided feedback, you will practice the same workflows used by product teams at leading companies. By the end of the program, you will have portfolio-ready case studies and the confidence to apply for entry-level UX roles.`,
  },
  learnItems: [
    "Understand core UX principles and design thinking frameworks",
    "Conduct user interviews and synthesize research insights",
    "Create low-fidelity and high-fidelity prototypes in Figma",
    "Run usability tests and iterate based on real feedback",
    "Build responsive UI patterns with accessible color and type systems",
    "Present design decisions clearly to stakeholders and developers",
  ],
  skills: [
    "Graphic Design",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "Design Systems",
  ],
  jobStats: [
    { label: "Job Opening", value: "11333" },
    { label: "Hiring Rate", value: "1265" },
    { label: "Avg. Salary", value: "৳45K" },
    { label: "Growth", value: "+18%" },
  ],
  jobChartPoints: [32, 38, 35, 48, 52, 58, 64, 72],
  jobChartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  teacher: {
    name: "Walid Bin Sayed",
    role: "Senior Designer, Google Inc.",
    bio: "Walid has spent 10+ years designing digital products for global brands. He focuses on practical UX education and mentoring designers who want to grow fast in product teams.",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Walid",
  },
  curriculum: [
    {
      id: "m1",
      title: "1. Introduction to Graphic Design",
      duration: "2h 15m",
      lessons: [
        { title: "Welcome to the course", preview: true },
        { title: "What is UX design?", preview: true },
        { title: "Tools you will use", preview: false },
      ],
      defaultOpen: true,
    },
    {
      id: "m2",
      title: "2. Thinking Like a Designer",
      duration: "1h 40m",
      lessons: [
        { title: "Design mindset", preview: false },
        { title: "Problem framing", preview: false },
      ],
    },
    {
      id: "m3",
      title: "3. Design Principles",
      duration: "2h 05m",
      lessons: [
        { title: "Visual hierarchy", preview: false },
        { title: "Layout fundamentals", preview: false },
      ],
    },
    {
      id: "m4",
      title: "4. Portfolio Project",
      duration: "3h 20m",
      lessons: [
        { title: "Case study structure", preview: false },
        { title: "Final presentation", preview: false },
      ],
    },
  ],
  bookPromo: {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=280&auto=format&fit=crop",
  },
  requirements: [
    { icon: "globe", title: "Basic Internet Connection" },
    { icon: "laptop", title: "Laptop, Desktop, Mobile Device" },
    { icon: "message", title: "Basic English Understanding" },
  ],
  businessPromo: {
    title: "Some top companies buy this course for their employees",
    ctaLabel: "Get For Business",
    ctaHref: "/pricing",
    logos: ["Box", "Eventbrite", "Pinterest", "Instacart", "Samsung"],
  },
  benefits: [
    { icon: "lifetime", title: "Life Time Access" },
    { icon: "certificate", title: "Certificate of completion" },
    { icon: "files", title: "Exercise Files" },
    { icon: "support", title: "Instructor Support" },
    { icon: "mobile", title: "Mobile & TV Access" },
    { icon: "community", title: "Community Access" },
  ],
  certificate: {
    description:
      "Earn a professional certificate when you complete this course. Showcase your skills to employers and clients with a verified credential.",
    benefits: [
      "Shareable certificate for LinkedIn and resume",
      "Recognized by hiring partners in our network",
      "Proof of completed projects and assessments",
    ],
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop",
  },
  testimonials: [
    {
      id: "t1",
      quote:
        "This course helped me switch careers. The lessons are practical and the projects feel like real client work.",
      name: "Nusrat Jahan",
      role: "UX Designer, Dhaka",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nusrat",
      rating: 5,
    },
    {
      id: "t2",
      quote:
        "Clear explanations, great pacing, and useful feedback from the instructor. I finished with a strong portfolio piece.",
      name: "Rahim Uddin",
      role: "Product Designer, Chittagong",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rahim",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "Do I need prior design experience?",
      answer:
        "No prior experience is required. We start from fundamentals and gradually move to advanced topics with guided projects.",
      defaultOpen: true,
    },
    {
      id: "f2",
      question: "How long do I have access to the course?",
      answer: "You receive lifetime access, including future updates to the curriculum.",
    },
    {
      id: "f3",
      question: "Is there a certificate after completion?",
      answer:
        "Yes. You will receive a certificate once you complete all modules and assignments.",
    },
    {
      id: "f4",
      question: "Can I get a refund if I am not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee from the date of purchase.",
    },
  ],
  sidebar: {
    price: 2500,
    originalPrice: 3200,
    includes: [
      { icon: "lessons", label: "24 Lessons" },
      { icon: "video", label: "18 Video Lessons" },
      { icon: "duration", label: "32h Duration" },
      { icon: "files", label: "Exercise Files" },
    ],
  },
  similarCourses: defaultSimilarCourses,
  similarCoursesVariant: "paid",
};

/** Per-slug overrides — add API entries here or remove when backend returns full payload */
export const courseDetailsBySlug: Partial<
  Record<string, Partial<CourseDetailsPageData>>
> = {
  "ui-ux-design-fundamentals": {
    slug: "ui-ux-design-fundamentals",
  },
  "full-stack-web-development": {
    slug: "full-stack-web-development",
    hero: {
      levelLabel: "INTERMEDIATE LEVEL",
      title: "Full-Stack Web Development",
      description:
        "Master React, Node.js, and modern deployment pipelines with hands-on projects.",
      rating: 4.8,
      ratingCount: 3240,
      previewImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=793&h=500&auto=format&fit=crop&q=80",
    },
  },
};
