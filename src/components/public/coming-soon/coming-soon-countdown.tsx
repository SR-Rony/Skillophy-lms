"use client";

import { useEffect, useState } from "react";
import { comingSoonPageData } from "@/components/public/coming-soon/data/coming-soon.data";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function padTime(value: number) {
  return value.toString().padStart(2, "0");
}

export function ComingSoonCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(comingSoonPageData.launchDate),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(comingSoonPageData.launchDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

  return (
    <div className="text-center lg:text-left">
      <div className="flex items-end justify-center gap-3 sm:gap-4 lg:justify-start">
        {values.map((value, index) => (
          <div key={comingSoonPageData.countdownLabels[index]} className="flex items-end gap-3 sm:gap-4">
            <div className="min-w-[52px] sm:min-w-[60px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#9a908c] sm:text-[12px]">
                {comingSoonPageData.countdownLabels[index]}
              </p>
              <p className="mt-1 text-[28px] font-bold leading-none text-[#24201f] sm:text-[32px] lg:text-[36px]">
                {padTime(value)}
              </p>
            </div>
            {index < values.length - 1 && (
              <span className="pb-1 text-[24px] font-bold leading-none text-[#24201f] sm:text-[28px]">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
