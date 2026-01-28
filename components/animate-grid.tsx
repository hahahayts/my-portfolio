"use client";

import { useEffect, useState } from "react";

export default function RandomGlowingLines() {
  const gridSize = 20; // number of lines
  const [activeHorizontal, setActiveHorizontal] = useState<number | null>(null);
  const [activeVertical, setActiveVertical] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // pick a random row and column to glow
      setActiveHorizontal(Math.floor(Math.random() * gridSize));
      setActiveVertical(Math.floor(Math.random() * gridSize));
    }, 400); // glow changes every 0.4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background/5 backdrop-blur-[1px]" />

      {/* horizontal lines */}
      {Array.from({ length: gridSize }).map((_, i) => (
        <div
          key={`h-${i}`}
          className={`absolute left-0 w-full h-[1px] bg-white/20 ${
            activeHorizontal === i ? "bg-white/80 blur-sm" : ""
          }`}
          style={{
            top: `${(i / gridSize) * 100}%`,
          }}
        />
      ))}

      {/* vertical lines */}
      {Array.from({ length: gridSize }).map((_, i) => (
        <div
          key={`v-${i}`}
          className={`absolute top-0 h-full w-[1px] bg-white/20 ${
            activeVertical === i ? "bg-white/80 blur-sm" : ""
          }`}
          style={{
            left: `${(i / gridSize) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
