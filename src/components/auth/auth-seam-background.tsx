function AuthSeamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="authSeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a3c" />
            <stop offset="48%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="#ff4747" />
          </linearGradient>
        </defs>

        {/* Orange top — diagonal curved seam (lower on left, rises toward right) */}
        <path
          d="M0 0 H1440 V310 C1180 390 860 430 520 455 C260 475 80 500 0 535 Z"
          fill="url(#authSeamGradient)"
        />
      </svg>

      {/* Seam lines on orange area */}
      <svg
        className="absolute inset-x-0 top-0 h-[62%] w-full text-white/16"
        viewBox="0 0 1440 560"
        fill="none"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <path
            key={`top-${index}`}
            d={`M${-20 + index * 92} 0 C ${100 + index * 70} ${150 + index * 6}, ${380 + index * 44} ${110 + index * 8}, ${1500 - index * 36} ${230 + index * 10}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Top-left fan seam */}
      <svg
        className="absolute left-[-6%] top-[-4%] hidden h-[340px] w-[380px] text-white/18 sm:block"
        viewBox="0 0 380 340"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={`fan-${index}`}
            d={`M${20 + index * 8} ${300 - index * 8} C ${70 + index * 10} ${120 - index * 3}, ${180 + index * 8} ${90 + index * 4}, ${360 - index * 6} ${260 - index * 5}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Large right wireframe mesh — crosses orange + white like reference */}
      <svg
        className="absolute right-[-10%] top-[2%] h-[min(78vh,760px)] w-[min(62vw,820px)] text-white/22"
        viewBox="0 0 820 760"
        fill="none"
      >
        <g transform="translate(520, 360) rotate(-14)">
          {Array.from({ length: 16 }).map((_, index) => (
            <ellipse
              key={`mesh-${index}`}
              cx="0"
              cy="0"
              rx={52 + index * 26}
              ry={28 + index * 15}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </g>
        {Array.from({ length: 22 }).map((_, index) => (
          <path
            key={`mesh-line-${index}`}
            d={`M${120 + index * 14} ${680 - index * 12} C ${260 + index * 10} ${220 - index * 4}, ${460 + index * 8} ${180 + index * 5}, ${760 - index * 8} ${560 - index * 8}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.75"
          />
        ))}
      </svg>

      {/* Bottom-left seam on white area */}
      <svg
        className="absolute bottom-[6%] left-[-8%] hidden h-[280px] w-[420px] text-[#f0c89a]/24 lg:block"
        viewBox="0 0 420 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={`bl-${index}`}
            d={`M${8 + index * 10} ${240 - index * 7} C ${60 + index * 8} ${88 - index * 2}, ${170 + index * 6} ${78 + index * 3}, ${380 - index * 5} ${228 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Soft seam accent on lower-right white */}
      <svg
        className="absolute bottom-[10%] right-[-4%] hidden h-[240px] w-[480px] text-[#efb0aa]/16 lg:block"
        viewBox="0 0 480 240"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={`br-${index}`}
            d={`M${24 + index * 12} ${190 - index * 7} C ${120 + index * 10} ${70 - index * 2}, ${260 + index * 6} ${62 + index * 4}, ${440 - index * 5} ${170 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export { AuthSeamBackground };
