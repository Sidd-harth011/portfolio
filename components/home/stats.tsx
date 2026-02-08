"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "K+", label: "Words Written" },
];

function AnimatedNumber({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="text-4xl md:text-5xl font-serif font-bold text-primary tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 bg-card border-y border-border">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "text-center space-y-2",
                !isVisible && "opacity-0",
                isVisible && "animate-fade-up",
                i === 1 && "delay-100",
                i === 2 && "delay-200",
                i === 3 && "delay-300"
              )}
            >
              <AnimatedNumber
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
