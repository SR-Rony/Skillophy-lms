"use client";

import { useMemo, useState } from "react";
import { HelpPageHero } from "@/components/public/help/help-page-hero";
import { HelpTopicsSection } from "@/components/public/help/help-topics-section";
import { HelpFaqSection } from "@/components/public/help/help-faq-section";
import { filterHelpFaqs } from "@/components/public/help/data/help-faq.data";
import type { HelpAudience } from "@/components/public/help/data/help-topics.data";

export function HelpPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [audience, setAudience] = useState<HelpAudience>("learner");

  const filteredFaqs = useMemo(
    () => filterHelpFaqs(searchQuery, audience, null),
    [searchQuery, audience],
  );

  const handleAudienceChange = (nextAudience: HelpAudience) => {
    setAudience(nextAudience);
  };

  return (
    <>
      <HelpPageHero
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearchSubmit={() => {
          setSearchQuery((value) => value.trim());
          document.getElementById("help-faq")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />
      <HelpTopicsSection audience={audience} onAudienceChange={handleAudienceChange} />
      <HelpFaqSection faqs={filteredFaqs} />
    </>
  );
}
