"use client";

import { useEffect, useId, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, X } from "lucide-react";
import type {
  AdminEmployee,
  AdminEmployeeInviteRoleOption,
} from "@/types/admin-employee-management.types";
import { adminEmployeeRoleToId } from "@/components/admin/employee-management/admin-employee-management.utils";
import { cn } from "@/utils";

interface AdminUpdateMemberDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employee: AdminEmployee | null;
  roleOptions: AdminEmployeeInviteRoleOption[];
  onSave?: (payload: { employeeId: string; email: string; roleId: string }) => void;
}

export function AdminUpdateMemberDrawer({
  open,
  onOpenChange,
  employee,
  roleOptions,
  onSave,
}: AdminUpdateMemberDrawerProps) {
  const emailInputId = useId();
  const roleSelectId = useId();
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("");

  useEffect(() => {
    if (!open || !employee) {
      return;
    }

    setEmail(employee.email);
    setRoleId(adminEmployeeRoleToId(employee.role));
  }, [open, employee]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!employee || !email.trim() || !roleId) {
      return;
    }

    onSave?.({ employeeId: employee.id, email: email.trim(), roleId });
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="teacher-side-drawer-overlay fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content
          className={cn(
            "teacher-side-drawer-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.12)] focus:outline-none will-change-transform sm:max-w-[460px]"
          )}
        >
          <div className="border-b border-[#f0ebe8] px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 pr-2">
                <Dialog.Title className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                  Update Member
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
                  Update the member&apos;s email address and role for their access within the portal.
                </Dialog.Description>
              </div>

              <Dialog.Close
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#6b7280] transition-colors hover:bg-[#f7f7f6] hover:text-[#1a1a1a]"
                aria-label="Close update member drawer"
              >
                <X className="h-5 w-5" aria-hidden />
              </Dialog.Close>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:space-y-6 sm:px-6 sm:py-6">
              <div className="space-y-2">
                <label
                  htmlFor={emailInputId}
                  className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
                >
                  Enter Email Adress
                </label>
                <input
                  id={emailInputId}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c4c4c4] focus:border-primary sm:text-[15px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={roleSelectId}
                  className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
                >
                  Select Role
                </label>
                <div className="relative">
                  <select
                    id={roleSelectId}
                    value={roleId}
                    onChange={(event) => setRoleId(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#ebe8e6] bg-white px-4 py-3 pr-10 text-[14px] font-medium text-[#1a1a1a] outline-none transition-colors focus:border-primary sm:text-[15px]"
                    required
                  >
                    {roleOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#f0ebe8] px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="submit"
                disabled={!employee}
                className="inline-flex min-w-[148px] items-center justify-center rounded-xl bg-primary px-8 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-[15px]"
              >
                Save Changes
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
