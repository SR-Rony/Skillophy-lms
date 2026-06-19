"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";
import { Heading } from "@/components/shared/heading";

const OTP_LENGTH = 4;
const RESEND_SECONDS = 300;

function formatMobileNumber(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 11) {
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  }

  if (digits.length === 10) {
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }

  return value.trim() || "your mobile number";
}

function formatTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")} mins`;
}

function OtpVerificationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mobile = searchParams.get("mobile") ?? "";
  const isResetFlow = searchParams.get("flow") === "reset";
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  const focusInput = useCallback((index: number) => {
    inputRefs.current[index]?.focus();
  }, []);

  const updateDigit = (index: number, value: string) => {
    const nextDigit = value.replace(/\D/g, "").slice(-1);

    setDigits((current) => {
      const next = [...current];
      next[index] = nextDigit;
      return next;
    });
    setError(null);

    if (nextDigit && index < OTP_LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !digits[index] && index > 0) {
      focusInput(index - 1);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);

    if (!pasted) {
      return;
    }

    const next = Array(OTP_LENGTH)
      .fill("")
      .map((_, index) => pasted[index] ?? "");

    setDigits(next);
    setError(null);
    focusInput(Math.min(pasted.length, OTP_LENGTH - 1));
  };

  const handleResend = () => {
    if (secondsLeft > 0) {
      return;
    }

    setSecondsLeft(RESEND_SECONDS);
    setDigits(Array(OTP_LENGTH).fill(""));
    setError(null);
    focusInput(0);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const otp = digits.join("");

    if (otp.length !== OTP_LENGTH) {
      setError("Enter the 4-digit code");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (isResetFlow) {
      router.push(
        `${ROUTES.auth.resetPassword}?mobile=${encodeURIComponent(mobile)}`,
      );
      return;
    }

    router.push(ROUTES.auth.login);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="flex justify-center gap-3 sm:gap-4">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              maxLength={1}
              value={digit}
              aria-label={`Digit ${index + 1}`}
              onChange={(event) => updateDigit(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event.key)}
              onPaste={handlePaste}
              onFocus={(event) => event.target.select()}
              className={cn(
                "h-[58px] w-[58px] rounded-lg border bg-white text-center text-[22px] font-semibold text-[#24201f] outline-none transition sm:h-[64px] sm:w-[64px] sm:text-[24px]",
                digit
                  ? "border-[#24201f] ring-2 ring-[#24201f]/10"
                  : "border-[#ece6e3] focus:border-[#24201f] focus:ring-2 focus:ring-[#24201f]/10",
              )}
            />
          ))}
        </div>

        {error ? <p className="text-center text-[13px] font-medium text-destructive">{error}</p> : null}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] text-[#6f6562]">
        <button
          type="button"
          onClick={handleResend}
          disabled={secondsLeft > 0}
          className={cn(
            "font-semibold text-[#24201f] underline decoration-[#24201f]/30 underline-offset-4 transition hover:text-primary disabled:cursor-not-allowed disabled:no-underline disabled:opacity-50",
          )}
        >
          Resend Code
        </button>

        <span className="inline-flex items-center gap-1.5 font-medium">
          <Clock3 className="h-4 w-4" aria-hidden />
          {formatTimer(secondsLeft)}
        </span>
      </div>

      <Button
        type="submit"
        variant="publicCta"
        size="publicCta"
        disabled={isSubmitting}
        className="w-full rounded-lg"
      >
        {isSubmitting ? "Verifying..." : "Confirm OTP"}
      </Button>
    </form>
  );
}

export function OtpVerificationPageContent() {
  const searchParams = useSearchParams();
  const mobileParam = searchParams.get("mobile") ?? "";
  const isResetFlow = searchParams.get("flow") === "reset";
  const formattedMobile = formatMobileNumber(mobileParam);
  const goBackHref = isResetFlow ? ROUTES.auth.forgotPassword : ROUTES.auth.register;

  return (
    <div className="w-full max-w-[560px] rounded-[28px] border border-[#f3e8e4] bg-[#fff9f8] p-6 shadow-[0_24px_60px_rgba(80,37,31,0.12)] sm:p-8">
      <Link
        href={goBackHref}
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6f6562] transition hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <div className="mt-6">
        <Heading as="h1" variant="auth">OTP Verification</Heading>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#6f6562] sm:text-[15px]">
          Please enter the 4-digit code sent to your mobile number{" "}
          <span className="font-semibold text-[#24201f]">{formattedMobile}</span>
        </p>
      </div>

      <div className="mt-8">
        <OtpVerificationForm />
      </div>
    </div>
  );
}
