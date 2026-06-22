import type { StudentAccountSettingsMoreData } from "@/types/student-account-settings.types";

interface TeacherAccountSettingsMoreViewProps {
  data: StudentAccountSettingsMoreData;
}

export function TeacherAccountSettingsMoreView({ data }: TeacherAccountSettingsMoreViewProps) {
  return (
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
  );
}
