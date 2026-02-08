"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your brand, goals, audience, and competitive landscape to build a solid creative foundation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Based on insights gathered, I develop a creative strategy that aligns your visual identity and content with your business objectives.",
  },
  {
    step: "03",
    title: "Creation",
    description:
      "The magic happens here. I bring concepts to life through design and writing, iterating based on your feedback until it's perfect.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Final assets are delivered in all required formats with documentation. I ensure a smooth handoff and ongoing support.",
  },
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 bg-card border-y border-border">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="How I Work"
          description="A streamlined process designed to deliver exceptional results efficiently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={cn(
                "relative",
                !isVisible && "opacity-0",
                isVisible && "animate-fade-up",
                i === 1 && "delay-200",
                i === 2 && "delay-400",
                i === 3 && "delay-600"
              )}
            >
              {/* Connecting line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px">
                  <div
                    className={cn(
                      "h-full bg-border",
                      isVisible && "animate-line-grow",
                      i === 0 && "delay-300",
                      i === 1 && "delay-500",
                      i === 2 && "delay-700"
                    )}
                  />
                </div>
              )}

              <div className="space-y-4">
                <span className="text-4xl font-serif font-bold text-primary/30">
                  {step.step}
                </span>
                <h3 className="text-lg font-serif font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
