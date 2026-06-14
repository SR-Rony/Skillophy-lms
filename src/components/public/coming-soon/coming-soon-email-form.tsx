"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { comingSoonPageData } from "@/components/public/coming-soon/data/coming-soon.data";

export function ComingSoonEmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-[560px]">
      <Label
        htmlFor="coming-soon-email"
        className="text-[14px] font-medium text-[#24201f] sm:text-[15px]"
      >
        {comingSoonPageData.emailLabel}
      </Label>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <Input
          id="coming-soon-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={comingSoonPageData.emailPlaceholder}
          required
          className="h-[52px] rounded-[12px] border-[#ece6e3] bg-white px-4 text-[15px] text-[#24201f] shadow-none placeholder:text-[#9a908c] focus-visible:ring-primary/30 sm:flex-1"
        />
        <Button
          type="submit"
          variant="publicCta"
          size="publicCta"
          className="h-[52px] w-full shrink-0 rounded-[12px] sm:w-auto"
        >
          {submitted ? "Subscribed!" : comingSoonPageData.submitLabel}
        </Button>
      </div>
    </form>
  );
}
