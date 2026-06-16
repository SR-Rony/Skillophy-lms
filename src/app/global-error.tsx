"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Something went wrong</h1>
          <p className="max-w-md text-[#6b7280]">
            An unexpected error occurred. Please try again.
          </p>
          <Button onClick={reset}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
