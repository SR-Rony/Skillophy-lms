import type { CourseDetailsJobOpeningRate } from "@/components/public/course-details/types";
import { cn } from "@/utils";

const STAT_COLORS = {
  green: "text-[#28a745]",
  orange: "text-[#fd7e14]",
  blue: "text-[#007bff]",
} as const;

const CHART_WIDTH = 440;
const CHART_HEIGHT = 200;
const PADDING = { top: 16, right: 16, bottom: 32, left: 44 };
const Y_MAX = 80;
const Y_LABELS = ["80%", "60%", "40%", "20%", "0%"];

function buildChartGeometry(points: number[]) {
  const plotWidth = CHART_WIDTH - PADDING.left - PADDING.right;
  const plotHeight = CHART_HEIGHT - PADDING.top - PADDING.bottom;
  const bottom = PADDING.top + plotHeight;

  const coordinates = points.map((value, index) => ({
    x: PADDING.left + (index / (points.length - 1)) * plotWidth,
    y: PADDING.top + plotHeight - (value / Y_MAX) * plotHeight,
  }));

  const linePath = coordinates
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  const areaPath = `${linePath} L ${coordinates[coordinates.length - 1].x} ${bottom} L ${coordinates[0].x} ${bottom} Z`;

  return { coordinates, linePath, areaPath, plotHeight, bottom };
}

interface JobOpeningRateSectionProps {
  data: CourseDetailsJobOpeningRate;
}

export function JobOpeningRateSection({ data }: JobOpeningRateSectionProps) {
  const { linePath, areaPath, plotHeight, bottom } = buildChartGeometry(data.chartPoints);

  return (
    <section className="scroll-mt-28">
      <div className="rounded-[18px] border border-[#ece6e3] bg-white p-5 shadow-[0_12px_32px_rgba(35,25,22,0.05)] sm:p-6 lg:p-7">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10">
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#1a1a1a] sm:text-[24px]">
              {data.title}
            </h2>
            <p className="mt-2 max-w-md text-[14px] leading-[1.6] text-[#6f6562] sm:text-[15px]">
              {data.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-8 sm:gap-10">
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className={cn(
                      "text-[28px] font-bold leading-none sm:text-[32px]",
                      STAT_COLORS[stat.color]
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[13px] font-medium text-[#6f6562]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <svg
              viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
              className="h-auto w-full"
              role="img"
              aria-label="Job opening rate growth chart"
            >
              <defs>
                <linearGradient id="jobOpeningAreaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.03" />
                </linearGradient>
              </defs>

              {Y_LABELS.map((label, index) => {
                const y = PADDING.top + (index / (Y_LABELS.length - 1)) * plotHeight;

                return (
                  <g key={label}>
                    <line
                      x1={PADDING.left}
                      y1={y}
                      x2={CHART_WIDTH - PADDING.right}
                      y2={y}
                      stroke="#ece6e3"
                      strokeWidth="1"
                    />
                    <text
                      x={PADDING.left - 8}
                      y={y + 4}
                      textAnchor="end"
                      className="fill-[#9a908c] text-[10px] font-medium"
                    >
                      {label}
                    </text>
                  </g>
                );
              })}

              <path d={areaPath} fill="url(#jobOpeningAreaFill)" />
              <path
                d={linePath}
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {data.chartYears.map((year, index) => {
                const x =
                  PADDING.left +
                  (index / (data.chartYears.length - 1)) *
                    (CHART_WIDTH - PADDING.left - PADDING.right);

                return (
                  <text
                    key={year}
                    x={x}
                    y={bottom + 22}
                    textAnchor="middle"
                    className="fill-[#6f6562] text-[11px] font-medium"
                  >
                    {year}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
