"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-4xl px-6 lg:px-8 text-center"
      >
        <div
          className={cn(
            "relative p-12 lg:p-16 rounded-2xl border border-border bg-card overflow-hidden",
            !isVisible && "opacity-0",
            isVisible && "animate-scale-in"
          )}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Let&apos;s Collaborate
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
              Have a project in mind?
            </h2>
            <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all hover:scale-105 active:scale-95"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
