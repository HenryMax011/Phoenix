"use client";

import * as React from "react";
import { MessageCircle, Share2, Code2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PhoenixMark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2c.4 2.8 1.6 4.6 3.5 6.2C13.8 10 12.8 12 12.5 14.5c2.2-.4 3.8-1.2 5-2.5.2 2.8-.6 5-2.2 6.8C13.8 20.5 12.8 21.5 12 22c-.8-.5-1.8-1.5-3.3-3.2C7.1 17 6.3 14.8 6.5 12c1.2 1.3 2.8 2.1 5 2.5C11.2 12 10.2 10 8.5 8.2 10.4 6.6 11.6 4.8 12 2z" />
  </svg>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      title = "PhoenixBor",
      description = "Vedação industrial com precisão, fabricação própria e resposta rápida.",
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn("group h-[300px] w-[290px] [perspective:1000px]", className)}
        {...props}
      >
        <div className="relative h-full rounded-[50px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotate3d(1,1,0,30deg)] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px]">
          <div className="absolute inset-2 rounded-[55px] border-b border-l border-white/20 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm [transform:translate3d(0,0,25px)] [transform-style:preserve-3d]" />
          <div className="absolute [transform:translate3d(0,0,26px)]">
            <div className="px-7 pb-0 pt-[100px]">
              <span className="block text-xl font-black text-white">{title}</span>
              <span className="mt-5 block text-[15px] text-zinc-300">
                {description}
              </span>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between [transform:translate3d(0,0,26px)] [transform-style:preserve-3d]">
            <div className="flex gap-2.5 [transform-style:preserve-3d]">
              {[
                { icon: MessageCircle, delay: "400ms" },
                { icon: Share2, delay: "600ms" },
                { icon: Code2, delay: "800ms" },
              ].map(({ icon: Icon, delay }, index) => (
                <button
                  key={index}
                  type="button"
                  className="group/social grid h-[30px] w-[30px] place-content-center rounded-full border-none bg-white shadow-[rgba(0,0,0,0.5)_0px_7px_5px_-5px] transition-all duration-200 ease-in-out group-hover:[transform:translate3d(0,0,50px)] group-hover:[box-shadow:rgba(0,0,0,0.2)_-5px_20px_10px_0px] hover:bg-[#689048] active:bg-[#3d7830]"
                  style={{ transitionDelay: delay }}
                >
                  <Icon className="h-4 w-4 stroke-black transition-colors group-hover/social:stroke-white" />
                </button>
              ))}
            </div>
            <div className="flex w-2/5 cursor-pointer items-center justify-end transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)]">
              <span className="border-none bg-none text-xs font-bold text-white">
                Ver mais
              </span>
              <ChevronDown className="h-4 w-4 stroke-white" strokeWidth={3} />
            </div>
          </div>
          <div className="absolute right-0 top-0 [transform-style:preserve-3d]">
            {[
              { size: "170px", pos: "8px", z: "20px", delay: "0s" },
              { size: "140px", pos: "10px", z: "40px", delay: "0.4s" },
              { size: "110px", pos: "17px", z: "60px", delay: "0.8s" },
              { size: "80px", pos: "23px", z: "80px", delay: "1.2s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-white/10 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              />
            ))}
            <div
              className="absolute grid aspect-square w-[50px] place-content-center rounded-full bg-white shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out [transform:translate3d(0,0,100px)] [transition-delay:1.6s] group-hover:[transform:translate3d(0,0,120px)]"
              style={{ top: "30px", right: "30px" }}
            >
              <PhoenixMark className="w-5 text-[#689048]" />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";

/** Card de estatística — glass dark (referência 718k / VIEWS) */
export interface StatGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export const StatGlassCard = React.forwardRef<HTMLDivElement, StatGlassCardProps>(
  ({ className, value, label, icon: Icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md sm:p-7",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
          "transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]",
          className,
        )}
        {...props}
      >
        {/* Glow canto superior esquerdo */}
        <div
          className="pointer-events-none absolute -left-8 -top-10 h-36 w-36 rounded-full bg-white/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full bg-blue-500/30 blur-2xl"
          aria-hidden
        />

        {/* Linhas internas (frame) */}
        <div
          className="pointer-events-none absolute inset-3 border border-white/10"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[120px] flex-col items-center justify-center text-center">
          {Icon ? (
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70">
              <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
          ) : null}
          <p className="bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {value}
          </p>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/75">
            {label}
          </p>
        </div>
      </div>
    );
  },
);

StatGlassCard.displayName = "StatGlassCard";

/** Card de segmento / desafio — mesmo glass */
export interface SegmentGlassCardProps
  extends React.HTMLAttributes<HTMLElement> {
  title: string;
  summary: string;
  challenges: string[];
}

export const SegmentGlassCard = React.forwardRef<
  HTMLElement,
  SegmentGlassCardProps
>(({ className, title, summary, challenges, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md sm:p-9",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        "transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07]",
        className,
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -left-10 -top-12 h-44 w-44 rounded-full bg-white/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-500/25 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-3 border border-white/10"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute left-3 top-[42%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        aria-hidden
      />

      <div className="relative z-10">
        <h3 className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-lg font-semibold uppercase tracking-[0.14em] text-transparent">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/85">{summary}</p>
        <ul className="mt-6 space-y-2.5 text-sm text-white/80">
          {challenges.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="text-blue-400" aria-hidden>
                ·
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
});

SegmentGlassCard.displayName = "SegmentGlassCard";

export default GlassCard;
