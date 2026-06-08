"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/shared";

function NewsletterBackgroundPattern() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <svg
        className="absolute left-[-12%] top-1/2 h-[220px] w-[320px] -translate-y-1/2 text-[#efb0aa]/28 sm:left-[-6%] sm:h-[280px] sm:w-[400px]"
        viewBox="0 0 400 280"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={`left-${index}`}
            d={`M${index * 14} 140 C ${50 + index * 10} ${30 + index * 4}, ${130 + index * 8} ${250 - index * 5}, ${280 - index * 6} 140`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute bottom-[-18%] right-[-10%] h-[240px] w-[360px] text-[#efb0aa]/24 sm:bottom-[-12%] sm:right-[-4%] sm:h-[300px] sm:w-[440px]"
        viewBox="0 0 440 300"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={`right-${index}`}
            d={`M${440 - index * 16} 150 C ${340 - index * 12} ${40 + index * 3}, ${200 - index * 9} ${260 - index * 5}, ${30 - index * 2} 150`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute left-1/2 top-1/2 h-[320px] w-[480px] -translate-x-1/2 -translate-y-1/2 text-[#efb0aa]/12"
        viewBox="0 0 480 320"
        fill="none"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ellipse
            key={`mesh-${index}`}
            cx="240"
            cy="160"
            rx={120 + index * 18}
            ry={70 + index * 12}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function BlogDetailsNewsletterSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="relative overflow-hidden bg-[#FFF5F2] py-14 sm:py-16 lg:py-20">
      <NewsletterBackgroundPattern />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-sans text-[28px] font-bold leading-[1.2] tracking-normal text-[#111827] sm:text-[32px]">
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] font-sans text-[15px] font-normal leading-[1.7] text-[#888888] sm:mt-4 sm:text-[16px]">
            Sign up with your email to receive all our latest blog posts directly in your inbox
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-[560px] sm:mt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email Address"
                className="h-[52px] w-full flex-1 rounded-[12px] border border-transparent bg-white px-6 font-sans text-[14px] text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#FF5247]/30 focus:ring-2 focus:ring-[#FF5247]/15 sm:text-[15px]"
                required
              />
              <button
                type="submit"
                disabled={!agreed}
                className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#FF5247] px-10 font-sans text-[14px] font-bold text-white transition hover:bg-[#FF5247]/90 disabled:cursor-not-allowed disabled:opacity-50 sm:min-w-[148px] sm:text-[15px]"
              >
                Subscribe
              </button>
            </div>

            <label className="mt-4 flex items-start gap-2.5 text-left sm:mt-5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#D1D5DB] text-[#FF5247] focus:ring-[#FF5247]/20"
              />
              <span className="font-sans text-[12px] font-normal leading-[1.6] text-[#4B5563] sm:text-[13px]">
                By sharing your email, you agree to our{" "}
                <Link href="#" className="font-bold text-[#111827] hover:underline">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-bold text-[#111827] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </form>
        </div>
      </Container>
    </section>
  );
}
