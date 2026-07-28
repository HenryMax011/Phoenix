"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {});
    };

    play();
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else play();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={ref}
        className="hero-kenburns absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/52" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85" />
      <div className="shine-sweep absolute inset-0 opacity-30" />
    </div>
  );
}
