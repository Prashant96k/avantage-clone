"use client";
import { useEffect, useState } from "react";

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<
    { size: number; left: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: 15 }).map(() => ({
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }));
    setBubbles(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/20 animate-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
