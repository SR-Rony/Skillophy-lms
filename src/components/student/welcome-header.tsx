import { Container } from "@/components/shared";
import { cn } from "@/utils";

interface WelcomeHeaderProps {
  firstName: string;
  className?: string;
}

export function WelcomeHeader({ firstName, className }: WelcomeHeaderProps) {
  return (
    <header
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-[#fdf8f8] via-[#fef5f5] to-[#fff0f0] py-8 md:py-10 lg:py-12",
        className
      )}
    >
      <Container className="relative z-10">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-3xl lg:text-[32px]">
          Welcome Back, {firstName}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
          It&apos;s wonderful to reconnect with you! Your progress and activity in the course are
          truly impressive. Keep up the fantastic work!
        </p>
      </Container>
    </header>
  );
}
