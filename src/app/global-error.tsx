"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/shared/heading";

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
          <Heading as="h1" variant="page-header">Something went wrong</Heading>
          <p className="max-w-md text-[#6b7280]">
            An unexpected error occurred. Please try again.
          </p>
          <Button onClick={reset}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
