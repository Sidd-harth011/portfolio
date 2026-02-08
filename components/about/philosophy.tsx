"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const principles = [
  {
    number: "01",
    title: "Design with Purpose",
    description:
      "Every element serves a function. I create designs that are not just beautiful, but strategically crafted to communicate your brand message.",
  },
  {
    number: "02",
    title: "Words that Connect",
    description:
      "Great content builds bridges between brands and people. I write with empathy, clarity, and the intent to inspire action.",
  },
  {
    number: "03",
    title: "Collaboration First",
    description:
      "The best work happens when we work together. I believe in open communication, creative dialogue, and shared vision.",
  },
];

export function Philosophy() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-24 bg-card border-y border-border">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className={cn(
              "inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3",
              !isVisible && "opacity-0",
              isVisible && "animate-fade-up"
            )}
          >
            Philosophy
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance",
              !isVisible && "opacity-0",
              isVisible && "animate-fade-up delay-100"
            )}
          >
            How I Approach Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <div
              key={p.number}
              className={cn(
                "relative p-8 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-500 group",
                !isVisible && "opacity-0",
                isVisible && "animate-fade-up",
                i === 1 && "delay-200",
                i === 2 && "delay-400"
              )}
            >
              <span className="text-5xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {p.number}
              </span>
              <h3 className="mt-4 text-lg font-serif font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
