import type {
  StudentLiveQuizPlayMeta,
  StudentLiveQuizQuestion,
  StudentLiveQuizResult,
  StudentLiveQuizSession,
  StudentLiveQuizTimeOver,
} from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";

const defaultWarning =
  "Don't open the quiz just to see what happens. Once you start, you have to finish by answering all the questions. If you click start then you will not get a chance to participate later.";

/** Demo quiz questions keyed by quiz id — replace via API later. */
export const studentLiveQuizQuestionsById: Record<string, StudentLiveQuizQuestion[]> = {
  "live-l14": [
    {
      id: "q1",
      number: 1,
      question: "How is the term platform defined in UX design?",
      type: "single",
      points: 1,
      options: [
        "A hardware device used only for mobile apps",
        "The underlying technology or environment where users interact with a product",
        "A social media channel for marketing campaigns",
        "A type of wireframe used in design sprints",
      ],
    },
    {
      id: "q2",
      number: 2,
      question: "Consistency is important in cross-platform UX design because it helps users:",
      type: "single",
      points: 1,
      options: [
        "Responsive web design",
        "Recognize patterns and navigate more easily across devices",
        "Ignore branding guidelines on mobile",
        "Reduce the need for any user testing",
      ],
    },
    {
      id: "q3",
      number: 3,
      question: "Which practices improve mobile UX? Select all that apply.",
      type: "multiple",
      points: 1,
      options: [
        "Reduce visual clutter",
        "Use touch-friendly target sizes",
        "Hide all navigation on small screens",
        "Test layouts on real devices",
      ],
    },
    {
      id: "q4",
      number: 4,
      question: "What does responsive design primarily address?",
      type: "single",
      points: 1,
      options: [
        "Layout and content adaptation across screen sizes",
        "Faster server response times",
        "Offline payment processing",
        "Automated email marketing",
      ],
    },
    {
      id: "q5",
      number: 5,
      question: "Why is cross-functional collaboration important in UX projects?",
      type: "single",
      points: 1,
      options: [
        "It aligns design decisions with business, engineering, and user needs",
        "It eliminates the need for design documentation",
        "It replaces user testing entirely",
        "It limits feedback to a single stakeholder",
      ],
    },
    {
      id: "q6",
      number: 6,
      question: "Which tools are frequently used by UX designers? Select all that apply.",
      type: "multiple",
      points: 1,
      options: ["Figma", "Miro or FigJam", "Spreadsheet-only workflows", "Prototyping tools"],
    },
    {
      id: "q7",
      number: 7,
      question: "What is the purpose of a design system?",
      type: "single",
      points: 1,
      options: [
        "To maintain consistency in components, patterns, and guidelines",
        "To replace all user research activities",
        "To store only marketing copy",
        "To disable accessibility requirements",
      ],
    },
    {
      id: "q8",
      number: 8,
      question: "When designing for mobile, which considerations matter most?",
      type: "single",
      points: 1,
      options: [
        "Touch targets, thumb reach, and performance on smaller screens",
        "Using the exact same layout as desktop without changes",
        "Removing navigation entirely",
        "Maximizing the number of animations",
      ],
    },
    {
      id: "q9",
      number: 9,
      question: "Which activities belong in the UX research phase? Select all that apply.",
      type: "multiple",
      points: 1,
      options: [
        "Conducting interviews with users",
        "Analyzing competitor products",
        "Deploying production code without review",
        "Creating affinity diagrams from findings",
      ],
    },
    {
      id: "q10",
      number: 10,
      question: "What best describes iterative design in UX?",
      type: "single",
      points: 1,
      options: [
        "Repeatedly refining designs based on feedback and testing",
        "Publishing the first draft without revisions",
        "Avoiding stakeholder input until launch",
        "Designing once and never updating the product",
      ],
    },
  ],
  "live-l6": [
    {
      id: "q1",
      number: 1,
      question: "What does UX stand for?",
      type: "single",
      points: 1,
      options: [
        "User Experience",
        "Universal Extension",
        "Unified Export",
        "User Exchange",
      ],
    },
  ],
};

/** Demo in-progress quiz state (timer + saved answers) keyed by course slug → quiz id. */
export const studentLiveQuizPlayDemo: Record<string, Record<string, StudentLiveQuizPlayMeta>> = {
  "hsc-25-online-batch": {
    "live-l14": {
      remainingSeconds: 8 * 60 + 43,
      initialAnswers: {},
    },
    "live-l6": {
      remainingSeconds: 8 * 60,
      initialAnswers: {},
    },
  },
};

/** Demo quiz intro sessions keyed by course slug → quiz id. */
export const studentLiveQuizSessions: Record<string, Record<string, StudentLiveQuizSession>> = {
  "hsc-25-online-batch": {
    "live-l14": {
      quizId: "live-l14",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      submissionDate: "Sunday, May 11, 2024",
      linkedLessonId: "live-l14",
      totalQuestions: 10,
      passMarkPercent: 40,
      totalTimeMinutes: 10,
      warningMessage: defaultWarning,
      previousQuiz: {
        id: "live-assignment-platforms",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignment(
          "hsc-25-online-batch",
          "live-assignment-platforms",
        ),
      },
      nextQuiz: {
        id: "live-l15",
        title: "Research basics",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l15"),
      },
    },
    "live-l6": {
      quizId: "live-l6",
      slug: "hsc-25-online-batch",
      title: "Quiz 1",
      submissionDate: "Sunday, May 11, 2024",
      linkedLessonId: "live-l6",
      totalQuestions: 8,
      passMarkPercent: 40,
      totalTimeMinutes: 8,
      warningMessage: defaultWarning,
      nextQuiz: {
        id: "live-l14",
        title: "Quiz on how UX designers think across platforms",
        href: ROUTES.student.courseQuiz("hsc-25-online-batch", "live-l14"),
      },
    },
  },
};

