"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Luxe Botanica",
    category: "Brand Identity",
    image: "/images/work-branding.jpg",
    description: "Complete brand identity for a premium skincare line.",
  },
  {
    title: "Muse Magazine",
    category: "Editorial Design",
    image: "/images/work-editorial.jpg",
    description: "Art direction and layout for a cultural magazine.",
  },
  {
    title: "Zest Digital",
    category: "Social Media",
    image: "/images/work-social.jpg",
    description: "Social media campaign design for a tech startup.",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-500 hover:border-primary/30",
        !isVisible && "opacity-0",
        isVisible && "animate-fade-up",
        index === 1 && "delay-200",
        index === 2 && "delay-400"
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={450}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500" />
      </div>
      <div className="p-6 space-y-2">
        <span className="text-xs text-primary font-semibold uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Selected Work"
          title="Projects I'm Proud Of"
          description="A curated selection of recent projects spanning graphic design and content creation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary hover:border-muted-foreground/30 transition-all hover:scale-105 active:scale-95"
          >
            View All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
