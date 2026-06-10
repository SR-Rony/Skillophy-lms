"use client";

import { useMemo, useState } from "react";
import { HelpPageHero } from "@/components/public/help/help-page-hero";
import { HelpTopicsSection } from "@/components/public/help/help-topics-section";
import { HelpFaqSection } from "@/components/public/help/help-faq-section";
import { filterHelpFaqs } from "@/components/public/help/data/help-faq.data";
import type { HelpAudience, HelpTopicId } from "@/components/public/help/data/help-topics.data";

export function HelpPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [audience, setAudience] = useState<HelpAudience>("learner");
  const [selectedTopicId, setSelectedTopicId] = useState<HelpTopicId | null>(null);

  const filteredFaqs = useMemo(
    () => filterHelpFaqs(searchQuery, audience, selectedTopicId),
    [searchQuery, audience, selectedTopicId],
  );

  const handleAudienceChange = (nextAudience: HelpAudience) => {
    setAudience(nextAudience);
    setSelectedTopicId(null);
  };

  const handleTopicSelect = (topicId: HelpTopicId) => {
    setSelectedTopicId((current) => (current === topicId ? null : topicId));
    document.getElementById("help-faq")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
      <HelpTopicsSection
        audience={audience}
        selectedTopicId={selectedTopicId}
        onAudienceChange={handleAudienceChange}
        onTopicSelect={handleTopicSelect}
      />
      <HelpFaqSection faqs={filteredFaqs} />
    </>
  );
}
