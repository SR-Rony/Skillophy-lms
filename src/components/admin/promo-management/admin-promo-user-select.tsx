"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Check, Search, X } from "lucide-react";
import type { AdminPromoUserOption } from "@/types/admin-promo-management.types";
import { cn } from "@/utils";

interface AdminPromoUserSelectProps {
  users: AdminPromoUserOption[];
  selectedIds: string[];
  isAllUsers: boolean;
  onChange: (selectedIds: string[], isAllUsers: boolean) => void;
}

function UserCheckbox({ checked }: { checked: boolean }) {
  return (
    <span
      className={cn(
        "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
        checked ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#d1d5db] bg-white"
      )}
      aria-hidden
    >
      {checked ? <Check className="h-3 w-3 text-white" strokeWidth={3} /> : null}
    </span>
  );
}

export function AdminPromoUserSelect({
  users,
  selectedIds,
  isAllUsers,
  onChange,
}: AdminPromoUserSelectProps) {
  const listboxId = useId();
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inlineInputRef = useRef<HTMLInputElement>(null);
  const listSearchRef = useRef<HTMLInputElement>(null);

  const selectedUsers = useMemo(
    () =>
      selectedIds
        .map((id) => users.find((user) => user.id === id))
        .filter((user): user is AdminPromoUserOption => Boolean(user)),
    [selectedIds, users]
  );

  const filteredUsers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return users.filter((user) => {
      if (!query) {
        return true;
      }

      return (
        user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, users]);

  function openPanel() {
    setIsExpanded(true);
    requestAnimationFrame(() => {
      inlineInputRef.current?.focus();
    });
  }

  function closePanel() {
    setIsExpanded(false);
    setSearchQuery("");
  }

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        closePanel();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePanel();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isExpanded]);

  function handleToggleAllUsers() {
    onChange([], !isAllUsers);
  }

  function handleToggleUser(userId: string) {
    if (selectedIds.includes(userId)) {
      onChange(
        selectedIds.filter((id) => id !== userId),
        false
      );
      return;
    }

    onChange([...selectedIds, userId], false);
  }

  function handleRemoveUser(userId: string) {
    onChange(
      selectedIds.filter((id) => id !== userId),
      false
    );
  }

  return (
    <div className="space-y-2">
      <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Select User</label>

      <div
        ref={containerRef}
        className={cn(
          "overflow-hidden rounded-xl border bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)] transition-all",
          isExpanded
            ? "border-primary/30 ring-2 ring-primary/10"
            : "border-[#ebe8e6]"
        )}
        role="combobox"
        aria-expanded={isExpanded}
        aria-controls={listboxId}
        aria-haspopup="listbox"
      >
        <div
          className="min-h-[120px] cursor-text p-3.5"
          onClick={openPanel}
        >
          <div className="flex flex-wrap items-center gap-2">
            {isAllUsers ? (
              <span className="inline-flex items-center rounded-lg border border-[#ebe8e6] bg-[#fafafa] px-2.5 py-1.5 text-[12px] font-semibold text-[#1a1a1a] sm:text-[13px]">
                All User
              </span>
            ) : null}

            {!isAllUsers
              ? selectedUsers.map((user) => (
                  <span
                    key={user.id}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#ebe8e6] bg-[#fafafa] px-2.5 py-1.5"
                  >
                    <span className="relative h-6 w-6 overflow-hidden rounded-full bg-[#f3f4f6]">
                      <Image
                        src={user.avatar}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="24px"
                      />
                    </span>
                    <span className="text-[12px] font-semibold text-[#1a1a1a] sm:text-[13px]">
                      {user.name}
                    </span>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleRemoveUser(user.id);
                      }}
                      className="rounded-md p-0.5 text-[#9ca3af] transition-colors hover:bg-[#f0f0f0] hover:text-[#1a1a1a]"
                      aria-label={`Remove ${user.name}`}
                    >
                      <X className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </span>
                ))
              : null}

            <input
              ref={inlineInputRef}
              type="text"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setIsExpanded(true);
              }}
              onFocus={openPanel}
              onClick={(event) => event.stopPropagation()}
              placeholder={
                isAllUsers || selectedUsers.length > 0 ? "Type here..." : "Type to search users..."
              }
              className="min-w-[120px] flex-1 border-0 bg-transparent px-1 py-2 text-[14px] text-[#1a1a1a] outline-none placeholder:text-[#9ca3af]"
            />
          </div>
        </div>

        {isExpanded ? (
          <div className="border-t border-[#f0f0f0] bg-[#fafafa] px-3.5 pb-3.5 pt-3">
            <div className="overflow-hidden rounded-xl border border-[#e3e3e3] bg-white shadow-[inset_0_1px_2px_rgba(35,25,22,0.03)]">
              <div className="border-b border-[#f0f0f0] px-3 py-3">
                <div className="relative">
                  <input
                    ref={listSearchRef}
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onClick={(event) => event.stopPropagation()}
                    placeholder="Search"
                    className="h-10 w-full rounded-xl border border-[#dcdcdc] bg-white py-2 pl-4 pr-11 text-[14px] font-medium text-[#1a1a1a] outline-none placeholder:text-[#9ca3af] focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                  />
                  <Search
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>

              <ul
                id={listboxId}
                role="listbox"
                aria-multiselectable="true"
                className="max-h-[220px] overflow-y-auto overscroll-contain py-1 [scrollbar-color:#c4c4c4_#f5f5f5] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c4c4c4] [&::-webkit-scrollbar-track]:bg-[#f5f5f5]"
                onWheel={(event) => event.stopPropagation()}
                onTouchMove={(event) => event.stopPropagation()}
              >
                <li role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={isAllUsers}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleToggleAllUsers();
                    }}
                    className={cn(
                      "flex w-full items-center gap-3.5 px-4 py-3 text-left transition-colors",
                      isAllUsers ? "bg-[#fff8f8]" : "hover:bg-[#fafafa]"
                    )}
                  >
                    <UserCheckbox checked={isAllUsers} />
                    <span className="text-[14px] font-bold text-[#1a1a1a]">All User</span>
                  </button>
                </li>

                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => {
                    const isSelected = selectedIds.includes(user.id);

                    return (
                      <li key={user.id} role="presentation" className="border-t border-[#f3f4f6]">
                        <button
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleToggleUser(user.id);
                          }}
                          className={cn(
                            "flex w-full items-center gap-3.5 px-4 py-3 text-left transition-colors",
                            isSelected ? "bg-[#fff8f8]" : "hover:bg-[#fafafa]"
                          )}
                        >
                          <UserCheckbox checked={isSelected} />
                          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6] ring-1 ring-[#f0f0f0]">
                            <Image
                              src={user.avatar}
                              alt=""
                              fill
                              unoptimized
                              className="object-cover"
                              sizes="40px"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[14px] font-bold leading-tight text-[#1a1a1a]">
                              {user.name}
                            </span>
                            <span className="mt-0.5 block truncate text-[13px] text-[#9ca3af]">
                              {user.email}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li className="border-t border-[#f3f4f6] px-4 py-8 text-center text-[13px] font-medium text-[#9ca3af]">
                    No users found
                  </li>
                )}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
