"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        !isVisible && "opacity-0"
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3",
            isVisible && "animate-fade-up"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance",
          isVisible && "animate-fade-up delay-100"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            isVisible && "animate-fade-up delay-200"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
