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
  jobOpeningRate: {
    title: "Job Opening Rate",
    description: "Job opening rate for UX Design career is increasing day by day",
    stats: [
      { label: "Job opening", value: "13000", color: "green" },
      { label: "Remote jobs", value: "5400", color: "orange" },
      { label: "Hiring in BD", value: "21", color: "blue" },
    ],
    chartPoints: [4, 14, 12, 26, 22, 38, 34, 52, 48, 62, 58, 70, 74],
    chartYears: ["2000", "2006", "2012", "2018", "2024"],
  },
  teacher: {
    name: "Walid Bin Sayed",
    role: "Product Designer at Design Monks",
    bio: "Cultivating a mindset of innovation and empathy, we delve into the heart of product design, where creativity intertwines seamlessly with functionality. Through a meticulous process of sketching, prototyping, and testing, we craft not mere objects, but immersive experiences that resonate with users on a profound level.",
    image: "/images/teacher-cta.png",
  },
  curriculum: [
    {
      id: "m1",
      title: "1. Introducing user experience design",
      duration: "1hr 35mins",
      lessons: [
        { title: "What is user experience (UX) design?", type: "video", preview: true },
        { title: "Getting to know your user", type: "video", preview: true },
        { title: "Introduction to design sprints", type: "reading", preview: true },
        { title: "UX design careers and interviews", type: "reading", preview: false },
        { title: "Module 1 quiz", type: "quiz", preview: false },
        { title: "Course resources and community", type: "reading", preview: false },
        { title: "Wrap-up and next steps", type: "video", preview: false },
      ],
      defaultOpen: true,
    },
    {
      id: "m2",
      title: "2. Thinking Like a Designer",
      duration: "1hr 40mins",
      lessons: [
        { title: "Design mindset", type: "video", preview: false },
        { title: "Problem framing", type: "reading", preview: false },
        { title: "Module 2 quiz", type: "quiz", preview: false },
      ],
    },
    {
      id: "m3",
      title: "3. Design Principles",
      duration: "2hr 05mins",
      lessons: [
        { title: "Visual hierarchy", type: "video", preview: false },
        { title: "Layout fundamentals", type: "reading", preview: false },
        { title: "Module 3 quiz", type: "quiz", preview: false },
      ],
    },
    {
      id: "m4",
      title: "4. Portfolio Project",
      duration: "3hr 20mins",
      lessons: [
        { title: "Case study structure", type: "reading", preview: false },
        { title: "Final presentation", type: "video", preview: false },
        { title: "Module 4 quiz", type: "quiz", preview: false },
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
    { icon: "internet", title: "Good Internet Connection" },
    { icon: "device", title: "Laptop, Desktop, Mobile device" },
    { icon: "mindset", title: "Resolute Mental Perseverance" },
  ],
  businessPromo: {
    title: "Some top companies buy this course for their employees",
    description:
      "This course was selected for our collection of top-rated courses trusted by businesses worldwide.",
    ctaLabel: "Try Skillophy Business",
    ctaHref: "/business",
    logos: ["box", "eventbrite", "nasdaq", "netapp", "samsung"],
  },
  benefits: [
    {
      icon: "lifetime",
      title: "Life Time Access",
      description: "You will get life time access typically refers to a purchasing",
    },
    {
      icon: "moneyBack",
      title: "Money Back Guarantee",
      description: "You will get life time access typically refers to a purchasing",
    },
    {
      icon: "downloadable",
      title: "Downloadable Resources",
      description: "You will get life time access typically refers to a purchasing",
    },
    {
      icon: "certificate",
      title: "Shareable Certificate",
      description: "You will get life time access typically refers to a purchasing",
    },
    {
      icon: "devices",
      title: "Access on All Devices",
      description: "You will get life time access typically refers to a purchasing",
    },
    {
      icon: "subtitle",
      title: "English Subtitle",
      description: "You will get life time access typically refers to a purchasing",
    },
  ],
  certificate: {
    descriptionLines: [
      "Our certificate will add a different dimension to",
      "your career in the job market",
    ],
    benefits: [
      "Add this certificate to your CV",
      "Share directly on your LinkedIn profile",
      "Share on facebook with one click",
    ],
    image: "/images/certificate.png",
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
    {
      id: "t3",
      quote:
        "The curriculum is well structured. I could follow along easily and apply what I learned to my freelance projects.",
      name: "Sadia Akter",
      role: "UI Designer, Sylhet",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sadia",
      rating: 5,
    },
    {
      id: "t4",
      quote:
        "Skillophy made complex UX topics simple. The instructor support and community helped me stay motivated throughout.",
      name: "Karim Hassan",
      role: "Junior UX Researcher, Dhaka",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Karim",
      rating: 4,
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
    variant: "course",
    price: 2400,
    originalPrice: 2600,
    appliedPromo: {
      code: "WEBDESIGN453",
    },
    includes: [
      { icon: "learners", value: "2873", label: "Learners" },
      { icon: "video", value: "40+", label: "Video Content" },
      { icon: "duration", value: "40 hours", label: "Duration" },
      { icon: "files", value: "34", label: "Lecture Sheets" },
    ],
    contact: {
      phone: "165387",
      hours: "10 am to 10 pm",
    },
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
  "bcs-50th": {
    slug: "bcs-50th",
    hero: {
      levelLabel: "MODEL TEST",
      title: "BCS (50th)",
      description:
        "Practice with a full-length model test designed to mirror the real BCS exam pattern and timing.",
      rating: 4.7,
      ratingCount: 2873,
      previewImage:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=793&h=500&auto=format&fit=crop&q=80",
    },
    sidebar: {
      variant: "model-test",
      price: 600,
      testTime: { value: "40 hours", label: "Test time" },
      questions: { value: "100", label: "Questions" },
      contact: {
        phone: "165387",
        hours: "10 am to 10 pm",
      },
    },
  },
  "how-to-achieve-healthy-life": {
    slug: "how-to-achieve-healthy-life",
    hero: {
      levelLabel: "FREE WORKSHOP",
      title: "How to Achieve Healthy Life",
      description:
        "Join this live workshop to learn practical habits for a healthier daily routine and balanced lifestyle.",
      rating: 4.9,
      ratingCount: 1200,
      previewImage:
        "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=793&h=500&auto=format&fit=crop&q=80",
    },
    sidebar: {
      variant: "workshop",
      date: { value: "Sep 24", label: "Date" },
      time: { value: "10:30 AM", label: "Time" },
      scheduleLabel: "Sep 24, 2024 at 10:30 AM",
      goToWorkshopHref: "/student/assignments",
      contact: {
        phone: "165387",
        hours: "10 am to 10 pm",
      },
    },
  },
};
