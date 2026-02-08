"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const experiences = [
  {
    year: "2024 - Present",
    title: "Freelance Creative Director",
    company: "Self-employed",
    description:
      "Leading end-to-end creative projects for diverse clients, from brand strategy to visual execution and content creation.",
  },
  {
    year: "2022 - 2024",
    title: "Senior Graphic Designer",
    company: "Creative Agency",
    description:
      "Directed visual identity projects and managed a team of junior designers. Produced content strategies for 20+ brands.",
  },
  {
    year: "2021 - 2022",
    title: "Content Writer & Designer",
    company: "Digital Marketing Firm",
    description:
      "Created compelling copy and visual content for social media campaigns, blogs, and marketing materials.",
  },
  {
    year: "2020 - 2021",
    title: "Junior Graphic Designer",
    company: "Design Studio",
    description:
      "Started my professional journey creating brand identities, packaging designs, and editorial layouts.",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experiences)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex gap-6 lg:gap-10 pb-12 last:pb-0",
        !isVisible && "opacity-0",
        isVisible && (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right")
      )}
    >
      {/* Line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5 ring-4 ring-primary/20" />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Content */}
      <div className="pb-8 space-y-2">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {item.year}
        </span>
        <h3 className="text-lg font-serif font-bold text-foreground">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-muted-foreground">
          {item.company}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Creative Journey"
          description="A timeline of growth, learning, and creative evolution."
        />

        <div className="mt-12">
          {experiences.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
