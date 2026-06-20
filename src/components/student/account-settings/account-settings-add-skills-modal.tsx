"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { StudentAccountSettingsSkillsFormOptions } from "@/types/student-account-settings.types";
import {
  accountSettingsModalListClassName,
  accountSettingsModalListItemClassName,
  getAccountSettingsModalListItemStateClassName,
} from "./account-settings-modal-list-styles";
import { AccountSettingsModalSeamBackground } from "./account-settings-modal-seam-background";
import { AccountSettingsSkillSuggestionLabel } from "./account-settings-skill-suggestion-label";
import { cn } from "@/utils";

interface AccountSettingsAddSkillsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialSkills: string[];
  formOptions: StudentAccountSettingsSkillsFormOptions;
  onSave: (skills: string[]) => void;
}

export function AccountSettingsAddSkillsModal({
  open,
  onOpenChange,
  initialSkills,
  formOptions,
  onSave,
}: AccountSettingsAddSkillsModalProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(initialSkills);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (open) {
      setSelectedSkills(initialSkills);
      setSearchQuery("");
      setIsDropdownOpen(false);
      setHighlightedIndex(0);
    }
  }, [open, initialSkills]);

  const filteredSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return formOptions.availableSkills.filter((skill) => {
      if (selectedSkills.includes(skill)) {
        return false;
      }

      if (!query) {
        return true;
      }

      return skill.toLowerCase().includes(query);
    });
  }, [formOptions.availableSkills, searchQuery, selectedSkills]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    if (!isDropdownOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isDropdownOpen]);

  useEffect(() => {
    if (!isDropdownOpen || !listRef.current) {
      return;
    }

    const highlightedItem = listRef.current.children[highlightedIndex] as HTMLElement | undefined;
    highlightedItem?.scrollIntoView({ block: "nearest" });
  }, [highlightedIndex, isDropdownOpen]);

  function handleAddSkill(skill: string) {
    if (selectedSkills.includes(skill) || selectedSkills.length >= formOptions.maxSkills) {
      return;
    }

    setSelectedSkills((current) => [...current, skill]);
    setSearchQuery("");
    setHighlightedIndex(0);
    inputRef.current?.focus();
  }

  function handleRemoveSkill(skill: string) {
    setSelectedSkills((current) => current.filter((item) => item !== skill));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(selectedSkills);
    onOpenChange(false);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !searchQuery && selectedSkills.length > 0) {
      setSelectedSkills((current) => current.slice(0, -1));
      return;
    }

    if (!isDropdownOpen || filteredSuggestions.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((current) =>
        current >= filteredSuggestions.length - 1 ? 0 : current + 1
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((current) =>
        current <= 0 ? filteredSuggestions.length - 1 : current - 1
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const skill = filteredSuggestions[highlightedIndex];
      if (skill) {
        handleAddSkill(skill);
      }
    }

    if (event.key === "Escape") {
      setIsDropdownOpen(false);
    }
  }

  const canAddMore = selectedSkills.length < formOptions.maxSkills;
  const showSuggestions = isDropdownOpen && canAddMore;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100vh-2rem)] w-[calc(100%-2rem)] max-w-[640px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.25)] focus:outline-none">
          <div className="relative overflow-hidden border-b border-[#f0ece9] px-5 py-5 sm:px-7 sm:py-6">
            <AccountSettingsModalSeamBackground />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Add New Skills
                </Dialog.Title>
                <Dialog.Description className="mt-2 max-w-[540px] text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  Please add your skills by selecting from the list provided below. You can choose
                  relevant skills that best represent your expertise.
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#9a908c] transition hover:bg-[#faf9f8] hover:text-[#1a1a1a]"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="scrollbar-hide overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              <div ref={containerRef}>
                <label
                  htmlFor="account-settings-skills-input"
                  className="mb-2 block text-[14px] font-semibold text-[#1a1a1a]"
                >
                  Your Skills (Up to {formOptions.maxSkills})
                </label>

                <div
                  className={cn(
                    "overflow-hidden rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)] transition-shadow",
                    showSuggestions && "shadow-[0_8px_24px_rgba(35,25,22,0.08)] ring-2 ring-primary/10"
                  )}
                >
                  <div
                    className="flex min-h-[120px] flex-wrap items-start gap-2 p-3 sm:min-h-[132px] sm:p-4"
                    onClick={() => inputRef.current?.focus()}
                  >
                    {selectedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#ebe8e6] bg-[#fafafa] px-3 py-1.5 text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleRemoveSkill(skill);
                          }}
                          className="rounded-full p-0.5 text-[#9ca3af] transition-colors hover:bg-white hover:text-[#1a1a1a]"
                          aria-label={`Remove ${skill}`}
                        >
                          <X className="h-3.5 w-3.5" aria-hidden />
                        </button>
                      </span>
                    ))}

                    {canAddMore ? (
                      <input
                        ref={inputRef}
                        id="account-settings-skills-input"
                        type="text"
                        value={searchQuery}
                        onChange={(event) => {
                          setSearchQuery(event.target.value);
                          setIsDropdownOpen(true);
                        }}
                        onFocus={() => setIsDropdownOpen(true)}
                        onKeyDown={handleInputKeyDown}
                        placeholder={selectedSkills.length === 0 ? "Search skills..." : ""}
                        className="min-w-[120px] flex-1 bg-transparent py-1.5 text-[14px] text-[#1a1a1a] placeholder:text-[#b0b7c3] focus:outline-none sm:text-[15px]"
                      />
                    ) : null}
                  </div>

                  {showSuggestions && filteredSuggestions.length > 0 ? (
                    <>
                      <div className="border-t border-[#f0ece9]" aria-hidden />
                      <ul
                        ref={listRef}
                        role="listbox"
                        className={cn(accountSettingsModalListClassName, "py-1.5")}
                      >
                        {filteredSuggestions.map((skill, index) => (
                          <li key={skill} role="option" aria-selected={index === highlightedIndex}>
                            <button
                              type="button"
                              onMouseEnter={() => setHighlightedIndex(index)}
                              onClick={() => handleAddSkill(skill)}
                              className={cn(
                                accountSettingsModalListItemClassName,
                                getAccountSettingsModalListItemStateClassName(
                                  index === highlightedIndex
                                )
                              )}
                            >
                              <AccountSettingsSkillSuggestionLabel
                                skill={skill}
                                query={searchQuery}
                              />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}

                  {showSuggestions && filteredSuggestions.length === 0 ? (
                    <>
                      <div className="border-t border-[#f0ece9]" aria-hidden />
                      <div className="px-5 py-4 text-[14px] text-[#9ca3af] sm:px-6">
                        No skills found for &quot;{searchQuery.trim()}&quot;
                      </div>
                    </>
                  ) : null}
                </div>

                {canAddMore ? (
                  <p className="mt-2 text-[12px] text-[#9ca3af] sm:text-[13px]">
                    {selectedSkills.length}/{formOptions.maxSkills} skills selected
                  </p>
                ) : (
                  <p className="mt-2 text-[12px] font-medium text-[#d97706] sm:text-[13px]">
                    Maximum {formOptions.maxSkills} skills reached
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-[#f0ece9] px-5 py-4 sm:px-7 sm:py-5">
              <button
                type="submit"
                className="inline-flex min-w-[160px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Save Information
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