/** Demo quiz result summaries keyed by course slug → quiz id. */
export const studentLiveQuizResults: Record<string, Record<string, StudentLiveQuizResult>> = {
  "hsc-25-online-batch": {
    "live-l14": {
      quizId: "live-l14",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      resultTitle: "Result of Quiz 3",
      participatedOn: "Sunday, May 11, 2024",
      linkedLessonId: "live-l14",
      passed: true,
      correctAnswers: 7,
      totalQuestions: 10,
      gradePercent: 80,
      timeTakenMinutes: 8,
      allottedTimeMinutes: 10,
      outcomeTitle: "Congratulations!!",
      outcomeMessage: "You have passed on this quiz. Keep Shining",
      previousResult: {
        id: "live-l6",
        title: "Quiz 1",
        href: ROUTES.student.courseQuizResult("hsc-25-online-batch", "live-l6"),
      },
      nextResult: {
        id: "live-l14-failed",
        title: "Quiz 3 Failed",
        href: ROUTES.student.courseQuizResult("hsc-25-online-batch", "live-l14-failed"),
      },
      checkAnswersHref: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14"),
    },
    "live-l6": {
      quizId: "live-l6",
      slug: "hsc-25-online-batch",
      title: "Quiz 1",
      resultTitle: "Result of Quiz 1",
      participatedOn: "Sunday, May 11, 2024",
      linkedLessonId: "live-l6",
      passed: true,
      correctAnswers: 6,
      totalQuestions: 8,
      gradePercent: 75,
      timeTakenMinutes: 6,
      allottedTimeMinutes: 8,
      outcomeTitle: "Congratulations!!",
      outcomeMessage: "You have passed on this quiz. Keep Shining",
      nextResult: {
        id: "live-l14",
        title: "Quiz 3",
        href: ROUTES.student.courseQuizResult("hsc-25-online-batch", "live-l14"),
      },
      checkAnswersHref: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l6"),
    },
    "live-l14-failed": {
      quizId: "live-l14-failed",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      resultTitle: "Result of Quiz 3",
      participatedOn: "Sunday, May 11, 2024",
      linkedLessonId: "live-l14",
      passed: false,
      correctAnswers: 7,
      totalQuestions: 10,
      gradePercent: 80,
      timeTakenMinutes: 8,
      allottedTimeMinutes: 10,
      outcomeTitle: "Oppss.. That was close!",
      outcomeMessage: "You have not passed on this quiz. Keep Trying",
      previousResult: {
        id: "live-l14",
        title: "Quiz 3",
        href: ROUTES.student.courseQuizResult("hsc-25-online-batch", "live-l14"),
      },
      nextResult: {
        id: "live-l15",
        title: "Research basics",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l15"),
      },
      checkAnswersHref: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14-failed"),
    },
  },
};

/** Demo quiz time-over / missed deadline states keyed by course slug → quiz id. */
export const studentLiveQuizTimeOverDemo: Record<
  string,
  Record<string, StudentLiveQuizTimeOver>
> = {
  "hsc-25-online-batch": {
    "live-l14": {
      quizId: "live-l14",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      deadlineDate: "Sunday, May 11, 2024",
      heading: "Time Over",
      message: "Sorry! Your exam time has over. Keep remembering your quiz time",
      linkedLessonId: "live-l14",
      checkAnswersHref: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14"),
      previousNav: {
        id: "live-l6",
        title: "Quiz 1",
        href: ROUTES.student.courseQuizTimeOver("hsc-25-online-batch", "live-l6"),
      },
      nextNav: {
        id: "live-l14-failed",
        title: "Quiz 3",
        href: ROUTES.student.courseQuizTimeOver("hsc-25-online-batch", "live-l14-failed"),
      },
    },
    "live-l6": {
      quizId: "live-l6",
      slug: "hsc-25-online-batch",
      title: "Quiz 1",
      deadlineDate: "Sunday, May 11, 2024",
      heading: "Time Over",
      message: "Sorry! Your exam time has over. Keep remembering your quiz time",
      linkedLessonId: "live-l6",
      checkAnswersHref: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l6"),
      nextNav: {
        id: "live-l14",
        title: "Quiz 3",
        href: ROUTES.student.courseQuizTimeOver("hsc-25-online-batch", "live-l14"),
      },
    },
    "live-l14-failed": {
      quizId: "live-l14-failed",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      deadlineDate: "Sunday, May 11, 2024",
      heading: "Time Over",
      message: "Sorry! Your exam time has over. Keep remembering your quiz time",
      linkedLessonId: "live-l14",
      checkAnswersHref: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14-failed"),
      previousNav: {
        id: "live-l14",
        title: "Quiz 3",
        href: ROUTES.student.courseQuizTimeOver("hsc-25-online-batch", "live-l14"),
      },
    },
  },
};
