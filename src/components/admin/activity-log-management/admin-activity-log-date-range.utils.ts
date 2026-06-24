const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export interface AdminActivityLogDateRangeValue {
  start: string;
  end: string;
}

export function parseAdminActivityLogDateValue(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

export function toAdminActivityLogDateValue(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatAdminActivityLogDateLabel(value: string) {
  const date = parseAdminActivityLogDateValue(value);
  if (!date) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatAdminActivityLogDateRangeLabel(range: AdminActivityLogDateRangeValue) {
  return `${formatAdminActivityLogDateLabel(range.start)} - ${formatAdminActivityLogDateLabel(range.end)}`;
}

export function getAdminActivityLogMonthLabel(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getAdminActivityLogCalendarDays(viewDate: Date) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startOffset = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<Date | null> = [];

  for (let index = 0; index < startOffset; index += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export function isSameAdminActivityLogDay(left: Date, right: Date) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

export function startOfAdminActivityLogDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function normalizeAdminActivityLogDateRange(
  start: string,
  end: string
): AdminActivityLogDateRangeValue {
  const startDate = parseAdminActivityLogDateValue(start);
  const endDate = parseAdminActivityLogDateValue(end);

  if (!startDate || !endDate) {
    return { start, end };
  }

  if (startDate.getTime() <= endDate.getTime()) {
    return {
      start: toAdminActivityLogDateValue(startDate),
      end: toAdminActivityLogDateValue(endDate),
    };
  }

  return {
    start: toAdminActivityLogDateValue(endDate),
    end: toAdminActivityLogDateValue(startDate),
  };
}

export function isAdminActivityLogDateInRange(
  occurredAt: string,
  range: AdminActivityLogDateRangeValue
) {
  const date = new Date(occurredAt);
  const start = parseAdminActivityLogDateValue(range.start);
  const end = parseAdminActivityLogDateValue(range.end);

  if (Number.isNaN(date.getTime()) || !start || !end) {
    return true;
  }

  const time = startOfAdminActivityLogDay(date).getTime();
  return (
    time >= startOfAdminActivityLogDay(start).getTime() &&
    time <= startOfAdminActivityLogDay(end).getTime()
  );
}

export function isAdminActivityLogDayBetweenRange(day: Date, start: Date, end: Date) {
  const time = startOfAdminActivityLogDay(day).getTime();
  const rangeStart = startOfAdminActivityLogDay(start).getTime();
  const rangeEnd = startOfAdminActivityLogDay(end).getTime();
  const min = Math.min(rangeStart, rangeEnd);
  const max = Math.max(rangeStart, rangeEnd);

  return time >= min && time <= max;
}

export function createDefaultAdminActivityLogDateRange(): AdminActivityLogDateRangeValue {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - 30);

  return normalizeAdminActivityLogDateRange(
    toAdminActivityLogDateValue(start),
    toAdminActivityLogDateValue(end)
  );
}

export { WEEKDAY_LABELS };
