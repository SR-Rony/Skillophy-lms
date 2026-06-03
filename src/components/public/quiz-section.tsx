"use client";

import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/public/section-title";
import { cn } from "@/utils";

const questions = [
  {
    question: "What was the first product launched by Apple?",
    options: ["iPhone", "Apple I", "iPad", "iPod"],
    correctAnswer: "iPad",
  },
  {
    question: "Which skill helps you communicate better online?",
    options: ["Typing speed", "Active listening", "Silent mode", "File sharing"],
    correctAnswer: "Active listening",
  },
  {
    question: "What should learners do after each module?",
    options: ["Skip practice", "Take a quiz", "Close the course", "Ignore feedback"],
    correctAnswer: "Take a quiz",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function QuizSection() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(questions[0].options[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeQuestion = questions[activeQuestionIndex];
  const isCorrect = selectedAnswer === activeQuestion.correctAnswer;
  const progress = ((activeQuestionIndex + 1) / questions.length) * 100;

  const goToQuestion = (nextIndex: number) => {
    const nextQuestion = questions[nextIndex];
    setActiveQuestionIndex(nextIndex);
    setSelectedAnswer(nextQuestion.options[0]);
    setIsSubmitted(false);
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[92px]">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[28px] bg-[#030303] px-5 py-14 sm:px-8 lg:px-16 lg:py-[76px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,71,71,0.16),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.06),transparent_22%)]" />
            <svg
              className="absolute bottom-[-22%] left-[-10%] h-[520px] w-[860px] text-[#8a6428]/25"
              viewBox="0 0 860 520"
              fill="none"
              aria-hidden="true"
            >
              {Array.from({ length: 38 }).map((_, index) => (
                <path
                  key={index}
                  d={`M${index * 8} ${420 - index * 5} C ${160 + index * 5} ${210 - index * 3}, ${380 + index * 4} ${160 + index * 2}, ${820 - index * 4} ${280 + index * 3}`}
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              align="left"
              theme="dark"
              labelLines="none"
              className="max-w-[420px]"
              descriptionClassName="max-w-[360px]"
              label="Today's Quiz"
              title="Learn New Things"
              description="The essence of continuously nurturing one's passion for education. It implies a commitment to keeping the flame of excitement and dedication burning bright amidst the challenges and demands of teaching."
            />

            <motion.div
              variants={fadeUpVariants}
              className="justify-self-center rounded-[18px] bg-[#fff4f2] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)] sm:p-8 lg:w-[620px]"
            >
              <div className="mb-8">
                {isSubmitted ? (
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div
                      className={cn(
                        "flex items-center gap-3 text-[28px] font-black sm:text-[32px]",
                        isCorrect ? "text-[#11843c]" : "text-[#e2272f]"
                      )}
                    >
                      <span className="text-[30px]">{isCorrect ? "🥳" : "😩"}</span>
                      {isCorrect ? "Correct!" : "Incorrect!"}
                    </div>
                    <div
                      className={cn(
                        "rounded-full px-5 py-3 text-sm font-semibold",
                        isCorrect ? "bg-[#d9fae4] text-[#11843c]" : "bg-[#ffc5c5] text-[#b3131b]"
                      )}
                    >
                      {isCorrect ? "You are Great! Keep Shining" : "Oppss.. That was close"}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="h-2 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[#ff4747] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="mt-3 text-[12px] font-bold text-[#3b3331]">
                      {activeQuestionIndex + 1}/{questions.length} questions
                    </p>
                  </>
                )}
              </div>

              <h3 className="text-[24px] font-black leading-[1.25] tracking-[-0.035em] text-[#24201f] sm:text-[28px]">
                {activeQuestionIndex + 1}. {activeQuestion.question}
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {activeQuestion.options.map((option, index) => {
                  const label = String.fromCharCode(65 + index);
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption = option === activeQuestion.correctAnswer;
                  const showCorrect = isSubmitted && isCorrectOption;
                  const showWrong = isSubmitted && isSelected && !isCorrectOption;

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => setSelectedAnswer(option)}
                      className={cn(
                        "flex min-h-[48px] cursor-pointer items-center justify-between rounded-[12px] border bg-white px-4 text-left text-[15px] font-medium text-[#2d2827] transition disabled:cursor-default",
                        isSelected && !isSubmitted && "border-[#252121]",
                        showCorrect && "border-[#13b856] bg-[#dcfae8] text-[#174a2a]",
                        showWrong && "border-[#ff4747] bg-[#ffc7c7] text-[#471416]"
                      )}
                    >
                      <span>
                        {label}. {option}
                      </span>
                      <span
                        className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-full border",
                          isSelected && !isSubmitted && "border-[#252121] bg-[#252121]",
                          showCorrect && "border-[#13b856] text-[#13b856]",
                          showWrong && "border-[#ff4747] text-[#ff4747]"
                        )}
                      >
                        {isSelected && !isSubmitted && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                        {showCorrect && <Check className="h-3.5 w-3.5" />}
                        {showWrong && <X className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  type="button"
                  className="cursor-pointer text-[13px] font-semibold text-[#4f4747]"
                  onClick={() => setIsSubmitted(false)}
                >
                  Skip
                </button>

                <div className="flex items-center gap-3">
                  {activeQuestionIndex > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 rounded-[12px] border-[#252121] px-5 font-bold"
                      onClick={() => goToQuestion(activeQuestionIndex - 1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                  )}

                  {isSubmitted ? (
                    <Button
                      type="button"
                      variant="publicCta"
                      size="publicCta"
                      className="min-w-[92px]"
                      onClick={() =>
                        goToQuestion((activeQuestionIndex + 1) % questions.length)
                      }
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="publicCta"
                      size="publicCta"
                      className="min-w-[120px] cursor-pointer"
                      onClick={() => setIsSubmitted(true)}
                    >
                      Submit Answer
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
