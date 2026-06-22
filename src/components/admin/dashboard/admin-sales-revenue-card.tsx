"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import { AdminChartNoData } from "@/components/admin/dashboard/admin-chart-no-data";
import { TeacherDashboardPanel } from "@/components/teacher/dashboard/teacher-dashboard-panel";
import type { AdminDashboardRevenueMonth } from "@/types/admin-dashboard.types";
import { cn } from "@/utils";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const Y_AXIS_TICKS = [250000, 200000, 150000, 100000, 50000, 0];
const Y_AXIS_LABELS = ["৳250K", "৳200K", "৳150K", "৳100K", "৳50K", "৳0"];
const CHART_HEIGHT = 252;
const MAX_REVENUE = 250000;

interface AdminSalesRevenueCardProps {
  salesRevenue: AdminDashboardRevenueMonth[];
  highlightedMonth: string;
}

function formatRevenueLabel(value: number) {
  if (value >= 1000) {
    return `৳${Math.round(value / 1000)}K`;
  }

  return `৳${value}`;
}

function buildSmoothPath(points: { x: number; y: number }[]) {
  if (points.length === 0) {
    return "";
  }

  if (points.length === 1) {
    return `M ${points[0].x} ${points[0].y}`;
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const midX = (current.x + next.x) / 2;
    path += ` C ${midX} ${current.y}, ${midX} ${next.y}, ${next.x} ${next.y}`;
  }

  return path;
}

function buildChartGeometry(points: AdminDashboardRevenueMonth[]) {
  const width = 100;
  const height = 100;
  const step = points.length > 1 ? width / (points.length - 1) : width;

  const coordinates = points.map((point, index) => {
    const x = index * step;
    const y = height - (point.revenue / MAX_REVENUE) * height;
    return { ...point, x, y };
  });

  const linePath = buildSmoothPath(coordinates);
  const areaPath = `${linePath} L ${coordinates[coordinates.length - 1]?.x ?? width} ${height} L 0 ${height} Z`;

  return { coordinates, linePath, areaPath };
}

export function AdminSalesRevenueCard({
  salesRevenue,
  highlightedMonth,
}: AdminSalesRevenueCardProps) {
  const [activeMonth, setActiveMonth] = useState(highlightedMonth);
  const hasData = salesRevenue.length > 0;
  const { coordinates, linePath, areaPath } = useMemo(
    () => buildChartGeometry(salesRevenue),
    [salesRevenue]
  );

  const activePoint =
    coordinates.find((point) => point.month === activeMonth) ??
    coordinates.find((point) => point.month === highlightedMonth) ??
    coordinates[coordinates.length - 1];

  return (
    <TeacherDashboardPanel
      title="Sales Revenue"
      className="min-h-[420px]"
      action={
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-[#e8e4e1] bg-white px-3 py-2 text-[12px] font-semibold text-[#1a1a1a] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-[#ddd8d6] sm:text-[13px]"
        >
          <ListFilter className="h-4 w-4 text-[#6b7280]" strokeWidth={2} />
          <span className="font-medium text-[#6b7280]">Sort:</span>
          Monthly
          <ChevronDown className="h-4 w-4 text-[#9ca3af]" strokeWidth={2} />
        </button>
      }
      contentClassName="flex flex-1 flex-col px-5 pb-6 pt-3 sm:px-6"
    >
      <div className="flex min-h-0 flex-1 gap-3 sm:gap-4">
        <div
          className="flex shrink-0 flex-col justify-between pb-10 text-[11px] font-medium text-[#9ca3af] sm:text-[12px]"
          style={{ height: CHART_HEIGHT }}
        >
          {Y_AXIS_LABELS.map((tick) => (
            <span key={tick} className="leading-none">
              {tick}
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div
            className="relative border-b border-l border-[#e5e7eb]"
            style={{ height: CHART_HEIGHT }}
          >
            {Y_AXIS_TICKS.slice(0, -1).map((tick) => (
              <div
                key={tick}
                className="absolute inset-x-0 border-t border-[#f0f0f0]"
                style={{ bottom: `${(tick / MAX_REVENUE) * CHART_HEIGHT}px` }}
              />
            ))}

            {hasData ? (
              <>
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="admin-revenue-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff4747" stopOpacity="0.22" />
                      <stop offset="55%" stopColor="#ff4747" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#ff4747" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={areaPath} fill="url(#admin-revenue-area)" />
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#ff4747"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {coordinates.map((point) => {
                  const left = `${point.x}%`;
                  const bottom = `${(point.revenue / MAX_REVENUE) * 100}%`;
                  const isActive = point.month === activePoint?.month;

                  return (
                    <button
                      key={point.month}
                      type="button"
                      className="absolute z-10 flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center"
                      style={{ left, bottom }}
                      onMouseEnter={() => setActiveMonth(point.month)}
                      onFocus={() => setActiveMonth(point.month)}
                      aria-label={`${point.month} revenue ${formatRevenueLabel(point.revenue)}`}
                    >
                      <span
                        className={cn(
                          "block rounded-full bg-primary transition-all",
                          isActive
                            ? "h-3.5 w-3.5 ring-4 ring-[#ffe4e6]"
                            : "h-2 w-2 opacity-0 hover:opacity-100"
                        )}
                      />
                    </button>
                  );
                })}

                {activePoint && (
                  <div
                    className="pointer-events-none absolute z-20 -translate-x-1/2"
                    style={{
                      left: `${activePoint.x}%`,
                      bottom: `calc(${(activePoint.revenue / MAX_REVENUE) * 100}% + 22px)`,
                    }}
                  >
                    <div className="relative min-w-[112px] rounded-lg bg-[#1a1a1a] px-3.5 py-2.5 text-center shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
                      <p className="text-[14px] font-bold leading-none text-white">
                        {formatRevenueLabel(activePoint.revenue)}
                      </p>
                      <p className="mt-1 text-[11px] font-medium text-[#d1d5db]">Total revenue</p>
                      <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1a1a1a]" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <AdminChartNoData />
            )}
          </div>

          <div className="mt-3 flex justify-between px-0.5 sm:px-1">
            {(hasData ? salesRevenue : MONTHS.map((month) => ({ month }))).map((point) => (
              <span
                key={point.month}
                className="flex-1 text-center text-[10px] font-medium text-[#9ca3af] sm:text-[11px]"
              >
                {point.month}
              </span>
            ))}
          </div>

          <p className="mt-2 text-center text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
            Month
          </p>
        </div>
      </div>
    </TeacherDashboardPanel>
  );
}
