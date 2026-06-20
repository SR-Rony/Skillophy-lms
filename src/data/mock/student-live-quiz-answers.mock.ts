import type { StudentLiveQuizAnswerReview } from "@/types/student-live-quiz.types";
import { ROUTES } from "@/constants";

const defaultExplanation =
  "Platforms in UX design refer to the environments and technologies where users interact with products, such as web, mobile, and tablet experiences.";

/** Demo answer review data keyed by course slug → quiz id. */
export const studentLiveQuizAnswerReviews: Record<
  string,
  Record<string, StudentLiveQuizAnswerReview>
> = {
  "hsc-25-online-batch": {
    "live-l14": {
      quizId: "live-l14",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      answersTitle: "Answers of Quiz 3",
      participatedOn: "Sunday, May 11, 2024",
      linkedLessonId: "live-l14",
      previousReview: {
        id: "live-l6",
        title: "Quiz 1",
        href: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l6"),
      },
      nextReview: {
        id: "live-l14-failed",
        title: "Quiz 3 Failed",
        href: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14-failed"),
      },
      questions: [
        {
          id: "q1",
          number: 1,
          question: "How is the term platform defined in UX design?",
          type: "single",
          pointsEarned: 1,
          pointsTotal: 1,
          options: [
            {
              id: "q1-o1",
              text: "The underlying technology or environment where users interact with a product",
              state: "selected-correct",
              feedback: {
                type: "correct",
                title: "Your answer is correct!",
                explanation: defaultExplanation,
              },
            },
            {
              id: "q1-o2",
              text: "A hardware device used only for mobile apps",
              state: "default",
            },
            {
              id: "q1-o3",
              text: "A social media channel for marketing campaigns",
              state: "default",
            },
            {
              id: "q1-o4",
              text: "A type of wireframe used in design sprints",
              state: "default",
            },
          ],
        },
        {
          id: "q2",
          number: 2,
          question:
            "Consistency is important in cross-platform UX design because it helps users:",
          type: "single",
          pointsEarned: 0,
          pointsTotal: 1,
          options: [
            {
              id: "q2-o1",
              text: "Responsive web design",
              state: "selected-incorrect",
            },
            {
              id: "q2-o2",
              text: "Recognize patterns and navigate more easily across devices",
              state: "correct-unselected",
              feedback: {
                type: "incorrect",
                title: "Your answer is incorrect!",
                explanation:
                  "Consistency helps users recognize patterns and navigate more easily across devices. Responsive web design is a technique, not the primary reason consistency matters.",
              },
            },
            {
              id: "q2-o3",
              text: "Ignore branding guidelines on mobile",
              state: "default",
            },
            {
              id: "q2-o4",
              text: "Reduce the need for any user testing",
              state: "default",
            },
          ],
        },
        {
          id: "q3",
          number: 3,
          question: "Which practices improve mobile UX? Select all that apply.",
          type: "multiple",
          pointsEarned: 0.75,
          pointsTotal: 1,
          options: [
            {
              id: "q3-o1",
              text: "Reduce visual clutter",
              state: "selected-correct",
              feedback: {
                type: "correct",
                title: "Your answer is correct!",
                explanation:
                  "Reducing visual clutter improves readability and helps mobile users focus on key actions without distraction.",
              },
            },
            {
              id: "q3-o2",
              text: "Use touch-friendly target sizes",
              state: "correct-unselected",
              feedback: {
                type: "missed",
                title: "You didn't select this answer",
                explanation:
                  "Touch-friendly target sizes are essential for mobile UX because they make buttons and links easier to tap accurately.",
              },
            },
            {
              id: "q3-o3",
              text: "Hide all navigation on small screens",
              state: "default",
            },
            {
              id: "q3-o4",
              text: "Test layouts on real devices",
              state: "default",
            },
          ],
        },
        {
          id: "q4",
          number: 4,
          question: "What does responsive design primarily address?",
          type: "single",
          pointsEarned: 1,
          pointsTotal: 1,
          options: [
            {
              id: "q4-o1",
              text: "Layout and content adaptation across screen sizes",
              state: "selected-correct",
              feedback: {
                type: "correct",
                title: "Your answer is correct!",
                explanation:
                  "Responsive design ensures layouts and content adapt smoothly across different screen sizes and devices.",
              },
            },
            {
              id: "q4-o2",
              text: "Faster server response times",
              state: "default",
            },
            {
              id: "q4-o3",
              text: "Offline payment processing",
              state: "default",
            },
            {
              id: "q4-o4",
              text: "Automated email marketing",
              state: "default",
            },
          ],
        },
        {
          id: "q5",
          number: 5,
          question: "Why is cross-functional collaboration important in UX projects?",
          type: "single",
          pointsEarned: 1,
          pointsTotal: 1,
          options: [
            {
              id: "q5-o1",
              text: "It aligns design decisions with business, engineering, and user needs",
              state: "selected-correct",
              feedback: {
                type: "correct",
                title: "Your answer is correct!",
                explanation:
                  "Cross-functional collaboration ensures design decisions reflect user needs while remaining feasible for engineering and aligned with business goals.",
              },
            },
            {
              id: "q5-o2",
              text: "It eliminates the need for design documentation",
              state: "default",
            },
            {
              id: "q5-o3",
              text: "It replaces user testing entirely",
              state: "default",
            },
            {
              id: "q5-o4",
              text: "It limits feedback to a single stakeholder",
              state: "default",
            },
          ],
        },
      ],
    },
    "live-l6": {
      quizId: "live-l6",
      slug: "hsc-25-online-batch",
      title: "Quiz 1",
      answersTitle: "Answers of Quiz 1",
      participatedOn: "Sunday, May 11, 2024",
      linkedLessonId: "live-l6",
      nextReview: {
        id: "live-l14",
        title: "Quiz 3",
        href: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14"),
      },
      questions: [
        {
          id: "q1",
          number: 1,
          question: "What does UX stand for?",
          type: "single",
          pointsEarned: 1,
          pointsTotal: 1,
          options: [
            {
              id: "q1-o1",
              text: "User Experience",
              state: "selected-correct",
              feedback: {
                type: "correct",
                title: "Your answer is correct!",
                explanation: "UX stands for User Experience, the overall experience a person has with a product.",
              },
            },
            {
              id: "q1-o2",
              text: "Universal Extension",
              state: "default",
            },
            {
              id: "q1-o3",
              text: "Unified Export",
              state: "default",
            },
            {
              id: "q1-o4",
              text: "User Exchange",
              state: "default",
            },
          ],
        },
      ],
    },
    "live-l14-failed": {
      quizId: "live-l14-failed",
      slug: "hsc-25-online-batch",
      title: "Quiz 3",
      answersTitle: "Answers of Quiz 3",
      participatedOn: "Sunday, May 11, 2024",
      linkedLessonId: "live-l14",
      previousReview: {
        id: "live-l14",
        title: "Quiz 3 Passed",
        href: ROUTES.student.courseQuizAnswers("hsc-25-online-batch", "live-l14"),
      },
      questions: [
        {
          id: "q1",
          number: 1,
          question: "How is the term platform defined in UX design?",
          type: "single",
          pointsEarned: 0,
          pointsTotal: 1,
          options: [
            {
              id: "q1-o1",
              text: "A hardware device used only for mobile apps",
              state: "selected-incorrect",
            },
            {
              id: "q1-o2",
              text: "The underlying technology or environment where users interact with a product",
              state: "correct-unselected",
              feedback: {
                type: "incorrect",
                title: "Your answer is incorrect!",
                explanation: defaultExplanation,
              },
            },
            {
              id: "q1-o3",
              text: "A social media channel for marketing campaigns",
              state: "default",
            },
            {
              id: "q1-o4",
              text: "A type of wireframe used in design sprints",
              state: "default",
            },
          ],
        },
      ],
    },
  },
};
