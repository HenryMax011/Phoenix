"use client";

import { aboutContent } from "@/content/about";

/** Path onda horizontal (viewBox 0 0 1000 200) */
const WAVE_D =
  "M 40 100 C 80 30, 90 30, 125 30 C 200 30, 300 170, 375 170 C 450 170, 550 30, 625 30 C 700 30, 800 170, 875 170 C 910 170, 940 140, 960 100";

export function WaveTimeline() {
  const items = aboutContent.timeline;

  return (
    <div className="relative mt-12 w-full">
      {/* Desktop: onda horizontal */}
      <div className="relative mx-auto hidden max-w-6xl md:block">
        {/* Cards acima da onda (nós nos vales: 1 e 3) */}
        <div className="mb-2 grid grid-cols-4 gap-4 px-1">
          {items.map((item, i) =>
            i % 2 === 1 ? (
              <div key={item.title} className="px-2 text-center">
                <p className="text-3xl font-bold text-steel-300 lg:text-4xl">
                  {item.year}
                </p>
                <h3 className="mt-2 text-base font-bold text-steel-950 lg:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {item.text}
                </p>
              </div>
            ) : (
              <div key={`top-spacer-${i}`} aria-hidden />
            ),
          )}
        </div>

        {/* SVG onda + luz */}
        <div className="relative h-[140px] w-full">
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1000 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <filter
                id="wave-glow"
                x="-20%"
                y="-40%"
                width="140%"
                height="180%"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="wave-stroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#CD1C18" stopOpacity="0.2" />
                <stop offset="40%" stopColor="#CD1C18" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#CD1C18" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            <path
              d={WAVE_D}
              stroke="url(#wave-stroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d={WAVE_D}
              stroke="#FF4A45"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#wave-glow)"
              className="wave-run"
              pathLength={1000}
            />

            {[
              [125, 30],
              [375, 170],
              [625, 30],
              [875, 170],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="16"
                  fill="#CD1C18"
                  opacity="0.22"
                  className="wave-node-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="7"
                  fill="#CD1C18"
                  stroke="#ffffff"
                  strokeWidth="3"
                  filter="url(#wave-glow)"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Cards abaixo da onda (nós nos picos: 0 e 2) */}
        <div className="mt-2 grid grid-cols-4 gap-4 px-1">
          {items.map((item, i) =>
            i % 2 === 0 ? (
              <div key={item.title} className="px-2 text-center">
                <p className="text-3xl font-bold text-steel-300 lg:text-4xl">
                  {item.year}
                </p>
                <h3 className="mt-2 text-base font-bold text-steel-950 lg:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {item.text}
                </p>
              </div>
            ) : (
              <div key={`bot-spacer-${i}`} aria-hidden />
            ),
          )}
        </div>
      </div>

      {/* Mobile */}
      <ol className="relative space-y-10 border-l-2 border-blue-600 pl-8 md:hidden">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[2.45rem] top-2 h-3.5 w-3.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(205,28,24,0.85)] ring-4 ring-white" />
            <p className="text-2xl font-bold text-steel-300">{item.year}</p>
            <h3 className="mt-1 text-lg font-bold text-steel-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
