"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const designSkills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Figma", level: 88 },
  { name: "After Effects", level: 75 },
  { name: "InDesign", level: 85 },
];

const writingSkills = [
  { name: "SEO Writing", level: 92 },
  { name: "Copywriting", level: 88 },
  { name: "Blog & Articles", level: 95 },
  { name: "Social Media Content", level: 90 },
  { name: "Brand Storytelling", level: 85 },
];

function SkillBar({
  name,
  level,
  isVisible,
  delay,
}: {
  name: string;
  level: number;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tools & Expertise"
          description="The tools and skills I use to bring creative visions to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Design Skills */}
          <div
            className={cn(
              "space-y-6",
              !isVisible && "opacity-0",
              isVisible && "animate-slide-in-left"
            )}
          >
            <h3 className="text-lg font-serif font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Design
            </h3>
            <div className="space-y-5">
              {designSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isVisible={isVisible}
                  delay={i * 150}
                />
              ))}
            </div>
          </div>

          {/* Writing Skills */}
          <div
            className={cn(
              "space-y-6",
              !isVisible && "opacity-0",
              isVisible && "animate-slide-in-right"
            )}
          >
            <h3 className="text-lg font-serif font-bold text-foreground flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Writing
            </h3>
            <div className="space-y-5">
              {writingSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isVisible={isVisible}
                  delay={i * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
