function MissionRocketIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M36 8c8 10 12 20 12 30 0 4-1.5 8-4 11.5L36 58 28 49.5C25.5 46 24 42 24 38c0-10 4-20 12-30Z"
        fill="white"
        stroke="#d1d5db"
        strokeWidth="1.5"
      />
      <circle cx="36" cy="30" r="6" fill="#60a5fa" />
      <path d="M24 44 18 52l6 2 4-8Z" fill="#ef4444" />
      <path d="M48 44l6 8-6 2-4-8Z" fill="#ef4444" />
      <path
        d="M32 52c2 4 4 8 4 12 0 2-1 3-2 3s-2-1-2-3c0-4 2-8 4-12Z"
        fill="#fbbf24"
      />
      <path d="M34 8 36 4l2 4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MissionGradientPanel() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden rounded-l-[48px] bg-gradient-to-br from-[#ffb347] via-[#ff7a45] to-[#ff4747] lg:block xl:rounded-l-[64px]"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full text-white/20"
        viewBox="0 0 720 420"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <path
            key={index}
            d={`M${40 + index * 12} ${380 - index * 8} C ${180 + index * 10} ${120 + index * 4}, ${360 + index * 8} ${100 + index * 3}, ${700 - index * 8} ${340 - index * 6}`}
            stroke="currentColor"
            strokeWidth="1.2"
          />
        ))}
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={`b-${index}`}
            d={`M${80 + index * 14} ${420 - index * 10} C ${220 + index * 8} ${180 + index * 5}, ${420 + index * 6} ${160 + index * 4}, ${680 - index * 6} ${300 - index * 5}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.65"
          />
        ))}
      </svg>
    </div>
  );
}

export { MissionRocketIcon, MissionGradientPanel };
