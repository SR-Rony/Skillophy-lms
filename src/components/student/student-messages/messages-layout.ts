export const messagesShellClassName =
  "flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]";

export const messagesGridClassName =
  "grid h-full min-h-0 flex-1 lg:grid-cols-[minmax(300px,360px)_minmax(0,1fr)] [&>*]:min-h-0";

export const messagesPanelClassName =
  "flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]";

export const messagesPanelEmbeddedClassName =
  "h-full min-h-0 max-h-none rounded-none border-0 shadow-none";

/** Teacher dashboard — fills space below header and main padding. */
export const teacherMessagesViewportClassName =
  "flex h-[calc(100dvh-6rem)] min-h-[34rem] flex-col md:h-[calc(100dvh-7rem)] lg:h-[calc(100dvh-8rem)]";

/** Student dashboard — bounded below navbar so inner panels scroll. */
export const studentMessagesViewportClassName =
  "flex h-[calc(100dvh-4rem)] min-h-[34rem] flex-col overflow-hidden bg-white";
