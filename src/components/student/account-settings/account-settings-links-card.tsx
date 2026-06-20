"use client";

import { useState } from "react";
import { Facebook, Globe, Info, Instagram, Linkedin, Link2 } from "lucide-react";
import type {
  StudentAccountSettingsLinkPlatform,
  StudentAccountSettingsProfileLink,
} from "@/types/student-account-settings.types";
import { AccountSettingsSectionCard } from "./account-settings-section-card";
import {
  AccountSettingsField,
  accountSettingsInputClassName,
} from "./account-settings-field";
import { cn } from "@/utils";

interface AccountSettingsLinksCardProps {
  links: StudentAccountSettingsProfileLink[];
  maxCustomLinks: number;
  className?: string;
}

function LinkPlatformIcon({
  platform,
  className,
}: {
  platform: StudentAccountSettingsLinkPlatform;
  className?: string;
}) {
  const iconClassName = cn("h-4 w-4 shrink-0", className);

  if (platform === "portfolio") {
    return <Globe className={iconClassName} aria-hidden />;
  }

  if (platform === "linkedin") {
    return <Linkedin className={cn(iconClassName, "fill-[#0a66c2] text-[#0a66c2]")} aria-hidden />;
  }

  if (platform === "facebook") {
    return <Facebook className={cn(iconClassName, "fill-[#1877f2] text-[#1877f2]")} aria-hidden />;
  }

  if (platform === "instagram") {
    return <Instagram className={cn(iconClassName, "text-[#e4405f]")} aria-hidden />;
  }

  if (platform === "dribbble") {
    return (
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ea4c89] text-[9px] font-bold text-white",
          className
        )}
        aria-hidden
      >
        D
      </span>
    );
  }

  return <Link2 className={iconClassName} aria-hidden />;
}

export function AccountSettingsLinksCard({
  links,
  maxCustomLinks,
  className,
}: AccountSettingsLinksCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formLinks, setFormLinks] = useState(links);
  const [savedLinks, setSavedLinks] = useState(links);

  function handleChange(id: string, url: string) {
    setFormLinks((current) =>
      current.map((link) => (link.id === id ? { ...link, url } : link))
    );
  }

  function handleEditToggle() {
    if (isEditing) {
      setSavedLinks(formLinks);
      setIsEditing(false);
      return;
    }

    setFormLinks(savedLinks);
    setIsEditing(true);
  }

  return (
    <AccountSettingsSectionCard
      title="Links"
      actionLabel={isEditing ? "Save" : "Edit"}
      onAction={handleEditToggle}
      className={className}
    >
      <div className="space-y-3 sm:space-y-3.5">
        {formLinks.map((link) => (
          <div key={link.id}>
            {isEditing ? (
              <AccountSettingsField label={link.label}>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                    <LinkPlatformIcon platform={link.platform} />
                  </span>
                  <input
                    type="url"
                    value={link.url}
                    onChange={(event) => handleChange(link.id, event.target.value)}
                    placeholder={`Enter ${link.label.toLowerCase()} link`}
                    className={cn(accountSettingsInputClassName, "pl-11")}
                  />
                </div>
              </AccountSettingsField>
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 sm:gap-4 sm:px-5 sm:py-3.5">
                <LinkPlatformIcon platform={link.platform} />
                <span className="w-[88px] shrink-0 text-[13px] font-semibold text-[#1a1a1a] sm:w-[96px] sm:text-[14px]">
                  {link.label}
                </span>
                <span className="min-w-0 flex-1 truncate text-[12px] text-[#757575] sm:text-[13px]">
                  {link.url}
                </span>
              </div>
            )}
          </div>
        ))}

        {isEditing ? (
          <AccountSettingsField label="New Link">
            <div className="relative">
              <Link2
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#757575]"
                aria-hidden
              />
              <input
                type="url"
                placeholder="Add a new link"
                disabled
                className={cn(
                  accountSettingsInputClassName,
                  "cursor-not-allowed pl-11 opacity-60"
                )}
              />
            </div>
          </AccountSettingsField>
        ) : null}
      </div>

      <p className="mt-5 flex items-center gap-2 text-[12px] text-[#9ca3af] sm:text-[13px]">
        <Info className="h-3.5 w-3.5 shrink-0" aria-hidden />
        You can add upto {maxCustomLinks} new links
      </p>
    </AccountSettingsSectionCard>
  );
}
