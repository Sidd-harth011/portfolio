"use client";

const items = [
  "Graphic Design",
  "Brand Identity",
  "Content Writing",
  "Visual Storytelling",
  "Typography",
  "Social Media",
  "Copywriting",
  "Editorial Design",
  "Packaging Design",
  "Logo Design",
];

export function MarqueeStrip() {
  return (
    <section className="py-6 border-y border-border overflow-hidden bg-card">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center mx-8 text-sm">
            <span className="text-muted-foreground font-medium uppercase tracking-wider">
              {item}
            </span>
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </section>
  );
}
