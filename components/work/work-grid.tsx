"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const categories = ["All", "Design", "Branding", "Content", "Social Media"];

const projects = [
  {
    title: "Luxe Botanica",
    category: "Branding",
    type: "Brand Identity",
    image: "/images/work-branding.jpg",
    description:
      "Complete brand identity system for a premium organic skincare line, including logo, packaging, and visual language.",
    tags: ["Logo", "Packaging", "Guidelines"],
  },
  {
    title: "Muse Magazine",
    category: "Design",
    type: "Editorial Design",
    image: "/images/work-editorial.jpg",
    description:
      "Art direction and layout design for a quarterly cultural and arts magazine spanning 120+ pages.",
    tags: ["Layout", "Typography", "Print"],
  },
  {
    title: "Zest Digital Campaign",
    category: "Social Media",
    type: "Social Media Design",
    image: "/images/work-social.jpg",
    description:
      "Full social media campaign design for a tech startup launch, including templates, stories, and ad creatives.",
    tags: ["Instagram", "Ads", "Templates"],
  },
  {
    title: "Artisan Roasters",
    category: "Branding",
    type: "Packaging Design",
    image: "/images/work-packaging.jpg",
    description:
      "Premium packaging design for a specialty coffee brand, blending minimalist aesthetics with artisanal warmth.",
    tags: ["Packaging", "Label", "Branding"],
  },
  {
    title: "Resonance Festival",
    category: "Design",
    type: "Poster Design",
    image: "/images/work-poster.jpg",
    description:
      "Bold, eye-catching poster series for an annual music and arts festival with experimental typography.",
    tags: ["Poster", "Typography", "Print"],
  },
  {
    title: "Vela Wellness",
    category: "Content",
    type: "Web Design & Content",
    image: "/images/work-website.jpg",
    description:
      "Website design and full content strategy including SEO-optimized copy for a wellness brand.",
    tags: ["Web Design", "Copywriting", "SEO"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        "group cursor-pointer",
        !isVisible && "opacity-0",
        isVisible && "animate-fade-up",
        index % 3 === 1 && "delay-200",
        index % 3 === 2 && "delay-400"
      )}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={450}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                View Project
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">
              {project.type}
            </span>
            <span className="text-xs text-muted-foreground">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Selected Work"
          description="A curated collection of projects spanning graphic design, brand identity, and content creation."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-full transition-all",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
