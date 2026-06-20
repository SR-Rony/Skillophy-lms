"use client";

import { useState } from "react";
import { Info, Trash2 } from "lucide-react";
import type { StudentAccountSettingsMoreData } from "@/types/student-account-settings.types";

interface AccountSettingsMoreViewProps {
  data: StudentAccountSettingsMoreData;
}

export function AccountSettingsMoreView({ data }: AccountSettingsMoreViewProps) {
  const [otherDevices, setOtherDevices] = useState(data.otherDevices);

  function handleRemoveDevice(deviceId: string) {
    setOtherDevices((current) => current.filter((device) => device.id !== deviceId));
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
      <section className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <div className="divide-y divide-[#f0ece9]">
          {data.accountActions.map((action) => (
            <div
              key={action.id}
              className="flex flex-col gap-4 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">
                  {action.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#757575] sm:text-[14px]">
                  {action.description}
                </p>
              </div>

              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a] px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:min-w-[110px] sm:text-[14px]"
              >
                {action.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.04)] sm:p-6 md:p-7">
        <h2 className="text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">Device Manager</h2>

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">Current Device</h3>
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" aria-hidden />
          </div>

          <div className="mt-3 rounded-xl border border-[#ebe8e6] bg-white px-4 py-3.5 sm:px-5 sm:py-4">
            <p className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
              {data.currentDevice.name}
            </p>
            <p className="mt-1.5 text-[12px] text-[#757575] sm:text-[13px]">
              {data.currentDevice.meta}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
            Other Devices of Your Account
          </h3>

          <div className="mt-3 space-y-3">
            {otherDevices.length > 0 ? (
              otherDevices.map((device) => (
                <div
                  key={device.id}
                  className="flex items-start justify-between gap-3 rounded-xl border border-[#ebe8e6] bg-white px-4 py-3.5 sm:px-5 sm:py-4"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
                      {device.name}
                    </p>
                    <p className="mt-1.5 text-[12px] text-[#757575] sm:text-[13px]">
                      {device.meta}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveDevice(device.id)}
                    aria-label={`Remove ${device.name}`}
                    className="shrink-0 text-[#b0b7c3] transition-colors hover:text-[#1a1a1a]"
                  >
                    <Trash2 className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                  </button>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-[#ebe8e6] px-4 py-6 text-center text-[13px] text-[#9ca3af] sm:text-[14px]">
                No other devices connected
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 flex items-start gap-2 text-[12px] leading-relaxed text-[#9ca3af] sm:text-[13px]">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          {data.deviceLimitNote}
        </p>
      </section>
    </div>
  );
}
