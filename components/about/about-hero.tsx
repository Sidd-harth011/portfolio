"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function AboutHero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative",
              !isVisible && "opacity-0",
              isVisible && "animate-slide-in-left"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-workspace.jpg"
                alt="Siddharth's creative workspace"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/30 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div
              className={cn(
                !isVisible && "opacity-0",
                isVisible && "animate-slide-in-right"
              )}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                About Me
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
                Crafting Stories Through Design & Words
              </h1>
            </div>

            <div
              className={cn(
                "space-y-4",
                !isVisible && "opacity-0",
                isVisible && "animate-slide-in-right delay-200"
              )}
            >
              <p className="text-base text-muted-foreground leading-relaxed">
                I&apos;m Siddharth, a multidisciplinary creative based in India.
                With over 5 years in the creative industry, I specialize in
                graphic design and content writing that brings brands to life.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My approach combines visual storytelling with strategic content
                creation. I believe that great design speaks volumes, and great
                writing amplifies that voice. Together, they create experiences
                that resonate deeply with audiences.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                When I&apos;m not designing or writing, you&apos;ll find me
                exploring typography trends, reading about behavioral psychology,
                or sketching ideas in my notebook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
